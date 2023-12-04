import { supabase } from "$lib/supabaseClient";
export async function load({ params }) {
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', params.slug)
      .single();
  
    if (error) throw error;
  
    if (!blog) {
      return {
        status: 404,
        body: 'Not Found'
      };
    }
  
    return {
      props: {
        blog
      }
    };
  }
