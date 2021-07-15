// It searches through the files with the input type text which has a class called search. It is available for both getDirectory.js and getDiscs.js 

let search = document.querySelector(".search");
let files = document.querySelectorAll("ul li");

search.addEventListener("input", () => {
  files.forEach((file) => {
    if (file.innerText.toLowerCase().indexOf(search.value.toLowerCase()) > -1) {
      file.style.display = "";
    } else {
      file.style.display = "none";
    }
  });
});