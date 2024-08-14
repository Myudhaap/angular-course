import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {gsap} from "gsap";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit{
  @ViewChild('progressBar', {static: true}) progressBar!: ElementRef

  ngOnInit(): void {
    this.updateProgress()
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    this.updateProgress()
  }

  private updateProgress(){
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (scrollTop / docHeight) * 100

    console.log(scrollPercent)
    console.log({docHeight})

    gsap.to(this.progressBar.nativeElement, {
      width: `${isNaN(scrollPercent) ? 0 : scrollPercent}%`,
      duration: .2,
      ease: 'power1.out'
    })
  }

}
