import { cWatcherPath } from "../src/parts/WatcherPath";
import { pathExists } from "path-exists";

test("watcherPath", async () => {
  expect(cWatcherPath).toBeDefined();
  expect(await pathExists(cWatcherPath)).toBe(true);
});
