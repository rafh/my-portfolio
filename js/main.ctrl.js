/**
 * Created by rafaelheard on 10/11/15.
 */

angular.module('app').controller("MainController", ['$http', function($http) {

    var vm = this;

    vm.title = 'Rafael Heard';
    vm.titleCaption = 'Web Developer';
    vm.bioTitle = 'My work is my passion...';
    vm.bio = "I focus on great functionality, clean markup, and bringing designs to life. I'm constantly learning to keep my skills relevant.  When I am away from my computer I like building DIY projects.";
    vm.workTitle = 'Work/Play';
    vm.contactTitle = 'Contact Me';
    vm.twitter = 'https://twitter.com/HeardRaf';
    vm.linkedin = 'https://www.linkedin.com/in/roheard';
    vm.copyright = 'Copyright © 2014 Rafael heard - rh';


    //cards in the work section
    vm.myWork = [

        {
            id: 0,
            title: 'Delivra',
            link: 'http://delivra.com',
            preview: '../assets/delivra.jpg',
            image: '../assets/delivra-clip.jpg',
            alt: 'Delivra Snapshot',
            content: "I was contracted to be part of a team to build this website.  Delivra is a Wordpress website built from PSD designs. We translated the PSD designs into HTML and CSS.  Once this phase was complete we moved into Wordpress Integration."
        },
        {
            id: 1,
            title: 'Cornerstone Autism Center',
            link: 'http://cornerstoneautismcenter.com/cornerstone/our-team/',
            preview: '../assets/cornerstone.png',
            image: '../assets/cornerstone-clip.jpg',
            alt: 'Cornerstone Autism Center Snapshot',
            content: "Cornerstone Autism Center is a Wordpress website using a custom built theme. This company has multiple locations.  I was tasked with writing queries which categorized each member into a section depending on their job title.  Furthermore I added another query to breaks team member into multiple pages depending where they are stationed. To add a more modern touch I added alternate images which appear when the user hovers over a team member.  Once the user clicks the image of the team member the information for that particular person is pulled in via AJAX and populates a div below them.  To avoid long load times all of the images are lazy loaded to the page. Everything is dynamic. This mean Cornerstone Autism Center can add or remove as many team members without me having to change any code. An example of the categorized sub pages is shown below."
        },
        {
            id: 2,
            title: 'Weatherbee Talent Group',
            link: 'http://weatherbeetalent.com/',
            preview: '../assets/weatherbee.png',
            image: '../assets/weatherbee-clip.jpg',
            alt: 'Weatherbee Snapshot',
            content: 'Weatherbee Talent Group is a talent agency based in California. I was tasked with the job of integrating the designs for this website into Wordpress.  This client wanted to use a Wordpress theme, but wanted it be highly altered to meet his wants.  In order to achieve this task I created child theme.  Inside my child theme I used Sass, JavaScript, and Jquery to finish this project. I used Contact 7 forms to complete the contact forms and Custom Fields to allow customization for the client. I altered the Contact forms using hooks to CC a particular owner if certain parameters were meet when a contact form was submitted. I used Custom Fields to allow the client to be able to alter any image or background, alter captions, and titles to his liking in the future. I refrained from using any other plugins to avoid issues which could arise from deprecated code.'
        },
        {
            id: 3,
            title: 'Restaurant Review',
            link: 'http://rafaelheard.com/new-eats/',
            preview: '../assets/rest.png',
            image: '../assets/review-clip.jpg',
            alt: 'Restaurant Review Snapshot',
            content: "This website is something I built in my free time. I designed this from start to finish using Photoshop. I've noticed a few restaurant websites recently geared more so for a mobile experience, so I started my designs from mobile and worked my way up to desktop. Once I was done designing I began the development phase.  I used Sass and Jquery to finish this website. I used flexbox throughout this website to showcase my understanding of this aspect."
        },
        {
            id: 4,
            title: 'Ordering app (coming soon)',
            link: 'http://rafaelheard.com/new-eats/',
            preview: '../assets/coming-soon.png',
            image: '../assets/orderingApp.png',
            alt: 'Preview of App',
            class: 'coming-soon',
            content: "I am currently building an application for ordering while on the go.  This application is being built using Angular.  The menu is populated using a remote database.  This database will also receive any orders placed. Once the other has been finished the user will be notified via a notification."
        }


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


