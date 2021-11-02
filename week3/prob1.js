// P1.타이머
// localhost: 8080 / timer에 접속하면 한국 시간을 기준으로 현재 시간을 브라우저에 출력해주세요.

// 출력 형식: YYYY - MM - DD HH24: MI: SS
// Hint: 시간과 관련된 라이브러리로는 date - utils와 moment 두 가지가 있습니다.본인이 생각하기에 더 적절한 라이브러리를 선택해 HW를 작성해주세요!


const http = require('http');
const moment = require('moment');
const port = 8080;

const server = http.createServer((req, res) => {
    res.write(moment().format('YYYY - MM - DD ') + moment().format('HH: MM: SS'));
    res.end();
});

server.listen(port);

server.on('listening', () => {
    console.log(`server is running (port:${port})`);
});

server.on('error', (err) => {
    console.log('error occured', err);
});