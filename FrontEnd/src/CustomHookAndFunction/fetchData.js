import axios from "axios";

export default async function fetchData(url , dispatch, type) {
    try {
        let {data} = await axios.get(url)
        dispatch({type : type , payload : data})
        return data
    } catch (error) {
        console.log(error)
    }
}