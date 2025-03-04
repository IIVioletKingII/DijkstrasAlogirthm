<script lang="ts">
	import Container from "./container.svelte";

	// Initial value of the slider
	let sliderValue = 0;

	const input = [
		"1163751742",
		"1381373672",
		"2136511328",
		"3694931569",
		"7463417111",
		"1319128137",
		"1359912421",
		"3125421639",
		"1293138521",
		"2311944581",
	];

	function init() {
		return input.map((i) =>
			i.split("").map((j) => ({
				num: parseInt(j),
				sum: 0,
				visited: false /* 'from': { 'x': -1, 'y': -1 } */,
			})),
		);
	}

	let items = init();

	function updateCell(
		row: number,
		col: number,
		update: { num?: number; sum?: number; visited?: boolean },
	) {
		items[row] = [...items[row]]; // Clone the row
		items[row][col] = { ...items[row][col], ...update }; // Clone the item
		items = [...items]; // Assign a new reference to trigger reactivity

		// 	items = items.map((r, rowIndex) =>
		// 	rowIndex === row
		// 		? r.map((cell, colIndex) =>
		// 				colIndex === col ? { ...cell, ...update } : cell
		// 		  )
		// 		: r
		// );
		return items[row][col];
	}

	interface Position {
		x: number;
		y: number;
	}

	let size: Position = {
		x: input[input.length - 1].length - 1,
		y: input.length - 1,
	};

	function runAlgorithm(interval: number) {
		let pos: Position = { x: 0, y: 0 };
		slowAlgorithm(pos, interval);
	}

	function slowAlgorithm(pos: Position, interval: number) {
		let curPos = updateCell(pos.x, pos.y, {
			visited: true,
		});

		let min;
		let direction = { x: 0, y: 0 };

		let directions: Record<string, Position> = {
			N: { x: 0, y: pos.y > 0 ? -1 : 0 },
			E: { x: pos.x < size.x ? 1 : 0, y: 0 },
			S: { x: 0, y: pos.y < size.y ? 1 : 0 },
			W: { x: pos.x > 0 ? -1 : 0, y: 0 },
		};

		// find minimum costing direction (aka min directions.*.num)
		for (const dir of Object.keys(directions)) {
			// if valid direction
			if (directions[dir].x != directions[dir].y) {
				// if haven't visited yet
				let checkNum =
					items[pos.x + directions[dir].x][pos.y + directions[dir].y];
				if (!checkNum.visited) {
					// set sum

					let newSum: number = checkNum.num + curPos.sum;
					if (checkNum.sum == 0 || newSum < checkNum.sum)
						checkNum = updateCell(
							pos.x + directions[dir].x,
							pos.y + directions[dir].y,
							{
								sum: newSum,
							},
						);

					if (!min || checkNum.sum < min) {
						min = checkNum.sum;
						direction = directions[dir];
					}
				}
			}
		}

		if (min) {
			pos.x += direction.x;
			pos.y += direction.y;
		} else {
			console.log("Aborted!");
			pos = size;
		}

		if (size.x != pos.x || size.y != pos.y) {
			if (interval <= 0) slowAlgorithm(pos, interval);
			else setTimeout(() => slowAlgorithm(pos, interval), interval);
		} else {
			updateCell(size.x, size.y, { visited: true });
			console.log("Finished!");
		}
	}
</script>

<div class="page">
	<div class="header">Sam's Dijkstra's Alogirthm</div>

	<div class="block flex" style="align-items: center;">
		<button class="nice-button" on:click={() => runAlgorithm(sliderValue)}
			>Start</button
		>
		<button class="nice-button" on:click={() => (items = init())}
			>Reset</button
		>
		<div class="flex">
			<label for="slider">Delay: {sliderValue}</label>
			<input
				id="slider"
				type="range"
				min="0"
				max="1000"
				bind:value={sliderValue}
			/>
		</div>
	</div>

	<div class="block flex">
		<Container {items} classes={"a"} param={"num"} />
		<Container {items} classes={"b"} param={"sum"} />
	</div>
</div>

<style>
	.page {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
	}

	.header {
		margin: 1rem;
		font-weight: 600;
		font-size: 32px;
	}

	.block {
		margin: 1rem;
		font-size: 20px;
	}

	.flex {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.nice-button {
		padding: 10px 20px;
		font-size: 16px;
		font-weight: bold;
		background-color: hsl(208, 67%, 54%);
		color: white;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	.nice-button:hover {
		background-color: hsl(208, 67%, 60%); /* Darker green */
		transform: translateY(-2px); /* Slight "lift" effect */
	}

	.nice-button:focus {
		outline: none; /* Remove default focus outline */
		box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Blue glow effect */
	}

	.nice-button:active {
		background-color: hsl(208, 67%, 65%); /* Even darker green */
		transform: translateY(2px); /* Button presses down when clicked */
	}
</style>
