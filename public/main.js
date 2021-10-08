window.onload=function(){
    const togaleMenu = document.querySelector('#toggleMenu');
    const main = document.querySelector('#mainAndSidebar');
    
    togaleMenu.addEventListener('click', function() {
        if (main.classList.contains('-translate-x-0')) {
            main.classList.remove('-translate-x-0');
            main.classList.add('-translate-x-full');
        } 
        else {
            main.classList.remove('-translate-x-full');
            main.classList.add('-translate-x-0');
        }
    });

    // user dropdown
    
    const dropdown = document.querySelector('#dropdown');
    const dropdownMenu = document.querySelector('#dropdownMenu');
    const outDropdown = document.querySelector('#outDropdown');
    
    // dropdown.addEventListener('click', function() {
    //     if (dropdownMenu.classList.contains('opacity-0')) {
    //         dropdownMenu.classList.remove('opacity-0');
    //         dropdownMenu.style.transition = "all .8s"
    //         dropdownMenu.classList.add('opacity-100');
    //     } 
    //     else {
    //         dropdownMenu.classList.remove('opacity-100');
    //         dropdownMenu.classList.add('opacity-0');
    //     }
    // });
    // window.addEventListener('click', function(event){
    //     if (dropdownMenu.classList.contains('opacity-100')){
    //         dropdownMenu.classList.remove('opacity-100');
    //         dropdownMenu.classList.add('opacity-0');
    //     }
    // });

    // var specifiedElement = document.getElementById('testDiv');
    document.addEventListener('click', function(event) {
        var isClickInside = dropdown.contains(event.target);
            if (isClickInside) {
                if (dropdownMenu.classList.contains('hidden')) {
                    dropdownMenu.classList.remove('hidden');
                    dropdownMenu.style.transition = "all .8s"
                    dropdownMenu.classList.add('block');
                    dropdownMenu.classList.add('z-40');
                    dropdownMenu.classList.add('fadeInDown');
                } 
                else {
                    dropdownMenu.classList.remove('z-40');
                    dropdownMenu.classList.remove('block');
                    dropdownMenu.classList.add('hidden');
                }
            }
            else {
                dropdownMenu.classList.remove('z-40');
                dropdownMenu.classList.remove('block');
                dropdownMenu.classList.add('hidden');
            }
    });

}




