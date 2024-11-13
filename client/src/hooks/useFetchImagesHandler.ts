import { useFetchAllImagesQuery } from "../features/image/imageAPI";

export const useFetchImages = () => {
  const token = localStorage.getItem("token");
  const { data, error, isLoading, isSuccess } = useFetchAllImagesQuery(token);

  return { data, error, isLoading, isSuccess };
};
