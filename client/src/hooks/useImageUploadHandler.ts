import { useState } from "react";
import { useUploadImageMutation } from "../features/image/imageAPI";

export const useImageUploadHandler = () => {
  const [uploadImage, { isLoading }] = useUploadImageMutation();
  const [notification, setNotification] = useState<{
    color: string;
    message: string;
  } | null>(null);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const result = await uploadImage(formData).unwrap();
      console.log(result);
      setNotification({ color: "green", message: "Upload successful!" });
    } catch (err) {
      console.error(err);
      setNotification({ color: "red", message: "Image upload failed!" });
    }
  };

  return { handleImageUpload, notification, setNotification, isLoading };
};
