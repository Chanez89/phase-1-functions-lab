//test 1

let blocksInFeet = 264;
let headQuarters = 42;

let distanceFromHqInBlocks = (pickUpLocation) => {
    
    return Math.abs(pickUpLocation - headQuarters);
    //Another way to do this part
    
    //if (pickUpLocation > headQuarters){
   //     return pickUpLocation - headQuarters;
  //  } 
  //  else if (pickUpLocation < headQuarters){
  //      return headQuarters - pickUpLocation;
  //  }
  //  else {
  //      return 0;
   // }
}


//test2
let distanceFromHqInFeet = (startingBlock) => {
    
    let distanceTravelledInBlocks = distanceFromHqInBlocks(startingBlock);
    return distanceTravelledInBlocks * blocksInFeet;
}


//test3
let distanceTravelledInFeet = (startingBlock, destinationBlock) => {
    let distanceInBlocks = Math.abs(startingBlock - destinationBlock);
    return distanceInBlocks * blocksInFeet;
}


//test4
let calculatesFarePrice = (startingBlock, destinationBlock) => {
    let feetTravelled = distanceTravelledInFeet (startingBlock, destinationBlock);
    if(feetTravelled <= 400){
        return 0
    } else if (feetTravelled > 400 && feetTravelled <= 2000){
        return (feetTravelled - 400) * 0.02;

    }else if (feetTravelled > 2000 && feetTravelled <= 2500){
        return 25;

    } else{
        return 'cannot travel that far'
    }
}















/*
function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return someValue - 42;
    
    }
    else {
        return 42 - someValue;
    }

}

function distanceFromHqInFeet (someValue){
    if (someValue > 42){
        return (someValue - 42) * 264;
    
    }
    else {
        return (42 - someValue) * 264;
    }

}


function distanceTravelledInFeet (value1, value2){
    if (value2 > value1){
        return (value2 - value1) * 264;
    }
    else {
        return (value1 - value2) * 264;
    }

}

function calculatesFarePrice (value1, value2){
    if (value2 > value1){
        let feet = (value2 - value1) * 264
        if (feet <= 400){
            return 0
        }
        else if (feet > 400 && feet <= 2000){
            return .02 * (feet - 400) 
        }
        else if (feet > 2000 && feet <= 2500){
            return 25
        }
        else {
            return 'cannot travel that far'
        }
    }
    else{
        
        let feet = (value1 - value2) * 264
        if (feet <= 400){
            return 0
        }
        else if (feet > 400 && feet <= 2000){
             return .02 * (feet - 400) 
        }
        else if (feet > 2000 && feet <= 2500){
            return 25
        }
        else {
            return 'cannot travel that far'
        }
        
     }
}
*/

/* 
index.js
distanceFromHqInBlocks()
      1) returns a distance in blocks
      2) returns a distance in blocks
      3) calculates distances below 42nd street
    distanceFromHqInFeet()
      4) returns a distance in feet
      5) returns a distance in feet
      6) calculates distances below 42nd street
    distanceTravelledInFeet()
      7) returns the distance travelled in feet
      8) returns a distance in feet
      9) returns distance when destination is below distance
    calculatesFarePrice(start, destination)
      10) gives customers a free sample
      11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
      12) charges 25 dollars for a distance over 2000 feet
      13) does not allow rides over 2500 feet
      */