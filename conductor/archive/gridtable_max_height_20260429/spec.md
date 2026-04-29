# Specification: GridTable Maximum Height and Vertical Scrolling

## Overview
This feature introduces a `maxHeight` input to the `GridTableComponent` to constrain the table's height. When the content exceeds this height, a vertical scrollbar appears. To improve usability, the table header will remain "sticky" at the top during scrolling.

## Functional Requirements
- **Max Height Input**: Add a `maxHeight = input<string>()` signal to `GridTableComponent`.
- **Vertical Scrolling**: Enable `overflow-y: auto` when `maxHeight` is set.
- **Sticky Header**: Ensure the `.grid-table-header` elements remain visible at the top of the table container when scrolling down.
- **Independent/Combined Logic**: The `maxHeight` logic must coexist with the existing `maxWidth` logic without interference.
- **Demo Update**:
  - Add a new demo section in the demo app.
  - The new demo will include a `GridTable` with `maxHeight` set and 50 rows of data.
  - The sticky header behavior should be clearly visible.

## Acceptance Criteria
1. Setting `maxHeight` on `<grid-table>` constrains its height.
2. A vertical scrollbar appears when the table content is taller than `maxHeight`.
3. The table headers stay at the top of the container during vertical scrolling.
4. The new demo correctly displays 50 rows and the scroll behavior.

## Out of Scope
- Virtual scrolling.
- A dedicated demo showcasing `maxWidth` and `maxHeight` simultaneously (though the implementation will support it).
