import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {

  //Previous and Next buttons. They have onClick event listener to change the page when clicked.
  
  return ( 
    <div style={{ marginTop: "30px", marginBottom: "20px" }}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>← Previous</button> 
      <span style={{ margin: "0 10px" }}>Page {currentPage} / {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0}>Next →</button>
    </div>
  );
}

export default Pagination;
