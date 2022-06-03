// CIT 281 Lab 7
// Garrett Arnold

class CustomError extends Error { 
    constructor(msg) {
        super(msg);
        this.name = "Custom error";
    };

};

function throwGenericError() {
    console.log("Force generic error")
;    throw new Error("Generic Error");
}

function throwCustomError() {
    throw new Error("Custom error")
}

// Generic Error 
try {
    console.log("Generic error try block");
    throwGenericError()
}
catch (err) {
    console.log(err.message + " catch block")
    console.log("Error: " + err.message)
}

finally {
    console.log("Generic error finally block");
}

// Custom Error

try {
    console.log("Custom error try block");
    throwCustomError()
}
catch (err) {
    console.log(err.message + " catch block")
    console.log("Error: " + err.message)
}

finally {
    console.log("Custom error finally block");
}