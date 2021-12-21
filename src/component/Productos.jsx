import React, { useState, useEffect } from 'react'

export default function Productos() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProductos = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProductos();
    }, []);

    const Loading = () => {
        return (
            <>
                Cargando ...
            </>
        )
    }
    const ListarProductos = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2'>Todo</button>
                    <button className='btn btn-outline-dark me-2'>Producto de hombres</button>
                    <button className='btn btn-outline-dark me-2'>Producto de mujeres</button>
                    <button className='btn btn-outline-dark me-2'>Joyeria</button>
                    <button className='btn btn-outline-dark me-2'>Electronico</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" 
                                                alt={product.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">
                                            {product.title.substring(0,12)}
                                            </h5>
                                            <p class="card-text lead fw-bold">S/. {product.price}</p>
                                            <a href="#" class="btn btn-success">
                                                Comprar
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>


        );
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className="display-6 fw-bolder text-center">
                            Ultimos productos

                        </h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ListarProductos />}
                </div>
            </div>
        </div>
    )
}
