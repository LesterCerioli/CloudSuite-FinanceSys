import { Entity } from "../../commons/Entity";


export class AccountIntroducingCompany extends Entity {
    cge?: number;
    partyName?: number;
    isSpecialLooker?: boolean;
    username?: string;

    constructor(cge?: number, partyName?: number, isSpecialLooker?: boolean, username?: string) {
        super(); // Ensures the base class constructor is called to initialize the id
        this.cge = cge;
        this.partyName = partyName;
        this.isSpecialLooker = isSpecialLooker;
        this.username = username;
    }

}

const accountCompany = new AccountIntroducingCompany(undefined, undefined, true, "user123");
console.log(accountCompany.id);