import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { ICalculatorState } from '../interfaces/calculator.state.model';
import { EnteringFirstOperand } from './calculator.model.states.first';

export class CalculatorModel implements ICalculatorModel {

  private state: ICalculatorState;

  private _buffer: string = '';

  //store first operand, second operand, etc.
  public _operands: Array<string> = [];

  public firstOperand:number = 0;
  public secondOperand:number = 0;
  public firstOperator:string = '';

  public constructor() {
    this.state = EnteringFirstOperand.instance(this);
  }

  public display(): string {
    return this._buffer;
  }

  public changeState(state: ICalculatorState) : void {
    this.state = state;
    this.display();
  }

  public getFirstOperand() : number {
    return this.firstOperand;
  }

  public getFirstOperator() : string {
    return this.firstOperator;
  }

  public getSecondOperand() : number {
    return this.secondOperand;
  }

  public setFirstOperand(num:number) : void {
    this.firstOperand = num;
  }

  public setFirstOperator(op:string) : void {
    this.firstOperator = op;
  }

  public setSecondOperand(num:number) : void {
    this.secondOperand = num;
  }

  // public enterPlus(key: OperatorKeys) : void {
  //   this.state.enterPlus(this);
  // }

  // public enterMinus() : void {
  //   this.state.enterMinus(this);
  // }

  // public enterMult() : void {
  //   this.state.enterMult(this);
  // }

  // public enterDiv() : void {
  //   this.state.enterDiv(this);
  // }

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._operands.push(this._buffer);
    this.firstOperand = parseFloat(this._operands.shift());
    this._buffer = '';

    switch (key) {
      case OperatorKeys.PLUS:
        this.state.enterPlus(this);
        break;
      case OperatorKeys.MINUS:
        this.state.enterMinus(this);
        break;
      case OperatorKeys.MULT:
        this.state.enterMult(this);
      case OperatorKeys.DIV:
        console.log(this._operands);
        this.state.enterDiv(this);
      default:
        throw new Error('Invalid Action');
    }
  }

  public pressActionKey(key: ActionKeys): void {
    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        break;
      case ActionKeys.EQUALS:
        this._buffer = this.state.getCurrentAns().toString();
      default:
        throw new Error('Invalid Action');
    }
  }

  // private _operands: Array<string> = [];
  
  // private _operators: Array<OperatorKeys> = [];

  // public pressNumericKey(key: NumericKeys): void {
  //   this._buffer += key;
  // }

  // public pressOperatorKey(key: OperatorKeys): void {
  //   this._operators.push(key);
  //   this._operands.push(this._buffer);
  //   this._buffer = '';
  // }

  // public pressActionKey(key: ActionKeys): void {
  //   switch (key) {
  //     case ActionKeys.CLEAR:
  //       this._buffer = '';
  //       this._operands = [];
  //       this._operators = [];
  //       break;
  //     case ActionKeys.DOT:
  //       this._buffer += '.';
  //       break;
  //     case ActionKeys.EQUALS:
  //       this._operands.push(this._buffer);
  //       if (this._operators.length !== this._operands.length - 1) {
  //         this.pressActionKey(ActionKeys.CLEAR);
  //         break;
  //       }
  //       this._buffer = this.evaluate();
  //       break;
  //     default:
  //       throw new Error('Invalid Action');
  //   }
  // }


  // private evaluate(): string {

  //   while(this._operators.length > 0) {
  //     const operator: OperatorKeys = this._operators.shift();
  //     const operandOne: number = parseFloat(this._operands.shift());
  //     const operandTwo: number = parseFloat(this._operands.shift());
      
  //     switch(operator) {
  //       case OperatorKeys.PLUS:
  //         this._buffer = (operandOne + operandTwo).toString();
  //         break;
  //       case OperatorKeys.MINUS:
  //         this._buffer = (operandOne - operandTwo).toString();
  //         break;
  //       case OperatorKeys.MULT:
  //         this._buffer = (operandOne * operandTwo).toString();
  //         break;  
  //       case OperatorKeys.DIV:
  //         this._buffer = (operandOne / operandTwo).toString();
  //         break;
  //       default:
  //         break;
  //     }
  //     this._operands.unshift(this._buffer);
  //   }
  
  //   return this._operands.shift();

  // }

}
