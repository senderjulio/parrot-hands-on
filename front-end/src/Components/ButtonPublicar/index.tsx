import * as S from './styles';

interface Props{
    typeButton?: "button" | "submit" | "reset" | undefined;
    text: string;
    onclick?: () => void;
}

const ButtonPublicar = ({typeButton, text, onclick}:Props) => {
  return (
    <S.StyledButton onClick={onclick} type = {typeButton} >{text}</S.StyledButton>
  );
}

export default ButtonPublicar;