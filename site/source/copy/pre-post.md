## Pre and Post
Pre and Post classes are used to move your columns laterally across the grid by defining how many columns they should be from their neighbors on either side.

Right now this `breaks` and gets super weird if your pre classes push a row of columns past what is available. A single row that contains
```
<div class="container">
	<div class="column-10 pre-2"><span>pre-2</span></div>
	<div class="column-10 pre-2"><span>pre-2</span></div>
	<div class="column-1"><span>1</span></div>
</div>
```

Will brak the grid. It's gnarly. Instead, the current solution is to watch out for that, and maybe do this:

```
<div class="container">
	<div class="column-24">
		<div class="column-10 pre-2"><span>pre-2</span></div>
		<div class="column-10 pre-2"><span>pre-2</span></div>
	</div>
	<div class="column-1"><span>1</span></div>
</div>
```