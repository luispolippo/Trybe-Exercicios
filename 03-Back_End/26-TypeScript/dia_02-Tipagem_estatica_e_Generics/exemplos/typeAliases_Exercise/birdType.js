function printBird(bird) {
    console.log("O nome do pássaro é: " + bird.name);
    console.log("ele possui " + bird.age + " anos");
    console.log("esse passáro voa? " + bird.fly);
}
printBird({ name: 'Roberto', age: 1, fly: true });
