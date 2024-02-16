const { fetch } = require("./addcarService");

const van = async (message) => {
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