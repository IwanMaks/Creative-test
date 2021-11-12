const addZero = (n) => n < 10 ? '0' + n : n

export const parseTime = (timeCount) => {
    return addZero(Math.floor((timeCount / 60000) % 60)) + ':' + addZero(Math.floor((timeCount / 1000) % 60))
}
