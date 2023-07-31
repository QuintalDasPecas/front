import CallApi from '@/src/http/CallApi';

export default class RegisterRepositorie {
  static async store(formData: FormData, typeRegister: number) {
   
    if( typeRegister === 1){
      CallApi.setEndPoint('registerpj');
    }

    if( typeRegister === 2){
      CallApi.setEndPoint('registerpf');
    }    
    return await CallApi.store(formData);
  }

  static async single(id: number) {
    CallApi.setEndPoint('register');
    return CallApi.find(id);
  }

  static async all() {
    CallApi.setEndPoint('register');
    return CallApi.all();
  }

  static async update(id: number, formData: FormData) {
    CallApi.setEndPoint('register');
    return CallApi.update(id, formData);
  }
}
