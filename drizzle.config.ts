import { type Config } from "drizzle-kit";

import { env } from "note/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["fitness_info_*"],
} satisfies Config;
