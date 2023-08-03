import CallApi from '@/src/http/CallApi';

export default class EntityRepositorie {
  static async store(formData: FormData) {
    CallApi.setEndPoint('entity');
    return await CallApi.store(formData);
  }

  static async single(id: number) {
    CallApi.setEndPoint('entity');
    return await CallApi.find(id);
  }

  static async all() {
    CallApi.setEndPoint('entity');
    return CallApi.all();
  }

  static async update(id: number, formData: FormData) {
    CallApi.setEndPoint('entity');
    return CallApi.update(id, formData);
  }
}
