function darkMode(){
    document.getElementById('myHobbies').style.backgroundColor = "red";
    document.getElementById('bd').style.display = "block";
}
function defaultMode(){
    document.getElementById('myHobbies').style.backgroundColor = "white";
    document.getElementById('bd').style.display = "none";
}
function changePicture(){
     let img = document.getElementById('myImg1').src = './images/myPicForJS.jpg';
     
}