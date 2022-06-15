import { Get } from "../services/shiftService"
const shiftAction = () => {
    let arr = []
    Get()
        .then(data => arr.push(data))
        .catch(err => console.error(err))
    return {
        type:"GET_DATA",
        payload:arr
}
}
export default shiftAction