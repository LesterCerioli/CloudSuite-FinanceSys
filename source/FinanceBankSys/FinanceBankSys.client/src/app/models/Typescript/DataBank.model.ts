import { Entity } from "../../commons/Entity";

export class DataBank extends Entity {
  private _bankCode?: string;
  private _branchNumber?: string;
  private _branchName?: string;
  private _digitBranch: string;
  private _accountNumber?: string;
  private _accountNumberDigit: string;

  constructor(
    digitBranch: string,
    bankCode?: string,
    branchNumber?: string,
    branchName?: string,
    accountNumber?: string,
    accountNumberDigit?: string
  ) {
    super();
    this._bankCode = bankCode;
    this._branchNumber = branchNumber;
    this._branchName = branchName;
    this._digitBranch = digitBranch;
    this._accountNumber = accountNumber;
    this._accountNumberDigit = accountNumberDigit || ''; // Default value for accountNumberDigit
  }

  get bankCode(): string | undefined {
    return this._bankCode;
  }

  get branchNumber(): string | undefined {
    return this._branchNumber;
  }

  get branchName(): string | undefined {
    return this._branchName;
  }

  get digitBranch(): string {
    return this._digitBranch;
  }

  get accountNumber(): string | undefined {
    return this._accountNumber;
  }

  get accountNumberDigit(): string {
    return this._accountNumberDigit;
  }
}

// Example usage:
// const bank = new DataBank("X", "001", "1234", "Main", "987654321", "Y");
