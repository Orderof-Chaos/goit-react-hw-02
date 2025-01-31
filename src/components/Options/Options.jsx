import { css } from "./Options.module.css";

const Options = ({ feedbacks, updateFeedback, totalFeedback, resetFeedback }) => {
    
    { const optionList = Object.keys(feedbacks)
        return (
            <>{optionList.map(option => (
                <button key={crypto.randomUUID()} onClick={() => updateFeedback(option.toString())}>{option}</button>))}
            {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}</>
            
        )
    }
}
export default Options