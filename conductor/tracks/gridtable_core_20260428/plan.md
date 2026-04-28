# Implementation Plan: Implement core GridTable component with CSS Grid sizing and template support

## Phase 1: Workspace & Library Scaffolding
- [x] Task: Initialize Angular workspace with a library project `gridtable` and a demo application. (2a29b12)
    - [ ] Write Tests: Verify standard Angular setup files exist.
    - [ ] Implement Feature: Generate workspace using Angular CLI, configure Vitest and Playwright.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Workspace & Library Scaffolding' (Protocol in workflow.md)

## Phase 2: Core Components Construction
- [ ] Task: Implement `GridColumnComponent`.
    - [ ] Write Tests: Define inputs (`attribute`, sizing constraints) and template queries.
    - [ ] Implement Feature: Create component, external HTML/SCSS, handle `#row` and `#header` ContentChildren.
- [ ] Task: Implement `GridTableComponent`.
    - [ ] Write Tests: Test rendering based on `values` input and dynamic CSS Grid styling computation based on columns.
    - [ ] Implement Feature: Create component, accept `values` signal input, compute CSS grid-template-columns based on `GridColumnComponent` children.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Core Components Construction' (Protocol in workflow.md)

## Phase 3: Demo Application Integration
- [ ] Task: Build static data showcase in demo app.
    - [ ] Write Tests: E2E test verifying the grid renders correctly with basic and custom columns.
    - [ ] Implement Feature: Import library, create a sample dataset, and build a view demonstrating the sizing and custom templates.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Demo Application Integration' (Protocol in workflow.md)