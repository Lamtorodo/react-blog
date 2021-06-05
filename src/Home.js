import {useState} from 'react'
const Home = () => {
    const title = "Welcome to our Website"
    const [name,setName] = useState('mario')
    const handleClick = (name , e) => {
        console.log('hello ' + name , e.target)
        setName('Lamtoro')
    }
    return (
        <div className="home">
            <h1>
                {title}
            </h1>
            <p>{name}</p>
            <button onClick={ (e) => handleClick('Lamtoro',e)}>Click Me</button>
        </div>
    );
}

export default Home;
