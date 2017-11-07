function Persona(name, age, sex, weight, height) {
  this.name = name || '' ;
  this.age =  age ||  0
  this.DNI = this.createDNI();
  this.sex = sex || 'male';
  this.weight = weight || 0;
  this.height = height || 0;
}

Persona.prototype.calculateIMC = function() {
  var IMC = this.weight / Math.pow(this.height,2);

  if (isNaN(IMC)) { return; } 
  else if (IMC < 20) {
  	return -1;
  } else if (IMC >= 20 && IMC <= 25) {
  	return 0;
  } else if (IMC > 25) {
  	return 1;
  } else{
  	return null;
  }

};

Persona.prototype.isAdult = function() {
  return (this.age>=18) ? 1 : 0;
  
};

Persona.prototype.checkSex = function(sex='M') {
  sex = sex.toLowerCase();

  if (sex=='male' || sex=='female') {
  	return sex;
  }else{
  	return 'M';
  }
};

Persona.prototype.toString = function() {
  return {	
  			'name' : this.name,
  		  'age' : this.age,
  			'DNI' : this.DNI,
  			'sex' : this.sex,
  			'weight' : this.weight,
  			'height' : this.height,
  		};
};

Persona.prototype.random = function() {
  	
  	nRam = Math.random();
    nMult = nRam*9;
    nInt = Math.round(nMult);

    return nInt;

};

Persona.prototype.createDNI = function() {
  	
  	num="";
  	i=0;

  	while (i<8) {
  		num+=this.random();
  		i++;
  	}

  	return parseInt(num);  	

};

Persona.prototype.setName = function(name) {
  this.name = name;
};

Persona.prototype.setAge = function(age) {
  this.age = age;
};

Persona.prototype.setSex = function(sex) {
  this.sex = sex;
};

Persona.prototype.setWeight = function(weight) {
  this.weight = weight;
};

Persona.prototype.setHeight = function(height) {
  this.height = height;
};