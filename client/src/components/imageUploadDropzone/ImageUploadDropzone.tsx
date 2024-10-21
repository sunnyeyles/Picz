import "@mantine/dropzone/styles.css";
import { useState } from "react";
import { Group, Text, rem, Button } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useUploadImageMutation } from "../../features/image/imageAPI";
import { useImageUploadHandler } from "../../hooks/useImageUploadHandler";

const isLoading = false;
export const ImageUploadDropzone = (props: Partial<DropzoneProps>) => {
  const [file, setFile] = useState<File | null>(null);
  const handleDrop = (droppedFiles: File[]) => {
    console.log("accepted files", droppedFiles);
    setFile(droppedFiles.length > 0 ? droppedFiles[0] : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      await handleImageUpload(file);
      setFile(null);
    }
  };

  const { handleImageUpload, notification, isLoading } =
    useImageUploadHandler();

  return (
    <>
      <form
        action=""
        encType="multipart/form-data"
        method="post"
        onSubmit={handleSubmit}
      >
        <Dropzone
          loading={isLoading}
          onDrop={handleDrop}
          onReject={(files) => console.log("rejected files", files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
        >
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-blue-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-red-6)",
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: "var(--mantine-color-dimmed)",
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        <Button type="submit">Upload</Button>
      </form>

      {notification && (
        <Text c={notification.color}>{notification.message}</Text>
      )}
    </>
  );
};
