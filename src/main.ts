import { Logger, LogLevel } from "@itwin/core-bentley";
import * as dotenv from 'dotenv';
import IModelService from "./imodel.service";


Logger.initializeToConsole();
Logger.setLevelDefault(LogLevel.Error);

dotenv.config();
console.log("MY AGENT STARTED");

(async () => {
  try {

    const modelInfo = await IModelService.GetModelInfo(process.env.IMODEL_ID);
    console.log(modelInfo)
    console.log("MY AGENT FINISHED");
  } catch (error) {
    console.error(error, "Unhandled exception thrown in my-agent");
    process.exitCode = 1;
  }
})();

process.on("unhandledRejection", (_reason, promise) => {
  console.error("Unhandled promise rejection at:", promise);
  process.exitCode = 1;
});
