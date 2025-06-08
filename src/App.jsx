import React, { useEffect, useState, useRef } from "react";
import CharacterTable from "./components/CharacterTable";
import CharacterFilters from "./components/CharacterFilters";
import CharacterDetail from "./components/CharacterDetail";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]); //Characters that will be shown in the table
  const [currentPage, setCurrentPage] = useState(1); //To define the pages in the table
  const [pageSize, setPageSize] = useState(10); //To define how many characters will be shown in a page in the table
  const [selectedCharacter, setSelectedCharacter] = useState(null); //To show a detail card of selected character
  const [error, setError] = useState(null); //To catch errors

  const [nameFilter, setNameFilter] = useState(""); //Name filter
  const [speciesFilter, setSpeciesFilter] = useState(""); //Species filter
  const [genderFilter, setGenderFilter] = useState(""); //Gender filter
  const [statusFilter, setStatusFilter] = useState(""); //Status filter
  const [sortOrder, setSortOrder] = useState("az"); //Sort order

  useEffect(() => { //useEffect method used to fetch from api, it is going to fetch one time when page is mutated.
    let allCharacters = []; //an array to hold characters
    let page = 1; //api page variable to fetch every character in order from pages

    function fetchPage() {
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => {
          if (!res.ok) throw new Error("API Error!");
          return res.json();
        })
        .then(data => {
          allCharacters = [...allCharacters, ...data.results];
          if (allCharacters.length < 826 && data.info.next) {
            page++;
            fetchPage();
          } else {
            setCharacters(allCharacters.slice(0, 826));
          }
        })
        .catch(err => setError(err.message));
    }

    fetchPage();
  }, []);

  const filtered = characters //character filter processes
    .filter(c => c.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter(c => !speciesFilter || c.species === speciesFilter)
    .filter(c => !genderFilter || c.gender === genderFilter)
    .filter(c => !statusFilter || c.status === statusFilter)
    .sort((a, b) => {
      switch (sortOrder) { //sort order process
        case "az": return a.name.localeCompare(b.name);
        case "za": return b.name.localeCompare(a.name);
        case "id-asc": return a.id - b.id;
        case "id-desc": return b.id - a.id;
        default: return 0;
      }
    });


  //Designing Table

  const totalPages = Math.ceil(filtered.length / pageSize); //all pages that we need, according to filtered (or not) items and characters per page
  const start = (currentPage - 1) * pageSize; //first character of the current page
  const currentItems = filtered.slice(start, start + pageSize); //current characters of the current page

  //Getting all the components and adding them together 

  return ( 
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Rick and Morty Characters</h1>
      <h2>Display all the "Rick and Morty" characters shown in the show!</h2>

      <CharacterFilters
        nameFilter={nameFilter}
        speciesFilter={speciesFilter}
        genderFilter={genderFilter}
        statusFilter={statusFilter}
        sortOrder={sortOrder}
        pageSize={pageSize}
        setNameFilter={setNameFilter}
        setSpeciesFilter={setSpeciesFilter}
        setGenderFilter={setGenderFilter}
        setStatusFilter={setStatusFilter}
        setSortOrder={setSortOrder}
        setPageSize={setPageSize}
        setCurrentPage={setCurrentPage}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

       <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <CharacterTable characters={currentItems} onSelect={setSelectedCharacter} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <CharacterDetail character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
    </div>
  );
}

export default App;
