export default abstract class Hero{
    private _name: string
    private _hp: number
    private _mana: number
    private _baseDamage: number

    constructor(name: string, hp: number, mana: number, baseDamage: number) {
        this._name = name;
        this._hp = hp;
        this._mana = mana;
        this._baseDamage = baseDamage;
    }

    receiveDamage(damage: number): void {
        this.hp -= damage
    }

    attack(hero: Hero): void {
        hero.receiveDamage(this.baseDamage)
    }

    heal(hero: Hero): void {
        hero.hp += this.mana/2
        this.mana -= this.mana/2
    }

    abstract skill1(hero: Hero): void

    abstract skill2(hero: Hero): void

    abstract skill3(hero: Hero): void

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get mana(): number {
        return this._mana;
    }

    set mana(value: number) {
        this._mana = value;
    }

    get baseDamage(): number {
        return this._baseDamage;
    }

    set baseDamage(value: number) {
        this._baseDamage = value;
    }
}