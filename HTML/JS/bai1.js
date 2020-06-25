var images = [
    "img/a1.jpg","img/a2.jpg","img/a3.jpg","img/a4.jpg","img/a5.jpg","img/a6.jpg","img/a7.jpg","img/a8.jpg","img/a9.jpg","img/a10.jpg","img/a11.jpg","img/a12.jpg","img/a13.jpg","img/a14.jpg","img/a15.jpg","img/a16.jpg","img/a17.jpg","img/a18.jpg","img/a19.jpg","img/a20.jpg"
];// mảng chứa các phần tử ảnh
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;// 
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
// let listC = document.querySelectorAll("button");
// let listPicture = document.querySelector(".picture")
// let picture = "Ảnh" + i + "/20";
// function TC(){
//     listPicture.forEach(p =>{
//         listC.addEventListener("click", function(){
//             listPicture.forEach(p =>{
//                 let i = 0;
//                 if (i <= images.length){
//                     i +=1;
//                     document.getElementById('picture').innerText = picture;
//                 }
//             })
//         })
//     })
    
// }




var a = "ẢNH "+ i+"/ 20";
document.getElementById('picture').innerText = a;

