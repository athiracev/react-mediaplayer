import commonApi from "./commonApi";
import {BASE_URL} from './base_url'

export const uploadVideo = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/allVideos`,data)
}

export const getVideos = async()=>{
    return await commonApi('GET',`${BASE_URL}/allVideos`,"")
}