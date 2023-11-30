import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, error } = await supabase
  .from("blogs")
  .select('*')
  
  if (error) throw new error ("Cannot fetch data");
  return {
    blogs: data ?? [],
  };
}