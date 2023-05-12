const Part = ({part}) => {
    if(!part) return
    return (
        <p>
            {part.name} {part.exercises}
      </p>
    )
}

export default Part