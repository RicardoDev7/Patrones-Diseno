import { COLORS } from '../helpers/colors.ts';
/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 * 
 * * Es útil para mantener un historial de estados en aplicaciones interactivas.
 */

/**
 * 1. Completen el método copyWith en la clase Player para que pemita
 * crear una copia con cambios en name, score o level.
 * 
 * 2. Usen el código cliente para probar el funcionamiento de copyWith
 * haciendo cambios en el puntaje, nivel y nombre del jugador.
 */

// 1. Class Player inmutable
class Player {
    readonly name: string;
    readonly score: number;
    readonly level: number;

    constructor(name: string, score: number, level: number){
        this.name = name;
        this.score = score;
        this.level = level;
    }

    //Método copyWith para crear una copia modificada del jugador
    copyWith({name, score, level}: Partial<Player>): Player{
        return new Player(
            name ?? this.name,
            score ?? this.score,
            level ?? this.level
        );
    }

    displayState() : void {
        console.log(`\n%cJugador: ${this.name}`, COLORS.green);
        console.log(`%cPuntaje: ${this.score}`, COLORS.yellow);
        console.log(`%cNivel: ${this.level}`, COLORS.blue);
    }
}

// 2. Código cliente para probar
function main(){
    //Crear jugador inicial
    let player = new Player('Ricardo', 0, 1);
    console.log('Jugador inicial:');
    player.displayState();

    //Incrementamos puntaje
    player = player.copyWith({ score: 10 });
    console.log('\nJugador con puntaje incrementado:');
    player.displayState();

    //Subimos de nivel
    player = player.copyWith({ level: 2 });
    console.log('\nJugador subido de nivel:');
    player.displayState();

    //Cambio de nombre
    player = player.copyWith({ name: 'Martin' });
    console.log('\nJugador con nombre cambiado:');
    player.displayState();
}

main();