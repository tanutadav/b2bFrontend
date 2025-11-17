import { useState } from "react";
import { Table, Button, Tag, Input, Select, Space, Avatar } from "antd";
import { SearchOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";

export default function Users() {
  const [users] = useState([
    { _id: '1', name: 'Robert Kumar', email: 'robert@test.com', role: 'customer', phone: '+91-9876543210', status: 'active', orders: 141 },
    { _id: '2', name: 'John Vendor', email: 'vendor@test.com', role: 'vendor', phone: '+91-9876543211', status: 'active', orders: 0 },
    { _id: '3', name: 'Devid Singh', email: 'devid@test.com', role: 'customer', phone: '+91-9876543212', status: 'active', orders: 17 },
    { _id: '4', name: 'Chris Patel', email: 'chris@test.com', role: 'customer', phone: '+91-9876543213', status: 'active', orders: 7 },
    { _id: '5', name: 'Sarah Vendor', email: 'sarah@vendor.com', role: 'vendor', phone: '+91-9876543214', status: 'active', orders: 0 },
    { _id: '6', name: 'Paul Sharma', email: 'paul@test.com', role: 'customer', phone: '+91-9876543215', status: 'inactive', orders: 3 }
  ]);

  const columns = [
    { 
      title: 'User', 
      key: 'user',
      render: (_, record) => (
        <Space>
          <Avatar icon={<UserOutlined />} style={{ background: '#1890ff' }} />
          <div>
            <div style={{ fontWeight: 600 }}>{record.name}</div>
            <div style={{ fontSize: 12, color: '#888' }}>{record.email}</div>
          </div>
        </Space>
      )
    },
    { title: 'Phone', dataIndex: 'phone', key: 'phone', width: 150 },
    { 
      title: 'Role', 
      dataIndex: 'role', 
      key: 'role',
      width: 120,
      render: (r) => <Tag color={r === 'vendor' ? 'blue' : r === 'customer' ? 'green' : 'purple'}>{r.toUpperCase()}</Tag>
    },
    { title: 'Orders', dataIndex: 'orders', key: 'orders', width: 80 },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      width: 100,
      render: (s) => <Tag color={s === 'active' ? 'green' : 'red'}>{s.toUpperCase()}</Tag>
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 200,
      render: () => (
        <Space>
          <Button size="small" type="link">View</Button>
          <Button size="small" type="link">Edit</Button>
          <Button size="small" type="link" danger>Delete</Button>
        </Space>
      )
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Users Management</h2>
        <Button type="primary" icon={<PlusOutlined />}>Add User</Button>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Input prefix={<SearchOutlined />} placeholder="Search by name, email..." style={{ width: 250 }} />
        <Select defaultValue="all" style={{ width: 150 }}>
          <Select.Option value="all">All Roles</Select.Option>
          <Select.Option value="customer">Customers</Select.Option>
          <Select.Option value="vendor">Vendors</Select.Option>
        </Select>
        <Select defaultValue="all" style={{ width: 150 }}>
          <Select.Option value="all">All Status</Select.Option>
          <Select.Option value="active">Active</Select.Option>
          <Select.Option value="inactive">Inactive</Select.Option>
        </Select>
      </div>

      <Table 
        dataSource={users} 
        columns={columns} 
        rowKey="_id" 
        pagination={{ pageSize: 10, showTotal: (total) => `Total ${total} users` }}
      />
    </div>
  );
}
