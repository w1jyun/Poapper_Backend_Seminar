// s 라이브러리 사용하여 json파일 만들기
// fs 라이브러리의 writeFileSync() 함수를 활용하여 json 파일을 만들어
// 여러분이 수강하는 과목 중 하나의 전공책에 대한 정보를 json 객체로 만들어
// textbook.json라는 이름의 json 파일로 저장할 수 있는 javascript 코드

const fs = require("fs");

const data = `{
    "과목명": "운영체제",
    "학수번호": "CSED312",
    "도서명": "Operating Systems Principles and Practice",
    "저자명": "Thomas Anderson and Michael Dahlin Recursive",
    "출판사": "Recursive Books",
    "출판년도": "2014",
    "ISBN": "978-0-9856735-2-9"
}`;

fs.writeFileSync('./textbook.json', data, 'utf8');