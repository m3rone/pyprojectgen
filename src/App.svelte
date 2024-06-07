<script lang="ts">
import BuildSystem from "./lib/BuildSystem.svelte";
import Project from "./lib/Project.svelte";

import { buildsystemstore } from "./store";
import { genericstore } from "./store";


$: buildsystemstring = $buildsystemstore
$: genericstring = $genericstore


</script>

<main class="w-fit mx-auto mt-4">
<BuildSystem />
<p>---</p>
<Project />

<textarea class="rounded-sm bg-slate-700 mt-4" cols="40" rows="10">
{buildsystemstring}
{genericstring}
</textarea>
</main>
