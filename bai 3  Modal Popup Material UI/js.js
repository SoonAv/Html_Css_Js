var modalOpen = document.querySelector('.open-btn')
var modal = document.querySelector('.modal')
var  closeIcon = document.querySelector('.modal-header i')
var closeButton = document.querySelector('.modal-footer button')
function toggleModal (e) {
    modal.classList.toggle('hidden')
    console.log(e.target)
}

modalOpen.addEventListener('click', toggleModal)
closeIcon.addEventListener('click',toggleModal)
closeButton.addEventListener('click',toggleModal)
modal.addEventListener('click',function(e){
    if(e.target== e.currentTarget){
        toggleModal()
    }
})
