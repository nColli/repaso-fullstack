const Persons = (props) => {
    const newSearchLowString = props.newSearch.toLowerCase()

    const personsToShow = props.persons.filter( (x) => x.name.toLowerCase().includes(newSearchLowString) )

    return (
        <div>
            {personsToShow.map( (person) => <p key={person.id}>{person.name} {person.number}</p> )}
        </div>
    )
}

export default Persons