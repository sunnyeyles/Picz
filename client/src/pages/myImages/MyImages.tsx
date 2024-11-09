import { Image, Flex } from "@mantine/core";
import { useFetchImages } from "../../hooks/useFetchImagesHandler";
interface IImage {
  key: string;
  url: string;
}

const MyImages = () => {
  const imageData = useFetchImages();
  let imageUrls: IImage[] = [];

  if (imageData.isSuccess && imageData.data) {
    imageUrls = imageData.data.images;
  } else {
    console.log("No images available or request failed.");
  }

  return (
    <div>
      <Flex gap="sm">
        {imageUrls.map((image: IImage) => (
          <Image
            w="200px"
            h="200px"
            radius="sm"
            key={image.key}
            src={image.url}
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
        ))}
      </Flex>
    </div>
  );
};

export default MyImages;
