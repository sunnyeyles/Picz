import { useState } from "react";
import { useUploadImageMutation } from "../features/image/imageAPI";

export const useImageUploadHandler = () => {
  const [uploadImage, { isLoading }] = useUploadImageMutation();
  const [notification, setNotification] = useState<{
    color: string;
    message: string;
  } | null>(null);

  const handleImageUpload = async (files: File[]) => {
    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        return uploadImage(formData).unwrap();
      });

      await Promise.all(uploadPromises);
      setNotification({ color: "green", message: "All uploads successful!" });
    } catch (err) {
      console.error(err);
      setNotification({ color: "red", message: "One or more uploads failed!" });
    }
  };

  return { handleImageUpload, notification, setNotification, isLoading };
};
