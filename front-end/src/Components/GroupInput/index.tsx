import * as S from './styles';

interface Props{
  placeholder: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  isValid?: boolean;

}

const GroupInput = ({placeholder, type, id, value, onChange, isInvalid, isValid}:Props) => {
  return (

    <S.StyledFormGroup type= {type} placeholder = {placeholder} value = {value} id = {id} onChange = {onChange} isInvalid = {isInvalid} isValid = {isValid}/>

  );
}

export default GroupInput;