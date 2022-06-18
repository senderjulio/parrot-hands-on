import ImagemUsuario from '../ImagemUsuario';
import * as S from './styles';
import imgUsuario from '../assets/images/fotousuario.png'
import { Fragment, useEffect, useState } from 'react';
import ModalEdit from '../ModalEdit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Post, User } from '../@types';
import { getPosts, getUsers } from '../../api';
import { useDispatch } from 'react-redux';
import { setUsersEdit } from '../store/users';
import { setPostsRedux } from '../store/posts';


const UsuarioComponent = () => {

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const userGet:User = useSelector((state: RootState) => state.persistedReducer.users);

  useEffect(() => {
    const pegarPosts = async () => {
      const post = await getPosts()
      const newPost = post.filter(post => post.userId === userGet.id)
      dispatch(setPostsRedux({posts:post}))
      setPosts(newPost)   
    }
    pegarPosts();         
  }, [])
  

  return (
    <Fragment>
        <ImagemUsuario img = {imgUsuario} alt = 'seu nome' width='
        20%' height='80px'/>
        <S.StyledInfUser>
            <S.StyledH1> {userGet.name} </S.StyledH1>
            <S.StyledP>{userGet.apartment} apartamento</S.StyledP>
            <S.StyledP>{userGet.email}</S.StyledP>
            <S.StyledP>{posts.length} publicações</S.StyledP>
        </S.StyledInfUser>
        <S.StyledButton onClick={()=>{setOpenModal(true)}}>Editar pefil</S.StyledButton>

        <ModalEdit show ={openModal} onHide = {()=>setOpenModal(false)}/>
    </Fragment>


  )
}

export default UsuarioComponent;