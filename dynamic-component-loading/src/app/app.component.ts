import { 
  Component, 
  ViewChild, 
  ViewContainerRef, 
  ComponentFactoryResolver, 
  ComponentRef, 
  ComponentFactory } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dynamic-component-loading';
  componentRef:any;
  componentRefHero:any;

  @ViewChild('messagecontainer', {read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('herocontainer', {read: ViewContainerRef}) entryHero: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(message:string){
    this.entry.clear();   
    const factory = this.resolver.resolveComponentFactory(MessageComponent);   
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;     
  }

  createHeroComponent(content:string) {
    this.entryHero.clear();
    const factoryHero = this.resolver.resolveComponentFactory(HeroComponent);
    this.componentRefHero = this.entry.createComponent(factoryHero);
    this.componentRefHero.instance.content = content;
  }

  destroyComponent(){
    this.componentRef.destroy();
    this.componentRefHero.destroy();
  }
}
