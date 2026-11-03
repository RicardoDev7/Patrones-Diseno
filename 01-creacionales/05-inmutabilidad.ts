import { COLORS } from '../helpers/colors.ts';
/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 * 
 * * Es útil para mantener un historial de estados en aplicaciones interactivas.
 */

class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unSaveChanges: boolean;

    constructor(content: string, cursorPosition: number, unSaveChanges: boolean) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unSaveChanges = unSaveChanges;
    }

    copyWith({
        content,
        cursorPosition,
        unSaveChanges
    }: Partial<CodeEditorState>): CodeEditorState{
        return new CodeEditorState(
            content ?? this.content, 
            cursorPosition ?? this.cursorPosition, 
            unSaveChanges ?? this.unSaveChanges
        );
    }

    displayState(){
        console.log('\n%cEstado del editor:', COLORS.green);
        console.log('Contenido:', this.content);
        console.log('Posición del cursor:', this.cursorPosition);
        console.log('Cambios sin guardar:', this.unSaveChanges);
    }
}

class codeEditorHistory{
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    save(state: CodeEditorState) {
        if(this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1); 
        }
        this.history.push(state);
        this.currentIndex++;
    }

    redo(): CodeEditorState | null {
        if(this.currentIndex < this.history.length - 1){
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }
}