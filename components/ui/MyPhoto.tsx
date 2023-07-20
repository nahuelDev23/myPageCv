import { Box, Stack } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import * as nahuelImages from '../../lib/nahueldevdraws.json'
import Image from "next/image";

export const MyPhoto = () => {
  const [viewportRef] = useEmblaCarousel()
  const { pictures } = nahuelImages;
  return (
    <Stack>
      {
        viewportRef && (
          <Stack ref={viewportRef} maxW="100vw" overflow="hidden">
            <Stack direction="row">
              {pictures.map(({ url }: { url: string }, index: number) => (
                <Stack
                  aria-label="pictures of nahueldev23"
                  key={url + index}
                  flexBasis="100%"
                  flexGrow="0"
                  flexShrink="0"
                  maxWidth="100%"
                  ml="10px"
                >
                  <Box bgColor="gray.400" h="500px" rounded="md" w="100%" position="relative" borderRadius="7px" overflow="hidden">
                    <Image src={url} layout="fill" objectFit="cover" alt="picture of nahueldev23" />
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        )
      }

    </Stack>
  );
};
