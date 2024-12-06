import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/${id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    };
    fetchPostById();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading post. Try again later.</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  const formattedDate = post.date
    ? format(new Date(post.date), 'dd MMMM yyyy, @HH:mm')
    : '';

  return (
    <div className='container mx-auto mt-8 p-4'>
      <h1 className='text-3xl font-semibold'>{post.title}</h1>
      <img className='my-4 rounded' src={post.image} alt={post.title} />
      <p className='my-4'>{post.content}</p>
      <p>
        <Link className='text-blue-500 hover:underline' to='/'>
          @{post.author ? post.author.username : 'Unknown User'}
        </Link>{' '}
        &middot; {formattedDate}
      </p>
    </div>
  );
}

export default SinglePost;
