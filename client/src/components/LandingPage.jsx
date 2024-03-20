import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LandingPage.css';
import ProductList from './ProductList';

function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    // const products = [
    //     {
    //       category: "Electronics",
    //       name: "Smartphone X",
    //       price: "$499",
    //       ratings: 4.5,
    //       picture: "../../../assets/phone.jpeg",
    //       description: "A sleek and powerful smartphone with advanced features.",
    //       manufacturer: "Tech Innovations Ltd.",
    //       quantity: 100
    //     },
    //     {
    //       category: "Electronics",
    //       name: "Wireless Headphones Y",
    //       price: "$129",
    //       picture: "../../../assets/headphones.jpeg",
    //       ratings: 4.2,
    //       description: "Immerse yourself in high-quality sound with these wireless headphones.",
    //       manufacturer: "AudioTech Inc.",
    //       quantity: 200
    //     },
    //     {
    //       category: "Clothing",
    //       name: "Men's Casual Shirt",
    //       price: "$39",
    //       picture: "../../../assets/shirt.jpeg",
    //       ratings: 4.0,
    //       description: "A comfortable and stylish shirt for everyday wear.",
    //       manufacturer: "Fashion Trends Co.",
    //       quantity: 300
    //     },
    //     {
    //       category: "Clothing",
    //       name: "Women's Sports Leggings",
    //       price: "$49",
    //       picture: "../../../assets/leggings.jpeg",
    //       ratings: 4.3,
    //       description: "Stretchy and breathable leggings perfect for workouts.",
    //       manufacturer: "Active Wear Inc.",
    //       quantity: 150
    //     },
    //     {
    //       category: "Home & Kitchen",
    //       name: "Stainless Steel Cookware Set",
    //       price: "$99",
    //       picture: "../../../assets/cookware.jpeg",
    //       ratings: 4.7,
    //       description: "A durable and versatile cookware set for your kitchen.",
    //       manufacturer: "Kitchen Essentials Ltd.",
    //       quantity: 120
    //     },
    //     {
    //       category: "Home & Kitchen",
    //       name: "Robot Vacuum Cleaner",
    //       price: "$199",
    //       picture: "../../../assets/vaccum-cleaner.jpeg",
    //       ratings: 4.6,
    //       description: "Effortlessly clean your floors with this intelligent robot vacuum cleaner.",
    //       manufacturer: "SmartHome Technologies Inc.",
    //       quantity: 80
    //     },
    //     {
    //       category: "Electronics",
    //       name: "Smart Watch Z",
    //       price: "$199",
    //       picture: '../../../assets/smartwatch.webp',
    //       ratings: 4.4,
    //       description: "Stay connected and track your fitness with this stylish smartwatch.",
    //       manufacturer: "Tech Gadgets Inc.",
    //       quantity: 150
    //     },
    //     {
    //       category: "Electronics",
    //       name: "Portable Bluetooth Speaker",
    //       price: "$79",
    //       picture: "../../../assets/bluetooth-speaker.jpeg",
    //       ratings: 4.3,
    //       description: "Enjoy your favorite music anywhere with this compact Bluetooth speaker.",
    //       manufacturer: "AudioTech Inc.",
    //       quantity: 100
    //     },
    //     {
    //       category: "Clothing",
    //       name: "Men's Formal Suit",
    //       price: "$299",
    //       picture: "../../../assets/men-suit.jpeg",
    //       ratings: 4.6,
    //       description: "Look sharp and sophisticated in this tailored formal suit.",
    //       manufacturer: "Fashion Trends Co.",
    //       quantity: 80
    //     },
    //     {
    //       category: "Clothing",
    //       name: "Women's Elegant Dress",
    //       price: "$129",
    //       picture: "../../../assets/dress.jpeg",
    //       ratings: 4.8,
    //       description: "Make a statement in this stunning and classy evening dress.",
    //       manufacturer: "Glamour Couture",
    //       quantity: 120
    //     },
    //     {
    //       category: "Home & Kitchen",
    //       name: "Coffee Maker",
    //       picture: "../../../assets/coffee-maker.jpeg",
    //       price: "$59",
    //       ratings: 4.2,
    //       description: "Brew delicious coffee at home with this easy-to-use coffee maker.",
    //       manufacturer: "Kitchen Essentials Ltd.",
    //       quantity: 200
    //     },
    //     {
    //       category: "Home & Kitchen",
    //       name: "Air Fryer",
    //       picture: "../../../assets/air-fryer.jpeg",
    //       price: "$89",
    //       ratings: 4.5,
    //       description: "Enjoy crispy and healthy fried food with this versatile air fryer.",
    //       manufacturer: "Healthy Living Appliances",
    //       quantity: 100
    //     },
    //     {
    //       category: "Electronics",
    //       name: "Laptop XYZ",
    //       picture: "../../../assets/laptop.jpeg",
    //       price: "$899",
    //       ratings: 4.7,
    //       description: "Powerful performance and sleek design make this laptop perfect for work and play.",
    //       manufacturer: "Tech Innovations Ltd.",
    //       quantity: 90
    //     },
    //     {
    //       category: "Electronics",
    //       name: "Gaming Console",
    //       picture: "../../../assets/gaming.jpeg",
    //       price: "$399",
    //       ratings: 4.6,
    //       description: "Experience immersive gaming with this advanced gaming console.",
    //       manufacturer: "GamerTech Inc.",
    //       quantity: 150
    //     }
      
    //   ];

      


  return (
    <div className="landing-page">
      <div className="announcement-bar">
        <marquee behavior="scroll" direction="left">
          New arrivals! Limited-time offer - Get 20% off on all products. Hurry up!
        </marquee>
      </div>
      <Slider {...settings} className="banner-slider">
        
        <div className="banner-slide">
          <img src="https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="Banner 2" />
        </div>
        <div className="banner-slide">
        
          <img src="https://static.vecteezy.com/system/resources/previews/007/153/463/large_2x/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg" alt="Banner 1" />
        </div>

      </Slider>

      
    </div>
  );
}

export default LandingPage;

