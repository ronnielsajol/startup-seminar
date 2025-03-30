import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config/env";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
	throw new Error("Supabase URL or Anonymous Key is missing");
}

export const supabase = createClient(SUPABASE_URL ?? "", SUPABASE_ANON_KEY ?? "");
