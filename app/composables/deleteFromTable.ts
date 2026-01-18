export const deleteFromTable = async (table: "blogs" | "projects", id: string) => {
  const supabase = useSupabaseClient();
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
};
