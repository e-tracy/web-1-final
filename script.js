  // Check date:
console.log(Date);

// Get Date object:
let today = new Date;

// Get year from the Date object:
let year = today.getFullYear();

// Get the year:
const yearToShow = document.querySelector(".year-auto-update");

// Set the year:
yearToShow.textContent = year;
