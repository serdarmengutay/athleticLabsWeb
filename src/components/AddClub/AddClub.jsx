import React, { useEffect, useState } from "react";
import { Button, Form, Input, Upload, ColorPicker, Row, Col } from "antd";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addClub } from "../../redux/slices/clubsSlice";
import axios from "axios";


const AddClub = () => {
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };


  const onFinish = async (values) => {
    try {
      const payload = {
        clubName: values.clubName,
        theme1: values.theme1, 
        theme2: values.theme2,
        logo: fileList[0]?.thumbUrl,
      };
  
      const response = await axios.post(`http://localhost:5001/api/clubs`, payload);
  
      console.log("response", response);
      dispatch(addClub(response.data));
      setFileList([]);

    } catch (error) {
      console.log("error", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  
  return (
    <Form
      name="addClubForm"
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
      <Col>
        <Form.Item
          label="Kulüp Adı"
          name="clubName"
          rules={[
            {
              required: true,
              message: "Please input your club name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Logo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          name="logo"
          rules={[
            {
              required: true,
              message: "Please input your logo!",
            },
          ]}
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
        <Col span={12}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your club theme!",
              },
            ]}
            name="theme1"
            label="Tema 1"
          >
            <ColorPicker allowClear={true} size="small" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="theme2" label="Tema 2">
            <ColorPicker allowClear={true} size="small" />
          </Form.Item>
        </Col>
      </Col>
      <Row gutter={24}>
        <Col>
          <Button type="primary" htmlType="reset">
            Temizle
            <DeleteOutlined />
          </Button>
        </Col>
        <Col>
          <Button type="primary" htmlType="submit">
            Kaydet
            <SaveOutlined />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddClub;
