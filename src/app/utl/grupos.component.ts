import { Component } from '@angular/core';
@Component({
    selector: 'app-grupo',
    template : `
    <h1>Hola Grupos</h1>
    <form action="">
        <label for="">Numero: </label>
        <input type="text" name="x" value="">
        <button class="btn btn-primary">Calcular</button>
    </form>`,
})
export class NameGrupo{
    constructor(){

    }
}