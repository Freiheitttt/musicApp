import Vue from 'vue'
import Vuex from 'vuex'
import {shuffle} from '@/assets/js/util'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

let playMode={    //播放模式，
	sequence:0,
	loop:1,
	random:2
}

const state={
	playing:false,			      	//播放状态
	playlist:[],			        	//播放列表
	sequencelist:[],  		    	//顺序播放列表
	currentIndex:-1,            //当前播放索引
	fullScreen: false,			    //播放页面是否折叠
	other:{},					          //其他
	mylikeSongs:localStorage['mylikeSongs']?JSON.parse(localStorage['mylikeSongs']):[],
	playHistory:localStorage['playHistory']?JSON.parse(localStorage['playHistory']):[],
	searchHistory:localStorage['searchHistory']?JSON.parse(localStorage['searchHistory']):[],
}

const getters={
	currentSong(state) {
	  let Song = {...state.playlist[state.currentIndex]}||{}
	  if(Song.mid){
			//Song.url = `https://api.bzqll.com/music/tencent/url?id=${Song.mid}&key=579621905&br=320`
			Song.url = `http://m10.music.126.net/20200402173352/f61e1346943f7f18ba15eb09aa1db25c/ymusic/555b/045c/050e/b1d43894ee36db9882f22d08ffb907c6.mp3`
    }
		return Song||{}
	}
}

const mutations={
	setPlayingState(state,flag) {
		state.playing=flag
	},
	setFullScreenState(state,flag) {
		state.fullScreen=flag
	},
	setPlaylist(state,list) {
		state.playlist=list
	},
	setSequencelist(state,list) {
		state.sequencelist=list
	},
	setModeState(state,mode) {
		state.mode=mode
	},
	setCurrentIndex(state,index) {
		state.currentIndex=index
	},
	setOther(state,option){
		state.other = Object.assign(state.other,option)
	},
	addItem(state,payload) {
		//传入key和song
		state[payload.key].push(payload.song)
		localStorage.setItem(payload.key,JSON.stringify(state[payload.key]))
	},
	addItemPosition(state,payload) {
		state[payload.key].splice(payload.index,0,payload.song)
		localStorage.setItem(payload.key,JSON.stringify(state[payload.key]))
	},
	removeItem(state,payload) {
		//传入key和index
		state[payload.key].splice(payload.index,1)
		localStorage.setItem(payload.key,JSON.stringify(state[payload.key]))
	},
	clearList(state,key) {
		state[key]=[]
		localStorage.setItem(key,JSON.stringify(state[key]))
	}
}

const actions={
	selectPlay({commit,state},{list,index}) {
		commit('setSequencelist',list)
		if (state.mode === playMode.random) {
			let randomList = shuffle(list)
			commit('setPlaylist',randomList)
			//打乱数组后index也会变化
			let oindex=index
			index = randomList.findIndex((item)=>{
				return item.id=== list[oindex].id
			})
		}else {
			commit('setPlaylist',list)
		}
		commit('setCurrentIndex',index)
		commit('setPlayingState',true)
	}
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	strict: debug,
	plugins: debug ? [createLogger()] : []
})
