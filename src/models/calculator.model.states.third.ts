import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { ICalculatorState } from "../interfaces/calculator.state.model";
import { CalculatorModel } from "./calculator.model";
import { EnteringFirstOperand } from "./calculator.model.states.first";
import { EnteringSecondOperand } from "./calculator.model.states.second";

export class EnteringThirdOperand implements ICalculatorState {
    private constructor(){}

    private static theInstance: EnteringThirdOperand;
    private currentAns:number;
    
    static instance(c: ICalculatorModel): ICalculatorState {
        if (EnteringThirdOperand.theInstance === undefined) {
            EnteringThirdOperand.theInstance = new EnteringThirdOperand();
        }
        return EnteringThirdOperand.theInstance;
    }

    public enterNumber(c: ICalculatorModel): void {
        c.changeState(this);
    }

    // public enterOperator(c: ICalculatorModel): void {
    //     c.changeState(EnteringFirstOperand.instance(c));
    // }

    public getCurrentAns() : number {
        return this.currentAns;
    }

    public enterPlus(c: CalculatorModel): void {
        c.changeState(EnteringFirstOperand.instance(c));
    }

    public enterMinus(c: CalculatorModel): void {
        c.changeState(EnteringFirstOperand.instance(c));
    }

    public enterMult(c: CalculatorModel): void {
        c.changeState(EnteringSecondOperand.instance(c));
    }

    public enterDiv(c: CalculatorModel): void {
        c.changeState(EnteringSecondOperand.instance(c));
    }
}