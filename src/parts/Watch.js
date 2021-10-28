import { spawn } from "child_process";
import csv from "csv-parser";
import { EventEmitter } from "events";
import { cWatcherPath } from "./WatcherPath.js";

export const watch = (folder) => {
  const child = spawn(cWatcherPath, [folder], {
    // stdio: "inherit",
  });
  const eventEmitter = new EventEmitter();
  child.stdout
    .pipe(
      csv({
        headers: ["path", "operation"],
      })
    )
    .on("data", (data) => {
      eventEmitter.emit("all", data);
    });
  child.stderr.on("data", (data) => {
    if (data.toString().includes("Watches established.")) {
      eventEmitter.emit("ready");
    }
  });
  return {
    on(event, listener) {
      eventEmitter.on(event, listener);
    },
    once(event, listener) {
      eventEmitter.once(event, listener);
    },
    off(event, listener) {
      eventEmitter.off(event, listener);
    },
    dispose() {
      child.kill();
    },
  };
};
