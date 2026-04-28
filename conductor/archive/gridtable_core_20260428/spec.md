# Specification: Implement core GridTable component with CSS Grid sizing and template support

## Overview
Build an Angular 21 component `GridTableComponent` (`<grid-table>`) that utilizes CSS Grid instead of standard HTML table elements (`<table>`, `<tr>`, `<td>`). The primary goal is to provide advanced column width controls (default, min, max) and allow consumers to define custom templates for both headers and rows.

## Requirements
- **Framework**: Angular 21 (using Signals, input/output APIs).
- **Core Structure**:
  - `GridTableComponent` (`<grid-table>`): The main container.
  - `GridColumnComponent` (`<column>`): Declarative component to define columns.
- **Features**:
  - Render an array of objects passed via `values` input.
  - Custom cell rendering via `#row` `ng-template`.
  - Custom header rendering via `#header` `ng-template`.
  - Column sizing inputs: `defaultWidth`, `minWidth`, `maxWidth`.
  - Overall table width control.
- **Styling**:
  - Agnostic/Unstyled base using SCSS.
  - Strict separation of concerns (external `.html` and `.scss` files).

## Demo Application
- Include an Angular workspace setup with an application that showcases the component using static data and demonstrating the custom templates and sizing features.