export const platform = {
  checkWebpActiveSupport : function () {
		let webptest = document.createElement('canvas');
		if (!!(webptest.getContext && webptest.getContext('2d'))) {
			return webptest.toDataURL('image/webp').indexOf('data:image/webp') == 0;
		}
		return false;
	},
	checkJp2ActiveSupport : function () {
		let jp2test = document.createElement('canvas');
		if (!!(jp2test.getContext && jp2test.getContext('2d'))) {
			return jp2test.toDataURL('image/jp2').indexOf('data:image/jp2') == 0;
		}
		return false;
	},
    checkWebpSupport: function () {
		if(this.checkWebpActiveSupport()){
			return true;
		}
		else if(isFirefox()){
			return true; 
		}
		return false;
	},
    checkJP2Support: function () {
		if(this.checkJp2ActiveSupport()){
			return true;
		}
		return false;
    }
}
