/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/design-patterns/prototype
 */

class Document {
    public title: string;
    private content: string;
    public author: string;

    constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    clone(): Document {
        return new Document(this.title, this.content, this.author);
    }

    displayInfo(){
        console.log(`
            Title: ${this.title}
            Content: ${this.content}
            Author: ${this.author}
         `);
    }
}

function main() : void {
    const document1 = new Document("Cotización", "500 dólares", "Ricardo");
    console.log({document1});
    document1.displayInfo();

    const document2 =  { ...document1 };
    document2.title = "Nueva cotización";
    console.log({document2});

    const document3 =  structuredClone(document1);
    document3.title = "Nueva cotización 2";
    console.log({document3});

    const document4 =  document1.clone();
    document4.title = "Nueva cotización 3";
    console.log({document4});
}

main();