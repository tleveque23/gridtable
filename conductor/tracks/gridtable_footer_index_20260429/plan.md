# Implementation Plan: GridTable Footer and Index Exposure

## Phase 1: Row Index Exposure [checkpoint: f4c54ed]
- [x] Task: Update `GridColumnComponent` and `GridTableComponent` to expose row index. 8719393
  - [ ] Write failing test for row index exposure in `grid-column.spec.ts`.
  - [ ] Update `grid-table.html` to pass the loop index `$index` to the column's row template context.
  - [ ] Verify unit tests pass.
- [x] Task: Update Demo Table 1. 8719393
  - [ ] Update `src/app/app.html` to use `let-index="index"` and set `[id]="item.name + '-' + index"` on the delete button.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Row Index Exposure' (Protocol in workflow.md) f4c54ed

## Phase 2: Full-Width Footer [checkpoint: bd7803d]
- [x] Task: Create `GridTableFooterComponent`. 34138bf
  - [ ] Write failing test for `GridTableFooterComponent` projection and sticky behavior.
  - [ ] Generate `GridTableFooterComponent` with `sticky = input<boolean>(false)`.
  - [ ] Update `GridTableComponent` to support footer projection.
  - [ ] Add SCSS for footer positioning and sticky behavior.
  - [ ] Verify unit tests pass.
- [x] Task: Add Demo Table 3 (Full-Width Footer). 34138bf
  - [ ] Add `longValues` (or similar) to Table 3 in `app.html` with a `lib-grid-table-footer`.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Full-Width Footer' (Protocol in workflow.md) bd7803d

## Phase 3: Column-Based Footer and Colspan
- [x] Task: Implement Column-Based Footer templates. c95d5e6
  - [ ] Write failing test for per-column footer rendering and `footerColspan`.
  - [ ] Add `footerTemplate = contentChild<TemplateRef<any>>('footer')` and `footerColspan = input<number>(1)` to `GridColumnComponent`.
  - [ ] Update `GridTableComponent` template to render column footers using `@for`.
  - [ ] Add `stickyFooter = input<boolean>(false)` to `GridTableComponent`.
  - [ ] Update `grid-table.scss` to handle `grid-column: span X` for footer cells.
  - [ ] Verify unit tests pass.
- [x] Task: Add Demo Table 4 (Column-Based Footer). c95d5e6
  - [ ] Add Table 4 to `app.html` with column footer templates and `footerColspan`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Column-Based Footer and Colspan' (Protocol in workflow.md)
