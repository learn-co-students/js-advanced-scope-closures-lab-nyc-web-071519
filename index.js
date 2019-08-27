function produceDrivingRange(blockRange) {
    return function(range1, range2) {
      let newRange1 = Number(range1.slice(0, -2));
      let newRange2 = Number(range2.slice(0, -2));
      let range =  Math.abs(newRange2 - newRange1)
      if (blockRange >= range) {
        return `within range by ${blockRange - range}`
      }
      else {
        return `${range - blockRange} blocks out of range`
      }
  }
}

function produceTipCalculator(tip){
    return function(fare){
        return fare * tip;
    }
}

function createDriver(){
    let driverId = 0;
    // return the class
    return class {
      constructor(name) {
        this.name = name;
        this.id = ++driverId;
      }
    };
}
