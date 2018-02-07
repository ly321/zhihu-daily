
//最新消息
export interface NewsLatest{
    date:String,
    stories:Store[],
    top_stories:Store[],
}
 interface Store{
    images:String[],
    type:Number,
    id:Number,
    ga_prefix?:String,
    title:String
}

//主题列表
export interface Themes{
    limit:Number,
    subscribed:String[],    //数据源为空数组
    others:Theme[]
}
interface Theme{
    color:Number,
    thumbnail:String,
    description:String,
    id:Number,
    name:String,
}

//页面内容
export interface NewsContent{
    body:String,
    image_source:String,
    title:String,
    image:String,
    share_url:String,
    js:String[],  //数据源为空数组
    ga_prefix:String,
    images:String[],
    type:Number,
    id:Number,
    css:String[]
}

//主题内容
export interface ThemeContent{
    stories:Store[],
    description:String,
    background:String,
    color:Number,
    name:String,
    image:String,
    editors:Editor[],
    image_source:String,
}
interface Editor{
    url:String,
    bio:String,
    id:Number,
    avatar:String,
    name:String,
}

//页面header
export interface HeaderStyle{
    menu?:Boolean,
    title?:String,
    notice?:Boolean,
    skin?:Boolean,
    share?:Boolean,
    like?:Boolean,
    commment?:Boolean,
}


//HomeState
export interface HomeState{
    stories?:Store[],
    top_stories:Store[]
}

//SidebarState
export interface SidebarState{
    sidebarList:Theme[]
}