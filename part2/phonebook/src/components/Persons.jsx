const Persons = ( {newSearch, persons, handleDelete} ) => {
    const newSearchLowString = newSearch.toLowerCase()

    const personsToShow = persons.filter( (x) => x.name.toLowerCase().includes(newSearchLowString) )

    return (
        <div>
            {personsToShow.map( (x) => <p key={x.id}>{x.name} {x.number} <button onClick={() => handleDelete(x)}>delete</button></p> )}
        </div>
    )
}

export default Persons