import useFetch from './useFetch';
import BlogList from './BlogList'

const Home = () => {
    const { data, isPending } = useFetch("http://localhost:1337/blogs");
    return (
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {data && <BlogList blogs={data} title="All blogs" />}

        </div>
    );
}

export default Home;
