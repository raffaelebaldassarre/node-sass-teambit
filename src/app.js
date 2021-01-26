let app = new Vue ({
    el: "#app",
    data : {
        nav_bar : {
            img : "./dist/img/logo.svg",
            link : [
                "Solutions",
                "Pricing",
                "Blog",
                "Sign in",
            ],
            button : {
                img: "./dist/img/google-logo.svg",                
                text: "Sign Up"
            }
        },
        section1 : {
            text : {
                h1 : "Understand, recognize and develop your people",
                h3 : "Teambit helps teams create a high performing culture with regular feedback",
                button1 : {
                    img : "./dist/img/google-logo.svg",
                    text : "Sign up with Google",
                },
                button2 : {
                    img : "./dist/img/slack-logo.svg",
                    text : "Sign up with Slack",
                },
                p : "or use your email address <i class='fas fa-arrow-right'></i>"
            },
            jumbotron :  "./dist/img/illustration-main.jpg",
        }
    }

});