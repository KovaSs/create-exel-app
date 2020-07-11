import { Excel, Header, Toolbar, Formula, Table } from '@components'

import './scss/index.scss'

const excel = new Excel('#app', {
  components: [
    Header,
    Toolbar,
    Formula,
    Table
  ]
})

excel.render()
