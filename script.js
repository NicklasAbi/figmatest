
// Funktion zum Aktualisieren des Fortschrittsbalkens
function updateProgressBar(progress) {
    document.getElementById("progress").style.width = progress + "%";
}

// Beispielaufruf der Funktion (50% Fortschritt)
updateProgressBar(0);
setTimeout(function() {
    updateProgressBar(5);
}, 1000);
setTimeout(function() {
    updateProgressBar(10);
}, 1300); 
setTimeout(function() {
    updateProgressBar(20);
}, 3000); 
setTimeout(function() {
    updateProgressBar(28);
}, 4200); 
setTimeout(function() {
    updateProgressBar(36);
}, 4700); 
setTimeout(function() {
    updateProgressBar(40);
}, 5800); 
setTimeout(function() {
    updateProgressBar(52);
}, 6600); 
setTimeout(function() {
    updateProgressBar(58);
}, 8600); 
setTimeout(function() {
    updateProgressBar(66);
}, 9000); 
setTimeout(function() {
    updateProgressBar(76);
}, 11100); 
setTimeout(function() {
    updateProgressBar(82);
}, 12150); 
setTimeout(function() {
    updateProgressBar(92);
}, 12850); 
setTimeout(function() {
    updateProgressBar(99);
}, 13250); 
setTimeout(function() {
    updateProgressBar(130);
}, 16500); 
