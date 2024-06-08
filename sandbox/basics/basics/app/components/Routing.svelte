<script>
    import Home from './Home';
    import { navigate } from 'svelte-native';
    import { goBack } from 'svelte-native';

    function showHomeWithProps() {
        navigate({
            page: Home,
            props: { message: 'Hello from Router' }
        });
    }

    function navigateWithinFrame(frameId) {
        navigate({ page: Home, frame: frameId }); // 'id, or ref, or instance'
    }
</script>

<stackLayout>
    <button text="Back" on:tap="{goBack}" />
    <button text="Home" on:tap={() => navigate({ page: Home })} />
    <button text="Home" on:tap={showHomeWithProps} />
</stackLayout>
