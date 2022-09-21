import './styles/App.css';
import React, {useState, useEffect} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './UI/myModal/MyModal';
import MyButton from './UI/button/MyButton';
import { usePosts } from './hooks/usePosts';



function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    if(localStorage.getItem('localPosts')) {
      const storedList = [...JSON.parse(localStorage.getItem('localPosts'))];
      // console.log(storedList);
      setPosts(storedList);
      

    }
  }, [])



  const createPost = (newPost) => {
    setPosts ([...posts, newPost]);
    setModal(false);

  
  }


  const removePost = (post) => {

    const deleted = posts.filter((p)=>p.id!==post.id);
;   setPosts(deleted);

    localStorage.setItem('localPosts', JSON.stringify(deleted));
 
  }
  


 
  return (
    <div className="container border rounded"
    style={{backgroundColor: 'white',
      minHeight: '65vh', paddingTop:'20px', maxWidth:'80%'}}>

      
      
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
      <i className="material-icons md-24">add</i>
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} posts={sortedAndSearchedPosts}/>
      </MyModal>
      
      <hr style={{margin: '15px 0', color: '#A8F498'}} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={`Список задач`} />
   
    </div>
  );
}

export default App;
