# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 1.0.3 - 2015-08-10
### Fixes
- Responsive `.pre-$n` and `.post-$n` classes only apply to their scoped viewport size.
- Columns with medium column width but no small column render properly

### Changes
- `column` `pre` and `post` at standard size apply at large size

## 1.0.2 - 2015-07-21
### Fix column mixin
- Can now call `@include column($n)` from sass to get a properly sized column
- Remove some unused mixins

## 1.0.1 - 2015-07-08
### Extra Large Column Collapse Bugfix
- Columns properly collapse as screen size shrinks

## 1.0.0 - 2015-05-22
### Introduce Extra Large Columns
- Default column classes
- Tablet => Medium
- Phone => Large
- Increase large breakpoint to 1450px
- add `extra-large-leader-n`
	- trailer
	- padding-leader
	- padding-trailer
- add `extra-large-column-n` to 36 columns
- Remove `container-max` and `container-min`
- `extra-large-hide`, `-show`, and `-only`

## 0.1.0 - 2015-04-04
### First Documented Release
- Columns
- Grid-Container
- Leader & Trailer
- Pre & Post
- Show & Hide
- Gutters
