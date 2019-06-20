import Vue from 'vue'
import axios from 'axios'
import Websocket from 'websocket'
import baseUrl from '../../../setBaseUrl'
import store from '../../vuex/store' 
import apiString from '../../../public/js/apiString'

const _this =  Vue.prototype 


// http://192.168.0.111:8014/qiaoliang/websocket/{userName}

let W3CWebSocket = Websocket.w3cwebsocket;

export const connectSocket = account =>{
    return new Promise((resolve, reject)=>{
        if(account){
            let url = baseUrl.replace('http', '')
            let wsUrl = `ws${url}/websocket/${account}` 
            let client = new W3CWebSocket(wsUrl)
            resolve(client)
        }
    }).then(client=>{
        client.onopen = ()=> {
            console.log('WebSocket 连接成功');
        };

        client.onclose = ()=> {
            console.log('WebSocket 连接关闭');
        };
        
        client.onerror = ()=> {
            console.log('WebSocket 连接错误');
        };

        client.onmessage = e=> {
            if (e) {
                let msgData = JSON.parse(e.data)
                console.log(msgData)
                
                if(msgData.code == 'PUSH_MESSAGE'){
                    let params = {
                        method: 'find',
                        name: 'notifyRecord',
                        string: apiString['notifyRecord'].string,
                        tableName: 'nsm_qiaoliang_message',
                        data: {
                            pageSize: 10000,
                        }
                    }
                    
                    store.dispatch('ajax', params) 

                    _this.$notify.success({
                        message: '您有1条新消息',
                        duration: 2000,
                        offset: 100,
                    });
                }
            }
        };

        Vue.prototype.$socket = client
        return client
    }); 
};

if(store.getters.userGetters){
    connectSocket(store.getters.userGetters['登陆账号'])
}
