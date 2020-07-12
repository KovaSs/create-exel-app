const CODES = {
  A: 65,
  Z: 90
}

function toSell() {
  return `<div class="cell" contenteditable></div>`
}

function toColumn(col) {
  return `
    <div class="column">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, i) {
  const resize = i ? '<div class="row-resize" data-resize="col"></div>' : ''
  return `
    <div class="row">
      <div class="row-info">${(i + resize).trim()}</div>
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

  rows.push(createRow(cols, ''))

  for (let i = 0; i < rowCount; i++) {
    const sells = new Array(colsCount)
        .fill('')
        .map(toSell)
        .join('')
    rows.push(createRow(sells, i+1))
  }
  return rows.join('')
}
