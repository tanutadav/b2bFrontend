import { useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, Select, DatePicker, Space, message, Popconfirm, Tag, Progress } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined, RocketOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([
    { 
      _id: '1', 
      name: 'Summer Collection Launch', 
      description: 'New summer products campaign',
      budget: 50000, 
      spent: 42500,
      startDate: '2025-10-30', 
      endDate: '2025-11-15',
      target: 'Customers',
      status: 'active',
      impressions: 125000,
      clicks: 8500,
      conversions: 425
    },
    { 
      _id: '2', 
      name: 'Festival Mega Sale', 
      description: 'Diwali special promotional campaign',
      budget: 100000, 
      spent: 78000,
      startDate: '2025-11-01', 
      endDate: '2025-11-30',
      target: 'All Users',
      status: 'scheduled',
      impressions: 0,
      clicks: 0,
      conversions: 0
    },
    { 
      _id: '3', 
      name: 'Flash Deal Campaign', 
      description: 'Weekend flash deals',
      budget: 25000, 
      spent: 25000,
      startDate: '2025-10-25', 
      endDate: '2025-10-29',
      target: 'Existing Customers',
      status: 'ended',
      impressions: 89000,
      clicks: 5200,
      conversions: 312
    },
    { 
      _id: '4', 
      name: 'App Download Boost', 
      description: 'Mobile app promotion',
      budget: 75000, 
      spent: 65000,
      startDate: '2025-10-31', 
      endDate: '2025-11-20',
      target: 'Mobile Users',
      status: 'active',
      impressions: 234000,
      clicks: 12500,
      conversions: 890
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

  // Add/Update Campaign
  async function handleSave(values) {
    try {
      if (editingId) {
        setCampaigns(campaigns.map(c => 
          c._id === editingId ? { ...c, ...values, _id: editingId } : c
        ));
        message.success('Campaign updated successfully!');
      } else {
        setCampaigns([...campaigns, { 
          ...values, 
          _id: Date.now().toString(),
          spent: 0,
          impressions: 0,
          clicks: 0,
          conversions: 0
        }]);
        message.success('Campaign created successfully!');
      }
      setModalOpen(false);
      form.resetFields();
      setEditingId(null);
    } catch (error) {
      message.error('Failed to save campaign');
    }
  }

  // Delete Campaign
  const handleDelete = (id) => {
    setCampaigns(campaigns.filter(c => c._id !== id));
    message.success('Campaign deleted');
  };

  // Edit Campaign
  const handleEdit = (record) => {
    setEditingId(record._id);
    form.setFieldsValue({
      name: record.name,
      description: record.description,
      budget: record.budget,
      startDate: dayjs(record.startDate),
      endDate: dayjs(record.endDate),
      target: record.target,
      status: record.status
    });
    setModalOpen(true);
  };

  // Filter Logic
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchSearch = searchText === '' || 
      campaign.name.toLowerCase().includes(searchText.toLowerCase());
    return matchStatus && matchSearch;
  });

  // Calculate ROI
  const calculateROI = (spent, conversions) => {
    if (spent === 0) return 0;
    const avgOrderValue = 1000; // Assume ₹1000 per conversion
    const revenue = conversions * avgOrderValue;
    return ((revenue - spent) / spent * 100).toFixed(1);
  };

  const columns = [
    { 
      title: 'Campaign Name', 
      dataIndex: 'name', 
      key: 'name',
      width: 180,
      render: (name) => <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}><RocketOutlined style={{ color: '#1890ff' }} /> {name}</div>
    },
    { 
      title: 'Description', 
      dataIndex: 'description', 
      key: 'description',
      width: 150,
      render: (desc) => <span style={{ fontSize: 12, color: '#888' }}>{desc}</span>
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
            strokeColor={record.spent / record.budget > 0.8 ? '#ff4d4f' : '#1890ff'}
            style={{ marginTop: 4 }}
          />
          <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>Spent: ₹{record.spent.toLocaleString()}</div>
        </div>
      )
    },
    { 
      title: 'Performance', 
      key: 'performance',
      width: 140,
      render: (_, record) => (
        <div style={{ fontSize: 12 }}>
          <div>📊 {record.impressions.toLocaleString()} impressions</div>
          <div>👆 {record.clicks.toLocaleString()} clicks</div>
          <div>✓ {record.conversions.toLocaleString()} conversions</div>
        </div>
      )
    },
    { 
      title: 'ROI', 
      key: 'roi',
      width: 100,
      render: (_, record) => {
        const roi = calculateROI(record.spent, record.conversions);
        return (
          <div style={{ 
            fontWeight: 600, 
            color: roi >= 0 ? '#52c41a' : '#ff4d4f',
            fontSize: 14
          }}>
            {roi}%
          </div>
        );
      }
    },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      width: 110,
      render: (status) => <Tag color={statusColors[status]}>{status.toUpperCase()}</Tag>
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 180,
      render: (_, record) => (
        <Space size="small">
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
            description="Are you sure to delete this campaign?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              size="small" 
              danger
              type="link"
              icon={<DeleteOutlined />}
            >
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
        <h2 style={{ margin: 0 }}>Marketing Campaigns</h2>
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

      {/* Stats */}
      <div style={{ marginBottom: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ 
          background: '#fff', 
          padding: 12, 
          borderRadius: 6, 
          border: '1px solid #f0f0f0',
          minWidth: 160
        }}>
          <div style={{ fontSize: 12, color: '#888' }}>Active Campaigns</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#52c41a' }}>
            {filteredCampaigns.filter(c => c.status === 'active').length}
          </div>
        </div>
        
        <div style={{ 
          background: '#fff', 
          padding: 12, 
          borderRadius: 6, 
          border: '1px solid #f0f0f0',
          minWidth: 160
        }}>
          <div style={{ fontSize: 12, color: '#888' }}>Total Budget</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#1890ff' }}>
            ₹{filteredCampaigns.reduce((sum, c) => sum + c.budget, 0).toLocaleString()}
          </div>
        </div>
        
        <div style={{ 
          background: '#fff', 
          padding: 12, 
          borderRadius: 6, 
          border: '1px solid #f0f0f0',
          minWidth: 160
        }}>
          <div style={{ fontSize: 12, color: '#888' }}>Total Spent</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#faad14' }}>
            ₹{filteredCampaigns.reduce((sum, c) => sum + c.spent, 0).toLocaleString()}
          </div>
        </div>

        <div style={{ 
          background: '#fff', 
          padding: 12, 
          borderRadius: 6, 
          border: '1px solid #f0f0f0',
          minWidth: 160
        }}>
          <div style={{ fontSize: 12, color: '#888' }}>Total Conversions</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#52c41a' }}>
            {filteredCampaigns.reduce((sum, c) => sum + c.conversions, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Filters */}
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

      {/* Table */}
      <Table 
        dataSource={filteredCampaigns} 
        columns={columns} 
        rowKey="_id" 
        pagination={{ 
          pageSize: 10, 
          showTotal: (total) => `Total ${total} campaigns` 
        }}
        scroll={{ x: 1400 }}
      />

      {/* Add/Edit Modal */}
      <Modal
        title={editingId ? 'Edit Campaign' : 'Create Campaign'}
        open={modalOpen}
        onCancel={() => {
          setModalOpen(false);
          form.resetFields();
          setEditingId(null);
        }}
        onOk={() => form.submit()}
        width={700}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
        >
          <Form.Item 
            name="name" 
            label="Campaign Name" 
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g. Summer Collection Launch" />
          </Form.Item>

          <Form.Item 
            name="description" 
            label="Description" 
            rules={[{ required: true }]}
          >
            <Input.TextArea placeholder="Campaign description" rows={3} />
          </Form.Item>

          <Form.Item 
            name="budget" 
            label="Budget (₹)" 
            rules={[{ required: true }]}
          >
            <InputNumber 
              style={{ width: '100%' }}
              min={0}
              placeholder="0"
            />
          </Form.Item>

          <Form.Item label="Date Range">
            <div style={{ display: 'flex', gap: 12 }}>
              <Form.Item 
                name="startDate" 
                style={{ marginBottom: 0, flex: 1 }}
                rules={[{ required: true }]}
              >
                <DatePicker 
                  placeholder="Start Date"
                  style={{ width: '100%' }}
                />
              </Form.Item>
              <Form.Item 
                name="endDate" 
                style={{ marginBottom: 0, flex: 1 }}
                rules={[{ required: true }]}
              >
                <DatePicker 
                  placeholder="End Date"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </div>
          </Form.Item>

          <Form.Item 
            name="target" 
            label="Target Audience" 
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="All Users">All Users</Select.Option>
              <Select.Option value="Customers">Existing Customers</Select.Option>
              <Select.Option value="Mobile Users">Mobile Users</Select.Option>
              <Select.Option value="New Users">New Users</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item 
            name="status" 
            label="Status" 
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="active">Active</Select.Option>
              <Select.Option value="scheduled">Scheduled</Select.Option>
              <Select.Option value="paused">Paused</Select.Option>
              <Select.Option value="ended">Ended</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
