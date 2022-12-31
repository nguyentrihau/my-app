import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';
import { useDispatch } from 'react-redux';
import { http } from '../../util/config';
import { DispatchType } from '../configStore';
const dispatch = useDispatch;
export interface ProducModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}
export interface ProductState {
    arrProduct: ProducModel[] // ????
}
const initialState: ProductState = {
    arrProduct: [],
}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductAction: (state:ProductState, action:PayloadAction<ProducModel[]>) => {
            state.arrProduct = action.payload;
        }
    }
});

export const { getProductAction } = productReducer.actions

export default productReducer.reducer

/**----------------action async------------------ */

export const getProductApi = () => {
    return async (dispatch:DispatchType) =>{
        const result = await http.get('/product');
        const action: PayloadAction<ProducModel[]> = getProductAction(result.data.content);
        dispatch(action);
    }
}