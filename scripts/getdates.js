// getdates.js

// Preenche o ano atual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Preenche a data de última modificação
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
