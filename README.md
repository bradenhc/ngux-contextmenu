# NGUX Context Menu

A simple right-click context menu for Angular 6 applications with support for Font Awesome icons
via the `@fortawesome/angular-fontawesome` module.

### Install using NPM

```
npm install @ngux/contextmenu --save
```

### Install using Yarn

```
yarn add @ngux/contextmenu
```

This package depends on the `@fortawesome/angular-fontawesome` package.

## Usage

The simplest way to use the context menu is first to *import* the `ContextMenuModule` in your
component module:

```typescript
import { ContextMenuModule } from '@ngux/contextmenu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    ...
    imports: [
        ...
        FontAwesomeModule,
        ContextMenuModule
    ]
    ...
})
export class AppModule {}
```

And then to *include* the context menu and triggers in your HTML file:

```html
<!-- Context menu trigger -->
<p nguxContextMenuTrigger>Right Click Me!!</p>

<!-- Context Menu Definition -->
<ngux-contextmenu>
    <ngux-contextmenu-item [text]="'Say Hello World'" (click)="sayHello()"></ngux-contextmenu-item>
    <ngux-contextmenu-item [text]="'Say Goodbye'" (click)="sayGoodbye()"></ngux-contextmenu-item>
</ngux-contextmenu>
```

You can also use the `nguxContextMenuTrigger` on multiple HTML elements to open a single context
menu definition from multiple triggers:

```html
<!-- Context menu trigger -->
<p nguxContextMenuTrigger>Right Click Me!!</p>
<span nguxContextMenuTrigger>Right Click Me Too!!</span>
<button nguxContextMenuTrigger>Right Click Me Three!!</button>

<!-- Context Menu Definition -->
<ngux-contextmenu>
    <ngux-contextmenu-item [text]="'Say Hello World'" (click)="sayHello()"></ngux-contextmenu-item>
    <ngux-contextmenu-item [text]="'Say Goodbye'" (click)="sayGoodbye()"></ngux-contextmenu-item>
</ngux-contextmenu>
```

If you want to customize the action for the context menu depending on which trigger element you
clicked on, you can simply register a `(contextmenu)` event listener on the trigger to set the
selected element and then reference that element inside of the `(click)` event listeners.

```html
<!-- Context menu trigger -->
<p nguxContextMenuTrigger (contextmenu)="selected = item1">Right Click Me!!</p>
<p nguxContextMenuTrigger (contextmenu)="selected = item2">Right Click Me!!</p>
<p nguxContextMenuTrigger (contextmenu)="selected = item3">Right Click Me!!</p>

<!-- Context Menu Definition -->
<ngux-contextmenu>
    <ngux-contextmenu-item [text]="'Introduce'" (click)="introduceSelected()"></ngux-contextmenu-item>
    <ngux-contextmenu-item [text]="'Dismiss'" (click)="dismissSelected()"></ngux-contextmenu-item>
</ngux-contextmenu>
```

There is plan for future support of a `[model]` property on the directive that will take care
of this for you, but it is currently not implemented.

### Scopes

The NGUX Context Menu simplifies defining context menus by using scopes to allow association between
context menus and their triggers. When a trigger with a set `[nguxScope]` property is right-clicked,
only the `ngux-contextmenu` element that has a matching scope will be opened. Two context menus
cannot have the same scope.

In the following example, right-clicking on the content between the `<p>` tags will open the context
menu, but right-clicking the content between the `<span>` tags will not.

```html
<!-- Context menu trigger -->
<p nguxContextMenuTrigger [nguxScope]="'myscope'">Right Click Me!!</p>
<span nguxContextMenuTrigger>Right Click Me Too!!</span>

<!-- Context Menu Definition -->
<ngux-contextmenu [scope]="'myscope">
    <ngux-contextmenu-item [text]="'Say Hello World'" (click)="sayHello()"></ngux-contextmenu-item>
    <ngux-contextmenu-item [text]="'Say Goodbye'" (click)="sayGoodbye()"></ngux-contextmenu-item>
</ngux-contextmenu>
```

### Context Menu Items

The context menu will only include `<ngux-contextmenu-item>` tags in the final result of the
menu. These components have three properties:

- `[text]` - the text that will be displayed
- `[icon]` - a valid `@fortawesome/angular-fontawesome` icon
- `[alias]` - smaller text to display on the far right of the context menu item

A complete example demonstrating all the current features of the NGUX Context Menu is given
below:

**`app.module.ts`**
```typescript
import { ContextMenuModule } from '@ngux/contextmenu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    ...
    imports: [
        ...
        FontAwesomeModule,
        ContextMenuModule
    ]
    ...
})
export class AppModule {}
```

**`app.component.ts`**
```typescript
import { Component } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  faGlobe = faGlobe;

  sayHello() {
    console.log("Hello World!");
  }

  sayGoodbye() {
    console.log("Goodbye!");
  }

  onButtonClick(): void {
    console.log("Button clicked!");
  }
}
```

**`app.component.html`**
```html
<!-- Various triggers to test -->
<p nguxContextMenuTrigger [nguxScope]="'scopeName'">Right Click Me!!</p>
<p nguxContextMenuTrigger>Right Click Me!!</p>
<button nguxContextMenuTrigger 
    [nguxScope]="'scopeName'" 
    (click)="onButtonClick()">
    Right Click Me!!
</button>

<!-- Context Menu Definition -->
<ngux-contextmenu [scope]="'scopeName'">
    <ngux-contextmenu-item 
        [icon]="faGlobe" 
        [text]="'Say Hello World'" 
        [alias]="'Ctrl + s'" 
        (click)="sayHello()">
    </ngux-contextmenu-item>
    <ngux-contextmenu-item [text]="'Say Goodbye'" (click)="sayGoodbye()"></ngux-contextmenu-item>
</ngux-contextmenu>
```