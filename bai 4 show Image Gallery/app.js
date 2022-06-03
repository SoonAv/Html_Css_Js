var images = document.querySelectorAll('.img img')
var arrowLeftBtn = document.querySelector('.arrow.left')
var arrowRightBtn = document.querySelector('.arrow.right')
var closeBtn = document.querySelector('.close')
var galleryImg = document.querySelector('.galerry_inner img')
var gallery = document.querySelector('.galerry')
var currentIndex = 0
function showGallery (){
    if(currentIndex==7){
        arrowRightBtn.classList.add('hidden')
    }else{
        arrowRightBtn.classList.remove('hidden')

    }
    if(currentIndex==0){
        arrowLeftBtn.classList.add('hidden')
    }else{
        arrowLeftBtn.classList.remove('hidden')
    }
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}
function hiddenGallery(){
    gallery.classList.remove('show')
}
images.forEach((item, index)=>{
    item.addEventListener('click',function(e){
        console.log(e.target)
        currentIndex = index
        showGallery()
    })
})
closeBtn.addEventListener('click',hiddenGallery)

document.addEventListener('keydown', function(e){
    if(e.keyCode ==27){
        hiddenGallery()
    }
})

arrowLeftBtn.addEventListener('click',function(){
    if(currentIndex>0){
        currentIndex--
        showGallery()
    }
})
arrowRightBtn.addEventListener('click',function(){
    if(currentIndex<8){
        currentIndex++
        showGallery()
    }
})
document.addEventListener('keydown', function(e){
if(e.keyCode == 37){
    console.log(e.target)
    currentIndex--
    showGallery()
}
if(e.keyCode ==39){
    currentIndex++
    showGallery()
}
})