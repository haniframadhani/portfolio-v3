export const deleteFile = async (path: string[]) => {
  const supabase = useSupabaseClient();
  const { error } = await supabase.storage.from("portfolio-v3").remove(path);
  if (error) throw error;
};
