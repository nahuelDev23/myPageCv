import { Highlighter } from "../Highlighter";

interface Props {
  goTo: () => void;
  number: string;
  text: string;
}

export const ItemNavBar = ({ goTo, number, text }: Props) => {
  return (
    <a onClick={goTo}>
      <Highlighter fontFamily="firaCode" text={number} />
      {text}
    </a>
  );
};
