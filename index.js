function findMatching (arrayOfDrivers, string) {
    const matchArray = [];
    
    for (const driver of arrayOfDrivers) {
        if (driver.toLowerCase() === string.toLowerCase()) {
            matchArray.push(driver);
        }
    } 

    return matchArray;
    
} 


function fuzzyMatch (arrayOfDrivers, string) {
    const matchArray = [];

    for (const driver of arrayOfDrivers) {
        if (driver[0] === string[0]) {
            matchArray.push(driver);
        }
    }
    return matchArray;
}

function matchName (arrayOfDriversObject, string) {
    const matchingDriver = [];

    for (const driver of arrayOfDriversObject) {
        if (driver.name ===  string) {
            matchingDriver.push(driver)
        }
    }
    return matchingDriver;
}