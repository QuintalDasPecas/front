import repositorie from '@/src/repositories/ViewProductRepositorie';

export default class ViewProductService {

    public async getActiveProducts(){
        return repositorie.getActiveProducts();
    }

    public async getActiveProductsByToken(token: string){
        return repositorie.getActiveProductsByToken(token);
    }

}

