var names = ["Lars" , "Jan", "Peter", "Bo", "Frederik"]

const shortNames = names.filter((name) => (name.length <= 3));
const upperCased = names.map((n) => (n.toUpperCase()));
console.log(shortNames.join(","));
console.log(upperCased.join(","));