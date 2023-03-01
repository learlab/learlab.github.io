function openTab(tabName) {
    var i;
    var tabContent = document.getElementsByClassName("tabcontent");
    var tabLinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
    }
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("show");
    event.currentTarget.classList.add("active");
  }
  