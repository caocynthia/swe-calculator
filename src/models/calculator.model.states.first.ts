import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { ICalculatorState } from "../interfaces/calculator.state.model";
import { CalculatorModel } from "./calculator.model";
import { EnteringSecondOperand } from "./calculator.model.states.second";

export class EnteringFirstOperand implements ICalculatorState {
    private constructor(){}
    private currentAns:number;
    private static theInstance: EnteringFirstOperand;
    
    static instance(c: ICalculatorModel): ICalculatorState {
        if (EnteringFirstOperand.theInstance === undefined) {
            EnteringFirstOperand.theInstance = new EnteringFirstOperand();
        }
        return EnteringFirstOperand.theInstance;
    }

    public enterNumber(c: ICalculatorModel): void {
        c.changeState(this);
    }

    public getCurrentAns(): number {
        return this.currentAns;
    }

    public enterPlus(c: CalculatorModel): void {
        c.changeState(EnteringSecondOperand.instance(c));
    }
    public enterMinus(c: CalculatorModel): void {
        c.changeState(EnteringSecondOperand.instance(c));
        // this.currentAns = c.firstOperand;
    }
    public enterMult(c: CalculatorModel): void {
        c.changeState(EnteringSecondOperand.instance(c));
        // this.currentAns = c.firstOperand;
    }
    public enterDiv(c: CalculatorModel): void {
        c.changeState(EnteringSecondOperand.instance(c));
        // this.currentAns = c.firstOperand;
    }
}