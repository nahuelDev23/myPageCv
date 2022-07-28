import Image from "next/image";

export const CodeExample = () => {
  return (
    <Image
      height="100%"
      layout="responsive"
      objectFit="cover"
      src="/assets/bad_code.png"
      width="100%"
    />
  );
};
