const chai = window.chai;
const expect = chai.expect;



describe("😺Gatetes en Javascript😺", () => {
    it("Ponle nombre al gatete", () => {
        
        // Hemos creado un objeto que representa
        // a un gatete, pero tenemos que ponerle nombre.
        
        let cat = {};


        expect(cat.name).to.equal("Sprinkles");
    });

    it("No hay dos gatos iguales", () => {

        // fíjate en los expect y crea los objetos
        // con todos sus atributos


        expect(garfield.name).to.equal("Garfield");
        expect(garfield.favouriteFood).to.equal("Lasaña");
        expect(princess.name).to.equal("Lady Princess");
    })
    
    it("Gatos haciendo cosas", () => {
        // Los objetos pueden tambien tener funciones dentro,
        // cuando una función está dentro de un objeto la llamamos 'método'.
        // Modifica los objetos añadiendo los métodos que faltan.
        let garfield = {};
        let princess = {};
        
        expect(garfield.sayHello()).to.equal("Hello, Jon");
        expect(princess.purr()).to.equal("Purrrr");
        expect(princess.talk()).to.equal("❤️");
    })
});


describe("🐸 Salto de la rana", () => {

    // Aunque, como hemos visto, Javascript nos permite crear objetos 'literales' usando {}
    // lo más habitual en los lenguajes orientados a objetos es definir una CLASE
    // para después crear objetos que son instancias de esta clase usando new

    // Define aquí la clase Frog y completa su definición para que los tests que hay en esta sección pasen ☑️
    // (debes definir la clase una sola vez)

    //////////////

    // class Frog {
    // 
    // }

    ///////////////

    it("La rana empieza en la posición inicial", () => {
        let frog = new Frog(); 

        expect(frog.getPosition()).to.equal(0);
    })

    it("La rana avanza 3 posiciones al saltar", () => {
        let frog = new Frog(); 

        frog.jump();

        expect(frog.getPosition()).to.equal(3);
    })

    it("La rana puede saltar varias veces, avanzando su posición", () => {
        let frog = new Frog(); 

        frog.jump();
        frog.jump();
        frog.jump();

        expect(frog.getPosition()).to.equal(9);
    })

    it("No se puede avanzar más allá de la posición 20, donde hay una pared", () => {
        let frog = new Frog(); 

        frog.jump();
        frog.jump();
        frog.jump();
        frog.jump();
        frog.jump();
        frog.jump();
        frog.jump();

        expect(frog.getPosition()).to.equal(20);
    })
})