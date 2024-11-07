import { Loader, Text } from "@mantine/core";
import { useFetchAllImagesQuery } from "../../features/image/imageAPI"; // Ensure this hook is correctly imported

const MyImages = () => {
  const {
    data: imageUrls,
    error,
    isLoading,
  } = useFetchAllImagesQuery(undefined);

  if (isLoading) {
    return <Loader size="xl" />;
  }

  if (error) {
    return <Text>Failed to load images. Please try again later.</Text>;
  }

  if (!imageUrls?.length) {
    return <Text>No images available.</Text>;
  }

  return (
    <div>
      <div>
        {imageUrls.map((url: string, index: number) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyImages;
