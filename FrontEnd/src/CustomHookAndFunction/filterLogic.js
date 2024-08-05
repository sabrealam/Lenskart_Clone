import { GET_DATA } from "../redux/actionTypes";

export function filterColor(data, colors) {
  return data.filter((item) => colors.includes(item.color)) || [];
}
export function filterBrand(data, brands) {
  return data.filter((item) => brands.includes(item.brand_name)) || [];
}
export function filterWidth(data, widths) {
  return data.filter((item) => widths.includes(item.width)) || [];
}

let  filteredBrandData, filteredColorData, filteredWidthData;
export function handleFilter(state,data,  dispatch) {
  let prevState = JSON.parse(localStorage.getItem("filter"));
 
  if(isChange(prevState.color, state.color)) {
     filteredColorData = filterColor(data , state.color);
  } 

  if(isChange(prevState.brand, state.brand)) {
     filteredBrandData = filterBrand(data , state.brand);
  }

//   if(isChange(prevState.price, state.price)) {
//     let filteredPriceData = filterPrice(data, state.price);
//   }

  if(isChange(prevState.frameWidths, state.frameWidths)) {
     filteredWidthData = filterWidth(data , state.frameWidths);
  }

  let filteredData = [...filteredColorData || [] , ...filteredBrandData || [] , ...filteredWidthData || []]  || data.slice();

console.log(filteredData)
  dispatch({type: GET_DATA, payload: filteredData})

}

function isChange(arr1, arr2) {
    // console.log(arr1.length, arr2)
  if (arr1.length !== arr2.length) {
    return true;
  }
  return false
}
