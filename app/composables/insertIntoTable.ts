import type { Database } from "~/types/database.types";

type Tables = Database["public"]["Tables"];
type InsertFor<T extends keyof Tables> = Tables[T]["Insert"];

export const insertIntoTable = async <T extends keyof Tables & string>(
  table: T,
  data: InsertFor<T>
) => {
  const supabase = useSupabaseClient<Database>();
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const { error } = await supabase.from(table).insert(data as any);
  /* eslint-enable @typescript-eslint/no-explicit-any */
  if (error) throw error;
};
