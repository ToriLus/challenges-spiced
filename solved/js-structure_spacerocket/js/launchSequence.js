// Implement the launch sequence function here and export it as the default export.
import { NFSAT } from "./payload/satellites.js";
import { FISHSAT } from "./payload/satellites.js";
import { countdown } from "./core/countdown.js";
import { deployPayload } from "./core/deploy.js";
import { fuel } from "./core/fuel.js";
import { liftoff } from "./core/liftoff.js";
import { loadPayload } from "./core/load.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  for (let i = 0; i < 5; i++) {
    countdown();
  }
  liftoff();
  deployPayload();
}
