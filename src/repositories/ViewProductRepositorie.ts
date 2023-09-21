import CallApi from '@/src/http/CallApi';

export default class ViewProductRepositorie {
    
  static async getActiveProducts() {
    CallApi.setEndPoint('viewproduct');
    return await CallApi.getWhere('');
  }

  static async getActiveProductsByToken(token: string) {
    CallApi.setEndPoint('viewproductbytoken');
    return await CallApi.getWhere(token);
  }
}
