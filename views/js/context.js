// This will render a context menu which has refresh and remove functionalities

let contextMenuFiles = document.querySelector("#files");
let fileButton = document.querySelector(".file");
let folderButton = document.querySelector(".folder");
let removeButton = document.querySelector(".remove");
let refreshButton = document.querySelector(".refresh");
let renameButton = document.querySelector(".rename");
let copyButton = document.querySelector(".copy");
let pasteButton = document.querySelector(".paste");
let fileValue = document.querySelectorAll("ul li a");

fileValue.forEach((file) => {
  file.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    contextMenuFiles.style.display="block";
    contextMenuFiles.style.top = e.pageY + "px";
    contextMenuFiles.style.left = e.pageX + "px";

    let target = e.target
    let targetLi = e.path[1]
    let path = e.target.getAttribute('href')
    let parentPath = e.path[1].dataset.parent
    
    // almost every button uses their APIs to handle their works ! And we are using axios for ajax . 
    
    fileButton.addEventListener('click', () => {
      let newFileName = prompt('What would you like to name this file ?')
      axios.post("/file/" + parentPath + '?newName='+newFileName).then(()=>location.reload());
    })

    folderButton.addEventListener('click', () => {
      let newFolderName = prompt('What would you like to name this folder')
      axios.post("/folder/" + parentPath + '?newName='+newFolderName).then(()=>location.reload());
    })

    removeButton.addEventListener("click", () => {
      let permission = confirm(`Would you like to remove this ${path}`)
      if (permission) {
        axios.post("/remove" + path).then(()=>location.reload());
      }
    });

    refreshButton.addEventListener("click", () => {
      location.reload();
    });

    renameButton.addEventListener("click", () => {
      let newFileName = prompt(`What would you like to name ${path.replace(/\/$/,'')} ?`)
      axios.post("/rename" + path + '?newName='+newFileName).then(()=>location.reload());
    });

    copyButton.addEventListener("click", () => {
      axios.post("/copy" + path).then(()=>location.reload());
    });

    pasteButton.addEventListener("click", () => {
      let pastedFileName = prompt('What would you like to name this file ?')
      axios.post(`/paste/${parentPath}${pastedFileName}`).then(()=>location.reload());
    });
  });
  
  window.addEventListener("click", (e) => {
    contextMenuFiles.style.display = "none";
    contextMenuFiles.style.top = e.pageY + "px";
    contextMenuFiles.style.left = e.pageX + "px";
  });  
});








