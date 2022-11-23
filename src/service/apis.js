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
export const getDish = (food_id) => {
    return postMethod("/user/food_information",{
        food_id
    })
}

