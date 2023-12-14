import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Select, InputNumber } from 'antd';
import './antd/dist/antd.css';

const { Option } = Select;

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));

    // Fetch products from the API
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    // Apply filters based on selected category and price range
    const filtered = products.filter(
      (product) =>
        (selectedCategory === '' || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Select
            style={{ width: '100%' }}
            placeholder="Select category"
            onChange={handleCategoryChange}
          >
            <Option value="">All Categories</Option>
            {categories.map((category) => (
              <Option key={category.id} value={category.name}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={6}>
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Min Price"
            onChange={(value) => handlePriceRangeChange([value, priceRange[1]])}
          />
        </Col>
        <Col span={6}>
          <InputNumber
            style={{ width: '100%' }}
            placeholder="Max Price"
            onChange={(value) => handlePriceRangeChange([priceRange[0], value])}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card title={product.name} style={{ width: '100%' }}>
              <p>Category: {product.category.name}</p>
              <p>Price: ${product.price}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Catalog;