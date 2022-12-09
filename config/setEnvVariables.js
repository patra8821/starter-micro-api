const envVar = require("../models/env");

const setEnvVariables = async () => {
  try {
    const variableENv = await envVar.find();
    variableENv.map((vars) => {
      if (process.env[`${vars.variableName}`] === vars.variableName) {
        process.env[`${vars.variableName}`] = vars.variableValue;
      }
    });
    console.log("Env Variables Set Successfully...");
    require("../pServer");
  } catch (error) {
    console.log("Error On Setting Env Variable", error.message);
  }
};

module.exports = setEnvVariables;
