import { Image } from "@mantine/core";

export const ImageCard = (src: string) => {
  return (
    <div>
      <Image radius="sm" src={src} />
    </div>
  );
};
