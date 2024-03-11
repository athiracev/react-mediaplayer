import commonApi from "./commonApi";
import {BASE_URL} from './base_url'



// videos
export const uploadVideo = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/allVideos`,data)
}

export const getVideos = async()=>{
    return await commonApi('GET',`${BASE_URL}/allVideos`,"")
}

export const deleteVideo = async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/allVideos/${id}`,{})
}


//categories

export const categoryAdd = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/categories`,data)
}

export const getCategory=async()=>{
    return await commonApi('GET',`${BASE_URL}/categories`,'')
}

export const deleteCategory=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${id}`,{})
}

// history

 export const addHistory=async(data)=>{
    return await commonApi('POST',`${BASE_URL}/history`,data)
}

export const getHistory= async()=>{
    return await commonApi('GET',`${BASE_URL}/history`,'')
}