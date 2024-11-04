import "@mantine/dropzone/styles.css";
import { useState } from "react";
import { FormEvent } from "react";
import { Group, Text, rem, Button } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useImageUploadHandler } from "../../hooks/useImageUploadHandler";

export const ImageUploadDropzone = (props: Partial<DropzoneProps>) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (droppedFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length > 0) {
      await Promise.all(files.map(() => handleImageUpload(files)));
      setFiles([]);
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
          // onReject={(files) => console.warn("Rejected files:", files)}
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
                The file should not exceed 5MB
              </Text>
            </div>
          </Group>
        </Dropzone>
        {files.length > 0 && (
          <Text ta="center" fz="md" mt="xs" c="dimmed">
            {`Selected files: ${files.map((file) => file.name).join(", ")}`}
          </Text>
        )}
        <Button type="submit" loading={isLoading}>
          Upload
        </Button>{" "}
      </form>

      {notification && (
        <Text c={notification.color}>{notification.message}</Text>
      )}
    </>
  );
};
