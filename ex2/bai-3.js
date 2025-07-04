function fizzBuzz(input) {
    switch (true) {
        case (typeof input !== 'number'):
            return "Not a number";
        case (input % 3 === 0 && input % 5 === 0):
            return "FizzBuzz";
        case (input % 3 === 0):
            return "Fizz";
        case (input % 5 === 0):
            return "Buzz";
        default:
            return input;
    }
}