import axios from "axios";
import {UserProfilePhotosType, UserProfileType} from "../redux/profile-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "979d9ce7-5a57-44f9-9b9c-37da1881885c"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
            return response.data;
        });
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {

    getProfile(userId: number | null) {
        return instance.get<UserProfileType>(`profile/${userId}`);
    },
    getStatus(userId: number | null) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status});
    },
    updatePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ResponseType<UpdatePhotoResDataType>>(`profile/photo`, formData)
            .then(response => response.data)
    },
    saveProfile(profile: UserProfileType) {
        return instance.put<ResponseType>(`profile`, profile)
            .then((res) => res.data)
    },

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}

type UpdatePhotoResDataType = { photos: UserProfilePhotosType }

export type ResponseType<D = {}> = {
    data: D
    messages: Array<string>
    resultCode: 0 | 1 | 10
}

