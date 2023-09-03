import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./database.types";

const supabaseClient = createPagesBrowserClient<Database>();
