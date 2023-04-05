export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => {
    return person.lastName + " (" + person.age + ")";
  });
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => {
    return person.age == age;
  });
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age)
    .map((person) => person.firstName + " " + person.lastName);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => {
    return person.lastName == lastName;
  });
}

export function findPersonById(people, id) {
  return people.find((person) => person.id == id);
}

export function isAnyoneOlderThan(people, age) {
  const istrue = people.findIndex((person) => person.age > age);
  if (istrue >= 1) {
    return true;
  } else {
    return false;
  }
}

export function getFullNamesSortedByAge(people) {
  return people
    .sort((a, b) => a.age - b.age)
    .map((person) => person.firstName + " " + person.lastName);
}
