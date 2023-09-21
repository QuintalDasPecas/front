import CallApi from '@/src/http/CallApi';

export default class ProductRepositorie {
  static async store(formData: FormData) {   
    CallApi.setEndPoint('products');
    return await CallApi.store(formData);
  }

  static async single(id: number) {
    CallApi.setEndPoint('products');
    return CallApi.find(id);
  }

  static async all() {
    CallApi.setEndPoint('products');
    return CallApi.all();
  }

  static async update(id: number, formData: FormData) {
    CallApi.setEndPoint('products');
    return CallApi.update(id, formData);
  }

  static async upload(formData: FormData) {
    CallApi.setEndPoint('products/upload');
    return await CallApi.Upload(formData);
  }

  static async getProductsByEntityId(id: string){
    CallApi.setEndPoint('productsbyentity');
    return CallApi.getWhere(id);
  }
}
