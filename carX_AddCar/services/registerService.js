const dotenv = require("dotenv");

const { v4: uuidv4 } = require("uuid");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

var registerData = {
    cars: {
        seed: 1001,
        items: {
          1000: {
            tuning: {
                cells: {
                  0: {
                    stack: {
                      id: "engine_datsun620",
                      _lv: {
                        value: {
                          cells: {
                            0: {
                              stack: {
                                id: "engine_block_stock",
                              },
                            },
                            1: {
                              stack: {
                                id: "engine_camshaft_stock",
                              },
                            },
                            2: {
                              stack: {
                                id: "engine_cooling_stock",
                              },
                            },
                            3: {
                              stack: {
                                id: "engine_cylinder_head_stock",
                              },
                            },
                            4: {
                              stack: {
                                id: "engine_ecu_stock",
                              },
                            },
                            5: {
                              stack: {
                                id: "engine_exhaust_manifold_stock",
                              },
                            },
                            6: {
                              stack: {
                                id: "engine_exhaust_stock",
                              },
                            },
                            7: {
                              stack: {
                                id: "engine_fuel_system_stock",
                              },
                            },
                            8: {
                              stack: {
                                id: "engine_intake_manifold_stock",
                              },
                            },
                            9: {
                              stack: {
                                id: "engine_turbine_stock1",
                              },
                            },
                          },
                          resources: {
                            resource: {
                              amount: 1,
                            },
                            repair_limit: {
                              amount: 1,
                            },
                            throttle_limit: {
                              amount: 1,
                            },
                          },
                          parts_collection: {
                            seed: 0,
                            items: {},
                          },
                        },
                      },
                    },
                  },
                  1: {
                    stack: {
                      id: "body_datsun620",
                      _lv: {
                        value: {
                          cells: {
                            0: {
                              stack: {
                                id: "body_weight_reduction_0",
                              },
                            },
                            1: {
                              stack: {
                                id: "body_front_aero_0",
                              },
                            },
                            2: {
                              stack: {
                                id: "body_rear_aero_0",
                              },
                            },
                            3: {
                              stack: {
                                id: "body_fuel_tank_0",
                              },
                            },
                            4: {
                              stack: {
                                id: "body_strengthening_0",
                              },
                            },
                          },
                          resources: {
                            resource: {
                              amount: 1,
                            },
                            repair_limit: {
                              amount: 1,
                            },
                          },
                          parts_collection: {
                            seed: 0,
                            items: {},
                          },
                        },
                      },
                    },
                  },
                  2: {
                    stack: {
                      id: "transmission_datsun620",
                      _lv: {
                        value: {
                          cells: {
                            0: {
                              stack: {
                                id: "transmission_gearbox_stock",
                              },
                            },
                            1: {
                              stack: {
                                id: "transmission_clutch_stock",
                              },
                            },
                            2: {
                              stack: {
                                id: "transmission_differential_viscous_2_1",
                              },
                            },
                          },
                          resources: {
                            resource: {
                              amount: 1,
                            },
                            repair_limit: {
                              amount: 1,
                            },
                          },
                          parts_collection: {
                            seed: 0,
                            items: {},
                          },
                        },
                      },
                    },
                  },
                  3: {
                    stack: {
                      id: "suspension_datsun620",
                      _lv: {
                        value: {
                          cells: {
                            0: {
                              stack: {
                                id: "suspension_springs_front_stock",
                              },
                            },
                            1: {
                              stack: {
                                id: "suspension_springs_rear_stock",
                              },
                            },
                            2: {
                              stack: {
                                id: "suspension_shocks_front_stock",
                              },
                            },
                            3: {
                              stack: {
                                id: "suspension_shocks_rear_stock",
                              },
                            },
                            4: {
                              stack: {
                                id: "suspension_stabs_front_stock",
                              },
                            },
                            5: {
                              stack: {
                                id: "suspension_stabs_rear_stock",
                              },
                            },
                            6: {
                              stack: {
                                id: "suspension_arms_front_stock",
                              },
                            },
                            7: {
                              stack: {
                                id: "suspension_arms_rear_stock",
                              },
                            },
                            8: {
                              stack: {
                                id: "suspension_brakes_stock",
                              },
                            },
                          },
                          resources: {
                            resource: {
                              amount: 1,
                            },
                            repair_limit: {
                              amount: 1,
                            },
                          },
                          parts_collection: {
                            seed: 0,
                            items: {},
                          },
                        },
                      },
                    },
                  },
                  4: {
                    stack: {
                      id: "default_wheels",
                      _lv: {
                        value: {
                          cells: {
                            0: {
                              stack: {
                                id: "wheel_rim_front_29",
                              },
                            },
                            1: {
                              stack: {
                                id: "wheel_tyre_front_2",
                              },
                            },
                            2: {
                              stack: {
                                id: "wheel_rim_rear_29",
                              },
                            },
                            3: {
                              stack: {
                                id: "wheel_tyre_rear_2",
                              },
                            },
                            4: {
                              stack: {
                                id: "wheel_spacers_front_stock",
                              },
                            },
                            5: {
                              stack: {
                                id: "wheel_spacers_rear_stock",
                              },
                            },
                          },
                          resources: {
                            resource: {
                              amount: 1,
                            },
                            repair_limit: {
                              amount: 1,
                            },
                          },
                          parts_collection: {
                            seed: 0,
                            items: {},
                          },
                        },
                      },
                    },
                  },
                  5: {
                    stack: {
                      id: "styling_stock",
                      _lv: {
                        value: {
                          cells: {
                            styling_cage: {
                              stack: {
                                id: "datsun620_cg_sk_37",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_doors: {
                              stack: {
                                id: "datsun620_dr_sk_21",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_trunk: {
                              stack: {
                                id: "datsun620_tr_sk_34",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_bonnet: {
                              stack: {
                                id: "datsun620_bn_sk_6",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_chassis: {
                              stack: {
                                id: "datsun620_ch_sk_20",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_exhaust: {
                              stack: {
                                id: "datsun620_ex_sk_24",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_mirrors: {
                              stack: {
                                id: "datsun620_mr_sk_33",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_shifter: {
                              stack: {
                                id: "datsun620_sh_sk_72",
                                _lv: {
                                  value: {
                                    paints: {
                                      handle: {
                                        color: "#9F9F9FFF",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            styling_spoiler: {
                              stack: {
                                id: "datsun620_sp_sk_41",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_neon_rear: {
                              stack: {
                                id: "neon_rear_empty",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#000000FF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_neon_side: {
                              stack: {
                                id: "neon_side_empty",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#000000FF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_seat_left: {
                              stack: {
                                id: "datsun620_sl_sk_50",
                                _lv: {
                                  value: {
                                    paints: {
                                      base: {
                                        color: "#373737FF",
                                      },
                                      bottom: {
                                        color: "#373737FF",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            styling_wheel_rim: {
                              stack: {
                                id: "wheel_rim_378",
                                _lv: {
                                  value: {
                                    rim_paint: {
                                      color: "#C2C4C6FF",
                                    },
                                    spokes_paint: {
                                      color: "#C2C4C6FF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_hand_brake: {
                              stack: {
                                id: "datsun620_hb_sk_66",
                                _lv: {
                                  value: {
                                    paints: {
                                      handle: {
                                        color: "#9F9F9FFF",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            styling_neon_front: {
                              stack: {
                                id: "neon_front_empty",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#000000FF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_seat_right: {
                              stack: {
                                id: "datsun620_sr_sk_51",
                                _lv: {
                                  value: {
                                    paints: {
                                      base: {
                                        color: "#373737FF",
                                      },
                                      bottom: {
                                        color: "#373737FF",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            styling_suspension: {
                              stack: {
                                id: "suspension_mac_pherson",
                                _lv: {
                                  value: {
                                    paints: {
                                      SuspensionArm: {
                                        color: "#5C5C5CFF",
                                      },
                                      SuspensionRack: {
                                        color: "#5C5C5CFF",
                                      },
                                      SuspensionSpring: {
                                        color: "#5C5C5CFF",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            styling_brake_rotor: {
                              stack: {
                                id: "brake_rotor_1",
                              },
                            },
                            styling_bumper_rear: {
                              stack: {
                                id: "datsun620_br_sk_35",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_lights_rear: {
                              stack: {
                                id: "datsun620_lr_sk_29",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_bumper_front: {
                              stack: {
                                id: "datsun620_bf_sk_12",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_lights_front: {
                              stack: {
                                id: "datsun620_lf_sk_27",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#003A7BFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_brake_caliper: {
                              stack: {
                                id: "brake_caliper_1",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#5C5C5CFF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_steering_wheel: {
                              stack: {
                                id: "datsun620_sw_sk_60",
                                _lv: {
                                  value: {
                                    paints: {
                                      spokes: {
                                        color: "#9F9F9FFF",
                                      },
                                      strings: {
                                        color: "#373737FF",
                                      },
                                      alcantar: {
                                        color: "#2B2B2BFF",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            styling_general_interior: {
                              stack: {
                                id: "datsun620_ir_sk_99",
                              },
                            },
                            styling_exhaust_flame_nitro: {
                              stack: {
                                id: "exhaust_flame_nitro_1",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#F8A9A4FF",
                                    },
                                  },
                                },
                              },
                            },
                            styling_exhaust_flame_back_fire: {
                              stack: {
                                id: "exhaust_flame_back_fire_1",
                                _lv: {
                                  value: {
                                    paint: {
                                      color: "#F8A9A4FF",
                                    },
                                  },
                                },
                              },
                            },
                          },
                          glass_paint: {
                            color: "#FFFFFFFF",
                            material: 7,
                          },
                          smoke_paint: {
                            color: "#FFFFFFFF",
                          },
                          headlight_paint: {
                            color: "#FFFFFFFF",
                          },
                          fog_light_glass_paint: {
                            color: "#FFFFFFFF",
                            material: 7,
                          },
                          rear_light_glass_paint: {
                            color: "#FFFFFFFF",
                            material: 7,
                          },
                          front_light_glass_paint: {
                            color: "#FFFFFFFF",
                            material: 7,
                          },
                        },
                      },
                    },
                  },
                  6: {
                    stack: {
                      id: "nitro_stock",
                      _lv: {
                        value: {
                          parts_collection: {
                            seed: 0,
                            items: {},
                          },
                        },
                      },
                    },
                  },
                },
              },
              vinyls: {
                seed: 0,
                items: {},
              },
              body_kit: "datsun620_stock_bkit",
              __desc_id: "datsun620",
              resources: {
                datsun620_stock_bkit_sale_factor: {
                  amount: 1,
                },
              },
              body_kit_set: {
                keys: ["datsun620_stock_bkit"],
              },
              body_part_set: {
                keys: [
                  "datsun620_ch_sk_20",
                  "datsun620_bf_sk_12",
                  "datsun620_br_sk_35",
                  "datsun620_dr_sk_21",
                  "datsun620_mr_sk_33",
                  "datsun620_bn_sk_6",
                  "datsun620_tr_sk_34",
                  "datsun620_lf_sk_27",
                  "datsun620_lr_sk_29",
                  "datsun620_ex_sk_24",
                  "datsun620_cg_sk_37",
                  "datsun620_sp_sk_41",
                  "datsun620_sl_sk_50",
                  "datsun620_sr_sk_51",
                  "datsun620_sw_sk_60",
                  "datsun620_hb_sk_66",
                  "datsun620_sh_sk_72",
                  "datsun620_db_sk_81",
                  "datsun620_ir_sk_99",
                  "wheel_rim_378",
                ],
              },
              consumed_resources: {
                nitro: {
                  ts: 1683719680,
                  amount: 1000000,
                  max_amount: 1000000,
                },
                gasoline: {
                  ts: 1683719680,
                  amount: 40,
                  max_amount: 40,
                },
                statistic_drive_time: {
                  amount: 470.4347,
                },
                statistic_total_distance: {
                  amount: 208.2843,
                },
              },
            },
          },
        },
  quests: {
    car_choice_intro: {
      rewarded: true,
      completed: true,
    },
  },
  nickname: "CHAKRIT",
  races_ts: {
    keys: [
      "industrial_race_farm_sprint_stStart",
      "industrial_race_farm_sprint_st06",
      "midtown_race_farm_sprint_DM03",
      "midtown_race_farm_sprint_DM01",
      "midtown_race_farm_drift_DM01",
      "midtown_race_farm_drift_DM15",
      "car_delivery_low",
      "part_delivery_low",
      "midtown_race_farm_drift_DM04",
      "midtown_race_farm_drift_DM14",
      "port_race_farm_free_drift_AO01",
    ],
    values: [
      1670651215, 1670651215, 1670651215, 1670651215, 1670651215, 1670651215, 0,
      0, 1695876842, 1695876842, 1695876842,
    ],
  },
  locations: {
    default: {
      location_objects_set: {
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
          "industrial_race_farm_sprint_stStart",
          "industrial_race_farm_sprint_st06",
          "midtown_race_farm_sprint_DM03",
          "midtown_race_farm_sprint_DM01",
          "midtown_race_farm_drift_DM01",
          "midtown_race_farm_drift_DM15",
          "industrial_race_simple_ring_01dima_net_duel",
          "midtown_race_simple_ring_DM020_net_duel",
          "midtown_race_simple_sprint_DM023_net_duel",
          "club_speedline_syndicate",
          "midtown_race_simple_sprint_DM043_net_duel",
          "midtown_race_simple_sprint_DM044_net_duel",
          "midtown_race_simple_sprint_DM045_net_duel",
          "midtown_race_simple_sprint_DM046_net_duel",
          "port_race_simple_sprint_DM01_net_duel",
          "club_falcons_outlaws",
          "club_burnout_rangers",
          "club_savage",
          "car_delivery_business",
          "car_delivery_low",
          "part_delivery_business",
          "part_delivery_low",
          "midtown_race_farm_drift_DM04",
          "midtown_race_farm_drift_DM14",
          "port_race_farm_free_drift_AO01",
        ],
      },
    },
  },
  resources: {
    hard: {
      amount: 50000,
    },
    soft: {
      amount: 50000000,
    },
    experience: {
      amount: 92050,
    },
  },
  car_models: {
    keys: ["toyotasupra2020", "datsun620"],
    values: [0, 1],
  },
  statistics: {
    statistic_max_speed: {
      amount: 78.78305,
    },
    statistic_total_hard: {
      amount: 10000000000,
    },
    statistic_total_soft: {
      amount: 10001240000,
    },
    statistic_app_launches: {
      amount: 8,
    },
    statistic_playing_time: {
      amount: 486.8912,
    },
    statistic_total_distance: {
      amount: 208.7553,
    },
    statistic_simple_gasoline_consumed: {
      amount: 0.2466162,
    },
  },
  data_version: 40,
  real_estates: {
    apartment_95: {
      is_bought: true,
    },
  },
  current_car_id: "1000",
  race_generators: {
    farm_races: {
      races_set: {
        keys: [
          "industrial_race_farm_sprint_stStart",
          "industrial_race_farm_sprint_st06",
          "midtown_race_farm_sprint_DM03",
          "midtown_race_farm_sprint_DM01",
          "midtown_race_farm_drift_DM01",
          "midtown_race_farm_drift_DM15",
          "midtown_race_farm_drift_DM04",
          "midtown_race_farm_drift_DM14",
          "port_race_farm_free_drift_AO01",
        ],
      },
    },
  },
  business_counter: {
    keys: ["car_delivery_low", "part_delivery_low"],
    values: [1695876842, 1695876842],
  },
  game_world_parts: {
    keys: ["industrial", "midtown", "suburb", "port", "ındustrial"],
  },
  real_estate_slots: {
    apartment_95_slot_0: {
      unlocked: true,
    },
  },
  collectables_events: {
    seed: 1,
    items: {
      0: {
        __desc_id: "default",
        event_name: "first_event",
      },
    },
  },
  location_object_enter: {
    keys: ["gas_station_3"],
    values: [8],
  },
  model_upgrade_version: 1,
  styling_custom_paints_presets: {
    seed: 0,
    items: {},
  },
};

const register = async (message, map) => {

  const registerReq = await fetch(`${process.env.RegisterApi}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      deviceId: uuidv4(),
      username: message[0].value,
      password: message[1].value,
      project: "STREET",
    }),
  });

  if (registerReq.status == 200) {
    const registerRes = await registerReq.json();
    registerData.nickname = message[2].value;
    if (map) {
      
      registerData.game_world_parts = {
        keys: ["industrial", "midtown", "suburb", "port", "mountain"],
      };
      registerData.locations.default.location_objects_set.keys = [
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
      ];
    }
    const registerItem = await fetch(`${process.env.ProfilesApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + registerRes.d.token,
        "x-unity-version": "2021.3.19f1",
        "User-Agent": "CarXStreet/708 CFNetwork/1474 Darwin/23.0.0",
      },
      body: JSON.stringify(registerData),
    });
    if (registerItem.status == 200) {
      return true;
    }
  }
  return false;
};

module.exports = { register };
