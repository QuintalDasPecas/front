import repositorie from '@/src/repositories/BannerRepositorie';

export default class BannerService {

    public async Upload(formRegister: FormData){
        return await repositorie.upload(formRegister);
    }

    public async getBanner(){
        return await repositorie.getBanner();
    }

    public async destroy(id: number){
        return await repositorie.destroy(id);
    }
}
