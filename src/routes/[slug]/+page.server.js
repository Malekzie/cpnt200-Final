import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  let response = await supabase
  .from('blogs')
  .select('*')
  .eq('slug', params.slug)
  return {
    title: response.data[0].title,
    blogpost: response.data[0].blogpost,
    author: response.data[0].author,
    date: response.data[0].date,
    category: response.data[0].category
  };
}
