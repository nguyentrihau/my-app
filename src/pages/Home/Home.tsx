import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/configStore'
import { getProductApi, ProducModel } from '../../redux/ProductReducer/productReducer'

type Props = {}

const Home = (props: Props) => {
  const {arrProduct} = useSelector((state:RootState)=> state.producReducer);
  const dispatch: DispatchType = useDispatch();
  console.log(arrProduct);
  useEffect(()=>{
    const actionAsync = getProductApi();
    dispatch(actionAsync);
  },[])
  return (
    <div className='container'>
      <div className="row">
        {arrProduct.map((item:ProducModel,index:number)=>{
          return <div className="col-4" key={index}>

          </div>
        })}
      </div>
    </div>
  )
}

export default Home