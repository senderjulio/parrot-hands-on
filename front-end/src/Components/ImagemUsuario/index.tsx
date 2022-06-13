import * as S from './styles';
interface Props {
    img: string;
    alt: string;
    width: string;
    height: string;
}

const ImagemUsuario = ({img, alt, width, height}:Props) => {
  return (
    <S.StyledImgUser src= {img} alt = {alt} imgWidth = {width} imgHeight = {height}/>
  )
}

export default ImagemUsuario;