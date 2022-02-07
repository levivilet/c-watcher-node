import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { VERSION } from "./Version.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const cWatcherPath = join(
  __dirname,
  `../../bin/c-watcher-${VERSION}-linux-x64/hello`
);
