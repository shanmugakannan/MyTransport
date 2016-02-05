import {Directive,ElementRef,Input} from 'Angular2/core';
@Directive({
  selector : 'selectedStyle'
})

export class SelectedStyleDirective{
  constructor(ele:ElementRef){
     ele.nativeElement.style.backgroundcolor = 'grey';
  }
}
