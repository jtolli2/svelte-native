import { TestService } from './TestService';

export class ATestService implements TestService {
    doSomething(): void {
        console.log('do something A');
    }
}
