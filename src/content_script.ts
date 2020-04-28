import $ from 'jquery'

/**
 * 時間と分のセット
 */
type HourMinutes = {
  hour: number
  minutes: number
}

/**
 * save-formで表示されている残労働時間を取得します。
 * 取得できない場合はnullを返します
 */
const getRemainingWorkingHourAndMinutes = (): HourMinutes | null => {
  const $unMatchTime = $('div#un-match-time')
  if (!$unMatchTime) {
    return null
  }
  const unMatchTime = $unMatchTime.text().match(/(\d{1,}):(\d{1,})/)
  console.log(unMatchTime)
  if (unMatchTime !== null && unMatchTime.length > 2) {
    const [hour, minutes] = unMatchTime.slice(1).map((v) => parseInt(v))
    return { hour: hour, minutes: minutes }
  }

  return null
}

/**
 * save-formで表示されている残労働時間を取得します。
 * 取得できない場合は空文字を返します
 */
const getRemainingWorkingTimeString = (): string => {
  const hourMinutes = getRemainingWorkingHourAndMinutes()
  if (hourMinutes !== null) {
    return `${hourMinutes.hour}:${hourMinutes.minutes}`
  }

  return ''
}

/**
 * save-formで表示されている残労働時間を秒単位で取得します。
 * 取得できない場合は-1を返します
 */
const getRemainingWorkingMinutes = (): number => {
  const hourMinutes = getRemainingWorkingHourAndMinutes()
  if (hourMinutes !== null) {
    return hourMinutes.hour * 60 + hourMinutes.minutes
  }

  return -1
}

$(document).on('click', 'div.btn.btn-default', (event) => {
  if (event.currentTarget.textContent !== '＋') {
    return
  }

  $('input.man-hour-input').each((_, element) => {
    if ($(element).val() !== '') {
      return
    }
    $(element).val(getRemainingWorkingTimeString())

    $(element)
      .next("input[name='hiddenMinutes[]']")
      .val(getRemainingWorkingMinutes())
  })
})
