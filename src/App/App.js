/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 18:17:55
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-27 23:29:55
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';
import './App.scss';
import Navigator from '../Components/Navigator';
import GroupView from '../Components/GroupVIew';
import StuView from '../Components/StuView';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-知识点: 组件划分不太合理，分组学员这个Header按照业务划分，应该属于分组列表，建议放在分组列表组件内 */}
        <Navigator />
        <GroupView />
        <StuView />
      </div>
    );
  }
}

export default App;
// TODO GTB-综合: * 完成度低于三分二
