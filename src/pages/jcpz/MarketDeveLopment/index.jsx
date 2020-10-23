/* 市场开拓信息 */
/* 嘻嘻 */
/* 市场开拓信息 */
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
      { path: '/index/marketdevelopment', breadcrumbName: '市场开拓信息', link: false },
    ],
    // 渲染路由
    itemRender: (route) => {
      return route.link ? (
        <Link to={route.path} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{route.breadcrumbName}</Link>
      ) : (
          <span>市场开拓信息</span>
        );
    },
  };
  // from表单添加
  const AdvancedSearchForm = () => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
    // input的label和默认值以及默认表单验证。
    const labelArr = [
      { labelName: '本地市场', placeholder: '本地市场', message: "本地市场", key: 'market1', val: '1' },
      { labelName: '本地市场开拓周期', placeholder: '本地市场开拓周期', message: "本地市场开拓周期", key: 'm1_period', val: '0' },
      { labelName: '本地市场周期费用', placeholder: '本地市场周期费用', message: "本地市场周期费用", key: 'm1_pcost', val: '0' },

      { labelName: '区域市场', placeholder: '区域市场', message: "区域市场", key: 'market2', val: '0' },
      { labelName: '区域市场开拓周期', placeholder: '区域市场开拓周期', message: "区域市场开拓周期", key: 'm2_period', val: '1' },
      { labelName: '区域市场周期费用', placeholder: '区域市场周期费用', message: "区域市场周期费用", key: 'm2_pcost', val: '1' },

      { labelName: '国内市场', placeholder: '国内市场', message: "国内市场", key: 'market3', val: '0' },
      { labelName: '国内市场开拓周期', placeholder: '国内市场开拓周期', message: "国内市场开拓周期", key: 'm3_period', val: '2' },
      { labelName: '国内市场周期费用', placeholder: '国内市场周期费用', message: "国内市场周期费用", key: 'm3_pcost', val: '1' },

      { labelName: '亚洲市场', placeholder: '亚洲市场', message: "亚洲市场", key: 'market4', val: '0' },
      { labelName: '亚洲市场开拓周期', placeholder: '亚洲市场开拓周期', message: "亚洲市场开拓周期", key: 'm4_period', val: '3' },
      { labelName: '亚洲市场周期费用', placeholder: '亚洲市场周期费用', message: "亚洲市场周期费用", key: 'm4_pcost', val: '1' },

      { labelName: '国际市场', placeholder: '亚洲市场', message: "亚洲市场", key: 'market5', val: '0' },
      { labelName: '国际市场开拓周期', placeholder: '国际市场开拓周期', message: "亚洲市场开拓周期", key: 'm5_period', val: '4' },
      { labelName: '国际市场开拓费用', placeholder: '国际市场开拓费用', message: "亚洲市场周期费用", key: 'm5_pcost', val: '1' },

      { labelName: 'ISO9000', placeholder: 'ISO9000', message: "ISO9000", key: 'iso9', val: '0' },
      { labelName: 'ISO9000认证周期', placeholder: 'ISO9000认证周期', message: "ISO9000认证周期", key: 'iso9_period', val: '1' },
      { labelName: 'ISO9000周期费用', placeholder: 'ISO9000周期费用', message: "ISO9000周期费用", key: 'iso9_pcost', val: '1' },

      { labelName: 'ISO14000', placeholder: 'ISO14000', message: "ISO14000", key: 'iso4', val: '0' },
      { labelName: 'ISO14000认证周期', placeholder: 'ISO14000认证周期', message: "ISO14000认证周期", key: 'iso4_period', val: '2' },
      { labelName: 'ISO14000周期费用', placeholder: 'ISO14000周期费用', message: "ISO14000周期费用", key: 'iso4_pcost', val: '1' },

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
