const typeArray = [
    {
        typeId:1,
        name:'快餐便当'
    },
    {
        typeId:2,
        name:'米粉面食'
    },
    {
        typeId:3,
        name:'汉堡西餐'
    },
    {
        typeId:4,
        name:'日韩料理'
    },
    {
        typeId:5,
        name:'香锅水煮'
    },
    {
        typeId:6,
        name:'烧烤串串'
    },
    {
        typeId:7,
        name:'奶茶甜点'
    },
    {
        typeId:8,
        name:'轻食小吃'
    },
]

export const typeName = (typeId) => {
    let name = ""
    typeArray.forEach((value) => {
        if(value.typeId === typeId){
            name = value.name
        }
    })
    return name
}