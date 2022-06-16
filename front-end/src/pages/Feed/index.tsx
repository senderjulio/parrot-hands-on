import React from 'react';
import CreatePost from '../../Components/CreatePost';
import Header from '../../Components/Header';
import PostContainer from '../../Components/PostContainer';


// import { Container } from './styles';

const Feed: React.FC = () => {
  return (
<div>
<Header/>
    <CreatePost/>
</div>
  
  )
}

export default Feed;