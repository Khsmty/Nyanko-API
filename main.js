//const express = require("express")//適当にかくの図
const fs = require('fs');
const files = fs.readdirSync('./data');
const each = files
  .map((a) =>
    fs
      .readdirSync('./data/' + a)
      .map((b) => './data/' + a + '/' + b)
      .join(',')
  )
  .join(',')
  .split(',')
  .map((a) => require(a));
//なにこれ
//読み込むやつ
