import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vmxccvlimklprgyjzesh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZteGNjdmxpbWtscHJneWp6ZXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1MzM3NjYsImV4cCI6MTk4NzEwOTc2Nn0.Zw1qooUKGAx9hmcYWl1jLjjESBsMycDKBjj7J4pJxeI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
