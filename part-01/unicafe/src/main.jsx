import { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics  = ({good,neutral,bad}) => {

  if(!good && !neutral && !bad) return <p>No feedback given</p>
  return (
    <>
    <p>Statistics</p>
   
         
      <StatisticLine text="good" score={good} />
      <StatisticLine text="neutral" score={neutral} />
      <StatisticLine text="bad" score={bad} />
      <StatisticLine text="all" score={good + neutral + bad}/>     
      {/* <StatisticLine text="average" score={(2) / 3} /> */}
    
    </>
    

  )
}
const StatisticLine = ({text,score}) => <div>{text} {score}</div>



const Button = ({text,handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)
 
  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)
  return (
    <>
    <div>
        give feedback
    </div>
      
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
   
     <div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
    </>
   
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)