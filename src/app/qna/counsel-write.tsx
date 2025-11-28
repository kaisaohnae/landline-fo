'use client';

import React, {useEffect, useRef, useState} from 'react';
import useAlertStore from '@/store/use-alert-store';
import AppService from '@/service/app-service';
import ReCAPTCHA from 'react-google-recaptcha';
import {useRouter} from 'next/navigation';

export default function CounselWrite() {
  const router = useRouter();
  const {showAlert, hideAlert} = useAlertStore();

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [counselCodes, setCounselCodes] = useState<{code: string; codeName: string}[]>([]);
  const [counselCode, setCounselCode] = useState('');

  const initForm = {
    memberName: '',
    phoneNo: '',
    content: ''
  };

  const [form, setForm] = useState(initForm);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setForm(prev => ({...prev, [name]: value}));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!counselCode) return showAlert({message: '상담유형을 선택해주세요.'});
    if (!form.memberName.trim()) return showAlert({message: '이름을 입력하세요.'});
    if (!/^[0-9]{10,11}$/.test(form.phoneNo)) return showAlert({message: '전화번호를 올바르게 입력하세요.'});
    if (!form.content.trim()) return showAlert({message: '상담내용을 입력하세요.'});

    if (!captchaValue) return showAlert({message: '로봇이 아님을 확인해주세요.'});

    const payload = {
      companyId: 'landline',
      counselCode,
      ...form,
      captcha: captchaValue
    };

    const res = await AppService.setCounsel(payload);

    showAlert({
      message: res.success ? '정상등록 되었습니다.' : res.message,
      buttons: [
        {
          type: 'on',
          text: '확인',
          callback: () => {
            hideAlert();
            if (res.success) router.replace('/');
          }
        }
      ]
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const res: any = await AppService.getCode({code: 'counselCode'});
        if (res.success) {
          setCounselCodes(res.data);
          if (res.data.length > 0) {
            setCounselCode(res.data[0].codeName); // 첫 항목 기본값
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <form className="counsel-form" onSubmit={submit}>
      <table className="write-table">
        <tbody>
          <tr>
            <th className="required">상담유형</th>
            <td>
              <select value={counselCode} onChange={e => setCounselCode(e.target.value)} required style={{width: '200px'}}>
                {counselCodes.map((item: any, idx: number) => (
                  <option key={idx as number} value={item.codeName}>
                    {item.codeName}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th className="required">이름</th>
            <td>
              <input name="memberName" value={form.memberName} onChange={handleChange} maxLength={20} required />
            </td>
          </tr>

          <tr>
            <th className="required">전화번호</th>
            <td>
              <input name="phoneNo" value={form.phoneNo} onChange={handleChange} maxLength={11} required />
            </td>
          </tr>

          <tr>
            <th className="required">상담내용</th>
            <td>
              <textarea name="content" value={form.content} onChange={handleChange} maxLength={200} required style={{height: '120px'}}></textarea>
              <div>{form.content.length} / 200 자</div>
            </td>
          </tr>

          <tr>
            <th className="required">로봇방지</th>
            <td>
              {/*6Let0hosAAAAAIhUUS7-vlI2oDxO-nxsmymhUOUy*/}
              <ReCAPTCHA ref={recaptchaRef} sitekey="6Let0hosAAAAAHg6mVjFmEfnCGBkBgwTJwC6CRIP" onChange={handleCaptchaChange} />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="button-wrapper">
        <button type="submit">신청하기</button>
      </div>
    </form>
  );
}
