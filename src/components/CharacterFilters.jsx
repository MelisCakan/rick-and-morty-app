import React from "react";

function CharacterFilters({
  nameFilter,
  speciesFilter,
  genderFilter,
  statusFilter,
  sortOrder,
  pageSize,
  setNameFilter,
  setSpeciesFilter,
  setGenderFilter,
  setStatusFilter,
  setSortOrder,
  setPageSize,
  setCurrentPage
}) {

  const clearFilters = () => {
      setNameFilter("");
      setSpeciesFilter("");
      setGenderFilter("");
      setStatusFilter("");
      setCurrentPage(1); 
  };


  //The filter bar has: name search, species filter, status filter, gender filter, sort options and how many characters will
  //be shown per page. 
  return (
    <div className= "filterBar">
      <input
        type="text"
        placeholder="Search for a name..."
        value={nameFilter}
        onChange={e => setNameFilter(e.target.value)}
      />
      <select value={speciesFilter} className="filterSelect" onChange={e => setSpeciesFilter(e.target.value)}>
        <option value="">Species (All)</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="Humanoid">Humanoid</option>
        <option value="Mythological Creature">Mythological Creature</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Animal">Animal</option>
      </select>
      <select value={genderFilter} className="filterSelect" onChange={e => setGenderFilter(e.target.value)}>
        <option value="">Gender (All)</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={statusFilter} className="filterSelect" onChange={e => setStatusFilter(e.target.value)}>
        <option value="">Status (All)</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={sortOrder} className="filterSelect" onChange={e => setSortOrder(e.target.value)}>
        <option value="az">According to Name (A-Z)</option>
        <option value="za">According to Name (Z-A)</option>
        <option value="id-asc">According to ID (Ascending)</option>
        <option value="id-desc">According to ID (Descending)</option>
      </select>
      <select value={pageSize} className="filterSelect" onChange={e => {
        setPageSize(Number(e.target.value));
        setCurrentPage(1);
      }}>
        <option value={5}>Per Page: 5</option>
        <option value={10}>Per Page: 10</option>
        <option value={20}>Per Page: 20</option>
      </select>

      <button id="clearButton" onClick={clearFilters}>Clear Filters</button>
    </div>
  );
}

export default CharacterFilters;
