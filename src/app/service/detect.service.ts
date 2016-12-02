import { Injectable } from '@angular/core';

@Injectable()
export class DetectService {

  private _isMobile = false;
  private _mobilePlatform = null;
  private _device = {
    is_android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    is_blackberry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    is_iphone: function() {
      return navigator.userAgent.match(/iPhone/i);
    },
    is_ipad: function() {
      return navigator.userAgent.match(/iPad/i);
    },
    is_ipod: function() {
      return navigator.userAgent.match(/iPod/i);
    },
    is_ios: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    is_windows_phone: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    is_mobile: function() {
      return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|IEMobile/i);
      //return (this._device.is_android() || this._device.is_blackberry() || this._device.is_ios() || this._device.is_windows_phone() );
    }
  };

  constructor() {
    if(this._device.is_mobile()){
      this._isMobile = true;

      if(this._device.is_android()){
        this._mobilePlatform = "android";
      }

      if(this._device.is_ios()){
        this._mobilePlatform = "ios";
      }

    }
  }

  isMobile() {
    return this._isMobile;
  }

  isMobilePlatform() {
    return this._mobilePlatform;
  }


}
