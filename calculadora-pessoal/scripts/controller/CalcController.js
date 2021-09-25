class CalcController {

    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        // uso de underline (_) aplica-se em atributos privados, para controlar o acesso
        this.initialize();
    }

    initialize(){

        let displayCalcEl = doucment.querySelector("#display");
        let dateEl = docment.querySelector("#data");
        let timeEl = document.querySelector("#hora");

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get dataAtual(){
        return this._currentDate;
    }

    // set não precisa de return apenas atribuição do valor <---------------------
    set dataAtual(value){
        this._currentDate = value;  
    }

}
