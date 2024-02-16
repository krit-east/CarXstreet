const dotenv = require("dotenv");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

const rename = async (message) => {
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
    const result = await login.json();
    const getUserData = await fetch(`${process.env.ProfilesApi}`, {
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
    if (getUserData.status == 200) {
      var udata = await getUserData.json();
      udata.d.data.nickname = message[2].value;
      const setNewNickname = await fetch(`${process.env.ProfilesApi}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + result.d.token,
          "User-Agent": "CarXStreet/626 CFNetwork/1399 Darwin/22.1.0",
        },
        body: JSON.stringify(udata.d.data),
      });
      if (setNewNickname.status == 200) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { rename };
