import { useEffect, useState } from "react";
import Loading from "./Loading";

const APIFetch = () => {

    const [loading, SetLoading] = useState(true);
    const [posts, SetPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [id, SetId] = useState("");

    //lamadas asincronicas con XMLHttpRequest
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", "https://fakestoreapi.com/products");
        xhr.send();
        xhr.addEventListener("load", () => {
            SetPosts(xhr.response);
            SetLoading(false);
        })
    }, [])

        //lamadas asincronicas con fetch
    useEffect(() => {

        (async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            SetPosts(data);
            SetLoading(false);
        })();
    } , [])


    const addProduct = () => {
        /* 
        La API que probamos no admite JSON, sino que debe ser objeto
        const data = new FormData();
        data.append("title", title);
        data.append("price", price);
        data.append("description", description);
        data.append("category", category);
        data.append("image", image); */

        const product = {title, price, description, category, image};

        (async () => {
            const response = await fetch("https://fakestoreapi.com/products", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            const dataResponse = await response.json();
            SetId(dataResponse.id);
            clear();     

        })();
    }

    const clear =()=>{
        setTitle("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
    }


    return (
       <>
         <div>
            {loading ?  <Loading/> : <div className="container my-5 bg-white p-4 rounded">
                <div className="row">
                    <div className="col">
                        <h1>API Fetch</h1>
                        <ul className="list-group">
                            {posts.map(item => (
                                <li key={item.id} className="list-group-item">{item.title} - {item.price}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>}

            <div className="row my-5">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Title</label>
                            <input type="text" className="form-control" value={title} onInput={(e) => {setTitle(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Price</label>
                            <input type="text" className="form-control" value={price} onInput={(e) => {setPrice(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Description</label>
                            <input type="text" className="form-control" value={description} onInput={(e) => {setDescription(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Category</label>
                            <input type="text" className="form-control" value={category} onInput={(e) => {setCategory(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Image</label>
                            <input type="text" className="form-control" value={image} onInput={(e) => {setImage(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={addProduct}>Enviar</button>
                        </form>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {id && <h3>Producto agregado con ID: {id}</h3>}
                </div>
            </div>
        </div>

       </>


    );
}

export default APIFetch;