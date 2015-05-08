var bio = {
	"name" : "Clint Ridenour",
	"age" : 24,
	"contacts" : {
		"mobile" : "(917)698-1811",
		"email" : "Clint@Clint.Ridenour.com",
		"github" : "ClintRidenour",
		"twitter" : "@clinterific",
		"location" : "New York, NY"
	},
	"welcomeMessage" : "Hello! I am currently enrolled in the Front-End Web Development program with Udacity. My goal is to be well rounded to create robust, responisive designs.",
	 "skills" : ["HTML", "CSS", "Sales", "Javascript"]

};

var projects = {
	"projects": [
		{
			"title": "Be Fit With Josie",
			"dates": "2015",
			"description": "This project was created for a New York City based fitness brand for my Web Design Fundamentals Class",
			"images": "images/197.148.jpg"
		}
	]
}

var education = {
    "schools": [
        {
            "name": "University of Phoenix",
            "location": "Jersey City, NJ, US",
            "degree": "BA",
            "major": "Software Engineering",
            "dates": "2012 - Present",
            "url": "http://wwww.phoenix.edu"
        }
    ],
    "onlineCourses" : [
   		{
   			"title" : "Front-End Web Developer Nanodegree",
   			"school" : "Udacity",
    		"dates" : "2015",
   			"url": "http://www.udacity.com"
   		}
    ]
}

var work = {
	"jobs" : [
		{
			"employer": "Bloomingdale's",
			"title": "Burberry Brit Shop Manager",
			"location": "New York, NY",
			"dates" : "2013 - Current",
			"description": "YTD sales exceeding $1,000,000. Monitored daily sales and advised buyers in real time of product needs and changes in environments. Exceptional seasonal reviews from management. Assisted buyers in seasonal markets. Met and exceeded monthly, quarterly, and seasonal sales goals personally and for the business."
		},
		{
			"employer": "Bloomingdale's",
			"title": "Elie Tahari Specialist",
			"location": "New York, NY",
			"dates" : "2011 - 2013",
			"description": "Educating clients on the Elie Tahari line of clothing. Creating a loyal clientele and following up with clients on purchases & orders made. Providing exceptional customer service for Elie Tahari and Bloomingdales. Cross selling with other luxury departments. Establishing new relationships with clients and expanding on existing clients for future purchases. Converting returns into potential sales with high Units Per Transaction (UPT). Assisting in product buys for Bloomingdale’s stores across the nation. Met and exceeded monthly sales plans consistently."
		}
		]
}
var name = "Clint Ridenour";
var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedMobile = HTMLmobile.replace("%data%", bio.phone);
// var formattedBioPic = HTMLbioPic.replace("%data%"), bio.pic);

$("#header").prepend(formattedBioPic);

$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




$("#header").prepend(bio);