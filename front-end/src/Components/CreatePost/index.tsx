import React, { useEffect, useState } from "react";
import PostContainer from "../../Components/PostContainer";
import Header from "../../Components/Header";
import ButtonPublicar from "../../Components/ButtonPublicar";
import * as S from './styles';
import imgUsuario from '../../Components/assets/images/fotousuario.png';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { createPosts, getPosts } from "../../api";
import { Post, User } from "../@types";
import PostItem from "../PostItem";
import { useNavigate } from "react-router-dom";


function CreatePost() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const user = useSelector((state: RootState) => state.persistedReducer.users);

  useEffect(() => {
    let handlePost = async () => {
      const response = await getPosts()
      setPosts(response)
    }
    handlePost();
    
  }, []);

  const handleClick = () => {
    navigate(`/perfilusuario/${user.id}`);
    alert('Você está em um novo lugar');
  }

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
      const a = await createPosts({texto: values.texto, userId: user.id});   
    }

    })

  return (
    <PostContainer  >
<Header />
      
      <S.StyledForm onSubmit={formik.handleSubmit} >
        <div className="align-self-center " >
        < img className="img p-2 " src={imgUsuario} />
        <S.StyledTextarea value={formik.values.texto} id = 'texto' onChange={formik.handleChange}  ></S.StyledTextarea>
        </div>
        <div>
        <ButtonPublicar typeButton="submit" text={"publicar"}/>
        <ButtonPublicar typeButton="button" onclick = {handleClick} text={"Perfil"}/>
        </div>
        </S.StyledForm>
  
      <PostContainer>
        {posts.map((item) => (
            <PostItem
              key={item.id}
              text={item.texto} />
          ))}
      </PostContainer>
    </PostContainer>
  );
}
export default  CreatePost;
