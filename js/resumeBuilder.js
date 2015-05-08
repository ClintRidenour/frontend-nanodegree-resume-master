var bio = {
	"name" : "Clint Ridenour",
	"age" : 24,
	"role" : "Front-End Web Developer",
	"bioPic" : "images/headshot.jpg",
	"contacts" : {
		"mobile" : "(917)698-1811",
		"email" : "Clint@clintridenour.com",
		"github" : "ClintRidenour",
		"twitter" : "@clinterific",
		"location" : "New York, NY"
	},
	"welcomeMessage" : "Hello! I am currently enrolled in the Front-End Web Development program with Udacity. My goal is to be well rounded to create robust, responisive designs.",
	"skills" : ["HTML", "CSS", "Sales", "Javascript"],
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage)

	 	$("#header").prepend(formattedRole)
					.prepend(formattedName)
					.append(formattedBioPic)
					.append(formattedWelcome)
					.append(formattedSkills);

		$("#topContacts").append(formattedMobile)
						 .append(formattedEmail)
						 .append(formattedTwitter)
						 .append(formattedGitHub)
						 .append(formattedLocation);

		if (bio.skills.length !== 0) {
		            $('#header').append(HTMLskillsStart);
		            for (var i = 0; i < bio.skills.length; i++) {
		                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		                $('#skills').append(formattedSkills);
		            }
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Precision Automotive",
			"dates": "2015",
			"description": "This project is for an auto-repair shop in Spring Hill, FL. It features a responsive web design with a mix of CSS and jQuery. The contact forms are done by me in PHP.",
			"images": "images/precision.jpg"
		},
		{
			"title": "Be Fit With Josie",
			"dates": "2015",
			"description": "This project was created for a New York City based fitness brand for my Web Design Fundamentals Class",
			"images": "images/BFWJ.jpg"
		},
		{
			"title": "Precision Automotive",
			"dates": "2007",
			"description": "Tis was the original website I did for this company. It was based off of a template that I heavily edited.",
			"images": "images/precision.jpg"
		}		

	],
	"display" : function () {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
		}
	}
};


var education = {
    "schools": [
        {
            "name": "University of Phoenix",
            "location": "Jersey City, NJ, US",
            "degree": "BA",
            "major": "Software Engineering",
            "dates": "2012 - Present",
            "url": "http://wwww.phoenix.edu"
        },
        {
        	"name": "Nature Coast Technical HS",
            "location": "Spring Hill, FL, US",
            "degree": "HS Diploma",
            "major": "Computer Programming",
            "dates": "2005-2009",
            "url": "http://www.edline.net/pages/HCSB_NCTHS"
        }
    ],
    "onlineCourses" : [
   		{
   			"title" : "Front-End Web Developer Nanodegree",
   			"school" : "Udacity",
    		"dates" : "2015",
   			"url": "http://www.udacity.com"
   		}
    ],
    "display" : function() {
    	for (school in education.schools) {

			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree)
									  .append(formattedSchoolDates)
									  .append(formattedSchoolLocation)
									  .append(formattedSchoolMajor);
		}


		for (online in education.onlineCourses) {

			

			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool)
									  .append(formattedOnlineDates)
									  .append(formattedOnlineURL);
		}
		$('#education').append(HTMLonlineClasses);
    }
};

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
			"dates" : "November 2011 - 2013",
			"description": "Educating clients on the Elie Tahari line of clothing. Creating a loyal clientele and following up with clients on purchases & orders made. Providing exceptional customer service for Elie Tahari and Bloomingdales. Cross selling with other luxury departments. Establishing new relationships with clients and expanding on existing clients for future purchases. Converting returns into potential sales with high Units Per Transaction (UPT). Assisting in product buys for Bloomingdale’s stores across the nation. Met and exceeded monthly sales plans consistently."
		},
		{
			"employer": "The Britto Agency",
			"title": "Intern",
			"location": "New York, NY",
			"dates" : "October 2011 - November 2011",
			"description": "Working with a team on company branding. Writing social media posts relevant to current clients and their views on current events. Assisting in launch strategies for new companies and clients. Researching most effective marketing avenues for the client. Planning press events and product releases. Created images and posters used for events and marketing."
		},
		{
			"employer": "Precision Automotive",
			"title": "Manager",
			"location": "Brooksville, FL",
			"dates" : "August 2010 - October 2011",
			"description": "In charge of entire operations. Maintained balance sheets, payables, company funds, and payroll. Supervised all staff, including the hiring and firing. Creating estimates, selling repairs and preventative maintenance to customers, and ordering required parts. Effectively advertised to the community. Evaluated progress and set goals for employees while providing one-to-one feedback. Provided customer service and established personal relationships with each customer."
		}

		],
	"display" : function() {
		for (job in work.jobs) {

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployerTitle)
								.append(formattedWorkLocation)
								.append(formattedWorkDates)
								.append(formattedWorkDescription);

		}
	}
};




//display the work section
work.display();

//display the bio
bio.display();

//display the projects section
projects.display()

education.display()

$("#mapDiv").append(googleMap);
