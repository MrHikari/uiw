## Modals 对话框

模态对话框。

### 基本用法

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    loading:true
  }
}

  showConfirm(){
    Modals.info({
      title: 'Want to delete these items s?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      okText: 'OK',
      cancelText: 'Cancel',
      maskClosable:false,
      className:"aaa",
      onOk:()=>{
        console.log("确定回调！1111")
      },
      onCancel:()=>{
        console.log("取消回调！222")
      },
    })
  }

  showConfirm2(){
    Modals.info({
      title: 'Want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      okText: '确定按钮',
      onOk:()=>{
        console.log("确定回调！")
      },
    })
  }

  showConfirm3(){
    Modals.error({
      title: 'Want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      okText: '确定按钮',
      onOk:()=>{
        console.log("确定回调！, 这里是利用Promise等执行完成再去关闭窗口")
        return new Promise((resolve, reject) => {
          console.log("test",Math.random() > 0.5,'--',resolve, reject)
          setTimeout(Math.random() > 0.5 ? resolve : reject, 3000);
        }).catch((e,a) => {
          console.log('Oops errors!',e,a)
        });
      },
    })
  }
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <ButtonsGroup>
      <Buttons size="small" onClick={this.showConfirm} type="default">确认对话框</Buttons>
      <Buttons size="small" onClick={this.showConfirm2} type="default">一个确认按钮对话框</Buttons>
      <Buttons size="small" onClick={this.showConfirm3.bind(this)} type="default">延迟关闭对话框</Buttons>
    </ButtonsGroup>
  )
}
```
<!--End-->

### 不同颜色的提示对话框

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    loading:true
  }
}


showConfirm4(){
  Modals.info({
    title: 'Want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    okText: '确定按钮',
    onOk() {
      console.log("确定回调！")
    },
  })
}

  showConfirm5(){
    Modals.warn({
      title: 'Want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      okText: '确定按钮',
      onOk() {
        console.log("确定回调！")
      },
    })
  }
  
  showConfirm6(){
  Modals.error({
    title: 'Want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    okText: '确定按钮',
    onOk() {
      console.log("确定回调！")
    },
  })
}

showConfirm7(){
  Modals.success({
    title: 'Want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    okText: '确定按钮',
    onOk() {
      console.log("确定回调！")
    },
  })
}
render() {
  const ButtonsGroup = Buttons.Group;
  return (
    <ButtonsGroup>
      <Buttons size="small" onClick={this.showConfirm4} type="info">消息</Buttons>
      <Buttons size="small" onClick={this.showConfirm5} type="warn">警告</Buttons>
      <Buttons size="small" onClick={this.showConfirm6} type="error">错误</Buttons>
      <Buttons size="small" onClick={this.showConfirm7} type="success">成功</Buttons>
    </ButtonsGroup>
  )
}
```
<!--End-->

### horizontal

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
     visible1:false,
     visible2:false,
     visible3:false,
     confirmLoading:false,
  }
}
render() {
  return (
    <div>
        <Buttons size="small" onClick={()=>{
          this.setState({visible1:true})
        }}>Right顶部留出空隙，隐藏遮罩层</Buttons>  &nbsp;
        <Modals 
          title="This Title" 
          horizontal="right"
          width={300}
          visible={this.state.visible1}
          styleMask={{ // 遮罩层样式
            "top": 60,
            "backgroundColor":"rgba(51, 51, 51, 0)"
          }} 
          style={{     // 弹出层容器样式
            //"top": 60
          }}
          onOk={()=>{
            this.setState({
              confirmLoading:true
            })

            setTimeout(() => {
              this.setState({
                visible1: false,
                confirmLoading: false,
              });
            }, 2000);

          }} // 点击确定提交按钮
          onCancel={()=>this.setState({visible1:false})}
          confirmLoading={this.state.confirmLoading}
          okText="OK" 
          cancelText="Cancel"
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
        </Modals>


        <Buttons size="small" onClick={()=>{
          this.setState({visible2:true})
        }}>Right顶部留出空隙</Buttons>  &nbsp;
        <Modals 
          title="This Title" 
          horizontal="right"
          width={300}
          visible={this.state.visible2}
          styleMask={{          // 遮罩层样式
            "top": 60,
            "backgroundColor":"rgba(51, 51, 51, 0.23)"
          }} 
          style={{
            "top": 60
          }}
          onOk={()=>{
            this.setState({
              confirmLoading:true
            })

            setTimeout(() => {
              this.setState({
                visible2: false,
                confirmLoading: false,
              });
            }, 2000);

          }} // 点击确定提交按钮
          onCancel={()=>this.setState({visible2:false})}
          confirmLoading={this.state.confirmLoading}
          okText="OK" 
          cancelText="Cancel"
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
        </Modals>


        <Buttons size="small" onClick={()=>{
          this.setState({visible3:true})
        }}>Left</Buttons>  &nbsp;
        <Modals 
          title="This Title" 
          horizontal="left"
          width={300}
          visible={this.state.visible3}
          onOk={()=>{
            this.setState({
              confirmLoading:true
            })

            setTimeout(() => {
              this.setState({
                visible3: false,
                confirmLoading: false,
              });
            }, 2000);

          }} // 点击确定提交按钮
          onCancel={()=>this.setState({visible3:false})}
          confirmLoading={this.state.confirmLoading}
          okText="OK" 
          cancelText="Cancel"
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
        </Modals>


        <Buttons size="small" onClick={()=>{
          this.setState({visible6:true})
        }}>Right</Buttons> 
        <Modals 
          title="点击确定后异步关闭对话框" 
          horizontal="right"
          width={300}
          visible={this.state.visible6}
          onOk={()=>{
            this.setState({
              confirmLoading:true
            })

            setTimeout(() => {
              this.setState({
                visible6: false,
                confirmLoading: false,
              });
            }, 2000);

          }} // 点击确定提交按钮
          onCancel={()=>this.setState({visible6:false})}
          confirmLoading={this.state.confirmLoading}
          okText="OK" 
          cancelText="Cancel"
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
        </Modals>

    </div>
  )
}
```
<!--End-->

### 在render中使用

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
     visible:false,
  }
}
render() {
  return (
    <div> 
        <Buttons size="small" onClick={()=>{
          this.setState({visible:true})
        }}>Open Modals dialog</Buttons>  &nbsp;
        <Modals 
          title="Modals Title" 
          visible={this.state.visible}
          onOk={this.handleOk} // 点击确定提交按钮
          width={600}          // 有默认值可以不传递
          style={{top: 20}}    // 可以设定容器的位置以及样式
          onCancel={()=>{
            this.setState({visible:false})
          }}
          maskClosable={false} // 禁止遮罩层关闭
          okText="OK" 
          cancelText="Cancel"
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modals>
    </div>
  )
}
```
<!--End-->

