import useAPI from "./useAPI";

const PostsList = () => {
   //api de ejemplo con 10 usuarios
    const data = useAPI("https://jsonplaceholder.typicode.com/users") 
    
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Custom Hooks</h1>
                    <ul>
                        {
                            data.map(item => (
                                <li key={item.id} >{item.id} - {item.name} - {item.username}</li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>
        
        
        </>


    );
}

export default PostsList;