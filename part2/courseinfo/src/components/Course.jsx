const Header = (props) => {
    //console.log(props);
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
        {props.part} {props.exercises}
        </p>
    )
}

const Content = ({parts}) => {
    return (
        <div>
        {parts.map( (part) => <Part key={part.id} part = {part.name} exercises = {part.exercises} />)}
        </div>
    )
}

const Total = ({parts}) => {
    /* version con console log
    const sum = parts.reduce( 
        (sum, part) => {
        console.log('sum part', part);
        return sum += part.exercises
        },
        0  
    )*/

    const sum = parts.reduce(
        (sum, part) => sum += part.exercises,
        0
    )

    return (
        <p>
        <strong> total of {sum} exercises</strong>
        </p>
    )
}

const Course = ({course}) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

export default Course