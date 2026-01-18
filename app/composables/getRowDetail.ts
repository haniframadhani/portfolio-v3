import type { Database } from "~/types/database.types";

export const getRowDetail = async (table: "blogs" | "projects", id: string) => {
  const client = useSupabaseClient<Database>();

  const { data, error } = await client.from(table).select().eq("id", id).single();

  if (error) throw error;
  return data;
};
