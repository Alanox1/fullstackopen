import Content from "./Content"
import Header from "./Header"

const Course = ({courses}) => {
    
    return (
        <>
            <Header course={courses[0]}/>
            <Content course={courses[0]}/>
            <Header course={courses[1]} />
            <Content course={courses[1]} />
        </>
    )
}

export default Course