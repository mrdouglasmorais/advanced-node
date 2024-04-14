class Person {
  speak( name?: string): string {
    return `Olá, ${name || 'fulado'}!`;
  }
}


const p = new Person();
console.log(p.speak('Douglas'));
console.log(p.speak());