import repositorie from '@/src/repositories/EntityRepositorie';

export default class EntityService {
    
    public async store(formEntity: FormData){
        return await repositorie.store(formEntity);
    }

    public async single(id: number){
        return repositorie.single(id);
    }

    public async all(){
        return repositorie.all();
    }

    public async update(id: number, formEntity: FormData){
        return repositorie.update(id, formEntity);
    }

}
