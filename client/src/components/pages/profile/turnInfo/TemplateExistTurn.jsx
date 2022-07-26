import TurnDetails from './TurnDetails'
import BtnDeleteTurn from './BtnDeleteTurn'
const TemplateExistTurn = ({ i, data, arrayState, setArrayState }) => {
    return (
        <div className="exist_turn" key={i} >
            <TurnDetails dataTurn={data} />
            <BtnDeleteTurn dataTurn={data} arrayState={arrayState} setArrayState={setArrayState} />
        </div>
    )
}
export default TemplateExistTurn;