### Modals自定义Footer

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
     visible:false,
  }
}
handleCancel2(){
  this.setState({
    visible2:false
  })
}
render() {
  return (
    <div> 

        <Buttons size="small" onClick={()=>{
          this.setState({visible2:true})
        }}>Modals自定义Footer</Buttons> &nbsp;
        <Modals 
          title="Modals自定义Footer" 
          visible={this.state.visible2}
          onOk={this.handleOk} // 点击确定提交按钮
          style={{top: 20}}    // 可以设定容器的位置以及样式
          onCancel={this.handleCancel2.bind(this)}
          okText="OK" 
          cancelText="Cancel"
          // 自定义页脚按钮
          // footer={null}
          footer={(
            <div>
              <Buttons size="small" onClick={()=>{
                this.setState({
                  visible2:false
                })
              }}>
                取消
              </Buttons>
              <Buttons size="small" onClick={()=>{
                this.setState({
                  visible2:false
                })
              }}>
                确定
              </Buttons>
            </div>
          )}
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
        </Modals>
    </div>
  )
}
```
<!--End-->


### Modals居中显示

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
     visible3:false,
  }
}
render() {
  return (
    <div> 
        <Buttons size="small" onClick={()=>{
          this.setState({visible3:true})
        }}>Modals居中显示，</Buttons> &nbsp;
        <Modals 
          title="Modals自定义Footer" 
          visible={this.state.visible3}
          onOk={()=>{
            // 点击确定提交按钮
          }} 
          onCancel={()=>this.setState({visible3:false})}
          okText="OK" 
          cancelText="Cancel"
        >
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
        </Modals>
    </div>
  )
}
```
<!--End-->

### 点击确定后异步关闭对话框

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    confirmLoading:false,
    loading:false,
    visible:false,
  }
}
render() {
  return (
    <div> 
        <Buttons size="small" onClick={()=>{
          this.setState({visible:true})
        }}>点击确定后异步关闭对话框， 并添加加载状态</Buttons> 
        <Modals 
          title="点击确定后异步关闭对话框" 
          visible={this.state.visible}
          onOk={()=>{
            this.setState({
              confirmLoading:true,
              loading:true
            })

            setTimeout(() => {
              this.setState({
                visible: false,
                confirmLoading: false,
                loading:false
              });
            }, 2000);

          }} // 点击确定提交按钮
          onCancel={()=>this.setState({visible:false})}
          confirmLoading={this.state.confirmLoading}
          okText="OK" 
          cancelText="Cancel"
        >
          <Loading loading={this.state.loading}>
          <p style={{color:"#333"}}>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>
          </Loading>
        </Modals>
    </div>
  )
}
```
<!--End-->


### Modals Attributes

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| visible | 对话框是否可见 | boolean | - |
| title | 标题 | string、ReactNode | - |
| okText | 点击确定回调 | string | 确定 |
| onOk | 确认按钮文字 | function(e) | - |
| confirmLoading | 确定按钮 loading | boolean | false |
| cancelText | 取消按钮文字 | string | 取消 |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} | string、ReactNode | 确定取消按钮 |
| width | 宽度 | string、number | 520 |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| styleMask | 遮罩层样式 | object | - |
| style | 可用于设置浮层的样式，调整浮层位置等 | object | - |



### Modal.method()

| 方法 | 说明 |
|--------- |-------- |
| `Modals.info` | 正常白底效果 |
| `Modals.success` | 成功提示 |
| `Modals.warn` | 警告提示 |
| `Modals.warning` | 警告提示 同warn |
| `Modals.error` | 错误提示 |

继承Modals组件方法下面是默认，以及新增的方法。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 标题 | string、ReactNode | - |
| content | 内容 | string、ReactNode | - |
| width | 宽度 | string、number | 416 |
| maskClosable | 点击蒙层是否允许关闭，默认不允许关闭 | boolean | false |