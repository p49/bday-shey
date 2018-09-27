


let usrName = prompt('Please type in your middle name');

// usrName = usrName.toLowerCase();

if (usrName !== null) {

if (usrName === 'Sharese'  ||  usrName === 'sharese') {
	alert(`Congratulations!!! This page was made specially for you!`);
 }

else if (usrName === '' ) {
	alert('Again, please enter your middle name!');
	window.stop();
}

else if(usrName !== 'sharese' || 'Sharese') {
 	alert(`Sorry ${usrName.slice(0,1).toUpperCase() + usrName.slice(1)}, this page is not for you.`);
	window.stop(); // ALWAYS PUT THIS AT TOP SO JS LOADS FIRST
 }

}

if (usrName === null){ 
	alert('You canceled the prompt');
	window.stop();
}




// $('.hamburger').on('click', function() {
//   $('.menu-nav').slideToggle();
// });

 





// function myFunction(){
//     if(confirm("Would you like go to another page?")){
//         window.location = "http://yahoo.com";
//     }else{
//         alert('fine, if not want');
//     }
// }
// myFunction();


