// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) {
       return driver.revenue > revenue 
    }
    )
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function(driver) {
       return  driver.name
    }
    )
}

function exactMatch(drivers, attributeAndValue){
    return drivers.filter(function(driver) {
        let matches = false 
       
        for (const key in attributeAndValue) {
          matches =  driver[key] === attributeAndValue[key]
        }
        return matches 
    }
    )
}

function exactMatchToList( drivers, attributeAndValue) {
    return exactMatch(drivers, attributeAndValue).map (function(driver) {
      return driver.name
    }
    )
}


