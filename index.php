<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rafael Heard's Portfolio</title>

    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=1.0, maximum-scale=1.0">

    <!-- Chrome, Firefox OS, Opera and Vivaldi -->
    <meta name="theme-color" content="#3B97D3">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#3B97D3">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#3B97D3">

    <!-- <link rel='shortcut icon' href='favicon.ico?' type='image/x-icon'/ > -->
    <link rel="shortcut icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
    <link rel="shortcut icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />

</head>

<body ng-app="app" ng-controller="MainController as main">
    <?php include_once("assets/svg/svg-master.svg"); ?>

    <!-- <div class="preloader show">
        <svg class="loading"><use xlink:href="#loader"></use></svg>
    </div> -->

    <section class="heroView">
    <!--    <div class="overlay"></div>-->
        <img class="img-src blurred-img" src="assets/city.jpg">

        <div class="hold">
            <a href="#" class="logo-wrap"><svg class="logo"><use xlink:href="#logo"></use></svg></a>

            <div class="wrap">
                <a ng-href="{{main.linkedin}}" target="_blank" rel="nofollow" class="btn btn__social"><svg class=""><use xlink:href="#linkedin-icon"></use></svg></a>
                <a ng-href="{{main.twitter}}" target="_blank" rel="nofollow" class="btn btn__social"><svg><use xlink:href="#twitter-icon"></use></svg></a>
                <a ng-href="{{main.github}}" target="_blank" rel="nofollow" class="btn btn__social"><svg><use xlink:href="#github-icon"></use></svg></a>
            </div>

        </div>

        <div class="wrap" ng-cloak>
            <h1><span>{{main.first}} </span>{{main.last}}</h1>
            <p>Resourceful {{main.titleCaption}}</p>
            <a href="#"><svg class="btn bouncing-arrow floating"><use xlink:href="#down-arrow"></use></svg></a>
        </div>


    </section>

    <section class="bioView">
        <div class="container">
            <div class="wrap">
                <div class="text-wrap">
                    <div class="wrap">
                        <img src="assets/svg/me.svg">
                    </div>
                    <h3>Hello...<span></span></h3>
                    <p>{{main.bioIntro}}</p>
                    <p>{{main.bio}}</p>
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
            <div  id="js-fadeInElement" class="hold">
                <div class="modal js-fade-element-hide" ng-repeat="item in main.myWork" ng-click="input.isChecked = !input.isChecked">
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
                            <a class="modal-cta" ng-href="{{item.link}}" target="_blank" rel="nofollow">launch application</a>
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
            <h2 ng-cloak>{{main.contactTitle}}</h2>
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
                        <textarea type="text" name="message" ng-model="main.form.message" ng-minlength="1" rows="10" required></textarea>
                        <span ng-model="main.form.message"></span>
                        <div ng-messages="contactForm.message.$error" ng-if="contactForm.userMessage.$dirty" ng-cloak>
                    </div>

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
            <svg class="btn backup faa-float animated"><use xlink:href="#up-arrow"></use></svg>
            <a ng-href="{{main.linkedin}}" target="_blank" rel="nofollow" class="btn btn__social"><svg><use xlink:href="#linkedin-icon"></use></svg></a>
            <a ng-href="{{main.twitter}}" target="_blank" rel="nofollow" class="btn btn__social"><svg><use xlink:href="#twitter-icon"></use></svg></a>
            <a ng-href="{{main.github}}" target="_blank" rel="nofollow" class="btn btn__social"><svg><use xlink:href="#github-icon"></use></svg></a>
        </div>
    </footer>



</body>
<script src="js/min/angular.min.js"></script>
<script src="js/min/angular-messages.min.js"></script>
<script src="js/min/jquery.min.js"></script>
<script src="js/min/merged-min.js"></script>

</html>