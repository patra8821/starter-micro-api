const envVar = require("../models/env");

const setEnvVariables = async () => {
  try {
    const variableENv = await envVar.find();
    console.log(variableENv);
    variableENv.map((vars) => {
      if (process.env[`${vars.variableName}`] === vars.variableName) {
        process.env[`${vars.variableName}`] = vars.variableValue;
      }
    });
    console.log(process.env.CONTRIES);
    require("../server");
  } catch (error) {
    console.log("error on variable getting from db", error.message);
  }
};

module.exports = setEnvVariables;
