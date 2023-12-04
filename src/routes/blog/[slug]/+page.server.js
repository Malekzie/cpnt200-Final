import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const { data, error } = await supabase
    .from("blogs")
    .select('*')
    .eq('slug', params.slug);
    
  if (error) {
    throw error;
  }

  return {
    title: data[0].title,
    author: data[0].author,
    category: data[0].category,
    blogpost: data[0].blogpost,
    datecreated: data[0].datecreated,
  };
}