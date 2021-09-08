class Display {
    constructor(displayActual, displayAnterior){
        this.displayActual = displayActual;
        this.displayAnterior = displayAnterior;
        this.calculadora = new Calculadora;
        this.valorActual = '';
        this.valorAnterior = '';
        
        this.tipoOperacion = undefined;
        
        this.signo = {
            suma: "+",
            resta: "-",
            multiplicar: "x",
            dividir: "/"
        };
    }

    obtenerValores(num){
        if (num == "." && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual + num;
        this.imprimirValores();
    }

    imprimirValores(){
        displayActual.textContent = this.valorActual;
        displayAnterior.textContent = `${this.valorAnterior} ${this.signo[this.tipoOperacion] || ""}`;
    }

    borrar(){
        this.valorActual = this.valorActual.slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        displayActual.innerHTML = "";
        displayAnterior.innerHTML = "";
    }

    calcular(){
        let valorAnterior = parseFloat(this.valorAnterior);
        let valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
    }

    operacion(valor){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = valor;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
        this.calcular();
    }
}