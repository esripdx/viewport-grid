
## Columns
In the VW Grid, a column is a constant unit of measure. The width of a column is dynamic, but always between a fixed range. Columns will never get too large or or to small. As the viewport get smaller, and the columns near the bottom of their range, VW Grid will simply put less columns on the page. By default, large screens hold 24 columns, medium tablet-sized screens hold 12, and phone-sized screens hold 6. VW Grid will fold columns at these breakpoints. That means an element that is 3 columns wide will always be 3 columns wide, no matter how big or small the screen.

On large screens, 3 columns out of 24 is proportionally a small peice of screen real estate. On Phones, VW Grid will still leave the element at 3 columns wide -- only now it's proportionally more real estate, as 3/6 columns is more significant than 3/24.

<!-- D E M O -->

## Responsive Columns
The width of elements can be explicitly defined for breakpoints where columns would normally fold by default. This can be done with the `phone-column-n` and `tablet-column-n` classes. For example, `.column-12` would default to the full 12/12 column width at a tablet size. Adding to the same element `.tablet-column-6` would prevent the default behavior, and at a tablet viewport, the element would be 6/12 columns.

<!-- D E M O -->

## Nested Columns
Contrary to other flexible-width grid systems, VW Grid columns do not change behavior when nested. Because a column is a constant measurement relative the size of the viewport, nested columns still span the same width as their non-nested counterparts. An element with `.column-6` nested within an element with `.column-12` is the same size as an un-nested `.column-6`. Further, clearing of the column-gutter is taken care of for you with `:first-child` and `:last-child` psuedo-selectors on all column classes.

Column-folding behavior is almost entirely automatic with Viewport Grid. The only exception is gutter clearing behaviors on deeply nested items after column folding occurs - in some situations we can not know what columns are now first or last in their rows. This will cause the column to be inset from the edge of the container. The example below solves this by introducing `first-column` classes, along with `tablet-first-column` and `phone-first-column`.

<!-- D E M O -->

## Using Column-24 as a Row
Because columns can now be nested without changing their behavior, we don't need rows, really. But you will still have this problem:

<!-- D E M O -->

With this grid you can wrap the first two columns in a 24 column grid, which will act in the same manner as a row:

<!-- D E M O -->

## Nested Columns with Column Rows
The previous example of nested columns uses specific classes to override gutter styles when deeply nested column start cause gutter-clearing problems. An alternate solution is to avoid these first/last classes and instead wrap your nested divs in columns that behave like rows. VW Grid favors neither solution, so it comes down to which you feel leaves your markup cleaner and more readable.

<!-- D E M O -->

## Pre and Post
Pre and Post classes are used to move your columns laterally across the grid by defining how many columns they should be from their neighbors on either side.
