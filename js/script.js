const openTab = (evt, tabName) => {
  // Declare all letiables
  let tabcontent = document.getElementsByClassName("tabContent");
  let tabItem = document.getElementsByClassName("tabItem");

  // Get all elements with class="tabcontent" and hide them
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tabItem" and remove the class "active"
  for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].className = tabItem[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// theme toggle
let isDark = false;

function toggleTheme() {
  let element = document.body;
  var r = document.querySelector(':root');

  element.classList.toggle("dark-mode");
  isDark = !isDark;

  if (isDark) {
    r.style.setProperty('--mainBg', 'black');
    updateImageBackgroundColor('151515');
  } else {
    r.style.setProperty('--mainBg', 'whitesmoke');
    updateImageBackgroundColor('fcfcfc');
  }
}

function updateImageBackgroundColor(color) {
  let img = document.querySelector('img[src*="streak-stats.demolab.com"]');

  if (img) {
    let oldSrc = img.src;
    let newSrc = oldSrc.replace(/background=[^&]*/, `background=${color}`);
    img.src = newSrc;
  }
}
// end theme toggle
