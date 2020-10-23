/* 广告投入信息 */
/* 嘻嘻 */
/* 默认获取广告投入信息、文本框不可编辑 */
import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Form, Row, Col, Input, Button } from 'antd';
import styles from './index.less';
import { Link } from 'umi'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
export default () => {
  // 路由集合
  const breadRoutes = {
    routes: [
      { path: '/', breadcrumbName: '基础配置', link: true },
      { path: '/index/advertisinginvestment', breadcrumbName: '广告投入信息', link: false },
    ],
    // 渲染路由
    itemRender: (route) => {
      return route.link ? (
        <Link to={route.path} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{route.breadcrumbName}</Link>
      ) : (
          <span>广告投入信息</span>
        );
    },
  };
  // from表单添加
  const AdvancedSearchForm = () => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
    // input的label和默认值以及默认表单验证。
    const labelArr = [
      { labelName: 'p1本地投放', placeholder: 'p1本地投放', message: "p1本地投放", key: 'p1_m1', val: '0', disabled: true },
      { labelName: 'p2本地投放', placeholder: 'p2本地投放', message: "p2本地投放", key: 'p2_m1', val: '0', disabled: true },
      { labelName: 'p3本地投放', placeholder: 'p3本地投放', message: "p3本地投放", key: 'p3_m1', val: '0', disabled: true },
      { labelName: 'p4本地投放', placeholder: 'p4本地投放', message: "p4本地投放", key: 'p4_m1', val: '0', disabled: true },

      { labelName: 'p1区域投放', placeholder: 'p1区域投放', message: "p1区域投放", key: 'p1_m2', val: '0', disabled: true },
      { labelName: 'p3区域投放', placeholder: 'p2区域投放', message: "p2区域投放", key: 'p2_m2', val: '0', disabled: true },
      { labelName: 'p2区域投放', placeholder: 'p3区域投放', message: "p3区域投放", key: 'p3_m2', val: '0', disabled: true },
      { labelName: 'p4区域投放', placeholder: 'p4区域投放', message: "p4区域投放", key: 'p4_m2', val: '0', disabled: true },

      { labelName: 'p1国内投放', placeholder: 'p1国内投放', message: "p1国内投放", key: 'p1_m3', val: '0', disabled: true },
      { labelName: 'p2国内投放', placeholder: 'p2国内投放', message: "p2国内投放", key: 'p2_m3', val: '0', disabled: true },
      { labelName: 'p3国内投放', placeholder: 'p3国内投放', message: "p3国内投放", key: 'p3_m3', val: '0', disabled: true },
      { labelName: 'p4国内投放', placeholder: 'p4国内投放', message: "p4国内投放", key: 'p4_m3', val: '0', disabled: true },

      { labelName: 'p1亚洲投放', placeholder: 'p1亚洲投放', message: "p1亚洲投放", key: 'p1_m4', val: '0', disabled: true },
      { labelName: 'p2亚洲投放', placeholder: 'p2亚洲投放', message: "p2亚洲投放", key: 'p2_m4', val: '0', disabled: true },
      { labelName: 'p3亚洲投放', placeholder: 'p3亚洲投放', message: "p3亚洲投放", key: 'p3_m4', val: '0', disabled: true },
      { labelName: 'p4亚洲投放', placeholder: 'p4亚洲投放', message: "p4亚洲投放", key: 'p4_m4', val: '0', disabled: true },

      { labelName: 'p1国际投放', placeholder: 'p1国际投放', message: "p1国际投放", key: 'p1_m5', val: '0', disabled: true },
      { labelName: 'p2国际投放', placeholder: 'p2国际投放', message: "p2国际投放", key: 'p2_m5', val: '0', disabled: true },
      { labelName: 'p3国际投放', placeholder: 'p3国际投放', message: "p3国际投放", key: 'p3_m5', val: '0', disabled: true },
      { labelName: 'p4国际投放', placeholder: 'p4国际投放', message: "p4国际投放", key: 'p4_m5', val: '0', disabled: true },
    ];

    const [InputValueArr, setValArr] = useState(labelArr);
    const getFields = () => {
      const children = InputValueArr.map((item, index) => (
        <Col span={6} key={index}>
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
            <Input type='number' min={0} onChange={(e) => InputChange(e, index)} disabled={item.disabled} value={item.val || ''} placeholder={item.placeholder} />
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
  useEffect(() => {

  }, []);
  return (
    <div>
      <div className={styles.content}>
        {/* 面包屑 */}
        <PageHeaderWrapper title={null} breadcrumb={breadRoutes}></PageHeaderWrapper>
        {/* form表单部分 */}
        <div className={styles.fromCard}>
          <AdvancedSearchForm />
        </div>
      </div>
    </div>
  );
};
