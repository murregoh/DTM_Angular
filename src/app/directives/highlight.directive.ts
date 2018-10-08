import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') newColor: string;

  constructor( private elementRef: ElementRef ) {
    console.log('Directive called');
  }

  @HostListener('mouseenter') mouseOver() {
    console.log( this.newColor );
    this.highlight( this.newColor );
  }

  @HostListener('mouseleave') mouseLeave() {
    this.highlight( null );
  }

  private highlight( color: string = 'Yellow' ) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
