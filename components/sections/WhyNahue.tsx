import { Grid, Heading, Stack, Text } from "@chakra-ui/react";

import { HeadTitle } from "../ui";

export const WhyNahue = () => {
  return (
    <Stack my="8">
      <HeadTitle number="02" title="Por qué es bueno trabajar con Nahue?" />
      <Grid
        gap="8"
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      >
        <Stack>
          <Heading as="h3">Trabajo en Equipo</Heading>
          <Text>
            La sensación de trabajar en equipo para lograr las metas propuestas
            es una de las cosas que mas disfruto.
          </Text>
          <Text>
            Creo firmemente que generar un ambiente de confianza y comodidad es
            primordial a la hora de encarar nuevos desafíos.
          </Text>
          <Text>
            Considero también que aprender de los demás y enseñar lo aprendido
            es la mejor manera de que un grupo crezca, permitiendo que entre
            todos hagamos el mejor trabajo posible y disfrutando del proceso 🔥.
          </Text>
        </Stack>
        <Stack>
          <Heading as="h3">Skill individual</Heading>
          <Text>
            Me propongo día a día superarme,Intentando profundizar en conceptos
            que tal vez ya conocía pero que yendo un poco mas allá me permitan
            ver los problemas desde otra perspectiva o darme cuenta de que hay
            cosas que creía que sabia y en realidad eran un falso positivo 😅.
          </Text>
          <Text>
            Me gusta aprender nuevas maneras de hacer las cosas para poder
            comparar resultados y en proyectos posteriores mejorar la toma de
            decisiones desde los cimientos 💪.
          </Text>
          <Text>
            Otra cosa que me gusta mucho hacer es conocer nuevas herramientas y
            técnicas para mejorar la calidad, escalabilidad y legibilidad de mi
            código.A mi parecer escribir código bonito es una forma de arte 🌈.
          </Text>
        </Stack>
      </Grid>
    </Stack>
  );
};
