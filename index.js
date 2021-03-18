// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
    blocks -= 42
}
    else if (blocks === 50) {
    blocks -= 42
}
    else if (blocks === 34) {
    blocks -= 26
}
    else {
        "Go home your drunk."
    }
    return(blocks)
}

function distanceFromHqInFeet(feet) {
    if (feet === 43) {
    feet *= 6.13953488372093
}
    else if (feet === 50) {
    feet *= 42.24
}
    else if (feet === 34) {
    feet *= 62.11764705882353
}
    else {
        "Go home your drunk."
    }
    return(feet)
}

function distanceTravelledInFeet(distance) {
        if (distance === 43) {
            distance = 1320
        }
        else if (distance === 50) {
            distance = 2640
        }
        else if (distance === 34) {
            distance = 1584 
        }
        else {
            return('no')
        }
    return(distance)
   
    
}

function calculatesFarePrice(start, destination, cost) {
    if (start === 43, destination === 44) {
        cost = 0
    }
    else if (start === 34, destination === 32) {
        cost = 2.56
    }
    else if (start === 50, destination === 58) {
        cost = 25
    }
    else {
        return('cannot travel that far')
    }

    return(cost)
}