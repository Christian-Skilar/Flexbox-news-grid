const rowRange = document.querySelector("#row-range");
const newsItems = document.querySelectorAll(".news__item");
const newsContainer = document.querySelectorAll(".news");

rowRange.onchange = function(event){
  console.log(rowRange.value);
  newsItems.forEach(function(newsItem){
    newsItem.style.flex = `1 ${rowRange.value}px`;
  })
}

newsItems.forEach(function(newsItem){
  newsItem.onclick = function(event){
    document.querySelector(".news__item-large").classList.remove("news__item-large");
    event.currentTarget.classList.add("news__item-large");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }
})