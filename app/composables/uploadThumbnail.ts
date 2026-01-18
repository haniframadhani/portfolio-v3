import { getImageUrl } from "./getImageUrl";
import { uploadFile } from "./uploadFile";

export const uploadThumbnail = async (storageFolder: string, image: File) => {
  const fileExtention = image.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${fileExtention}`;
  const filePath = `${storageFolder}/${fileName}`;
  await uploadFile(filePath, image);
  const { publicUrl } = await getImageUrl(filePath);

  return publicUrl;
};
