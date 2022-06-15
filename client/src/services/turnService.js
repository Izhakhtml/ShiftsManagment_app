const BASIC_API = "http://localhost:8080/shift"
export const Get = async()=>{
    try {
        return await fetch(BASIC_API)
        .then(response => response.json())
    } catch (error) {
        return error
    }
}
export const Create = async (turn) => {
    try {

        return await fetch(`${BASIC_API}`, {
            method: "POST",
            body: JSON.stringify(turn),
            headers: {
                "content-type": "application/json",
            }
        })
            .then(response => response.json())
            .catch(reject => console.error(reject))
    } catch (error) {
        return error
    }

}
 