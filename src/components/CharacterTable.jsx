import React from "react";

function CharacterTable({ characters, onSelect }) {
  if (characters.length === 0) {
    return <p style={{ color: "gray" }}>Matching data couldn't be found.</p>;
  }

  //If no characters is at table according to the filters, it will announced to user as "Matching data couldn't be found.".
  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Icon</th>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {characters.map(char => (
          <tr key={char.id} onClick={() => onSelect(char)} style={{ cursor: "pointer" }}>
            <td>{char.id}</td>
            <td><img src={char.image} alt={char.name} style={{height: "60px"}}/></td>
            <td>{char.name}</td>
            <td>{char.status}</td>
            <td>{char.species}</td>
            <td>{char.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CharacterTable;
