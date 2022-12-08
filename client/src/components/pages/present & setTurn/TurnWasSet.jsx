const TurnWasSet = ({ details }) => {

    return (
        <div className="turn_details" >
            <h1>נקבע לך תור</h1>
            <p>
                נקבע לך תור לתאריך {details.date} <br />
                משעה {details.startHour} עד {details.endHour} לא לאחר
                במידה ולא מסתדר התור נא לעדכן תמערכת
                יש מישהו שזה יכול לעזור לו <br />
            </p>
        </div>
    )
}
export default TurnWasSet;