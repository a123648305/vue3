import { createStore } from 'vuex'
import test from './module/test'
import common from './common'
export default createStore({
	modules:{common,test}
})
