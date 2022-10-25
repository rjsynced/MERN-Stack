class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        // console.log(this.name, this.health, this.speed, this.strength);
        console.log(`Name:${this.name} Health:${this.health} Speed:${this.speed} Strength:${this.strength}`);
        return true; // if not returning true it would be undefined because i'm not returning anything in a function
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}
const ninja1 = new Ninja("Naruto", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name, health){
        super(name,health)
        this.speed = 10;
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
    showStats(){
        const message = super.showStats();
        console.log(message);
    }
}

// example output
const superSensei = new Sensei("Jiraiya", 200);
console.log(`This sensei is named ${superSensei.name} and his wisdom is ${superSensei.wisdom}`);
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
