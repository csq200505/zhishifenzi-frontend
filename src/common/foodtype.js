const typeArray = [
    {
        typeId:1,
        name:'快餐便当'
    },
    {
        typeId:2,
        name:'汉堡薯条'
    },
    {
        typeId:3,
        name:'意面披萨'
    },
    {
        typeId:4,
        name:'日料寿司'
    },
    {
        typeId:5,
        name:'火锅香锅'
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
        name:'轻食沙拉'
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