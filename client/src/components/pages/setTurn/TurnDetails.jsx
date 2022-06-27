const TurnDetails = ({ details }) => {

    return (
        <div className="turn_details" >
            <span>
                 נקבע לך תור לתאריך {details.date} 
                  משעה {details.startHour} עד {details.endHour} לא לאחר
                 במידה ולא מסתדר התור נא לעדכן תמערכת יש מישהו שזה יכול לעזור לו   
            </span>
        </div>
    )
}
export default TurnDetails;