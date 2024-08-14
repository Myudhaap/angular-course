export interface IHero {
    name: string
    hp: number
    mana: number
    baseDamage: number
    attack(target: IHero): void
    receiveDamage(damage: number): void
    heal(hero: IHero): void
    skill1(hero: IHero): void
    skill2(hero: IHero): void
    skill3(hero: IHero): void
}