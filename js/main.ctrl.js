/**
 * Created by rafaelheard on 10/11/15.
 */
angular.module('app', ['ngMessages']);
angular.module('app').controller("MainController", ['$http', function($http) {

    var vm = this;

    vm.first         = 'Rafael';
    vm.last          = 'Heard';
    vm.titleCaption  = 'Web Developer';
    vm.bioTitle      = 'My work is my passion...';
    vm.bioIntro      = 'You probably already know my name. Welcome to my portfolio built with AngularJS.';
    vm.bio           = "I focus on great functionality, clean markup, and bringing designs to life. I'm constantly learning to keep my skills relevant.  When I am away from my computer I like building DIY projects.";
    vm.workTitle     = 'Work/Play';
    vm.contactTitle  = 'Contact Me';
    vm.twitter       = 'https://twitter.com/HeardRaf';
    vm.linkedin      = 'https://www.linkedin.com/in/roheard';
    vm.github        = 'https://github.com/rafh';
    vm.copyright     = 'Copyright © 2016 Rafael heard - rh';


    //cards in the work section
    vm.myWork = [

        {
            id: 0,
            title: 'Delivra',
            link: 'http://delivra.com',
            preview: '../dist/delivra.jpg',
            image: '../dist/delivra-clip.jpg',
            alt: 'Delivra Snapshot',
            content: "I was contracted to be part of a team to build this website.  Delivra is a Wordpress website built from PSD designs. We translated the PSD designs into HTML and CSS.  Once this phase was complete we moved into Wordpress Integration."
        },
        {
            id: 2,
            title: 'Milto Cleaners',
            link: 'https://www.milto.com/',
            preview: '../dist/milto.jpg',
            image: '../dist/milto-clip.jpg',
            alt: 'milto-logo',
            content: "I was contracted to help complete the development of this custom Wordpress site.  This site was built using JavaScript, PHP, HTML5, and SASS.  I developed this site, and gave the client the ability to change and update content with ease."
        },
        {
            id: 6,
            title: 'Grocerii',
            link: 'https://github.com/rafh/grocerii',
            preview: '../dist/grocerii-clip.png',
            image: '../dist/grocerii.png',
            image_1: '../dist/grocerii-1.png',
            image_2: '../dist/grocerii-2.png',
            image_3: '../dist/grocerii-3.png',
            alt: 'grocerii-screenshot',
            class: 'no-shadow app-layout',
            content: "I designed and developed this Android app.  It allows the user to build a cart by selecting items available in the grocery store or scan items within their homes.  Once the user is done they can send their cart to their grocery store and choose a date to pickup their cart. This app was built using AngularJS 1.x, HTML5, SASS, and Ionic"
        },
        {
            id: 3,
            title: 'Cornerstone Autism Center',
            link: 'http://cornerstoneautismcenter.com/cornerstone/our-team/',
            preview: '../dist/cornerstone.png',
            image: '../dist/cornerstone-clip.jpg',
            alt: 'Cornerstone Autism Center Snapshot',
            content: "Cornerstone Autism Center is a Wordpress website using a custom built theme. This company has multiple locations.  I was tasked with writing queries which categorized each member into a section depending on their job title.  Furthermore I added another query to breaks team member into multiple pages depending where they are stationed. To add a more modern touch I added alternate images which appear when the user hovers over a team member.  Once the user clicks the image of the team member the information for that particular person is pulled in via AJAX and populates a div below them.  To avoid long load times all of the images are lazy loaded to the page. Everything is dynamic. This mean Cornerstone Autism Center can add or remove as many team members without me having to change any code. An example of the categorized sub pages is shown below."
        },
        {
            id: 4,
            title: 'Weatherbee Talent Group',
            link: 'http://weatherbeetalent.com/',
            preview: '../dist/weatherbee.png',
            image: '../dist/weatherbee-clip.jpg',
            alt: 'Weatherbee Snapshot',
            content: 'Weatherbee Talent Group is a talent agency based in California. I was tasked with the job of integrating the designs for this website into Wordpress.  This client wanted to use a Wordpress theme, but wanted it be highly altered to meet his wants.  In order to achieve this task I created child theme.  Inside my child theme I used Sass, JavaScript, and Jquery to finish this project. I used Contact 7 forms to complete the contact forms and Custom Fields to allow customization for the client. I altered the Contact forms using hooks to CC a particular owner if certain parameters were meet when a contact form was submitted. I used Custom Fields to allow the client to be able to alter any image or background, alter captions, and titles to his liking in the future. I refrained from using any other plugins to avoid issues which could arise from deprecated code.'
        },
        {
            id: 5,
            title: 'Cutz by Drew',
            link: 'http://www.cutzbydrew.com/',
            preview: '../dist/cutz.jpg',
            image: '../dist/cutzbydrew-clip.jpg',
            alt: 'Cutz by Drew Snapshot',
            content: 'I was contracted to complete this web application by a local barber. During the process of designing and developing I mentored a student from a local university.  My goal was to complete this website in a timely manner, help improve the growth of this business, and allow this student to gain valuable experience. This web application was designed and developed by the student and myself. It is also a custom Wordpress theme.'
        },
        {
            id: 6,
            title: 'Restaurant Review',
            link: 'http://rafaelheard.com/new-eats/',
            preview: '../dist/rest.png',
            image: '../dist/review-clip.jpg',
            alt: 'Restaurant Review Snapshot',
            content: "This website is something I built in my free time. I designed this from start to finish using Photoshop. I've noticed a few restaurant websites recently geared more so for a mobile experience, so I started my designs from mobile and worked my way up to desktop. Once I was done designing I began the development phase.  I used Sass and Jquery to finish this website. I used flexbox throughout this website to showcase my understanding of this aspect."
        },
        // {
        //     id: 5,
        //     title: 'Ordering app',
        //     link: 'http://rafaelheard.com/the-menu/',
        //     preview: '../dist/menu.jpg',
        //     image: '../dist/orderingApp.png',
        //     alt: 'Preview of App',
        //     class: 'no-shadow',
        //     content: "This is a application I built in my free time.  The premise is a user would order food using their mobile device from a single restaurant or multiple locations. Once all desired items have been added to the cart they are able to checkout, and they will be able to see a quick recap of what they ordered.  With the idea it would be mainly used on mobile devices.  I designed and developed this application mobile up. I used Photoshop to create wireframes and mockups.  Angular, jQuery, HTML, and SASS helps my application function properly."
        // }

    ];


    var url = 'contact-form-handler.php';
    vm.codeStatus = "";
    vm.form = {};

    vm.submit = function($event) {

        // $event.preventDefault();
        console.log($.param(vm.form));

        $http({
            method: "POST",
            url: url,
            data: $.param(vm.form),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).
        success(function(result) {
            console.log(result);

        }).
        error(function(data) {
            console.log('not sent');
        });
        return false;

    };



}]);


