import { TestService } from './TestService';

export class BTestService implements TestService {
    doSomething(): void {
        console.log('do something B');
    }
}
