


// get the hamburger & close elements from the DOM
 let hamburgerMenu = document.getElementsByClassName('HamburgerMenuIcon')[0];
 let closeIcon = document.getElementsByClassName('closeIcon') [0];
 let navigationOpen = document.getElementsByClassName('navigationOpen') [0];
 

//  write function to open menu
function menuOpen(){
   hamburgerMenu.classList.add('open');
   hamburgerMenu.classList.add('close');
   navigationOpen.classList.add('open');
   console.log(hamburgerMenu)

// closeIcon.classList.remove('hamburgerMenuIcon.close');

}

//write function to close menu
function menuClosed(){
   hamburgerMenu.classList.remove('open');
   hamburgerMenu.classList.remove('close');
   navigationOpen.classList.remove('open');
   console.log(hamburgerMenu)

}

//add event.listener to hamburger menu to trigger open and close icon to trigger close
hamburgerMenu.addEventListener("click", menuOpen)
closeIcon.addEventListener("click", menuClosed)




