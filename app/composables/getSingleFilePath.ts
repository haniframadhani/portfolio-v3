export const getSingleFilePath = (url: string): string => {
  const bucketName = "portfolio-v3";
  return url.slice(url.indexOf(bucketName) + bucketName.length + 1);
};
