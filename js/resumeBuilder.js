// resumeBuilder.js encapsuated functions with IIFE.
var work = {
  "jobs": [{
    "employer": "Self Employed",
    "title": "Entrepreneur",
    "location": "246 Petaluma Blvd, Petaluma, Ca",
    "date": "2008 - 2012",
    "description": "Bought struggling business, and turned it around, then sold it for huge profit.",
    "url": "http://www.yelp.com/biz/universe-billiards-petaluma"
  }, {
    "employer": "Hansel Auto Group",
    "title": "Auto Finance Manager",
    "location": "Petaluma, Ca",
    "date": "2000 - 2008",
    "description": "Financing, DMV, After Market Sales"
  }]
};

work.display = (function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedLocation = HTMLlocation.replace("%data%", work.jobs[job].location);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;


    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}());


var projects = {
  "projects": [{
    "title": "Project Censored",
    "dates": "2015",
    "description": "Film and Edit unreported news stories from project censored"
  }]
};

projects.display = (function() {
  for (var key in projects.projects) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
    

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
  }
}());


var bio = {
  "name": "Mark Jaramillo",
  "role": "Web Developer",
  "contacts": {
    "mobile": "707-326-4099",
    "land": "707-763-5302",
    "email": "markpjaramillo@gmail.com",
    "github": "markpj1",
    "twitter": "@ubilliards",
    "location": "Petaluma Ca"
  },

  "msg": "Thank You, for looking at my page.",
  "skills": ["HTML", "CSS", "JavaScript"],
  "bioPick": "images/fry.jpg"
};


bio.display = (function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPick);
  var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.msg);


  $("#header").prepend(formattedName + formattedRole);
  $("#topContacts").prepend(formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation);
  $("#header").append(formattedPic);
  $("#header").append(formattedMsg);
  $("#header").append(HTMLskillsStart);
  $("#footerContacts").prepend(formattedMobile + formattedEmail + formattedGit + formattedTwitter + formattedLocation);

  for (var key in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[key]);
    $("#skills").append(formattedSkills);
  }
  ////Alternate application.    
  //    if (bio.skills.length > 0) {
  //        $("#header").append(HTMLskillsStart);
  //
  //        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  //
  //        $("#skills").append(formattedSkill);
  //        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  //
  //        $("#skills").append(formattedSkill);
  //        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  //
  //        $("#skills").append(formattedSkill);
  //    }
  //console.log(bio.contacts.location);
}()); //ends display method with IIFE.

var education = {
  "schools": [{
    "name": "Santa Rosa Junior College",
    "degree": "Studied Media/Art",
    "city": "Santa Rosa, Ca",
    "studied": ["Digital Media", "Art"]
  }, {
    "onlineCourses": ["Udacity ", "CodeAcademy ", "CodeSchool ", "TelegraphPrep ", "FrontEndMasters ", "EloquantJS ", "responsive Web Design"],
    "onlineDegree": "NanoDegree"
  }]
};

education.display = (function() {
  var formattedName = HTMLschoolName.replace("%data%", education.schools[0].name);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
  var formattedTitle = HTMLonlineTitle.replace("%data%", education.schools[1].onlineCourses)

  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(formattedName);
  $(".education-entry:last").append(formattedDegree);
  $(".education-entry:last").append(HTMLonlineClasses);
  $(".education-entry:last").append(formattedTitle);




}()); // IIfe invokes methods.



$("#mapDiv").append(googleMap);

function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}
var name = $("#name").text();
$("#main").append(internationalizeButton);

   
    












