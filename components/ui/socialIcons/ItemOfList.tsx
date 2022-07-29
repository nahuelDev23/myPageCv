import { ListItem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

import { primaryColor } from "../../../theme/theme_base";

interface Props {
  children: ReactNode;
  url: string;
}

export const ItemOfList: FC<Props> = ({ children, url }) => {
  const mouseOut = ({ target }: any) => {
    return (
      (target.style.color = "rgba(255, 255, 255, 0.92)"),
      (target.style.transition = "all .2s linear"),
      (target.style.transform = "translateY(0px)")
    );
  };

  const mouseOver = ({ target }: any) => {
    return (
      (target.style.color = primaryColor),
      (target.style.transition = "all .2s linear"),
      (target.style.transform = "translateY(-5px)")
    );
  };

  return (
    <ListItem onMouseOut={mouseOut} onMouseOver={mouseOver}>
      <a href={url} rel="noreferrer" target="_blank">
        {children}
      </a>
    </ListItem>
  );
};
