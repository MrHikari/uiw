## Tables 表格

用于页面中展示重要的提示信息。


### 基本用法

⚠️  columns 中的 key 很重要，在一个表中是唯一的。这个key 对应数据中的key，保持一致，columns中的render函数才会有作用。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    columns: [
      {
        title: "姓名",
        key: "name",
        width: 180
      },{
        title: "年龄",
        key: "age",
        width: 180
      },{
        title: "地址",
        key: "info"
      }
    ],
    dataSource:[
  {name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},
  {name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},
  {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},
  {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},
  {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},
    ]
  }
}
render() {
  return (
    <Tables data={this.state.dataSource} columns={this.state.columns}/>
  )
}
```
<!--End-->

### 表头分组

表头分组通过 `children` 来实现。

<!--DemoStart--> 
对应数据中的key，保持一致，columns中的render函数才会有作用。
```js
constructor(props) {
  super(props);
  this.state = {
    columns: [
        {
          title: '姓名',
          key: 'name',
          children:[
            {
              title: '中文名字',
              key: 'enname',
              children:[
                {
                  title: '姓',
                  key: 'firstname',
                  children:[
                    {
                      title: '祖姓',
                      key: 'firstname_wcj',
                      width: 150,
                    },{
                      title: '先姓',
                      key: 'lastname'
                    }
                  ]
                },{
                  title: '名',
                  key: 'lastname',
                  children:[
                    {
                      title: '谱名',
                      key: 'firstname'
                    },{
                      title: '名',
                      key: 'lastname'
                    }
                  ]
                }
              ]
            },{
              title: '英文名字',
              key: 'cnname'
            }
          ]
        }, {
          title: '年龄',
          key: 'age',
          children:[
            {
              title: '中年',
              key: 'enname',
              children:[
                {
                  title: '屌丝',
                  key: 'firstname'
                },{
                  title: '老男人',
                  key: 'lastname'
                }
              ]
            },{
              title: '青年',
              key: 'cnname'
            }
          ]
        }, {
          title: '公司',
          key: 'company',
          children:[
            {
              title: '地址',
              key: 'companyaddress'
            },{
              title: '公司名字',
              key: 'companyname'
            }
          ]
        }, {
          title: '操作',
          key: 'edit',
          render: (text, row, index) => <a href="#" onClick={()=>{
            console.log(text,row, index)
          }}>{text}</a>,
        }
    ],
    dataSource:[{
      firstname_wcj: '周',
      last_name: '杰伦',
      first_enname: 'Jay',
      last_enname: 'Chou',
      street:"street",
      age: 32,
      address: '上海市青浦1018号e通世界双子楼B座508室',
      company: '亮金信息科技',
      company_name: '亮金',
      gender: '男',
      edit: '编辑11',
    },{
      firstname_wcj: '周1',
      last_name: '杰伦2',
      first_enname: 'Jay3',
      last_enname: 'Chou4',
      street:"street5",
      age: 32,
      address: 'e通世界双子楼B座508室7',
      company: '亮金信息科技8',
      company_name: '亮金9',
      gender: '男10',
      edit: '编辑是我拉',
    }]
  }
}
render() {
  return (
    <Tables data={this.state.dataSource} columns={this.state.columns}/>
  )
}
```
<!--End-->

### 固定表头

固定表头通过设置表格 `height` 来实现。

<!--DemoStart--> 
对应数据中的key，保持一致，columns中的render函数才会有作用。
```js
constructor(props) {
  super(props);
  this.state = {
    columns: [
      {
        title: "姓名",
        key: "name",
        width: 180
      },{
        title: "年龄",
        key: "age",
        width: 180
      },{
        title: "地址",
        key: "info"
      }
    ],
    dataSource:[
  {name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},
  {name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},
  {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},
  {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},
  {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},
  {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},
  {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},
  {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},
    ]
  }
}
render() {
  return (
    <Tables height={300} data={this.state.dataSource} columns={this.state.columns}/>
  )
}
```
<!--End-->


### 选择功能的配置

通过 rowSelection 自定义选择项，默认rowSelection 存在就会有选择功能呢。

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    columns: [
      {
        title: "姓名",
        key: "name",
        width: 180
      },{
        title: "年龄",
        key: "age",
        width: 180
      },{
        title: "地址",
        key: "info"
      }
    ],
    dataSource:[
  {_checked:true,name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},
  {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},
    ]
  }
}
render() {
  return (
    <Tables 
      rowSelection={{
        onSelectAll:(selectDatas,checked,e)=>{
          console.log("选择或取消选择所有选项！",selectDatas)
        },
        onSelect:()=>{
          console.log("选择单行选项！")
        }
      }}
      data={this.state.dataSource} 
      columns={this.state.columns}/>
  )
}
```
<!--End-->

