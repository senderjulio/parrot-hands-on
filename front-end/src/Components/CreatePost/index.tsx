import React, { useEffect, useState } from "react";
import PostContainer from "../../Components/PostContainer";
import PostItem from "../../Components/PostItem";
import Header from "../../Components/Header";
import ButtonPublicar from "../../Components/ButtonPublicar";
import * as S from './styles';
import imgUsuario from '../../Components/assets/images/fotousuario.png';



interface Post {
  titulo: string;
  done: boolean;
}
function CreatePost() {
  const [post, setPost] = useState<Post[]>([]);
  const [tituloPost, setTituloPost] = useState<string>("")

  function adicionarPost(event:React. FormEvent) {
    event.preventDefault();
    setPost([
      
      ...post,
    {
      titulo: tituloPost,
      done: false,
    }

    ])
    setTituloPost("")
  }


function concluirPost(posicao: number): void{
const novaLista = [...post] ;

novaLista[posicao].done = true;

setPost(novaLista)
}

useEffect(() => {
  if(post.length >=10){
 alert(post)
 
  }
  setTituloPost("")
}, [post])

  return (
    <PostContainer  >
<Header />
      
      <S.StyledForm  onSubmit={adicionarPost}>
        <div className="align-self-center " >
        < img className="img p-2 " src={imgUsuario} />
        <S.StyledTextarea 
      
      onChange={(event) => setTituloPost(event.target.value)}
       value={tituloPost} ></S.StyledTextarea>
        </div>
        <div>
        <ButtonPublicar text={"publicar"}/>
        </div>
        </S.StyledForm>
  
      <PostContainer>
        {post.map((post: Post, posicao:number) => {
            return (  
            <PostItem
          text={post.titulo} 
            concluirPost ={() => concluirPost(posicao)}
            />
          )
          })}
      </PostContainer>
    </PostContainer>
  );
}
export default  CreatePost;
