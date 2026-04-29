# Implementation Plan: GridTable Maximum Width and Horizontal Scrolling

## Phase 1: Implement `maxWidth` Input on GridTable
- [ ] Task: Add `maxWidth` input to `GridTableComponent`.
    - [ ] Write failing test for new `maxWidth` input.
    - [ ] Update `projects/gridtable/src/lib/grid-table/grid-table.ts` to add `maxWidth = input<string>()`.
    - [ ] Update `projects/gridtable/src/lib/grid-table/grid-table.html` to bind `[style.max-width]` or a CSS variable to the `maxWidth` input.
    - [ ] Update `projects/gridtable/src/lib/grid-table/grid-table.scss` to ensure `overflow-x: auto` is active so the table can scroll.
    - [ ] Run tests and ensure they pass.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Implement `maxWidth` Input on GridTable' (Protocol in workflow.md)

## Phase 2: Add Secondary Demo Table
- [ ] Task: Update Demo Application with a new Horizontal Scroll Table.
    - [ ] Update `src/app/app.ts` to include the extra mock data for 'Phone', 'Email', 'Address', 'City', 'Country', 'Zip Code'.
    - [ ] Update `src/app/app.html` to add a second `<lib-grid-table>` utilizing `maxWidth="600px"` (or a similar constraining value) along with the new columns.
    - [ ] Run the demo application and visually verify the horizontal scrollbar functionality.
    - [ ] Ensure existing E2E/Unit tests pass.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Add Secondary Demo Table' (Protocol in workflow.md)
