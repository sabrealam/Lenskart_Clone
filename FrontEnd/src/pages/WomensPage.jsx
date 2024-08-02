import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../CustomHookAndFunction/fetchData';
import { GET_DATA, GET_DATA_WOMENS } from '../redux/actionTypes';
import ItemBox from '../components/ItemBox';

export default function WomensPage() {
  const url = import.meta.env.VITE_BASE_URL
  const state = useSelector((state) => state.render);
  const dispatch = useDispatch();



  React.useEffect(() => {
    fetchData(`${url}/products/v2/womens`, dispatch, GET_DATA)
  }, [])
   console.log(state, "from womens page");
  return (
    <div>
      {state && state.map(item=>{
        return (

          <ItemBox key={item.id} {...item}/>
        )
      })}
    </div>
  )
}
