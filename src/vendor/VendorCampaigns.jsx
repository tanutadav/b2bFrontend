import { useState } from "react";
import { Table, Button, Modal, Form, Input, Select, DatePicker, Upload, Space, message, Popconfirm, Tag, Card, Row, Col, Progress } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined, UploadOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';

export default function VendorCampaigns() {
  const [campaigns, setCampaigns] = useState([
    {
      _id: '1',
      name: 'Diwali Mega Sale',
      description: 'Special Diwali discounts on all categories',
      type: 'seasonal',
      status: 'active',
      startDate: '2025-11-01',
      endDate: '2025-11-05',
      budget: 50000,
      spent: 32500,
      clicks: 1250,
      impressions: 45000,
      conversions: 156,
      image: 'https://via.placeholder.com/100x100?text=Diwali',
      platforms: ['website', 'app', 'email'],
      targetAudience: 'All'
    },
    {
      _id: '2',
      name: 'Electronics Flash Sale',
      description: 'Limited time offers on electronics',
      type: 'flash',
      status: 'active',
      startDate: '2025-10-31',
      endDate: '2025-11-02',
      budget: 30000,
      spent: 18900,
      clicks: 890,
      impressions: 28000,
      conversions: 95,
      image: 'https://via.placeholder.com/100x100?text=Electronics',
      platforms: ['app', 'push'],
      targetAudience: 'Tech Enthusiasts'
    },
    {
      _id: '3',
      name: 'Fashion Week Campaign',
      description: 'New fashion collection launch',
      type: 'promotional',
      status: 'scheduled',
      startDate: '2025-11-10',
      endDate: '2025-11-17',
      budget: 40000,
      spent: 0,
      clicks: 0,
      impressions: 0,
      conversions: 0,
      image: 'https://via.placeholder.com/100x100?text=Fashion',
      platforms: ['website', 'social', 'email'],
      targetAudience: 'Fashion Lovers'
    },
    {
      _id: '4',
      name: 'Health & Wellness',
      description: 'Pharmacy products awareness',
      type: 'awareness',
      status: 'ended',
      startDate: '2025-10-20',
      endDate: '2025-10-28',
      budget: 25000,
      spent: 25000,
      clicks: 650,
      impressions: 22000,
      conversions: 48,
      image: 'https://via.placeholder.com/100x100?text=Health',
      platforms: ['website', 'email'],
      targetAudience: 'Health Conscious'
    }
  ]);

  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form] = Form.useForm();

  const statusColors = {
    active: 'green',
    scheduled: 'blue',
    ended: 'red',
    paused: 'orange'
  };

  const typeColors = {
    seasonal: 'purple',
    flash: 'red',
    promotional: 'blue',
    awareness: 'green'
  };

  const handleSave = (values) => {
    try {
      const formattedValues = {
        ...values,
        startDate: values.startDate.format('YYYY-MM-DD'),
        endDate: values.endDate.format('YYYY-MM-DD'),
        spent: 0,
        clicks: 0,
        impressions: 0,
        conversions: 0
      };

      if (editingId) {
        setCampaigns(campaigns.map(campaign =>
          campaign._id === editingId ? { ...campaign, ...formattedValues } : campaign
        ));
        message.success('Campaign updated!');
      } else {
        setCampaigns([...campaigns, {
          ...formattedValues,
          _id: Date.now().toString(),
          status: 'scheduled'
        }]);
        message.success('Campaign created!');
      }
      setModalOpen(false);
      form.resetFields();
      setEditingId(null);
    } catch (error) {
      message.error('Failed to save campaign');
    }
  };

  const handleDelete = (id) => {
    setCampaigns(campaigns.filter(campaign => campaign._id !== id));
    message.success('Campaign deleted');
  };

  const handleEdit = (record) => {
    setEditingId(record._id);
    form.setFieldsValue({
      name: record.name,
      description: record.description,
      type: record.type,
      startDate: dayjs(record.startDate),
      endDate: dayjs(record.endDate),
      budget: record.budget,
      platforms: record.platforms,
      targetAudience: record.targetAudience,
      status: record.status
    });
    setModalOpen(true);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchSearch = searchText === '' ||
      campaign.name.toLowerCase().includes(searchText.toLowerCase());
    return matchStatus && matchSearch;
  });

  const columns = [
    {
      title: 'Campaign',
      key: 'name',
      width: 200,
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{record.name}</div>
          <Tag color={typeColors[record.type]}>{record.type.toUpperCase()}</Tag>
          <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{record.description}</div>
        </div>
      )
    },
    {
      title: 'Duration',
      key: 'duration',
      width: 150,
      render: (_, record) => (
        <div style={{ fontSize: 12 }}>
          <div>{record.startDate}</div>
          <div style={{ color: '#888' }}>to {record.endDate}</div>
        </div>
      )
    },
    {
      title: 'Budget',
      key: 'budget',
      width: 120,
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 600 }}>₹{record.budget.toLocaleString()}</div>
          <Progress
            percent={Math.round((record.spent / record.budget) * 100)}
            size="small"
            status={record.spent >= record.budget ? 'exception' : 'active'}
          />
          <div style={{ fontSize: 11, color: '#888' }}>Spent: ₹{record.spent.toLocaleString()}</div>
        </div>
      )
    },
    {
      title: 'Performance',
      key: 'performance',
      width: 140,
      render: (_, record) => (
        <div style={{ fontSize: 12 }}>
          <div>👁️ {record.impressions.toLocaleString()}</div>
          <div>🖱️ {record.clicks.toLocaleString()}</div>
          <div style={{ color: '#52c41a', fontWeight: 600 }}>✓ {record.conversions}</div>
        </div>
      )
    },
    {
      title: 'ROI',
      key: 'roi',
      width: 100,
      render: (_, record) => {
        const roi = record.conversions > 0 ? ((record.conversions / record.spent) * 100).toFixed(2) : 0;
        return (
          <div style={{ fontWeight: 600, color: roi > 0 ? '#52c41a' : '#666' }}>
            {roi}%
          </div>
        );
      }
    },
    {
      title: 'Status',
      key: 'status',
      width: 110,
      render: (_, record) => (
        <Tag color={statusColors[record.status]}>
          {record.status.toUpperCase()}
        </Tag>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Button
            size="small"
            type="link"
            icon={<EyeOutlined />}
            onClick={() => message.info('View campaign details')}
          >
            View
          </Button>
          <Button
            size="small"
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete Campaign?"
            onConfirm={() => handleDelete(record._id)}
          >
            <Button size="small" danger type="link" icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🎯 Campaigns Management</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setEditingId(null);
            form.resetFields();
            setModalOpen(true);
          }}
        >
          Create Campaign
        </Button>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Card style={{ minWidth: 150 }}>
          <div style={{ fontSize: 12, color: '#888' }}>Total Campaigns</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#1890ff' }}>
            {filteredCampaigns.length}
          </div>
        </Card>
        <Card style={{ minWidth: 150 }}>
          <div style={{ fontSize: 12, color: '#888' }}>Active</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#52c41a' }}>
            {filteredCampaigns.filter(c => c.status === 'active').length}
          </div>
        </Card>
        <Card style={{ minWidth: 150 }}>
          <div style={{ fontSize: 12, color: '#888' }}>Total Budget</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#faad14' }}>
            ₹{filteredCampaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
          </div>
        </Card>
        <Card style={{ minWidth: 150 }}>
          <div style={{ fontSize: 12, color: '#888' }}>Total Conversions</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#722ed1' }}>
            {filteredCampaigns.reduce((sum, c) => sum + c.conversions, 0)}
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search campaigns..."
          style={{ width: 250 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
        />

        <Select
          value={filterStatus}
          onChange={setFilterStatus}
          style={{ width: 150 }}
        >
          <Select.Option value="all">All Status</Select.Option>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="scheduled">Scheduled</Select.Option>
          <Select.Option value="ended">Ended</Select.Option>
          <Select.Option value="paused">Paused</Select.Option>
        </Select>
      </div>

      <Table
        dataSource={filteredCampaigns}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1300 }}
      />

      <Modal
        title={editingId ? 'Edit Campaign' : 'Create Campaign'}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          form.resetFields();
          setEditingId(null);
        }}
        onOk={() => form.submit()}
        width={650}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item
            name="name"
            label="Campaign Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. Diwali Mega Sale" size="large" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder="Campaign description" rows={2} />
          </Form.Item>

          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Campaign Type"
                rules={[{ required: true }]}
              >
                <Select size="large">
                  <Select.Option value="seasonal">Seasonal</Select.Option>
                  <Select.Option value="flash">Flash Sale</Select.Option>
                  <Select.Option value="promotional">Promotional</Select.Option>
                  <Select.Option value="awareness">Awareness</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true }]}
              >
                <Select size="large">
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="scheduled">Scheduled</Select.Option>
                  <Select.Option value="paused">Paused</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={12}>
            <Col span={12}>
              <Form.Item
                name="startDate"
                label="Start Date"
                rules={[{ required: true }]}
              >
                <DatePicker style={{ width: '100%' }} size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="endDate"
                label="End Date"
                rules={[{ required: true }]}
              >
                <DatePicker style={{ width: '100%' }} size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="budget"
            label="Budget (₹)"
            rules={[{ required: true }]}
          >
            <Input
              type="number"
              placeholder="0"
              size="large"
              prefix="₹"
            />
          </Form.Item>

          <Form.Item
            name="platforms"
            label="Marketing Platforms"
            rules={[{ required: true }]}
          >
            <Select
              mode="multiple"
              placeholder="Select platforms"
              size="large"
            >
              <Select.Option value="website">Website</Select.Option>
              <Select.Option value="app">Mobile App</Select.Option>
              <Select.Option value="email">Email</Select.Option>
              <Select.Option value="social">Social Media</Select.Option>
              <Select.Option value="push">Push Notifications</Select.Option>
              <Select.Option value="sms">SMS</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="targetAudience"
            label="Target Audience"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. All, Tech Enthusiasts, etc." size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
