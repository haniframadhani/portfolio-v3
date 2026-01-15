import type { Database } from "~/types/database.types";

export const updateTable = async (
  table: "projects" | "blogs",
  id: string,
  data: Database["public"]["Tables"][typeof table]["Update"]
) => {
  const supabase = useSupabaseClient<Database>();

  const { error } = await supabase.from(table).update(data).eq("id", id);

  if (error) throw error;
};
