import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardUser from '../CardUser';
import NoPostsUsuario from '../NoPostUsuario';
import PostsUsuario from '../PostsUsuario';
import { RootState } from '../store';
import UsuarioComponent from '../UsuarioComponent';
import  helper  from '../helper';
import ContainerMain from '../ContainerMain';

const MainPerfilUsuario = () => {

  const { convertData } = helper()

  const userGet = useSelector((state: RootState) => state.persistedReducer.users);
  const postsGet = useSelector((state: RootState) => state.postsSlice.posts);
  const postsFilter = postsGet.filter(post => post.userId === userGet.id);
  console.log(postsGet);
  

  useEffect(()=>{
  },[])

  return (
    <ContainerMain>
      <CardUser border = '3px'>
        <UsuarioComponent />
      </CardUser>
      {postsFilter.length != 0 ? postsFilter.map((item, index)=>(
        <CardUser border="1px"  key={index}>
          <PostsUsuario name = {userGet.name} apartment={userGet.apartment} post = {item.texto} data = {convertData(item.createdAt)} />
        </CardUser>
      )).reverse()
        : <NoPostsUsuario/>}
    </ContainerMain>
  )
}

export default MainPerfilUsuario;