import ReactDOM from 'react-dom'
import { App } from './App'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'sans-serif', 'Material-Icons'],
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
