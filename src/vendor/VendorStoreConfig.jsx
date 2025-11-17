import { useState } from "react";
import { Card, Form, Input, Select, Switch, Button, Row, Col, Divider, message } from "antd";
import { SaveOutlined } from "@ant-design/icons";

export default function VendorStoreConfig() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSave = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success('Configuration saved successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>⚙️ Store Configuration</h2>

      <Card>
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Divider>Store Information</Divider>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="storeName" label="Store Name" rules={[{ required: true }]}>
                <Input defaultValue="My Multi-Vendor Store" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="storeEmail" label="Store Email" rules={[{ required: true }]}>
                <Input defaultValue="store@example.com" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                <Input defaultValue="+91 98765 43210" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="supportEmail" label="Support Email">
                <Input defaultValue="support@example.com" />
              </Form.Item>
            </Col>
          </Row>

          <Divider>Store Settings</Divider>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="currency" label="Currency" rules={[{ required: true }]}>
                <Select defaultValue="INR">
                  <Select.Option value="INR">₹ Indian Rupee (INR)</Select.Option>
                  <Select.Option value="USD">$ US Dollar (USD)</Select.Option>
                  <Select.Option value="EUR">€ Euro (EUR)</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="language" label="Default Language" rules={[{ required: true }]}>
                <Select defaultValue="en">
                  <Select.Option value="en">English</Select.Option>
                  <Select.Option value="hi">Hindi</Select.Option>
                  <Select.Option value="es">Spanish</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Divider>Features</Divider>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="orderNotifications" label="Order Notifications" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="emailMarketing" label="Email Marketing" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="smsNotifications" label="SMS Notifications" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="pushNotifications" label="Push Notifications" valuePropName="checked">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
          </Row>

          <Divider>Policies</Divider>

          <Form.Item name="returnPolicy" label="Return Policy (Days)" rules={[{ required: true }]}>
            <Input defaultValue="30" />
          </Form.Item>

          <Form.Item name="cancelPolicy" label="Cancellation Policy (Hours)" rules={[{ required: true }]}>
            <Input defaultValue="24" />
          </Form.Item>

          <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading={loading} size="large">
            Save Configuration
          </Button>
        </Form>
      </Card>
    </div>
  );
}
