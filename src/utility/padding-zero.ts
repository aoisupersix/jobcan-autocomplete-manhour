/**
 * 引数に与えられた数値を最大桁数まで0で桁埋めします。
 * @param n 桁埋め対象の数値
 * @param digit 最大桁数
 */
export const paddingZero = (n: number, digit: number): string => {
  const zeros = Array(digit + 1).join('0')
  return (zeros + n).slice(-digit)
}
