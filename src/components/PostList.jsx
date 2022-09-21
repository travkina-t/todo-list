import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/App.css';



const PostList = ({posts, title, remove}) => {
  
  if(!posts.length) {
    return <h1 className='title' style={{textAlign: 'center', color: '#9C3076', margin: '50px 0px', fontSize: '25px'}}>Задачи не найдены</h1>
  }
    return (
        <div>
            <h1 className='title' style={{textAlign: 'center', color:'#9C3076'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) =>
            <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post">
        <PostItem remove={remove} number={index + 1} post={post}/>
        </CSSTransition>
      )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;