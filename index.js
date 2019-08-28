function produceDrivingRange( blockRange ) {
    return function ( startingBlock, endingBlock ) {
//I understand how everything works, but I don't understand where I would have gotten distanceToTravel variable or the difference variable, unless these are literally just made up, and I could have named these anything?
        let start = parseInt( startingBlock ); //turning it into an integer, since it was string, and we are initializing the start  variable
        let end = parseInt( endingBlock ); //we are doing the same thing to the ending block that we did to the starting block
        let distanceToTravel = Math.abs( end - start ); // what does the .abs method do?
        let difference = blockRange - distanceToTravel;

        if ( difference > 0 ) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`

        }
    }
}

function produceTipCalculator( percentage ) {
    return function ( rideFare ) {
        return rideFare * percentage;
    }
}

function createDriver(drivers) {
    let driverId = 0 //use let instead of const, because you want and need the driverId to change for every new driver 
    return class {
        constructor(name) {
            this.id = ++driverId //we use this.id because we are referring to the specific driver, and then we want to increase the entire driverId number which is why we are adding that to driver.Id, I thinkthat we could technically also just do plus 1 and it would work as well
            this.name = name //I guess we are using this though because we want the specific name as well, but if we did not want the name, and just wanted the count, that would be when we use one

        }
    }
}