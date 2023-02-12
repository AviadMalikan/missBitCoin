


const KEY = 'bitcoin'

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}


async function getRate() {
    var rate = await dbService.query(KEY)

    console.log(rate)
    if (!rate || !rate.length) {
        rate = _createUsers()
        await dbService.insert(KEY, rate)
    }
    return rate
}

async function getMarketPriceHistory() {
    var PriceHistory = await dbService.query(KEY)

    console.log(PriceHistory)
    if (!PriceHistory || !PriceHistory.length) {
        PriceHistory = _createUsers()
        await dbService.insert(KEY, PriceHistory)
    }
    return PriceHistory
}

async function getAvgBlockSize() {
    var blockSize = await dbService.query(KEY)

    console.log(blockSize)
    if (!blockSize || !blockSize.length) {
        blockSize = _createUsers()
        await dbService.insert(KEY, blockSize)
    }
    return blockSize
}

