import Part from "./Part"
import SumaTotal from "./SumaTotal"
const Content = ({course}) => {
    
    const sumaTotal = course.parts.reduce((acc,el) => acc + el.exercises,0)
    
    return (
        <>
            <div>
                {course.parts.map(part => <Part key={part.id} part={part} />)}
            </div>
            <SumaTotal sumaTotal={sumaTotal} />  
      </>
    )
}

export default Content