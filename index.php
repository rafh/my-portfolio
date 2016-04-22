<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rafael Heard's Portfolio</title>

    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=1.0, maximum-scale=1.0">
    <link rel='shortcut icon' href='favicon.ico?' type='image/x-icon'
    / >
</head>

<body ng-app="app" ng-controller="MainController as main">

<section class="heroView">
    <div class="overlay"></div>

    <div class="hold">
        <img class="logo" src="assets/logo.svg">

        <div class="wrap">
            <a ng-href="{{main.linkedin}}" target="_blank"><i class="fa my-fa-linkedin-square"></i></a>
            <a ng-href="{{main.twitter}}" target="_blank"><i class="fa my-fa-twitter-square"></i></a>
        </div>

    </div>

    <div class="wrap" ng-cloak>
        <h1>{{main.title}}</h1>
        <p><span>Ambitious </span>{{main.titleCaption}}</p>
        <img class="bouncing-arrow animated  faa-float animated" src="assets/down-arrow.svg" alt="Bouncing Arrow">
    </div>


</section>

<section class="bioView">

    <div class="container">


        <div class="wrap">

            <div class="text-wrap">

                <div class="wrap">
                    <img src="assets/me.svg">
                </div>
                <h3>Hello! <span></span></h3>
                <p>You probably already know my name. Welcome to my portfolio built with Angular JS.<br>{{main.bio}}</p>
                <h3 ng-cloak>{{main.bioTitle}}</h3>
            </div>

        </div>

        <div class="hold"><!--hold image of me--></div>
        
    </div>
</section>

<section class="workView">

    <div class="wrap">
        <h2 ng-cloak>{{main.workTitle}}</h2>
    </div>

    <div class="center">
        <div class="hold">
            <div class="modal" ng-repeat="item in main.myWork" ng-click="input.isChecked = !input.isChecked">
                <label for="modal-{{item.id}}">
                    <div class="overlay"></div>
                    <div class="modal-trigger card" ng-style="{'background-image':'url({{item.preview}})'}"></div>
                </label>
                <input class="modal-state model" id="modal-{{item.id}}" type="checkbox" ng-model="input.isChecked"/>
                <div class="modal-fade-screen">
                    <div class="modal-inner {{item.class}}">
                        <div class="modal-close" for="modal-{{item.id}}"></div>
                        <h1 ng-cloak>{{item.title}}</h1>
                        <p class="modal-intro">{{item.content}}</p>
                        <a class="modal-cta" ng-href="{{item.link}}" target="_blank">launch website</a>
                        <div class="modal-image">
                            <img ng-src="{{item.image}}" alt="{{item.alt}}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<section class="contactView">
    <div class="wrap">
        <h2>{{main.contactTitle}}</h2>
    </div>
    
    <div class="hold">
        <form role="form" name="contactForm" class="myForm" ng-submit="main.submit()" required novalidate>
            <div class="form-groups">
                <div class="group">
                    <input type="text" name="username" ng-model="main.form.name" placeholder="Name (required)" required />
                    <span ng-model="main.form.name"></span>
                    <div ng-messages="contactForm.username.$error" ng-if="contactForm.username.$dirty" ng-cloak></div>
                </div>

                <div class="group">
                    <input type="text" name="subject" ng-model="main.form.subject" placeholder="Subject (required)" required />
                    <span ng-model="main.form.subject"></span>
                    <div ng-messages="contactForm.subject.$error" ng-if="contactForm.username.$dirty" ng-cloak></div>
                </div>

                <div class="group">
                    <input type="email" name="userEmail" ng-model="main.form.email" placeholder="Email (required)" required />
                    <span ng-model="main.form.email"></span>
                    <div ng-messages="contactForm.userEmail.$error" ng-if="contactForm.username.$dirty" ng-cloak></div>
                </div>

                <div class="group">
                    <textarea type="text" name="message" ng-model="main.form.message" ng-minlength="10" rows="10" required></textarea>
                    <span ng-model="main.form.message"></span>
                    <div ng-messages="contactForm.message.$error" ng-if="contactForm.userMessage.$dirty" ng-cloak>
                </div>

<!--                <div class="group">-->
<!--                    <input type="text" class="form-control" id="human" name="human" ng-model="main.form.human" placeholder="2 + 3 = ?" ng-class="{ valid: main.form.human == 5 }">-->
<!--                    <span ng-model="main.form.human"></span>-->
<!--                </div>-->

                <button class="submit" ng-disabled="contactForm.$invalid ">SEND</button>

            </div>
        </form>

    </div>

</section>

<footer>

    <div class="hold">
        <p ng-cloak>{{main.copyright}}</p>
    </div>

    <div class="wrap">
        <i class="fa fa-arrow-circle-up backup"></i>
        <a ng-href="{{main.linkedin}}" target="_blank"><i class="fa my-fa-linkedin-square"></i></a>
        <a ng-href="{{main.twitter}}" target="_blank"><i class="fa my-fa-twitter-square"></i></a>
    </div>
</footer>


</body>
<script src="js/min/angular.min.js"></script>
<script src="js/min/angular-messages.min.js"></script>
<script src="js/min/app-min.js"></script>
<script src="js/min/main.ctrl-min.js"></script>
<script src="js/min/jquery.min.js"></script>
<script src="js/min/main-min.js"></script>

</html>