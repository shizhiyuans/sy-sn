import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        username:"949505887",
        password:"123456",
        path:"five",
        say:'1',
        see:"1",
        // linshinum:"1",
        num:0,
        list:[
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/xqUJtMLxt8bjoM44QFWjeA.jpg?format=_is_300w_300h_4e.webp",
                title1:"恒大兴安葵花籽橄榄食用植物调和油5L桶装家用天然优质葵花籽",
                title2:"自营",
                price1:"49",
                price2:".9",
                pingjia:"4600+评价",
                number:"1"
            },
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/fvcViToSANTX3LnkjZNwaA.jpg?format=_is_300w_300h_4e.webp",
                title1:"恒大冰泉低钠水 350ml*24 低钠水婴儿水弱碱性天然矿泉水饮用水母婴水瓶装水",
                title2:"自营",
                price1:"59",
                price2:".9",
                pingjia:"100+评价",
                number:"1"
            },
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/quqZqe1OkGmtaf0NrMsYeQ.jpg?format=_is_300w_300h_4e.webp",
                title1:"三元 小方白纯牛奶200ml*24盒",
                title2:"自营",
                price1:"56",
                price2:"",
                pingjia:"400+评价",
                number:"1"
            },
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/eEfWjCbIlDlbyidSeMLPQQ.jpg?format=_is_300w_300h_4e.webp",
                title1:"【新品】Apple二代新款AirPods（配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                title2:"自营",
                price1:"1199",
                price2:"",
                pingjia:"5.2万+评价",
                number:"1"
            }
        ],
        list2:[
            {
                images:"//imgservice.suning.cn/uimg1/b2c/atmosphere/YZtn5ROk8QJVjdDU9zhfQQ.jpg?format=_is_300w_300h_4e.webp",
                title1:"南极人(NanJiren)家纺 简约全棉四件套床上用品纯棉斜纹双人被套床单式4件套1.51.8m床 思羽情怀灰 1.5m/1.8m床通用(被套200*230cm)",
                title2:"自营",
                price1:"129",
                price2:".9",
                pingjia:"2.4万+评价",
                number:"1"
            },
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/Ft3qfOcqOUjM8oHuneepAQ.jpg?format=_is_300w_300h_4e.webp",
                title1:"虎牌（tiger）保温杯 MMJ-A48C 480ml 藏蓝色KA 一键开启弹盖杯 轻量时尚水杯 保温保冷杯子 藏蓝色",
                title2:"自营",
                price1:"192",
                price2:"",
                pingjia:"100+评价",
                number:"1"
            },
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/04CRPBqTXpK38VL1xeQNww.jpg?format=_is_300w_300h_4e.webp",
                title1:"苹果(Apple) iPhone 11 128GB 黑色 移动联通电信4G全网通手机 双卡双待",
                title2:"自营",
                price1:"5688",
                price2:"",
                pingjia:"400+评价",
                number:"1"
            },
            {
                images:"//imgservice.suning.cn/uimg1/b2c/image/-rGu6nblFMvmPuN7coB8ZA.jpg?format=_is_300w_300h_4e.webp",
                title1:"稻可道 粳米 东北大米 东北珍珠米 5KG",
                title2:"自营",
                price1:"24",
                price2:".9",
                pingjia:"5.2万+评价",
                number:"1"
            }
        ],
        obj:{},
        arr:[
            
        ]
    
    },
    mutations:{
        change(state){
            state.path = "six"
            localStorage.setItem("path",JSON.stringify(state.path))
        },
        gaibian(state) {
            state.say = '0';
            localStorage.setItem("suiyi",JSON.stringify(state.say))
        },
        clickO(state){
            state.see = '1';
            localStorage.setItem("see",JSON.stringify(state.see))
        },
        clickt(state){
            state.see = '2';
            localStorage.setItem("see",JSON.stringify(state.see))
        },
        clicks(state){
            state.see = '3';
            localStorage.setItem("see",JSON.stringify(state.see))
        },
        // zengjia(state){
        //     state.linshinum++;
        // },
        // jianshao(state){
        //     if(state.num>0){
        //     state.linshinum--;
        // }
        // },
        // cunzhu(state) {
        //     state.obj.number =  state.linshinum
        //     state.num +=state.obj.number
        //     localStorage.setItem("num",JSON.stringify(state.num))
        //     if(state.arr.indexOf(state.obj)<0){
        //         state.arr.push(state.obj)
        //         localStorage.setItem("arr",JSON.stringify(state.arr))
        //     }
        //     state.linshinum = "1"
        // },
        jiarugouwuche(state) {
            state.num +=state.obj.number
            localStorage.setItem("num",JSON.stringify(state.num))

                let titleList = state.arr.map(({title1}) => title1);
                let has;
                if (titleList.includes(state.obj.title1)) {
                    has = true;
                } else{
                    has = false;
                }
                console.log(has, 'ddd');
                if (has) {
                    state.arr.forEach(item => {
                        if (item.title1 == state.obj.title1) {
                            item.number += parseInt(state.obj.number)
                        }
                    })
                } else {
                    state.arr.push(state.obj)
                }
                
                localStorage.setItem("arr",JSON.stringify(state.arr))

            // state.arr.push(state.obj)
            // localStorage.setItem("arr",JSON.stringify(state.arr))
        },
        houguanxin(state,index) {
                state.obj = {               
                images:state.list2[index].images,
                title1:state.list2[index].title1,
                title2:state.list2[index].title2,
                price1:state.list2[index].price1,
                price2:state.list2[index].price2,
                pingjia:state.list2[index].pingjia,
                number:1
            },
            localStorage.setItem("obj",JSON.stringify(state.obj))
        },
        houguanxin2(state,index) {
                state.obj = {               
                images:state.list[index].images,
                title1:state.list[index].title1,
                title2:state.list[index].title2,
                price1:state.list[index].price1,
                price2:state.list[index].price2,
                pingjia:state.list[index].pingjia,
                number:1
            },
            localStorage.setItem("obj",JSON.stringify(state.obj))
        },
        wanglingjian(state,index){
            if(state.arr[index].number>1){
                state.arr[index].number--
                localStorage.setItem("arr",JSON.stringify(state.arr))
                state.num--;
                localStorage.setItem("num",JSON.stringify(state.num))
            }
        },
        wanglingjia(state,index){
                state.arr[index].number++
                localStorage.setItem("arr",JSON.stringify(state.arr))
                state.num++;
                localStorage.setItem("num",JSON.stringify(state.num))
                console.log(state.num)
        },

    }

})

export default store