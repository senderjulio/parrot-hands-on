import React, { useEffect, useState } from "react";
import PostContainer from "../../Components/PostContainer";
import Header from "../../Components/Header";
import ButtonPublicar from "../../Components/ButtonPublicar";
import * as S from './styles';
import imgUsuario from '../../Components/assets/images/fotousuario.png';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createPosts, getPosts, getUsers } from "../../api";
import { Post, User } from "../@types";
import PostItem from "../PostItem";
import { useNavigate } from "react-router-dom";
import { setUsersEdit } from "../store/users";


function CreatePost() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User>({} as User);
  let id = parseInt(window.location.search.split('?')[1]);
  useEffect(() => {
    const pegarUser = async () => {
      const user = await getUsers(id)
      setUsers(user);
      dispatch(setUsersEdit({users:user}))    
    }
    let handlePost = async () => {
      const response = await getPosts()
      setPosts(response)
    }
    handlePost();
    pegarUser();         
  }, [])


  console.log(posts);
  
  const validationSchema = Yup.object({
    texto: Yup.string().required('O nome é obrigatório'),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      texto: '',
    },
    validationSchema,
    onSubmit: async values => {
      const a = await createPosts({texto: values.texto, userId:users.id});
      window.location.reload();   
    }


    })

  return (
    <PostContainer  >
      <S.StyledForm onSubmit={formik.handleSubmit} >
        <div className="align-self-center " >
        < img className="img p-2 " src={imgUsuario} />
        <S.StyledTextarea value={formik.values.texto} id = 'texto' onChange={formik.handleChange}  ></S.StyledTextarea>
        </div>
        <div>
        <ButtonPublicar typeButton="submit" text={"publicar"}/>
        </div>
        </S.StyledForm>
  
      <PostContainer>
        {posts.map((item) => (
            <PostItem
              key={item.id}
              text={item.texto} />
          )).reverse()}
      </PostContainer>
    </PostContainer>
  );
}
export default  CreatePost;
