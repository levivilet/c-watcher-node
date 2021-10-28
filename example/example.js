import { mkdtemp, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { watch } from "../src/parts/Watch.js";

const getTmpDir = () => {
  return mkdtemp(join(tmpdir(), "foo-"));
};

const main = async () => {
  const tmpDir = await getTmpDir();
  const watcher = watch(tmpDir);
  await writeFile(`${tmpDir}/test.txt`, "");
};

main();
