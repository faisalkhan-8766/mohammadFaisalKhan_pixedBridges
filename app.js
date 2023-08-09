// This function adds a new article to the page when the user clicks the button.
function addArticle() {
    var article = document.createElement("article");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
  
    h2.textContent = "This is a new article";
    p.textContent = "This is the content of the new article";
  
    article.appendChild(h2);
    article.appendChild(p);
  
    document.querySelector("main").appendChild(article);
  }
  
  // This function is called when the page loads.
  window.onload = function() {
    var button = document.querySelector("#add-article-button");
    button.addEventListener("click", addArticle);
  };
  