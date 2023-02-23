const DayCell = ({ ChangeData, currentObj, isHourPassed }) => {
    return (
        <>
            <div onClick={ChangeData} className="dayCell" role="presentation"
                style={{
                    background: currentObj.isSet ? "rgb(187, 184, 184)" : " rgb(64, 251, 64)",
                    border: currentObj.isSet ? "1px solid gray" : "1px solid green",
                    opacity: isHourPassed.isPass ? '0.1' : '1',
                    pointerEvents: isHourPassed.isPass ? 'none' : undefined,
                    color:isHourPassed.isPass ? 'transparent':"black"
                }}
            >
                {currentObj.isSet ? "Saved" : "Set"}
                {isHourPassed.isPass ? " " : ""}
            </div>

        </>
    );
};
export default DayCell;