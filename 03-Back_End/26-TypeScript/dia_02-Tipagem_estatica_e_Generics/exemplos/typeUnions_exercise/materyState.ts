type Liquid = {
  name: string
}

type Solid = {
  name: string;
}

type Gas = {
  name: string;
}

function materyReturn(matery: Liquid | Solid | Gas) {
  console.log(matery.name);
};

materyReturn({ name: 'liquido'})