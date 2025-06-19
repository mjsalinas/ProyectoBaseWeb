import { createClient } from "@supabase/supabase-js";

//npm install @supabase/supabase-js
export const supabase = createClient(
   "https://qsedwdjdvvfaxymvvexm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZWR3ZGpkdnZmYXh5bXZ2ZXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MDU1NTUsImV4cCI6MjA2NDk4MTU1NX0.W_7B6i5t7Qbqf4Kb1YRSyD4HbFt0064RLtgQsAFTUOw"
);