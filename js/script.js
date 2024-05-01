document.addEventListener("DOMContentLoaded", function() {
    // Global scripts

    // Add event listeners for smooth scrolling navigation
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetPage = link.getAttribute('href');
            window.location.href = targetPage;
        });
    });

    // Homepage scripts

    if (document.body.id === "index") {
        // Set background image for the homepage
        var homeBackgroundImage = "/img/Marriage.jpg";
        document.getElementById("hero").style.backgroundImage = "url('" + homeBackgroundImage + "')";

        // Extract dominant color from the background image
        var colorThief = new ColorThief();
        var img = new Image();
        img.src = homeBackgroundImage;
        img.addEventListener("load", function() {
            var dominantColor = colorThief.getColor(img);
            var rgbString = "rgb(" + dominantColor[0] + "," + dominantColor[1] + "," + dominantColor[2] + ")";
            // Apply dominant color as background color to other pages
            var otherPages = document.querySelectorAll('body:not(#hero)');
            otherPages.forEach(function(page) {
                page.style.backgroundColor = rgbString;
            });
        });
    }

    // Profiles page scripts

    if (document.body.id === "profiles") {
        // Add scripts specific to the Profiles page
    }

    // About Us page scripts

    if (document.body.id === "about") {
        // Dynamically load team member images
        var teamImages = ['paresh.jpg', 'jenil.jpg', 'mayur.jpg', 'rahul.jpg', 'jenil_v.jpg', 'pari.jpg'];
        var teamList = document.getElementById('teamList');
        teamImages.forEach(function(image) {
            var li = document.createElement('li');
            var div = document.createElement('div');
            div.classList.add('team-member');
            var img = document.createElement('img');
            img.src = image;
            img.alt = "Team Member Image";
            img.width = 150;
            img.height = 150;
            div.appendChild(img);
            li.appendChild(div);
            teamList.appendChild(li);
        });
    }

    // Contact Us page scripts

    if (document.body.id === "contact") {
        // Add scripts specific to the Contact Us page
    }
});
