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
  public currentOperand:number = 0;
  public firstOperand:number = 0;
  public secondOperand:number = 0;
  public thirdOperand:number = 0;
  public currentAns:number = 0;
  public finalAnswer:number = 0;

  public constructor() {
    this.state = EnteringFirstOperand.instance(this);
  }

  public display(): string {
    return this._buffer;
  }

  public changeState(state: ICalculatorState) : void {
    this.state = state;
    this.display();
    this.currentAns = this.state.getCurrentAns();
  }

  public enterPlus() : void {
    this.state.enterPlus(this);
  }

  public enterMinus() : void {
    this.state.enterMinus(this);
  }

  public enterMult() : void {
    this.state.enterMult(this);
  }

  public enterDiv() : void {
    this.state.enterDiv(this);
  }

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
    this.currentOperand = Number(this._buffer);
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
    switch (key) {
      case OperatorKeys.PLUS:
        this.state.enterPlus(this);
        console.log(this.firstOperand);
        break;
      case OperatorKeys.MINUS:
        this.state.enterMinus(this);
        break;
      case OperatorKeys.MULT:
        this.state.enterMult(this);
      case OperatorKeys.DIV:
        console.log(this.firstOperand);
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
        this._buffer = this.currentAns.toString();
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
