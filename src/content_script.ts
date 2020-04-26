import $ from 'jquery'

/**
 * save-formで表示されている残労働時間を取得します。
 * 取得できない場合は空文字を返します
 */
const getRemainingWorkingTime = (): string => {
  const $unMatchTime = $('div#un-match-time')
  if (!$unMatchTime) {
    return ''
  }
  const unMatchTime = $unMatchTime.text().match(/\d{1,}:\d{1,}/)
  if (unMatchTime !== null) {
    return unMatchTime[0]
  }

  return ''
}

$(document).on('click', 'div.btn.btn-default', (event) => {
  if (event.currentTarget.textContent !== '＋') {
    return
  }
  $('input.man-hour-input').each((_, element) => {
    if ($(element).val() !== '') {
      return
    }
    $(element).val(getRemainingWorkingTime())
  })
})
