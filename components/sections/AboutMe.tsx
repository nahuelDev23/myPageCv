import { Grid, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";

import {
  DividerPhrases,
  HeadTitle,
  Highlighter,
  RadarChartSkills,
} from "../ui";
import { MyPhoto } from "../ui/";
import { CurrentTecnologiesList } from "../ui/technologies";
import { ScrollToContext } from "../../context/scrollTo/ScrollToContext";
import { TransitionContext } from "../../context";
import { MotionBox } from "../../animations/chakraComponents";
import { aboutAppearEffect } from "../../animations";

export const AboutMe = () => {
  const { scrollToAboutMe } = useContext(ScrollToContext);

  const { isNavBarTransitionEnd, setIsAboutTransitionEnd } =
    useContext(TransitionContext);

  const { visible, hidden } = aboutAppearEffect;

  return (
    <Stack ref={scrollToAboutMe} my="8" scrollMarginTop="24">
      {isNavBarTransitionEnd && (
        <>
          <Stack mb="8">
            <MotionBox
              animate={visible}
              initial={hidden}
              onAnimationComplete={() => setIsAboutTransitionEnd()}
            >
              <HeadTitle number="01" title="Quién es Nahuel? " />
              <Grid
                gap="8"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(2,1fr)",
                }}
              >
                <Stack>
                  <Stack>
                    <Text>
                      Es un muchacho apasionado por el desarrollo web.
                    </Text>

                    <Text>
                      En 2011 empezó a desarrollar como pasa tiempo, creando
                      webs para sus amigos y en 2020 comenzó a considerar
                      trabajar de lo que ama.
                    </Text>

                    <Text>
                      <Highlighter text="Con perfil más orientado al fullstack" />
                      , dio sus primeros pasos hacia el backend de la mano de
                      PHP, luego conoció el mundo de los frameworks, siendo
                      Laravel el primero en ser aprendido.
                    </Text>

                    <Text>
                      El mundo del backend le presento un mundo de posibilidades
                      y tecnologías para comenzar a aprender.
                      <Highlighter
                        text=" Desde bases de datos relacionales como MariaDB, pasando por patrones
            de diseño hasta el Test Driven Development."
                      />
                    </Text>

                    <Text>
                      A esa altura ya tenia maneras de crear un backend
                      funcional, pero había más cosas por aprender,el frontend.
                    </Text>

                    <Text>
                      Los viejos confiables{" "}
                      <Highlighter text="  HTML,CSS Y Javascript " />
                      serian quienes lo iniciarían en este maravilloso mundo
                      lleno de estilos,colores e interactividad.
                    </Text>

                    <Text>
                      Una vez se sintió comodo con los tres poderes básicos
                      quedaba dar el paso hacia los frameworks que le ofrecía
                      Javascript,pero eran MILES!.
                    </Text>

                    <Text>
                      <Highlighter text="Vue.js " />
                      fue el elegido en esta nueva aventura, ya que Laravel le
                      ofrecía una integración sencilla por lo que no tenia que
                      preocuparse por mas nada que en comenzar a aprender.
                    </Text>

                    <Text>
                      Finalmente tras un largo recorrido llegamos al 2021{" "}
                      <Highlighter text="donde decidió cambiar todo su stack a MERN " />
                      del cual se enamoro y continua hasta el dia de hoy sumando
                      conceptos e intentando mejorar dia tras dia!
                    </Text>
                  </Stack>

                  <CurrentTecnologiesList />
                </Stack>
                <Stack maxWidth="100%" overflowX="hidden">
                  <MyPhoto />
                  <RadarChartSkills />
                </Stack>
              </Grid>
            </MotionBox>
          </Stack>
          <DividerPhrases
            author="Michael Feathers"
            phrase="El buen código parece estar escrito por alguien a quien le importa."
          />
        </>
      )}
    </Stack>
  );
};
