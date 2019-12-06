let myvar = 1;
myvar = myvar + 1;
console.log(myvar * 5);
console.log(myvar / 3);
console.log(31 % 3);

let yourvar = {};
yourvar.first = 'one';
yourvar.second = 2;
yourvar['third'] = { 'property': 5 };

function multiply(a, b) {
  let res = a * b;
  return res;
}

console.log(multiply(4, 2));
console.log(multiply(4, 3));
console.log(multiply(4, 4));
console.log(multiply(4, 5));

// New way of functions
let mymultiply = function (a, b) {
  let res = a * b;
  return res;
};

window.onload = function () {
  //alert("pagina is geladen");
};

let Rectangle = function (breedte, hoogte) {
  this.Width = breedte;
  this.Height = hoogte;
};
Rectangle.prototype.Surface = function () {
  return this.Width * this.Height;
};

let newrectangle = new Rectangle(5, 7);
console.log('Oppervlakte: ' + newrectangle.Surface());

// Control structures

if (3 > 4) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if (true) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if ('onwaar') {
  console.log('waar');
} else {
  console.log('onwaar');
}

if ({}) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if ([3, 4, 5]) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if ([3, 4, 5].length) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if ('') {
  console.log('waar');
} else {
  console.log('onwaar');
}

if (undefined) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if (null) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if (NaN) {
  console.log('waar');
} else {
  console.log('onwaar');
}

if (-1) {
  console.log('waar');
} else {
  console.log('onwaar');
}


switch (myvar) {
  case 1:
    console.log('1');
    break;
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('groter');
    break;
  default:
    console.log('default');
    break;
}

for (let ctr = 0; ctr < 10; ctr++) {
  console.log('counter: ' + ctr);
  if (ctr > 5) {
    break;
  }
}

let ctr = 0;
while (ctr < 10) {
  console.log('counter2: ' + ++ctr);
  if (ctr > 5) {
    break;
  }
}

ctr = 0;
do {
  console.log('counter3: ' + ++ctr);
  if (ctr > 5) {
    break;
  }
} while (ctr < 10)

let Tuple = function (key, val) {
  this.Key = key;
  this.Value = val;
}

let fruits = [
  new Tuple('first', 'Banaan'),
  new Tuple('second', 'Peer'),
  new Tuple('third', 'Aardbei'),
  new Tuple('fourth', 'Appel')
];

for (let x in fruits) {
  console.log(x);
}

for (let y of fruits) {
  console.log(y);
}

let peek = fruits[fruits.length - 1];
console.log("laatste element: " + peek.Value);

fruits.find(el => el.Value === 'Aardbei');
fruits.slice(1, 2);
fruits.splice();
fruits.pop();
fruits.push();