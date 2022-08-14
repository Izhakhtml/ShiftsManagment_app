import TurnDetails from './TurnDetails'
import BtnDeleteTurn from './BtnDeleteTurn'
const ExitTurn = ({ data, arrayState, setArrayState }) => {
    return (
        <div className="exist_turn"  >
            <TurnDetails dataTurn={data} />
            <BtnDeleteTurn dataTurn={data} arrayState={arrayState} setArrayState={setArrayState} />
        </div>
    )
}
export default ExitTurn;