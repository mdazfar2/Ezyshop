document.addEventListener("DOMContentLoaded", function () {
    let currentRow = 1; 
    let rows = document.querySelectorAll(".row-section");
    let loadMore = document.querySelector("#loadMore");
  
     rows.forEach((row, index) => {
      if (index >= currentRow) {
        row.style.display = "none"; // Hide the row
      }
    });
  
    loadMore.addEventListener("click", () => {
      if (currentRow < rows.length) {
        rows[currentRow].style.display = "flex";
        currentRow++;
      }
  
      if (currentRow === rows.length) {
        loadMore.style.display = "none";
      }
    });
  });
  