const dotenv = require("dotenv");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

const map = async (message) => {
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

    player_result.d.data.shop_owned_packs = { keys: ["special_game_world_part_mountain_iap_full"] };
    player_result.d.data.game_world_parts = {
      keys: ["industrial", "midtown", "suburb", "port", "mountain"],
    };

    player_result.d.data.locations.default.location_objects_set = {
      keys: [
        "styling_01",
        "styling_02",
        "styling_03",
        "styling_04",
        "tuning_06",
        "styling_05",
        "tuning_01",
        "tuning_02",
        "tuning_03",
        "tuning_04",
        "tuning_05",
        "gas_station_3",
        "gas_station_4",
        "gas_station_5",
        "gas_station_6",
        "gas_station_7",
        "gas_station_2",
        "gas_station_1",
        "gas_station_8",
        "gas_station_9",
        "gas_station_10",
        "gas_station_11",
        "gas_station_12",
        "gas_station_13",
        "gas_station_14",
        "gas_station_15",
        "gas_station_16",
        "gas_station_0",
        "gas_station_17",
        "gas_station_18",
        "apartment_01",
        "apartment_51",
        "apartment_95",
        "apartment_industrial_SP",
        "apartment_midtown_SP",
        "apartment_midtown2_SP",
        "apartment_midtown3_SP",
        "club_white_tigers",
        "club_chimeras",
        "club_pitons",
        "club_drift_united",
        "club_pythons",
        "club_speedline_syndicate",
        "club_streethunters",
        "Industrial_apartment_1",
        "Industrial_apartment_2",
        "Industrial_apartment_3",
        "Industrial_apartment_6",
        "Midtown_apartment_1",
        "Midtown_apartment_3",
        "Midtown_apartment_4",
        "Midtown_apartment_7",
        "Midtown_apartment_8",
        "Midtown_apartment_9",
        "Midtown_apartment_10",
        "Midtown_apartment_11",
        "Midtown_apartment_12",
        "Prigorod_apartment_1",
        "Prigorod_apartment_2",
        "Prigorod_apartment_3",
        "Prigorod_apartment_4",
        "Prigorod_apartment_5",
        "Prigorod_apartment_7",
        "car_showroom_0",
        "car_showroom_1",
        "car_showroom_2",
        "industrial_race_simple_ring_01dima_net_duel",
        "midtown_race_simple_ring_DM020_net_duel",
        "midtown_race_simple_sprint_DM023_net_duel",
        "industrial_race_farm_sprint_ierg02",
        "industrial_race_farm_sprint_IV001",
        "industrial_race_farm_sprint_st06",
        "industrial_race_farm_sprint_st05",
        "midtown_race_farm_drift_DM14",
        "midtown_race_farm_drift_DM01",
        "midtown_race_simple_sprint_DM043_net_duel",
        "midtown_race_simple_sprint_DM044_net_duel",
        "midtown_race_simple_sprint_DM045_net_duel",
        "midtown_race_simple_sprint_DM046_net_duel",
        "port_race_simple_sprint_DM01_net_duel",
        "club_falcons_outlaws",
        "club_burnout_rangers",
        "club_savage",
        "port_race_farm_free_drift_AO03",
        "prigorod_race_farm_free_drift_AO01",
        "car_delivery_business",
        "car_delivery_low",
        "car_delivery_middle",
        "car_delivery_high",
        "part_delivery_business",
        "part_delivery_low",
        "midtown_race_farm_drift_DM15",
        "Mountain_apartment_1",
        "Mountain_apartment_2",
        "Mountain_apartment_3",
        "Mountain_apartment_4",
        "Mountain_apartment_5",
        "Mountain_apartment_6",
        "Mountain_apartment_7",
        "Mountain_apartment_8",
        "Mountain_apartment_9",
        "Mountain_apartment_11",
        "Mountain_apartment_13",
        "Mountain_apartment_14",
        "styling_06",
        "styling_07",
        "tuning_07",
        "tuning_08",
        "tuning_09",
        "tuning_10",
        "tuning_11",
        "club_21_tribe",
        "club_road_runner",
        "club_black_lotus",
        "gas_station_19",
        "gas_station_20",
        "gas_station_21",
        "gas_station_22",
        "gas_station_23",
        "gas_station_24",
        "gas_station_25",
        "gas_station_26",
        "gas_station_27",
        "mountain_race_farm_drift_DM001",
        "mountain_race_farm_drift_DM005",
        "mountain_race_farm_sprint_ST001",
        "mountain_race_farm_sprint_ST004",
        "mountain_race_farm_free_drift_AO01",
        "mountain_race_farm_free_drift_AO02",
        "Mountain_apartment_15",
        "Mountain_apartment_16",
        "Mountain_apartment_17",
        "Mountain_apartment_18",
        "Mountain_apartment_19",
        "gas_station_28",
        "gas_station_29",
        "gas_station_30",
        "gas_station_31",
        "gas_station_32",
        "gas_station_33",
        "tuning_12",
        "tuning_13",
        "styling_08",
        "club_western_sierra"
    ]                    
    }                    

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

module.exports = { map };
