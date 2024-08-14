import Hero from "./hero";

export default class Warrior extends Hero{
    constructor(name: string, hp: number, mana: number, baseDamage: number) {
        super(name, hp * 2, mana, baseDamage * 1.2);
    }

    skill1(hero: Hero) {
        console.log(`${this.name} use skill 1`)
        hero.receiveDamage(this.baseDamage * 1.5)
    }


    skill2(hero: Hero) {
    }

    skill3(hero: Hero) {
    }
}