import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const dispatch=useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }


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
                <div className='col-md-6'>
                    <Skeleton height={400}/>
                </div>
                <div className='col-md-6' style={{ lineHeight:2 }}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{ marginLeft:6 }}/>
                </div>
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
                    <h1 className='display-5'>{producto.title}</h1>
                    <p className='lead fw-bolder'>
                        Puntuación {producto.rating && producto.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <p className='lead'>{producto.description}</p>
                    <button className='btn btn-success px-4 py-2'
                    onClick={()=>addProduct(producto)}>Agregar al carro</button>
                    <NavLink className='btn btn-primary ms-2 px3 py-2' to="/cart">Ir al carro</NavLink>

                </div>
            </>
        )
    }
    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading /> : <ListaProducto />}
                </div>
            </div>
        </div>
    );
}
export default Producto;
