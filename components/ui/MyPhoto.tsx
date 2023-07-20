import { Box, Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import * as nahuelImages from "../../lib/nahueldevdraws.json";

export const MyPhoto = () => {
  const [viewportRef] = useEmblaCarousel();
  const { pictures } = nahuelImages;

  return (
    <Stack>
      {viewportRef && (
        <Stack
          ref={viewportRef}
          display={{ base: "none", md: "flex" }}
          maxW="100vw"
          overflow="hidden"
        >
          <Stack direction="row">
            {pictures.map(({ url }: { url: string }, index: number) => (
              <Stack
                key={url + index}
                aria-label="pictures of nahueldev23"
                flexBasis="100%"
                flexGrow="0"
                flexShrink="0"
                maxWidth="100%"
                ml="10px"
              >
                <Box
                  bgColor="gray.400"
                  borderRadius="7px"
                  h="500px"
                  overflow="hidden"
                  position="relative"
                  rounded="md"
                  w="100%"
                >
                  <Image
                    alt="picture of nahueldev23"
                    layout="fill"
                    objectFit="cover"
                    src={url}
                  />
                </Box>
              </Stack>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
