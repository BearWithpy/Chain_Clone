// let hello: string = "hello typescript!";
// console.log(hello);

const sayHi = (name: string, age: number, gender?: string): string => {
  return `${name},${gender},${age}`;
};

console.log(sayHi("Jason", 22, "male"));

export {};
