const dotenv = require("dotenv");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

const pump = async (message) => {
  const login = await fetch(`${process.env.LoginApi}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'UnityPlayer/2021.3.19f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate',
                'X-Unity-Version': '2021.3.19f1',
    },
    body: new URLSearchParams({
      username: message[0].value,
      password: message[1].value,
      project: "STREET",
    }),
  });

  if (login.status == 200) {
    const loginResult = await login.json();
    const player_info = await fetch(`${process.env.ProfilesApi}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + loginResult.d.token,
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'UnityPlayer/2021.3.19f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'X-Unity-Version': '2021.3.19f1',
      },
    });
    const player_result = await player_info.json();
    player_result.d.data.resources = {
      hard: {
        amount: 500000000,
      },
      soft: {
        amount: 500000000,
      },
      experience: {
        amount: 95000,
      },
    };
    const registerItem = await fetch(`${process.env.ProfilesApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + loginResult.d.token,
        "x-unity-version": "2021.3.19f1",
        "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
      },
      body: JSON.stringify(player_result.d.data),
    });
    if (registerItem.status == 200) {
      return true;
    }
  }
  return false;
};

const nitro = async (message) => {
  const login = await fetch(`${process.env.LoginApi}`, {
    method: "POST",
    headers: {
      "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: message[0].value,
      password: message[1].value,
      project: "STREET",
    }),
  });
  if (login.status == 200) {
    const loginResult = await login.json();
    const player_info = await fetch(`${process.env.ProfilesApi}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + loginResult.d.token,
        "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
      },
    });
    const player_result = await player_info.json();
    Object.keys(player_result.d.data.cars.items).forEach((e) => {
      player_result.d.data.cars.items[
        e
      ].consumed_resources.nitro.max_amount = 1000000;
      player_result.d.data.cars.items[
        e
      ].consumed_resources.nitro.amount = 1000000;
    });
    const registerItem = await fetch(`${process.env.ProfilesApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + loginResult.d.token,
        "x-unity-version": "2021.3.19f1",
        "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
      },
      body: JSON.stringify(player_result.d.data),
    });
    if (registerItem.status == 200) {
      return true;
    }
  }
  return false;
};

module.exports = { pump, nitro };
