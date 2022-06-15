import { Fragment } from "react";
import ContainerPerfilUsuario from "../../Components/ContainerPerfilUsuario";
import Header from "../../Components/Header";
import MainPerfilUsuario from "../../Components/MainPerfilUsuario";

const PerfilUsuario = () => {

  return (
    <Fragment>
      <Header/>
      <ContainerPerfilUsuario>
        <MainPerfilUsuario/>
      </ContainerPerfilUsuario>
    </Fragment>

  )
}

export default PerfilUsuario;