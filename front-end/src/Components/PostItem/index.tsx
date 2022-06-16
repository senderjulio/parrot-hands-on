import * as S from './styles';
import imgUsuario from '../assets/images/fotousuario.png';

interface PostItemProps {
   text: string;
    concluirPost: ()=> void;
}
export default function PostItem(props: PostItemProps ) {
    const data = new Date().toLocaleString('pt-BR', {  dateStyle: "short",timeStyle: "short" })
    const nome  = "Vinicius - apê 42"

    return (
        <S.StyledPreDiv>
               < img className="img p-2" src={imgUsuario} />
             <S.StyledDid  >
           <p >{nome} <br/><S.Styledspan>{data}</S.Styledspan> </p> 
           <p>{props.text}</p>
       </S.StyledDid>
        </S.StyledPreDiv>
    );
}