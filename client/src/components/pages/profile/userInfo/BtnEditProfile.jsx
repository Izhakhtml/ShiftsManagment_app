 import { FaRegEdit } from 'react-icons/fa'
import { useState } from 'react';
import EditPopUp from './EditPopUp';
const BtnEditProfile = ({ userData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [alertPopUp, setAlertPopUp] = useState(true);
    const ChangeBooleanState = () => {
        setIsOpen(true);
        setAlertPopUp(!alertPopUp);
    }
    const ClosePopUp = () => {
        setIsOpen(false);
    }
    return (
        <>
            <FaRegEdit onClick={ChangeBooleanState} className='edit_icon' />
            {alertPopUp ? <span className='text_editIcon'>ערוך פרופיל </span> : ""}

            {
                isOpen ?
                    <EditPopUp ClosePopUp={ClosePopUp} userData={userData}/>
                    : ""
            }
        </>
    )
}
export default BtnEditProfile;