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

  static async getActiveProductsByTitle(formData: FormData) {
    CallApi.setEndPoint('searchitems');
    return await CallApi.store(formData);
  }

  static async getProductNoBasePrice() {
    CallApi.setEndPoint('viewproduct/nobaseprice');
    return await CallApi.getWhere('');
  }
}
