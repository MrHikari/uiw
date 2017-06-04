## Icon 图标

语义化的矢量图形，内置的图标属于UI框架常用图形字体。

### 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 `type` 属性，示例代码如下:

```html
<Icon type="arrow-down" />
```

### 添加图标字体方法

默认建议使用 `svg` 来制作图标，如果使用字体文件，需要添加字体文件，并在 `css` 写符合规范的样式，这个文件通过 [iconfont.cn](http://iconfont.cn/) 来制作字体文件。  
`icon` 名字需要命名规范，必须加上前缀 `.w-icon-{图标名字}` 。

```css
@font-face {font-family: "iconfont";
  src: url('iconfont.eot'); /* IE9*/
  src: url('iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
  url('iconfont.woff') format('woff'), /* chrome, firefox */
  url('iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.w-icon-wxbgongju:before { content: "\e61b"; }
.w-icon-wxbmingxingdianpu:before { content: "\e61c"; }
```

上面写好CSS之后在组件中引用，就可以通过 `Icon` 组件来调用了，例如上面定义了两个图标使用方法如下

```js
<Icon type="wxbgongju" />
<Icon type="wxbmingxingdianpu" />
```

### 图标列表

<!--DemoStart--> 
```js
render() {
  const {Row,Col} = Layout;
  const styleItem = {textAlign:"center",padding:"20px 10px",background: "#f4f4f4",marginBottom:"10px"};
  const iconList = ["arrow-down", "arrow-left", "arrow-right", "arrow-up", "caret-bottom", "caret-left", "caret-right", "caret-top", "check", "circle-check", "circle-close", "circle-cross", "close", "upload", "d-arrow-left", "d-arrow-right", "d-caret", "date", "delete", "document", "edit", "information", "loading", "menu", "message", "minus", "more", "picture", "plus", "search", "setting", "share", "star-off", "star-on", "time", "warning", "delete2", "upload2", "view"]
  return (
    <div>
      <Row gutter="10">
      {
        iconList.map((item,idx) => {
          item
          return (
            <Col key={idx} xs="8" sm="6" md="4" lg="4">
              <div style={styleItem}>
                  <Icon type={item} />
                  <div>{item}</div>
              </div>
            </Col>
          )
        }) 
      }
      </Row>
    </div>
  )
}
```
<!--End-->