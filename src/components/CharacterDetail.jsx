import React from "react";

function CharacterDetail({ character, onClose }) {
  if (!character) return null;

  //When a character is clicked from the table, a detail card will open at the bottom of the table. That card has details about 
  // the character which is clicked.
 // style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px", position: "relative" }}
  return ( 
    <div className="details" style={{ position: "relative" }}>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "30px",
          background: "transparent",
          border: "none",
          fontSize: "30px",
          cursor: "pointer",
          padding: "0px"
        }}
      >
        ❌ 
      </button>

      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} />
      <p><strong>ID:</strong> {character.id}</p>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
      <p><strong>Number of Episodes:</strong> {character.episode.length}</p>
    </div>
  );
}

export default CharacterDetail;
