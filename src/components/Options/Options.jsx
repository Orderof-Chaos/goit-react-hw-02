const Options = ({ feedbacks, updateFeedback, totalFeedback, resetFeedback }) => {
    
    { const optionList = Object.keys(feedbacks)
       const optionLayout = optionList.map(option => (
           <button key={option} onClick={() => updateFeedback(option.toString())}>{option}</button>))
        return (
            <div>
                {optionLayout}
                {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
            </div>
    )
    }
}
export default Options