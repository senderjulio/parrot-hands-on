import { Card } from 'react-bootstrap';
import backgroundPage from '../assets/images/logoLogin.png';
import * as S from './styles';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode,
  titulo: string,
  display?: string
}

const FormComponent = ({children, titulo, display}: Props) => {
  return (
    <S.StyledContainer>
      <S.StyledCard>
        <S.StyledLinkImg to={'/'}>
          <S.StyledCardImg variant="top" src={backgroundPage} />
        </S.StyledLinkImg>        
        <Card.Body>
          <S.StyledCardTitle>{titulo}</S.StyledCardTitle>
            {children}
          
        </Card.Body>
        <S.StyledLink to='/cadastro' style={{display: display}}> cadastre-se </S.StyledLink>
      </S.StyledCard>
    </S.StyledContainer>
  )
}

export default FormComponent; 