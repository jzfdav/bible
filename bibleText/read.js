const bookPrelink = "<a>";
var bookJSON = {};

function createBookJson(book) {
  var requested_book = new URLSearchParams(location.search).get("book");
  var text = "";
  var chapterLinks = "";
  if (book.name == requested_book) {
    book.chapters.forEach((chapter, index) => {
      text +=
        "<h2 id = 'C" +
        (index + 1) +
        "' >Chapter " +
        (index + 1) +
        "</h2>" +
        chapter.join("<hr>") +
        "<br><br><hr><hr><br>";
      chapterLinks +=
        "<a href='#C" + (index + 1) + "'>Chapter " + (index + 1) + "<a>";
    });
    document.getElementById("book-name").innerHTML = requested_book;
    document.getElementById("book-text").innerHTML = text;
    document.getElementById("chapterLinks").innerHTML = chapterLinks;
  }
}

httpGetAsync("bibleText/en_bbe.json");
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      var data = xmlHttp.responseText;
    if (data) {
      JSON.parse(data).forEach((book) => createBookJson(book)); // use loop and break when book found
    }
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  return xmlHttp.send(null);
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "1vw";
  document.getElementById("main").style.marginLeft = "1vw";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
