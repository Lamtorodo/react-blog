const Home = () => {
    const title = "Welcome to our Website"
    const handleClick = (name , e) => {
        console.log('hello ' + name , e.target)
    }
    return (
        <div className="home">
            <h1>
                {title}
            </h1>
            <button onClick={ (e) => handleClick('Lamtoro',e)}>Click Me</button>
        </div>
    );
}

export default Home;
