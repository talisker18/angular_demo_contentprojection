import { Component, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="app-card">
    <!-- content projection: the parent component 'app-card-list' can send to several slots in child component. Here the slots are 'header', 'content' and 'footer' -->
    <ng-content select="header"></ng-content>
    <ng-content select="content"></ng-content>
    <ng-content select="footer"></ng-content>
  </div> 
   `,
   styles: [
    ` .card { min-width: 280px; margin: 5px; float:left} `
  ]
})
export class AppCardComponent implements AfterContentInit{
/* 

The cardContentHeader will not be available to use immediately. i.e because of Component lifecycle hooks. The angular initializes the component first. 
It then raises the ngOnChanges, ngOnInit & ngDoCheck hooks. The projected components are initialized next. And then Angular raises the AfterContentInit 
& AfterContentChecked hooks. Hence the cardContentHeader is available to use only after the AfterContentInit hook.

*/
  @ContentChild("header") cardContentHeader: ElementRef; //in the parent component 'app-card-list' we sent HTML content to our 3 slots 'header', 'content' and 'footer'. 
  //Additionally, on the 'header' element we use the local reference '#header' within h1 tag. We can now access the header value 

  //other example of ContentChild, but here we do not display the content on browser, we just access the value here in this component
  @ContentChild("someParagraph") someParagraph: ElementRef;

  constructor(){}

  ngAfterContentInit(){
    console.log('print card content header in ngAfterContentInit: '+this.cardContentHeader.nativeElement.textContent);
    console.log('print some paragraph content in ngAfterContentInit: '+this.someParagraph.nativeElement.textContent);
  }

}
