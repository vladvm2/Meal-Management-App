import { TestBed } from '@angular/core/testing';
import { FoodService } from './food.service';
describe('FoodService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FoodService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=food.service.spec.js.map