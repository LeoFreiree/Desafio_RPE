export const removeAccents = str => {
    var strAccents = str.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents =    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeCcdDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');

    return strAccentsOut;
}

export const getRandomName = length => {

    var result = ''
    for (var index = 0; index < length; index++) {
        if (index % 2){
            var vowel = getRandomVowel(1)
            result += vowel.charAt(Math.floor(Math.random() * vowel));
        }else{
            var consonant = getRandomConsonant(1)
            result += consonant.charAt(Math.floor(Math.random() * consonant));
        }
    }
    return result
}

export const getRandomVowel = length => {
    var result = '';
    var characters = 'AEIOU';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const getRandomConsonant = length => {
    var result = '';
    var characters = 'BCDFGHJKLMNPQRSTVWXYZ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const getCpf = () => {
    const rnd = n => Math.round(Math.random() * n);
    const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
    const n = Array(9).fill('').map(() => rnd(9));

    let d1 = n.reduce((total, number, index) => (total + (number * (10 - index))), 0)
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;

    let d2 = (d1 * 2) + n.reduce((total, number, index) => (total + (number * (11 - index))), 0)
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;

    return formatCPF(`${n.join('')}${d1}-${d2}`)
}

function formatCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}