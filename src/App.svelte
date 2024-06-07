<script lang="ts">
import BuildSystem from "./lib/BuildSystem.svelte";
import Project from "./lib/Project.svelte";

import { buildsystemstore, genericstore, authorstore } from "./store";

$: buildsystemstring = $buildsystemstore
$: genericstring = $genericstore
$: authorstring = $authorstore

let readonlyarea = true
</script>

<main class="w-fit mx-auto mt-4">
<BuildSystem />
<p>---</p>
<Project />

<textarea readonly={readonlyarea} class="rounded-sm bg-slate-700 mt-4" cols="40" rows="10">
{buildsystemstring}
{genericstring}{authorstring}
</textarea>

<div class="block">
    <label for="readonlybox">readonly text area</label>
    <input bind:checked={readonlyarea} type="checkbox" id="readonlybox">
</div>
</main>
