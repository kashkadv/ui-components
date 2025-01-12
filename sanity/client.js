import { config } from "./config";
import { createClient } from "@sanity/client";

export const client = createClient(config);