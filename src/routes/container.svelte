<script lang="ts">
	const { classes, param = "num", items } = $props();
	// export let classes: string;
	// export let param: string = "num";
	// export let items;
	// export let updater;
</script>

<div class="container {classes}">
	<table>
		<tbody>
			{#each items as row, rowI}
				<tr class="row">
					{#each row as item, itemI}
						<td
							class="cell pos-{itemI}-{rowI} {item.visited
								? 'visited'
								: ''}"
						>
							{item[param]}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		border: none;
		border-collapse: collapse;
	}
	.container {
		width: fit-content;
		padding: 1rem;
		background-color: bisque;
		border-radius: 1rem;

		font-size: 24px;
		line-height: 2rem;
	}

	.row {
		gap: 1rem; /* Add space between items within the row */
		width: fit-content;
		gap: 0.5rem;
	}

	.cell {
		/* border: none; */
		padding: 0.35rem;
		text-align: center;
	}

	.visited {
		font-weight: 600;
		font-size: 26px;
	}
</style>
