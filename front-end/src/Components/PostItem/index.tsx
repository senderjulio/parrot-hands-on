import * as S from './styles';
import imgUsuario from '../assets/images/fotousuario.png';

interface PostItemProps {
   text: string;
}
export default function PostItem(props: PostItemProps ) {


    return (
        <S.StyledPreDiv>
               < img className="img p-2" src={imgUsuario} />
             <S.StyledDid  >
           <p>Fulano<br/><S.Styledspan>17/06/2022</S.Styledspan> </p> 
           <p>{props.text}</p>
        </S.StyledDid>
        </S.StyledPreDiv>
    );
}