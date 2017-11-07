function Execute() {
  
  var response = prompt("Please enter your name");
  if (response != null) {
    this.name = response;
  }
  
  response = prompt("Please enter your age");
  if (response != null) {
    this.age = response;
  }

  response = prompt("Please enter your sex");
  if (response != null) {
    this.sex = response;
  }

  response = prompt("Please enter your weight");
  if (response != null) {
    this.weight = response;
  }

  response = prompt("Please enter your height");
  if (response != null) {
    this.height = response;
  }

  var persona1 = new Persona(this.name, this.age, this.sex, this.weight, this.height);
  console.log("*****PERSONA 1 *******");
  console.log(persona1);
  console.log(this.translateIMC(persona1.calculateIMC()));
  console.log(this.translateAge(persona1.isAdult()));

  alert("Persona1: " + persona1.name + ", Age: " + persona1.age + ", Sex: " + persona1.sex + ", Weight: " + persona1.weight + ", Height: " + persona1.height + ", IMC: " + this.translateIMC(persona1.calculateIMC()) + ", Adult: " + this.translateAge(persona1.isAdult()));

  var persona2 = new Persona(this.name, this.age, this.sex);
  console.log("*****PERSONA 2 CON WEIGHT Y HEIGHT POR DEFECTO *******");
  console.log(persona2);
  console.log(this.translateIMC(persona2.calculateIMC()));
  console.log(this.translateAge(persona2.isAdult()));

  alert("Persona2: " + persona2.name + ", Age: " + persona2.age + ", Sex: " + persona2.sex + ", Weight: " + persona2.weight + ", Height: " + persona2.height + ", IMC: " + this.translateIMC(persona2.calculateIMC()) + ", Adult: " + this.translateAge(persona2.isAdult()));

  var persona3 = new Persona();

  persona3.setName(this.name) || persona3.setName("");
  persona3.setAge(this.age) || persona3.setAge(0);
  persona3.setSex(this.sex) || persona3.setSex("male");
  persona3.setWeight(this.weight) || persona3.setWeight(0);
  persona3.setHeight(this.height) || persona3.setHeight(0);

  console.log("*****PERSONA 3 CON ATRIBUTOS CARGADOS POR SET*******");
  console.log(persona3);
  console.log(this.translateIMC(persona3.calculateIMC()));
  console.log(this.translateAge(persona1.isAdult()));

  alert("Persona3: " + persona3.name + ", Age: " + persona3.age + ", Sex: " + persona3.sex + ", Weight: " + persona3.weight + ", Height: " + persona3.height + ", IMC: " + this.translateIMC(persona3.calculateIMC()) + ", Adult: " + this.translateAge(persona3.isAdult()));

}

Execute.prototype.translateIMC = function(IMC) {

  if (isNaN(IMC)) { return"Impossible to calculate"; } 
  else if (IMC == -1 ) {
    return "Lightweight"
  } else if (IMC == 0) {
    return "Ideal Weight";
  } else if (IMC == 1) {
    return "Overweight";
  } else{
    return "Impossible to calculate";
  }

};

Execute.prototype.translateAge = function(value) {

  if (value == 1 ) {
    return "Is an adult"
  } else if (value == 0) {
    return "Is not an adult";
  } else{
    return "Impossible to calculate";
  }

};