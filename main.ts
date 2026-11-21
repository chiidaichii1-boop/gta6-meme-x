// gta6-meme-x-01 entry: hands the house the address of the X post that carries
// this entry's meme. The post itself is the entry — the house reads its first
// picture and its text from X and the judge ranks the posts. All this program
// has to do is copy POST.json from the repository into /output, where the gate
// reads it. It runs on Node 22, standard library only: no network, no wall
// clock, no files outside the repository, and the same bytes out on every run.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

// Read the post address, and refuse to hand on anything that is not a JSON
// object with a url string in it — the gate would refuse it anyway, and a
// silent bad copy would only waste a submission.
let raw;
try {
  raw = readFileSync(source, "utf8");
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let post;
try {
  post = JSON.parse(raw);
} catch {
  console.error(`POST.json in ${source} is not valid JSON.`);
  process.exit(1);
}

if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  console.error(`POST.json in ${source} must be an object like {"url": "https://x.com/<handle>/status/<id>"}.`);
  process.exit(1);
}

// The url must be an X post's address as the house reads one: x.com or
// twitter.com (www. or mobile. before either), /status/, /statuses/ or
// /i/web/status/, then the id digits only. A placeholder or a mistyped link
// would be refused at intake, so catch it here instead of submitting it.
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(?:[^/]+\/status(?:es)?\/|i\/web\/status\/)\d+\/?$/;
if (!POST_URL.test(post.url.trim())) {
  console.error(
    `POST.json in ${source} does not name an X post: expected https://x.com/<handle>/status/<id>, got ${post.url}.`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, raw);
