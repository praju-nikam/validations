/**
 * UC 1: Email Validation: Make sure at least three characters are present 
 */
 {
    let valid_email_id ="abc";
    let invalid_email_id  = "ab";

    // Atleast three characters should be present
    let regex = RegExp('[a-z]{3,}$');

    let result_valid_email_id = regex.test(valid_email_id);
    let result_invalid_email_id = regex.test(invalid_email_id);

    console.log("Result with valid email Id : "+ result_valid_email_id);      // Returns true
    console.log("Result with invalid email Id :"+ result_invalid_email_id);  // Returns false
}

/**
 * UC 2: Email validation: Make sure @ symbol and gmail after that is present
 */
 {
    let valid_email_id ="abc@gmail";
    let invalid_email_id1  = "abcgoogle";


    // Atleast three characters should be present
    let regex = RegExp('[a-z]{3,}?(@[a-z]{2,})$');

    let result_valid_email_id = regex.test(valid_email_id);
    let result_invalid_email_id1 = regex.test(invalid_email_id1);
    
    console.log("Result with valid email Id:"+ result_valid_email_id);      // Returns true
    console.log("Result with invalid email Id1:"+ result_invalid_email_id1);  // Returns false
   
}

/**
 * UC 3: Email validation: Make sure . and com after gmail are there
 */
 {
    let valid_email_id ="abc@gmail.com";
    let invalid_email_id1  = "abc@gmail.c";
   

    // Atleast three characters should be present
    let regex = RegExp('[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
    let result_valid_email_id = regex.test(valid_email_id);
    let result_invalid_email_id1 = regex.test(invalid_email_id1);
   
    console.log("Is valid email Id: "+ result_valid_email_id);      // Returns true
    console.log("Is valid email Id1:"+ result_invalid_email_id1);  // Returns false
    }

/**
 * UC 4: Email validation: There may be a certain special character(+-.-) before @ but alphanumeric 
 * characters must separate it from @ symbol
 */
 {
    let valid_email_id ="abc.xyz@gmail.com";
    let invalid_email_id1  = "abc.@gmail.c";  // No alphanumeric character after dot
   
    // Atleast three characters should be present
    let regex =  RegExp('[a-z]{3,}(.)([a-z_+-.]{3,})?(@[a-z]{2,})(.([a-z]{2,}))$');

    let result_valid_email_id = regex.test(valid_email_id);
    let result_invalid_email_id1 = regex.test(invalid_email_id1);
    
    console.log("Is email Id Valid: "+ result_valid_email_id);      // Returns true
    console.log("Is email Id1 Invalid: "+ result_invalid_email_id1);  // Returns false
    }
