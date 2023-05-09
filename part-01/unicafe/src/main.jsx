import { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics  = ({good,neutral,bad,counter}) => {

  if(!counter) {
    return <>
          <div>Statistics</div>
          <p>No feedback given</p>
    </>
  }
  else{
    return (
      <>
      <p>Statistics</p>
        <StatisticLine text="good" score={good} />
        <StatisticLine text="neutral" score={neutral} />
        <StatisticLine text="bad" score={bad} />
        <StatisticLine text="all" score={good + neutral + bad}/>     
        <StatisticLine text="average" score={(good + neutral + bad) / 3} />
        <StatisticLine text="positives" score={"%" + (good / counter) * 100} />
      </>  
    )
  }
}


const StatisticLine = ({text,score}) => <div>{text} {score}</div>

const Button = ({text,handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0);
  
  const handleGood = () => {
    setGood(good + 1)
    setCounter(counter + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)   
    setCounter(counter + 1) 
  } 

  const handleBad = () => {
    setCounter(counter + 1)
    setBad(bad + 1)
  } 


  return (
    <>
    <div>
        give feedback
    </div>
      
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
   
     <div>
      <Statistics good={good} neutral={neutral} bad={bad} counter={counter}/>
    </div>
    </>
   
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)