import { Image, Flex } from "@mantine/core";

import { useFetchImages } from "../../hooks/useFetchImagesHandler";

const MyImages = () => {
  const imageData = useFetchImages();
  let imageUrls = [];
  if (imageData.isSuccess && imageData.data) {
    imageUrls = imageData.data.images;
  } else {
    console.log("No images available or request failed.");
  }

  return (
    <div>
      <Flex gap="sm">
        {imageUrls.map((index: any) => (
          <Image
            w="200px"
            h="200px"
            radius="sm"
            key={Math.random()}
            src={index.url}
            style={{ width: "100%", height: "auto", marginBottom: "10px" }}
          />
        ))}
      </Flex>
    </div>
  );
};

export default MyImages;
