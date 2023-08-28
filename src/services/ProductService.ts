import repositorie from '@/src/repositories/ProductRepositorie';

export default class EntityService {
    
    public async store(formEntity: FormData){
        return await repositorie.store(formEntity);
    }

    public async single(id: number){
        return await repositorie.single(id);
    }

    public async all(){
        return repositorie.all();
    }

    public async update(id: number, formEntity: FormData){
        return repositorie.update(id, formEntity);
    }
    
    public async Upload(formRegister: FormData){
        return await repositorie.upload(formRegister);
    }
}
