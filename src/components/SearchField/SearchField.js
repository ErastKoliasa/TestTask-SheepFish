function SearchField({searchQuery, handleSearch}) {
    return(
        <div style={{textAlign:"center", margin: 20, color:"#1976d2"}}>
            Search:
            <input style={{marginLeft:10}} type="text" placeholder="title or category" value={searchQuery}  onChange={handleSearch}/>
        </div>
    )
}

export default SearchField;