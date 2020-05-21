// code solution here
class President{
  constructor(name,politicalParty,yearsInOffice,homeState){
    this.name=name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  veto(){
    return "NO!";
  }
  passBill(){
    return "You can do that!";
  }
  doCharity(){
    return "I like to help people.";
  }
  conductPressInterview(){
    return "I am proud to be an American.";
  }
  sayHi(){
    return "Hi, my name is "+this.name+". I am from "+this.homeState+". I represent the "+this.politicalParty+"s, and was in office "+this.yearsInOffice+".";
  }
}
var george = new President("George Washington","s",8,"s");
var lincoln = new President("Abraham Lincoln","s",8,"s");
var nixon = new President("Richard Nixon","s",8,"s");
var carter = new President("Jimmy Carter","s",8,"s");
