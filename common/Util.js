import Vue from 'vue-native-core'
import Labels from '../lang/Labels.json'
import Messages from '../lang/Messages.json'

Vue.mixin(
    {
        methods:{
            GLB_getLbl(lblKey){
                langKey = "mm"
                return Labels[lblKey][langKey]
            },
            GLB_getMsg(msgKey){
                langKey = "mm"
                return Messages[msgKey][langKey]
            }
        }
    }
)

export default {
    name: 'Util'
}