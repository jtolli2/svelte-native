<script lang="ts">
    import showModal from 'svelte-native';
    import Home from './components/Home';
    import Routing from './components/Routing';
</script>

<frame>
    <button text="Routing" on:tap={() => showModal({ page: Routing })} />
    <Home />
</frame>
