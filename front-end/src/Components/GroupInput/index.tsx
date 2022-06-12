import * as S from './styles';

interface Props{
  placeholder: string;
  type: string;
}

const GroupInput = ({placeholder, type}:Props) => {
  return (

    <S.StyledFormGroup type= {type} placeholder = {placeholder}/>

  );
}

export default GroupInput;