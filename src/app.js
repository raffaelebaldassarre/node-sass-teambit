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
                h4 : "Teambit helps teams create a high performing culture with regular feedback",
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
        },
        section2_1 : {
            text : "Traditional people processes lead to disengagement and turnover.",
            images3 : {
                1 :{
                   img: "./dist/img/hardcore.png",
                   text : "They hardcore, formal and disconetted",
                },
                2:{
                    img: "./dist/img/nofeedback.png",
                    text : "They don't encourage regular feedback",
                 },
                 3:{
                    img: "./dist/img/notsafe.png",
                    text : "They don't make it safe to speak up"
                 }
            },
            image1 : {
                img : "./dist/img/before.png"
            }
        },
        section2_2 : {
            text : "It doesn't to be like that. Teambit is a modern soution that teammates love",
            images3 : {
                1 :{
                   img: "./dist/img/lightweight.png",
                   text : "It's lightwigth fun and interconnnetted",
                },
                2:{
                    img: "./dist/img/feedbacksuggestions.png",
                    text : "If encourages regular feedback with contextual requests",
                 },
                 3:{
                    img: "./dist/img/safe.png",
                    text : "It create a safe environment to dialog"
                 }
            },
            image1 : {
                img : "./dist/img/after.png",
                h4 : "Here is how it works"
            }
        },
        section3_1 : {
            img : "./dist/img/employee-feedback.jpg",
            text : {
                h4: "Feedback to help teammates improve",
                p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
                link : "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
                img : "./dist/img/communication.jpg"
            }
        },
        section3_2 : {
            img : "./dist/img/employee-survey.jpg",
            text : {
                h4: "Survey to help the team be better",
                p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
                link : "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
                img : "./dist/img/insights.jpg"
            }
        },
        section3_3 : {
            img : "./dist/img/performance-review.jpg",
            text : {
                h4: "Reviews to help teammates get a fair evaluation",
                p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
                link : "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
                img : "./dist/img/review.jpg"
            }
        },
        section3_4 : {
            img : "./dist/img/employee-survey.jpg",
            text : {
                h4: "Praise to help teammates feel valued",
                p: "Empower your teammates to know in real time what they are doing well and what they need to improve.",
                link : "<a href='#'></i>Learn More <i class='fas fa-arrow-right'</a>",
                img : "./dist/img/recognition.jpg"
            }
        },
    },
});