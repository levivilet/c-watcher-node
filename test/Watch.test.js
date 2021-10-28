import { mkdtemp } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { watch } from "../src/parts/Watch";

const getTmpDir = () => {
  return mkdtemp(join(tmpdir(), "foo-"));
};

const createWatcher = async (folder) => {
  const watcher = watch(folder);
  await new Promise((resolve) => {
    watcher.once("ready", resolve);
  });
  return watcher;
};

test("create watcher", async () => {
  const tmpDir = await getTmpDir();
  const watcher = await createWatcher(tmpDir);
  watcher.dispose();
});

// TODO test when no folder is given
// TODO test invalid arguments
