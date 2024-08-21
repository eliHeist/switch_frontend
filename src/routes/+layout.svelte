<script lang="ts">
	import Header from "$lib/header.svelte";
    import '../styles/main.scss'

</script>

<div class="page_wrapper">
    <Header/>
    <div class="page_content">
        <slot></slot>
    </div>
</div>

<style lang="scss">
</style>

