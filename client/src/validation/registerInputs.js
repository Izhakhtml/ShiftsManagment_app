export const registerValidation4 = (parm,num) => {
    if (parm.value.length > num) {
        parm.style = 'border:2px solid black'
        return true
    } else {
        parm.style = 'border:2px solid red'

    }
}