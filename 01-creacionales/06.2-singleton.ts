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

class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connected: boolean = false;

    // Constructor privado para evitar instancias directas
    private constructor() {

    }

    // Método estático para obtener la instancia única
    public static getInstance(): DatabaseConnection {
        if(!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
            console.log("%cDatabaseConnection instance created", COLORS.green);
        }
        return DatabaseConnection.instance;
    }

    // Método para conectar a la base de datos
    public connect(): void {
        if(!this.connected) {
            this.connected = true;
            console.log("%cDatabaseConnection connected", COLORS.blue);
            return;
        }
    }

    // Método para desconectar de la base de datos
    public disconnect(): void {
        if(this.connected) {
            this.connected = false;
            console.log("%cDatabaseConnection disconnected", COLORS.red);
            return;
        }
    }
}

function main() : void {
    const db1 = DatabaseConnection.getInstance();
    db1.connect();

    const db2 = DatabaseConnection.getInstance();
    db2.connect();

    console.log('Son iguales:', db1 === db2);

    db1.disconnect();

    db2.connect();
}

main();