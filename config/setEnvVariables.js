const envVar = require("../models/env");

const setEnvVariables = async (cb) => {
  try {
    const variableENv = await envVar.find();
    variableENv.map((vars) => {
      if (process.env[`${vars.variableName}`] === vars.variableName) {
        process.env[`${vars.variableName}`] = vars.variableValue;
      }
    });
    require("../server");
  } catch (error) {
    console.log("error on variable getting from db", error.message);
  }
};

module.exports = setEnvVariables;
