import ImagemUsuario from '../ImagemUsuario';
import * as S from './styles';
import imgUsuario from '../assets/images/fotousuario.png'
import { Fragment, useState } from 'react';
import ModalEdit from '../ModalEdit';


const UsuarioComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
        <ImagemUsuario img = {imgUsuario} alt = 'seu nome' width='
        20%' height='80px'/>
        <S.StyledInfUser>
            <S.StyledH1>Nome Sobrenome</S.StyledH1>
            <S.StyledP>apê 82</S.StyledP>
            <S.StyledP>user@gmail.com</S.StyledP>
            <S.StyledP>00 publicações</S.StyledP>
        </S.StyledInfUser>
        <S.StyledButton onClick={()=>{setOpenModal(true)}}>Editar pefil</S.StyledButton>

        <ModalEdit show ={openModal} onHide = {()=>setOpenModal(false)}/>
    </Fragment>


  )
}

export default UsuarioComponent;