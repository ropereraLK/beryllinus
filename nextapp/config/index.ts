// config/index.ts

import development from "./environments/dev";
import qa from "./environments/qa";
import production from "./environments/prod";

const config =
  process.env.NEXT_PUBLIC_ENV === "qa"
    ? qa
    : process.env.NEXT_PUBLIC_ENV === "production"
    ? production
    : development;

export default config;