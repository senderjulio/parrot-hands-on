import * as S from './styles';

interface PostContainerProps { 
    children:JSX.Element|JSX.Element[];
    marginTop?:string
}
  export default function PostContainer(props:PostContainerProps){ 
    return <S.StyledDid margintop = {props.marginTop} >{props.children}</S.StyledDid>;
     }