const toggleDoors = (n) => {

//--------------------Info & notes---------------------

// n = number representing how many doors we pass by
    //all doors initially closed

// we will walk past all the doors 'n' times
    // does toggle mean open in this case?
    // if so, we open all the doors on the first pass

// 1st pass - open all doors
// 2nd pass - close every 2nd door
// 3rd pass - close/open every 3rd door
    // if open, close it, if closed, open it etc

// this continues until we only toggle the final door on the nth pass

// returns an array of the indexes of the doors that are open




//--------------------Steps-------------------------

// create array of n 1s to hold doors
    // 1 represents open, 0 represents closed
// create loop to iterate from 1 to 'n' (the number passed in), pushing a 1 into the doors array for each iteration

const doors = Array(n).fill(1);

//  for(let i = 0; i < n; i++){
//     doors.push(1);
//  };

 console.log(doors, doors.length);


// iterate through the doors array closing every second door (changing it to a zero)

for(let i = 1; i < n; i += 2) {
    
}

//then every 3rd door

//then every 4th

// until you get to every nth door (so you only close the final door) by changing it to zero

// return the indexes of all the remaining open doors (1s)

};

module.exports = toggleDoors;