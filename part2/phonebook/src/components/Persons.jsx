const Persons = ( {newSearch, persons} ) => {
    const newSearchLowString = newSearch.toLowerCase()

    const personsToShow = persons.filter( (x) => x.name.toLowerCase().includes(newSearchLowString) )

    return (
        <div>
            {personsToShow.map( (x) => <p key={x.id}>{x.name} {x.number}</p> )}
        </div>
    )
}

export default Persons