class Pet {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    print() {
        console.log("here in Pet");
    }
}

class Cat extends Pet {
    constructor(a, b, c, d) {
        super(a, b, c);
        this.d = d;
    }
    printNew() {
        const { a, b, c } = this;
        const str = `Im here ${a} , ${b} , ${c} in Cat`
        console.log(str);
    }
}

class Dog extends Pet {
    print() {
        console.log("in Dog");
    }
}

const myCat = new Pet(1, 2, 3)

console.log(myCat);
myCat.print()

const newCat = new Cat(4, 5, 6, 7)
console.log(newCat);
newCat.printNew()