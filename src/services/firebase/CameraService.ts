import { ref } from "firebase/storage";
import { storage } from "../../core/firebaseConfig";
import Photo from "../../types/CameraTypes";

export class CameraService{


    async uploadPhoto(photoUri:string,userId:string,category?:string):Promise<Photo>{
        try {
            // Convertir imagen en formato base64 a blob
            const base64Response = await fetch(photoUri);
            const blob = base64Response.blob()

            const timestamp = new Date().getTime()
            const storageRef = ref(storage,)
        } catch (error) {
            console.error("Error en uploadPhoto:", error);
            throw error;
        }
    }
}