/*
********** Important note **********
you can search about anything using letters between the { curly_brackets }

this file contain next functions...

<<---- validation functions ---->>
1- function check the entered data length is more than 1 character { moreThanOneCHR }
2- common styles used inside the project as classes
3- styled function created with SCSS functions to include inside our components for faster designs

<<---- validation functions ---->>
*/

//function check the entered data length is more than 1 character after removing all side spaces
export const moreThanOneCHR = (val) => {
    return val.trim().length < 1;
}

// function check if the password contain [atleast one digit, atleast one small character, atleast one capital character, accept all letter from a to z and A to Z, length on the input must be not less than 8 letters]
export const passwordCheck = (val) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(val) ? true : 'please enter atleast (1 digit, 1 letter, 1 small letter, 1 capital letter) & password must be arleast 8 characters'
}

// function 