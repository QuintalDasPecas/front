import repositorie from '@/src/repositories/RegisterProductsRepositorie';

export default class RegisterProductsService {

    public async getSearchByName(value: string){
        return await repositorie.getSearchByName(value)
    }

    public async getItemsByItem(value: string){
        return await repositorie.getItemsByItem(value)
    }

    public async importItem(formData: FormData){
        return await repositorie.importItem(formData)
    }
}
