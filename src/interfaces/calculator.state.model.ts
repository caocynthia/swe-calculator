import { CalculatorModel } from "../models/calculator.model";
import { ICalculatorModel } from "./calculator-model.interface";

/**
 * Represents the state of the calculator
 */
export interface ICalculatorState {
    // enteringFirstOperand(c:ICalculatorModel): void;
    
    // enteringSecondOperand(c: ICalculatorModel): void;
    
    // enteringThirdOperand(c: ICalculatorModel): void;

    enterPlus(c: CalculatorModel): void;
    enterMinus(c: CalculatorModel): void;
    enterMult(c: CalculatorModel): void;
    enterDiv(c: CalculatorModel): void;

    // enterNumber(c: CalculatorModel): void;

    // enterOperator(c: ICalculatorModel): void;

    getCurrentAns(): number;
}