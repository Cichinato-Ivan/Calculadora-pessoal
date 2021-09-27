class CalcController {

    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        // uso de underline (_) aplica-se em atributos privados, para controlar o acesso
        this.initialize();
    }

    initialize(){

        this._dateEl.innerHTML = "27/09/21";
        this._timeEl.innerHTML = "21:30";

    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    // set não precisa de return apenas atribuição do valor <---------------------
    set currentDate(value){
        this._currentDate = value;  
    }

}
