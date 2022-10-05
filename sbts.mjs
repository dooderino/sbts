/**
 * Seekers Beyond the Shroud game system for Foundry Virtual Tabletop
 * Author: dooderino
 * Software License: MIT
 * Repository: https://github.com/dooderino/sbts
 * Issue Tracker: https://github.com/dooderino/sbts/issues
 */

// Import Configuration
import SBTS from "./module/config.mjs";

// Import Submodules

/* -------------------------------------------- */
/*  Define Module Structure                     */
/* -------------------------------------------- */

globalThis.sbts = {
  config: SBTS,
};

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function () {
  globalThis.sbts = game.sbts = Object.assign(game.system, globalThis.sbts);
  console.log(
    `SBtS | Initializing the SBtS Game System - Version ${sbts.version}\n${SBTS.ASCII}`
  );

  CONFIG.SBTS = SBTS;
});

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

/**
 * Prepare attribute lists.
 */
Hooks.once("setup", function () {});

/* --------------------------------------------- */

/**
 * Expand a list of attribute paths into an object that can be traversed.
 * @param {string[]} attributes  The initial attributes configuration.
 * @returns {object}  The expanded object structure.
 */
function expandAttributeList(attributes) {
  return attributes.reduce((obj, attr) => {
    foundry.utils.setProperty(obj, attr, true);
    return obj;
  }, {});
}

/* --------------------------------------------- */

/**
 * Perform one-time pre-localization and sorting of some configuration objects
 */
//Hooks.once("i18nInit", () => utils.performPreLocalization(CONFIG.DND5E));

/* -------------------------------------------- */
/*  Foundry VTT Ready                           */
/* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
Hooks.once("ready", function () {});

/* -------------------------------------------- */
/*  Canvas Initialization                       */
/* -------------------------------------------- */

Hooks.on("canvasInit", (gameCanvas) => {});

/* -------------------------------------------- */
/*  Other Hooks                                 */
/* -------------------------------------------- */

/* -------------------------------------------- */
/*  Bundled Module Exports                      */
/* -------------------------------------------- */

export { SBTS };
