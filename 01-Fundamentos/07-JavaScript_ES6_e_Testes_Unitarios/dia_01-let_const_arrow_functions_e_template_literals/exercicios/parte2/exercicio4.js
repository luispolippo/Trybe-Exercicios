const skills = ['HTML', 'Javascript', 'CSS', 'Java', 'Kotlin'];

const replaceX = (string) => {
  const stringQualquer = `Trybe x aqui!`;
  return stringQualquer.replace('x', string);
};

const showSkills = (funcao1) => `${funcao1} Minhas cinco principais habilidades são:
  * ${skills.sort()[0]};
  * ${skills[1]};
  * ${skills[2]};
  * ${skills[3]};
  * ${skills[4]}.`;


console.log(showSkills(replaceX('foguete')));
