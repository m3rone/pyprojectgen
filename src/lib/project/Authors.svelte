<script lang="ts">
import { authorstore } from "../../store";
let numofauthors = 1
let [authorname, authoremail] = ["dsa", ""]

$: authorstring = `
authors=[{name = ${authorname}, email = ${authoremail}}]`

$: $authorstore = authorstring
</script>

<section aria-label="Inputs for authors">
{#each Array(numofauthors) as _, k}
    <div class="block">
        <input bind:value={authorname} class="bg-slate-700 rounded p-1 mt-1" type="text" placeholder="Author name">
        <input bind:value={authoremail} class="bg-slate-700 rounded p-1 mt-1" type="email" placeholder="Author email">
    </div>
{/each}

<!-- <button on:click={() => numofauthors++}>Add author</button>
<button on:click={() => numofauthors--}>Remove author</button> -->

</section>
