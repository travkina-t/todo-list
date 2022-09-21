import React, {useState} from "react";
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import '../styles/App.css';

const PostForm=({create, posts}) => {
    const [post, setPost] = useState({title:'', body:''});
   

   


  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost);
    localStorage.setItem('localPosts', JSON.stringify([...posts, newPost]));

    
    setPost({title:'', body:''});
    
  }
    return (
        <form>

        <MyInput className='form-control' value={post.title} 
        onChange={e=>setPost( {...post, title: e.target.value})}type='text' placeholder='Что нужно сделать' />
        
        <MyInput className='form-control' value={post.body} onChange={e=>setPost({...post, body: e.target.value})}type='text' placeholder='Запишите подробнее' />
        <MyButton onClick={addNewPost}><i className="material-icons md-48">add</i></MyButton>
        </form>
    )
};

export default PostForm;
