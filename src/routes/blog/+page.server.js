import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, error } = await supabase
    .from("blogs")
    .select('*')
  if (error) {
    throw error;
  }
  return {
    blogs: data ?? [],
  };

}
