import {
    postMethod
} from "./api";


export const sendTag = (id,tag) => {
    return postMethod("/user/add_tag",{
        id,
        tag
    })
}
export const getSuggestion = (id) => {
    return postMethod("/user/daily_recommend",{
        id
    })
}
export const doLike = (id,food_id) => {
    return postMethod("/user/likes_nums",{
        id,
        food_id
    })
}
export const doCollect = (id,food_id) => {
    return postMethod("/user/collcetion",{
        id,
        food_id
    })
}
export const getFanuu = (id) => {
    return postMethod("/user/recommend_friends",{
        id
    })
}
export const getDish = (id,food_id) => {
    return postMethod("/user/food_information",{
        id,
        food_id
    })
}

export const login = (platCode) => {
    return postMethod("/user/login",{
        platCode
    })
}
export const creatNick = (id,openid) => {
    return postMethod("/user/create_id",{
        id,
        openid
    })
}
export const setInfo = (id,head,sex,identity,signature) => {
    return postMethod("/user/alter_user",{
        id,
        head,
        sex,
        identity,
        signature
    })
}
export const personalInfo = (id) => {
    return postMethod("/user/person_information",{
        id,

    })
}
export const foodTopList = (tag,num) => {
    return postMethod("/user/food_rank",{
        tag,
        num
    })
}

