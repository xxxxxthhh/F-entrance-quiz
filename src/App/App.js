/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 18:17:55
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-27 19:46:01
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';
import './App.scss';
import Navigator from '../Components/Navigator';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Navigator />
      </div>
    );
  }
}

export default App;
