
import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadingProvider {

  loading: Loading;
  constructor(public loadingCtrl: LoadingController) {
  }
//LOADING  APP  1
  presentWithGif1() {
      this.loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `
        <div class="custom-spinner-container">
          <img class="loading" width="120px" height="120px" src="assets/loader1.gif" />
        </div>`
      });
      
      return this.loading.present();
  }
  //LOADING  APP 2
  presentWithGif2() {
      this.loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: `
        <div class="custom-spinner-container">
          <img class="loading" width="70px" height="70px" src="../../assets/imgs/coin.gif"/>
        </div>`
      });
      
      return this.loading.present();
  }    

//LOADING  APP 3
  presentWithMessage(message) {
      this.loading = this.loadingCtrl.create({
          spinner:'hide',
          content: message + `
          <div class="custom-spinner-container">
          <br/>
            <img class="loading padding-left-10" width="70px" height="70px" src="../../assets/imgs/coin.gif" />
          </div>`
      });

      return this.loading.present();
  }
//LOADING  CLOSE
  dismiss() {
      return new Promise((resolve, reject) => {
          if (this.loading) {
              return this.loading.dismiss(resolve(true)).catch(error => {
                  console.log('loading error: ', error);
              });
          } else {
              resolve(true);
          }
      });

    }
}