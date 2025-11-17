import axios, {AxiosInstance, AxiosError} from 'axios';
import loadingStore from '@/components/store/loading-store';
import useAlertStore from "@/store/use-alert-store";

let baseURL = process.env.NEXT_PUBLIC_API_URL;

const {startLoading, stopLoading} = loadingStore.getState();
const {showAlert, hideAlert} = useAlertStore.getState();

const service: AxiosInstance = axios.create({
  timeout: 10000,
  baseURL: baseURL,
});
service.interceptors.request.use(
  (request: any) => {
    axiosOnLoad();
    return request;
  },
  (error: AxiosError) => {
    stopLoading();
    console.log(error);
    return Promise.reject();
  }
);
service.interceptors.response.use(
  (response: any) => {
    stopLoading();
    if (response.status === 200) {
      return response;
    } else {
      Promise.reject();
    }
  },
  (error: AxiosError) => {
    stopLoading();
    const data: any = error.response?.data;
    switch (error.response?.status) {
      case 401:
      case 403:
        // alert.open({title: null, message: data.message, redirect: '/login'});
        return Promise.reject();
      case 503:
        showAlert({
          message: data.message,
          buttons: [{
            type: 'on',
            text: '확인',
            callback: () => {
              hideAlert();
            }
          }]
        });
        break;
      default:
        break;
    }
    return Promise.reject();
  }
);

export function axiosOnLoad() {
  startLoading();
}

export function axiosOnLoaded() {
  stopLoading();
}

export default service;
