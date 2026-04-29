# Specification: GridTable Maximum Width and Horizontal Scrolling

## Overview
This feature introduces a `maxWidth` input to the `GridTableComponent` to constrain the table's overall width. When the sum of the columns' widths exceeds the specified maximum width, a horizontal scrollbar will appear, ensuring the table remains usable and responsive within its container without breaking the layout.

## Functional Requirements
- **Max Width Input**: Introduce a new `maxWidth` `input<string | undefined>` to the `GridTableComponent` to define a fixed limit (e.g., `'800px'`, `'100%'`).
- **Default Behavior**: If `maxWidth` is not provided, the table should span 100% of its parent container, matching the current unconstrained behavior.
- **Horizontal Scrolling**: The table or its container will utilize `overflow-x: auto` so that a horizontal scrollbar appears when the table's total content width exceeds the applied maximum width.
- **Demo Updates**:
    - The existing GridTable demo will remain exactly as it is.
    - A new, secondary demo table will be added underneath the current one.
    - This new table will utilize the `maxWidth` input and include additional columns ('Phone', 'Email', 'Address', 'City', 'Country', 'Zip Code') specifically designed to exceed the max width and visually showcase the horizontal scrollbar.

## Acceptance Criteria
1. The `GridTableComponent` accepts a `maxWidth` string signal input.
2. The CSS rules accurately enforce the `maxWidth` on the table.
3. A horizontal scrollbar appears at the bottom of the table when the columns exceed the viewable area constrained by `maxWidth`.
4. The demo application successfully renders both the current and the newly added horizontal scroll demo.
