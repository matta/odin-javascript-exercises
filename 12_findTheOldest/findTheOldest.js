const age = o => {
  if (o.yearOfDeath == null) {
    const today = new Date();
    const age = today.getFullYear() - o.yearOfBirth;
    return age;
  }
  return o.yearOfDeath - o.yearOfBirth;
}

const findTheOldest = function(a) {
  return a.reduce((prev, curr) => {
    if (prev === null || age(prev) < age(curr)) {
      return curr;
    }
    return prev;
  }, null);
}

// Do not edit below this line
module.exports = findTheOldest
