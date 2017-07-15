/*
`index.js`, build an ES6 `President` class with the following properties set by the constructor: `name`, `politicalParty`, `yearsInOffice`, and `homeState`.

Add following methods to the class:
+ `veto` — returns `NO!`
+ `passBill` — returns `You can do that!`
+ `doCharity` — returns `I like to help people.`
+ `conductPressInterview` — returns `I am proud to be an American.`
+ `sayHi` — returns `Hi, my name is <name>. I am from <homestate>. I represent the <politicalParty>s, and was in office <yearsInOffice>.`
*/

class President {
  constructor(name,party,years,state){
    this.name = name;
    this.politicalParty = party;
    this.yearsInOffice = years;
    this.homeState = state;
  }
    veto(){ return "NO!"; }
    passBill(){ return "You can do that!"; }
    doCharity() { return "I like to help people."; }
    conductPressInterview(){ return "I am proud to be an American."; }
    sayHi(){ return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`; }
}

// Then create the following presidents: George Washington, Abraham Lincoln, Richard Nixon, and Jimmy Carter.

var presidents = new Array(44);
presidents[0] = new President('George Washington', 'independent', 8, 'Virginia');
presidents[15] = new President('Abraham Lincoln', 'republican', 4, 'Illinois');
presidents[36] = new President('Richard Nixon', 'republican', 5, 'California');
presidents[38] = new President('Jimmy Carter', 'democrat', 4, 'Georgia');
