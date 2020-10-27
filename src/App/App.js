/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 18:17:55
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-27 21:52:34
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';
import './App.scss';
import Navigator from '../Components/Navigator';
import GroupView from '../Components/GroupVIew';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Navigator />
        <GroupView />
      </div>
    );
  }
}

export default App;
