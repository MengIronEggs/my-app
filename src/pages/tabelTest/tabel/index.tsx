import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Card, Button, Form, Input, Select, Table } from 'antd';
import styles from './index.less';
import './test.less';
// import FormAdvancedSearch from './FormAdvancedSearch';
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stateVal, setState] = useState<String>('');
  const [selectionType] = useState('checkbox');
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function handleClick() {
    console.log('123432');
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  return (
    <div>
      {/* <FormAdvancedSearch /> */}
      <div>{stateVal}</div>
      <Card>
        <Button type="primary" onClick={handleClick}>
          新增
        </Button>
        <Button type="dashed">编辑</Button>
        <Button type="danger">删除</Button>
      </Card>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};
