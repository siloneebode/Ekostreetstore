import './css/app.scss'
import './elements/index.js'
import './pages/index.js'

import './modules/scrollreveal.js'
import './modules/highlight.js'
import { registerKonami, registerBadgeAlert } from '/modules/badges.js'
import { registerWindowHeightCSS } from '/modules/window.js'
import { registerHeader } from '/modules/header.js'


registerKonami()
registerBadgeAlert()
registerHeader()
registerWindowHeightCSS()




