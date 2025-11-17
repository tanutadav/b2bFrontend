import { useState } from "react";
import { Card, Button, Table, Select, Space, message, Tag } from "antd";
import { DownloadOutlined, FileExcelOutlined } from "@ant-design/icons";

export default function VendorBulkExport() {
  const [exportData] = useState([
    { _id: 1, product: 'iPhone 14', sku: 'IP14', category: 'Electronics', price: 120000, stock: 15 },
    { _id: 2, product: 'MacBook Air', sku: 'MBA', category: 'Electronics', price: 129999, stock: 8 },
    { _id: 3, product: 'T-Shirt', sku: 'TSH', category: 'Fashion', price: 599, stock: 100 }
  ]);
  const [exportType, setExportType] = useState('csv');

  const handleExport = () => {
    message.success(`Exported as ${exportType.toUpperCase()}`);
  };

  const columns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'SKU', dataIndex: 'sku', key: 'sku' },
    { title: 'Category', dataIndex: 'category', key: 'category', render: (cat) => <Tag>{cat}</Tag> },
    { title: 'Price', dataIndex: 'price', key: 'price', render: (price) => `₹${price.toLocaleString()}` },
    { title: 'Stock', dataIndex: 'stock', key: 'stock' }
  ];

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>📤 Bulk Export</h2>

      <Card style={{ marginBottom: 16 }}>
        <Space>
          <span>Export Format:</span>
          <Select value={exportType} onChange={setExportType} style={{ width: 120 }}>
            <Select.Option value="csv">CSV</Select.Option>
            <Select.Option value="excel">Excel</Select.Option>
            <Select.Option value="json">JSON</Select.Option>
          </Select>
          <Button type="primary" icon={<DownloadOutlined />} onClick={handleExport}>
            Export {exportData.length} Products
          </Button>
        </Space>
      </Card>

      <Card title="Products to Export">
        <Table dataSource={exportData} columns={columns} rowKey="_id" pagination={false} />
      </Card>
    </div>
  );
}
