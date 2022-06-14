import CardUser from "../../Components/CardUser";
import ContainerPerfilUsuario from "../../Components/ContainerPerfilUsuario";
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
  )
}

export default PerfilUsuario;