import { Image, Flex } from "@mantine/core";
import { useFetchImages } from "../../hooks/useFetchImagesHandler";

interface IImageData {
  key: string;
  url: string;
}

const MyImages = () => {
  const imageData = useFetchImages();
  let imageUrls: IImageData[] = [];
  console.log(imageData);

  if (imageData.isSuccess && imageData.data) {
    imageUrls = imageData.data.images;
  } else {
    console.log("No images available or request failed.");
  }

  return (
    <div>
      <Flex gap="sm">
        {imageUrls.map((image) => (
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
