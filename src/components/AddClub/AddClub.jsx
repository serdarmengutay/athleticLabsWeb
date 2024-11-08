import React, { useState } from 'react';
import { Button, Form, Input, Upload, ColorPicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddClub = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <Form
      name="addClubForm"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Kulüp Adı"
        name="clubName"
        rules={[
          {
            required: true,
            message: 'Please input your club name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Logo"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          action="/upload.do"
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          maxCount={1} 
        >
          {fileList.length >= 1 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <Form.Item label="Tema 1">
        <ColorPicker />
      </Form.Item>
      
      <Form.Item label="Tema 2">
        <ColorPicker />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddClub;
