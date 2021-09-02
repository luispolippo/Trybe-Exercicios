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

const mageAttack = () => {
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

// PARTE 2

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (callback) => {
    const damage = callback();
    dragon.healthPoints = dragon.healthPoints - damage;
    warrior.damage = damage;
  },
  mageTurn: (callback) => {
    const mageStats = callback();
    dragon.healthPoints = dragon.healthPoints - mageStats.damage;
    mage.mana = mage.mana - mageStats.usedMana;
    mage.damage = mageStats.damage;
  },
  dragonTurn: (callback) => {
    const damage = callback();
    dragon.damage = damage;
    warrior.healthPoints = warrior.healthPoints - damage;
    mage.healthPoints = mage.healthPoints - damage;
  },
  battleStats: () => {
    console.log(battleMembers);
  }
};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonDmg);
gameActions.battleStats();
