import React from "react";
import "./styles.scss";
import { Card, Col, Row } from "antd";
import { UserOutlined, ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';

const Dashbroad = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title={<UserOutlined style={{ fontSize: '35px', color: '#08c' }} />} extra bordered={true}>
          Total User:
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<ShoppingCartOutlined style={{ fontSize: '35px', color: '#08c' }} />} bordered={true}>
            Total Order:
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<AppstoreOutlined style={{ fontSize: '35px', color: '#08c'}} />} bordered={true}>
            Total Product:
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Dashbroad;
