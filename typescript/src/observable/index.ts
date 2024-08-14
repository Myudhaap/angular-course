import {Observable, Observer, Subscriber} from "rxjs";

class PromiseAndObservable{
    myObservable: Observable<any> | undefined
    myPromise: Promise<any> | undefined

    create(): void{
        this.myPromise = new Promise<string>((resolve, reject) => {
            console.log("Promise has created!")
            setInterval(()=> {
                resolve("Promise has emitted")
            }, 1000)
        })

        this.myObservable = new Observable<string>((observer: Subscriber<string>) => {
            console.log("Observer has created!")
            setInterval(() => {
                observer.next("Observer has emitted")
            }, 1000)
            // observer.complete()
        })
    }

    execute():void {
        this.myPromise?.then((data: string) => {
            console.log(data)
        })

        this.myObservable?.subscribe({
            next: (data: Observer<string>) => {
                console.log(data)
            },
            error: (err) => {
                console.log(err)
            },
            complete: () => {
                console.log("Observable has finished")
            }
        })
    }
}

const promiseAndObservable = new PromiseAndObservable();
promiseAndObservable.create()
promiseAndObservable.execute()

// setTimeout
// setInterval

function count(): void {
    setInterval(() => {
        console.log("PING")
    }, 1000)
}

count()