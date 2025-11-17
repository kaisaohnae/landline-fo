import {apiConfig} from '@/config/api-config';

export default {
  async setCounsel(json?: any) {
    const res = await apiConfig('/app/set-counsel', json || {});
    return res.data;
  },
  async getCode(json?: any) {
    const res = await apiConfig('/app/get-code', json || {});
    return res.data;
  }
};
