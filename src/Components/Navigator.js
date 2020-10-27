/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 19:28:11
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-28 00:04:53
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';

class Navigator extends Component {
  handleClick = () => {
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };
    fetch(url, params).then((res) => console.log(res.status));
  };

  render() {
    return (
      <div className="navigator">
        <div>
          <span>分组列表</span>
        </div>
        <div>
          <button type="button" onClick={this.handleClick}>
            分组学员
          </button>
        </div>
      </div>
    );
  }
}

export default Navigator;
