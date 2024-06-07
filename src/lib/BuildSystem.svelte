<script lang="ts">
import { buildsystemstore } from "../store";

const lookup = [
    {
        text: "setuptools",
        requires: "setuptools >= 61.0",
        backend: "setuptools.build_meta"
    },
    {
        text: "Hatchling",
        requires: "hatchling",
        backend: "hatchling.build"
    },
    {
        text: "Flit",
        requires: "flit_core >= 3.4",
        backend: "flit_core.buildapi"
    },
    {
        text: "PDM",
        requires: "pdm-backend",
        backend: "pdm.backend"
    }
]

$: selected = 0

$: buildsystemstring = `[build-system]
requires = ["${lookup[selected].requires}"]
build-backend = "${lookup[selected].backend}"`

$: $buildsystemstore = buildsystemstring

</script>

<section aria-label="Input group for build system">
    <label for="buildsystem">Select your build system:</label>
    <select bind:value={selected} class="bg-slate-700 rounded p-1" name="buildsystem" id="">
        {#each lookup as tool, id}
            <option value={id}>{tool.text}</option>
        {/each}
    </select>
</section>
