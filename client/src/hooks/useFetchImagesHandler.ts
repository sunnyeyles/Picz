import { useFetchAllImagesQuery } from "../features/image/imageAPI";

export const useFetchImages = () => {
  const { data, error, isLoading, isSuccess } =
    useFetchAllImagesQuery(undefined);

  return { data, error, isLoading, isSuccess };
};
