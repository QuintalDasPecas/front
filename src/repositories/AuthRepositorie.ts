import model from 'src/http/Http';

export default class AuthRepositorie{

   static async store(formData: FormData){
        return model.store(formData);
   }

   static async single(id: number){
        return model.find(id);
   }

   static async all(){
        return model.all();
   }

   static async update(id: number, formData: FormData){
        return model.update(id, formData);
   }

}
