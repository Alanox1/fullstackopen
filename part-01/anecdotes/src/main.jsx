import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState([0,0,0,0,0,0])

  
  const nextAnecdote = () => {
   
    let random = Math.floor(Math.random() * (6 - 0) + 0)

    setSelected(random)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = () => {
    let copy = [...votes]
    const maximo = Math.max(...copy)
    return votes.indexOf(maximo)
  }
  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        {props.anecdotes[selected]}
      </div>
      <p>Has {votes[selected]} votes</p>
      <button onClick={vote}>Vote!</button>
      <button onClick={nextAnecdote}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes()]}</p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
)
