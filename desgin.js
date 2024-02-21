const allBtn = document.getElementsByClassName( "all" );
console.log(allBtn);
let currentBtn = 0 ;

for (const btn of  allBtn) {
   btn.addEventListener("click", function (e) {
count = count + 1 ;
document.getElementById("Seat-count"). innerText = count;
 console.log ('Button clicked');
})
}