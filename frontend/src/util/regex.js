//login rules:
/*
username: 3-15 characters long, letters, numbers, underscore: ^\w+$
password: 8-255 characters long, must have: lower case letter, uppser case letter, numer and special character
email: x@x.x
*/
export const loginRule = {
    username: "^[a-zA-Z0-9_]{3,15}$",
    password: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,255}$",
    email: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$",
}

//other rules: