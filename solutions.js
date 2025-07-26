// 1. Caesar Cipher (Encode and Decode)
function caesarCipher(str, shift, decode = false) {
    if (decode) shift = -shift;
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

// 2. Indian Currency Format
function formatIndianCurrency(number) {
    const parts = number.toString().split(".");
    let intPart = parts[0];
    const decimalPart = parts[1] || "";

    let lastThree = intPart.slice(-3);
    let other = intPart.slice(0, -3);
    if (other) {
        other = other.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
        intPart = other + "," + lastThree;
    }
    return decimalPart ? intPart + "." + decimalPart : intPart;
}

// 3. Combine Elements by Position
function combineLists(list1, list2) {
    const result = [];
    const all = [...list1, ...list2].sort((a, b) => a.positions[0] - b.positions[0]);

    for (let i = 0; i < all.length; i++) {
        const current = all[i];
        const last = result[result.length - 1];
        if (
            last &&
            current.positions[0] >= last.positions[0] &&
            current.positions[1] <= last.positions[1]
        ) {
            last.values.push(...current.values);
        } else {
            result.push({ ...current, values: [...current.values] });
        }
    }

    return result;
}

// 4. Minimizing Loss
function minimizeLoss(prices) {
    let minLoss = Infinity;
    let buyYear = -1;
    let sellYear = -1;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] < prices[i]) {
                const loss = prices[i] - prices[j];
                if (loss < minLoss) {
                    minLoss = loss;
                    buyYear = i + 1;
                    sellYear = j + 1;
                }
            }
        }
    }

    return { buyYear, sellYear, minLoss };
}
