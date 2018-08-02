window.onload=function(){
  document.getElementById("theImage")
      .onclick = function(){
        changeImage();
      }
}
var i = 0;

function changeImage(){
  var list = ["surfVibes.jpg", "surfVibes2.jpg", "surfVibes3.jpg", "surfVibes4.jpg"]
  i++;
  if (i > 3) {
    i = 0;
    }
  var newImg = list[i];
  document.getElementById("theImage").src = newImg;
}
