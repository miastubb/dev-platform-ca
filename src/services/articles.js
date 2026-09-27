import { supabase } from "../lib/supabase";

export async function fetchArticles() {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, content, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}
