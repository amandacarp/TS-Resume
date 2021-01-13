let firstName: string = "Amanda Carpentieri";
let allCaps = firstName.toUpperCase();
console.log(`Name: ${allCaps}`);

let career: string = "Aspiring Web Develper";
console.log(`Career: ${career}`);

let description: string = "I am 30 years old living in Los Angeles, CA.";
console.log(`Description: ${description}`);

console.log("My Interests:");

function displayInterests(myInterests: string) {
    console.log(`* ${myInterests}`);
}
displayInterests("Dancing");
displayInterests("Hiking");
displayInterests("Going to the beach");

console.log("My Previous Experience:");

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
    console.log(`* ${companyName}, ${jobTitle} - ${jobDescription}`);
}

displayPosition("Animal Dermatology Clinic", "Veterinary Technician", "Provided medical care to dogs and cats");
displayPosition("Rogers International School", "Special Education Teacher", "Instructed children from grades 1-8");

console.log("My Skills:");

function displaySkills(mySkills: string, bam: boolean) {
    if(bam == true){
            console.log("* BAM: " + mySkills);
} else if(bam == false) {
    console.log(`* ${mySkills}`);
}}

displaySkills("Dancing", false);
displaySkills("Cooking", false);
displaySkills("Drawing blood and urine from dogs and cats!", true); 