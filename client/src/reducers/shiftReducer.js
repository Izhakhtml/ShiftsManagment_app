const Recducer = (action, state) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_DATA":
            return [...state,payload]
        default:
            return state;
    }
}
export default Recducer;