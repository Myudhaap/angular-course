import {IHero} from "../interface/IHero";
import {Hitable} from "./hitable";

export class Hero2 implements IHero, Hitable {
    baseDamage: number;
    hp: number;
    mana: number;
    name: string;

    constructor(baseDamage: number, hp: number, mana: number, name: string) {
        this.baseDamage = baseDamage;
        this.hp = hp;
        this.mana = mana;
        this.name = name;
    }

    attack(target: IHero): void {
    }

    heal(hero: IHero): void {
    }

    receiveDamage(damage: number): void {
    }

    skill1(hero: IHero): void {
    }

    skill2(hero: IHero): void {
    }

    skill3(hero: IHero): void {
    }

}