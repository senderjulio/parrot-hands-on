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
  const [users, setUsers] = useState<User>({} as User);
  const [posts, setPosts] = useState<Post[]>([]);
  const userGet:User = useSelector((state: RootState) => state.persistedReducer.users);

  useEffect(() => {
    const pegarUser = async () => {
      let id = parseInt(window.location.search.split('?')[1]);
      const user = await getUsers(id)
      const post = await getPosts()
      dispatch(setUsersEdit({users:user}))
      dispatch(setPostsRedux({posts:post}))
      setUsers(user); 
      setPosts(post)   
    }
    pegarUser();         
  }, [])

  console.log(posts);
  

  return (
    <Fragment>
        <ImagemUsuario img = {imgUsuario} alt = 'seu nome' width='
        20%' height='80px'/>
        <S.StyledInfUser>
            <S.StyledH1> {users.name} </S.StyledH1>
            <S.StyledP>{users.apartment} apartamento</S.StyledP>
            <S.StyledP>{userGet.email}</S.StyledP>
            <S.StyledP>{posts.length} publicações</S.StyledP>
        </S.StyledInfUser>
        <S.StyledButton onClick={()=>{setOpenModal(true)}}>Editar pefil</S.StyledButton>

        <ModalEdit show ={openModal} onHide = {()=>setOpenModal(false)}/>
    </Fragment>


  )
}

export default UsuarioComponent;