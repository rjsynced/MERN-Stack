function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
    console.log('first log')
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
                attempts++
                let result = tossCoin();
                    console.log(`${result} was flipped`);
                if (result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
                if ( headsCount === 5 ) {
                    resolve(`You reached 5 heads in a row! it only took ${attempts} tries`)
                } else if ( attempts > 100 ) {
                    reject(" sorry maybe next time ")
                }
            }
        })
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );