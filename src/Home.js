import useFetch from './useFetch';
import BlogList from './BlogList'

const Home = () => {
    const { data, isPending } = useFetch("https://strapi-app-2021.herokuapp.com/blogs");
    return (
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {data && <BlogList blogs={data} title="All blogs" />}

        </div>
    );
}

export default Home;
