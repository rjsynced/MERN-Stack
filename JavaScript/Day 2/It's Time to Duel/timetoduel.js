class Card {
    constructor(cardName, cost){
        this.cardName = cardName;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(cardName, cost, power, res){
        super(cardName, cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        // reduce target res by power
    }
    showStats(){
        console.log(`Name:${this.cardName} Cost:${this.cost} Power:${this.power} Res:${this.res}`)
        return;
    }
}

class Effect extends Card {
    constructor(cardName, cost, text, stat, magnitude){
        super(cardName, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    play( target ) {
        if( target instanceof Unit ) {
            if ( this.stat == "resilience" ) {
                target.res += this.magnitude;
                console.log(this.text)
            }
        } 
            else if ( this.stat == "power" ) {
                target.power += this.magnitude;
                console.log(this.text)
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const ninja1 = new Unit("Red Belt Ninja", 3, 3, 4);
const ninja2 = new Unit("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduces target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
// ninja1.showStats();
// ninja2.showStats();
effect3.play(ninja2);
console.log(ninja2);