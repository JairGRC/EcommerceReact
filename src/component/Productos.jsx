import React,{useState,useEffect} from 'react'

export default function Productos() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted=true;

    useEffect(() => {
        const getProductos=async()=>{
            setLoading(true);
            const response= await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return ()=>{
                componentMounted=false;
            }
        }
        getProductos();
    }, []);

    const Loading=()=>{
        return(
            <>
                Cargando ...
            </>
        )
    }
    const ListarProductos = ()=>{
        return(
        <div className='buttons'>
            <button className='btn btn-outline-dark'>Todo</button>
            <button className='btn btn-outline-dark'>Producto de hombres</button>
        </div>
        )
    }
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className="display-6 fw-bolder text-center">
                            Ultimos productos
                            
                        </h1>
                        <hr/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading/> : <ListarProductos/>}
                </div>
            </div>
        </div>
    )
}
