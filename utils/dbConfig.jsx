import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
    "postgresql://wallet_wise_db_owner:yYxIFi5O1SsL@ep-royal-darkness-a5ggx07a.us-east-2.aws.neon.tech/wallet_wise_db?sslmode=require"
);
export const db = drizzle(sql, { schema });
