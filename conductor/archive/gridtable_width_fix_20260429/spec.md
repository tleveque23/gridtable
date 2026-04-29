# Specification: Fix GridTable width to fit its content

## Overview
The GridTable component currently spans 100% of its parent's width, causing the border and background of the table to stretch beyond the actual columns if the columns' combined width is smaller than the parent.

## Requirements
- Update the styling of the `.grid-table` container so that its width conforms to its content.
- Ensure horizontal scrolling is maintained for smaller screens when the grid content exceeds the parent container width.
- Verify through manual testing that the table no longer spans 100% if the content is smaller.