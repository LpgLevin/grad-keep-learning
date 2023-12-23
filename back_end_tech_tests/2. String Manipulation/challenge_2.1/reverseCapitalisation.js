const reverseCapitalisation = (string) => {

    // Takes a string which could have letters of any cases

    // returns a string with each letter having changed case

    //-----------------PLAN------------------

    // Turn it into an array

    const stringArray = string.split('');
    // console.log(stringArray);

    // find out what case each individual letter is

    for(let i = 0; i < stringArray.length; i++){

        if(stringArray[i] === stringArray[i].toUpperCase()){
            stringArray[i] = stringArray[i].toLowerCase();
        } else {
            stringArray[i] = stringArray[i].toUpperCase();
        };

    };


    
    // change the case of the individual letter without know what letter it is or what the case is

        // something which changes cases indiscriminately
        // OR case detector to use in an if statement


    // put the elements back into a string

    const finalString = stringArray.join('');
    //return the string
    
    return finalString;
    //----------------------
    
}

module.exports = reverseCapitalisation;