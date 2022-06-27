import { memo } from "react";

const DayCell = ({ ChangeData, currentObj }) => {
    return (
        <>
            <div onClick={ChangeData} className="dayCell" role="presentation" style={{ background: currentObj.isSet ? "rgb(187, 184, 184)" : " rgb(64, 251, 64)", border: currentObj.isSet ? "1px solid gray" : "1px solid green", }} >
                {currentObj.isSet ? "saved" : "Set"}
            </div>
        </>
    );
};
export default memo(DayCell);