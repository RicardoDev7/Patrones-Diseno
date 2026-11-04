import { configManager } from './singleton/config-manager.ts';
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

configManager.setConfig('database_url', 'localhost:5432');
configManager.setConfig('api_key', 'your-api-key');

console.log(configManager.getConfig('database_url'));
console.log(configManager.getConfig('api_key'));
console.log(configManager.getAllConfigs());