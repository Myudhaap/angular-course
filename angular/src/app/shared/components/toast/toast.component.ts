import {Component, OnDestroy} from '@angular/core';
import {ToastService} from "../../services/toast.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnDestroy {
  toasts: {message: string}[] = []
  private subscription!: Subscription

  constructor(
    private readonly toastService: ToastService
  ) {
    this.subscription = this.toastService.toastState$.subscribe(toast => {
      this.toasts.push(toast)
      setTimeout(() => {
        this.toasts = this.toasts.filter((t: {message: string}) => toast !== toast)
      }, 2000)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
