import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { selectUserInput, setBlogData } from '../Feature/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../Style/Blog.css';

function Blogs() {
    const searchInput = useSelector(selectUserInput);
    const blog__url = `https://gnews.io/api/v4/search?q=${searchInput}&token=e67499bcf4fef1b384fb65e048eef05a`;

    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState ();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get(blog__url)
        .then((res) => {
            dispatch(setBlogData(res.data))
            setBlogs(res.data)
            setLoading(false)
        })
        .catch((err)=> {
            console.log(err);
        } )
    }, [searchInput] );


    return (
        <div className='blog__page' >
            <h1 className='blog__page__header'>Blogs</h1>
            {loading ? <h1 className='loading'>Loading...</h1> : ''}
            <div className='blogs'>
                {blogs?.articles?.map((blog) => (
                    <a className='blog' target='_blank' href={blog.url}>
                        <img src={blog.image} />
                        <div>
                            <h3 className='sourceName'>
                                <span>{blog.source.name}</span>
                                <span>{blog.publishedAt}</span>
                            </h3>
                            <h1>{blog.title}</h1>
                            <p>{blog.description}</p>
                        </div>
                    </a>
                ))}
                {blogs?.totalArticles === 0 && (
          <h1 className="no__blogs">
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
            </div>
        </div>
    )
}

export default Blogs;
