class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return 'NO!';
  }

  passBill() {
    return 'You can do that!';
  }

  doCharity() {
    return 'I like to help people.';
  }

  conductPressInterview() {
    return 'I am proud to be an American.';
  }

  sayHi() {
    let responseString = `Hi, my name is ${this.name}.`;
    responseString += ` I am from ${this.homeState}.`;
    responseString += ` I represent the ${this.politicalParty}s,`;
    responseString += ` and was in office ${this.yearsInOffice}.`;
    return responseString;
  }
}

const lyndonJohnson = new President('Lyndon B Johnson', 'Democrat', '1963-1969', 'Texas');
console.log(lyndonJohnson.sayHi());