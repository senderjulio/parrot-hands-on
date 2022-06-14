import { Fragment } from "react";
import CardUser from "../../Components/CardUser";
import ContainerPerfilUsuario from "../../Components/ContainerPerfilUsuario";
import Header from "../../Components/Header";
import MainPerfilUsuario from "../../Components/MainPerfilUsuario";
import NoPostsUsuario from "../../Components/NoPostUsuario";
import PostsUsuario from "../../Components/PostsUsuario";
import UsuarioComponent from "../../Components/UsuarioComponent";


const PerfilUsuario = () => {
  const a = [{
    nome: "João",
    apartamento: 10,
  },
  {
    nome: "Maria",
    apartamento: 11,
  }
]
  return (
    <Fragment>
      <Header/>
      <ContainerPerfilUsuario>
        <MainPerfilUsuario>
          <CardUser border = '3px'>
            <UsuarioComponent />
          </CardUser>
          {a.length!=0 ? a.map((item, index) => (
            <CardUser border="1px" key={index}>
              <PostsUsuario nome = {item.nome} apartamento={item.apartamento}/>
            </CardUser>

            )): <NoPostsUsuario/>}
        </MainPerfilUsuario>
      </ContainerPerfilUsuario>
    </Fragment>

  )
}

export default PerfilUsuario;