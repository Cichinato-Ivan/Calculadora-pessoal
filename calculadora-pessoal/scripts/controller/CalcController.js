class CalcController {

    constructor(){

        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "07/01/2022";
        timeEl.innerHTML = "00:00";
        
    }

    get displayCalc(){

        return this._displayCalc;

    }

    set displayCalc(value){

        this._displayCalc = value;

    }

    get currentDate(){

        return this._dataAtual;

    }

    set currentDate(value){

        this._currentDate = value;

    }

}
