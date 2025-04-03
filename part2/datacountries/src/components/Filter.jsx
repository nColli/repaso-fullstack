const Filter = ( { search, handleFilter } ) => (
    <div>
        find countries
        <input value={search} onChange={handleFilter} />
    </div>
)

export default Filter