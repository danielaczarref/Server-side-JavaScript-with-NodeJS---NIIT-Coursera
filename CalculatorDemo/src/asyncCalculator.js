const asyncAdd = (a, b, cb) => {
    cb(a+b);
}

const asyncSub = (a, b, cb) => {
    cb(a-b);
}

export default {
    asyncAdd, asyncSub
}