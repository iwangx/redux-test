# 注意事项

## 1.资源文件夹别名如下：
```javascript
//jsx控件文件夹
controlJs: path.join(__dirname, config.base + '/js/components'),
//jsx页面文件夹
pageJs:path.join(__dirname, config.base + '/js/pages'),
//js工具文件
utilJs:path.join(__dirname, config.base + '/js/util'),
//页面css文件夹
pageCss: path.join(__dirname, config.base + '/css/pages'),
//控件css文件夹
controlCss:path.join(__dirname, config.base + '/css/components'),
//工具css文件夹
utilCss:path.join(__dirname, config.base + '/css/util')
```
## 2.html文件模板暂时存放在template文件夹下，下面配置中的template属性暂时都用这个文件，如果以后扩展在去修改
```javascript
new HtmlWebpackPlugin({
    filename: 'index.html',
    title: '微票儿－微信电影票',
    template: 'template/index.template.html',
    chunks: ["react","pages"]
})
```
## 3.fonts文件夹中存放淘宝iconfont生成后的所有文件，当然要把生成的iconfont.css重命名为iconfont.scss方便在scss中调用（ps：因为scss在编译的时候会把@import 进去的css文件当作真的import）

## 4.现在采用的自适应为1px＝＝1rem，所以在写scss的时候大小都为设计图大小除以2就可以

## 5.其他一切遵照规范执行，如果有更好的意见或者建议就邮件给我