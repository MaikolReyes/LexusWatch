import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";


function ItemListContainer() {
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA352679')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducto(data.results);
            });
    }, []);

    return (
        <>
            <h1>SmartWatchs</h1>
            {producto.slice(1, 10).map((producto) => (

                <div class="card">
                    <Link to={'/item/:itemId'}>
                        <img src={producto.thumbnail} class="card-img-top" />
                    </Link>

                    <div class="card-body">
                        <h5 class="card-title">{producto.title}</h5>
                        <p class="card-text">{'$' + producto.price}</p>

                        <Link to={'/item/:itemId'}>
                            <button>Detalle</button>
                        </Link>
                    </div>
                </div>

            ))}
        </>
    );
}

export default ItemListContainer;