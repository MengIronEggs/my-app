/* 生产订单信息 */
/* 嘻嘻 */
/* 订单列表查询、增加、修改、删除 */
import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Table, Select, Modal } from 'antd';
const { Option } = Select;
import { Link } from 'umi'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import { add, set } from 'lodash';
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
  // 搜索栏
  const [searchFrom, setSearchFrom] = useState({
    orderNum: "",
    cpmc: "",
    markType: "",
  });
  // list表头、对应字段
  const columns = [
    { title: '编号', dataIndex: 'depart', key: 'depart', align: 'center' },
    { title: '产品', dataIndex: 'project', key: 'project', align: 'center' },
    { title: '数量', dataIndex: 'yearmonth', key: 'yearmonth', align: 'center' },
    { title: '市场', dataIndex: 'yearmonth', key: 'yearmonth', align: 'center' },
    { title: '金额', dataIndex: 'yearmonth', key: 'yearmonth', align: 'center' },
    { title: '账期', dataIndex: 'yearmonth', key: 'yearmonth', align: 'center' },
    { title: 'ISO', dataIndex: 'yearmonth', key: 'yearmonth', align: 'center' },
    { title: '年', dataIndex: 'yearmonth', key: 'yearmonth', align: 'center' },
  ];
  // dialog
  const [showDialog, setShowDialog] = useState(false);
  // 订单编号的change事件
  const orderChange = (e) => {
    const newData = {
      ...searchFrom,
      orderNum: e.target.value,
    }
    setSearchFrom(newData);
  }
  // 产品名称的change事件
  const cpmcChange = (e) => {
    const cpmcData = {
      ...searchFrom,
      cpmc: e.target.value,
    }
    setSearchFrom(cpmcData);
  };
  // 市场选择的change事件
  const marketTyepOnChange = (e) => {
    const marketData = {
      ...searchFrom,
      markType: e,
    }
    setSearchFrom(marketData);
  };
  // 三个按钮的点击事件
  // 搜索
  const searchClick = () => {
    console.log('搜索', searchFrom);
  };
  // 添加
  const addClick = () => {
    console.log('添加');
    setShowDialog(!showDialog);
  };
  // 删除
  const delectClick = () => {
    console.log('删除');
  };
  // dialog确定的点击事件
  const handleOk = (e) => {
    setShowDialog(!showDialog);
  };
  // dialog
  const handleCancel = (e) => {
    setShowDialog(!showDialog);
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
  //定义搜索栏方法
  const Serfromcontent = () => {
    const onCol = { width: '100%', hiegth: '100%', marginTop: '5px' };
    const onBtn = { marginLeft: '5px' };
    return (
      <Form layout="inline">
        {/*搜索条件*/}
        <Row style={onCol} gutter={24}>
          <Col className="gutter-row" span={6}>
            <Form.Item label="订单编号">
              <Input value={searchFrom.orderNum || ''} onChange={(e) => orderChange(e)} placeholder="请输入订单编号" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <Form.Item label="产品名称">
              <Input value={searchFrom.cpmc || ''} onChange={(e) => cpmcChange(e)} placeholder="请输入产品名称" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <Form.Item label="市场类型">
              <Select
                placeholder="Tags Mode"
                value={searchFrom.markType || ''}
                onChange={(e) => marketTyepOnChange(e)}
              >
                <Option value="本地市场">本地市场</Option>
                <Option value="区域市场">区域市场</Option>
                <Option value="国内市场">国内市场</Option>
                <Option value="亚洲市场">亚洲市场</Option>
                <Option value="国际市场">国际市场</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={6}>
            <Button type="primary" size="middle" onClick={() => searchClick()}>搜索</Button>
            <Button style={onBtn} size="middle" onClick={() => addClick()}>添加</Button>
            <Button style={onBtn} type="primary" danger size="middle" onClick={() => delectClick()}>删除</Button>
          </Col>
        </Row>
      </Form>
    );
  };
  // 定义添加dialg
  const AddiaLogContent = () => {
    return (
      <Modal title="添加订单"
        visible={showDialog}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      </Modal>
    )
  };

  return (
    // <PageContainer content="" className={styles.main}>
    <div className={styles.content}>
      <PageHeaderWrapper title={null} breadcrumb={breadRoutes}></PageHeaderWrapper>
      {/* <div className={styles.pageContent}>1232</div> */}
      <div className={styles.fromCard}>
        <div className={styles.articleContent}>
          {/* serchContent */}
          <div className={styles.serchContent}>
            {/* <Serfromcontent></Serfromcontent> */}
            {Serfromcontent()}
          </div>
          {/* tableList */}
          <Table align='center' bordered pagination={false} dataSource={listArr} rowKey='id' columns={columns} />
          {/* dialog */}
          <AddiaLogContent></AddiaLogContent>
        </div>
      </div>
    </div>
    // </PageContainer>
  );
};

