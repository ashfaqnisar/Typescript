let a: string = "1";// this will provide us with the error
let b: number = 1;
let c: number = 3;

const addition = (x: number, y: number) =>{
    return x+y;
};

addition(c,b);
