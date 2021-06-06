import { useParams } from "react-router";
import useFetch from "./useFetch";
import axios from 'axios';
import {useHistory} from 'react-router-dom' 
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending } = useFetch("http://localhost:1337/blogs/" + id);
    const history = useHistory();
    const handleClick = () => {
        axios
            .delete('http://localhost:1337/blogs/' + blog.id)
            .then(response => {
                history.push('/');
            });
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;