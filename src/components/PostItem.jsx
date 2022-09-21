import React from 'react';
import MyButton from '../UI/button/MyButton';
import '../styles/App.css';



const PostItem = (props) => {
      
    
    return (<div className='post'>
        <div className='post__content'>
        <div>{props.number}.<strong>
            {props.post.title}
            </strong></div>
            
            <div>{props.post.body}</div>
            

        </div>

        <div className='post__btns'>
            <MyButton onClick={() =>{
             props.remove(props.post);
            } }><i className="material-icons md-48">done</i></MyButton>
        </div>

    </div>)
}

export default PostItem;