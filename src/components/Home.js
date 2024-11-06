import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroImage from '../images/heroimg1.jpg';
import menCategoryImage from '../images/men.jpg';
import womenCategoryImage from '../images/women.jpg';
import kidsCategoryImage from '../images/kids.jpg';
import nike95 from '../images/nike-air-max-95-vapor-green-brand-new-hm0622001.png';
import nikeAirMaxPlus from '../images/air max plus.jpg';
import nikeDn from '../images/W+AIR+MAX+DN.jpg';
import nikeFd from '../images/Nike_FD4290_20400_M044.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="main-home">
            <section 
                className="hero" 
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="hero-content">
                    <h1>Step into Style with BigSteppa</h1>
                    <p>Explore the latest trends and timeless designs for men, women, and kids.</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
            </section>
            
            <section className="categories">
                <h2>Shop by Category</h2>
                <div className="category-list">
                    <div className="category-item">
                        <img src={menCategoryImage} alt="Shoes for men" />
                        <h3>Men</h3>
                        <button className="category-btn">Shop Now</button>
                    </div>
                    <div className="category-item">
                        <img src={womenCategoryImage} alt="Shoes for women" />
                        <h3>Women</h3>
                        <button className="category-btn">Shop Now</button>
                    </div>
                    <div className="category-item">
                        <img src={kidsCategoryImage} alt="Shoes for kids" />
                        <h3>Kids</h3>
                        <button className="category-btn">Shop Now</button>
                    </div>
                </div>
            </section>

            <section className="popular-products">
                <h2>Popular Products</h2>
                <div className="product-list">
                    <div className="product-item">
                        <img src={nike95} alt="Classic Sneakers" />
                        <h3>Classic Sneakers</h3>
                        <p>R1,350.00</p>
                        <button className="product-btn">View Details</button>
                    </div>
                    <div className="product-item">
                        <img src={nikeFd} alt="High-Tops" />
                        <h3>High-Tops</h3>
                        <p>R1,530.00</p>
                        <button className="product-btn">View Details</button>
                    </div>
                    <div className="product-item">
                        <img src={nikeDn} alt="Classic Sneakers" />
                        <h3>Classic Sneakers</h3>
                        <p>R1,350.00</p>
                        <button className="product-btn">View Details</button>
                    </div>
                    <div className="product-item">
                        <img src={nikeAirMaxPlus} alt="High-Tops" />
                        <h3>High-Tops</h3>
                        <p>R1,530.00</p>
                        <button className="product-btn">View Details</button>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <h2>Be a Step Ahead</h2>
                <p>Sign up for our newsletter to get exclusive deals and the latest updates.</p>
                <button 
                    className="cta-btn" 
                    onClick={() => navigate('/newsletter')}
                >
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default Home;
