/* 接口配置信息 */
/* 嘻嘻 */
/* demo统一调用接口 */
import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin,Tabs } from 'antd';
import styles from './index.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Link } from 'umi'
import { sendBoxLogin,senBoxCreateTable} from '@/services/zijinpeizhi';
const { TabPane } = Tabs;
export default () => {
  const breadRoutes = {
    routes: [
      { path: '/', breadcrumbName: '基础配置', link: true },
      { path: '/index/orderlsit', breadcrumbName: '接口认证', link: false },
    ],
    itemRender: (route) => {
      return route.link ? (
        <Link to={route.path} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{route.breadcrumbName}</Link>
      ) : (
          <span>接口认证</span>
        );
    }
  };
  // tab切换的方法
  const OnTab = () =>{
      return  <Tabs defaultActiveKey="1" onChange={tabCallBack}>
        <TabPane tab="登录" key="1"></TabPane>
        <TabPane tab="加入比赛" key="2"></TabPane>
        <TabPane tab="获取用户初始化信息" key="3"></TabPane>
        <TabPane tab="登录" key="1"></TabPane>
        <TabPane tab="加入比赛" key="2"></TabPane>
        <TabPane tab="获取用户初始化信息" key="3"></TabPane>
        <TabPane tab="登录" key="1"></TabPane>
        <TabPane tab="加入比赛" key="2"></TabPane>
        <TabPane tab="获取用户初始化信息" key="3"></TabPane>
        <TabPane tab="登录" key="1"></TabPane>
        <TabPane tab="加入比赛" key="2"></TabPane>
        <TabPane tab="获取用户初始化信息" key="3"></TabPane>
        <TabPane tab="登录" key="1"></TabPane>
        <TabPane tab="加入比赛" key="2"></TabPane>
        <TabPane tab="获取用户初始化信息" key="3"></TabPane>
      </Tabs>
  };
  // tab回调方法 
  const tabCallBack = (key) =>{
    console.log(key);
    switch (key) {
      case '1':
        getLogin();
        break;
      case '2':
        addMatch();
        break;
      case '3':
        break;
      default:
        break;
    };
  };
  // 初始化加载 
  useEffect(() => {
    tabCallBack('1');
  }, []);
  // 登录接口调用
  const getLogin = () => {
    let post_data = { userName:'test1',password:'123456'};
    sendBoxLogin(post_data).then(res => {
      if(res.Code ==200){
        localStorage.setItem('onToken',res.Data.token);
        localStorage.setItem('username',res.Data.userinfo.username);
      }
    });
  };
  // 加入赛方法调用
  const addMatch = () => {
    let id = 1;
    senBoxCreateTable(id).then(res =>{
      console.log(res);
    });
  }
  
  
  return (
    <div className={styles.content}>
      <PageHeaderWrapper title={null} breadcrumb={breadRoutes}></PageHeaderWrapper>
      <div className={styles.fromCard}>
        <OnTab></OnTab>
      </div>
    </div>
  );
};
