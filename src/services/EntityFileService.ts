import repositorie from '@/src/repositories/EntityFileRepositorie';

export default class EntityService {
    
    public async destroy(id: number){
        return await repositorie.destroy(id);
    }

    public async getFileByEntityId(id: number){
        return await repositorie.getFileByEntityId(id);
    }

    public async approve(id: number){
        return await repositorie.approve(id);
    }

    public async reject(id: number){
        return await repositorie.reject(id);
    }

    public async findByIdAndTypeFile(id: number, type: string ){
        return await repositorie.findByIdAndTypeFile(id, type);
    }

    public async findByIdAndTypeFileAndApproved(id: number, type: string ){
        return await repositorie.findByIdAndTypeFileAndApproved(id, type);
    }
}
