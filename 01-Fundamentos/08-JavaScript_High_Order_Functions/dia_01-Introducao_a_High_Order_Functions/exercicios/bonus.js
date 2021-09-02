// PARTE 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => {
  const dragonStrength = dragon.strength;
  return Math.floor(Math.random() * (dragonStrength - 15 + 1)) + 15;
};

const warriorDmg = () => {
  const warriorStrength = warrior.strength;
  const warriorWeaponDmg = warrior.weaponDmg;
  return (
    Math.floor(
      Math.random() * (warriorStrength * warriorWeaponDmg - warriorStrength + 1)
    ) + warriorStrength
  );
};

const mageAtack = () => {
  const mageIntel = mage.intelligence;
  const mageMana = mage.mana;
  let usedMana = 15;
  let mageDmg =
    Math.floor(Math.random() * (mageIntel * 2 - mageIntel + 1)) + mageIntel;
  if (mageMana < 15) {
    mageDmg = 'Não possui mana suficiente';
    usedMana = 0;
  }
  return {
    damage: mageDmg,
    usedMana,
  };
};
