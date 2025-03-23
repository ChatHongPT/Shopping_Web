import { useEffect } from 'react';
import { useProductContext } from '../contexts/ProductContext';

function ProductPage(){
    const context = useProductContext();

    useEffect(()=>{
        console.log(context);
    }, [context]);
    return <h1>상품 상세 페이지</h1>
}

export default ProductPage;