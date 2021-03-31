appsEl = document.getElementById("apps");
appsTextEl = document.querySelector(".appsText");

apps = [
  ["Stopwatch", "/stopwatch", "a simple stopwatch", "stopwatch.png"],
  [
    "Calculator",
    "/calculator",
    "calculator with basic operators",
    "calculator.png",
  ],
];

function addAppToList(appArray, index) {
  // add each app to the apps list, with title, link and image
  var divElement = document.createElement("div");
  var appTitleLinkElement = document.createElement("a");
  var link = document.createTextNode(appArray[0]);
  appTitleLinkElement.appendChild(link);
  appTitleLinkElement.title = appArray[0];
  appTitleLinkElement.href = appArray[1];
  appTitleLinkElement.classList.add("appsListTitle");
  divElement.appendChild(appTitleLinkElement);
  var descriptionElement = document.createElement("p");
  descriptionElement.classList.add("appsListText");
  descriptionElement.textContent = appArray[2];
  if (appArray.length >= 4) {
    var imageElement = document.createElement("img");
    imageElement.src = `/images/${appArray[3]}`;
    imageElement.classList.add("appsListImage");
    // add link to image
    var imageLinkElement = document.createElement("a");
    imageLinkElement.href = appArray[1];
    imageLinkElement.appendChild(imageElement);
    divElement.appendChild(document.createElement("br"));
    divElement.appendChild(imageLinkElement);
  }
  divElement.appendChild(descriptionElement);
  divElement.classList.add("appsListBox");
  appsEl.appendChild(divElement);
}
apps.forEach(addAppToList);
