function Calculator() {
    this.display = document.querySelector('.display');
    this.init = () => {
        this.captureClick();
        this.captureEnter();
    };

    this.captureEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key === 13) {
                this.account();
            }
            
        });
    }
    this.captureClick = () => {
        this.display.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.dell();
            if (el.classList.contains('btn-eq')) this.equal();
        });
    };

    this.equal = () => {
        try {
            const account = eval(this.display.value);

            if(!account) {
                alert('Conta invalida');
                return;
            }
            this.display.value = account;
        } catch(e) {
            alert('Conta invalida');
            return;
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };    
    this.clear = () => this.display.value = '';
    this.dell = () => this.display.value = this.display.value.slice(0, -1);
    
}

const calculator = new Calculator();
calculator.init();