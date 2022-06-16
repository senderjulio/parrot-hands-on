import * as S from './styles';

interface PostContainerProps { 
    children:JSX.Element|JSX.Element[];
}
  export default function PostContainer(props:PostContainerProps){ 
    return <S.StyledDid >{props.children}</S.StyledDid>;
     }