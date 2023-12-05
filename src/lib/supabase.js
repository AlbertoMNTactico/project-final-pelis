import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient("https://nbwkbedmsgjzvmjsnbsh.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id2tiZWRtc2dqenZtanNuYnNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDYxNDYwNywiZXhwIjoyMDE2MTkwNjA3fQ.R05v4TIPaKDhjqWVOwJhwfuHQps2-DEYyzunVojJ-58", {
  auth: {
    persistSession: true,
  },
});
