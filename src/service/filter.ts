export function imgFilter(img:String){
    let match=/pic\d+/g
    return img.replace(match,"pic3")
}


