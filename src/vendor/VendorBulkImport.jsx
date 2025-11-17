import { useState } from "react";
import { Card, Button, Upload, Table, Progress, message, Space, Result } from "antd";
import { UploadOutlined, CheckCircleOutlined } from "@ant-design/icons";

export default function VendorBulkImport() {
  const [fileList, setFileList] = useState([]);
  const [importing, setImporting] = useState(false);
  const [imported, setImported] = useState(false);
  const [importedData, setImportedData] = useState([]);

  const handleUpload = (file) => {
    setFileList([file]);
    return false;
  };

  const handleImport = () => {
    if (!fileList.length) {
      message.error('Please select a file');
      return;
    }
    setImporting(true);
    setTimeout(() => {
      setImportedData([
        { _id: 1, product: 'iPhone 14', sku: 'IP14', category: 'Electronics', status: 'Success' },
        { _id: 2, product: 'MacBook Air', sku: 'MBA', category: 'Electronics', status: 'Success' },
        { _id: 3, product: 'T-Shirt', sku: 'TSH', category: 'Fashion', status: 'Success' }
      ]);
      setImporting(false);
      setImported(true);
      message.success('Import completed!');
    }, 2000);
  };

  const columns = [
    { title: 'Product', dataIndex: 'product', key: 'product' },
    { title: 'SKU', dataIndex: 'sku', key: 'sku' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => <span style={{ color: 'green' }}>✓ {status}</span> }
  ];

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>📥 Bulk Import</h2>

      {imported ? (
        <>
          <Result status="success" title="Import Successful" subTitle={`${importedData.length} products imported`} />
          <Card style={{ marginTop: 16 }}>
            <Table dataSource={importedData} columns={columns} rowKey="_id" pagination={false} />
          </Card>
        </>
      ) : (
        <Card>
          <Upload accept=".csv,.xlsx" beforeUpload={handleUpload} maxCount={1}>
            <Button icon={<UploadOutlined />} size="large">
              Click to Upload CSV or Excel File
            </Button>
          </Upload>

          {fileList.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <Progress percent={importing ? 50 : 0} />
              <Button type="primary" onClick={handleImport} loading={importing} style={{ marginTop: 16 }}>
                Start Import
              </Button>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
