"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Category = {
  id: number;
  name: string;
};

const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category2");
  return res.data.data;
};

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const colors = ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"];

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories: Category[] = await getCategory();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const handleClick = (categoryName: string) => {
    console.log('Category ${categoryName} clicked!');
  };

  const cardStyles = {
    flex: "1",
    margin: "10px",
    minWidth: "100px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  };

  const transactionCardStyles = {
    flex: "1", // Adjust flex size to accommodate both cards
    margin: "10px",
    minWidth: "50px",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px", // Increased padding for a larger appearance
  };

  return (
    <div className="py-10 px-10" style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <b>Pilih Kategori</b>
        <div className="category-list" style={{ display: "flex", gap: "10px" }}>
          {categories.map((category, index) => (
            <button
              className="category-item"
              key={category.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: colors[index % colors.length],
              }}
              onClick={() => handleClick(category.name)}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Updated Cards */}
        <b>Pilih Menu</b>
        <div
          className="card-container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div className="card white-bg shadow" style={cardStyles}>
            Shoes! <br />
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Porro
          </div>
          <div className="card white-bg shadow" style={cardStyles}>
            Shoes! <br />
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Porro
          </div>
          <div className="card white-bg shadow" style={cardStyles}>
            Shoes! <br />
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Porro
          </div>
        </div>
      </div>

      {/* Transaction Card */}
      <div style={{ flex: "1", display: "flex" }}>
        <div className="card white-bg shadow" style={transactionCardStyles}>
          Transaction Card <br />
          Your transaction information goes here...
        </div>
      </div>
    </div>
  );
};

export default CategoryList;