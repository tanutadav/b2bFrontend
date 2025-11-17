import { Card, Button, Empty, Statistic, Row, Col } from "antd";
import { PlusOutlined, ShopOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function VendorNewStores() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: 0 }}>🆕 New Stores</h2>
      </div>

      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic title="Active Stores" value={3} valueStyle={{ color: '#52c41a' }} />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic title="Total Locations" value={8} valueStyle={{ color: '#1890ff' }} />
          </Card>
        </Col>
      </Row>

      <Card>
        <Empty
          description="Start your multi-store expansion"
          style={{ marginBottom: 16 }}
        />
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={() => navigate('/vendor/add-stores')}
          block
        >
          Create New Store
        </Button>
      </Card>
    </div>
  );
}
