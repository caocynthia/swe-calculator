import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { ICalculatorState } from "../interfaces/calculator.state.model";
import { CalculatorModel } from "./calculator.model";
import { EnteringFirstOperand } from "./calculator.model.states.first";
import { EnteringThirdOperand } from "./calculator.model.states.third";

export class EnteringSecondOperand implements ICalculatorState {
    private constructor(){}
    private static theInstance: EnteringSecondOperand;
    private currentAns:number;
    
    static instance(c: ICalculatorModel): ICalculatorState {
        if (EnteringSecondOperand.theInstance === undefined) {
            EnteringSecondOperand.theInstance = new EnteringSecondOperand();
        }
        return EnteringSecondOperand.theInstance;
    }

    public enterNumber(c: ICalculatorModel): void {
        c.changeState(this);
    }

    public getCurrentAns() : number {
        return this.currentAns;
    }

    public enterPlus(c: CalculatorModel): void {
        c.changeState(EnteringFirstOperand.instance(c))
        this.currentAns = Number(c.firstOperand) + Number(c.secondOperand);
        c.currentAns = this.currentAns.toString();
    }

    public enterMinus(c: CalculatorModel): void {
        c.changeState(EnteringFirstOperand.instance(c));
        this.currentAns = Number(c.firstOperand) - Number(c.secondOperand);
        c.currentAns = this.currentAns.toString();
    }

    public enterMult(c: CalculatorModel): void {
        c.changeState(EnteringThirdOperand.instance(c));
        this.currentAns = Number(c.firstOperand) * Number(c.secondOperand);
        c.currentAns = this.currentAns.toString();
    }

    public enterDiv(c: CalculatorModel): void {
        c.changeState(EnteringThirdOperand.instance(c));
        this.currentAns = Number(c.firstOperand) / Number(c.secondOperand);
        c.currentAns = this.currentAns.toString();
    }

    // public enteringFirstOperand(c: ICalculatorModel): void {
    //     throw new Error("Method not implemented.");
    // }
    // public enteringSecondOperand(c: ICalculatorModel): void {
    //     throw new Error("Method not implemented.");
    // }
    // public enteringThirdOperand(c: ICalculatorModel): void {
    //     throw new Error("Method not implemented.");
    // }
}