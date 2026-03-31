export const DICTIONARY = {
            // ==========================================
            // EFB TOOLS & CUSTOM
            // ==========================================
            "nav_folder": { category: "EFB Tools", name: "Create Folder", icon: "📁", type: "nav" },
            "nav_back": { category: "EFB Tools", name: "Page Back", icon: "⬅️", type: "nav" },
            "nav_home": { category: "EFB Tools", name: "Back to Home", icon: "🏠", type: "nav", targetPage: 0 },
            "custom_button": { category: "Custom Variables", name: "Custom Button", icon: "🕹️", type: "button", isCustom: true },
            "custom_gauge": { category: "Custom Variables", name: "Custom Gauge", icon: "🛠️", type: "gauge", isCustom: true },
            "smart_toggle": { category: "Custom Variables", name: "Create Smart Toggle", icon: "🔀", type: "smart_toggle", isCustom: true },

            // ==========================================
            // C208 GRAND CARAVAN SPECIFIC
            // ==========================================
            "c208_cond_high": { category: "C208 Specific", name: "Cond High", icon: "🟢", type: "button", command: "0 (>B:FUEL1_CONDITION_LEVER_Set)" },
            "c208_cond_low": { category: "C208 Specific", name: "Cond Low", icon: "🟡", type: "button", command: "1 (>B:FUEL1_CONDITION_LEVER_Set)" },
            "c208_cond_cutoff": { category: "C208 Specific", name: "Cond Cutoff", icon: "🔴", type: "button", command: "2 (>B:FUEL1_CONDITION_LEVER_Set)" },
            "c208_land_l": { category: "C208 Specific", name: "L Land Lgt", icon: "🔦", type: "smart_toggle", trackingVar: "LIGHT LANDING ON:1", onCmd: "1 (>B:LIGHTING_LANDING_1_Set)", offCmd: "0 (>B:LIGHTING_LANDING_1_Set)" },
            "c208_land_r": { category: "C208 Specific", name: "R Land Lgt", icon: "🔦", type: "smart_toggle", trackingVar: "LIGHT LANDING ON:2", onCmd: "1 (>B:LIGHTING_LANDING_2_Set)", offCmd: "0 (>B:LIGHTING_LANDING_2_Set)" },

            // ==========================================
            // BATTERIES & BREAKERS ⚡
            // ==========================================
            "batt_master": { category: "Batteries", name: "Master Battery", icon: "🔋", type: "button", command: "TOGGLE_MASTER_BATTERY", stateKey: "batt_state" },
            "batt_1": { category: "Batteries", name: "Battery 1", icon: "🔋", type: "button", command: "BATTERY1_SET" },
            "batt_2": { category: "Batteries", name: "Battery 2", icon: "🔋", type: "button", command: "BATTERY2_SET" },
            "batt_3": { category: "Batteries", name: "Battery 3", icon: "🔋", type: "button", command: "BATTERY3_SET" },
            "batt_4": { category: "Batteries", name: "Battery 4", icon: "🔋", type: "button", command: "BATTERY4_SET" },
            "batt_breaker": { category: "Batteries", name: "Batt Breaker", icon: "🔌", type: "button", command: "ELECTRICAL_BATTERY_BREAKER_TOGGLE" },
            "breaker_avnfan": { category: "Breakers", name: "Avn Fan Brkr", icon: "🔌", type: "button", command: "BREAKER_AVNFAN_TOGGLE" },
            "breaker_ap": { category: "Breakers", name: "AP Breaker", icon: "🔌", type: "button", command: "BREAKER_AUTOPILOT_TOGGLE" },
            "breaker_gps": { category: "Breakers", name: "GPS Breaker", icon: "🔌", type: "button", command: "BREAKER_GPS_TOGGLE" },
            "breaker_adf": { category: "Breakers", name: "ADF Breaker", icon: "🔌", type: "button", command: "BREAKER_ADF_TOGGLE" },
            "breaker_xpndr": { category: "Breakers", name: "XPNDR Breaker", icon: "🔌", type: "button", command: "BREAKER_XPNDR_TOGGLE" },
            "breaker_flap": { category: "Breakers", name: "Flaps Breaker", icon: "🔌", type: "button", command: "BREAKER_FLAP_TOGGLE" },
            "breaker_inst": { category: "Breakers", name: "Inst Breaker", icon: "🔌", type: "button", command: "BREAKER_INST_TOGGLE" },

            // ==========================================
            // LIGHTS 💡
            // ==========================================
            "lights_all": { category: "Lights", name: "All Lights", icon: "💡", type: "button", command: "ALL_LIGHTS_TOGGLE" },
            "lights_beacon": { category: "Lights", name: "Beacon", icon: "🚨", type: "button", command: "TOGGLE_BEACON_LIGHTS", stateKey: "beacon_state" },
            "lights_cabin": { category: "Lights", name: "Cabin", icon: "💡", type: "button", command: "TOGGLE_CABIN_LIGHTS" },
            "lights_landing": { category: "Lights", name: "Landing", icon: "🔦", type: "button", command: "LANDING_LIGHTS_TOGGLE", stateKey: "landing_state" },
            "lights_logo": { category: "Lights", name: "Logo", icon: "✈️", type: "button", command: "TOGGLE_LOGO_LIGHTS" },
            "lights_nav": { category: "Lights", name: "Nav", icon: "🟢", type: "button", command: "TOGGLE_NAV_LIGHTS", stateKey: "nav_light_state" },
            "lights_panel": { category: "Lights", name: "Panel", icon: "🎛️", type: "button", command: "PANEL_LIGHTS_TOGGLE" },
            "lights_recog": { category: "Lights", name: "Recognition", icon: "👀", type: "button", command: "TOGGLE_RECOGNITION_LIGHTS" },
            "lights_strobe": { category: "Lights", name: "Strobe", icon: "✨", type: "button", command: "STROBES_TOGGLE", stateKey: "strobe_state" },
            "lights_taxi": { category: "Lights", name: "Taxi", icon: "🚕", type: "button", command: "TOGGLE_TAXI_LIGHTS", stateKey: "taxi_state" },

            // ==========================================
            // ALTERNATORS, APU & MISC ELEC ⚡
            // ==========================================
            "elec_ext_power": { category: "Misc Electrical", name: "Ext Power", icon: "🔌", type: "button", command: "TOGGLE_EXTERNAL_POWER" },
            "avionics_master": { category: "Misc Electrical", name: "Avionics Master", icon: "📻", type: "button", command: "TOGGLE_AVIONICS_MASTER", stateKey: "avionics_state" },
            "elec_bus_to_batt": { category: "Misc Electrical", name: "Bus to Batt", icon: "⚡", type: "button", command: "ELECTRICAL_BUS_TO_BATTERY_CONNECTION_TOGGLE" },
            "elec_bus_to_alt": { category: "Misc Electrical", name: "Bus to Alt", icon: "⚡", type: "button", command: "ELECTRICAL_BUS_TO_ALTERNATOR_CONNECTION_TOGGLE" },
            "alt_master": { category: "Alternator", name: "Master Alt", icon: "⚡", type: "button", command: "TOGGLE_MASTER_ALTERNATOR", stateKey: "alt_state" },
            "alt_1": { category: "Alternator", name: "Alternator 1", icon: "⚡", type: "button", command: "TOGGLE_ALTERNATOR1" },
            "alt_2": { category: "Alternator", name: "Alternator 2", icon: "⚡", type: "button", command: "TOGGLE_ALTERNATOR2" },
            "alt_3": { category: "Alternator", name: "Alternator 3", icon: "⚡", type: "button", command: "TOGGLE_ALTERNATOR3" },
            "alt_4": { category: "Alternator", name: "Alternator 4", icon: "⚡", type: "button", command: "TOGGLE_ALTERNATOR4" },
            "apu_starter": { category: "APU", name: "APU Starter", icon: "🔄", type: "button", command: "APU_STARTER" },
            "apu_off": { category: "APU", name: "APU Off", icon: "🛑", type: "button", command: "APU_OFF_SWITCH" },
            "apu_gen": { category: "APU", name: "APU Gen", icon: "⚡", type: "button", command: "APU_GENERATOR_SWITCH_TOGGLE" },
            "apu_bleed": { category: "APU", name: "APU Bleed", icon: "💨", type: "button", command: "APU_BLEED_AIR_SOURCE_TOGGLE" },

            // ==========================================
            // AUTOPILOT & FLIGHT ASSIST 🤖
            // ==========================================
            "ap_master": { category: "Autopilot", name: "AP Master", icon: "✈️", type: "button", command: "AP_MASTER", stateKey: "ap_master_state" },
            "ap_spd_hold": { category: "Autopilot", name: "AP SPD Hold", icon: "💨", type: "button", command: "AP_AIRSPEED_HOLD", stateKey: "ap_spd_state" },
            "ap_alt_hold": { category: "Autopilot", name: "AP ALT Hold", icon: "↕️", type: "button", command: "AP_ALT_HOLD", stateKey: "ap_alt_state" },
            "ap_rad_alt_toggle": { category: "Autopilot", name: "Radio Alt Mode", icon: "📡", type: "button", command: "AP_ALT_RADIO_MODE_TOGGLE" },
            "ap_apr_hold": { category: "Autopilot", name: "AP Approach", icon: "🛬", type: "button", command: "AP_APR_HOLD", stateKey: "ap_apr_state" },
            "ap_att_hold": { category: "Autopilot", name: "AP Attitude", icon: "⚖️", type: "button", command: "AP_ATT_HOLD" },
            "ap_bank_hold": { category: "Autopilot", name: "AP Bank Hold", icon: "🔄", type: "button", command: "AP_BANK_HOLD" },
            "ap_bc_hold": { category: "Autopilot", name: "AP Backcourse", icon: "↩️", type: "button", command: "AP_BC_HOLD" },
            "ap_flc": { category: "Autopilot", name: "AP FLC", icon: "📈", type: "button", command: "AP_FLIGHT_LEVEL_CHANGE", stateKey: "ap_flc_state" },
            "ap_hdg_hold": { category: "Autopilot", name: "AP HDG Hold", icon: "🧭", type: "button", command: "AP_HDG_HOLD", stateKey: "ap_hdg_state" },
            "ap_loc_hold": { category: "Autopilot", name: "AP Localizer", icon: "📡", type: "button", command: "AP_LOC_HOLD" },
            "ap_mach_hold": { category: "Autopilot", name: "AP Mach Hold", icon: "⚡", type: "button", command: "AP_MACH_HOLD" },
            "ap_nav_hold": { category: "Autopilot", name: "AP NAV Hold", icon: "🗺️", type: "button", command: "AP_NAV1_HOLD", stateKey: "ap_nav_state" },
            "ap_vs_hold": { category: "Autopilot", name: "AP VS Hold", icon: "↕️", type: "button", command: "AP_PANEL_VS_HOLD", stateKey: "ap_vs_state" },
            "ap_vnav": { category: "Autopilot", name: "AP VNAV", icon: "📉", type: "button", command: "AP_VNAV_TOGGLE" },
            "athr_arm": { category: "Flight Assistance", name: "A/T Arm", icon: "🚀", type: "button", command: "AUTO_THROTTLE_ARM", stateKey: "ap_athr_state" },
            "athr_disc": { category: "Flight Assistance", name: "A/T Disc.", icon: "⚠️", type: "button", command: "AUTO_THROTTLE_DISCONNECT" },
            "athr_toga": { category: "Flight Assistance", name: "A/T TO/GA", icon: "🛫", type: "button", command: "AUTO_THROTTLE_TO_GA" },
            "fd_toggle": { category: "Flight Assistance", name: "Flight Dir", icon: "📐", type: "button", command: "TOGGLE_FLIGHT_DIRECTOR", stateKey: "fd_state" },
            "yd_toggle": { category: "Flight Assistance", name: "Yaw Damper", icon: "⚓", type: "button", command: "YAW_DAMPER_TOGGLE", stateKey: "ap_yd_state" },

            // ==========================================
            // G1000 🖥️
            // ==========================================
            "g1000_pfd_clr": { category: "G1000", name: "PFD Clear", icon: "✖️", type: "button", command: "G1000_PFD_CLEAR_BUTTON" },
            "g1000_pfd_ent": { category: "G1000", name: "PFD Enter", icon: "✔️", type: "button", command: "G1000_PFD_ENTER_BUTTON" },
            "g1000_pfd_dto": { category: "G1000", name: "PFD Direct To", icon: "➡️", type: "button", command: "G1000_PFD_DIRECTTO_BUTTON" },
            "g1000_pfd_fpl": { category: "G1000", name: "PFD FPL", icon: "🗺️", type: "button", command: "G1000_PFD_FLIGHTPLAN_BUTTON" },
            "g1000_pfd_proc": { category: "G1000", name: "PFD PROC", icon: "📑", type: "button", command: "G1000_PFD_PROCEDURE_BUTTON" },
            "g1000_pfd_menu": { category: "G1000", name: "PFD Menu", icon: "📄", type: "button", command: "G1000_PFD_MENU_BUTTON" },
            "g1000_pfd_crsr": { category: "G1000", name: "PFD Cursor", icon: "🖱️", type: "button", command: "G1000_PFD_CURSOR_BUTTON" },
            "g1000_pfd_zoom_in": { category: "G1000", name: "PFD Zoom +", icon: "🔍", type: "button", command: "G1000_PFD_ZOOMIN_BUTTON" },
            "g1000_pfd_zoom_out": { category: "G1000", name: "PFD Zoom -", icon: "🔎", type: "button", command: "G1000_PFD_ZOOMOUT_BUTTON" },
            "rotary_g1000_pfd_group": { category: "G1000", name: "PFD FMS Grp", icon: "🔄", type: "rotary", dataKey: "dummy", unit: "", cmdDec: "G1000_PFD_GROUP_KNOB_DEC", cmdInc: "G1000_PFD_GROUP_KNOB_INC" },
            "rotary_g1000_pfd_page": { category: "G1000", name: "PFD FMS Pg", icon: "🔄", type: "rotary", dataKey: "dummy", unit: "", cmdDec: "G1000_PFD_PAGE_KNOB_DEC", cmdInc: "G1000_PFD_PAGE_KNOB_INC" },
            "g1000_pfd_sk1": { category: "G1000", name: "PFD Softkey 1", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY1" },
            "g1000_pfd_sk2": { category: "G1000", name: "PFD Softkey 2", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY2" },
            "g1000_pfd_sk3": { category: "G1000", name: "PFD Softkey 3", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY3" },
            "g1000_pfd_sk4": { category: "G1000", name: "PFD Softkey 4", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY4" },
            "g1000_pfd_sk5": { category: "G1000", name: "PFD Softkey 5", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY5" },
            "g1000_pfd_sk6": { category: "G1000", name: "PFD Softkey 6", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY6" },
            "g1000_pfd_sk7": { category: "G1000", name: "PFD Softkey 7", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY7" },
            "g1000_pfd_sk8": { category: "G1000", name: "PFD Softkey 8", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY8" },
            "g1000_pfd_sk9": { category: "G1000", name: "PFD Softkey 9", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY9" },
            "g1000_pfd_sk10": { category: "G1000", name: "PFD Softkey 10", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY10" },
            "g1000_pfd_sk11": { category: "G1000", name: "PFD Softkey 11", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY11" },
            "g1000_pfd_sk12": { category: "G1000", name: "PFD Softkey 12", icon: "➖", type: "button", command: "G1000_PFD_SOFTKEY12" },

            "g1000_mfd_clr": { category: "G1000", name: "MFD Clear", icon: "✖️", type: "button", command: "G1000_MFD_CLEAR_BUTTON" },
            "g1000_mfd_ent": { category: "G1000", name: "MFD Enter", icon: "✔️", type: "button", command: "G1000_MFD_ENTER_BUTTON" },
            "g1000_mfd_dto": { category: "G1000", name: "MFD Direct To", icon: "➡️", type: "button", command: "G1000_MFD_DIRECTTO_BUTTON" },
            "g1000_mfd_fpl": { category: "G1000", name: "MFD FPL", icon: "🗺️", type: "button", command: "G1000_MFD_FLIGHTPLAN_BUTTON" },
            "g1000_mfd_proc": { category: "G1000", name: "MFD PROC", icon: "📑", type: "button", command: "G1000_MFD_PROCEDURE_BUTTON" },
            "g1000_mfd_menu": { category: "G1000", name: "MFD Menu", icon: "📄", type: "button", command: "G1000_MFD_MENU_BUTTON" },
            "g1000_mfd_crsr": { category: "G1000", name: "MFD Cursor", icon: "🖱️", type: "button", command: "G1000_MFD_CURSOR_BUTTON" },
            "g1000_mfd_zoom_in": { category: "G1000", name: "MFD Zoom +", icon: "🔍", type: "button", command: "G1000_MFD_ZOOMIN_BUTTON" },
            "g1000_mfd_zoom_out": { category: "G1000", name: "MFD Zoom -", icon: "🔎", type: "button", command: "G1000_MFD_ZOOMOUT_BUTTON" },
            "rotary_g1000_mfd_group": { category: "G1000", name: "MFD FMS Grp", icon: "🔄", type: "rotary", dataKey: "dummy", unit: "", cmdDec: "G1000_MFD_GROUP_KNOB_DEC", cmdInc: "G1000_MFD_GROUP_KNOB_INC" },
            "rotary_g1000_mfd_page": { category: "G1000", name: "MFD FMS Pg", icon: "🔄", type: "rotary", dataKey: "dummy", unit: "", cmdDec: "G1000_MFD_PAGE_KNOB_DEC", cmdInc: "G1000_MFD_PAGE_KNOB_INC" },
            "g1000_mfd_sk1": { category: "G1000", name: "MFD Softkey 1", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY1" },
            "g1000_mfd_sk2": { category: "G1000", name: "MFD Softkey 2", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY2" },
            "g1000_mfd_sk3": { category: "G1000", name: "MFD Softkey 3", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY3" },
            "g1000_mfd_sk4": { category: "G1000", name: "MFD Softkey 4", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY4" },
            "g1000_mfd_sk5": { category: "G1000", name: "MFD Softkey 5", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY5" },
            "g1000_mfd_sk6": { category: "G1000", name: "MFD Softkey 6", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY6" },
            "g1000_mfd_sk7": { category: "G1000", name: "MFD Softkey 7", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY7" },
            "g1000_mfd_sk8": { category: "G1000", name: "MFD Softkey 8", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY8" },
            "g1000_mfd_sk9": { category: "G1000", name: "MFD Softkey 9", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY9" },
            "g1000_mfd_sk10": { category: "G1000", name: "MFD Softkey 10", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY10" },
            "g1000_mfd_sk11": { category: "G1000", name: "MFD Softkey 11", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY11" },
            "g1000_mfd_sk12": { category: "G1000", name: "MFD Softkey 12", icon: "➖", type: "button", command: "G1000_MFD_SOFTKEY12" },

            // ==========================================
            // LANDING GEAR, FLAPS, BRAKES & HOISTS 🛞
            // ==========================================
            "gear_toggle": { category: "Landing gear / brakes", name: "Landing Gear", icon: "⚙️", type: "button", command: "GEAR_TOGGLE", stateKey: "gear_state" },
            "gear_emer": { category: "Landing gear / brakes", name: "Gear Emer Drop", icon: "⚠️", type: "button", command: "GEAR_EMERGENCY_HANDLE_TOGGLE" },
            "flaps_up": { category: "Landing gear / brakes", name: "Flaps Up", icon: "🔼", type: "button", command: "FLAPS_DECR" },
            "flaps_down": { category: "Landing gear / brakes", name: "Flaps Down", icon: "🔽", type: "button", command: "FLAPS_INCR" },
            "spoilers_arm_toggle": { category: "Spoilers", name: "Arm Spoilers", icon: "🛡️", type: "button", command: "SPOILERS_ARM_TOGGLE", stateKey: "spoilers_arm_state" },
            "spoilers_toggle": { category: "Spoilers", name: "Toggle Spoilers", icon: "🌪️", type: "button", command: "SPOILERS_TOGGLE" },
            "brakes_parking": { category: "Landing gear / brakes", name: "Parking Brake", icon: "🛑", type: "button", command: "PARKING_BRAKES", stateKey: "parking_brake_state" },
            "brakes_antiskid": { category: "Landing gear / brakes", name: "Anti-Skid", icon: "🛞", type: "button", command: "ANTISKID_BRAKES_TOGGLE" },
            "sling_pickup": { category: "Slings & Hoists", name: "Pickup/Release", icon: "🏗️", type: "button", command: "SLING_PICKUP_RELEASE" },
            "hoist_deploy": { category: "Slings & Hoists", name: "Hoist Deploy", icon: "🏗️", type: "button", command: "HOIST_DEPLOY_TOGGLE" },
            "grapple_toggle": { category: "Grapple Hook / Lead Pole", name: "Grapple Toggle", icon: "🪝", type: "button", command: "GRAPPLE_HOOK_TOGGLE" },
            "lead_pole_toggle": { category: "Grapple Hook / Lead Pole", name: "Lead Pole", icon: "🚩", type: "button", command: "LEAD_POLE_TOGGLE" },

            // ==========================================
            // LIQUID DROPPING, HYD & PNEU 💦⚙️💨
            // ==========================================
            "liquid_door_tgl": { category: "Liquid Dropping System", name: "Drop Door", icon: "💦", type: "button", command: "LIQUID_DROPPING_SYSTEM_DOOR_TOGGLE" },
            "liquid_scoop_tgl": { category: "Liquid Dropping System", name: "Drop Scoop", icon: "💦", type: "button", command: "LIQUID_DROPPING_SYSTEM_SCOOP_TOGGLE" },
            "hyd_actuator_tgl": { category: "Hydraulics", name: "Hyd Actuator", icon: "⚙️", type: "button", command: "HYDRAULIC_ACTUATOR_ACTIVE_TOGGLE" },
            "hyd_switch_tgl": { category: "Hydraulics", name: "Hyd Switch", icon: "⚙️", type: "button", command: "HYDRAULIC_SWITCH_TOGGLE" },
            "pneu_valve_tgl": { category: "Pneumatics", name: "Pneu Valve", icon: "💨", type: "button", command: "PNEUMATICS_VALVE_TOGGLE" },

            // ==========================================
            // PROPELLER ✈️
            // ==========================================
            "prop_sync_tgl": { category: "Propeller", name: "Prop Sync", icon: "✈️", type: "button", command: "TOGGLE_PROPELLER_SYNC" },
            "prop_rev_tgl": { category: "Propeller", name: "Prop Reverser", icon: "🔄", type: "button", command: "PROPELLER_REVERSE_THRUST_TOGGLE" },
            "prop_beta_tgl": { category: "Propeller", name: "Prop Beta", icon: "✈️", type: "button", command: "PROP_FORCE_BETA_TOGGLE" },
            "prop_lock_tgl": { category: "Propeller", name: "Prop Lock", icon: "🔒", type: "button", command: "PROP_LOCK_TOGGLE" },

            // ==========================================
            // FUEL SYSTEMS & TRANSFER ⛽
            // ==========================================
            "fuel_xfer_fwd": { category: "Fuel Transfer Keys", name: "Xfer Fwd", icon: "⬆️", type: "button", command: "SET_FUEL_TRANSFER_FORWARD" },
            "fuel_xfer_aft": { category: "Fuel Transfer Keys", name: "Xfer Aft", icon: "⬇️", type: "button", command: "SET_FUEL_TRANSFER_AFT" },
            "fuel_xfer_auto": { category: "Fuel Transfer Keys", name: "Xfer Auto", icon: "🔄", type: "button", command: "SET_FUEL_TRANSFER_AUTO" },
            "fuel_dump_tgl": { category: "Miscellaneous Fuel", name: "Fuel Dump", icon: "🚰", type: "button", command: "FUEL_DUMP_TOGGLE" },
            "fuel_valve_tgl": { category: "Fuel System", name: "Fuel Valve", icon: "🚰", type: "button", command: "FUELSYSTEM_VALVE_TOGGLE" },
            "fuel_pump_1": { category: "Fuel System", name: "Fuel Pump 1", icon: "⛽", type: "button", command: "TOGGLE_ELECT_FUEL_PUMP1", stateKey: "eng1_pump_state" },
            "fuel_pump_2": { category: "Fuel System", name: "Fuel Pump 2", icon: "⛽", type: "button", command: "TOGGLE_ELECT_FUEL_PUMP2" },
            "fuel_pump_3": { category: "Fuel System", name: "Fuel Pump 3", icon: "⛽", type: "button", command: "TOGGLE_ELECT_FUEL_PUMP3", trackingVar: "GENERAL ENG FUEL PUMP SWITCH:3" },
            "fuel_pump_4": { category: "Fuel System", name: "Fuel Pump 4", icon: "⛽", type: "button", command: "TOGGLE_ELECT_FUEL_PUMP4", trackingVar: "GENERAL ENG FUEL PUMP SWITCH:4" },
            "fuel_sel_l": { category: "Fuel Selector", name: "Sel Left", icon: "◀️", type: "button", command: "FUEL_SELECTOR_LEFT" },
            "fuel_sel_r": { category: "Fuel Selector", name: "Sel Right", icon: "▶️", type: "button", command: "FUEL_SELECTOR_RIGHT" },
            "fuel_sel_both": { category: "Fuel Selector", name: "Sel Both", icon: "⏫", type: "button", command: "FUEL_SELECTOR_ALL" },
            "fuel_sel_off": { category: "Fuel Selector", name: "Sel Off", icon: "🛑", type: "button", command: "FUEL_SELECTOR_OFF" },
            "fuel_crossfeed": { category: "Cross Feed", name: "Crossfeed", icon: "🔀", type: "button", command: "CROSS_FEED_TOGGLE" },

            // ==========================================
            // RADIOS & GPS 📻🛰️
            // ==========================================
            "radio_com1_swap": { category: "COM", name: "COM1 Swap", icon: "📻", type: "button", command: "COM1_RADIO_SWAP" },
            "radio_com2_swap": { category: "COM", name: "COM2 Swap", icon: "📻", type: "button", command: "COM2_RADIO_SWAP" },
            "radio_com3_swap": { category: "COM", name: "COM3 Swap", icon: "📻", type: "button", command: "COM3_RADIO_SWAP" },
            "radio_nav1_swap": { category: "NAV", name: "NAV1 Swap", icon: "📡", type: "button", command: "NAV1_RADIO_SWAP" },
            "radio_nav2_swap": { category: "NAV", name: "NAV2 Swap", icon: "📡", type: "button", command: "NAV2_RADIO_SWAP" },
            "radio_nav3_swap": { category: "NAV", name: "NAV3 Swap", icon: "📡", type: "button", command: "NAV3_RADIO_SWAP" },
            "radio_nav4_swap": { category: "NAV", name: "NAV4 Swap", icon: "📡", type: "button", command: "NAV4_RADIO_SWAP" },
            "radio_adf1_swap": { category: "ADF", name: "ADF1 Swap", icon: "🧭", type: "button", command: "ADF1_RADIO_SWAP" },
            "radio_adf2_swap": { category: "ADF", name: "ADF2 Swap", icon: "🧭", type: "button", command: "ADF2_RADIO_SWAP" },
            "radio_tacan1_swap": { category: "TACAN", name: "TACAN1 Swap", icon: "🎯", type: "button", command: "TACAN1_SWAP" },
            "radio_tacan2_swap": { category: "TACAN", name: "TACAN2 Swap", icon: "🎯", type: "button", command: "TACAN2_SWAP" },
            "radio_dme_tgl": { category: "DME", name: "DME Toggle", icon: "📡", type: "button", command: "TOGGLE_DME" },
            "radio_dme1_tgl": { category: "DME", name: "DME1 Toggle", icon: "📡", type: "button", command: "DME1_TOGGLE" },
            "radio_dme2_tgl": { category: "DME", name: "DME2 Toggle", icon: "📡", type: "button", command: "DME2_TOGGLE" },
            "radio_vor1_ident": { category: "VOR", name: "VOR1 Ident", icon: "🔊", type: "button", command: "RADIO_VOR1_IDENT_TOGGLE" },
            "radio_vor2_ident": { category: "VOR", name: "VOR2 Ident", icon: "🔊", type: "button", command: "RADIO_VOR2_IDENT_TOGGLE" },
            "radio_vor3_ident": { category: "VOR", name: "VOR 3 Ident", icon: "🔊", type: "button", command: "RADIO_VOR3_IDENT_TOGGLE" },
            "radio_vor4_ident": { category: "VOR", name: "VOR 4 Ident", icon: "🔊", type: "button", command: "RADIO_VOR4_IDENT_TOGGLE" },
            "radio_adf1_ident": { category: "ADF", name: "ADF1 Ident", icon: "🔊", type: "button", command: "RADIO_ADF_IDENT_TOGGLE" },
            "radio_dme1_ident": { category: "DME", name: "DME1 Ident", icon: "🔊", type: "button", command: "RADIO_DME1_IDENT_TOGGLE" },
            "xpndr_ident_tgl": { category: "XPNDR (Transponder)", name: "XPNDR Ident", icon: "🛜", type: "button", command: "XPNDR_IDENT_TOGGLE" },
            "gps_clr": { category: "GPS", name: "GPS CLR", icon: "✖️", type: "button", command: "GPS_CLEAR_BUTTON" },
            "gps_ent": { category: "GPS", name: "GPS ENT", icon: "✔️", type: "button", command: "GPS_ENTER_BUTTON" },
            "gps_dto": { category: "GPS", name: "GPS DTO", icon: "➡️", type: "button", command: "GPS_DIRECTTO_BUTTON" },
            "gps_fpl": { category: "GPS", name: "GPS FPL", icon: "🗺️", type: "button", command: "GPS_FLIGHTPLAN_BUTTON" },
            "gps_proc": { category: "GPS", name: "GPS PROC", icon: "📑", type: "button", command: "GPS_PROCEDURE_BUTTON" },

            // ==========================================
            // DE-ICE ❄️
            // ==========================================
            "ice_windshield": { category: "Windshield De-Ice", name: "Windshield Ice", icon: "❄️", type: "button", command: "WINDSHIELD_DEICE_TOGGLE" },
            "ice_anti_tgl": { category: "Anti Ice", name: "Anti-Ice All", icon: "❄️", type: "button", command: "ANTI_ICE_TOGGLE" },
            "ice_anti1_tgl": { category: "Anti Ice", name: "Anti-Ice 1", icon: "❄️", type: "button", command: "ANTI_ICE_TOGGLE_ENG1" },
            "ice_anti2_tgl": { category: "Anti Ice", name: "Anti-Ice 2", icon: "❄️", type: "button", command: "ANTI_ICE_TOGGLE_ENG2" },
            "ice_pitot": { category: "Anti Ice", name: "Pitot Heat", icon: "🔥", type: "button", command: "PITOT_HEAT_TOGGLE", stateKey: "pitot_state" },
            "ice_struct": { category: "Anti Ice", name: "Struct De-Ice", icon: "❄️", type: "button", command: "TOGGLE_STRUCTURAL_DEICE" },
            "ice_prop": { category: "Anti Ice", name: "Prop De-Ice", icon: "❄️", type: "button", command: "TOGGLE_PROPELLER_DEICE" },
            "carb_heat": { category: "Anti Ice", name: "Carb Heat", icon: "♨️", type: "button", command: "ANTI_ICE_TOGGLE_ENG1", stateKey: "carb_heat_state" },

            // ==========================================
            // CONDITION, STARTERS, MAGS & COWL 🎚️🔑⚡💨
            // ==========================================
            "cond_inc_all": { category: "Condition Lever", name: "Cond All +", icon: "🎚️", type: "button", command: "CONDITION_LEVER_INC" },
            "cond_dec_all": { category: "Condition Lever", name: "Cond All -", icon: "🎚️", type: "button", command: "CONDITION_LEVER_DEC" },
            "eng_starter_1": { category: "Starter", name: "Starter 1", icon: "🔑", type: "button", command: "TOGGLE_STARTER1", stateKey: "eng1_starter_state" },
            "eng_starter_2": { category: "Starter", name: "Starter 2", icon: "🔑", type: "button", command: "TOGGLE_STARTER2", stateKey: "eng2_starter_state" },
            "eng_starter_3": { category: "Starter", name: "Starter 3", icon: "🔑", type: "button", command: "TOGGLE_STARTER3", trackingVar: "GENERAL ENG STARTER:3" },
            "eng_starter_4": { category: "Starter", name: "Starter 4", icon: "🔑", type: "button", command: "TOGGLE_STARTER4", trackingVar: "GENERAL ENG STARTER:4" },
            "mag_both": { category: "Magneto", name: "Mag BOTH", icon: "⚡", type: "button", command: "MAGNETO_BOTH" },
            "mag_left": { category: "Magneto", name: "Mag LEFT", icon: "⚡", type: "button", command: "MAGNETO_LEFT" },
            "mag_right": { category: "Magneto", name: "Mag RIGHT", icon: "⚡", type: "button", command: "MAGNETO_RIGHT" },
            "mag_off": { category: "Magneto", name: "Mag OFF", icon: "🛑", type: "button", command: "MAGNETO_OFF" },
            "cowl_inc_all": { category: "Misc Engine", name: "Cowl All +", icon: "💨", type: "button", command: "INC_COWL_FLAPS" },
            "cowl_dec_all": { category: "Misc Engine", name: "Cowl All -", icon: "💨", type: "button", command: "DEC_COWL_FLAPS" },
            "rad_cowl_tgl": { category: "Misc Engine", name: "Rad Flaps", icon: "💨", type: "button", command: "RADIATOR_COOLING_FLAPS_TOGGLE" },
            "ign_master_tgl": { category: "Misc Engine", name: "Ignition Master", icon: "🔑", type: "button", command: "TOGGLE_MASTER_IGNITION_SWITCH" },
            "primer_all_tgl": { category: "Misc Engine", name: "Primer All", icon: "💦", type: "button", command: "TOGGLE_PRIMER" },

            // ==========================================
            // HELICOPTER CONTROLS 🚁
            // ==========================================
            "heli_auto_hover": { category: "Helicopter General", name: "Auto Hover", icon: "🚁", type: "button", command: "AUTO_HOVER_TOGGLE" },
            "heli_quick_trim": { category: "Helicopter General", name: "Quick Trim", icon: "🚁", type: "button", command: "QUICK_TRIM" },
            "heli_rotor_gov": { category: "Helicopter Rotor Control", name: "Rotor Gov", icon: "🚁", type: "button", command: "ROTOR_GOV_SWITCH_TOGGLE" },
            "heli_eng1_gov": { category: "Helicopter Engine Control", name: "Eng 1 Gov", icon: "🚁", type: "button", command: "HELICOPTER_ENGINE_1_GOVERNOR_SWITCH_TOGGLE" },
            "heli_eng2_gov": { category: "Helicopter Engine Control", name: "Eng 2 Gov", icon: "🚁", type: "button", command: "HELICOPTER_ENGINE_2_GOVERNOR_SWITCH_TOGGLE" },

            // ==========================================
            // CAMERA CONTROLS 📷
            // ==========================================
            "cam_chase_toggle": { category: "Chase Camera", name: "Chase View", icon: "📷", type: "button", command: "VIEW_TRACK_PAN_TOGGLE" },
            "cam_next": { category: "Camera Views", name: "Next View", icon: "⏭️", type: "button", command: "NEXT_VIEW" },
            "cam_prev": { category: "Camera Views", name: "Prev View", icon: "⏮️", type: "button", command: "PREV_VIEW" },
            "cam_reset": { category: "Camera Views", name: "Reset View", icon: "🔄", type: "button", command: "VIEW_RESET" },
            "pan_reset": { category: "Camera Zoom & Pan", name: "Pan Reset", icon: "🔄", type: "button", command: "PAN_RESET" },

            // ==========================================
            // MISC & SIM EVENTS ⚙️
            // ==========================================
            "sim_abort": { category: "Misc Events", name: "Abort Sim", icon: "🛑", type: "button", command: "ABORT" },
            "sim_exit": { category: "Misc Events", name: "Exit Sim", icon: "🚪", type: "button", command: "EXIT" },
            "sim_screenshot": { category: "Misc Events", name: "Screenshot", icon: "📸", type: "button", command: "CAPTURE_SCREENSHOT" },
            "sim_sound_toggle": { category: "Misc Events", name: "Toggle Sound", icon: "🔇", type: "button", command: "SOUND_TOGGLE" },
            "sys_tail_lock": { category: "Miscellaneous Systems", name: "Tailwheel Lock", icon: "🛞", type: "button", command: "TOGGLE_TAILWHEEL_LOCK" },
            "sys_water_rudder": { category: "Miscellaneous Systems", name: "Water Rudder", icon: "🛶", type: "button", command: "TOGGLE_WATER_RUDDER" },
            "sys_wing_fold": { category: "Miscellaneous Systems", name: "Wing Fold", icon: "✈️", type: "button", command: "TOGGLE_WING_FOLD" },
            "sys_tug_disable": { category: "Miscellaneous Systems", name: "Disable Tug", icon: "🚜", type: "button", command: "TUG_DISABLE" },

            // ==========================================
            // AIRCRAFT INSTRUMENTS 🎛️
            // ==========================================
            "inst_att_dec": { category: "Aircraft Instruments", name: "Att Bars -", icon: "🎛️", type: "button", command: "ATTITUDE_BARS_POSITION_DEC" },
            "inst_att_inc": { category: "Aircraft Instruments", name: "Att Bars +", icon: "🎛️", type: "button", command: "ATTITUDE_BARS_POSITION_INC" },
            "inst_baro_sync": { category: "Aircraft Instruments", name: "Sync Baro", icon: "☁️", type: "button", command: "BAROMETRIC" },
            "inst_baro_std": { category: "Aircraft Instruments", name: "Std Baro", icon: "☁️", type: "button", command: "BAROMETRIC_STD_PRESSURE" },
            "inst_gyro_reset": { category: "Aircraft Instruments", name: "Reset Gyro", icon: "🧭", type: "button", command: "HEADING_GYRO_SET" },
            "inst_g_reset": { category: "Aircraft Instruments", name: "Reset Gs", icon: "📉", type: "button", command: "RESET_G_FORCE_INDICATOR" },

            // ==========================================
            // ATC 🎧
            // ==========================================
            "atc_open": { category: "ATC", name: "Open ATC", icon: "🎧", type: "button", command: "ATC_MENU_OPEN" },
            "atc_close": { category: "ATC", name: "Close ATC", icon: "🎧", type: "button", command: "ATC_MENU_CLOSE" },
            "atc_1": { category: "ATC", name: "Option 1", icon: "1️⃣", type: "button", command: "ATC_MENU_1" },
            "atc_2": { category: "ATC", name: "Option 2", icon: "2️⃣", type: "button", command: "ATC_MENU_2" },
            "atc_3": { category: "ATC", name: "Option 3", icon: "3️⃣", type: "button", command: "ATC_MENU_3" },

            // ==========================================
            // EGT 🌡️
            // ==========================================
            "egt_inc_all": { category: "EGT", name: "EGT All +", icon: "🌡️", type: "button", command: "EGT_INC" },
            "egt_dec_all": { category: "EGT", name: "EGT All -", icon: "🌡️", type: "button", command: "EGT_DEC" },
            "egt_inc_1": { category: "EGT", name: "EGT 1 +", icon: "🌡️", type: "button", command: "EGT1_INC" },
            "egt_dec_1": { category: "EGT", name: "EGT 1 -", icon: "🌡️", type: "button", command: "EGT1_DEC" },

            // ==========================================
            // GLIDERS & SKYDIVING 🪁
            // ==========================================
            "jump_light_ready": { category: "Skydiving", name: "Jump Ready", icon: "🪂", type: "button", command: "SKYDIVE_DOORLIGHTS_GETREADY" },
            "jump_light_jump": { category: "Skydiving", name: "Jump GO", icon: "🪂", type: "button", command: "SKYDIVE_DOORLIGHTS_JUMP" },
            "glider_maccready_inc": { category: "Gliders", name: "MacCready +", icon: "📈", type: "button", command: "MAC_CREADY_SETTING_INC" },
            "glider_maccready_dec": { category: "Gliders", name: "MacCready -", icon: "📉", type: "button", command: "MAC_CREADY_SETTING_DEC" },
            "glider_tow_release": { category: "Gliders", name: "Release Tow", icon: "🪁", type: "button", command: "TOW_PLANE_RELEASE" },

            // ==========================================
            // FAILURES ⚠️
            // ==========================================
            "fail_ack_caut": { category: "Failures", name: "Ack Caution", icon: "🟨", type: "button", command: "MASTER_CAUTION_ACKNOWLEDGE" },
            "fail_ack_warn": { category: "Failures", name: "Ack Warning", icon: "⚠️", type: "button", command: "MASTER_WARNING_ACKNOWLEDGE" },
            "fail_elec": { category: "Failures", name: "Fail Elec", icon: "⚡", type: "button", command: "TOGGLE_ELECTRICAL_FAILURE" },
            "fail_eng1": { category: "Failures", name: "Fail Eng 1", icon: "🔥", type: "button", command: "TOGGLE_ENGINE1_FAILURE" },
            "fail_eng2": { category: "Failures", name: "Fail Eng 2", icon: "🔥", type: "button", command: "TOGGLE_ENGINE2_FAILURE" },
            "fail_hyd": { category: "Failures", name: "Fail Hydraulic", icon: "⚙️", type: "button", command: "TOGGLE_HYDRAULIC_FAILURE" },
            "fail_brake_l": { category: "Failures", name: "Fail Brake L", icon: "🛞", type: "button", command: "TOGGLE_LEFT_BRAKE_FAILURE" },
            "fail_brake_r": { category: "Failures", name: "Fail Brake R", icon: "🛞", type: "button", command: "TOGGLE_RIGHT_BRAKE_FAILURE" },

            // ==========================================
            // TELEMETRY GAUGES 📐 
            // ==========================================
            "gauge_alt": { category: "Telemetry", name: "Altitude", icon: "⛰️", type: "gauge", dataKey: "altitude", unit: " FT" },
            "gauge_spd": { category: "Telemetry", name: "Airspeed", icon: "💨", type: "gauge", dataKey: "airspeed", unit: " KTS" },
            "gauge_vs": { category: "Telemetry", name: "Vert Speed", icon: "↕️", type: "gauge", dataKey: "vs", unit: " FPM" },
            "gauge_rpm": { category: "Telemetry", name: "Engine RPM", icon: "⏱️", type: "gauge", dataKey: "rpm", unit: "" },
            "gauge_flaps": { category: "Telemetry", name: "Flaps %", icon: "📐", type: "gauge", dataKey: "flaps_pct", unit: "%" },
            "gauge_fuel": { category: "Telemetry", name: "Fuel Qty", icon: "⛽", type: "gauge", dataKey: "fuel_pct", unit: " Gal" },
            "gauge_oat": { category: "Telemetry", name: "Outside Temp", icon: "🌡️", type: "gauge", dataKey: "oat", unit: "°C" },
            "gauge_com1_act": { category: "Radios", name: "COM 1 ACT", icon: "🔊", type: "gauge", dataKey: "com1_act", unit: "", decimals: 3 },
            "gauge_com1_stby": { category: "Radios", name: "COM 1 STBY", icon: "🔈", type: "gauge", dataKey: "com1_stby", unit: "", decimals: 3 },
            "gauge_nav1_act": { category: "Radios", name: "NAV 1 ACT", icon: "📍", type: "gauge", dataKey: "nav1_act", unit: "", decimals: 2 },
            "gauge_nav1_stby": { category: "Radios", name: "NAV 1 STBY", icon: "🗺️", type: "gauge", dataKey: "nav1_stby", unit: "", decimals: 2 },
            "gauge_com2_act": { category: "Radios", name: "COM 2 ACT", icon: "🔊", type: "gauge", dataKey: "com2_act", unit: "", decimals: 3 },
            "gauge_com2_stby": { category: "Radios", name: "COM 2 STBY", icon: "🔈", type: "gauge", dataKey: "com2_stby", unit: "", decimals: 3 },
            "gauge_nav2_act": { category: "Radios", name: "NAV 2 ACT", icon: "📍", type: "gauge", dataKey: "nav2_act", unit: "", decimals: 2 },
            "gauge_nav2_stby": { category: "Radios", name: "NAV 2 STBY", icon: "🗺️", type: "gauge", dataKey: "nav2_stby", unit: "", decimals: 2 },
            "gauge_com3_act": { category: "Radios", name: "COM 3 ACT", icon: "🔊", type: "gauge", customVar: "COM ACTIVE FREQUENCY:3", customUnit: "MHz", decimals: 3 },
            "gauge_com3_stby": { category: "Radios", name: "COM 3 STBY", icon: "🔈", type: "gauge", customVar: "COM STANDBY FREQUENCY:3", customUnit: "MHz", decimals: 3 },
            "gauge_nav3_act": { category: "Radios", name: "NAV 3 ACT", icon: "📍", type: "gauge", customVar: "NAV ACTIVE FREQUENCY:3", customUnit: "MHz", decimals: 2 },
            "gauge_nav3_stby": { category: "Radios", name: "NAV 3 STBY", icon: "🗺️", type: "gauge", customVar: "NAV STANDBY FREQUENCY:3", customUnit: "MHz", decimals: 2 },
            "gauge_nav4_act": { category: "Radios", name: "NAV 4 ACT", icon: "📍", type: "gauge", customVar: "NAV ACTIVE FREQUENCY:4", customUnit: "MHz", decimals: 2 },
            "gauge_nav4_stby": { category: "Radios", name: "NAV 4 STBY", icon: "🗺️", type: "gauge", customVar: "NAV STANDBY FREQUENCY:4", customUnit: "MHz", decimals: 2 },

            // ==========================================
            // CORE ROTARIES 🔄 
            // ==========================================
            "rotary_hdg": { category: "Autopilot", name: "AP Heading", icon: "🧭", type: "rotary", dataKey: "ap_hdg", unit: "°", cmdDec: "HEADING_BUG_DEC", cmdInc: "HEADING_BUG_INC" },
            "rotary_alt": { category: "Autopilot", name: "AP Altitude", icon: "↕️", type: "rotary", dataKey: "ap_alt", unit: " FT", cmdDec: "AP_ALT_VAR_DEC", cmdInc: "AP_ALT_VAR_INC" },
            "rotary_vs": { category: "Autopilot", name: "AP Vert Spd", icon: "📈", type: "rotary", dataKey: "ap_vs", unit: " FPM", cmdDec: "AP_VS_VAR_DEC", cmdInc: "AP_VS_VAR_INC" },
            "rotary_ap_spd": { category: "Autopilot", name: "AP Speed", icon: "💨", type: "rotary", dataKey: "ap_spd", unit: " KTS", cmdDec: "AP_SPD_VAR_DEC", cmdInc: "AP_SPD_VAR_INC" },
            "rotary_ap_mach": { category: "Autopilot", name: "AP Mach", icon: "⚡", type: "rotary", dataKey: "ap_mach", unit: " M", cmdDec: "AP_MACH_VAR_DEC", cmdInc: "AP_MACH_VAR_INC", decimals: 2 },
            "rotary_ap_pitch": { category: "Autopilot", name: "AP Pitch", icon: "⚖️", type: "rotary", dataKey: "ap_pitch", unit: "°", cmdDec: "AP_PITCH_REF_INC_DN", cmdInc: "AP_PITCH_REF_INC_UP" },
            "rotary_baro": { category: "Aircraft Instruments", name: "Barometer", icon: "☁️", type: "rotary", dataKey: "baro", unit: " hPa", cmdDec: "KOHLSMAN_DEC", cmdInc: "KOHLSMAN_INC" },
            "rotary_trim_elev": { category: "Controls", name: "Elev Trim", icon: "↕️", type: "rotary", dataKey: "trim_elev", unit: "%", cmdDec: "ELEV_TRIM_UP", cmdInc: "ELEV_TRIM_DN" },
            "rotary_trim_rudder": { category: "Controls", name: "Rudder Trim", icon: "↔️", type: "rotary", dataKey: "trim_rudder", unit: "%", cmdDec: "RUDDER_TRIM_LEFT", cmdInc: "RUDDER_TRIM_RIGHT" },
            "rotary_vor1_obs": { category: "VOR", name: "VOR 1 OBS", icon: "🧭", type: "rotary", dataKey: "nav1_obs", unit: "°", cmdDec: "VOR1_OBI_DEC", cmdInc: "VOR1_OBI_INC" },
            "rotary_vor2_obs": { category: "VOR", name: "VOR 2 OBS", icon: "🧭", type: "rotary", dataKey: "nav2_obs", unit: "°", cmdDec: "VOR2_OBI_DEC", cmdInc: "VOR2_OBI_INC" },
            "rotary_vor3_obs": { category: "VOR", name: "VOR 3 OBS", icon: "🧭", type: "rotary", customVar: "NAV OBS:3", customUnit: "degrees", cmdDec: "VOR3_OBI_DEC", cmdInc: "VOR3_OBI_INC" },
            "rotary_vor4_obs": { category: "VOR", name: "VOR 4 OBS", icon: "🧭", type: "rotary", customVar: "NAV OBS:4", customUnit: "degrees", cmdDec: "VOR4_OBI_DEC", cmdInc: "VOR4_OBI_INC" },
            "rotary_com1_whole": { category: "COM", name: "COM1 Whole", icon: "📻", type: "rotary", dataKey: "com1_stby", unit: "", decimals: 3, cmdDec: "COM_RADIO_WHOLE_DEC", cmdInc: "COM_RADIO_WHOLE_INC" },
            "rotary_com1_fract": { category: "COM", name: "COM1 Fract", icon: "📻", type: "rotary", dataKey: "com1_stby", unit: "", decimals: 3, cmdDec: "COM_RADIO_FRACT_DEC", cmdInc: "COM_RADIO_FRACT_INC" },
            "rotary_com2_whole": { category: "COM", name: "COM2 Whole", icon: "📻", type: "rotary", dataKey: "com2_stby", unit: "", decimals: 3, cmdDec: "COM2_RADIO_WHOLE_DEC", cmdInc: "COM2_RADIO_WHOLE_INC" },
            "rotary_com2_fract": { category: "COM", name: "COM2 Fract", icon: "📻", type: "rotary", dataKey: "com2_stby", unit: "", decimals: 3, cmdDec: "COM2_RADIO_FRACT_DEC", cmdInc: "COM2_RADIO_FRACT_INC" },
            "rotary_com3_whole": { category: "COM", name: "COM3 Whole", icon: "📻", type: "rotary", customVar: "COM STANDBY FREQUENCY:3", customUnit: "MHz", decimals: 3, cmdDec: "COM3_RADIO_WHOLE_DEC", cmdInc: "COM3_RADIO_WHOLE_INC" },
            "rotary_com3_fract": { category: "COM", name: "COM3 Fract", icon: "📻", type: "rotary", customVar: "COM STANDBY FREQUENCY:3", customUnit: "MHz", decimals: 3, cmdDec: "COM3_RADIO_FRACT_DEC", cmdInc: "COM3_RADIO_FRACT_INC" },
            "rotary_nav1_whole": { category: "NAV", name: "NAV1 Whole", icon: "📡", type: "rotary", dataKey: "nav1_stby", unit: "", decimals: 2, cmdDec: "NAV1_RADIO_WHOLE_DEC", cmdInc: "NAV1_RADIO_WHOLE_INC" },
            "rotary_nav1_fract": { category: "NAV", name: "NAV1 Fract", icon: "📡", type: "rotary", dataKey: "nav1_stby", unit: "", decimals: 2, cmdDec: "NAV1_RADIO_FRACT_DEC", cmdInc: "NAV1_RADIO_FRACT_INC" },
            "rotary_nav2_whole": { category: "NAV", name: "NAV2 Whole", icon: "📡", type: "rotary", dataKey: "nav2_stby", unit: "", decimals: 2, cmdDec: "NAV2_RADIO_WHOLE_DEC", cmdInc: "NAV2_RADIO_WHOLE_INC" },
            "rotary_nav2_fract": { category: "NAV", name: "NAV2 Fract", icon: "📡", type: "rotary", dataKey: "nav2_stby", unit: "", decimals: 2, cmdDec: "NAV2_RADIO_FRACT_DEC", cmdInc: "NAV2_RADIO_FRACT_INC" },
            "rotary_nav3_whole": { category: "NAV", name: "NAV3 Whole", icon: "📡", type: "rotary", customVar: "NAV STANDBY FREQUENCY:3", customUnit: "MHz", decimals: 2, cmdDec: "NAV3_RADIO_WHOLE_DEC", cmdInc: "NAV3_RADIO_WHOLE_INC" },
            "rotary_nav3_fract": { category: "NAV", name: "NAV3 Fract", icon: "📡", type: "rotary", customVar: "NAV STANDBY FREQUENCY:3", customUnit: "MHz", decimals: 2, cmdDec: "NAV3_RADIO_FRACT_DEC", cmdInc: "NAV3_RADIO_FRACT_INC" },
            "rotary_nav4_whole": { category: "NAV", name: "NAV4 Whole", icon: "📡", type: "rotary", customVar: "NAV STANDBY FREQUENCY:4", customUnit: "MHz", decimals: 2, cmdDec: "NAV4_RADIO_WHOLE_DEC", cmdInc: "NAV4_RADIO_WHOLE_INC" },
            "rotary_nav4_fract": { category: "NAV", name: "NAV4 Fract", icon: "📡", type: "rotary", customVar: "NAV STANDBY FREQUENCY:4", customUnit: "MHz", decimals: 2, cmdDec: "NAV4_RADIO_FRACT_DEC", cmdInc: "NAV4_RADIO_FRACT_INC" },
            "rotary_magneto": { category: "Magneto", name: "Ignition Key", icon: "🔑", type: "rotary", dataKey: "magneto_state", unit: "", cmdDec: "MAGNETO1_DEC", cmdInc: "MAGNETO1_INC" }
        };