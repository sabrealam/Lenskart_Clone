import { GET_DATA } from "../redux/actionTypes";

 

export function  highToLow (data) {
    // console.log(data[0].prices[0].price)
    return data.sort((a, b) => b.prices[0].price - a.prices[0].price);
}

export function lowToHigh(data) {
    return data.sort((a, b) => a.prices[0].price - b.prices[0].price);
}
 

export function purchaseCount(data) {
    return data.sort((a, b) => a.purchaseCount -  b.purchaseCount );
}
export function newlyAdded(data) {
    return data.sort((a, b) => b.id - a.id);
}

export let handleSort = (val, props, dispatch) => {
    // console.log(val)
    if (val === "High TO Low") {
      let res = highToLow(props);
      dispatch({type: GET_DATA, payload: res});
    }
    else if (val === "Low TO High") {
      let res = lowToHigh(props);
      dispatch({type: GET_DATA, payload: res});
    }else if(val === "Most Viewed"){
      let res = purchaseCount(props);
      dispatch({type: GET_DATA, payload: res});
    }
    else if(val === "New"){
      let res = newlyAdded(props);
      dispatch({type: GET_DATA, payload: res});
    }
}