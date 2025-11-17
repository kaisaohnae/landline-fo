import {apiConfig} from '@/config/api-config';

/**
 * 주문
 */
class OrderService {
  async calendar(json?: any) {
    const res = await apiConfig('/front/calendar', json || {});
    return res.data;
  }
  async saveOrder(json?: any) { // 주문 등록
    const res = await apiConfig('/front/save-order', json || {});
    return res.data;
  }
}

export default new OrderService();
