import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  HEADER_HEIGHT: number = 60;
  private startPos: number = 0;
  headerPos: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log('aaas')
    let currentPos = this.document.body.scrollTop;
    if(currentPos > this.startPos) {
      if(this.document.body.scrollTop >= this.HEADER_HEIGHT) {
        this.headerPos = -this.HEADER_HEIGHT;
      }
    } else {
      this.headerPos = 0;
    }
    this.startPos = currentPos;

  }

  onScrolla(): void {
    console.log('test')
  }
}
