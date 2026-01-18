export const uploadFile = async (path: string, image: File) => {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase.storage.from("portfolio-v3").upload(path, image);
  if (error) throw error;
  return data;
};
