import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-foud">
            <h1>Sorry</h1>
            <p>This page doesn't exist</p>
            <Link to="/">Back to homepage ...</Link>
        </div>
     );
}
 
export default NotFound;