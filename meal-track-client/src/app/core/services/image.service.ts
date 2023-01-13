import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ImageService {

  constructor(private sanitizer: DomSanitizer) { }

  public getImageFromBase64String(imageBase64: string): any {
    let objectURL = 'data:image/png;base64,' + imageBase64;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
