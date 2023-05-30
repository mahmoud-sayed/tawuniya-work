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
    const spacesRemoved = val.trim();
    return spacesRemoved.length < 1;
}