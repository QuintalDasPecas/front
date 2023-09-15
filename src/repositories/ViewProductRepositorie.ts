import CallApi from '@/src/http/CallApi';

export default class ViewProductRepositorie {
    
  static async getActiveProducts() {
    CallApi.setEndPoint('viewproduct');
    return await CallApi.getWhere('');
  }

}
