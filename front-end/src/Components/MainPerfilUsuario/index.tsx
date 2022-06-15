import { useEffect, useState } from 'react';
import { getUsers } from '../../api';
import { User } from '../@types';
import CardUser from '../CardUser';
import NoPostsUsuario from '../NoPostUsuario';
import PostsUsuario from '../PostsUsuario';
import UsuarioComponent from '../UsuarioComponent';
import  * as S from './styles';

const MainPerfilUsuario = () => {

  const [userGet, setUsergGet] = useState<User[]>([] as User[])

  useEffect(()=>{
      let users = async ()=>{
          let usuarios = await getUsers()            
          setUsergGet(usuarios)
      }
      users()
  },[])

  return (
    <S.StyledMain>
      <CardUser border = '3px'>
        <UsuarioComponent />
      </CardUser>
      {userGet.length!=0 ? userGet.map((item, index) => (
        <CardUser border="1px" key={index}>
          <PostsUsuario name = {item.name} apartment={item.apartment}/>
        </CardUser>

        )): <NoPostsUsuario/>}
    </S.StyledMain>
  )
}

export default MainPerfilUsuario;