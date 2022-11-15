import {
    postMethod
} from "./api";

export const sendTag = (id,tag) => {
    return postMethod("",{
        id,
        tag
    })
}
export const getSuggestion = (id) => {
    return postMethod("",{
        id
    })
}
export const doLike = (id,food_id) => {
    return postMethod("",{
        id,
        food_id
    })
}
export const doCollect = (id,tag) => {
    return postMethod("",{
        id,
        tag
    })
}
export const getFanuu = (id) => {
    return postMethod("",{
        id
    })
}
export const getDish = (food_id) => {
    return postMethod("",{
        food_id
    })
}