import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function createUserAccount(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(error);
}
