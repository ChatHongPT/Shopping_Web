import { createContext } from 'react';

interface ProductType {
    id: number;
    name: string;
    explanation: string;
    price: number;
}

const ProductContext = createContext<ProductType[]>([]);