import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();

const generateUploadUrlFunction = httpsCallable(functions, "generateUploadUrl");
const getVideosFunction = httpsCallable(functions, 'getVideos');

export interface Video {
    id?: string,
    uid?: string,
    filename?: string,
    status?: 'processing' | 'processed',
    title?: string,
    description?: string  
  }

export async function uploadVideo(file: File) {
    const response: any = await generateUploadUrlFunction({
        fileExtension: file.name.split(".").pop()
    });

    const uploadResult = await fetch(response?.data?.url, {
        method: "PUT",
        body: file,
        headers: {
            "Content-Type": file.type,
        },
    })
    
    return uploadResult;
}

export async function getVideos() {
    const response: any = await getVideosFunction();
    return response.data as Video[];
  }