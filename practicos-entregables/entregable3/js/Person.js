"use strict";

class Person {
    constructor (persona, clases, avatar){
        this.persona = persona;
        this.clases = clases;
        this.avatar = avatar;
    }
    
    CargarPerson (){
        this.persona.style.background = 'url('+this.avatar.imgR+')';
        this.persona.className= this.clases.classR;
    }

    static press_key (e) {
        let persona = document.getElementById("person");
        if (e.keyCode == '38'){
            if(dead.Estadodead == false){ // si el personaje sigue vivo las teclas hacen esta accion , 
                //cuando el personaje muere el valor de la constante cambia y las teclas quedan sin funcionalidad
                persona.style.background = 'url('+avatar.imgU+')';
                persona.className= Clases.classU;
            }
        }
        if (e.keyCode == '40'){
            if(dead.Estadodead == false){
                persona.style.background = 'url('+avatar.imgD+')';
                persona.className= Clases.classD;
            }
        }
    }

}
