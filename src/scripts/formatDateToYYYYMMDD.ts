/**
 * Date型をYYYY-MM-DD形式の文字列に変換する関数
 * @param date Dateオブジェクト
 * @returns YYYY-MM-DD形式の文字列
 */
export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
