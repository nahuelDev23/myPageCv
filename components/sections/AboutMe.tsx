import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import { CurrentTecnologiesList } from "../ui/technologies";

export const AboutMe = () => {
  return (
    <Stack my="8">
      <Stack>
        <Heading as="h2" mb="4">
          <Stack alignItems="baseline" direction="row">
            <Text color="green.500" fontFamily="firaCode" fontWeight="500">
              01.
            </Text>
            <Text fontFamily="paraph">Quien es Nahuel? </Text>
          </Stack>
        </Heading>

        <Text>Es un muchacho apasionado por el desarrollo web.</Text>

        <Text>
          En 2011 empezó a desarrollar como pasa tiempo, creando webs para sus
          amigos y en 2020 comenzó a considerar trabajar de lo que ama.
        </Text>

        <Text>
          <Box as="span" color="green.500" fontWeight="bold">
            Con perfil más orientado al fullstack
          </Box>
          , dio sus primeros pasos hacia el backend de la mano de PHP, luego
          conoció el mundo de los frameworks, siendo Laravel el primero en ser
          aprendido.
        </Text>

        <Text>
          El mundo del backend le presento un mundo de posibilidades y
          tecnologías para comenzar a aprender.
          <Box as="span" color="green.500" fontWeight="bold">
            {" "}
            Desde bases de datos relacionales como MariaDB, pasando por patrones
            de diseño hasta el Test Driven Development.
          </Box>
        </Text>

        <Text>
          A esa altura ya tenia maneras de crear un backend funcional, pero
          había más cosas por aprender,el frontend.
        </Text>

        <Text>
          Los viejos confiables{" "}
          <Box as="span" color="green.500" fontWeight="bold">
            HTML,CSS Y Javascript{" "}
          </Box>
          serian quienes lo iniciarían en este maravilloso mundo lleno de
          estilos,colores e interactividad.
        </Text>

        <Text>
          Una vez se sintió comodo con los tres poderes básicos quedaba dar el
          paso hacia los frameworks que le ofrecía Javascript,pero eran MILES!.
        </Text>

        <Text>
          <Box as="span" color="green.500" fontWeight="bold">
            Vue.js
          </Box>{" "}
          fue el elegido en esta nueva aventura, ya que Laravel le ofrecía una
          integración sencilla por lo que no tenia que preocuparse por mas nada
          que en comenzar a aprender.
        </Text>

        <Text>
          Finalmente tras un largo recorrido llegamos al 2021{" "}
          <Box as="span" color="green.500" fontWeight="bold">
            donde decidió cambiar todo su stack a MERN
          </Box>{" "}
          del cual se enamoro y continua hasta el dia de hoy sumando conceptos e
          intentando mejorar dia tras dia!
        </Text>
      </Stack>

      <CurrentTecnologiesList />
    </Stack>
  );
};
