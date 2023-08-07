<template>
    <PartialsUploads :url="url"></PartialsUploads>
</template>
<script>
import Uploads from '~/components/partials/Uploads.vue';

export default {
    components:{
        Uploads
    },
    data(){
        return {
            url: 'http://127.0.0.1:8000/api/upload'
        }
    }
}

</script>