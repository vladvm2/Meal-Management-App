import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ImageService = class ImageService {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    getImageFromBase64String(imageBase64) {
        let objectURL = 'data:image/png;base64,' + imageBase64;
        return this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
};
ImageService = __decorate([
    Injectable()
], ImageService);
export { ImageService };
//# sourceMappingURL=image.service.js.map