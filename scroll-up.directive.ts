import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
    selector: '[appScrollUp]',
    providers: [
        { provide: Window, useValue: window }
    ]
})
export class ScrollUpDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2, private window: Window) { }

    // scrolling the top of the body
    @HostListener('click', ['$event']) onClick(event: any) {
        this.window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // showing and closing the button of scrolling up, when the scroll height from the top more than 300px
    @HostListener('window:scroll', ['$event']) onScroll(event: any) {
        if (event.target.documentElement.scrollTop > 300) {
            this.renderer.addClass(this.elementRef.nativeElement, 'show')
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'show')
        }
    }

}
