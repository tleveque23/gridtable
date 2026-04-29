# Implementation Plan: GridTable Footer and Index Exposure

## Phase 1: Row Index Exposure
- [x] Task: Update `GridColumnComponent` and `GridTableComponent` to expose row index. 8719393
  - [ ] Write failing test for row index exposure in `grid-column.spec.ts`.
  - [ ] Update `grid-table.html` to pass the loop index `$index` to the column's row template context.
  - [ ] Verify unit tests pass.
- [x] Task: Update Demo Table 1. 8719393
  - [ ] Update `src/app/app.html` to use `let-index="index"` and set `[id]="item.name + '-' + index"` on the delete button.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Row Index Exposure' (Protocol in workflow.md)

## Phase 2: Full-Width Footer
- [ ] Task: Create `GridTableFooterComponent`.
  - [ ] Write failing test for `GridTableFooterComponent` projection and sticky behavior.
  - [ ] Generate `GridTableFooterComponent` with `sticky = input<boolean>(false)`.
  - [ ] Update `GridTableComponent` to support footer projection.
  - [ ] Add SCSS for footer positioning and sticky behavior.
  - [ ] Verify unit tests pass.
- [ ] Task: Add Demo Table 3 (Full-Width Footer).
  - [ ] Add `longValues` (or similar) to Table 3 in `app.html` with a `lib-grid-table-footer`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Full-Width Footer' (Protocol in workflow.md)

## Phase 3: Column-Based Footer and Colspan
- [ ] Task: Implement Column-Based Footer templates.
  - [ ] Write failing test for per-column footer rendering and `footerColspan`.
  - [ ] Add `footerTemplate = contentChild<TemplateRef<any>>('footer')` and `footerColspan = input<number>(1)` to `GridColumnComponent`.
  - [ ] Update `GridTableComponent` template to render column footers using `@for`.
  - [ ] Add `stickyFooter = input<boolean>(false)` to `GridTableComponent`.
  - [ ] Update `grid-table.scss` to handle `grid-column: span X` for footer cells.
  - [ ] Verify unit tests pass.
- [ ] Task: Add Demo Table 4 (Column-Based Footer).
  - [ ] Add Table 4 to `app.html` with column footer templates and `footerColspan`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Column-Based Footer and Colspan' (Protocol in workflow.md)