### 固定表头和列

通过设置属性 `height` 给表格指定高度后，会自动固定表头，当纵向内容过多时可以使用。  
通过设置属性 `width` 来实现横向滚动条，设置columns 的 `fixed: 'right'` 属性来固定列。   
固定列必须设置Tables属性`width`，如果表头与内容无法对其，设置 `columns` 的属性 `width` 。  

<!--DemoStart--> 
```js
constructor(props) {
  super(props);
  this.state = {
    columns: [
      {
        title: "姓名",
        key: "name",
        width: 180,
        fixed: 'left',
      },{
        title: "年龄",
        key: "age",
        width: 180
      },{
        title: "地址",
        key: "info"
      }, {
        title: '操作',
        key: 'edit',
        width: 60,
        fixed: 'right',
        render: (text, row, index) => <a href="javascript:void(0)" onClick={()=>{
          console.log("--->",text,row, index)
        }}>{text}</a>,
      }
    ],
    dataSource:[
  {_checked:true,name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。',edit:"编辑"},
  {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:"编辑"},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:"编辑"},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:"编辑"},
  {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:"编辑"},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:"编辑"},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:"编辑"},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:"编辑"},
  {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:"编辑"},
  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:"编辑"},
  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:"编辑"},
    ]
  }
}
render() {
  return (
    <Tables 
      height={200}
      width={2000}
      rowSelection={{
        onSelectAll:(selectDatas,checked,e)=>{
          console.log("选择或取消选择所有选项！",selectDatas)
        },
        onSelect:()=>{
          console.log("选择单行选项！")
        }
      }}
      data={this.state.dataSource} 
      columns={this.state.columns}/>
  )
}
```
<!--End-->

### Tables Attributes

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| options | 指定可选项 | string[] | [] |
| caption | 表格标题 | Function | - |
| footer | 表格尾部 | Function | - |
| height | 通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。 | number | - |
| width | 设置属性 width 出现横向滚动条，若列头与内容不对齐，请指定列的宽度 width | number | - |
| defaultChecked | 默认选中的选项 | string | [] |
| onChange | 变化时回调函数 | Function(checkedValues:Array, value:String, checked:Boolean, e:Event) | - |
| paging | 分页器，配置项参考 paging，设为 false 时不展示和进行分页 | Object | - |


### Tables Column Attributes

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
|width | 列宽度 | string | - |
|fixed | 列是否固定，`left`、`right` | string | - |
|render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并 | Function(text, rowData, index) {} | - |
|className | 列的 className | string | - |
|onCellClick | 单元格点击回调 | Function(rowData, event) | - |

### Tables rowSelection Attributes

选择功能的配置。

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| onSelect | 用户手动选择/取消选择某一行的回调，配置onSelect | Function(选中行的数据, 选中的行数, 是否选中, 选中的所有数据,e) | - |
| onSelectAll | 用户手动选择/取消选择所有列的回调 | Function(selectedRowKeys, selectedRows) | - |
| onCellClick | 单元格点击回调 | Function(selectDatas, lineNumber, checked) | - |

### Tables data Attributes

Tables中的data描述数

| 参数 | 说明 | 类型 | 默认值 |
|------ |-------- |---------- |-------- |
| _checked  | 给 data 项设置特殊 key `_checked: true` 可以默认选中当前项。 | Boolean | false | 
| _disabled  | 给 data 项设置特殊 key `_disabled: true` 可以禁止选择当前项。 | Boolean | false | 
| _select | 特殊`key:_select`，框架内部使用，请不要设置 | - | - | 