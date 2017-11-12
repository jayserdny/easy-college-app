import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageRecognitionProvider {

  imageData: any

  constructor(public http: Http) {
    console.log('Hello ImageRecognitionProvider Provider');
  }

  test() {
    if (this.imageData) {
      // already loaded data
      return Promise.resolve(this.imageData);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=3f1a74df06988116cdf0c5e55d9a640e6ebd0f1b&url=https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/fruitbowl.jpg&version=2016-05-20')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.imageData = data;
          resolve(this.imageData);
        });
    });
  //   var visual_recognition = watson.visual_recognition({
  //     api_key: '3f1a74df06988116cdf0c5e55d9a640e6ebd0f1b}',
  //     version: 'v3',
  //     version_date: '2016-05-20'
  //   });
    
  //   var params = {
  //     images_file: "https://books.google.com/books/content?id=hEF-BAAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&imgtk=AFLRE71c2VSfu8jlqvHepcFZF-9J-pLV70REdRG1w3i7aECAzpSOvV21bVgBWl1TYhcF1PTKPTqjeoXmQKiIzE4eDMnhCqX69DRKcLYrRnbtSNAvEfyn2IgYNHRowMubxfAk7udhZefa"
  //   };
    
  //   visual_recognition.classify(params, function(err, res) {
  //     if (err)
  //       console.log(err);
  //     else
  //       console.log(res);
  //   });
  // }
  }

}
