import { inject, injectable } from 'tsyringe';
import { TestService } from '../services/TestService';

@injectable()
export class Test {
    constructor(@inject('TestService') private testService: TestService) {}
}
