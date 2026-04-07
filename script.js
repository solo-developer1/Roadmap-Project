function openTab(evt, tabId) {
  let contents = document.getElementsByClassName("writeln-btn");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  let buttons = document.getElementsByClassName("Tab-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
    buttons[i].className = buttons[i].className.replace(".active", "");
  }

  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}