<script lang="ts">
    import 'reflect-metadata';
    import { container } from 'tsyringe';
    import { Test } from '../shared/Test';

    let test: Test = container.resolve(Test);
    test.testService.doSomething();

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
    </gridLayout>
</page>

<style lang="scss">
    .info {
        .fas {
            color: #3a53ff;
        }

        font-size: 20px;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
