# Initial Concept

Je veux créer un composant Angular GridTable, le même nom que le directory. Ce composant servira à créer des tableaux. Ah, mais à la différence des composants pour faire des tableaux classiques, je ne veux pas utiliser les éléments « table » de HTML parce qu'ils sont trop limités. Je veux, à la place, utiliser, des CSS Grid. L'utilisation du composant pourrait ressembler à ceci : 
```html
<grid-table values="values()">
  <column attribute="name">
    <ng-template #header>Name</ng-template>
    <ng-template #row>{{ item.name }}</ng-template>
  </column>
  <column attribute="firstName">
    <ng-template #header>First Name</ng-template>
    <ng-template #row>{{ item.firstName }}</ng-template>
  </column>
  <column attribute="age">
    <ng-template #header>Age</ng-template>
    <ng-template #row>{{ item.age }}</ng-template>
  </column>
  <column>
    <ng-template #row>
      <button (click)="deleteItem(item)">Delete</button>
    </ng-template>
  </column>
</grid-table>
```
On va garder ça simple comme ça pour la première version. Faut pas oublier qu'on utilise Angular version 21. On doit utiliser le plus possible toutes les dernières technologies, les signals, les API d'input/output, et cetera. C'est un composant avec lequel je veux en faire une librairie qui pourra être utilisée par d'autres projets. donc, je voudrais avoir le composant lui-même, mais aussi, « directory » avec des exemples et de la documentation.

## Target Audience
Open Source - Aimed at developers looking for a flexible, reusable table component utilizing modern Angular features.

## Core Features
- **Advanced Column Sizing**: The primary motivation for this component. Complete control over minimum, maximum, and default column widths. The table supports optional `maxWidth` and `maxHeight` constraints, with automatic scrolling and sticky headers when content exceeds these limits, overcoming the limitations of standard HTML tables through CSS Grid.
- **Footer Support & Index Exposure**: Support for full-width and per-column footers with `colspan` capabilities. Exposes row index to column templates for advanced row-level logic and identifiers.
- **Sort & Filter**: Built-in column sorting and data filtering capabilities.
- **Pagination**: Support for splitting large datasets across multiple pages.

## Documentation & Examples
**Demo App** - A simple Angular workspace application serving as a live demo and showcase alongside the library code.

## API Design Philosophy
**High Customizability** - Focus on providing numerous `ng-template`s, modern Angular `input()` and `output()` signals for complete visual and functional control via CSS Grid.