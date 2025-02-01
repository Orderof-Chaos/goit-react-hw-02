const Feedback = ({ feedbacks, totalFeedback }) => {
    
    return(<ul>
        <li >Good {feedbacks.good}</li>
        <li >Neutral {feedbacks.neutral}</li>
        <li >Bad {feedbacks.bad}</li>
        <li >Total {totalFeedback}</li>
        <li >Positive {Math.round((feedbacks.good / totalFeedback) * 100)}%</li>

    </ul>)
}
export default Feedback