import { inject, injectable } from 'tsyringe';
import { TestService } from '../services/TestService';

@injectable()
export class Test {
    constructor(
        @inject('TestService')
        private _testService: TestService
    ) {}

    public get testService(): TestService {
        return this._testService;
    }

    public set testService(value: TestService) {
        this._testService = value;
    }
}
