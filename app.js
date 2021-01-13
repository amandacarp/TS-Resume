"use strict";
var firstName = "Amanda Carpentieri";
var allCaps = firstName.toUpperCase();
console.log("Name: " + allCaps);
var career = "Aspiring Web Develper";
console.log("Career: " + career);
var description = "I am 30 years old living in Los Angeles, CA.";
console.log("Description: " + description);
console.log("My Interests:");
function displayInterests(myInterests) {
    console.log("* " + myInterests);
}
displayInterests("Dancing");
displayInterests("Hiking");
displayInterests("Going to the beach");
console.log("My Previous Experience:");
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + companyName + ", " + jobTitle + " - " + jobDescription);
}
displayPosition("Animal Dermatology Clinic", "Veterinary Technician", "Provided medical care to dogs and cats");
displayPosition("Rogers International School", "Special Education Teacher", "Instructed children from grades 1-8");
console.log("My Skills:");
function displaySkills(mySkills, bam) {
    if (bam == true) {
        console.log("* BAM: " + mySkills);
    }
    else if (bam == false) {
        console.log("* " + mySkills);
    }
}
displaySkills("Dancing", false);
displaySkills("Cooking", false);
displaySkills("Drawing blood and urine from dogs and cats!", true);
