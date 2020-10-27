/*
 * @Author: Kyle Xu
 * @Date: 2020-10-27 23:27:55
 * @LastEditors: Kyle Xu
 * @LastEditTime: 2020-10-27 23:31:33
 * @Blog: http://kylexu.cn
 * @Github: https://github.com/xxxxxthhh
 * @Mail: kyle_x@foxmail.com
 * @Description:  // write sth about Code
 */
import React, { Component } from 'react';

class StuView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: null,
    };
  }

  componentDidMount() {
    this.getStuList();
  }

  getStuList = () => {
    const url = 'http://localhost:8080/students';
    const params = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };
    fetch(url, params)
      .then((res) => res.json())
      .then((data) => this.setState({ students: data }));

    // console.log(111);
    // console.log(this.state.students);
    // if (!this.state.students) {
    //   this.setState({ currentStu: 0 });
    // }
  };

  render() {
    return (
      <div className="stuList">
        <div>
          {this.state.students?.map((student) => (
            <span className="student" key={student.stuId}>
              {student.stuId}
              {student.stuName}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default StuView;
