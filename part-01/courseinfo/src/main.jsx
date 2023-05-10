import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 
  

  const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    )
  }

  const Content = ({parts}) => {
    return (
      <>
        {parts && parts.map(el => <Part part={el.name} exercises={el.exercises} />)}
      </>
    )
  }
  
  const Part = ({part,exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }
  const Total = ({parts}) => {
    
    const totalExercises = parts.reduce((a,b) => a + b.exercises,0)
    return (
      <p>Number of exercises {totalExercises}</p>
    )
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))