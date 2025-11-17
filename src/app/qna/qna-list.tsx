import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';
import QnaService from "@/service/od/qna-service";

export default function QnaList(): ReactElement {

  const [qnaList, setQnaList] = useState([]);

  useEffect(() => {

    (async () => {
      const res = await QnaService.qna({});
      setQnaList(res.data || [])
    })();

  }, []);

  return (
    <div className="qna-list">

      <div className="scroll-wrapper">
        <table className="list-table">
          <colgroup>
            <col width="100"/>
            <col width="100"/>
            <col width="150"/>
            <col width="*"/>
          </colgroup>
          <thead>
          <tr>
            <th>문의번호</th>
            <th>문의자명</th>
            <th>문의자전화번호</th>
            <th>제목</th>
          </tr>
          </thead>
          <tbody>
          {qnaList.length > 0 ? (
            qnaList.map((item: any) => (
              <tr key={item.qnaNo}>
                <td className="tc">{item.qnaNo}</td>
                <td>{item.memberName}</td>
                <td>{item.phoneNo}</td>
                <td>{item.title.length > 15 ? item.title.slice(0, 15) + '…' : item.title}</td>
              </tr>
            ))
          ) : (
            <>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
              <tr><td colSpan={4}></td></tr>
            </>
          )}
          </tbody>
        </table>
      </div>
      <p className="text-info">최근 문의내역 10개만 볼 수 있습니다.</p>

    </div>
  )
}
