import { ExcelComponent } from '@core'

export default class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return `
      <div class="row">
        <div class="row-info"></div>
        <!-- </.row-info>-->
        <div class="row-data">
          <div class="column"> A </div>
          <div class="column"> B </div>
          <div class="column"> C </div>
        </div>
        <!-- </.row-data>-->
        </div>
        <!-- </.row>-->
        <div class="row">
          <div class="row-info"> 1 </div>
          <!-- </.row-info>-->
          <div class="row-data">
            <div class="cell selected" contenteditable="">A1</div>
            <div class="cell" contenteditable="">B2</div>
            <div class="cell" contenteditable="">C3</div>
          </div>
          <!-- </.row-data>-->
        </div>
        <!-- </.row>-->
        <div class="row">
          <div class="row-info"> 2 </div>
          <!-- </.row-info>-->
          <div class="row-data">
            <div class="cell" contenteditable="">A1</div>
            <div class="cell" contenteditable="">B2</div>
            <div class="cell" contenteditable="">C3</div>
          </div>
          <!-- </.row-data>-->
        </div>
        <!-- </.row>-->
      </div>
    `
  }
}
