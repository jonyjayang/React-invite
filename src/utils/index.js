/*
包含n个工具函数的模块
 */
/*
注册Boss--> /Bossinfo
注册JobSeeker--> /JobSeekeinfo
登陆Boss --> /Bossinfo 或者 /Boss
登陆JobSeeker --> /JobSeekeinfo 或者 /JobSeeke
 */
export function getRedirectTo(type, avatar) {
    let url = (type === "boss") ? "/boss" : "/genius";
    if (!avatar) {
        url += 'info';
    }
    return url;
}
