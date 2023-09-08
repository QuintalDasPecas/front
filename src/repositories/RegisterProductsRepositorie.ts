import CallApi from '@/src/http/CallApi';

export default class RegisterProductsRepositorie {

  static async getSearchByName(value: string) {
    CallApi.setEndPoint('teste');
    const formData = new FormData();
    formData.append('name', value);
    return CallApi.getWhere(value);
  }

  static async getItemsByItem(value: string) {
    CallApi.setEndPoint('items');
    return CallApi.getWhere(value);
  }

}
