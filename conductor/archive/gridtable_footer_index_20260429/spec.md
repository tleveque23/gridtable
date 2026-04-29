# Specification: GridTable Footer and Index Exposure

## Overview
This feature introduces footer support for the `GridTableComponent` and exposes the row index to column templates. Footers can be either full-width (table-level) or per-column (column-level).

## Functional Requirements

### 1. Row Index Exposure
- The `GridColumnComponent` row template will now expose the current row index as `index`.
- **Usage Example**: `<ng-template #row let-item let-index="index">{{ index }}: {{ item.name }}</ng-template>`
- **Demo Update**: The first table in the demo app will add an `id` attribute to its action button formatted as `{name}-{index}`.

### 2. Full-Width Footer
- Introduce a new component (e.g., `GridTableFooterComponent`) that can be projected into `<grid-table>`.
- This component will span the entire width of the table.
- It will support an optional `sticky = input<boolean>(false)` flag to remain visible at the bottom of the scrollable container when `maxHeight` is set.

### 3. Column-Based Footer
- Support an `<ng-template #footer>` inside the `GridColumnComponent`.
- Introduce a `footerColspan = input<number>(1)` to `GridColumnComponent`.
- Column-based footers will be rendered below the rows, respecting the grid layout.
- If `footerColspan > 1`, the footer cell will span the specified number of grid columns using `grid-column: span X`.
- These footers will also support an optional `stickyFooter = input<boolean>(false)` flag on the `GridTableComponent` (or similar) to remain visible at the bottom.

### 4. Demo Updates
- **Table 1**: Update to show row index in button IDs.
- **Table 3 (New)**: Independent table showcasing the **Full-Width Footer**.
- **Table 4 (New)**: Independent table showcasing **Column-Based Footers** with `footerColspan` and totals.

## Acceptance Criteria
1. Row index is correctly exposed and usable in templates.
2. Full-width footer is rendered and spans the full table width.
3. Column footers are rendered and correctly respect the `footerColspan` logic.
4. Sticky behavior works as expected when enabled.
5. All new demos are functional and accurately demonstrate the features.

## Out of Scope
- Dynamic `colspan` changing at runtime (initial version focuses on static or initialization-time configuration).
- Virtual scrolling for footer content.
