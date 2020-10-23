import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button,Table } from 'antd';
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
      { path: '/index/productdevelopment', breadcrumbName: '产品研发信息', link: false },
    ],
    itemRender: (route) => {
      return route.link ? (
        <Link to={route.path} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{route.breadcrumbName}</Link>
      ) : (
          <span>产品研发信息</span>
        );
    },
  };
  // form表单添加
  const AdvancedSearchForm = () => {
    // expand = false;变量值 
    // setExpand = function(){this.setState({extend: fasle})};改变变量的方法
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
    // input的label和默认值以及默认表单验证。
    const labelArr = [
      { labelName: 'p1生产能力', placeholder: 'p1生产能力', message: "p1生产能力", key: 'p1_dev', val: '1' },
      { labelName: 'p1研发周期', placeholder: 'p1研发周期', message: "p1研发周期", key: 'p1_period', val: '0' },
      { labelName: 'p1研发周期费用', placeholder: 'p1研发周期费用', message: "p1研发周期费用", key: 'p1p_cost', val: '0' },
      { labelName: 'p2生产能力', placeholder: 'p2生产能力', message: "p2生产能力", key: 'p2_dev', val: '0' },
      { labelName: 'p2研发周期', placeholder: 'p2研发周期', message: "p2研发周期", key: 'p2_period', val: '6' },
      { labelName: 'p2研发周期费用', placeholder: 'p2研发周期费用', message: "p2研发周期费用", key: 'p2p_cost', val: '1' },
      { labelName: 'p3生产能力', placeholder: 'p3生产能力', message: "p3生产能力", key: 'p3_dev', val: '0' },
      { labelName: 'p3研发周期', placeholder: 'p3研发周期', message: "p3研发周期", key: 'p3_period', val: '6' },
      { labelName: 'p3研发周期费用', placeholder: 'p3研发周期费用', message: "p3研发周期费用", key: 'p3p_cost', val: '2' },
      { labelName: 'p4生产能力', placeholder: 'p4生产能力', message: "p4生产能力", key: 'p4_dev', val: '0' },
      { labelName: 'p4研发周期', placeholder: 'p4研发周期', message: "p4研发周期", key: 'p4_period', val: '6' },
      { labelName: 'p4研发周期费用', placeholder: 'p4研发周期费用', message: "p4研发周期费用", key: 'p4p_cost', val: '3' },
    ];
    const [InputValueArr, setValArr] = useState(labelArr);
    const getFields = () => {
      const children = InputValueArr.map((item, index) => (
        <Col span={8} key={index}>
          <Form.Item
            // name={item.labelName}
            label={item.labelName}
            rules={[
              {
                required: true,
                message: item.message,
              },
            ]}
          >
            <Input type='number' min={0} onChange={(e) => InputChange(e, index)} value={item.val || ''} placeholder={item.placeholder} />
          </Form.Item>
        </Col>
      ));
      return children;
    };
    // inputchange事件
    const InputChange = (e, index) => {
      // console.log(e.target.value);
      InputValueArr[index].val = e.target.value;
      setValArr([...InputValueArr]);
    };
    // 提交的点击事件
    const formSubmitClick = () => {
      console.log(InputValueArr);
    };
    // 调用接口
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    const [listArr, setListArr] = useState([]);
    // 获取订单列表
    const getOrderListFn = () => {
      AjaxGet('202007').then(res => {
        console.log('res', res);
        if(res.Code == 200 && res.Data.length > 0 ){
            setListArr([...res.Data]);
            console.log(listArr);
        }
      });
    };
    const columns = [
      {
        title: '部门',
        dataIndex: 'depart',
        key: 'depart',
      },
      {
        title: '项目名称',
        dataIndex: 'project',
        key: 'project',
      },
      {
        title: '时间',
        dataIndex: 'yearmonth',
        key: 'yearmonth',
      },
    ]
    // 初始化加载
    useEffect(() => {
      getOrderListFn();
    }, []);
    // 渲染表单
    return (
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right', }}>
            <Button type="primary" htmlType="submit" onClick={() => formSubmitClick()} >提交</Button>
            <Button style={{ margin: '0 8px', }} onClick={() => { form.resetFields(); }}>清空</Button>
          </Col>
        </Row>
      </Form>
    )
  };
  return (
    // <PageContainer content="" className={styles.main}>
    <div className={styles.content}>
      <PageHeaderWrapper title={null} breadcrumb={breadRoutes}></PageHeaderWrapper>
      {/* <div className={styles.pageContent}>1232</div> */}
      <div className={styles.fromCard}>
        <AdvancedSearchForm />
      </div>
      {/* <Table dataSource={listArr} columns={columns} />; */}
    </div>
    // </PageContainer>
  );
};
