const dotenv = require("dotenv");

const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

dotenv.config();

const toyotasupraEngineR35 = async (message) => {
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

module.exports = { toyotasupraEngineR35 };