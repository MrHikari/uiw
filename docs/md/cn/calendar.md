## Calendar 日历

按照日历形式展示数据的容器。

### 热图日历

<!--DemoStart-->
```js
constructor(props) {
  super(props);

  this.state = {
    values:[
      { date: '2017-05-02',  count:2, content:['毕竟时间精力有限'] },
      { date: '2017-05-04',  count:22, content:['我有一个大胆的想法'] },
      { date: '2017-05-14',  count:8, content:['也许差别不是那么大吧？'] },
    ]
  }
}
render() {
  const CalendarHeatMap = Calendar.HeatMap;
  return (
    <div>
        <CalendarHeatMap 
          endDate={new Date('2017-05-19')} // 截止日期
          monthLables={
            // 默认选填选项 月份
            ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
          weekLables={{  // 默认选填选项  周
            1:'一', 3:'三', 5:'五'
          }}
          // days={
          //   //设置显示多少个空格, 默认不填参数，将自适应
          //   365
          // }
          panelColors={{ // 选填
            0:"#EBEDF0",
            8:"#7BC96F",
            4:"#C6E48B",
            12:"#239A3B",
            32:"#196127",
          }}
          message={(content)=>{
              return content.map((item,idx)=>{
                return <div key={idx}>{item}</div>
              })
          }}
          //emptyMessage="空的没有消息!"
          values={this.state.values} // 需要显示的数据，必填
          onMouseOver={(e,date,result)=>{
            //console.log("onMouseOver::",date,result)
          }}
          onClick={(e,date,result)=>{
            console.log("date,result:",date,result)
          }}
        />
        <Buttons size="small" onClick={()=>{
          this.setState({
            values:[
              { date: '2017-03-11', count:2, content:['一条消息来了！'] },
              { date: '2017-03-01', count:5, content:['需要显示的数据'] },
              { date: '2017-04-02', count:5, content:['空的没有消息'] },
              { date: '2017-04-14', count:11, content:['些放弃的人会这样想'] },
            ]
          })
        }}>切换活跃记录</Buttons> &nbsp;

        <Buttons size="small" onClick={()=>{
          this.setState({
            values:[
              { date: '2017-04-11', count:2, content:['一条消息来了！'] },
              { date: '2017-05-01', count:5, content:['需要显示的数据'] },
              { date: '2017-05-02', count:5, content:['空的没有消息'] },
              { date: '2017-05-04', count:11, content:['些放弃的人会这样想'] },
              { date: '2017-05-14', count:31, content:['需要显示的数据2'] },
              { date: '2017-05-16', count:2, content:['些放弃的人会这样想3'] },
              { date: '2017-05-17', count:2, content:['生活中根本就用不到吧？'] },
              { date: '2017-05-18', count:2, content:['也许差别不是那么大吧？'] },
              { date: '2017-05-19', count:8, content:['您可以直接在'] },
              { date: '2017-05-20', count:6, content:['我有一个大胆的想法'] },
              { date: '2017-05-21', count:41, content:['毕竟时间精力有限'] },
              { date: '2017-05-22', count:6, content:['友谊赛事。'] },
            ]
          })
        }}>切换活跃记录2</Buttons>
    </div>
  )
}
```
<!--End-->



### Calendar.HeatMap

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| values | 需要显示的数据，必填 | Object | - |
| endDate | 截止日期 | Date | - |
| onMouseOver | 鼠标滑过的事件 | Function(e, date, result) | - |
| onClick | 鼠标点击单元格的事件 | Function(e, date, result) | - |
| message | 消息提示 | Function(content:Array)  | - |
| emptyMessage | 空的，消息提示 | String | - |
| monthLables | ["1月", "2月", ...] | Array | - |
| weekLables | 默认选填选项  周 { 1:"一", 3:"三", 5:"五"} | Object- | {} |
| panelColors | 活跃颜色的深浅 {0:"#EBEDF0", 8:"#7BC96F", 4:"#C6E48B", 12:"#239A3B", 32:"#196127", } | Object | {} |

### values

| 参数 | 说明 | 类型 | 默认值 |
|----- | ---- |----- |---- |
| date | 日期，必填 | String | - |
| content | 提示内容，有几条提示，必填 | Array | - |
| count | 有多少条消息，必填 | Number | - |