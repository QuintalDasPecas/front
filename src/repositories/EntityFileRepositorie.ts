import CallApi from '@/src/http/CallApi';

export default class EntityRepositorie {  
  
  static async destroy(id: number) {
    CallApi.setEndPoint('entityfile');
    return CallApi.destroy(id);
  }

  static async getFileByEntityId(id: number){
    CallApi.setEndPoint('entityfile');
    return CallApi.find(id);
  }
}
