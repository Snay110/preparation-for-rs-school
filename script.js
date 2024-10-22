const photos =[
    {src: "img/2.jpg",alt: "фото номер 1"},
    {src:"img/3.jpg",alt:"фото номер 2"},
    {src:"img/1.jpg",alt:"фото номер 3"},
]
let currentIndx = 0;


function  showPhotos () {
    const photoSlay =  
    document.getElementById("photo-list");
    
;

    photoSlay.innerHTML = "";

const li = document.createElement("li");

const img = document.createElement("img");

img.src=photos[currentIndx].src;
img.alt=photos[currentIndx].alt;
li.appendChild(img);
photoSlay.appendChild(li);
};
function cucleImages (derection)  {
    currentIndx += derection
    if(currentIndx >=  photos.length) {
        currentIndx = 0;
    }else if (currentIndx <0) {
        currentIndx = photos.length - 1;
    }

}
console.log(showPhotos)

document.getElementById('next').addEventListener('click', ()=>
cucleImages(1));
document.getElementById('prev').addEventListener('click', ()=>
cucleImages(-1));


showPhotos();

