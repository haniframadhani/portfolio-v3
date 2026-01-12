export const getImageUrl = async (filePath: string) => {
  const supabase = useSupabaseClient();
  const { data } = supabase.storage.from("portfolio-v3").getPublicUrl(filePath);
  return data;
};
