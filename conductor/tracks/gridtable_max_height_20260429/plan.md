# Implementation Plan: GridTable Maximum Height and Vertical Scrolling

## Phase 1: Implement `maxHeight` and Sticky Header [checkpoint: 4956ff4]
- [x] Task: Add `maxHeight` input and update styles. dabbe64
  - [ ] Write failing test for `maxHeight` input.
  - [ ] Add `maxHeight = input<string>()` to `GridTableComponent`.
  - [ ] Update `grid-table.html` to bind `[style.max-height]="maxHeight()"`.
  - [ ] Update `grid-table.scss` to add `overflow-y: auto`.
  - [ ] Implement sticky header in `grid-table.scss` using `position: sticky` and `top: 0` on `.grid-table-header`.
- [x] Task: Verify unit tests pass. dabbe64
- [x] Task: Conductor - User Manual Verification 'Phase 1: Implement maxHeight and Sticky Header' (Protocol in workflow.md) 4956ff4

## Phase 2: Add Vertical Scroll Demo [checkpoint: 114bd17]
- [x] Task: Add large dataset for demo. c93ee79
  - [ ] Update `src/app/app.ts` to generate 50 rows of data.
- [x] Task: Add new demo table to `app.html`. f593f2f
  - [ ] Add a new section with `<grid-table [values]="longValues()" maxHeight="400px">`.
- [x] Task: Verify visually in the browser. f593f2f
- [x] Task: Conductor - User Manual Verification 'Phase 2: Add Vertical Scroll Demo' (Protocol in workflow.md) 114bd17
