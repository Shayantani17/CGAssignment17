// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
    for(let i = 0; i < 5; i++) {
        console.log(fibonacci(i));
    }