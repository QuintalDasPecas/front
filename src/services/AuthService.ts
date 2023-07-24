import repositorie from 'src/repositories/AuthRepositorie';

export default class AuhtService {
    
    static async store(formData: FormData){
        return repositorie.store(formData);
    }

    static async single(id: number){
        return repositorie.single(id);
    }

    static async all(){
        return repositorie.all();
    }

    static async update(id: number, formData: FormData){
        return repositorie.update(id, formData);
    }

}
