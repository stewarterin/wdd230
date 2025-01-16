let ccYear = new Date().getFullYear();
document.getElementById("year").innerHTML = `${ccYear}`

let modifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Last Modified: ${modifiedDate}`;