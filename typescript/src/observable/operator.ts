import {filter, map, Observable, of} from "rxjs";

const nums$: Observable<number> = of(1,2,3)

nums$.subscribe((data: number) => console.log({data}))

const mapOperator$: Observable<number> = nums$.pipe(map(x => x*x))
mapOperator$.subscribe((num: number) => console.log(num))

nums$.pipe(
    map(num => num * num),
    filter(num => num % 2 == 0)
).subscribe((even:number) => console.log({even}))
