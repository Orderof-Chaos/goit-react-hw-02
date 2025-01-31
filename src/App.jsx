import { useState, useEffect } from 'react'
import './App.module.css'
import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import Notification from './components/Notification/Notification'

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  useEffect(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem('saved-feedbacks'));
    if (savedFeedbacks) {
      setFeedbacks(savedFeedbacks);
    }
  }, []);
  useEffect(() => {window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);
  
  const updateFeedback = feedbackType => {
    setFeedbacks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1
    }))
    
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  
  const resetFeedback = () =>{setFeedbacks({
	good: 0,
	neutral: 0,
	bad: 0
  })}
  return (
    <>
      <Description />
      <Options feedbacks={feedbacks}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback} />
      {totalFeedback !== 0 ? <Feedback feedbacks={feedbacks}
        totalFeedback={totalFeedback} /> : <Notification />}
    </>
  )
}

export default App
