'use strict'

export const utilService = {
    makeId,
    getRandomInt,
    makeEmail,
    makePhoneNum,
}

function makeId() {
    var pt1 = Date.now().toString(16)
    var pt2 = getRandomInt(1000, 9999).toString(16)
    var pt3 = getRandomInt(1000, 9999).toString(16)
    return `${pt3}-${pt1}-${pt2}`.toUpperCase()
}
function makePhoneNum() {
    var nums = '0123456789'
    var str = '(+972) '
    for (var i = 0; i < 9; i++) {
        if (i === 2) str += '-'
        if (i === 5) str += '-'
        str += nums[Math.floor(Math.random() * nums.length)]
    }
    return str
}

function makeEmail() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for (var ii = 0; ii < 7; ii++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return (string + '@gmail.com')
}

function getRandomInt(num1, num2) {
    var max = num1 >= num2 ? num1 + 1 : num2 + 1
    var min = num1 <= num2 ? num1 : num2
    return Math.floor(Math.random() * (max - min)) + min
}
