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
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
