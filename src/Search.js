import React from 'react';
import React, { useState } from 'react';


function Search(){
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        // Perform the search operation here
        // You can access the searchQuery state variable and perform the necessary actions based on the search query
        // This can involve making API requests or filtering data from a local data source
        // Implement your logic here...
      };
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        handleSearch(); // Call the handleSearch function when the form is submitted 
      };
    return(
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>


    );
}

export default Search;
