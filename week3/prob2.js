// P2.Simple Calculator
// url을 이용해 간단한 계산기를 작성해봅시다.

// 구현할 연산: 덧셈(add), 뺄셈(sub), 곱셈(mul), 나눗셈(div)
// url 형식
// localhost: 8080 / operator / num1 / num2 (ex) localhost: 8080 / add / 1 / 2
// 나눗셈에서 0 으로 나누는 경우는 에러는 없다고 가정
// Hint1: req.url을 적절히 parsing한다.
// Hint2: Number, String과 같은 형변환을 적절히 수행한다.

const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    const splitUrl = (req.url).split("/");
    const operator = splitUrl[1];
    const num1 = Number(splitUrl[2]);
    const num2 = Number(splitUrl[3]);
    if (operator == 'add') {
        res.write(`<p>${num1+num2}</p>`);
    } else if (operator == 'sub') {
        res.write(`<p>${num1-num2}</p>`);
    } else if (operator == 'mul') {
        res.write(`<p>${num1*num2}</p>`);
    } else if (operator == 'div') {
        res.write(`<p>${num1/num2}</p>`);
    } else {
        res.write('<p>error</p>');
    }
    res.end();
});


server.listen(port);