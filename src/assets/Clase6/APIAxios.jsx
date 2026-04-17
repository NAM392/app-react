import { useEffect, useState } from "react";
import APIClient from "./APIClient";
import Loading from "./Loading";

const APIAxios = () => {

    const [loading, SetLoading] = useState(true);
    const [posts, SetPosts] = useState([]);

    //lamadas asincronicas con fetch
    useEffect(() => {

        (async () => {
            const axiosResponse = await APIClient.get("/products");
            SetPosts(axiosResponse.data);
            SetLoading(false);
        })();
    } , [])

    return (
        <>
        
        {loading ?  <Loading/> : <div className="container my-5 bg-white p-4 rounded">
                <div className="row">
                    <div className="col">
                        <h1>API AXIOS</h1>
                        <ul className="list-group">
                            {posts.map(item => (
                                <li key={item.id} className="list-group-item">{item.title} - {item.price}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>}
        
        
        
        
        
        </>
    )
     
}

export default APIAxios;
