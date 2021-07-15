// This file will render the icons for the files. So absolutely it is for getFiles.js

let icons = document.querySelectorAll(".icon");

// This file variable is taken from search.js . So don't be confused.

files.forEach((file) => {
  axios.get("/check/" + file.innerText).then((response) => {
    file.childNodes[1].src = "/icons/" + response.data;
  });
});
