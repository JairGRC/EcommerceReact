import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducto = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProducto(await response.json());
            setLoading(false);
        }
        getProducto();
    }, [])

    const Loading = () => {
        return (
            <>


            </>
        )
    }
    const ListaProducto = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={producto.image} alt={producto.title}
                        height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {producto.category}
                    </h4>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading /> : <ListaProducto />}
                </div>
            </div>
        </div>
    );
}
export default Producto;
