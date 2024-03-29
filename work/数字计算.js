// 当非整数进行 + * 运算时，有时会出现精度问题，将他们都转成整数在进行计算，然后相除进行计算
// 造成这样的原因：因为js采用的是双精度版本， IEEE 754双精度版本(64位)，这个版本存在精度问题
// 在计算机中，数字使用二进制进行存储的，当数字转换为二进制的时候，当为无限循环的时候，js就会按照采用的浮点数标准进行截取，从而造成精度丢失是的 0.1 不在等于 0.1 的情况
const a = 1.1
const b = 3.2
console.log('a+b', a + b) // (a*10 + b*10)/10
console.log('a-b', a - b)
console.log('a*b', a * b) // ((a*10)*(b*10))/100
console.log('a/b', a / b)