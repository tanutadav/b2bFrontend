import { useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, message, Select, Space, Popconfirm, Tag } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";

export default function VendorItems() {
  const [items, setItems] = useState([
    // Electronics
    { _id: '1', name: 'iPhone 14 Pro Max', price: 120000, stock: 15, category: 'Electronics', image: '📱' },
    { _id: '2', name: 'Samsung Galaxy S23', price: 95000, stock: 20, category: 'Electronics', image: '📱' },
    { _id: '3', name: 'MacBook Air M2', price: 129999, stock: 8, category: 'Electronics', image: '💻' },
    { _id: '4', name: 'iPad Pro 12.9', price: 85000, stock: 12, category: 'Electronics', image: '📱' },
    { _id: '5', name: 'Apple Watch Series 8', price: 45000, stock: 23, category: 'Electronics', image: '⌚' },
    { _id: '6', name: 'Sony Headphones WH-1000', price: 28000, stock: 35, category: 'Electronics', image: '🎧' },
    { _id: '7', name: 'DJI Mini 3 Drone', price: 55000, stock: 10, category: 'Electronics', image: '🚁' },
    { _id: '8', name: 'Canon EOS R50 Camera', price: 95000, stock: 6, category: 'Electronics', image: '📷' },

    // Fashion
    { _id: '9', name: 'Formal Shirt (Blue)', price: 1999, stock: 45, category: 'Fashion', image: '👔' },
    { _id: '10', name: 'Jeans (Slim Fit)', price: 2499, stock: 60, category: 'Fashion', image: '👖' },
    { _id: '11', name: 'T-Shirt (Cotton)', price: 599, stock: 120, category: 'Fashion', image: '👕' },
    { _id: '12', name: 'Saree (Silk)', price: 4999, stock: 25, category: 'Fashion', image: '👗' },
    { _id: '13', name: 'Kurta (Ethnic)', price: 1499, stock: 50, category: 'Fashion', image: '👘' },
    { _id: '14', name: 'Sports Shoes', price: 5999, stock: 40, category: 'Fashion', image: '👟' },
    { _id: '15', name: 'Leather Jacket', price: 8999, stock: 15, category: 'Fashion', image: '🧥' },
    { _id: '16', name: 'Winter Scarf', price: 799, stock: 80, category: 'Fashion', image: '🧣' },
    { _id: '17', name: 'Sunglasses', price: 2999, stock: 35, category: 'Fashion', image: '🕶️' },
    { _id: '18', name: 'Handbag (Designer)', price: 6999, stock: 18, category: 'Fashion', image: '👜' },

    // Pharmacy
    { _id: '19', name: 'Paracetamol (500mg)', price: 35, stock: 200, category: 'Pharmacy', image: '💊' },
    { _id: '20', name: 'Aspirin (100mg)', price: 45, stock: 150, category: 'Pharmacy', image: '💊' },
    { _id: '21', name: 'Vitamin C (1000mg)', price: 299, stock: 100, category: 'Pharmacy', image: '🏥' },
    { _id: '22', name: 'Multivitamin Tablets', price: 499, stock: 80, category: 'Pharmacy', image: '💊' },
    { _id: '23', name: 'Cough Syrup (200ml)', price: 120, stock: 90, category: 'Pharmacy', image: '🧪' },
    { _id: '24', name: 'Pain Relief Gel', price: 189, stock: 110, category: 'Pharmacy', image: '🏥' },
    { _id: '25', name: 'Digestion Tablets', price: 79, stock: 140, category: 'Pharmacy', image: '💊' },
    { _id: '26', name: 'Cold Medicine (24pc)', price: 199, stock: 125, category: 'Pharmacy', image: '🤧' },
    { _id: '27', name: 'Sleep Aid Tablets', price: 349, stock: 60, category: 'Pharmacy', image: '😴' },
    { _id: '28', name: 'Antiseptic Cream', price: 159, stock: 105, category: 'Pharmacy', image: '🏥' },

    // Grocery
    { _id: '29', name: 'Basmati Rice (5kg)', price: 599, stock: 45, category: 'Grocery', image: '🍚' },
    { _id: '30', name: 'Wheat Flour (5kg)', price: 249, stock: 60, category: 'Grocery', image: '🌾' },
    { _id: '31', name: 'Cooking Oil (1L)', price: 189, stock: 85, category: 'Grocery', image: '🫒' },
    { _id: '32', name: 'Sugar (1kg)', price: 49, stock: 120, category: 'Grocery', image: '🍬' },
    { _id: '33', name: 'Salt (1kg)', price: 25, stock: 150, category: 'Grocery', image: '🧂' },
    { _id: '34', name: 'Milk (1L)', price: 65, stock: 200, category: 'Grocery', image: '🥛' },
    { _id: '35', name: 'Paneer (500g)', price: 249, stock: 35, category: 'Grocery', image: '🧀' },
    { _id: '36', name: 'Eggs (12pc)', price: 79, stock: 90, category: 'Grocery', image: '🥚' },
    { _id: '37', name: 'Apple (1kg)', price: 189, stock: 50, category: 'Grocery', image: '🍎' },
    { _id: '38', name: 'Banana (1kg)', price: 49, stock: 100, category: 'Grocery', image: '🍌' },
    { _id: '39', name: 'Onion (1kg)', price: 45, stock: 110, category: 'Grocery', image: '🧅' },
    { _id: '40', name: 'Tomato (1kg)', price: 55, stock: 95, category: 'Grocery', image: '🍅' },
    { _id: '41', name: 'Garlic (500g)', price: 89, stock: 70, category: 'Grocery', image: '🧄' },
    { _id: '42', name: 'Turmeric Powder (500g)', price: 149, stock: 80, category: 'Grocery', image: '🧡' },
    { _id: '43', name: 'Chili Powder (500g)', price: 129, stock: 75, category: 'Grocery', image: '🌶️' }
  ]);

  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form] = Form.useForm();

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Electronics', label: '📱 Electronics' },
    { value: 'Fashion', label: '👔 Fashion' },
    { value: 'Pharmacy', label: '💊 Pharmacy' },
    { value: 'Grocery', label: '🍚 Grocery' }
  ];

  const categoryColors = {
    Electronics: 'blue',
    Fashion: 'purple',
    Pharmacy: 'red',
    Grocery: 'green'
  };

  function handleSave(values) {
    try {
      if (editingId) {
        setItems(items.map(item =>
          item._id === editingId ? { ...item, ...values } : item
        ));
        message.success('Item updated successfully!');
      } else {
        const newItem = { 
          _id: Date.now().toString(), 
          ...values,
          image: '📦'
        };
        setItems([...items, newItem]);
        message.success('Item added successfully!');
      }
      setModalOpen(false);
      form.resetFields();
      setEditingId(null);
    } catch (error) {
      message.error('Failed to save item');
    }
  }

  function handleDelete(id) {
    setItems(items.filter(item => item._id !== id));
    message.success('Item deleted');
  }

  function handleEdit(record) {
    setEditingId(record._id);
    form.setFieldsValue({
      name: record.name,
      price: record.price,
      stock: record.stock,
      category: record.category
    });
    setModalOpen(true);
  }

  const filteredItems = items.filter(item => {
    const matchCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchSearch = searchText === '' || 
      item.name.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  const columns = [
    { 
      title: 'Item Name', 
      key: 'name',
      width: 200,
      render: (_, record) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
            <span style={{ fontSize: 20 }}>{record.image}</span>
            {record.name}
          </div>
        </div>
      )
    },
    { 
      title: 'Category', 
      dataIndex: 'category', 
      key: 'category',
      width: 120,
      render: (cat) => <Tag color={categoryColors[cat]}>{cat}</Tag>
    },
    { 
      title: 'Price', 
      dataIndex: 'price', 
      key: 'price',
      width: 100,
      render: (p) => <div style={{ fontWeight: 600, color: '#1890ff' }}>₹{p.toLocaleString()}</div>
    },
    { 
      title: 'Stock', 
      dataIndex: 'stock', 
      key: 'stock',
      width: 80,
      render: (stock) => (
        <div style={{ 
          fontWeight: 600, 
          color: stock < 20 ? '#ff4d4f' : '#52c41a'
        }}>
          {stock} units
        </div>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 140,
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
            title="Delete Item?"
            description="Are you sure?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
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
        <h2 style={{ margin: 0 }}>Items Management</h2>
        <Button 
          type="primary" 
          size="large" 
          icon={<PlusOutlined />}
          onClick={() => {
            setEditingId(null);
            form.resetFields();
            setModalOpen(true);
          }}
        >
          Add Item
        </Button>
      </div>

      <div style={{ marginBottom: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Input 
          prefix={<SearchOutlined />}
          placeholder="Search items..."
          style={{ width: 250 }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
        />
        
        <Select 
          value={filterCategory} 
          onChange={setFilterCategory}
          style={{ width: 200 }}
        >
          {categories.map(cat => (
            <Select.Option key={cat.value} value={cat.value}>
              {cat.label}
            </Select.Option>
          ))}
        </Select>
      </div>

      <Table 
        dataSource={filteredItems} 
        columns={columns} 
        rowKey="_id" 
        pagination={{ pageSize: 10 }}
        scroll={{ x: 800 }}
      />
      
      <Modal 
        title={editingId ? 'Edit Item' : 'Add New Item'} 
        open={modalOpen} 
        onCancel={() => { 
          setModalOpen(false); 
          form.resetFields(); 
          setEditingId(null);
        }} 
        onOk={() => form.submit()}
        okText={editingId ? 'Update Item' : 'Add Item'}
        width={500}
      >
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Form.Item 
            name="name" 
            label="Item Name" 
            rules={[{ required: true, message: 'Please enter item name' }]}
          >
            <Input placeholder="e.g. iPhone 14 Pro Max" size="large" />
          </Form.Item>

          <Form.Item 
            name="category" 
            label="Category" 
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select placeholder="Select category" size="large">
              <Select.Option value="Electronics">📱 Electronics</Select.Option>
              <Select.Option value="Fashion">👔 Fashion</Select.Option>
              <Select.Option value="Pharmacy">💊 Pharmacy</Select.Option>
              <Select.Option value="Grocery">🍚 Grocery</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item 
            name="price" 
            label="Price (₹)" 
            rules={[{ required: true, message: 'Please enter price' }]}
          >
            <InputNumber style={{ width: '100%' }} min={0} size="large" />
          </Form.Item>

          <Form.Item 
            name="stock" 
            label="Stock Quantity" 
            rules={[{ required: true, message: 'Please enter stock' }]}
          >
            <InputNumber style={{ width: '100%' }} min={0} size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
