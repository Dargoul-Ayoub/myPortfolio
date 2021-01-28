        var btnMode=document.getElementById('btn-mode');
        var firstChild=btnMode.firstElementChild
// function to set a given theme/color-scheme
        function setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        // function to toggle between light and dark theme
        function toggleTheme() {
            
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-light');
                firstChild.classList.remove('fa-sun');
                firstChild.classList.add('fa-moon');
                
            } else {
                setTheme('theme-dark');
                
                firstChild.classList.remove('fa-moon');
                firstChild.classList.add('fa-sun');
            }
        }
        // Immediately invoked function to set the theme on initial load
        (function () {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
                firstChild.classList.remove('fa-moon');
                firstChild.classList.add('fa-sun');
            } else {
                setTheme('theme-light');
                firstChild.classList.remove('fa-sun');
                firstChild.classList.add('fa-moon');
            }
        })();

        btnMode.addEventListener("click",toggleTheme);
        
        // stck the card-top when the user gscrolling down
       /* window.onscroll = function(){myFunction()};
        var cardTop = document.getElementById('card-top');
        var ImageProfile = document.getElementById('img-profile');
        var TxtAboutMe = document.getElementById('about-me');
        var HeightHeader = document.getElementsByTagName('header');
        // var HeightImgTxt = TxtAboutMe.offsetHeight + ImageProfile.offsetHeight;
         console.log(HeightHeader[0].offsetHeight);
        HeightHeader[0].style.height = HeightHeader[0].offsetHeight+"px";
        ImageProfile.style.display = 'none';
        TxtAboutMe.style.display = 'none';
        TxtAboutMe.style.display="block";
        TxtAboutMe.classList.add("transition-bottom-top");
        ImageProfile.style.display="block";
        ImageProfile.classList.add("transition-bottom-top-late");
        var YcardTop=cardTop.offsetHeight+100;
        function myFunction(){
               
         }*/
