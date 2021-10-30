import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const cWatcherPath = join(
  __dirname,
  `../../bin/c-watcher-v0.0.2-linux-x64/hello`
);
