import { Component} from '@angular/core'

@Component({

    selector: 'app-body',
    templateUrl: 'body.component.html'
    
})

export class BodyComponent{

    mostrar = true;
    ocultar = false;

    frase:any = {
        mensaje:"Un gran poder conlleva una gran responsabilidad",
        autor: "Ben Parker"
    }

    dialogo:any={
        grito:"¡A La Guerraaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!",
        actor:"saruman"
    }

    personajes: string[]=["Spiderman", "Venom", "Octopus", "Thanos"]

    gatos: string[]=["Kagome", "Thomas", "Nala", "Logan"]
}