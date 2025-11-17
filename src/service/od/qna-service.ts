import {apiConfig} from '@/config/api-config';

/**
 * qna
 */
class QnaService {
  async qna(json?: any) {
    const res = await apiConfig('/front/qna', json || {});
    return res.data;
  }
  async saveQna(json?: any) { // 주문 등록
    const res = await apiConfig('/front/save-qna', json || {});
    return res.data;
  }
}

export default new QnaService();
