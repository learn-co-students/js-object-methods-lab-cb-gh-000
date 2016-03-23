'use strict';

describe('Presidents Constructor Function', function() {
  it('can create a president with a name, home state, political party, and years in office', function() {
    var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");
    expect(lyndonJohnson.constructor == President).toEqual(true);
    expect(lyndonJohnson.name).toEqual("Lyndon B Johnson");
    expect(lyndonJohnson.politicalParty).toEqual("Democrat");
    expect(lyndonJohnson.yearsInOffice).toEqual("1963-1969");
    expect(lyndonJohnson.homeState).toEqual("Texas");
  });
});

describe('#veto', function() {
  it('returns "NO!"', function() {
    var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");
    expect(lyndonJohnson.veto()).toEqual("NO!");
  });
});

describe('#passBill', function() {
  it('returns "You can do that!"', function() {
    var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");
    expect(lyndonJohnson.passBill()).toEqual("You can do that!");
  });
});

describe('#doCharity', function() {
  it('returns "I like to help people."', function() {
    var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");
    expect(lyndonJohnson.doCharity()).toEqual("I like to help people.");
  });
});

describe('#onductPressInterview', function() {
  it('returns "I am proud to be an American."', function() {
    var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");
    expect(lyndonJohnson.conductPressInterview()).toEqual("I am proud to be an American.");
  });
});

describe('#sayHi', function() {
  it('returns "Hi, my name is <name>. I am from <homestate>. I represent the <politicalParty>s and was in office 1963-1969."', function() {
    var lyndonJohnson = new President("Lyndon B Johnson", "Democrat", "1963-1969", "Texas");
    expect(lyndonJohnson.sayHi()).toEqual("Hi, my name is Lyndon B Johnson. I am from Texas. I represent the Democrats, and was in office 1963-1969.");
  });
});
