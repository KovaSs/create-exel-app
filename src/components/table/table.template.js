const CODES = {
  A: 65,
  Z: 90
}

function createSell() {
  return `<div class="cell selected" contenteditable></div>`
}

function toColumn(col) {
  return `<div class="column">${col}</div>`
}

function createRow(content) {
  return `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, i) {
  return String.fromCharCode(CODES.A + i)
}

export default function createTable(rowCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(cols))
  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow())
  }
  return rows.join('')
}
