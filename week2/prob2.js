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