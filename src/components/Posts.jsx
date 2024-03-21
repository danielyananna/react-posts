import React, { useEffect, useState } from 'react';
import './../assets/post/style.css';
import PostItem from './PostItem';
import Loading from './general/Loading';
import Modal from './general/Modal';

const Posts = ({query}) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

  }, [item]);


  return (
    <>
      <div className='post'>
        <div className='center'>
          <div className='post__block df'>
            {loading ? (
                <Loading />
              ) : posts.length > 0  &&
                posts.filter(item=>item.title.toLowerCase().includes(query.toLowerCase()) || item.text.toLowerCase().includes(query.toLowerCase()) ).map((post, index) => <PostItem post={post} key={post.id || index} setItem={setItem} setOpenModal={setOpenModal} />)
            }
          </div>
        </div>
      </div>
      { openModal ? <Modal setOpenModal={setOpenModal } item={item} /> : null  }
    </>
  );
};

export default Posts;
