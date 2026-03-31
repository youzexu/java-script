//可以手动赋值如果使用了常量或者函数则后面不会读到他自己的属性值
enum Color {
    Red,
    Green,
    Blue,
    Yellow,
    Purple
}

// axios({
//     url: 'http://localhost:3000/api/' + Color.Red,
// })
enum orderstatus {
    ok = "请求成功",
    err = "网络延迟",
    bad = "参数问题"
}

enum Api {

    detail = '/api/detail',
    list = '/api/list',
    user = '/api/user'
}
// axios({
//     url:Api.
// })