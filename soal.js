function cariLurahBaru(calons) {
    if (calons.length == 0) {
        return -1;
    }
    let obj = {};
    for (const n of calons) {
        if (obj[n] == undefined) {
            obj[n] = 1;
        } else {
            obj[n]++;
        }
    }
    // console.log(Object.values(obj));
    let max = Math.max(...Object.values(obj));

    let arr = [];
    for (const key in obj) {
        if (obj[key] == max) {
            arr.push(key);
        }
    }

    // console.log(arr);
    if (arr.length > 1) {
        return 'Pemilihan ulang';
    }
    if (arr.length == 1) {
        return arr[0];
    }
}

console.log(cariLurahBaru([1, 2, 1, 3, 2, 3, 2, 3]));
console.log(cariLurahBaru([1, 2, 1, 3, 3, 2, 3]));
console.log(cariLurahBaru([1]));
console.log(cariLurahBaru([]));
