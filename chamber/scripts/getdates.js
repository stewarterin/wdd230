let modifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Last Modified: ${modifiedDate}`;

document.getElementById("timeload").value = Date.now();