const todayDate =new Date();

// 日付確認用
// console.log(todayDate);

const year = todayDate.getFullYear();

// console.log(year);

const month = todayDate.getMonth() + 1;

// console.log(month);

const date = todayDate.getDate();

// console.log(date);


console.log(year + '年' + month + '月' + date + '日');