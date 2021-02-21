document.onreadystatechange = () => {
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector("#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector("#loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible";
  } 
};

window.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault();
  }
});
window.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});