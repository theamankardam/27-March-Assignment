function ageInDays(person, logResult) {
    logResult(person);
    console.log(`The person's full name is ${person.fullName} and their age in days is ${person.ageIndays}`);
}
function logResult(person) {
    person.fullName = `${person.firstName} ${person.lastName}`;
    person.ageIndays = `${person.ageInYears * 365}`;
}
let person = {
    firstName: "mithun",
    lastName: "S",
    ageInYears: 20
}
ageInDays(person, logResult);

