/* 资金信息 */
/* 嘻嘻 */
/* 默认获取资金信息 */
import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { Link } from 'umi'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import { add } from 'lodash';
// 引入接口
import { login } from '@/services/zijinpeizhi';

export default () => {
  const breadRoutes = {
    routes: [
      { path: '/', breadcrumbName: '基础配置', link: true },
      { path: '/list/emptypage', breadcrumbName: '资金信息', link: false },
    ],
    itemRender: (route) => {
      return route.link ? (
        <Link to={route.path} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{route.breadcrumbName}</Link>
      ) : (
          <span>资金信息</span>
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
      { labelName: '现金', placeholder: '请输入现金', message: "现金", key: 'cash', val: '100' },
      { labelName: '长期贷款', placeholder: '请输入长期贷款', message: "请输入长期贷款", key: 'lt_loan', val: '40' },
      { labelName: '长贷周期', placeholder: '请输入长贷周期', message: "请输入长贷周期", key: 'ltl_period', val: '20' },
      { labelName: '长贷利息', placeholder: '请输入长贷利息', message: "请输入长贷利息", key: 'ltl_interest', val: '5' },
      { labelName: '短期贷款', placeholder: '请输入短期贷款', message: "请输入短期贷款", key: 'st_loan', val: '0' },
      { labelName: '短贷周期', placeholder: '请输入短贷周期', message: "请输入短贷周期", key: 'stl_period', val: '4' },
      { labelName: '短贷利息', placeholder: '请输入短贷利息', message: "请输入短贷利息", key: 'stl_interest', val: '10' },
      { labelName: '特殊贷款', placeholder: '请输入特殊贷款', message: "请输入特殊贷款", key: 'sp_loan', val: '0' },
      { labelName: '特贷周期', placeholder: '请输入特贷周期', message: "请输入特贷周期", key: 'spl_period', val: '4' },
      { labelName: '特贷利息', placeholder: '请输入特贷利息', message: "请输入特贷利息", key: 'spl_interest', val: '20' },
      { labelName: '应付账款', placeholder: '请输入应付账款', message: "请输入应付账款", key: 'act_payable', val: '0' },
      { labelName: '应收账款', placeholder: '请输入应收账款', message: "请输入应收账款", key: 'act_receivable', val: '0' },
      // {labelName:'行政管理费用/季',placeholder:'请输入行政管理费用/季',message:"请输入行政管理费用/季"},
      // {labelName:'设备维护费用/年',placeholder:'请输入设备维护费用/年',message:"请输入设备维护费用/年"},
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
      // let post_data = {
      //   passWord: "zjt111111",
      //   userName: "住建厅",
      // }
      // login(post_data).then(res => {
      //   console.log('res', res);
      // })
    };
    // 调用接口

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
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
    </div>
    // </PageContainer>
  );
};
