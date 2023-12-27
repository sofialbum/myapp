exports.helloWorld = () => {
    return 'hello world';
}

exports.sumar = (num1, num2) => {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error('Los valores deben ser numeros');
    } 

    return num1 + num2;
} 