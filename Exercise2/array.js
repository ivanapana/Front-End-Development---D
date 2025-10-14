let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Using forEach()
people.forEach(function (person) {
  console.log(person);
});

// 3. Remove "Greg"
people.shift();
console.log(people); // ["Mary", "Devon", "James"]

// 4. Remove "James"
people.pop();
console.log(people); // ["Mary", "Devon"]

// 5. Add "Matt" to the front
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

// 6. Add my name to the end
people.push("Ivana");
console.log(people); // ["Matt", "Mary", "Devon", "Ivana"]

// 7. Using a for-loop, stop after "Mary"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break; // exit loop
  }
}

// 8. Make a copy without "Mary" or "Matt"
let newPeople = people.slice(2);
console.log(newPeople); // ["Devon", "Ivana"]

// 9. Redefine array and use splice
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people[0] = "Matt";
people[people.length - 1] = "Ivana";
console.log(people);
// ["Matt", "Mary", "Elizabeth", "Artie", "Ivana"]

// 10. Concatenate with "Bob"
let withBob = people.concat("Bob");
console.log(withBob);
// ["Matt", "Mary", "Elizabeth", "Artie", "Ivana", "Bob"]
