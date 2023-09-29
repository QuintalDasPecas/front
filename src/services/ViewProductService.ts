import repositorie from '@/src/repositories/ViewProductRepositorie';

export default class ViewProductService {

    public async getActiveProducts(){
        return repositorie.getActiveProducts();
    }

    public async getActiveProductsByToken(token: string){
        return repositorie.getActiveProductsByToken(token);
    }

    public async getActiveProductsByTitle(title: string){
        const formData = new FormData();
        formData.append('title', title)
        return repositorie.getActiveProductsByTitle(formData);
    }

}

