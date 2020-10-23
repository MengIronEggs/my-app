/* 生产订单信息 */
/* 嘻嘻 */
/* 订单列表查询、增加、修改、删除 */
import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Table } from 'antd';
import { Link } from 'umi'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import { add } from 'lodash';
// 引入接口
import { AjaxGet } from '@/services/zijinpeizhi';

export default () => {
  const breadRoutes = {
    routes: [
      { path: '/', breadcrumbName: '基础配置', link: true },
      { path: '/index/orderlsit', breadcrumbName: '生产订单信息', link: false },
    ],
    itemRender: (route) => {
      return route.link ? (
        <Link to={route.path} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{route.breadcrumbName}</Link>
      ) : (
          <span>生产订单信息</span>
        );
    },
  };
  //定义搜索栏方法
  const Serfromcontent = ()=>{
    const [serchFrom, setserchFrom] = useState({});
    return (
      <Form layout="inline">
        {/*搜索条件*/}
        <Row gutter={16}>
          <Col span={6} >
            <Form.Item label="账号">
                <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item label="姓名">
                <Input placeholder="请输入订单" />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Button>1</Button><Button>2</Button>
          </Col>
          <Col span={6} >
            <Button>1</Button><Button>2</Button>
          </Col>
        </Row>
      </Form>
    )
  };
  // 初始化加载 
  useEffect(() => {
    // 调用获取订单接口
    getOrderListFn();
  }, []);
  const [listArr, setListArr] = useState([]);
  // 获取订单列表方法
  const getOrderListFn = () => {
    AjaxGet('202007').then(res => {
      if (res.Code == 200 && res.Data.length > 0) {
        setListArr([...res.Data]);
      }
    });
  };
  // list表头、对应字段
  const columns = [
    { title: '部门', dataIndex: 'depart', key: 'depart' },
    { title: '项目名称', dataIndex: 'project', key: 'project' },
    { title: '时间', dataIndex: 'yearmonth', key: 'yearmonth' },
  ];

  return (
    // <PageContainer content="" className={styles.main}>
    <div className={styles.content}>
      <PageHeaderWrapper title={null} breadcrumb={breadRoutes}></PageHeaderWrapper>
      {/* <div className={styles.pageContent}>1232</div> */}
      <div className={styles.fromCard}>
        <div className={styles.articleContent}>
          <div className={styles.serchContent}>
            <Serfromcontent></Serfromcontent>
          </div>
          <Table dataSource={listArr} rowKey='id' columns={columns} />
        </div>
      </div>
    </div>
    // </PageContainer>
  );
};
