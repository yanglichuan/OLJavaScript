import React from 'react'
import Link from 'next/link'
// import Head from '../components/head'

import Head from 'next/head'

// 以模块化的方式导入less文件
import css from  '../static/css/site.less'

import {Button} from 'antd'

import {connect} from 'react-redux'

// 1、导入fetchHelper
import fetchHelper from '../kits/fetchHelper.js'

class index extends React.Component{

  static async getInitialProps(){
    let res = await  fetchHelper.get('/nc/course/courseDetial/getCourseDetial/102')
    return {
      // 并且将数据绑定到当前组件的props中
        courseDetial:res.message.CourseDetial
    }
  }

  /**
   * 在nodejs环境中利用fetch请求url数据测试步骤：
   * 1、导入fetchHelper
   * 2、在组件中定义一个 static async getInitalProps()方法中发出数据请求，并且将数据绑定到当前组件
   * 的props中
   * 3、在render函数中调用this.props中的数据展现在界面上
   *  */

render(){ return (
  <div>

    <Head>
      <title>首页</title>      
    </Head>
     课表标题为：
     {this.props.pageProps.courseDetial.title}

    <Link href={{pathname:'/home'}}>
    <Button type="primary" icon="search">搜索</Button>
    </Link>
    <div className="hero">
      <h1 className={css.title} style={{color:this.props.testReducer.color}}>Welcome to Next!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className="row">
        <Link href="https://github.com/zeit/next.js#getting-started">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next on Github and in their examples</p>
          </a>
        </Link>
        <Link href="https://open.segment.com/create-next-app">
          <a className="card">
            <h3>Examples &rarr;</h3>
            <p>
              Find other example boilerplates on the{' '}
              <code>create-next-app</code> site
            </p>
          </a>
        </Link>
        <Link href="https://github.com/segmentio/create-next-app">
          <a className="card">
            <h3>Create Next App &rarr;</h3>
            <p>Was this tool helpful? Let us know how we can improve it</p>
          </a>
        </Link>
        
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
    
    </div>
    </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return {
    ...state
  }
}

export default  connect(mapStateToProps,null)(index)
