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
    title: response.data[0].title,
    author: response.data[0].author,
    category: response.data[0].category,
    blogpost: response.data [0]. blogpost,
    datecreated: response.data[0]. datecreated
  };
}