<script lang="ts">
    import Routing from './Routing';
    let message: string = 'Blank Svelte Native App';
</script>

<page>
    <actionBar title="Home" />
    <gridLayout>
        <label class="info">
            <formattedString>
                <span class="fas" text="&#xf135;" />
                <span text=" {message}" />
            </formattedString>
        </label>

        <!-- <Routing /> -->
    </gridLayout>
</page>

<style>
    .info .fas {
        color: #3a53ff;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
