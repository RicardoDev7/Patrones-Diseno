import { COLORS } from '../helpers/colors.ts';
/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 * 
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objetivo de base de datos o en un
 * * objeto de configuración.
 * 
 * https://refactoring.guru/design-patterns/singleton
 */

class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor(){
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if(!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log("%cDragonBalls instance created", COLORS.green);
        }
        return DragonBalls.instance;
    }

    collectBall() : void {
        if(this.ballsCollected < 7){
            this.ballsCollected++;
            console.log("%cBall collected", COLORS.blue);
            return;
        }
        console.log("%cAll balls collected!", COLORS.yellow);
    }

    summonShenLong() : void {
        if(this.ballsCollected === 7){
            console.log("%cShen Long summoned!", COLORS.red);
            this.ballsCollected = 0;
            return;
        }
        console.log("%cCannot summon Shen Long. Missing balls.", COLORS.orange);
    }
}

function main() : void {
    const dragonBalls = DragonBalls.getInstance();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.summonShenLong();

    const dragonBalls2 = DragonBalls.getInstance();
    dragonBalls2.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls.collectBall();
    dragonBalls2.summonShenLong();
}

main();