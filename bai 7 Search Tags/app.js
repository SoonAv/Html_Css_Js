
// cach 1
// var btnSearch = document.querySelector('.search-button')
// var searchBox = document.querySelector('.search-box')

// btnSearch.addEventListener('click',function(){
//     searchBox.classList.toggle('open')
// })

// cach 2
var btnSearch = document.querySelector('.search-button')
btnSearch.addEventListener('click',function(){
    console.log(this.parentElement)
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})
