var prevScrollpos = window.pageYOffset;
// console.log(prevScrollpos);
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
//     console.log(prevScrollpos);
  } else {
    document.getElementById("navbar").style.top = "-100px";
    //     console.log(currentScrollPos);
  }
  prevScrollpos = currentScrollPos;
}
