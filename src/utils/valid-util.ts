/**
 * 숫자만 입력하게 제한하는 함수
 * @param value 입력값
 * @returns 숫자만 포함된 문자열
 */
export const restrictNumeric = (value: string): string => {
  if (/^\d*$/.test(value)) {
    return value;
  }
  return value.replace(/\D/g, '');
};

/**
 * 공백 및 특수문자 입력 제한 함수
 * @param value
 * @returns 한글, 숫자, 영문만 포함된 문자열
 */
export const restrictSpecialCharacters = (value: string): string => {
  return value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g, '');
};

/**
 * 이름 중간 공백 허용 유효성 체크 시 사용
 * @param value
 */
export const restrictNameWithSpace = (value: string): string => {
  return value.trim();
};

/**
 * 숫자와 하나의 하이픈('-')만 입력하게 제한하는 함수
 *
 * @param value 입력값
 * @returns 숫자와 하나의 하이픈만 포함된 문자열
 */
export const restrictNumericWithDash = (value: string): string => {
  // 숫자와 하이픈만 남기고 제거
  const filteredValue = value.replace(/[^0-9-]/g, '');
  // 연속된 하이픈 제거
  return filteredValue.replace(/-+/g, '-');
};

/**
 * 최소 10자리 비밀번호 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합
 * @param value
 */
export const isValidPassword = (value: string): boolean => {
  const lengthValid = /^.{10,}$/.test(value);
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasDigit = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*]/.test(value);

  const typesCount = [hasLetter, hasDigit, hasSpecialChar].filter(Boolean).length;
  return lengthValid && typesCount >= 2;
};

/**
 * 이메일 형식으로 입력하게 제한하는 함수
 * @param value 입력값
 * @returns 이메일 형식이면 true
 */
export const isValidEmail = (value: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

/**
 * 전화번호 형식의 값인지 판단하는 함수
 * 010 또는 999로 시작하고, 3~4자리 숫자, 하이픈, 4자리 숫자로 구성
 * @param phoneNumber 입력한 전화번호
 * @returns 올바른 전화번호 형식이면 true
 */
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const regex = /^(010|999)(-?\d{3,4})-?\d{4}$/;
  return regex.test(phoneNumber);
};

