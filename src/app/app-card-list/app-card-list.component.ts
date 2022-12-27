import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list',
  template: `
  <h1> Card List</h1>
  <app-card>
    <!--<h1 #header>Angular</h1>--> <!-- this won't work, we have to use the ng-content slot, so '<header>', see bellow-->
    <header><h1 #header>Angular</h1></header>
    <content>One framework. Mobile & desktop.</content>
    <footer><b>Super-powered by Google </b></footer>
    <p #someParagraph>some paragraph in angular card</p> <!--this will not be displayed on browser because it is not linked to a ng-content element -->
  </app-card>
  <app-card>
    <header><h1 #header style="color:red;">React</h1></header>
    <content>A JavaScript library for building user interfaces</content>
    <footer><b>Facebook Open Source </b></footer>
    <p #someParagraph>some paragraph in react card</p> <!--this will not be displayed on browser because it is not linked to a ng-content element -->
  </app-card>
  <app-card>
    <header> <h1 #header>Typescript</h1> </header>
    <content><a href="https://www.tektutorialshub.com/typescript-tutorial/"> Typescript</a> is a javascript for any scale</content>
    <footer><i>Microsoft </i></footer>
    <p #someParagraph>some paragraph in Typescript card</p> <!--this will not be displayed on browser because it is not linked to a ng-content element -->
  </app-card>
  `,
})
export class AppCardListComponent {

}