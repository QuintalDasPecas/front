import repositorie from '@/src/repositories/EntityFileRepositorie';

export default class EntityService {
    
    public async destroy(id: number){
        return await repositorie.destroy(id);
    }

    public async getFileByEntityId(id: number){
        return await repositorie.getFileByEntityId(id);
    }

}
