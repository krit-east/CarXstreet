const dotenv = require("dotenv");
const { player_result } = require("./player_result");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
exports.fetch = fetch;

dotenv.config();

// create


const lambo = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      "tuning": {
        "cells": {
          "0": {
            "stack": {
              "id": "engine_lamborghinidiablo",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "engine_block_4",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_low": {
                                "tune_amount": 30.17,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "engine_camshaft_9",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_high": {
                                "tune_amount": 20.51,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "engine_cooling_stock"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "engine_cylinder_head_8",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_mid": {
                                "tune_amount": 43.53,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "engine_ecu_8",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_rev_limiter": {
                                "tune_amount": 558.8867,
                                "right_tune_steps": 6
                              },
                              "engine_turbo_pressure": {
                                "tune_amount": 3.5,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "engine_exhaust_manifold_4"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "engine_exhaust_4"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "engine_fuel_system_4"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "engine_intake_manifold_7",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_fall": {
                                "tune_amount": 1013.761,
                                "right_tune_steps": 5
                              }
                            }
                          }
                        }
                      }
                    },
                    "9": {
                      "stack": {
                        "id": "engine_turbine_3"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    },
                    "throttle_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "engine_ecu_2": {
                        "__desc_id": "engine_ecu_2"
                      },
                      "engine_block_1": {
                        "__desc_id": "engine_block_1"
                      },
                      "engine_exhaust_1": {
                        "__desc_id": "engine_exhaust_1"
                      },
                      "engine_turbine_0": {
                        "__desc_id": "engine_turbine_0"
                      },
                      "engine_camshaft_1": {
                        "__desc_id": "engine_camshaft_1"
                      },
                      "engine_fuel_system_2": {
                        "__desc_id": "engine_fuel_system_2"
                      },
                      "engine_cylinder_head_2": {
                        "__desc_id": "engine_cylinder_head_2"
                      },
                      "engine_intake_manifold_0": {
                        "__desc_id": "engine_intake_manifold_0"
                      },
                      "engine_exhaust_manifold_2": {
                        "__desc_id": "engine_exhaust_manifold_2"
                      }
                    }
                  }
                }
              }
            }
          },
          "1": {
            "stack": {
              "id": "body_lamborghinidiablo",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "body_weight_reduction_5"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "body_front_aero_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "aero_sx": {
                                "tune_amount": -7,
                                "left_tune_steps": 4
                              },
                              "aero_front_downforce": {
                                "tune_amount": 3,
                                "right_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "body_rear_aero_0"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "body_fuel_tank_0"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "body_strengthening_0"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "body_rear_aero_4": {
                        "__desc_id": "body_rear_aero_4"
                      },
                      "body_front_aero_4": {
                        "__desc_id": "body_front_aero_4"
                      },
                      "body_weight_reduction_0": {
                        "__desc_id": "body_weight_reduction_0"
                      }
                    }
                  }
                }
              }
            }
          },
          "2": {
            "stack": {
              "id": "transmission_lamborghinidiablo",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "transmission_gearbox_5"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "transmission_clutch_5"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "transmission_differential_clutch_2_2"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "transmission_clutch_stock": {
                        "__desc_id": "transmission_clutch_stock"
                      },
                      "transmission_gearbox_stock": {
                        "__desc_id": "transmission_gearbox_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "3": {
            "stack": {
              "id": "suspension_lamborghinidiablo",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "suspension_springs_front_1"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "suspension_springs_rear_3"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "suspension_shocks_front_1"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "suspension_shocks_rear_stock"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "suspension_stabs_front_2"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "suspension_stabs_rear_2"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "suspension_arms_front_4",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_lock": {
                                "tune_amount": 1.5,
                                "right_tune_steps": 1
                              },
                              "suspension_front_camber": {
                                "tune_amount": -2,
                                "left_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "suspension_arms_rear_2"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "suspension_brakes_3"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "4": {
            "stack": {
              "id": "default_wheels",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_rim_front_46"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "wheel_tyre_front_9"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "wheel_rim_rear_46"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "wheel_tyre_rear_5"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "wheel_spacers_front_4"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "wheel_spacers_rear_4"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "wheel_rim_rear_44": {
                        "__desc_id": "wheel_rim_rear_44"
                      },
                      "wheel_rim_front_22": {
                        "__desc_id": "wheel_rim_front_22"
                      },
                      "wheel_tyre_front_5": {
                        "__desc_id": "wheel_tyre_front_5"
                      }
                    }
                  }
                }
              }
            }
          },
          "5": {
            "stack": {
              "id": "styling_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "styling_cage": {
                      "stack": {
                        "id": "lamborghinidiablo_cg_cm_53",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_roof": {
                      "stack": {
                        "id": "lamborghinidiablo_rf_rt_31",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_doors": {
                      "stack": {
                        "id": "lamborghinidiablo_dr_sk_8",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_trunk": {
                      "stack": {
                        "id": "lamborghinidiablo_tr_sk_17",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_bonnet": {
                      "stack": {
                        "id": "lamborghinidiablo_bn_rt_37",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_skirts": {
                      "stack": {
                        "id": "lamborghinidiablo_sk_rt_28",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_chassis": {
                      "stack": {
                        "id": "lamborghinidiablo_ch_rt_19",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust": {
                      "stack": {
                        "id": "lamborghinidiablo_ex_rt_51",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_mirrors": {
                      "stack": {
                        "id": "lamborghinidiablo_mr_rt_34",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_shifter": {
                      "stack": {
                        "id": "lamborghinidiablo_sh_iy_98",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_spoiler": {
                      "stack": {
                        "id": "lamborghinidiablo_sp_cw_42",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_rear": {
                      "stack": {
                        "id": "neon_rear_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_side": {
                      "stack": {
                        "id": "neon_side_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_left": {
                      "stack": {
                        "id": "lamborghinidiablo_sl_ta_73",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#B30100FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_wheel_rim": {
                      "stack": {
                        "id": "wheel_rim_435",
                        "_lv": {
                          "value": {
                            "rim_paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            },
                            "spokes_paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_hand_brake": {
                      "stack": {
                        "id": "lamborghinidiablo_hb_iy_88",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_front": {
                      "stack": {
                        "id": "neon_front_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_right": {
                      "stack": {
                        "id": "lamborghinidiablo_sr_ta_78",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#AE0000FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_suspension": {
                      "stack": {
                        "id": "suspension_mac_pherson",
                        "_lv": {
                          "value": {
                            "paints": {
                              "SuspensionArm": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionRack": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionSpring": {
                                "color": "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_rotor": {
                      "stack": {
                        "id": "brake_rotor_3"
                      }
                    },
                    "styling_bumper_rear": {
                      "stack": {
                        "id": "lamborghinidiablo_br_cw_24",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_rear": {
                      "stack": {
                        "id": "lamborghinidiablo_lr_cw_48",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_bumper_front": {
                      "stack": {
                        "id": "lamborghinidiablo_bf_rt_22",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_front": {
                      "stack": {
                        "id": "lamborghinidiablo_lf_sx_47",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_caliper": {
                      "stack": {
                        "id": "brake_caliper_1",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#B6111BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_steering_wheel": {
                      "stack": {
                        "id": "lamborghinidiablo_sw_sg_99",
                        "_lv": {
                          "value": {
                            "paints": {
                              "spokes": {
                                "color": "#C2C4C6FF"
                              },
                              "strings": {
                                "color": "#0D1116FF"
                              },
                              "alcantar": {
                                "color": "#0D1116FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_general_interior": {
                      "stack": {
                        "id": "lamborghinidiablo_ir_sk_10"
                      }
                    },
                    "styling_exhaust_flame_nitro": {
                      "stack": {
                        "id": "exhaust_flame_nitro_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust_flame_back_fire": {
                      "stack": {
                        "id": "exhaust_flame_back_fire_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    }
                  },
                  "glass_paint": {
                    "color": "#303030FF",
                    "material": 7
                  },
                  "smoke_paint": {
                    "color": "#FFFFFFFF"
                  },
                  "headlight_paint": {
                    "color": "#80FFF3FF"
                  },
                  "fog_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "rear_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "front_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  }
                }
              }
            }
          },
          "6": {
            "stack": {
              "id": "nitro_stock",
              "_lv": {
                "value": {
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        "seed": 0,
        "items": {}
      },
      "body_kit": "lamborghinidiablo_rnt_bkit",
      "__desc_id": "lamborghinidiablo",
      "body_kit_set": {
        "keys": [
          "lamborghinidiablo_stock_bkit",
          "lamborghinidiablo_rnt_bkit"
        ]
      },
      "body_part_set": {
        "keys": [
          "lamborghinidiablo_sr_sk_75",
          "lamborghinidiablo_sl_sk_70",
          "lamborghinidiablo_sw_sk_80",
          "lamborghinidiablo_sh_sk_91",
          "lamborghinidiablo_db_sk_100",
          "lamborghinidiablo_ch_sk_7",
          "lamborghinidiablo_bf_sk_3",
          "lamborghinidiablo_br_sk_5",
          "lamborghinidiablo_sk_sk_15",
          "lamborghinidiablo_dr_sk_8",
          "lamborghinidiablo_rf_sk_14",
          "lamborghinidiablo_mr_sk_13",
          "lamborghinidiablo_bn_sk_1",
          "lamborghinidiablo_tr_sk_17",
          "lamborghinidiablo_sp_sk_16",
          "lamborghinidiablo_lf_sk_11",
          "lamborghinidiablo_lr_sk_12",
          "lamborghinidiablo_ex_sk_9",
          "lamborghinidiablo_cg_sk_6",
          "lamborghinidiablo_ir_sk_10",
          "lamborghinidiablo_hb_sk_85",
          "lamborghinidiablo_bn_rt_37",
          "lamborghinidiablo_sh_iy_98",
          "lamborghinidiablo_hb_iy_88",
          "lamborghinidiablo_sw_sg_99",
          "lamborghinidiablo_sr_ta_78",
          "lamborghinidiablo_sl_ta_73",
          "lamborghinidiablo_sp_cw_42",
          "lamborghinidiablo_sk_rt_28",
          "lamborghinidiablo_mr_rt_34",
          "lamborghinidiablo_lr_cw_48",
          "lamborghinidiablo_lf_sx_47",
          "lamborghinidiablo_ex_rt_51",
          "lamborghinidiablo_ch_rt_19",
          "lamborghinidiablo_cg_cm_53",
          "lamborghinidiablo_br_cw_24",
          "lamborghinidiablo_bf_rt_22",
          "lamborghinidiablo_rf_rt_31",
          "wheel_rim_435",
          "brake_rotor_3",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_3",
          "exhaust_flame_nitro_3"
        ]
      },
      "consumed_resources": {
        "nitro": {
          "ts": 1698757769,
          "amount": 90000000,
          "max_amount": 90000000
        },
        "gasoline": {
          "ts": 1698757774,
          "amount": 40,
          "max_amount": 40
        },
        "statistic_drive_time": {
          "amount": 3690.838
        },
        "statistic_total_distance": {
          "amount": 10176.06
        }
      }
    },
      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("lamborghinidiablo");
    player_result.d.data.car_models.values.push(1);

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

const lambodiablo = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_lamborghinidiablo",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_low: {
                                tune_amount: 30.17,
                                right_tune_steps: 6,
                              },
                            },
                          },
                        },
                      },
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_9",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_high: {
                                tune_amount: 20.51,
                                right_tune_steps: 6,
                              },
                            },
                          },
                        },
                      },
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock",
                      },
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_mid: {
                                tune_amount: 43.53,
                                right_tune_steps: 6,
                              },
                            },
                          },
                        },
                      },
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_rev_limiter: {
                                tune_amount: 558.8867,
                                right_tune_steps: 6,
                              },
                              engine_turbo_pressure: {
                                tune_amount: 3.5,
                                right_tune_steps: 6,
                              },
                            },
                          },
                        },
                      },
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_4",
                      },
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_4",
                      },
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_4",
                      },
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_7",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_fall: {
                                tune_amount: 1013.761,
                                right_tune_steps: 5,
                              },
                            },
                          },
                        },
                      },
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_3",
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
                    items: {
                      engine_ecu_2: {
                        __desc_id: "engine_ecu_2",
                      },
                      engine_block_1: {
                        __desc_id: "engine_block_1",
                      },
                      engine_exhaust_1: {
                        __desc_id: "engine_exhaust_1",
                      },
                      engine_turbine_0: {
                        __desc_id: "engine_turbine_0",
                      },
                      engine_camshaft_1: {
                        __desc_id: "engine_camshaft_1",
                      },
                      engine_fuel_system_2: {
                        __desc_id: "engine_fuel_system_2",
                      },
                      engine_cylinder_head_2: {
                        __desc_id: "engine_cylinder_head_2",
                      },
                      engine_intake_manifold_0: {
                        __desc_id: "engine_intake_manifold_0",
                      },
                      engine_exhaust_manifold_2: {
                        __desc_id: "engine_exhaust_manifold_2",
                      },
                    },
                  },
                },
              },
            },
          },
          1: {
            // ---- อัพเดทแล้ว ----
            stack: {
              id: "body_lamborghinidiablo",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_5"// ,
                        // _lv: {
                        //   value: {
                        //     stat_tunes: {
                        //       mass: {
                        //         left_tune_steps: 3,
                        //       },
                        //       mass_up_percent: {
                        //         left_tune_steps: 1,
                        //       },
                        //       mass_front_percent: {
                        //         left_tune_steps: 2,
                        //       },
                        //     },
                        //   },
                        // },
                      },
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_5",
                        _lv: {
                          value: {
                            // stat_tunes: {
                            //   aero_sx: {
                            //     left_tune_steps: 4,
                            //   },
                            // },
                            stat_tunes: {
                              aero_sx: {
                                tune_amount: -7,
                                left_tune_steps: 4
                              },
                              aero_front_downforce: {
                                tune_amount: 3,
                                right_tune_steps: 4
                              }
                            }
                          },
                        },
                      },
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_0",
                        _lv: {
                          value: {
                            stat_tunes: {
                              aero_rear_downforce: {
                                tune_amount: 4,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      },
                    },
                    // ---- กำลังอัพเดท ----
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
                    items: {
                      body_rear_aero_4: {
                        __desc_id: "body_rear_aero_4",
                      },
                      body_front_aero_4: {
                        __desc_id: "body_front_aero_4",
                      },
                      body_weight_reduction_0: {
                        __desc_id: "body_weight_reduction_0",
                      },
                    },
                  },
                },
              },
            },
          },
          2: {
            stack: {
              id: "transmission_lamborghinidiablo",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_5",
                      },
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_5",
                        // _lv: {
                        //   value: {
                        //     stat_tunes: {
                        //       gear_shifting_delay: {
                        //         tune_amount: -0.05,
                        //         left_tune_steps: 4,
                        //       },
                        //     },
                        //   },
                        // },
                      },
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_clutch_2_2",
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
                    items: {
                      transmission_clutch_stock: {
                        __desc_id: "transmission_clutch_stock",
                      },
                      transmission_gearbox_stock: {
                        __desc_id: "transmission_gearbox_stock",
                      },
                    },
                  },
                },
              },
            },
          },
          3: {
            stack: {
              id: "suspension_lamborghinidiablo",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_1",
                      },
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_3",
                      },
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_1",
                      },
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_stock",
                      },
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_2",
                      },
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_2",
                      },
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_lock: {
                                tune_amount: 1.5,
                                right_tune_steps: 1
                              },
                              suspension_front_camber: {
                                tune_amount: -2,
                                left_tune_steps: 1
                              }
                            }
                          }
                        }
                      },
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_2",
                      },
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_3",
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
                        id: "wheel_rim_front_46",
                      },
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_9",
                      },
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_46",
                      },
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_5",
                      },
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_4",
                      },
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_4",
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
                    items: {
                      wheel_rim_rear_44: {
                        __desc_id: "wheel_rim_rear_44"
                      },
                      wheel_rim_front_22: {
                        __desc_id: "wheel_rim_front_22"
                      },
                      wheel_tyre_front_5: {
                        __desc_id: "wheel_tyre_front_5"
                      }
                    },
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
                        id: "lamborghinidiablo_cg_cm_53",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_roof: {
                      stack: {
                        id: "lamborghinidiablo_rf_rt_31",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_doors: {
                      stack: {
                        id: "lamborghinidiablo_dr_sk_8",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_trunk: {
                      stack: {
                        id: "lamborghinidiablo_tr_sk_17",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_bonnet: {
                      stack: {
                        id: "lamborghinidiablo_bn_rt_37",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_skirts: {
                      stack: {
                        id: "lamborghinidiablo_sk_rt_28",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_chassis: {
                      stack: {
                        id: "lamborghinidiablo_ch_rt_19",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_exhaust: {
                      stack: {
                        id: "lamborghinidiablo_ex_rt_51",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_mirrors: {
                      stack: {
                        id: "lamborghinidiablo_mr_rt_34",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_shifter: {
                      stack: {
                        id: "lamborghinidiablo_sh_iy_98",
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
                        id: "lamborghinidiablo_sp_cw_42",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF",
                              material: 1,
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
                        id: "lamborghinidiablo_sl_ta_73",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#B30100FF",
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
                        id: "wheel_rim_435",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#C2C4C6FF",
                              material: 1,
                            },
                            spokes_paint: {
                              color: "#C2C4C6FF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "lamborghinidiablo_hb_iy_88",
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
                        id: "lamborghinidiablo_sr_ta_78",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#AE0000FF",
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
                        id: "brake_rotor_3",
                      },
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "lamborghinidiablo_br_cw_24",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4,
                            },
                          },
                        },
                      },
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "lamborghinidiablo_lr_cw_48",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "lamborghinidiablo_bf_rt_22",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
                            },
                          },
                        },
                      },
                    },
                    styling_lights_front: {
                      stack: {
                        id: "lamborghinidiablo_lf_sx_47",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B6111BFF",
                              material: 1,
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
                              color: "#B6111BFF",
                            },
                          },
                        },
                      },
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "lamborghinidiablo_sw_sg_99",
                        _lv: {
                          value: {
                            paints: {
                              spokes: {
                                color: "#C2C4C6FF",
                              },
                              strings: {
                                color: "#0D1116FF",
                              },
                              alcantar: {
                                color: "#0D1116FF",
                              },
                            },
                          },
                        },
                      },
                    },
                    styling_general_interior: {
                      stack: {
                        id: "lamborghinidiablo_ir_sk_10",
                      },
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_3",
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
                        id: "exhaust_flame_back_fire_3",
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
                    color: "#303030FF",
                    material: 7,
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF",
                  },
                  headlight_paint: {
                    color: "#80FFF3FF",
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
      body_kit: "lamborghinidiablo_rnt_bkit",
      __desc_id: "lamborghinidiablo",
      body_kit_set: {
        keys: ["lamborghinidiablo_stock_bkit", "lamborghinidiablo_rnt_bkit"],
      },
      body_part_set: {
        keys: [
          "lamborghinidiablo_sr_sk_75",
          "lamborghinidiablo_sl_sk_70",
          "lamborghinidiablo_sw_sk_80",
          "lamborghinidiablo_sh_sk_91",
          "lamborghinidiablo_db_sk_100",
          "lamborghinidiablo_ch_sk_7",
          "lamborghinidiablo_bf_sk_3",
          "lamborghinidiablo_br_sk_5",
          "lamborghinidiablo_sk_sk_15",
          "lamborghinidiablo_dr_sk_8",
          "lamborghinidiablo_rf_sk_14",
          "lamborghinidiablo_mr_sk_13",
          "lamborghinidiablo_bn_sk_1",
          "lamborghinidiablo_tr_sk_17",
          "lamborghinidiablo_sp_sk_16",
          "lamborghinidiablo_lf_sk_11",
          "lamborghinidiablo_lr_sk_12",
          "lamborghinidiablo_ex_sk_9",
          "lamborghinidiablo_cg_sk_6",
          "lamborghinidiablo_ir_sk_10",
          "lamborghinidiablo_hb_sk_85",
          "lamborghinidiablo_bn_rt_37",
          "lamborghinidiablo_sh_iy_98",
          "lamborghinidiablo_hb_iy_88",
          "lamborghinidiablo_sw_sg_99",
          "lamborghinidiablo_sr_ta_78",
          "lamborghinidiablo_sl_ta_73",
          "lamborghinidiablo_sp_cw_42",
          "lamborghinidiablo_sk_rt_28",
          "lamborghinidiablo_mr_rt_34",
          "lamborghinidiablo_lr_cw_48",
          "lamborghinidiablo_lf_sx_47",
          "lamborghinidiablo_ex_rt_51",
          "lamborghinidiablo_ch_rt_19",
          "lamborghinidiablo_cg_cm_53",
          "lamborghinidiablo_br_cw_24",
          "lamborghinidiablo_bf_rt_22",
          "lamborghinidiablo_rf_rt_31",
          "wheel_rim_435",
          "brake_rotor_3",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_3",
          "exhaust_flame_nitro_3"
        ],
      },
      consumed_resources: {
        nitro: {
          ts: 1698757769,
          amount: 90000000,
          max_amount: 90000000,
        },
        gasoline: {
          ts: 1698757774,
          amount: 40,
          max_amount: 40,
        },
        statistic_drive_time: {
          amount: 3690.838,
        },
        statistic_total_distance: {
          amount: 10176.06,
        },
      },
    };
    player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("lamborghinidiablo");
    player_result.d.data.car_models.values.push(1);

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

const r35 = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_skyliner35",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_low: {
                                tune_amount: 38.5,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_9",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_high: {
                                tune_amount: 18.46,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_mid: {
                                tune_amount: 42.84,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_rev_limiter: {
                                tune_amount: 722.6979,
                                right_tune_steps: 6
                              },
                              engine_turbo_pressure: {
                                tune_amount: 0.1971,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_4"
                      }
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_4"
                      }
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_4"
                      }
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_7",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_fall: {
                                tune_amount: 896.281,
                                right_tune_steps: 5
                              }
                            }
                          }
                        }
                      }
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_3"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    },
                    throttle_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      engine_ecu_stock: {
                        __desc_id: "engine_ecu_stock"
                      },
                      engine_block_stock: {
                        __desc_id: "engine_block_stock"
                      },
                      engine_exhaust_stock: {
                        __desc_id: "engine_exhaust_stock"
                      },
                      engine_turbine_stock: {
                        __desc_id: "engine_turbine_stock"
                      },
                      engine_camshaft_stock: {
                        __desc_id: "engine_camshaft_stock"
                      },
                      engine_fuel_system_stock: {
                        __desc_id: "engine_fuel_system_stock"
                      },
                      engine_cylinder_head_stock: {
                        __desc_id: "engine_cylinder_head_stock"
                      },
                      engine_intake_manifold_stock: {
                        __desc_id: "engine_intake_manifold_stock"
                      },
                      engine_exhaust_manifold_stock: {
                        __desc_id: "engine_exhaust_manifold_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          1: {
            stack: {
              id: "body_skyliner35",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_5"
                      }
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              aero_sx: {
                                tune_amount: -7,
                                left_tune_steps: 4
                              },
                              aero_front_downforce: {
                                tune_amount: 3,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              aero_rear_downforce: {
                                tune_amount: 4,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    3: {
                      stack: {
                        id: "body_fuel_tank_0"
                      }
                    },
                    4: {
                      stack: {
                        id: "body_strengthening_0"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      body_rear_aero_0: {
                        __desc_id: "body_rear_aero_0"
                      },
                      body_front_aero_0: {
                        __desc_id: "body_front_aero_0"
                      },
                      body_weight_reduction_0: {
                        __desc_id: "body_weight_reduction_0"
                      }
                    }
                  }
                }
              }
            }
          },
          2: {
            stack: {
              id: "transmission_skyliner35",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              gear_1: {
                                tune_amount: -0.6496,
                                left_tune_steps: 2
                              },
                              gear_2: {
                                tune_amount: -0.184,
                                left_tune_steps: 1
                              },
                              gear_3: {
                                tune_amount: -0.128,
                                left_tune_steps: 1
                              },
                              gear_4: {
                                tune_amount: -0.2,
                                left_tune_steps: 2
                              },
                              gear_5: {
                                tune_amount: -0.2133,
                                left_tune_steps: 3
                              },
                              gear_6: {
                                tune_amount: -0.2133,
                                left_tune_steps: 4
                              },
                              gear_final_drive: {
                                tune_amount: -0.888,
                                left_tune_steps: 3
                              },
                              transmission_loss_coef: {
                                tune_amount: -0.02,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_5"
                      }
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_clutch_2_2"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      transmission_clutch_stock: {
                        __desc_id: "transmission_clutch_stock"
                      },
                      transmission_gearbox_stock: {
                        __desc_id: "transmission_gearbox_stock"
                      },
                      transmission_differential_viscous_2_2: {
                        __desc_id: "transmission_differential_viscous_2_2"
                      }
                    }
                  }
                }
              }
            }
          },
          3: {
            stack: {
              id: "suspension_skyliner35",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_stock"
                      }
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_stock"
                      }
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_stock"
                      }
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_stock"
                      }
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_stock"
                      }
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_stock"
                      }
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_stock"
                      }
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          4: {
            stack: {
              id: "default_wheels",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "wheel_rim_front_27"
                      }
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_2"
                      }
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_28"
                      }
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_2"
                      }
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_stock"
                      }
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          5: {
            stack: {
              id: "styling_stock",
              _lv: {
                value: {
                  cells: {
                    styling_cage: {
                      stack: {
                        id: "skyliner35_cg_sk_44",
                        _lv: {
                          value: {
                            paint: {
                              color: "#BFBFBFFF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_roof: {
                      stack: {
                        id: "skyliner35_rf_sk_24",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true,
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_doors: {
                      stack: {
                        id: "skyliner35_dr_sk_15",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true,
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_trunk: {
                      stack: {
                        id: "skyliner35_tr_cw_30",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true,
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_bonnet: {
                      stack: {
                        id: "skyliner35_bn_cw_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true,
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_skirts: {
                      stack: {
                        id: "skyliner35_sk_sk_33",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_chassis: {
                      stack: {
                        id: "skyliner35_ch_cw_36",
                        _lv: {
                          value: {
                            paint: {
                              color: "#12383CFF",
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust: {
                      stack: {
                        id: "skyliner35_ex_rt_16",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_mirrors: {
                      stack: {
                        id: "skyliner35_mr_cw_21",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_shifter: {
                      stack: {
                        id: "skyliner35_sh_sk_69",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_spoiler: {
                      stack: {
                        id: "skyliner35_sp_cw_27",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_neon_rear: {
                      stack: {
                        id: "neon_rear_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_side: {
                      stack: {
                        id: "neon_side_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_left: {
                      stack: {
                        id: "skyliner35_sl_sk_47",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_wheel_rim: {
                      stack: {
                        id: "wheel_rim_39",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#0D1116FF"
                            },
                            spokes_paint: {
                              color: "#0D1116FF"
                            }
                          }
                        }
                      }
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "skyliner35_hb_sk_63",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_neon_front: {
                      stack: {
                        id: "neon_front_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_right: {
                      stack: {
                        id: "skyliner35_sr_sk_52",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_suspension: {
                      stack: {
                        id: "suspension_mac_pherson",
                        _lv: {
                          value: {
                            paints: {
                              SuspensionArm: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionRack: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionSpring: {
                                color: "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_brake_rotor: {
                      stack: {
                        id: "brake_rotor_1"
                      }
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "skyliner35_br_sk_46",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "skyliner35_lr_cw_43",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "skyliner35_bf_cw_11",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true,
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_lights_front: {
                      stack: {
                        id: "skyliner35_lf_cw_42",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_brake_caliper: {
                      stack: {
                        id: "brake_caliper_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5C5C5CFF"
                            }
                          }
                        }
                      }
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "skyliner35_sw_sk_57",
                        _lv: {
                          value: {
                            paints: {
                              spokes: {
                                color: "#9F9F9FFF"
                              },
                              strings: {
                                color: "#373737FF"
                              },
                              alcantar: {
                                color: "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_general_interior: {
                      stack: {
                        id: "skyliner35_ir_sk_105"
                      }
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_back_fire: {
                      stack: {
                        id: "exhaust_flame_back_fire_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    }
                  },
                  glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF",
                  },
                  headlight_paint: {
                    color: "#FFFFFFFF",
                  },
                  fog_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  rear_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  front_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  }
                }
              }
            }
          },
          6: {
            stack: {
              id: "nitro_stock",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          }
        }
      },
      vinyls: {
        seed: 0,
        items: {}
      },
      body_kit: "skyliner35_cbw_bkit",
      __desc_id: "skyliner35",
      gasoline_id: "sports_gasoline",
      body_kit_set: {
        keys: ["skyliner35_stock_bkit", "skyliner35_cbw_bkit"]
      },
      body_part_set: {
        keys: ["skyliner35_sp_sk_29", "skyliner35_sk_sk_26", "skyliner35_tr_sk_32", "skyliner35_bf_sk_8", "skyliner35_bn_sk_4", "skyliner35_dr_sk_15", "skyliner35_rf_sk_24", "skyliner35_ch_sk_14", "skyliner35_mr_sk_22", "skyliner35_br_sk_10", "skyliner35_lr_sk_20", "skyliner35_lf_sk_19", "skyliner35_ex_sk_18", "skyliner35_cg_sk_44", "skyliner35_sl_sk_47", "skyliner35_sr_sk_52", "skyliner35_sw_sk_57", "skyliner35_hb_sk_63", "skyliner35_sh_sk_69", "skyliner35_db_sk_82", "skyliner35_ir_sk_105", "wheel_rim_18", "brake_rotor_1", "brake_caliper_1", "suspension_mac_pherson", "neon_front_empty", "neon_side_empty", "neon_rear_empty", "exhaust_flame_back_fire_1", "exhaust_flame_nitro_1", "skyliner35_ch_cw_36", "skyliner35_bf_cw_11", "skyliner35_mr_cw_21", "skyliner35_bn_cw_1", "skyliner35_tr_cw_30", "skyliner35_sp_cw_27", "skyliner35_ex_rt_16", "skyliner35_br_sk_46", "skyliner35_sk_sk_33", "skyliner35_lf_cw_42", "skyliner35_lr_cw_43", "wheel_rim_39"]
      },
      consumed_resources: {
        nitro: {
          ts: 1698757839,
          amount: 90000000,
          max_amount: 90000000
        },
        gasoline: {
          ts: 1698757845,
          amount: 25.45522,
          max_amount: 40
        },
        statistic_drive_time: {
          amount: 2503.436
        },
        statistic_total_distance: {
          amount: 34663.92
        }
      }
    };

    player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("r35");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
};

const technoirff4 = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      "tuning": {
        "cells": {
          "0": {
            "stack": {
              "id": "engine_ferrarif40",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "engine_block_2"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "engine_camshaft_5"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "engine_cooling_stock"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "engine_cylinder_head_4"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "engine_ecu_2"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "engine_exhaust_manifold_1"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "engine_exhaust_1"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "engine_fuel_system_2"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "engine_intake_manifold_3"
                      }
                    },
                    "9": {
                      "stack": {
                        "id": "engine_turbine_0"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    },
                    "throttle_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "1": {
            "stack": {
              "id": "body_ferrarif40",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "body_weight_reduction_0"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "body_front_aero_3"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "body_rear_aero_3"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "body_fuel_tank_0"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "body_strengthening_0"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "2": {
            "stack": {
              "id": "transmission_ferrarif40",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "transmission_gearbox_2"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "transmission_clutch_1"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "transmission_differential_viscous_3_2"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "transmission_gear_drive_awd_1"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "transmission_gear_drive_rwd_stock": {
                        "__desc_id": "transmission_gear_drive_rwd_stock"
                      },
                      "transmission_differential_viscous_3_1": {
                        "__desc_id": "transmission_differential_viscous_3_1"
                      }
                    }
                  }
                }
              }
            }
          },
          "3": {
            "stack": {
              "id": "suspension_ferrarif40",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "suspension_springs_front_5"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "suspension_springs_rear_5"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "suspension_shocks_front_2"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "suspension_shocks_rear_3"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "suspension_stabs_front_3"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "suspension_stabs_rear_3"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "suspension_arms_front_3"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "suspension_arms_rear_3"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "suspension_brakes_3"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "4": {
            "stack": {
              "id": "default_wheels",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_rim_front_26"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "wheel_tyre_front_9"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "wheel_rim_rear_46"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "wheel_tyre_rear_5"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "wheel_spacers_front_3"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "wheel_spacers_rear_2"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "5": {
            "stack": {
              "id": "styling_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "styling_cage": {
                      "stack": {
                        "id": "ferrarif40_cg_cm_38",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#69A800FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_roof": {
                      "stack": {
                        "id": "ferrarif40_rf_sk_39",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_doors": {
                      "stack": {
                        "id": "ferrarif40_dr_sk_20",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_trunk": {
                      "stack": {
                        "id": "ferrarif40_tr_rt_49",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_bonnet": {
                      "stack": {
                        "id": "ferrarif40_bn_sk_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_skirts": {
                      "stack": {
                        "id": "ferrarif40_sk_rt_42",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_chassis": {
                      "stack": {
                        "id": "ferrarif40_ch_rt_17",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust": {
                      "stack": {
                        "id": "ferrarif40_ex_cw_21",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_mirrors": {
                      "stack": {
                        "id": "ferrarif40_mr_sk_35",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_shifter": {
                      "stack": {
                        "id": "ferrarif40_sh_sk_91",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_spoiler": {
                      "stack": {
                        "id": "ferrarif40_sp_rt_45",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_rear": {
                      "stack": {
                        "id": "neon_rear_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_side": {
                      "stack": {
                        "id": "neon_side_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_left": {
                      "stack": {
                        "id": "ferrarif40_sl_ta_73",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#7DA900FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_wheel_rim": {
                      "stack": {
                        "id": "wheel_rim_422",
                        "_lv": {
                          "value": {
                            "rim_paint": {
                              "color": "#6D6D6DFF",
                              "material": 2
                            },
                            "spokes_paint": {
                              "color": "#6D6D6DFF",
                              "material": 2
                            }
                          }
                        }
                      }
                    },
                    "styling_hand_brake": {
                      "stack": {
                        "id": "ferrarif40_hb_sk_85",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_front": {
                      "stack": {
                        "id": "neon_front_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_right": {
                      "stack": {
                        "id": "ferrarif40_sr_ta_78",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#77B100FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_suspension": {
                      "stack": {
                        "id": "suspension_mac_pherson",
                        "_lv": {
                          "value": {
                            "paints": {
                              "SuspensionArm": {
                                "color": "#112552FF"
                              },
                              "SuspensionRack": {
                                "color": "#B6111BFF"
                              },
                              "SuspensionSpring": {
                                "color": "#155C2DFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_rotor": {
                      "stack": {
                        "id": "brake_rotor_3"
                      }
                    },
                    "styling_bumper_rear": {
                      "stack": {
                        "id": "ferrarif40_br_cw_11",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_rear": {
                      "stack": {
                        "id": "ferrarif40_lr_rt_31",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_bumper_front": {
                      "stack": {
                        "id": "ferrarif40_bf_rt_7",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_front": {
                      "stack": {
                        "id": "ferrarif40_lf_sk_27",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#6D6D6DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_caliper": {
                      "stack": {
                        "id": "brake_caliper_1",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#95CE00FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_steering_wheel": {
                      "stack": {
                        "id": "ferrarif40_sw_sg_99",
                        "_lv": {
                          "value": {
                            "paints": {
                              "spokes": {
                                "color": "#9F9F9FFF"
                              },
                              "strings": {
                                "color": "#373737FF"
                              },
                              "alcantar": {
                                "color": "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_general_interior": {
                      "stack": {
                        "id": "ferrarif40_ir_sk_52"
                      }
                    },
                    "styling_exhaust_flame_nitro": {
                      "stack": {
                        "id": "exhaust_flame_nitro_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust_flame_back_fire": {
                      "stack": {
                        "id": "exhaust_flame_back_fire_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    }
                  },
                  "glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "smoke_paint": {
                    "color": "#FFFFFFFF"
                  },
                  "headlight_paint": {
                    "color": "#8FD7FFFF"
                  },
                  "fog_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "rear_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "front_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  }
                }
              }
            }
          },
          "6": {
            "stack": {
              "id": "nitro_stock",
              "_lv": {
                "value": {
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "7": {
            "stack": {
              "id": "wheel_tires_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_tires_set_stock",
                        "_lv": {
                          "value": {
                            "resources": {
                              "rear_left_wheel_tire": {
                                "amount": 100
                              },
                              "front_left_wheel_tire": {
                                "amount": 100
                              },
                              "rear_right_wheel_tire": {
                                "amount": 100
                              },
                              "front_right_wheel_tire": {
                                "amount": 100
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        "seed": 0,
        "items": {}
      },
      "body_kit": "ferrarif40_rnt_bkit",
      "__desc_id": "ferrarif40",
      "body_kit_set": {
        "keys": [
          "ferrarif40_stock_bkit",
          "ferrarif40_rnt_bkit"
        ]
      },
      "body_part_set": {
        "keys": [
          "ferrarif40_ch_sk_18",
          "ferrarif40_bf_sk_8",
          "ferrarif40_br_sk_13",
          "ferrarif40_sk_sk_43",
          "ferrarif40_dr_sk_20",
          "ferrarif40_rf_sk_39",
          "ferrarif40_mr_sk_35",
          "ferrarif40_bn_sk_3",
          "ferrarif40_tr_sk_50",
          "ferrarif40_sp_sk_46",
          "ferrarif40_lf_sk_27",
          "ferrarif40_lr_sk_32",
          "ferrarif40_ex_sk_23",
          "ferrarif40_cg_sk_15",
          "ferrarif40_ir_sk_52",
          "ferrarif40_sl_sk_70",
          "ferrarif40_sr_sk_75",
          "ferrarif40_sw_sk_80",
          "ferrarif40_hb_sk_85",
          "ferrarif40_sh_sk_91",
          "ferrarif40_db_sk_100",
          "ferrarif40_sw_sg_99",
          "ferrarif40_sr_ta_78",
          "ferrarif40_sl_ta_73",
          "ferrarif40_tr_rt_49",
          "ferrarif40_sp_rt_45",
          "ferrarif40_sk_rt_42",
          "ferrarif40_lr_rt_31",
          "ferrarif40_ex_cw_21",
          "ferrarif40_ch_rt_17",
          "ferrarif40_cg_cm_38",
          "ferrarif40_br_cw_11",
          "ferrarif40_bf_rt_7",
          "wheel_rim_422",
          "brake_rotor_3",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_3",
          "exhaust_flame_nitro_3"
        ]
      },
      "consumed_resources": {
        "nitro": {
          "ts": 1703398599,
          "amount": 20,
          "max_amount": 20
        },
        "gasoline": {
          "ts": 1703398603,
          "amount": 40,
          "max_amount": 40
        },
        "statistic_drive_time": {
          "amount": 15.0703
        },
        "statistic_total_distance": {
          "amount": 2.02606
        }
      },
    };
    player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("ferrarif40");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
}

const toyotasupra = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_toyotasuprarz",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {
                      engine_camshaft_stock: {
                        __desc_id: "engine_camshaft_stock"
                      },
                      engine_cylinder_head_stock: {
                        __desc_id: "engine_cylinder_head_stock"
                      },
                      engine_intake_manifold_stock: {
                        __desc_id: "engine_intake_manifold_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    },
                    throttle_limit: {
                      amount: 1
                    }
                  },
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_stock"
                      }
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_7"
                      }
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_6"
                      }
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_stock"
                      }
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_stock"
                      }
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_stock"
                      }
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_stock"
                      }
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_5"
                      }
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          1: {
            stack: {
              id: "body_toyotasuprarz",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_0"
                      }
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_0"
                      }
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_0"
                      }
                    },
                    3: {
                      stack: {
                        id: "body_fuel_tank_0"
                      }
                    },
                    4: {
                      stack: {
                        id: "body_strengthening_0"
                      }
                    }
                  }
                }
              }
            }
          },
          2: {
            stack: {
              id: "transmission_toyotasuprarz",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_stock"
                      }
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_stock"
                      }
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_viscous_3_1"
                      }
                    }
                  }
                }
              }
            }
          },
          3: {
            stack: {
              id: "suspension_toyotasuprarz",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {
                      suspension_brakes_stock: {
                        __desc_id: "suspension_brakes_stock"
                      },
                      suspension_arms_front_stock: {
                        __desc_id: "suspension_arms_front_stock"
                      },
                      suspension_stabs_rear_stock: {
                        __desc_id: "suspension_stabs_rear_stock"
                      },
                      suspension_stabs_front_stock: {
                        __desc_id: "suspension_stabs_front_stock"
                      },
                      suspension_springs_rear_stock: {
                        __desc_id: "suspension_springs_rear_stock"
                      },
                      suspension_springs_front_stock: {
                        __desc_id: "suspension_springs_front_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_2"
                      }
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_2"
                      }
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_stock"
                      }
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_2"
                      }
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_1"
                      }
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_3"
                      }
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_stock"
                      }
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_0"
                      }
                    }
                  }
                }
              }
            }
          },
          4: {
            stack: {
              id: "default_wheels",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {
                      wheel_rim_rear_15: {
                        __desc_id: "wheel_rim_rear_15"
                      },
                      wheel_rim_front_14: {
                        __desc_id: "wheel_rim_front_14"
                      },
                      wheel_spacers_rear_stock: {
                        __desc_id: "wheel_spacers_rear_stock"
                      },
                      wheel_spacers_front_stock: {
                        __desc_id: "wheel_spacers_front_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  cells: {
                    0: {
                      stack: {
                        id: "wheel_rim_front_22"
                      }
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_2"
                      }
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_23"
                      }
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_2"
                      }
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_1"
                      }
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_0"
                      }
                    }
                  }
                }
              }
            }
          },
          5: {
            stack: {
              id: "styling_stock",
              _lv: {
                value: {
                  headlight_paint: {
                    color: "#FEFFA5FF"
                  },
                  front_light_glass_paint: {
                    color: "#181A1AFF",
                    material: 7
                  },
                  fog_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  rear_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF"
                  },
                  cells: {
                    styling_bonnet: {
                      stack: {
                        id: "toyotasuprarz_bn_cw_29",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF"
                            }
                          }
                        }
                      }
                    },
                    styling_shifter: {
                      stack: {
                        id: "toyotasuprarz_sh_sk_85",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "toyotasuprarz_hb_sk_79",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "toyotasuprarz_sw_sk_73",
                        _lv: {
                          value: {
                            paints: {
                              alcantar: {
                                color: "#2B2B2BFF"
                              },
                              spokes: {
                                color: "#9F9F9FFF"
                              },
                              strings: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_seat_right: {
                      stack: {
                        id: "toyotasuprarz_sr_sk_68",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_seat_left: {
                      stack: {
                        id: "toyotasuprarz_sl_sg_64",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_trunk: {
                      stack: {
                        id: "toyotasuprarz_tr_se_61",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B48E1EFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_spoiler: {
                      stack: {
                        id: "toyotasuprarz_sp_dr_113",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_skirts: {
                      stack: {
                        id: "toyotasuprarz_sk_cw_39",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B48E1EFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_mirrors: {
                      stack: {
                        id: "toyotasuprarz_mr_se_55",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "toyotasuprarz_lr_se_59",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_lights_front: {
                      stack: {
                        id: "toyotasuprarz_lf_se_62",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust: {
                      stack: {
                        id: "toyotasuprarz_ex_cw_17",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_doors: {
                      stack: {
                        id: "toyotasuprarz_dr_sk_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B48E1EFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_chassis: {
                      stack: {
                        id: "toyotasuprarz_ch_cw_36",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B48E1EFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_cage: {
                      stack: {
                        id: "toyotasuprarz_cg_sk_45",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "toyotasuprarz_br_cw_20",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B48E1EFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "toyotasuprarz_bf_cw_41",
                        _lv: {
                          value: {
                            paint: {
                              color: "#B48E1EFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_roof: {
                      stack: {
                        id: "toyotasuprarz_rf_pw_144",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF"
                            }
                          }
                        }
                      }
                    },
                    styling_general_interior: {
                      stack: {
                        id: "toyotasuprarz_ir_sk_150"
                      }
                    },
                    styling_wheel_rim: {
                      stack: {
                        id: "wheel_rim_69",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#0D1116FF",
                              material: 5
                            },
                            spokes_paint: {
                              color: "#A0A199FF",
                              material: 6
                            }
                          }
                        }
                      }
                    },
                    styling_brake_rotor: {
                      stack: {
                        id: "brake_rotor_3"
                      }
                    },
                    styling_brake_caliper: {
                      stack: {
                        id: "brake_caliper_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#DA1918FF"
                            }
                          }
                        }
                      }
                    },
                    styling_suspension: {
                      stack: {
                        id: "suspension_mac_pherson",
                        _lv: {
                          value: {
                            paints: {
                              SuspensionArm: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionRack: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionSpring: {
                                color: "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_neon_front: {
                      stack: {
                        id: "neon_front_static",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFC200FF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_neon_side: {
                      stack: {
                        id: "neon_side_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_rear: {
                      stack: {
                        id: "neon_rear_static",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFC600FF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_back_fire: {
                      stack: {
                        id: "exhaust_flame_back_fire_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          6: {
            stack: {
              id: "nitro_stock",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          }
        }
      },
      vinyls: {
        seed: 0,
        items: {}
      },
      // body_kit: "ferrarif40_rnt_bkit",
      __desc_id: "toyotasuprarz",
      // gasoline_id: "sports_gasoline",
      // body_kit_set: {
      //   keys: ["ferrarif40_stock_bkit", "ferrarif40_rnt_bkit"]
      // },
      body_kit: "toyotasuprarz_cbw_bkit",
      body_kit_set: {
        keys: [
          "toyotasuprarz_stock_bkit",
          "toyotasuprarz_cbw_bkit"
        ]
      },
      body_part_set: {
        keys: [
          "toyotasuprarz_ch_sk_1",
          "toyotasuprarz_dr_sk_2",
          "toyotasuprarz_sk_sk_3",
          "toyotasuprarz_sp_sk_4",
          "toyotasuprarz_mr_sk_5",
          "toyotasuprarz_bf_sk_6",
          "toyotasuprarz_br_sk_10",
          "toyotasuprarz_bn_sk_11",
          "toyotasuprarz_tr_sk_12",
          "toyotasuprarz_lf_sk_8",
          "toyotasuprarz_ex_sk_7",
          "toyotasuprarz_lr_sk_9",
          "toyotasuprarz_cg_sk_45",
          "toyotasuprarz_sl_sk_63",
          "toyotasuprarz_sr_sk_68",
          "toyotasuprarz_sw_sk_73",
          "toyotasuprarz_hb_sk_79",
          "toyotasuprarz_sh_sk_85",
          "toyotasuprarz_db_sk_91",
          "toyotasuprarz_rf_sk_143",
          "toyotasuprarz_ir_sk_150",
          "wheel_rim_22",
          "brake_rotor_1",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_1",
          "exhaust_flame_nitro_1",
          "toyotasuprarz_ch_cw_36",
          "toyotasuprarz_br_cw_20",
          "toyotasuprarz_sk_cw_39",
          "toyotasuprarz_mr_cw_27",
          "toyotasuprarz_bn_cw_29",
          "toyotasuprarz_tr_cw_26",
          "toyotasuprarz_sp_cw_24",
          "toyotasuprarz_bf_cw_41",
          "toyotasuprarz_ex_cw_17",
          "toyotasuprarz_lf_cw_43",
          "toyotasuprarz_lr_cw_44",
          "wheel_rim_39",
          "toyotasuprarz_rf_pw_144",
          "toyotasuprarz_lf_se_62",
          "toyotasuprarz_lr_se_59",
          "toyotasuprarz_mr_se_55",
          "toyotasuprarz_tr_se_61",
          "toyotasuprarz_sp_dr_113",
          "wheel_rim_69",
          "toyotasuprarz_sl_sg_64",
          "brake_rotor_3",
          "neon_front_static",
          "neon_rear_static"
        ]
      },

      consumed_resources: {
        gasoline: {
          ts: 1699047345,
          max_amount: 40,
          amount: 40
        },
        nitro: {
          ts: 1699047345,
          max_amount: 20,
          amount: 20
        },
        statistic_drive_time: {
          amount: 1378.431
        },
        statistic_total_distance: {
          amount: 270.4691
        }
      },
    };
    player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("toyotasupra2020");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
}

const r32x = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_skyliner32",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_low: {
                                tune_amount: 28.33,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_9",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_high: {
                                tune_amount: 9.6,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_mid: {
                                tune_amount: 28.17,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_rev_limiter: {
                                tune_amount: 700.0391,
                                right_tune_steps: 5
                              },
                              engine_turbo_pressure: {
                                tune_amount: 0.2167,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_4"
                      }
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_4"
                      }
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_4"
                      }
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_7",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_fall: {
                                tune_amount: 887.041,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_1"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    },
                    throttle_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      engine_block_1: {
                        __desc_id: "engine_block_1"
                      },
                      engine_ecu_stock: {
                        __desc_id: "engine_ecu_stock"
                      },
                      engine_exhaust_stock: {
                        __desc_id: "engine_exhaust_stock"
                      },
                      engine_turbine_stock: {
                        __desc_id: "engine_turbine_stock"
                      },
                      engine_camshaft_stock: {
                        __desc_id: "engine_camshaft_stock"
                      },
                      engine_cylinder_head_6: {
                        __desc_id: "engine_cylinder_head_6"
                      },
                      engine_fuel_system_stock: {
                        __desc_id: "engine_fuel_system_stock"
                      },
                      engine_intake_manifold_stock: {
                        __desc_id: "engine_intake_manifold_stock"
                      },
                      engine_exhaust_manifold_stock: {
                        __desc_id: "engine_exhaust_manifold_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          1: {
            stack: {
              id: "body_skyliner32",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              mass: {
                                tune_amount: -75.9599,
                                left_tune_steps: 3
                              },
                              mass_up_percent: {
                                tune_amount: -0.624,
                                left_tune_steps: 1
                              },
                              mass_front_percent: {
                                tune_amount: -1.2,
                                left_tune_steps: 2
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              aero_sx: {
                                tune_amount: -0.4,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_0"
                      }
                    },
                    3: {
                      stack: {
                        id: "body_fuel_tank_0"
                      }
                    },
                    4: {
                      stack: {
                        id: "body_strengthening_0"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      body_front_aero_0: {
                        __desc_id: "body_front_aero_0"
                      },
                      body_weight_reduction_0: {
                        __desc_id: "body_weight_reduction_0"
                      }
                    }
                  }
                }
              }
            }
          },
          2: {
            stack: {
              id: "transmission_t50",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              gear_1: {
                                tune_amount: 0.6496,
                                right_tune_steps: 2
                              },
                              gear_2: {
                                tune_amount: 0.3067,
                                right_tune_steps: 2
                              },
                              gear_3: {
                                tune_amount: 0.2133,
                                right_tune_steps: 2
                              },
                              gear_4: {
                                tune_amount: 0.1333,
                                right_tune_steps: 2
                              },
                              gear_5: {
                                tune_amount: -0.16,
                                left_tune_steps: 2,
                                right_tune_steps: 2
                              },
                              gear_6: {
                                tune_amount: -0.128,
                                left_tune_steps: 2
                              },
                              gear_r: {
                                tune_amount: 0.5728,
                                right_tune_steps: 2
                              },
                              gear_final_drive: {
                                tune_amount: 0.0987,
                                left_tune_steps: 3,
                                right_tune_steps: 1
                              },
                              transmission_loss_coef: {
                                tune_amount: -0.02,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              gear_shifting_delay: {
                                tune_amount: -0.05,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_clutch_2_2",
                        _lv: {
                          value: {
                            stat_tunes: {
                              transmission_rear_diff_preload: {
                                tune_amount: 35,
                                right_tune_steps: 4
                              },
                              transmission_front_diff_preload: {
                                tune_amount: 35,
                                right_tune_steps: 4
                              },
                              transmission_rear_diff_lock_coast: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              },
                              transmission_rear_diff_lock_power: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              },
                              transmission_front_diff_lock_coast: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              },
                              transmission_front_diff_lock_power: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      transmission_clutch_stock: {
                        __desc_id: "transmission_clutch_stock"
                      },
                      transmission_gearbox_stock: {
                        __desc_id: "transmission_gearbox_stock"
                      },
                      transmission_differential_stock: {
                        __desc_id: "transmission_differential_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          3: {
            stack: {
              id: "suspension_skyliner32",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_spring_stiffness: {
                                tune_amount: -25000,
                                left_tune_steps: 1
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_rear_spring_way: {
                                tune_amount: -0.0288,
                                left_tune_steps: 2
                              },
                              suspension_rear_spring_stiffness: {
                                tune_amount: -19600,
                                left_tune_steps: 1
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_5"
                      }
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_5"
                      }
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_stabilizer: {
                                tune_amount: 26600,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_rear_stabilizer: {
                                tune_amount: 30400,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_lock: {
                                tune_amount: 5,
                                right_tune_steps: 2
                              },
                              suspension_front_camber: {
                                tune_amount: -2.5,
                                left_tune_steps: 1
                              },
                              suspension_front_caster: {
                                tune_amount: 0.8,
                                right_tune_steps: 1
                              },
                              suspension_front_ackerman: {
                                tune_amount: 12.5,
                                right_tune_steps: 1
                              }
                            }
                          }
                        }
                      }
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_5"
                      }
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              brake_max_torque: {
                                tune_amount: 1950,
                                right_tune_steps: 3
                              },
                              brake_front_percent: {
                                tune_amount: 15,
                                right_tune_steps: 3
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      suspension_brakes_stock: {
                        __desc_id: "suspension_brakes_stock"
                      },
                      suspension_arms_rear_stock: {
                        __desc_id: "suspension_arms_rear_stock"
                      },
                      suspension_arms_front_stock: {
                        __desc_id: "suspension_arms_front_stock"
                      },
                      suspension_stabs_rear_stock: {
                        __desc_id: "suspension_stabs_rear_stock"
                      },
                      suspension_shocks_rear_stock: {
                        __desc_id: "suspension_shocks_rear_stock"
                      },
                      suspension_stabs_front_stock: {
                        __desc_id: "suspension_stabs_front_stock"
                      },
                      suspension_shocks_front_stock: {
                        __desc_id: "suspension_shocks_front_stock"
                      },
                      suspension_springs_rear_stock: {
                        __desc_id: "suspension_springs_rear_stock"
                      },
                      suspension_springs_front_stock: {
                        __desc_id: "suspension_springs_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          4: {
            stack: {
              id: "default_wheels",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "wheel_rim_front_30"
                      }
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_6",
                        _lv: {
                          value: {
                            stat_tunes: {
                              wheel_front_tyre_pressure: {
                                tune_amount: 100000,
                                right_tune_steps: 2
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_44"
                      }
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_10",
                        _lv: {
                          value: {
                            stat_tunes: {
                              wheel_rear_tyre_pressure: {
                                tune_amount: 100000,
                                right_tune_steps: 2
                              }
                            }
                          }
                        }
                      }
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_9"
                      }
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_9"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      wheel_rim_rear_29: {
                        __desc_id: "wheel_rim_rear_29"
                      },
                      wheel_tyre_rear_2: {
                        __desc_id: "wheel_tyre_rear_2"
                      },
                      wheel_tyre_rear_6: {
                        value: {
                          stat_tunes: {
                            wheel_rear_tyre_pressure: {
                              tune_amount: 100000,
                              right_tune_steps: 2
                            }
                          }
                        },
                        __desc_id: "wheel_tyre_rear_6"
                      },
                      wheel_rim_front_29: {
                        __desc_id: "wheel_rim_front_29"
                      },
                      wheel_tyre_front_2: {
                        value: {
                          stat_tunes: {
                            wheel_front_tyre_pressure: {
                              tune_amount: 100000,
                              right_tune_steps: 2
                            }
                          }
                        },
                        __desc_id: "wheel_tyre_front_2"
                      },
                      wheel_spacers_rear_stock: {
                        __desc_id: "wheel_spacers_rear_stock"
                      },
                      wheel_spacers_front_stock: {
                        __desc_id: "wheel_spacers_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          5: {
            stack: {
              id: "styling_stock",
              _lv: {
                value: {
                  cells: {
                    styling_cage: {
                      stack: {
                        id: "skyliner32_cg_cm_46",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFC91FFF"
                            }
                          }
                        }
                      }
                    },
                    styling_doors: {
                      stack: {
                        id: "skyliner32_dr_sk_21",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_trunk: {
                      stack: {
                        id: "skyliner32_tr_sk_38",
                        _lv: {
                          value: {
                            paint: {
                              color: "#DA1918FF"
                            }
                          }
                        }
                      }
                    },
                    styling_bonnet: {
                      stack: {
                        id: "skyliner32_bn_rt_3",
                        _lv: {
                          value: {
                            paint: {
                              color: "#DA1918FF"
                            }
                          }
                        }
                      }
                    },
                    styling_skirts: {
                      stack: {
                        id: "skyliner32_sk_sk_31",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_chassis: {
                      stack: {
                        id: "skyliner32_ch_sk_19",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust: {
                      stack: {
                        id: "skyliner32_ex_se_24",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_mirrors: {
                      stack: {
                        id: "skyliner32_mr_sk_29",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF",
                            }
                          }
                        }
                      }
                    },
                    styling_shifter: {
                      stack: {
                        id: "skyliner32_sh_ct_100",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_spoiler: {
                      stack: {
                        id: "skyliner32_sp_sk_35",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFC91FFF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_rear: {
                      stack: {
                        id: "neon_rear_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_side: {
                      stack: {
                        id: "neon_side_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_left: {
                      stack: {
                        id: "skyliner32_sl_rp_53",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#0D1116FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_wheel_rim: {
                      stack: {
                        id: "wheel_rim_44",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#3E3E3EFF",
                              custom: true,
                              material: 1
                            },
                            spokes_paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "skyliner32_hb_sk_67",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_neon_front: {
                      stack: {
                        id: "neon_front_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_right: {
                      stack: {
                        id: "skyliner32_sr_rp_58",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#0D1116FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_suspension: {
                      stack: {
                        id: "suspension_mac_pherson",
                        _lv: {
                          value: {
                            paints: {
                              SuspensionArm: {
                                color: "#0D1116FF"
                              },
                              SuspensionRack: {
                                color: "#0D1116FF"
                              },
                              SuspensionSpring: {
                                color: "#00C3FFFF",
                                custom: true
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_brake_rotor: {
                      stack: {
                        id: "brake_rotor_2"
                      }
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "skyliner32_br_sk_14",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "skyliner32_lr_sk_27",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "skyliner32_bf_sk_9",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_lights_front: {
                      stack: {
                        id: "skyliner32_lf_sk_26",
                        _lv: {
                          value: {
                            paint: {
                              color: "#949494FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_brake_caliper: {
                      stack: {
                        id: "brake_caliper_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#00C3FFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "skyliner32_sw_rp_66",
                        _lv: {
                          value: {
                            paints: {
                              spokes: {
                                color: "#9F9F9FFF"
                              },
                              strings: {
                                color: "#373737FF"
                              },
                              alcantar: {
                                color: "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_general_interior: {
                      stack: {
                        id: "skyliner32_ir_sk_96"
                      }
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#194AFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_back_fire: {
                      stack: {
                        id: "exhaust_flame_back_fire_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#194AFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    }
                  },
                  glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF"
                  },
                  headlight_paint: {
                    color: "#8FD7FFFF"
                  },
                  fog_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  rear_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  front_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  }
                }
              }
            }
          },
          6: {
            stack: {
              id: "nitro_stock",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          }
        }
      },
      vinyls: {
        seed: 0,
        items: {}
      },
      body_kit: "skyliner32_stock_bkit",
      __desc_id: "skyliner32",
      gasoline_id: "sports_gasoline",
      body_kit_set: {
        keys: [
          "skyliner32_stock_bkit"
        ]
      },
      body_part_set: {
        keys: [
          "skyliner32_ch_sk_19",
          "skyliner32_bf_sk_9",
          "skyliner32_br_sk_14",
          "skyliner32_sk_sk_31",
          "skyliner32_dr_sk_21",
          "skyliner32_mr_sk_29",
          "skyliner32_bn_sk_4",
          "skyliner32_tr_sk_38",
          "skyliner32_sp_sk_35",
          "skyliner32_lf_sk_26",
          "skyliner32_lr_sk_27",
          "skyliner32_ex_sk_23",
          "skyliner32_cg_sk_45",
          "skyliner32_sl_sk_51",
          "skyliner32_sr_sk_56",
          "skyliner32_sw_sk_61",
          "skyliner32_hb_sk_67",
          "skyliner32_sh_sk_73",
          "skyliner32_db_sk_82",
          "skyliner32_ir_sk_96",
          "wheel_rim_372",
          "brake_rotor_1",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_1",
          "exhaust_flame_nitro_1",
          "skyliner32_bn_rt_3",
          "skyliner32_ex_se_24",
          "wheel_rim_431",
          "skyliner32_sw_rp_66",
          "skyliner32_sh_ct_100",
          "skyliner32_sl_rp_53",
          "skyliner32_sr_rp_58",
          "brake_rotor_2",
          "skyliner32_cg_cm_46",
          "wheel_rim_44",
          "brake_rotor_5",
          "neon_front_static",
          "neon_side_static",
          "neon_rear_static"
        ]
      },
      consumed_resources: {
        nitro: {
          ts: 1698948242,
          amount: 7.694483,
          max_amount: 20
        },
        gasoline: {
          ts: 1698948246,
          amount: 10.6529,
          max_amount: 40
        },
        statistic_drive_time: {
          amount: 75635.66
        },
        statistic_total_distance: {
          amount: 2661380
        }
      }
    },

      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("r32");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
};

const mitsubishievo9 = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_mitsubishievo9",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_low: {
                                tune_amount: 27.94,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_9",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_high: {
                                tune_amount: 12.82,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_mid: {
                                tune_amount: 32.4,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_8",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_rev_limiter: {
                                tune_amount: 618.7482,
                                right_tune_steps: 5
                              },
                              engine_turbo_pressure: {
                                tune_amount: 0.162,
                                right_tune_steps: 6
                              }
                            }
                          }
                        }
                      }
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_4"
                      }
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_4"
                      }
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_4"
                      }
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_7",
                        _lv: {
                          value: {
                            stat_tunes: {
                              engine_torque_curve_fall: {
                                tune_amount: 763.777,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_1"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    },
                    throttle_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      engine_ecu_stock: {
                        __desc_id: "engine_ecu_stock"
                      },
                      engine_block_stock: {
                        __desc_id: "engine_block_stock"
                      },
                      engine_exhaust_stock: {
                        __desc_id: "engine_exhaust_stock"
                      },
                      engine_turbine_stock: {
                        __desc_id: "engine_turbine_stock"
                      },
                      engine_camshaft_stock: {
                        __desc_id: "engine_camshaft_stock"
                      },
                      engine_fuel_system_stock: {
                        __desc_id: "engine_fuel_system_stock"
                      },
                      engine_cylinder_head_stock: {
                        __desc_id: "engine_cylinder_head_stock"
                      },
                      engine_intake_manifold_stock: {
                        __desc_id: "engine_intake_manifold_stock"
                      },
                      engine_exhaust_manifold_stock: {
                        __desc_id: "engine_exhaust_manifold_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          1: {
            stack: {
              id: "body_mitsubishievo9",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              mass: {
                                tune_amount: -66.8998,
                                left_tune_steps: 3
                              },
                              mass_up_percent: {
                                tune_amount: -0.36,
                                left_tune_steps: 1
                              },
                              mass_front_percent: {
                                tune_amount: -1,
                                left_tune_steps: 2
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              aero_sx: {
                                tune_amount: -0.4,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_0"
                      }
                    },
                    3: {
                      stack: {
                        id: "body_fuel_tank_0"
                      }
                    },
                    4: {
                      stack: {
                        id: "body_strengthening_0"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      body_front_aero_0: {
                        __desc_id: "body_front_aero_0"
                      },
                      body_weight_reduction_0: {
                        __desc_id: "body_weight_reduction_0"
                      }
                    }
                  }
                }
              }
            }
          },
          2: {
            stack: {
              id: "transmission_t50",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              gear_1: {
                                tune_amount: 0.6496,
                                right_tune_steps: 2
                              },
                              gear_2: {
                                tune_amount: 0.3067,
                                right_tune_steps: 2
                              },
                              gear_3: {
                                tune_amount: 0.2133,
                                right_tune_steps: 2
                              },
                              gear_4: {
                                tune_amount: 0.1333,
                                right_tune_steps: 2
                              },
                              gear_5: {
                                tune_amount: 0.1067,
                                right_tune_steps: 2
                              },
                              gear_6: {
                                tune_amount: -0.0213,
                                left_tune_steps: 1
                              },
                              gear_r: {
                                tune_amount: 0.5728,
                                right_tune_steps: 2
                              },
                              gear_final_drive: {
                                right_tune_steps: 1
                              },
                              transmission_loss_coef: {
                                tune_amount: -0.02,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              gear_shifting_delay: {
                                tune_amount: -0.05,
                                left_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_clutch_2_2",
                        _lv: {
                          value: {
                            stat_tunes: {
                              transmission_rear_diff_preload: {
                                tune_amount: 35,
                                right_tune_steps: 4
                              },
                              transmission_front_diff_preload: {
                                tune_amount: 35,
                                right_tune_steps: 4
                              },
                              transmission_rear_diff_lock_coast: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              },
                              transmission_rear_diff_lock_power: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              },
                              transmission_front_diff_lock_coast: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              },
                              transmission_front_diff_lock_power: {
                                tune_amount: 1,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      transmission_clutch_stock: {
                        __desc_id: "transmission_clutch_stock"
                      },
                      transmission_gearbox_stock: {
                        __desc_id: "transmission_gearbox_stock"
                      },
                      transmission_differential_stock: {
                        __desc_id: "transmission_differential_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          3: {
            stack: {
              id: "suspension_mitsubishievo9",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_spring_way: {
                                tune_amount: 0.018,
                                right_tune_steps: 1
                              },
                              suspension_front_spring_stiffness: {
                                tune_amount: -23000,
                                left_tune_steps: 1
                              }
                            }
                          }
                        }
                      }
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_rear_spring_way: {
                                tune_amount: -0.0156,
                                left_tune_steps: 1
                              },
                              suspension_rear_spring_stiffness: {
                                tune_amount: -23800,
                                left_tune_steps: 1
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_5"
                      }
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_5"
                      }
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_stabilizer: {
                                tune_amount: 45600,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_rear_stabilizer: {
                                tune_amount: 57000,
                                right_tune_steps: 4
                              }
                            }
                          }
                        }
                      }
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_5",
                        _lv: {
                          value: {
                            stat_tunes: {
                              suspension_front_lock: {
                                tune_amount: 5,
                                right_tune_steps: 2
                              },
                              suspension_front_camber: {
                                tune_amount: -2.5,
                                left_tune_steps: 1
                              },
                              suspension_front_caster: {
                                tune_amount: 1.2,
                                right_tune_steps: 1
                              },
                              suspension_front_ackerman: {
                                tune_amount: 25,
                                right_tune_steps: 1
                              }
                            }
                          }
                        }
                      }
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_5"
                      }
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_4",
                        _lv: {
                          value: {
                            stat_tunes: {
                              brake_max_torque: {
                                tune_amount: 1950,
                                right_tune_steps: 3
                              },
                              brake_front_percent: {
                                tune_amount: 15,
                                right_tune_steps: 3
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      suspension_brakes_stock: {
                        __desc_id: "suspension_brakes_stock"
                      },
                      suspension_arms_rear_stock: {
                        __desc_id: "suspension_arms_rear_stock"
                      },
                      suspension_arms_front_stock: {
                        __desc_id: "suspension_arms_front_stock"
                      },
                      suspension_stabs_rear_stock: {
                        __desc_id: "suspension_stabs_rear_stock"
                      },
                      suspension_shocks_rear_stock: {
                        __desc_id: "suspension_shocks_rear_stock"
                      },
                      suspension_stabs_front_stock: {
                        __desc_id: "suspension_stabs_front_stock"
                      },
                      suspension_shocks_front_stock: {
                        __desc_id: "suspension_shocks_front_stock"
                      },
                      suspension_springs_rear_stock: {
                        __desc_id: "suspension_springs_rear_stock"
                      },
                      suspension_springs_front_stock: {
                        __desc_id: "suspension_springs_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          4: {
            stack: {
              id: "default_wheels",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "wheel_rim_front_30"
                      }
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_6",
                        _lv: {
                          value: {
                            stat_tunes: {
                              wheel_front_tyre_pressure: {
                                tune_amount: 100000,
                                right_tune_steps: 2
                              }
                            }
                          }
                        }
                      }
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_44"
                      }
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_10",
                        _lv: {
                          value: {
                            stat_tunes: {
                              wheel_rear_tyre_pressure: {
                                tune_amount: 100000,
                                right_tune_steps: 2
                              }
                            }
                          }
                        }
                      }
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_9"
                      }
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_8"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {
                      wheel_rim_rear_18: {
                        __desc_id: "wheel_rim_rear_18"
                      },
                      wheel_tyre_rear_2: {
                        __desc_id: "wheel_tyre_rear_2"
                      },
                      wheel_rim_front_18: {
                        __desc_id: "wheel_rim_front_18"
                      },
                      wheel_tyre_front_2: {
                        __desc_id: "wheel_tyre_front_2"
                      },
                      wheel_spacers_rear_9: {
                        __desc_id: "wheel_spacers_rear_9"
                      },
                      wheel_spacers_rear_stock: {
                        __desc_id: "wheel_spacers_rear_stock"
                      },
                      wheel_spacers_front_stock: {
                        __desc_id: "wheel_spacers_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          5: {
            stack: {
              id: "styling_stock",
              _lv: {
                value: {
                  cells: {
                    styling_cage: {
                      stack: {
                        id: "mitsubishievo9_cg_cm_54",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFC91FFF"
                            }
                          }
                        }
                      }
                    },
                    styling_roof: {
                      stack: {
                        id: "mitsubishievo9_rf_me_28",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_doors: {
                      stack: {
                        id: "mitsubishievo9_dr_sk_6",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_trunk: {
                      stack: {
                        id: "mitsubishievo9_tr_sk_13",
                        _lv: {
                          value: {
                            paint: {
                              color: "#DA1918FF"
                            }
                          }
                        }
                      }
                    },
                    styling_bonnet: {
                      stack: {
                        id: "mitsubishievo9_bn_sx_111",
                        _lv: {
                          value: {
                            paint: {
                              color: "#DA1918FF"
                            }
                          }
                        }
                      }
                    },
                    styling_skirts: {
                      stack: {
                        id: "mitsubishievo9_sk_cw_46",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_chassis: {
                      stack: {
                        id: "mitsubishievo9_ch_sk_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust: {
                      stack: {
                        id: "mitsubishievo9_ex_sx_57",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_mirrors: {
                      stack: {
                        id: "mitsubishievo9_mr_sk_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF"
                            }
                          }
                        }
                      }
                    },
                    styling_shifter: {
                      stack: {
                        id: "mitsubishievo9_sh_ct_121",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#F9FCFFFF",
                                custom: true
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_spoiler: {
                      stack: {
                        id: "mitsubishievo9_sp_cm_50",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFC91FFF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_rear: {
                      stack: {
                        id: "neon_rear_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_side: {
                      stack: {
                        id: "neon_side_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_left: {
                      stack: {
                        id: "mitsubishievo9_sl_rp_61",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#0D1116FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_wheel_rim: {
                      stack: {
                        id: "wheel_rim_44",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#3E3E3EFF",
                              custom: true,
                              material: 1
                            },
                            spokes_paint: {
                              color: "#FFFFFFFF"
                            }
                          }
                        }
                      }
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "mitsubishievo9_hb_sk_75",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_neon_front: {
                      stack: {
                        id: "neon_front_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_right: {
                      stack: {
                        id: "mitsubishievo9_sr_rp_66",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#0D1116FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_suspension: {
                      stack: {
                        id: "suspension_mac_pherson",
                        _lv: {
                          value: {
                            paints: {
                              SuspensionArm: {
                                color: "#0D1116FF"
                              },
                              SuspensionRack: {
                                color: "#0D1116FF"
                              },
                              SuspensionSpring: {
                                color: "#00C3FFFF",
                                custom: true
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_brake_rotor: {
                      stack: {
                        id: "brake_rotor_2"
                      }
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "mitsubishievo9_br_cw_45",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "mitsubishievo9_lr_cw_52",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 4
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "mitsubishievo9_bf_cw_44",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2446A8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_lights_front: {
                      stack: {
                        id: "mitsubishievo9_lf_cw_51",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FFFFFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_brake_caliper: {
                      stack: {
                        id: "brake_caliper_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#00C3FFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "mitsubishievo9_sw_rp_74",
                        _lv: {
                          value: {
                            paints: {
                              spokes: {
                                color: "#F9FCFFFF",
                                custom: true
                              },
                              strings: {
                                color: "#C2C4C6FF"
                              },
                              alcantar: {
                                color: "#0D1116FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_general_interior: {
                      stack: {
                        id: "mitsubishievo9_ir_sk_117"
                      }
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#194AFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_back_fire: {
                      stack: {
                        id: "exhaust_flame_back_fire_2",
                        _lv: {
                          value: {
                            paint: {
                              color: "#194AFFFF",
                              custom: true
                            }
                          }
                        }
                      }
                    }
                  },
                  glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF"
                  },
                  headlight_paint: {
                    color: "#8FD7FFFF"
                  },
                  fog_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  rear_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  front_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  }
                }
              }
            }
          },
          6: {
            stack: {
              id: "nitro_stock",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          }
        }
      },
      vinyls: {
        seed: 0,
        items: {}
      },
      body_kit: "mitsubishievo9_cbw_bkit",
      __desc_id: "mitsubishievo9",
      gasoline_id: "sports_gasoline",
      body_kit_set: {
        keys: [
          "mitsubishievo9_stock_bkit",
          "mitsubishievo9_cbw_bkit"
        ]
      },
      body_part_set: {
        keys: [
          "mitsubishievo9_ch_sk_1",
          "mitsubishievo9_mr_sk_2",
          "mitsubishievo9_lr_sk_3",
          "mitsubishievo9_br_sk_4",
          "mitsubishievo9_dr_sk_6",
          "mitsubishievo9_rf_sk_7",
          "mitsubishievo9_sk_sk_8",
          "mitsubishievo9_sp_sk_9",
          "mitsubishievo9_bn_sk_10",
          "mitsubishievo9_bf_sk_12",
          "mitsubishievo9_tr_sk_13",
          "mitsubishievo9_ex_sk_5",
          "mitsubishievo9_lf_sk_11",
          "mitsubishievo9_cg_sk_53",
          "mitsubishievo9_sl_sk_59",
          "mitsubishievo9_sr_sk_64",
          "mitsubishievo9_sw_sk_69",
          "mitsubishievo9_hb_sk_75",
          "mitsubishievo9_sh_sk_81",
          "mitsubishievo9_db_sk_87",
          "mitsubishievo9_ir_sk_117",
          "wheel_rim_13",
          "brake_rotor_1",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_1",
          "exhaust_flame_nitro_1",
          "mitsubishievo9_rf_rt_14",
          "mitsubishievo9_tr_cw_17",
          "mitsubishievo9_bf_cw_44",
          "mitsubishievo9_br_cw_45",
          "mitsubishievo9_sk_cw_46",
          "mitsubishievo9_mr_cw_47",
          "mitsubishievo9_bn_cw_49",
          "mitsubishievo9_sp_cw_48",
          "mitsubishievo9_lf_cw_51",
          "mitsubishievo9_lr_cw_52",
          "mitsubishievo9_ex_cw_55",
          "wheel_rim_39",
          "mitsubishievo9_bn_sx_111",
          "mitsubishievo9_rf_me_28",
          "mitsubishievo9_sp_cm_50",
          "mitsubishievo9_ex_sx_57",
          "mitsubishievo9_cg_cm_54",
          "wheel_rim_44",
          "mitsubishievo9_sw_rp_74",
          "mitsubishievo9_sh_ct_121",
          "mitsubishievo9_sl_rp_61",
          "mitsubishievo9_sr_rp_66",
          "brake_rotor_2",
          "brake_rotor_5"
        ]
      },
      consumed_resources: {
        nitro: {
          ts: 1698945889,
          amount: 20,
          max_amount: 20
        },
        gasoline: {
          ts: 1698945890,
          amount: 40,
          max_amount: 40
        },
        statistic_drive_time: {
          amount: 55420.67
        },
        statistic_total_distance: {
          amount: 1875917
        }
      }
    },

      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("mitsubishievo9");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
};

const nissan180sx = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_nissan180sx",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_stock"
                      }
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_stock"
                      }
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_stock"
                      }
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_stock"
                      }
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_stock"
                      }
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_stock"
                      }
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_stock"
                      }
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_stock"
                      }
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    },
                    throttle_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          1: {
            stack: {
              id: "body_nissan180sx",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_0"
                      }
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_0"
                      }
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_0"
                      }
                    },
                    3: {
                      stack: {
                        id: "body_fuel_tank_0"
                      }
                    },
                    4: {
                      stack: {
                        id: "body_strengthening_0"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          2: {
            stack: {
              id: "transmission_nissan180sx",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_stock"
                      }
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_stock"
                      }
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_viscous_2_1"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          3: {
            stack: {
              id: "suspension_nissan180sx",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_3"
                      }
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_3"
                      }
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_stock"
                      }
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_1"
                      }
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_1"
                      }
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_stock"
                      }
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_stock"
                      }
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          4: {
            stack: {
              id: "default_wheels",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "wheel_rim_front_18"
                      }
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_1"
                      }
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_18"
                      }
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_1"
                      }
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_stock"
                      }
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          5: {
            stack: {
              id: "styling_stock",
              _lv: {
                value: {
                  cells: {
                    styling_cage: {
                      stack: {
                        id: "nissan180sx_cg_cm_74",
                        _lv: {
                          value: {
                            paint: {
                              color: "#505050FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_roof: {
                      stack: {
                        id: "nissan180sx_rf_se_75",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_doors: {
                      stack: {
                        id: "nissan180sx_dr_sk_10",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_trunk: {
                      stack: {
                        id: "nissan180sx_tr_sk_5",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_bonnet: {
                      stack: {
                        id: "nissan180sx_bn_sk_9",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_skirts: {
                      stack: {
                        id: "nissan180sx_sk_se_72",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_chassis: {
                      stack: {
                        id: "nissan180sx_ch_sk_3",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust: {
                      stack: {
                        id: "nissan180sx_ex_se_67",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_mirrors: {
                      stack: {
                        id: "nissan180sx_mr_sk_8",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_shifter: {
                      stack: {
                        id: "nissan180sx_sh_iy_119",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_spoiler: {
                      stack: {
                        id: "nissan180sx_sp_se_73",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_neon_rear: {
                      stack: {
                        id: "neon_rear_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_side: {
                      stack: {
                        id: "neon_side_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_left: {
                      stack: {
                        id: "nissan180sx_sl_ta_115",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_wheel_rim: {
                      stack: {
                        id: "wheel_rim_429",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#FFFFFFFF",
                              material: 5
                            },
                            spokes_paint: {
                              color: "#FFFFFFFF",
                              material: 5
                            }
                          }
                        }
                      }
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "nissan180sx_hb_iy_101",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_neon_front: {
                      stack: {
                        id: "neon_front_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_right: {
                      stack: {
                        id: "nissan180sx_sr_ta_111",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_suspension: {
                      stack: {
                        id: "suspension_mac_pherson",
                        _lv: {
                          value: {
                            paints: {
                              SuspensionArm: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionRack: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionSpring: {
                                color: "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_brake_rotor: {
                      stack: {
                        id: "brake_rotor_2"
                      }
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "nissan180sx_br_se_66",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "nissan180sx_lr_se_68",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "nissan180sx_bf_se_65",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_lights_front: {
                      stack: {
                        id: "nissan180sx_lf_sk_11",
                        _lv: {
                          value: {
                            paint: {
                              color: "#5B5B5BFF",
                              material: 2
                            }
                          }
                        }
                      }
                    },
                    styling_brake_caliper: {
                      stack: {
                        id: "brake_caliper_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#DA1918FF"
                            }
                          }
                        }
                      }
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "nissan180sx_sw_rx_105",
                        _lv: {
                          value: {
                            paints: {
                              spokes: {
                                color: "#9F9F9FFF"
                              },
                              strings: {
                                color: "#373737FF"
                              },
                              alcantar: {
                                color: "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_general_interior: {
                      stack: {
                        id: "nissan180sx_ir_sk_221"
                      }
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_3",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_back_fire: {
                      stack: {
                        id: "exhaust_flame_back_fire_3",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    }
                  },
                  glass_paint: {
                    color: "#505050FF",
                    material: 7
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF"
                  },
                  headlight_paint: {
                    color: "#80FFF3FF"
                  },
                  fog_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  rear_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  front_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  }
                }
              }
            }
          },
          6: {
            stack: {
              id: "nitro_stock",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        seed: 0,
        items: {}
      },
      "body_kit": "nissan180sx_slideperformance_bkit",
      "__desc_id": "nissan180sx",
      "body_kit_set": {
        keys: [
          "nissan180sx_stock_bkit",
          "nissan180sx_slideperformance_bkit"
        ]
      },
      "body_part_set": {
        keys: [
          "nissan180sx_br_sk_1",
          "nissan180sx_ch_sk_3",
          "nissan180sx_sp_sk_4",
          "nissan180sx_tr_sk_5",
          "nissan180sx_sk_sk_6",
          "nissan180sx_rf_sk_7",
          "nissan180sx_bn_sk_9",
          "nissan180sx_dr_sk_10",
          "nissan180sx_mr_sk_8",
          "nissan180sx_lf_sk_11",
          "nissan180sx_ex_sk_12",
          "nissan180sx_cg_sk_44",
          "nissan180sx_sl_sk_90",
          "nissan180sx_sr_sk_91",
          "nissan180sx_sw_sk_92",
          "nissan180sx_hb_sk_93",
          "nissan180sx_sh_sk_94",
          "nissan180sx_db_sk_121",
          "nissan180sx_lr_sk_13",
          "nissan180sx_bf_sk_2",
          "nissan180sx_ir_sk_221",
          "nissan180sx_sh_iy_119",
          "nissan180sx_hb_iy_101",
          "nissan180sx_sw_rx_105",
          "nissan180sx_sr_ta_111",
          "nissan180sx_sl_ta_115",
          "nissan180sx_sp_se_73",
          "nissan180sx_sk_se_72",
          "nissan180sx_lr_se_68",
          "nissan180sx_ex_se_67",
          "nissan180sx_cg_cm_74",
          "nissan180sx_br_se_66",
          "nissan180sx_bf_se_65",
          "nissan180sx_rf_se_75",
          "wheel_rim_429",
          "brake_rotor_2",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_3",
          "exhaust_flame_nitro_3"
        ]
      },
      "consumed_resources": {
        nitro: {
          ts: 1696705845,
          amount: 20,
          max_amount: 20
        },
        gasoline: {
          ts: 1696705846,
          amount: 40,
          max_amount: 40
        },
        statistic_drive_time: {
          amount: 3565.08
        },
        statistic_total_distance: {
          amount: 20874.13
        }
      }
    },

      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("nissan180sx");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
};

const rx7 = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      tuning: {
        cells: {
          0: {
            stack: {
              id: "engine_mazdarx7",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "engine_block_1"
                      }
                    },
                    1: {
                      stack: {
                        id: "engine_camshaft_stock"
                      }
                    },
                    2: {
                      stack: {
                        id: "engine_cooling_stock"
                      }
                    },
                    3: {
                      stack: {
                        id: "engine_cylinder_head_4"
                      }
                    },
                    4: {
                      stack: {
                        id: "engine_ecu_4"
                      }
                    },
                    5: {
                      stack: {
                        id: "engine_exhaust_manifold_0"
                      }
                    },
                    6: {
                      stack: {
                        id: "engine_exhaust_1"
                      }
                    },
                    7: {
                      stack: {
                        id: "engine_fuel_system_2"
                      }
                    },
                    8: {
                      stack: {
                        id: "engine_intake_manifold_3"
                      }
                    },
                    9: {
                      stack: {
                        id: "engine_turbine_stock"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    },
                    throttle_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          1: {
            stack: {
              id: "body_mazdarx7",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "body_weight_reduction_2"
                      }
                    },
                    1: {
                      stack: {
                        id: "body_front_aero_0"
                      }
                    },
                    2: {
                      stack: {
                        id: "body_rear_aero_0"
                      }
                    },
                    3: {
                      stack: {
                        id: "body_fuel_tank_0"
                      }
                    },
                    4: {
                      stack: {
                        id: "body_strengthening_0"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          2: {
            stack: {
              id: "transmission_mazdarx7",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "transmission_gearbox_3"
                      }
                    },
                    1: {
                      stack: {
                        id: "transmission_clutch_2"
                      }
                    },
                    2: {
                      stack: {
                        id: "transmission_differential_clutch_2_1"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          3: {
            stack: {
              id: "suspension_mazdarx7",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "suspension_springs_front_3"
                      }
                    },
                    1: {
                      stack: {
                        id: "suspension_springs_rear_3"
                      }
                    },
                    2: {
                      stack: {
                        id: "suspension_shocks_front_3"
                      }
                    },
                    3: {
                      stack: {
                        id: "suspension_shocks_rear_4"
                      }
                    },
                    4: {
                      stack: {
                        id: "suspension_stabs_front_5"
                      }
                    },
                    5: {
                      stack: {
                        id: "suspension_stabs_rear_5"
                      }
                    },
                    6: {
                      stack: {
                        id: "suspension_arms_front_4"
                      }
                    },
                    7: {
                      stack: {
                        id: "suspension_arms_rear_3"
                      }
                    },
                    8: {
                      stack: {
                        id: "suspension_brakes_2"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          4: {
            stack: {
              id: "default_wheels",
              _lv: {
                value: {
                  cells: {
                    0: {
                      stack: {
                        id: "wheel_rim_front_18"
                      }
                    },
                    1: {
                      stack: {
                        id: "wheel_tyre_front_3"
                      }
                    },
                    2: {
                      stack: {
                        id: "wheel_rim_rear_18"
                      }
                    },
                    3: {
                      stack: {
                        id: "wheel_tyre_rear_3"
                      }
                    },
                    4: {
                      stack: {
                        id: "wheel_spacers_front_3"
                      }
                    },
                    5: {
                      stack: {
                        id: "wheel_spacers_rear_3"
                      }
                    }
                  },
                  resources: {
                    resource: {
                      amount: 1
                    },
                    repair_limit: {
                      amount: 1
                    }
                  },
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          },
          5: {
            stack: {
              id: "styling_stock",
              _lv: {
                value: {
                  cells: {
                    styling_cage: {
                      stack: {
                        id: "mazdarx7_cg_cm_59",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2354A1FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_roof: {
                      stack: {
                        id: "mazdarx7_rf_sk_76",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_doors: {
                      stack: {
                        id: "mazdarx7_dr_sk_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_trunk: {
                      stack: {
                        id: "mazdarx7_tr_sk_7",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_bonnet: {
                      stack: {
                        id: "mazdarx7_bn_sk_11",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0D1116FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_skirts: {
                      stack: {
                        id: "mazdarx7_sk_sk_20",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_chassis: {
                      stack: {
                        id: "mazdarx7_ch_rt_17",
                        _lv: {
                          value: {
                            paint: {
                              color: "#0088FFFF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust: {
                      stack: {
                        id: "mazdarx7_ex_se_80",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_mirrors: {
                      stack: {
                        id: "mazdarx7_mr_sk_9",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2354A1FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_shifter: {
                      stack: {
                        id: "mazdarx7_sh_rp_108",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_spoiler: {
                      stack: {
                        id: "mazdarx7_sp_rt_13",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_neon_rear: {
                      stack: {
                        id: "neon_rear_static",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2B59D8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_neon_side: {
                      stack: {
                        id: "neon_side_empty",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2B59D8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_left: {
                      stack: {
                        id: "mazdarx7_sl_ta_85",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_wheel_rim: {
                      stack: {
                        id: "wheel_rim_412",
                        _lv: {
                          value: {
                            rim_paint: {
                              color: "#A0A199FF"
                            },
                            spokes_paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_hand_brake: {
                      stack: {
                        id: "mazdarx7_hb_sg_103",
                        _lv: {
                          value: {
                            paints: {
                              handle: {
                                color: "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_neon_front: {
                      stack: {
                        id: "neon_front_static",
                        _lv: {
                          value: {
                            paint: {
                              color: "#2B59D8FF"
                            }
                          }
                        }
                      }
                    },
                    styling_seat_right: {
                      stack: {
                        id: "mazdarx7_sr_ta_90",
                        _lv: {
                          value: {
                            paints: {
                              base: {
                                color: "#373737FF"
                              },
                              bottom: {
                                color: "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_suspension: {
                      stack: {
                        id: "suspension_mac_pherson",
                        _lv: {
                          value: {
                            paints: {
                              SuspensionArm: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionRack: {
                                color: "#5C5C5CFF"
                              },
                              SuspensionSpring: {
                                color: "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_brake_rotor: {
                      stack: {
                        id: "brake_rotor_3"
                      }
                    },
                    styling_bumper_rear: {
                      stack: {
                        id: "mazdarx7_br_rt_32",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_lights_rear: {
                      stack: {
                        id: "mazdarx7_lr_sk_8",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_bumper_front: {
                      stack: {
                        id: "mazdarx7_bf_rt_31",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_lights_front: {
                      stack: {
                        id: "mazdarx7_lf_rt_55",
                        _lv: {
                          value: {
                            paint: {
                              color: "#A0A199FF",
                              material: 1
                            }
                          }
                        }
                      }
                    },
                    styling_brake_caliper: {
                      stack: {
                        id: "brake_caliper_1",
                        _lv: {
                          value: {
                            paint: {
                              color: "#FF0000FF"
                            }
                          }
                        }
                      }
                    },
                    styling_steering_wheel: {
                      stack: {
                        id: "mazdarx7_sw_mo_93",
                        _lv: {
                          value: {
                            paints: {
                              spokes: {
                                color: "#9F9F9FFF"
                              },
                              strings: {
                                color: "#373737FF"
                              },
                              alcantar: {
                                color: "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    styling_general_interior: {
                      stack: {
                        id: "mazdarx7_ir_sk_152"
                      }
                    },
                    styling_exhaust_flame_nitro: {
                      stack: {
                        id: "exhaust_flame_nitro_3",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    },
                    styling_exhaust_flame_back_fire: {
                      stack: {
                        id: "exhaust_flame_back_fire_3",
                        _lv: {
                          value: {
                            paint: {
                              color: "#F8A9A4FF"
                            }
                          }
                        }
                      }
                    }
                  },
                  glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  smoke_paint: {
                    color: "#FFFFFFFF"
                  },
                  headlight_paint: {
                    color: "#8FD7FFFF"
                  },
                  fog_light_glass_paint: {
                    color: "#FFFFFFFF",
                    material: 7
                  },
                  rear_light_glass_paint: {
                    color: "#0D1116FF",
                    material: 7
                  },
                  front_light_glass_paint: {
                    color: "#0D1116FF",
                    material: 7
                  }
                }
              }
            }
          },
          6: {
            stack: {
              id: "nitro_stock",
              _lv: {
                value: {
                  parts_collection: {
                    seed: 0,
                    items: {}
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        seed: 0,
        items: {}
      },
      "body_kit": "mazdarx7_rnt_bkit",
      "__desc_id": "mazdarx7",
      "body_kit_set": {
        keys: [
          "mazdarx7_stock_bkit",
          "mazdarx7_rnt_bkit"
        ]
      },
      body_part_set: {
        keys: [
          "mazdarx7_dr_sk_1",
          "mazdarx7_br_sk_3",
          "mazdarx7_ch_sk_4",
          "mazdarx7_sp_sk_6",
          "mazdarx7_tr_sk_7",
          "mazdarx7_lr_sk_8",
          "mazdarx7_mr_sk_9",
          "mazdarx7_bf_sk_10",
          "mazdarx7_bn_sk_11",
          "mazdarx7_sk_sk_20",
          "mazdarx7_ex_sk_2",
          "mazdarx7_lf_sk_5",
          "mazdarx7_cg_sk_58",
          "mazdarx7_rf_sk_76",
          "mazdarx7_sl_sk_82",
          "mazdarx7_sr_sk_87",
          "mazdarx7_sw_sk_92",
          "mazdarx7_hb_sk_98",
          "mazdarx7_sh_sk_104",
          "mazdarx7_db_sk_122",
          "mazdarx7_ir_sk_152",
          "mazdarx7_sh_rp_108",
          "mazdarx7_hb_sg_103",
          "mazdarx7_sw_mo_93",
          "mazdarx7_sr_ta_90",
          "mazdarx7_sl_ta_85",
          "mazdarx7_sp_rt_13",
          "mazdarx7_lf_rt_55",
          "mazdarx7_ex_se_80",
          "mazdarx7_ch_rt_17",
          "mazdarx7_cg_cm_59",
          "mazdarx7_br_rt_32",
          "mazdarx7_bf_rt_31",
          "wheel_rim_412",
          "brake_rotor_3",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_static",
          "neon_side_empty",
          "neon_rear_static",
          "exhaust_flame_back_fire_3",
          "exhaust_flame_nitro_3"
        ]
      },
      "consumed_resources": {
        nitro: {
          ts: 1696705794,
          amount: 20,
          max_amount: 20
        },
        gasoline: {
          ts: 1696705826,
          amount: 19.14529,
          max_amount: 40
        },
        statistic_drive_time: {
          amount: 1483.36
        },
        statistic_total_distance: {
          amount: 2044.515
        }
      }
    },

      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("rx7");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
};

const van = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      "tuning": {
        "cells": {
          "0": {
            "stack": {
              "id": "engine_ls",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "engine_block_4",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_low": {
                                "tune_amount": 32.83,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "engine_camshaft_9",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_high": {
                                "tune_amount": 13.5,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "engine_cooling_stock"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "engine_cylinder_head_8",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_mid": {
                                "tune_amount": 33.26,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "engine_ecu_8",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_rev_limiter": {
                                "tune_amount": 369.5988,
                                "right_tune_steps": 6
                              },
                              "engine_turbo_pressure": {
                                "tune_amount": 0.0648,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "engine_exhaust_manifold_4"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "engine_exhaust_4"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "engine_fuel_system_4"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "engine_intake_manifold_7",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_fall": {
                                "tune_amount": 591.602,
                                "right_tune_steps": 5
                              }
                            }
                          }
                        }
                      }
                    },
                    "9": {
                      "stack": {
                        "id": "engine_turbine_7"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    },
                    "throttle_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "engine_ecu_stock": {
                        "__desc_id": "engine_ecu_stock"
                      },
                      "engine_block_stock": {
                        "__desc_id": "engine_block_stock"
                      },
                      "engine_exhaust_stock": {
                        "__desc_id": "engine_exhaust_stock"
                      },
                      "engine_camshaft_stock": {
                        "__desc_id": "engine_camshaft_stock"
                      },
                      "engine_turbine_stock1": {
                        "__desc_id": "engine_turbine_stock1"
                      },
                      "engine_fuel_system_stock": {
                        "__desc_id": "engine_fuel_system_stock"
                      },
                      "engine_cylinder_head_stock": {
                        "__desc_id": "engine_cylinder_head_stock"
                      },
                      "engine_intake_manifold_stock": {
                        "__desc_id": "engine_intake_manifold_stock"
                      },
                      "engine_exhaust_manifold_stock": {
                        "__desc_id": "engine_exhaust_manifold_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "1": {
            "stack": {
              "id": "body_van_stage4",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "body_weight_reduction_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "mass": {
                                "tune_amount": -140.9759,
                                "left_tune_steps": 3
                              },
                              "mass_up_percent": {
                                "tune_amount": -0.3,
                                "left_tune_steps": 1,
                                "right_tune_steps": 5
                              },
                              "mass_front_percent": {
                                "tune_amount": 1.1,
                                "left_tune_steps": 2,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "body_front_aero_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "aero_sx": {
                                "tune_amount": -0.4,
                                "left_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "body_rear_aero_0"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "body_fuel_tank_0"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "body_strengthening_0"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "2": {
            "stack": {
              "id": "transmission_t50",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "transmission_gearbox_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "gear_1": {
                                "tune_amount": 0.2165,
                                "left_tune_steps": 3,
                                "right_tune_steps": 2
                              },
                              "gear_2": {
                                "tune_amount": 0.0613,
                                "left_tune_steps": 2,
                                "right_tune_steps": 1
                              },
                              "gear_3": {
                                "tune_amount": 0.0427,
                                "left_tune_steps": 1,
                                "right_tune_steps": 1
                              },
                              "gear_4": {
                                "tune_amount": 0.0333,
                                "right_tune_steps": 1
                              },
                              "gear_5": {
                                "tune_amount": 0.0267,
                                "right_tune_steps": 2
                              },
                              "gear_6": {
                                "tune_amount": 0.064,
                                "left_tune_steps": 1,
                                "right_tune_steps": 2
                              },
                              "gear_r": {
                                "tune_amount": -1.1456,
                                "left_tune_steps": 4
                              },
                              "gear_final_drive": {
                                "tune_amount": -0.1973,
                                "left_tune_steps": 2
                              },
                              "transmission_loss_coef": {
                                "tune_amount": -0.02,
                                "left_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "transmission_clutch_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "gear_shifting_delay": {
                                "tune_amount": -0.05,
                                "left_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "transmission_differential_viscous_3_2",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "transmission_rear_diff_visco_coef": {
                                "tune_amount": 40,
                                "right_tune_steps": 2
                              },
                              "transmission_front_diff_visco_coef": {
                                "tune_amount": -20,
                                "left_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "transmission_gear_drive_awd_1"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "transmission_clutch_stock": {
                        "__desc_id": "transmission_clutch_stock"
                      },
                      "transmission_gearbox_stock": {
                        "__desc_id": "transmission_gearbox_stock"
                      },
                      "transmission_differential_stock": {
                        "__desc_id": "transmission_differential_stock"
                      },
                      "transmission_gear_drive_rwd_stock": {
                        "__desc_id": "transmission_gear_drive_rwd_stock"
                      },
                      "transmission_differential_viscous_3_1": {
                        "value": {
                          "stat_tunes": {
                            "transmission_rear_diff_visco_coef": {
                              "tune_amount": 40,
                              "right_tune_steps": 2
                            }
                          }
                        },
                        "__desc_id": "transmission_differential_viscous_3_1"
                      }
                    }
                  }
                }
              }
            }
          },
          "3": {
            "stack": {
              "id": "suspension_van",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "suspension_springs_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_spring_way": {
                                "tune_amount": 0.0204,
                                "right_tune_steps": 3
                              },
                              "suspension_front_spring_stiffness": {
                                "right_tune_steps": 3
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "suspension_springs_rear_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_rear_spring_way": {
                                "tune_amount": -0.0432,
                                "left_tune_steps": 3,
                                "right_tune_steps": 3
                              },
                              "suspension_rear_spring_stiffness": {
                                "tune_amount": -44800,
                                "left_tune_steps": 3
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "suspension_shocks_front_stock"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "suspension_shocks_rear_stock"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "suspension_stabs_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_stabilizer": {
                                "tune_amount": 7600,
                                "right_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "suspension_stabs_rear_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_rear_stabilizer": {
                                "tune_amount": 7600,
                                "right_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "suspension_arms_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_toe": {
                                "tune_amount": -0.25,
                                "left_tune_steps": 1,
                                "right_tune_steps": 1
                              },
                              "suspension_front_lock": {
                                "tune_amount": 12.5,
                                "right_tune_steps": 5
                              },
                              "suspension_front_camber": {
                                "tune_amount": -0.8333,
                                "left_tune_steps": 1
                              },
                              "suspension_front_caster": {
                                "tune_amount": 4.8,
                                "right_tune_steps": 4
                              },
                              "suspension_front_ackerman": {
                                "left_tune_steps": 1,
                                "right_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "suspension_arms_rear_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_rear_toe": {
                                "tune_amount": 1,
                                "right_tune_steps": 2
                              },
                              "suspension_rear_camber": {
                                "tune_amount": -3,
                                "left_tune_steps": 2,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "suspension_brakes_stock"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "suspension_brakes_4": {
                        "value": {
                          "stat_tunes": {
                            "brake_max_torque": {
                              "tune_amount": 3750,
                              "right_tune_steps": 5
                            },
                            "brake_front_percent": {
                              "tune_amount": 5,
                              "left_tune_steps": 1,
                              "right_tune_steps": 2
                            }
                          }
                        },
                        "__desc_id": "suspension_brakes_4"
                      },
                      "suspension_shocks_rear_5": {
                        "value": {
                          "stat_tunes": {
                            "suspension_rear_fast_bump": {
                              "tune_amount": 540,
                              "right_tune_steps": 3
                            },
                            "suspension_rear_slow_bump": {
                              "tune_amount": 1200,
                              "right_tune_steps": 3
                            },
                            "suspension_rear_fast_rebound": {
                              "tune_amount": 1200,
                              "right_tune_steps": 3
                            },
                            "suspension_rear_slow_rebound": {
                              "tune_amount": 1530,
                              "right_tune_steps": 3
                            }
                          }
                        },
                        "__desc_id": "suspension_shocks_rear_5"
                      },
                      "suspension_shocks_front_5": {
                        "value": {
                          "stat_tunes": {
                            "suspension_front_fast_bump": {
                              "tune_amount": 792,
                              "right_tune_steps": 3
                            },
                            "suspension_front_slow_bump": {
                              "tune_amount": 600,
                              "right_tune_steps": 3
                            },
                            "suspension_front_fast_rebound": {
                              "tune_amount": 960.0004,
                              "right_tune_steps": 3
                            },
                            "suspension_front_slow_rebound": {
                              "tune_amount": 1710,
                              "right_tune_steps": 3
                            }
                          }
                        },
                        "__desc_id": "suspension_shocks_front_5"
                      },
                      "suspension_arms_rear_stock": {
                        "__desc_id": "suspension_arms_rear_stock"
                      },
                      "suspension_arms_front_stock": {
                        "__desc_id": "suspension_arms_front_stock"
                      },
                      "suspension_stabs_rear_stock": {
                        "__desc_id": "suspension_stabs_rear_stock"
                      },
                      "suspension_stabs_front_stock": {
                        "__desc_id": "suspension_stabs_front_stock"
                      },
                      "suspension_springs_rear_stock": {
                        "__desc_id": "suspension_springs_rear_stock"
                      },
                      "suspension_springs_front_stock": {
                        "__desc_id": "suspension_springs_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "4": {
            "stack": {
              "id": "default_wheels",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_rim_front_22"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "wheel_tyre_front_9",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "wheel_front_tyre_pressure": {
                                "tune_amount": 100000,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "wheel_rim_rear_43"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "wheel_tyre_rear_10",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "wheel_rear_tyre_pressure": {
                                "tune_amount": 100000,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "wheel_spacers_front_2"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "wheel_spacers_rear_4",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "wheel_rear_base_width_offset": {
                                "tune_amount": -0.16,
                                "left_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "wheel_rim_rear_18": {
                        "__desc_id": "wheel_rim_rear_18"
                      },
                      "wheel_rim_rear_40": {
                        "__desc_id": "wheel_rim_rear_40"
                      },
                      "wheel_rim_rear_62": {
                        "__desc_id": "wheel_rim_rear_62"
                      },
                      "wheel_rim_rear_66": {
                        "__desc_id": "wheel_rim_rear_66"
                      },
                      "wheel_tyre_rear_1": {
                        "__desc_id": "wheel_tyre_rear_1"
                      },
                      "wheel_tyre_rear_7": {
                        "__desc_id": "wheel_tyre_rear_7"
                      },
                      "wheel_tyre_rear_8": {
                        "__desc_id": "wheel_tyre_rear_8"
                      },
                      "wheel_tyre_rear_9": {
                        "value": {
                          "stat_tunes": {
                            "wheel_rear_tyre_pressure": {
                              "tune_amount": -12500,
                              "left_tune_steps": 1
                            }
                          }
                        },
                        "__desc_id": "wheel_tyre_rear_9"
                      },
                      "wheel_rim_front_18": {
                        "__desc_id": "wheel_rim_front_18"
                      },
                      "wheel_rim_front_62": {
                        "__desc_id": "wheel_rim_front_62"
                      },
                      "wheel_rim_front_65": {
                        "__desc_id": "wheel_rim_front_65"
                      },
                      "wheel_rim_front_66": {
                        "__desc_id": "wheel_rim_front_66"
                      },
                      "wheel_tyre_front_1": {
                        "__desc_id": "wheel_tyre_front_1"
                      },
                      "wheel_tyre_front_7": {
                        "__desc_id": "wheel_tyre_front_7"
                      },
                      "wheel_tyre_front_10": {
                        "__desc_id": "wheel_tyre_front_10"
                      },
                      "wheel_spacers_rear_9": {
                        "__desc_id": "wheel_spacers_rear_9"
                      },
                      "wheel_spacers_rear_stock": {
                        "__desc_id": "wheel_spacers_rear_stock"
                      },
                      "wheel_spacers_front_stock": {
                        "__desc_id": "wheel_spacers_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "5": {
            "stack": {
              "id": "styling_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "styling_cage": {
                      "stack": {
                        "id": "van_cg_sk_48",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#FFFFFFFF",
                              "custom": true,
                              "material": 5
                            }
                          }
                        }
                      }
                    },
                    "styling_roof": {
                      "stack": {
                        "id": "van_rf_rt_57",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_doors": {
                      "stack": {
                        "id": "van_dr_sk_5",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_trunk": {
                      "stack": {
                        "id": "van_tr_sk_9",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_bonnet": {
                      "stack": {
                        "id": "van_bn_rt_49",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_skirts": {
                      "stack": {
                        "id": "van_sk_rt_58",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_chassis": {
                      "stack": {
                        "id": "van_ch_rt_52",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust": {
                      "stack": {
                        "id": "van_ex_rt_53",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_mirrors": {
                      "stack": {
                        "id": "van_mr_rt_56",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_shifter": {
                      "stack": {
                        "id": "van_sh_sg_37",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_rear": {
                      "stack": {
                        "id": "neon_rear_static",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#D8D82BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_side": {
                      "stack": {
                        "id": "neon_side_static",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#D8D82BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_left": {
                      "stack": {
                        "id": "van_sl_rp_19",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#373737FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_wheel_rim": {
                      "stack": {
                        "id": "wheel_rim_38",
                        "_lv": {
                          "value": {
                            "rim_paint": {
                              "color": "#0D1116FF",
                              "material": 5
                            },
                            "spokes_paint": {
                              "color": "#FFFFFFFF",
                              "custom": true,
                              "material": 5
                            }
                          }
                        }
                      }
                    },
                    "styling_hand_brake": {
                      "stack": {
                        "id": "van_hb_iy_33",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_front": {
                      "stack": {
                        "id": "neon_front_static",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#D8D82BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_right": {
                      "stack": {
                        "id": "van_sr_rp_25",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#373737FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_suspension": {
                      "stack": {
                        "id": "suspension_mac_pherson",
                        "_lv": {
                          "value": {
                            "paints": {
                              "SuspensionArm": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionRack": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionSpring": {
                                "color": "#DA1918FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_rotor": {
                      "stack": {
                        "id": "brake_rotor_5"
                      }
                    },
                    "styling_bumper_rear": {
                      "stack": {
                        "id": "van_br_sk_14",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_rear": {
                      "stack": {
                        "id": "van_lr_rt_55",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_bumper_front": {
                      "stack": {
                        "id": "van_bf_rt_50",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#C2C4C6FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_front": {
                      "stack": {
                        "id": "van_lf_rt_54",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_caliper": {
                      "stack": {
                        "id": "brake_caliper_1",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#E0E13DFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_steering_wheel": {
                      "stack": {
                        "id": "van_sw_sg_44",
                        "_lv": {
                          "value": {
                            "paints": {
                              "spokes": {
                                "color": "#9F9F9FFF"
                              },
                              "strings": {
                                "color": "#373737FF"
                              },
                              "alcantar": {
                                "color": "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_general_interior": {
                      "stack": {
                        "id": "van_ir_sk_81"
                      }
                    },
                    "styling_exhaust_flame_nitro": {
                      "stack": {
                        "id": "exhaust_flame_nitro_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#7D99FFFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust_flame_back_fire": {
                      "stack": {
                        "id": "exhaust_flame_back_fire_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#7D99FFFF"
                            }
                          }
                        }
                      }
                    }
                  },
                  "glass_paint": {
                    "color": "#FFFFFFFF",
                    "custom": true,
                    "material": 7
                  },
                  "smoke_paint": {
                    "color": "#FFFFFFFF"
                  },
                  "headlight_paint": {
                    "color": "#A5BAFFFF",
                    "custom": true
                  },
                  "fog_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "rear_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "front_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  }
                }
              }
            }
          },
          "6": {
            "stack": {
              "id": "nitro_stock",
              "_lv": {
                "value": {
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "7": {
            "stack": {
              "id": "wheel_tires_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_tires_set_4",
                        "_lv": {
                          "value": {
                            "resources": {
                              "rear_left_wheel_tire": {
                                "amount": 98.76801
                              },
                              "front_left_wheel_tire": {
                                "amount": 99.78166
                              },
                              "rear_right_wheel_tire": {
                                "amount": 98.49927
                              },
                              "front_right_wheel_tire": {
                                "amount": 99.78237
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "wheel_tires_set_1": {
                        "value": {
                          "resources": {
                            "rear_left_wheel_tire": {
                              "amount": 85.65143
                            },
                            "front_left_wheel_tire": {
                              "amount": 99.15504
                            },
                            "rear_right_wheel_tire": {
                              "amount": 87.37653
                            },
                            "front_right_wheel_tire": {
                              "amount": 99.02145
                            }
                          }
                        },
                        "__desc_id": "wheel_tires_set_1"
                      },
                      "wheel_tires_set_stock": {
                        "value": {
                          "resources": {
                            "rear_left_wheel_tire": {
                              "amount": 42.3998
                            },
                            "front_left_wheel_tire": {
                              "amount": 97.48527
                            },
                            "rear_right_wheel_tire": {
                              "amount": 41.35753
                            },
                            "front_right_wheel_tire": {
                              "amount": 97.47966
                            }
                          }
                        },
                        "__desc_id": "wheel_tires_set_stock"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        "seed": 0,
        "items": {}
      },
      "body_kit": "van_rnt_bkit",
      "__desc_id": "van",
      "gasoline_id": "sports_gasoline",
      "body_kit_set": {
        "keys": [
          "van_stock_bkit",
          "van_rnt_bkit"
        ]
      },
      "body_part_set": {
        "keys": [
          "van_ch_sk_4",
          "van_bf_sk_2",
          "van_br_sk_3",
          "van_dr_sk_5",
          "van_mr_sk_8",
          "van_bn_sk_1",
          "van_tr_sk_9",
          "van_lf_sk_7",
          "van_lr_sk_6",
          "van_ex_sk_12",
          "van_sl_sk_17",
          "van_sr_sk_23",
          "van_sw_sk_29",
          "van_hb_sk_30",
          "van_sh_sk_36",
          "van_cg_sk_47",
          "van_sk_sk_60",
          "van_rf_sk_61",
          "van_db_sk_63",
          "van_ir_sk_81",
          "wheel_rim_1289",
          "brake_rotor_1",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_1",
          "exhaust_flame_nitro_1",
          "van_ch_rt_52",
          "van_bf_rt_50",
          "van_br_rt_51",
          "van_sk_rt_58",
          "van_rf_rt_57",
          "van_mr_rt_56",
          "van_bn_rt_49",
          "van_tr_rt_59",
          "van_lf_rt_54",
          "van_lr_rt_55",
          "van_ex_rt_53",
          "van_cg_sk_48",
          "wheel_rim_69",
          "wheel_rim_39",
          "brake_rotor_2",
          "wheel_rim_40",
          "wheel_rim_14",
          "neon_front_static",
          "neon_side_static",
          "neon_rear_static",
          "wheel_rim_441",
          "van_hb_iy_33",
          "van_sl_ct_78",
          "brake_rotor_5",
          "van_br_sk_14",
          "wheel_rim_38",
          "van_sw_sg_44",
          "van_sh_sg_37",
          "van_sl_rp_19",
          "van_sr_rp_25"
        ]
      },
      "consumed_resources": {
        "nitro": {
          "ts": 1705851472,
          "amount": 20,
          "max_amount": 20
        },
        "gasoline": {
          "ts": 1705851472,
          "amount": 34.06201,
          "max_amount": 40
        },
        "statistic_drive_time": {
          "amount": 24574.05
        },
        "statistic_total_distance": {
          "amount": 270874
        }
      }
    }

    player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("van");
    player_result.d.data.car_models.values.push(1);

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
    return false;
  }
};


const volvo = async (message) => {
  const login = await fetch(`${process.env.LoginApi}`, {
    method: "POST",
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'UnityPlayer/2021.3.19f1 (UnityWebRequest/1.0, libcurl/7.84.0-DEV)',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate',
    'X-Unity-Version': '2021.3.19f1',
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      "tuning": {
        "cells": {
          "0": {
            "stack": {
              "id": "engine_volvo",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "engine_block_4",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_low": {
                                "tune_amount": 20.25,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "engine_camshaft_9",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_high": {
                                "tune_amount": 11.02,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "engine_cooling_stock"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "engine_cylinder_head_8",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_mid": {
                                "tune_amount": 22.68,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "engine_ecu_8",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_rev_limiter": {
                                "tune_amount": 2000,
                                "right_tune_steps": 6
                              },
                              "engine_turbo_pressure": {
                                "tune_amount": 0.1458,
                                "right_tune_steps": 6
                              }
                            }
                          }
                        }
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "engine_exhaust_manifold_4"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "engine_exhaust_4"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "engine_fuel_system_4"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "engine_intake_manifold_7",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "engine_torque_curve_fall": {
                                "tune_amount": 1008.003,
                                "right_tune_steps": 5
                              }
                            }
                          }
                        }
                      }
                    },
                    "9": {
                      "stack": {
                        "id": "engine_turbine_7"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    },
                    "throttle_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "engine_ecu_stock": {
                        "__desc_id": "engine_ecu_stock"
                      },
                      "engine_camshaft_7": {
                        "__desc_id": "engine_camshaft_7"
                      },
                      "engine_block_stock": {
                        "__desc_id": "engine_block_stock"
                      },
                      "engine_exhaust_stock": {
                        "__desc_id": "engine_exhaust_stock"
                      },
                      "engine_camshaft_stock": {
                        "__desc_id": "engine_camshaft_stock"
                      },
                      "engine_turbine_stock1": {
                        "__desc_id": "engine_turbine_stock1"
                      },
                      "engine_fuel_system_stock": {
                        "__desc_id": "engine_fuel_system_stock"
                      },
                      "engine_cylinder_head_stock": {
                        "__desc_id": "engine_cylinder_head_stock"
                      },
                      "engine_intake_manifold_stock": {
                        "__desc_id": "engine_intake_manifold_stock"
                      },
                      "engine_exhaust_manifold_stock": {
                        "__desc_id": "engine_exhaust_manifold_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "1": {
            "stack": {
              "id": "body_volvo_stage4",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "body_weight_reduction_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "mass": {
                                "tune_amount": -62.8799,
                                "left_tune_steps": 3
                              },
                              "mass_up_percent": {
                                "tune_amount": 0.9,
                                "left_tune_steps": 1,
                                "right_tune_steps": 5
                              },
                              "mass_front_percent": {
                                "tune_amount": -1,
                                "left_tune_steps": 2,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "body_front_aero_0"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "body_rear_aero_0"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "body_fuel_tank_5"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "body_strengthening_0"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "2": {
            "stack": {
              "id": "transmission_t50",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "transmission_gearbox_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "gear_1": {
                                "tune_amount": -0.9744,
                                "left_tune_steps": 3
                              },
                              "gear_2": {
                                "tune_amount": -0.368,
                                "left_tune_steps": 2
                              },
                              "gear_3": {
                                "tune_amount": -0.128,
                                "left_tune_steps": 1
                              },
                              "gear_5": {
                                "tune_amount": 0.1067,
                                "right_tune_steps": 2
                              },
                              "gear_6": {
                                "right_tune_steps": 1
                              },
                              "gear_r": {
                                "tune_amount": -1.1456,
                                "left_tune_steps": 4
                              },
                              "gear_final_drive": {
                                "tune_amount": -0.296,
                                "left_tune_steps": 2
                              },
                              "transmission_loss_coef": {
                                "tune_amount": -0.02,
                                "left_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "transmission_clutch_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "gear_shifting_delay": {
                                "tune_amount": -0.05,
                                "left_tune_steps": 4
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "transmission_differential_viscous_3_1",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "transmission_rear_diff_visco_coef": {
                                "tune_amount": 40,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "transmission_gear_drive_rwd_stock"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "transmission_clutch_stock": {
                        "__desc_id": "transmission_clutch_stock"
                      },
                      "transmission_gearbox_stock": {
                        "__desc_id": "transmission_gearbox_stock"
                      },
                      "transmission_differential_stock": {
                        "__desc_id": "transmission_differential_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "3": {
            "stack": {
              "id": "suspension_volvo",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "suspension_springs_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_spring_way": {
                                "tune_amount": 0.0192,
                                "right_tune_steps": 1
                              },
                              "suspension_front_spring_stiffness": {
                                "right_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "suspension_springs_rear_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_rear_spring_way": {
                                "tune_amount": 0.0216,
                                "right_tune_steps": 1
                              },
                              "suspension_rear_spring_stiffness": {
                                "right_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "suspension_shocks_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_fast_bump": {
                                "tune_amount": 360,
                                "right_tune_steps": 3
                              },
                              "suspension_front_slow_bump": {
                                "tune_amount": 540,
                                "right_tune_steps": 3
                              },
                              "suspension_front_fast_rebound": {
                                "tune_amount": 480,
                                "left_tune_steps": 2,
                                "right_tune_steps": 2
                              },
                              "suspension_front_slow_rebound": {
                                "tune_amount": 1080,
                                "right_tune_steps": 3
                              }
                            }
                          }
                        }
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "suspension_shocks_rear_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_rear_fast_bump": {
                                "tune_amount": 360,
                                "right_tune_steps": 3
                              },
                              "suspension_rear_slow_bump": {
                                "tune_amount": 840,
                                "right_tune_steps": 3
                              },
                              "suspension_rear_fast_rebound": {
                                "tune_amount": -480,
                                "left_tune_steps": 2
                              },
                              "suspension_rear_slow_rebound": {
                                "tune_amount": 1080,
                                "right_tune_steps": 3
                              }
                            }
                          }
                        }
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "suspension_stabs_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_stabilizer": {
                                "tune_amount": 1900,
                                "right_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "suspension_stabs_rear_5"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "suspension_arms_front_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_front_toe": {
                                "tune_amount": -0.25,
                                "left_tune_steps": 1,
                                "right_tune_steps": 1
                              },
                              "suspension_front_lock": {
                                "tune_amount": 12.5,
                                "right_tune_steps": 5
                              },
                              "suspension_front_camber": {
                                "left_tune_steps": 1
                              },
                              "suspension_front_caster": {
                                "tune_amount": 2,
                                "right_tune_steps": 2
                              },
                              "suspension_front_ackerman": {
                                "tune_amount": 25,
                                "right_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "suspension_arms_rear_5",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "suspension_rear_toe": {
                                "tune_amount": 0.125,
                                "left_tune_steps": 1,
                                "right_tune_steps": 1
                              },
                              "suspension_rear_camber": {
                                "tune_amount": 3,
                                "right_tune_steps": 2
                              }
                            }
                          }
                        }
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "suspension_brakes_4",
                        "_lv": {
                          "value": {
                            "stat_tunes": {
                              "brake_max_torque": {
                                "tune_amount": 2166.67,
                                "right_tune_steps": 5
                              },
                              "brake_front_percent": {
                                "tune_amount": 5,
                                "right_tune_steps": 1
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "suspension_brakes_stock": {
                        "__desc_id": "suspension_brakes_stock"
                      },
                      "suspension_arms_rear_stock": {
                        "__desc_id": "suspension_arms_rear_stock"
                      },
                      "suspension_arms_front_stock": {
                        "__desc_id": "suspension_arms_front_stock"
                      },
                      "suspension_stabs_rear_stock": {
                        "__desc_id": "suspension_stabs_rear_stock"
                      },
                      "suspension_shocks_rear_stock": {
                        "__desc_id": "suspension_shocks_rear_stock"
                      },
                      "suspension_stabs_front_stock": {
                        "__desc_id": "suspension_stabs_front_stock"
                      },
                      "suspension_shocks_front_stock": {
                        "__desc_id": "suspension_shocks_front_stock"
                      },
                      "suspension_springs_rear_stock": {
                        "__desc_id": "suspension_springs_rear_stock"
                      },
                      "suspension_springs_front_stock": {
                        "__desc_id": "suspension_springs_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "4": {
            "stack": {
              "id": "default_wheels",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_rim_front_22"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "wheel_tyre_front_1"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "wheel_rim_rear_23"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "wheel_tyre_rear_1"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "wheel_spacers_front_3"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "wheel_spacers_rear_stock"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "wheel_rim_rear_5": {
                        "__desc_id": "wheel_rim_rear_5"
                      },
                      "wheel_rim_front_5": {
                        "__desc_id": "wheel_rim_front_5"
                      },
                      "wheel_tyre_rear_5": {
                        "__desc_id": "wheel_tyre_rear_5"
                      },
                      "wheel_tyre_rear_9": {
                        "__desc_id": "wheel_tyre_rear_9"
                      },
                      "wheel_tyre_front_5": {
                        "__desc_id": "wheel_tyre_front_5"
                      },
                      "wheel_tyre_front_9": {
                        "__desc_id": "wheel_tyre_front_9"
                      },
                      "wheel_spacers_rear_4": {
                        "value": {
                          "stat_tunes": {
                            "wheel_rear_base_width_offset": {
                              "tune_amount": -0.08,
                              "left_tune_steps": 2
                            }
                          }
                        },
                        "__desc_id": "wheel_spacers_rear_4"
                      },
                      "wheel_spacers_front_2": {
                        "__desc_id": "wheel_spacers_front_2"
                      },
                      "wheel_spacers_front_4": {
                        "value": {
                          "stat_tunes": {
                            "wheel_front_base_width_offset": {
                              "tune_amount": -0.04,
                              "left_tune_steps": 1
                            }
                          }
                        },
                        "__desc_id": "wheel_spacers_front_4"
                      },
                      "wheel_spacers_front_stock": {
                        "__desc_id": "wheel_spacers_front_stock"
                      }
                    }
                  }
                }
              }
            }
          },
          "5": {
            "stack": {
              "id": "styling_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "styling_cage": {
                      "stack": {
                        "id": "volvo_cg_sk_54",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_roof": {
                      "stack": {
                        "id": "volvo_rf_sk_49",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_doors": {
                      "stack": {
                        "id": "volvo_dr_sk_27",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_trunk": {
                      "stack": {
                        "id": "volvo_tr_sk_47",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_bonnet": {
                      "stack": {
                        "id": "volvo_bn_sk_6",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_skirts": {
                      "stack": {
                        "id": "volvo_sk_sk_48",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_chassis": {
                      "stack": {
                        "id": "volvo_ch_sk_24",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#0D1116FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust": {
                      "stack": {
                        "id": "volvo_ex_sk_30",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_mirrors": {
                      "stack": {
                        "id": "volvo_mr_sk_37",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_shifter": {
                      "stack": {
                        "id": "volvo_sh_sk_83",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_spoiler": {
                      "stack": {
                        "id": "volvo_sp_sk_53",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_rear": {
                      "stack": {
                        "id": "neon_rear_static",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#2BD86BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_side": {
                      "stack": {
                        "id": "neon_side_static",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#2BD86BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_left": {
                      "stack": {
                        "id": "volvo_sl_sk_61",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#373737FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_wheel_rim": {
                      "stack": {
                        "id": "wheel_rim_707",
                        "_lv": {
                          "value": {
                            "rim_paint": {
                              "color": "#C2C4C6FF",
                              "material": 5
                            },
                            "spokes_paint": {
                              "color": "#C2C4C6FF",
                              "material": 5
                            }
                          }
                        }
                      }
                    },
                    "styling_hand_brake": {
                      "stack": {
                        "id": "volvo_hb_sk_77",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_front": {
                      "stack": {
                        "id": "neon_front_static",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#2BD86BFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_right": {
                      "stack": {
                        "id": "volvo_sr_sk_66",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#373737FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_suspension": {
                      "stack": {
                        "id": "suspension_mac_pherson",
                        "_lv": {
                          "value": {
                            "paints": {
                              "SuspensionArm": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionRack": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionSpring": {
                                "color": "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_rotor": {
                      "stack": {
                        "id": "brake_rotor_2"
                      }
                    },
                    "styling_bumper_rear": {
                      "stack": {
                        "id": "volvo_br_sk_19",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_rear": {
                      "stack": {
                        "id": "volvo_lr_sk_33",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_bumper_front": {
                      "stack": {
                        "id": "volvo_bf_sk_12",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_front": {
                      "stack": {
                        "id": "volvo_lf_sk_32",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#505050FF",
                              "material": 4
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_caliper": {
                      "stack": {
                        "id": "brake_caliper_1",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#5C5C5CFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_steering_wheel": {
                      "stack": {
                        "id": "volvo_sw_sk_71",
                        "_lv": {
                          "value": {
                            "paints": {
                              "spokes": {
                                "color": "#9F9F9FFF"
                              },
                              "strings": {
                                "color": "#373737FF"
                              },
                              "alcantar": {
                                "color": "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_general_interior": {
                      "stack": {
                        "id": "volvo_ir_sk_110"
                      }
                    },
                    "styling_exhaust_flame_nitro": {
                      "stack": {
                        "id": "exhaust_flame_nitro_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#7D99FFFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust_flame_back_fire": {
                      "stack": {
                        "id": "exhaust_flame_back_fire_2",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#7D99FFFF"
                            }
                          }
                        }
                      }
                    }
                  },
                  "glass_paint": {
                    "color": "#191919FF",
                    "material": 7
                  },
                  "smoke_paint": {
                    "color": "#FFFFFFFF"
                  },
                  "headlight_paint": {
                    "color": "#FFFFFFFF"
                  },
                  "fog_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "rear_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  },
                  "front_light_glass_paint": {
                    "color": "#FFFFFFFF",
                    "material": 7
                  }
                }
              }
            }
          },
          "6": {
            "stack": {
              "id": "nitro_stock",
              "_lv": {
                "value": {
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "7": {
            "stack": {
              "id": "wheel_tires_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_tires_set_stock",
                        "_lv": {
                          "value": {
                            "resources": {
                              "rear_left_wheel_tire": {
                                "amount": 100
                              },
                              "front_left_wheel_tire": {
                                "amount": 100
                              },
                              "rear_right_wheel_tire": {
                                "amount": 100
                              },
                              "front_right_wheel_tire": {
                                "amount": 100
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "wheel_tires_set_0": {
                        "value": {
                          "resources": {
                            "rear_left_wheel_tire": {
                              "amount": 97.40788
                            },
                            "front_left_wheel_tire": {
                              "amount": 99.89729
                            },
                            "rear_right_wheel_tire": {
                              "amount": 97.68451
                            },
                            "front_right_wheel_tire": {
                              "amount": 99.86866
                            }
                          }
                        },
                        "__desc_id": "wheel_tires_set_0"
                      },
                      "wheel_tires_set_1": {
                        "value": {
                          "resources": {
                            "rear_left_wheel_tire": {
                              "amount": 76.97832
                            },
                            "front_left_wheel_tire": {
                              "amount": 99.37261
                            },
                            "rear_right_wheel_tire": {
                              "amount": 78.72288
                            },
                            "front_right_wheel_tire": {
                              "amount": 99.18264
                            }
                          }
                        },
                        "__desc_id": "wheel_tires_set_1"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        "seed": 0,
        "items": {}
      },
      "body_kit": "volvo_stock_bkit",
      "__desc_id": "volvo",
      "gasoline_id": "sports_gasoline",
      "body_kit_set": {
        "keys": [
          "volvo_stock_bkit",
          "volvo_missile_bkit",
          "volvo_cbw_bkit"
        ]
      },
      "body_part_set": {
        "keys": [
          "volvo_bf_sk_12",
          "volvo_br_sk_19",
          "volvo_dr_sk_27",
          "volvo_mr_sk_37",
          "volvo_bn_sk_6",
          "volvo_tr_sk_47",
          "volvo_lf_sk_32",
          "volvo_lr_sk_33",
          "volvo_ex_sk_30",
          "volvo_ch_sk_24",
          "volvo_sk_sk_48",
          "volvo_rf_sk_49",
          "volvo_sp_sk_53",
          "volvo_cg_sk_54",
          "volvo_sl_sk_61",
          "volvo_sr_sk_66",
          "volvo_sw_sk_71",
          "volvo_hb_sk_77",
          "volvo_sh_sk_83",
          "volvo_db_sk_92",
          "volvo_ir_sk_110",
          "wheel_rim_376",
          "brake_rotor_1",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_1",
          "exhaust_flame_nitro_1",
          "volvo_ch_me_22",
          "volvo_bf_me_9",
          "volvo_br_me_16",
          "volvo_sk_me_40",
          "volvo_dr_me_25",
          "volvo_bn_me_3",
          "volvo_ex_me_28",
          "volvo_tr_me_45",
          "volvo_lf_me_52",
          "volvo_mr_me_35",
          "volvo_sp_me_43",
          "wheel_rim_67",
          "volvo_bn_cm_5",
          "volvo_bf_cm_10",
          "volvo_rf_rt_38",
          "volvo_lf_cm_55",
          "volvo_lr_sk_51",
          "volvo_tr_rt_46",
          "volvo_sp_rt_44",
          "volvo_ex_se_58",
          "volvo_cg_cm_20",
          "wheel_rim_1306",
          "volvo_bf_cw_7",
          "volvo_br_cw_13",
          "volvo_bn_cw_2",
          "volvo_sp_cw_42",
          "volvo_sk_cw_39",
          "wheel_rim_30",
          "wheel_rim_707",
          "brake_rotor_2",
          "neon_front_static",
          "neon_side_static",
          "neon_rear_static"
        ]
      },
      "consumed_resources": {
        "nitro": {
          "ts": 1705905526,
          "amount": 20,
          "max_amount": 20
        },
        "gasoline": {
          "ts": 1705905527,
          "amount": 55.57357,
          "max_amount": 90
        },
        "statistic_drive_time": {
          "amount": 10172.46
        },
        "statistic_total_distance": {
          "amount": 79026.87
        }
      }
    },

      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("volvo");
    player_result.d.data.car_models.values.push(1);
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
    return false;
  }
};


const bmw = async (message) => {
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

    player_result.d.data.cars.items[player_result.d.data.cars.seed] = {
      "tuning": {
        "cells": {
          "0": {
            "stack": {
              "id": "engine_bmwm5x5",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "engine_block_3"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "engine_camshaft_3"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "engine_cooling_stock"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "engine_cylinder_head_stock"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "engine_ecu_6"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "engine_exhaust_manifold_3"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "engine_exhaust_2"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "engine_fuel_system_1"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "engine_intake_manifold_3"
                      }
                    },
                    "9": {
                      "stack": {
                        "id": "engine_turbine_stock"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    },
                    "throttle_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "1": {
            "stack": {
              "id": "body_bmwm5x5",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "body_weight_reduction_0"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "body_front_aero_0"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "body_rear_aero_0"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "body_fuel_tank_0"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "body_strengthening_0"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "2": {
            "stack": {
              "id": "transmission_bmwm5x5",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "transmission_gearbox_5"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "transmission_clutch_5"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "transmission_differential_open2"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "transmission_gear_drive_awd_stock"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "3": {
            "stack": {
              "id": "suspension_bmwm5x5",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "suspension_springs_front_3"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "suspension_springs_rear_3"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "suspension_shocks_front_3"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "suspension_shocks_rear_3"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "suspension_stabs_front_stock"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "suspension_stabs_rear_3"
                      }
                    },
                    "6": {
                      "stack": {
                        "id": "suspension_arms_front_3"
                      }
                    },
                    "7": {
                      "stack": {
                        "id": "suspension_arms_rear_3"
                      }
                    },
                    "8": {
                      "stack": {
                        "id": "suspension_brakes_4"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "4": {
            "stack": {
              "id": "default_wheels",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_rim_front_66"
                      }
                    },
                    "1": {
                      "stack": {
                        "id": "wheel_tyre_front_10"
                      }
                    },
                    "2": {
                      "stack": {
                        "id": "wheel_rim_rear_67"
                      }
                    },
                    "3": {
                      "stack": {
                        "id": "wheel_tyre_rear_10"
                      }
                    },
                    "4": {
                      "stack": {
                        "id": "wheel_spacers_front_4"
                      }
                    },
                    "5": {
                      "stack": {
                        "id": "wheel_spacers_rear_2"
                      }
                    }
                  },
                  "resources": {
                    "resource": {
                      "amount": 1
                    },
                    "repair_limit": {
                      "amount": 1
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "5": {
            "stack": {
              "id": "styling_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "styling_cage": {
                      "stack": {
                        "id": "bmwm5x5_cg_sk_14",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_roof": {
                      "stack": {
                        "id": "bmwm5x5_rf_sk_37",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#1D0303FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_doors": {
                      "stack": {
                        "id": "bmwm5x5_dr_rt_19",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_trunk": {
                      "stack": {
                        "id": "bmwm5x5_tr_rt_50",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_bonnet": {
                      "stack": {
                        "id": "bmwm5x5_bn_sk_4",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_skirts": {
                      "stack": {
                        "id": "bmwm5x5_sk_sx_42",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_chassis": {
                      "stack": {
                        "id": "bmwm5x5_ch_rt_16",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust": {
                      "stack": {
                        "id": "bmwm5x5_ex_rt_22",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_mirrors": {
                      "stack": {
                        "id": "bmwm5x5_mr_rt_32",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#1D0303FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_shifter": {
                      "stack": {
                        "id": "bmwm5x5_sh_sk_91",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_spoiler": {
                      "stack": {
                        "id": "bmwm5x5_sp_rt_45",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#1D0303FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_rear": {
                      "stack": {
                        "id": "neon_rear_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_side": {
                      "stack": {
                        "id": "neon_side_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_left": {
                      "stack": {
                        "id": "bmwm5x5_sl_sk_70",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#373737FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_wheel_rim": {
                      "stack": {
                        "id": "wheel_rim_368",
                        "_lv": {
                          "value": {
                            "rim_paint": {
                              "color": "#2B2C28FF",
                              "material": 1
                            },
                            "spokes_paint": {
                              "color": "#000000FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_hand_brake": {
                      "stack": {
                        "id": "bmwm5x5_hb_sk_85",
                        "_lv": {
                          "value": {
                            "paints": {
                              "handle": {
                                "color": "#9F9F9FFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_neon_front": {
                      "stack": {
                        "id": "neon_front_empty",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#000000FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_seat_right": {
                      "stack": {
                        "id": "bmwm5x5_sr_sk_75",
                        "_lv": {
                          "value": {
                            "paints": {
                              "base": {
                                "color": "#373737FF"
                              },
                              "bottom": {
                                "color": "#373737FF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_suspension": {
                      "stack": {
                        "id": "suspension_mac_pherson",
                        "_lv": {
                          "value": {
                            "paints": {
                              "SuspensionArm": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionRack": {
                                "color": "#5C5C5CFF"
                              },
                              "SuspensionSpring": {
                                "color": "#5C5C5CFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_rotor": {
                      "stack": {
                        "id": "brake_rotor_3"
                      }
                    },
                    "styling_bumper_rear": {
                      "stack": {
                        "id": "bmwm5x5_br_rt_11",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_rear": {
                      "stack": {
                        "id": "bmwm5x5_lr_cw_29",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_bumper_front": {
                      "stack": {
                        "id": "bmwm5x5_bf_rt_7",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_lights_front": {
                      "stack": {
                        "id": "bmwm5x5_lf_rt_26",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#A0A199FF",
                              "material": 1
                            }
                          }
                        }
                      }
                    },
                    "styling_brake_caliper": {
                      "stack": {
                        "id": "brake_caliper_1",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#884747FF"
                            }
                          }
                        }
                      }
                    },
                    "styling_steering_wheel": {
                      "stack": {
                        "id": "bmwm5x5_sw_sk_80",
                        "_lv": {
                          "value": {
                            "paints": {
                              "spokes": {
                                "color": "#9F9F9FFF"
                              },
                              "strings": {
                                "color": "#373737FF"
                              },
                              "alcantar": {
                                "color": "#2B2B2BFF"
                              }
                            }
                          }
                        }
                      }
                    },
                    "styling_general_interior": {
                      "stack": {
                        "id": "bmwm5x5_ir_sk_53"
                      }
                    },
                    "styling_exhaust_flame_nitro": {
                      "stack": {
                        "id": "exhaust_flame_nitro_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#FFFFFFFF"
                            }
                          }
                        }
                      }
                    },
                    "styling_exhaust_flame_back_fire": {
                      "stack": {
                        "id": "exhaust_flame_back_fire_3",
                        "_lv": {
                          "value": {
                            "paint": {
                              "color": "#7D99FFFF"
                            }
                          }
                        }
                      }
                    }
                  },
                  "glass_paint": {
                    "color": "#92C2FFFF",
                    "material": 7
                  },
                  "smoke_paint": {
                    "color": "#FFFFFFFF"
                  },
                  "headlight_paint": {
                    "color": "#8FD7FFFF"
                  },
                  "fog_light_glass_paint": {
                    "color": "#181A1AFF",
                    "material": 7
                  },
                  "rear_light_glass_paint": {
                    "color": "#FCFCFCFF",
                    "material": 7
                  },
                  "front_light_glass_paint": {
                    "color": "#92C2FFFF",
                    "material": 7
                  }
                }
              }
            }
          },
          "6": {
            "stack": {
              "id": "nitro_stock",
              "_lv": {
                "value": {
                  "parts_collection": {
                    "seed": 0,
                    "items": {}
                  }
                }
              }
            }
          },
          "7": {
            "stack": {
              "id": "wheel_tires_stock",
              "_lv": {
                "value": {
                  "cells": {
                    "0": {
                      "stack": {
                        "id": "wheel_tires_set_4",
                        "_lv": {
                          "value": {
                            "resources": {
                              "rear_left_wheel_tire": {
                                "amount": 99.96709
                              },
                              "front_left_wheel_tire": {
                                "amount": 100
                              },
                              "rear_right_wheel_tire": {
                                "amount": 99.96538
                              },
                              "front_right_wheel_tire": {
                                "amount": 100
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "parts_collection": {
                    "seed": 0,
                    "items": {
                      "wheel_tires_set_3": {
                        "value": {
                          "resources": {
                            "rear_left_wheel_tire": {
                              "amount": 99.20264
                            },
                            "front_left_wheel_tire": {
                              "amount": 99.00341
                            },
                            "rear_right_wheel_tire": {
                              "amount": 99.30659
                            },
                            "front_right_wheel_tire": {
                              "amount": 98.84764
                            }
                          }
                        },
                        "__desc_id": "wheel_tires_set_3"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "vinyls": {
        "seed": 0,
        "items": {}
      },
      "body_kit": "bmwm5x5_rnt_bkit",
      "__desc_id": "bmwm5x5",
      "body_kit_set": {
        "keys": [
          "bmwm5x5_stock_bkit",
          "bmwm5x5_rnt_bkit"
        ]
      },
      "body_part_set": {
        "keys": [
          "bmwm5x5_ch_sk_17",
          "bmwm5x5_bf_sk_8",
          "bmwm5x5_br_sk_12",
          "bmwm5x5_sk_sk_41",
          "bmwm5x5_dr_sk_20",
          "bmwm5x5_rf_sk_37",
          "bmwm5x5_mr_sk_33",
          "bmwm5x5_bn_sk_4",
          "bmwm5x5_tr_sk_51",
          "bmwm5x5_sp_sk_47",
          "bmwm5x5_lf_sk_27",
          "bmwm5x5_lr_sk_30",
          "bmwm5x5_ex_sk_23",
          "bmwm5x5_cg_sk_14",
          "bmwm5x5_ir_sk_53",
          "bmwm5x5_sl_sk_70",
          "bmwm5x5_sr_sk_75",
          "bmwm5x5_sw_sk_80",
          "bmwm5x5_hb_sk_85",
          "bmwm5x5_sh_sk_91",
          "bmwm5x5_db_sk_100",
          "bmwm5x5_tr_rt_50",
          "bmwm5x5_sp_rt_45",
          "bmwm5x5_sk_sx_42",
          "bmwm5x5_mr_rt_32",
          "bmwm5x5_lr_cw_29",
          "bmwm5x5_lf_rt_26",
          "bmwm5x5_ex_rt_22",
          "bmwm5x5_dr_rt_19",
          "bmwm5x5_ch_rt_16",
          "bmwm5x5_br_rt_11",
          "bmwm5x5_bf_rt_7",
          "wheel_rim_368",
          "brake_rotor_3",
          "brake_caliper_1",
          "suspension_mac_pherson",
          "neon_front_empty",
          "neon_side_empty",
          "neon_rear_empty",
          "exhaust_flame_back_fire_3",
          "exhaust_flame_nitro_3"
        ]
      },
      "consumed_resources": {
        "nitro": {
          "ts": 1703219206,
          "amount": 20,
          "max_amount": 20
        },
        "gasoline": {
          "ts": 1703219206,
          "amount": 39.89987,
          "max_amount": 40
        },
        "statistic_drive_time": {
          "amount": 25.02285
        },
        "statistic_total_distance": {
          "amount": 277.1575
        }
      }
    },

      player_result.d.data.cars.seed = player_result.d.data.cars.seed += 1;
    player_result.d.data.car_models.keys.push("bmw");
    player_result.d.data.car_models.values.push(1);
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
    return false;
  }
};

module.exports = { lambo, r35, lambodiablo, van, volvo, bmw, technoirff4, toyotasupra, r32x, mitsubishievo9, nissan180sx, rx7 };