export function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        return 'Enter letters only';
    }
    return '';
}

export function validateNumber(number) {
    const numberRegex = /^\d*$/;
    if (!numberRegex.test(number)) {
        return 'Enter numbers only';
    }
    return '';
}

export function validateRequired(value) {
    if (value.trim() === '') {
        return 'This field is required.';
    }
    return '';
}

export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return 'Enter a valid email address';
    }
    return '';
}


export function validateCheckBox(newArray) {
    // const emptyArray = newArray.every(item => item === "");

    if(!newArray.every(item => item === "")){
        return 'Select atleast one option'
    }
        return '';
}

// export function validateCheckBox(newArray) {
//     for(let i = 0; i < newArray.length; i++){

//     }
// }
// export function validateCheckBox(newArray) {
//     if (newArray.length === 0) {
//         return "Select at least one option";
//     } else if (newArray.slice(0, -1).length === 0 && newArray[newArray.length - 1] === "") {
//         return "Select at least one option or specify 'Other'";
//     } else {
//         return "";
//     }
// }
