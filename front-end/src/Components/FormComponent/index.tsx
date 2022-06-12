import { Card, Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import GroupInput from '../GroupInput';
import logoLogin from '../assets/images/logoLogin.png';
import * as S from './styles';

const FormComponent = () => {
  return (
    <S.StyledContainer>
      <S.StyledCard>
        <S.StyledCardImg variant="top" src={logoLogin} />
        <Card.Body>
          <S.StyledCardTitle>Login</S.StyledCardTitle>
          <Form>
            <GroupInput placeholder = 'email' type = 'email' />
            <GroupInput placeholder ='senha' type = 'password' />
          </Form>
          <S.StyledButton>entrar</S.StyledButton>
        </Card.Body>
        <S.StyledLink to='/'> cadastre-se </S.StyledLink>
      </S.StyledCard>

    </S.StyledContainer>
  )
}

export default FormComponent; 