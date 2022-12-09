const envVar = require("../models/env");

const setEnvVariables = async () => {
  try {
    console.log("setEnvVariable.js called");
    const variableENv = await envVar.find();
    variableENv.map((vars) => {
      if (process.env[`${vars.variableName}`] === vars.variableName) {
        process.env[`${vars.variableName}`] = vars.variableValue;
      }
    });
    require("../pServer");
  } catch (error) {
    console.log("error on variable getting from db", error.message);
  }
};

module.exports = setEnvVariables;
