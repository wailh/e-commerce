
export function getProduct(id) {
    return storeProducts.find(m => m.id === id) 
}
export let storeProducts = [
    {
        id:4,
        name: 'Huawei P20',
        company: {_id: 'slkdfja5s56df8a3d2f1df6', name:'Huawei'},
        img: 'phones/huawei p20.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 129, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     
        incart: false,
        total: 0},
    {
        id:20,
        name: 'Huawei P30 Lite',
        company: {_id: 'slkdfja5s56df8a3d2f1df6', name:'Huawei'},
        img: 'phones/huawei p30 lite.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 265, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     
        incart: false,
        total: 0},
    {
        id:30,
        name: 'Huawei P48',
        company: {_id: 'slkdfja5s56df8a3d2f1df6', name:'Huawei'},
        img: 'phones/huawei p48.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 322,
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     
        incart: false,
        total: 0},
    {
        id:40,
        name: 'Iphone 11',
        company: {_id: 'slkdfja5s56df8a3d2f1df6A', name:'Apple'},
        img: 'phones/iphone 11.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 125, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     
        incart: false,
        total: 0},
    {
        id:50,
        name: 'Iphone 13',
        company: {_id: 'slkdfja5s56df8a3d2f1df6A', name:'Apple'},
        img: 'phones/iphone 13.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 230,
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:60,
        name: 'Iphone XS',
        company: {_id: 'slkdfja5s56df8a3d2f1df6A', name:'Apple'},
        img: 'phones/iphone xs (apple).jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 366, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:70,
        name: 'Oppo A53s ocean',
        company: {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'},
        img: 'phones/oppo a53s ocean.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 145,
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:80,
        name: 'Oppo A16',
        company: {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'},
        img: 'phones/oppo a16.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 123, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:90,
        name: 'Oppo A54 5G',
        company: {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'},
        img: 'phones/oppo a54 5g.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 198, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:10,
        name: 'Oppo A72 2020',
        company: {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'},
        img: 'phones/oppo a72 2020.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 150, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:11,
        name: 'Oppo find X2 Pro',
        company: {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'},
        img: 'phones/oppo find x3 pro.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 210, 
    },
    {
        id:12,
        name: 'Oppo Reno4 Lite',
        company: {_id: 'slkdfja5s56df8a3d2f1df6O', name:'Oppo'},
        img: 'phones/oppo reno4 lite.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 164, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:13,
        name: 'Samsung A72',
        company: {_id: 'slkdfja5s56df8a3d2f1df6S', name:'Samsung'},
        img: 'phones/samsung a72.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 260, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:14 ,
        name: 'Samsung S10 Plus',
        company: {_id: 'slkdfja5s56df8a3d2f1df6S', name:'Samsung'},
        img: 'phones/samsung s10p lus.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 310, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:15,
        name: 'Samsung S21',
        company: {_id: 'slkdfja5s56df8a3d2f1df6S', name:'Samsung'},
        img: 'phones/samsung s21.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 244, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:16,
        name: 'Samsung M51',
        company: {_id: 'slkdfja5s56df8a3d2f1df6S', name:'Samsung'},
        img: 'phones/sumsung m51.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 220, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:17,
        name: 'Samsung S22',
        company: {_id: 'slkdfja5s56df8a3d2f1df6S', name:'Samsung'},
        img: 'phones/sumsung s22.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 235, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:18,
        name: 'Xiaomi Note 9 Pro',
        company: {_id: 'slkdfja5s56df8a3d2f1df6Z', name:'Xiaomi'},
        img: 'phones/xiaomi note 9 pro.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 320, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
    {
        id:19,
        name: 'Xiaomi Note 9S',
        company: {_id: 'slkdfja5s56df8a3d2f1df6Z', name:'Xiaomi'},
        img: 'phones/xiaomi note 9s.jpg',
        count: 0,
        dailyRentalRate: 2.5,
        price: 280, 
        info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     

        incart: false,
        total: 0},
]

export let productDetail = {
    id:'1',
    name: 'Huawei P20',
    company: {_id: 'slkdfja5s56df8a3d2f1df6', name:'Huawei'},
    img: 'phones/huawei p20.jpg',
    count: 0,
    dailyRentalRate: 2.5,
    price: 129, 
    info: "Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable Lorem ipsum dolor amet offal butcher quinoa sustainable",     
    incart: false,
    count: 0,
    total: 0}