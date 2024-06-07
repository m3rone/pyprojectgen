<script lang="ts">
import { genericstore } from "../../store";

$: projname = "My Project"
$: version = "1.0.0"
$: description = "My lovely project"
$: readme = "README.md"
$: reqpy = ">="
$: reqpyversion = "3.10"

$: genericstring = `
[project]
name = "${projname}"
version = "${version}"
description = "${description}"
readme = "${readme}"
requires-python = "${reqpy + reqpyversion}"`

$: $genericstore = genericstring

</script>

<section aria-label="Input group for project name, version, description, readme, and required python version">
    <div class="block">
        <label for="projname">Project name: </label>
        <input bind:value={projname} class="bg-slate-700 rounded p-1 mt-1" type="text" name="projname">
    </div>
    <div class="block">
        <label for="version">Version: </label>
        <input bind:value={version} class="bg-slate-700 rounded p-1 mt-1" type="text" name="version">
    </div>
    <div class="block">
        <label for="description">Description: </label>
        <input bind:value={description} class="bg-slate-700 rounded p-1 mt-1" type="text" name="description">
    </div>
    <div class="block">
        <label for="readme">Readme file: </label>
        <input bind:value={readme} class="bg-slate-700 rounded p-1 mt-1" type="text" name="readme">
    </div>
    <div class="block">
        <label for="reqpy">Required Python version: </label>
        <select bind:value={reqpy} class="bg-slate-700 rounded p-1 mt-1" name="reqpy" id="">
            <option value=">=">&gt;=</option>
            <option value=">">&gt;</option>
            <option value="=">=</option>
            <option value="<">&lt;</option>
            <option value="<=">&lt;=</option>
        </select>
        <input bind:value={reqpyversion} class="bg-slate-700 rounded p-1 mt-1" type="text" name="reqpy">
    </div>
</section>
