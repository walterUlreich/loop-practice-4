var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

/* Problem 1 */
for (var i = 0; i < months.length; i++) {
  if (months[i].days === 28) {
    for (var j = 1; j < 29; j++) {
      console.log(months[i].name + ' ' + j)
    }
  } else if (months[i].days === 30) {
    for (var j = 1; j < 31; j++) {
      console.log(months[i].name + ' ' + j)
    }
  } else if (months[i].days === 31) {
    for (var j = 1; j < 32; j++) {
      console.log(months[i].name + ' ' + j)
    }
  }
}

/* Problem 2 */
for (var i = 0; i < 24; i++) {
  for (var j = 0; j < 60; j++) {
    for (var k = 0; k < 60; k++) {
      console.log(i + ":" + j + ":" + k)
    }
  }
}

/* Problem 3 */
for (var i = 1; i < 13; i++) {
  for (var j = 0; j < 60; j++) {
    for (var k = 0; k < 60; k++) {
      console.log(i + ":" + j + ":" + k + ' AM')
    }
  }
}

for (var i = 1; i < 13; i++) {
  for (var j = 0; j < 60; j++) {
    for (var k = 0; k < 60; k++) {
      console.log(i + ":" + j + ":" + k + ' PM')
    }
  }
}
