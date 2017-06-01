## Tags 标签

进行标记和分类的小标签。

### 多彩标签

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tags color="white">white</Tags>
        <Tags color="pink">pink</Tags>
        <Tags color="red">red</Tags>
        <Tags color="yellow">yellow</Tags>
        <Tags color="orange">orange</Tags>
        <Tags color="green">green</Tags>
        <Tags color="cyan">cyan</Tags>
        <Tags color="blue">blue</Tags>
        <Tags color="purple">purple</Tags>
    </div>
  )
}
```
<!--End-->


### 多彩英文标签

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tags color="default">default</Tags>
        <Tags color="error">error</Tags>
        <Tags color="warn">warn</Tags>
        <Tags color="success">success</Tags>
        <Tags color="info">info</Tags>
    </div>
  )
}
```
<!--End-->

### 多彩中文标签

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tags color="default">默认</Tags>
        <Tags color="error">错误</Tags>
        <Tags color="warn">警告</Tags>
        <Tags color="success">完成</Tags>
        <Tags color="info">信息</Tags>
    </div>
  )
}
```
<!--End-->

### 自定义颜色值

<!--DemoStart--> 
```js
render() {
  return (
    <div>
        <Tags color="#0080f2">#0080f2</Tags>
        <Tags color="rgba(0, 0, 0, 0.65)">rgba(0, 0, 0, 0.65)</Tags>
        <Tags color="hsla(214, 100%, 29%, 0.65)">hsla(214, 100%, 29%, 0.65)</Tags>
    </div>
  )
}
```
<!--End-->

### 动态删除

<!--DemoStart--> 
```js
log(e){
    console.log("--->",e) 
}
render() {
  return (
    <div>
        <Tags color="default" onClose={this.log}>默认</Tags>
        <Tags color="error" onClose={this.log}>错误</Tags>
        <Tags color="warn" onClose={this.log}>警告</Tags>
        <Tags color="success" onClose={this.log}>完成</Tags>
        <Tags color="info" onClose={this.log}>信息</Tags>
        <Tags color="info" onClose={(e)=>{
          e.preventDefault();
          console.log('Clicked! But prevent default.');

        }}>代码禁止删除的Tags方法</Tags>
    </div>
  )
}
```
<!--End-->



### Tags Attributes

| 参数      | 说明    | 类型      |  默认值   |
|--------- |-------- |---------- |-------- |
| color | 支持颜色自定义，也提供选择`white`、 `pink`、 `red`、 `yellow`、 `orange`、 `cyan`、 `green`、 `blue`、 `purple` | string | - |
| type⚠️ | 废弃直接在color里面填写后面面值，`white`、`red`、`orange`、`green`、`blue` | string | - |
| onClose | 关闭时的回调，添加事件自动会出现关闭按钮 | (e) => void | - |