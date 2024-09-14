 import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import signUpCar from "@/assets/images/signup-car.png";
import logo from "@/assets/icons/logo.png";
import store from "@/assets/icons/store.png";
import left from "@/assets/icons/left.png";
import right from "@/assets/icons/right.png";
import bell from "@/assets/icons/bell.png";
//vendor image//
import Vendor1 from "@/assets/vendorimage/Vendor1.jpg";
import Vendor2 from "@/assets/vendorimage/Vendor2.jpg";
import Vendor3 from "@/assets/vendorimage/Vendor3.jpg";
import shopimg1 from "@/assets/vendorimage/shopimg1.jpg";
import shopimg2 from "@/assests/vendorimage/shopimg2.jpg";
import shopimg3 from "@/assests/vendorimage/shopimg3.jpg";


// Importing service icons
import s1 from "@/assets/icons/s1.png";
import s2 from "@/assets/icons/s2.png";
import s3 from "@/assets/icons/s3.png";
import s4 from "@/assets/icons/s4.png";
import s5 from "@/assets/icons/s5.png";
import s6 from "@/assets/icons/s6.png";
import s7 from "@/assets/icons/s7.png";
import s8 from "@/assets/icons/s8.png";
import s9 from "@/assets/icons/s9.png";
import s10 from "@/assets/icons/s10.png";
import s11 from "@/assets/icons/s11.png";
import s12 from "@/assets/icons/s12.png";
import s13 from "@/assets/icons/s13.png";
import menu from "@/assets/icons/menu.png";
import tyres from "@/assets/images/tyres.jpeg";
import battery from "@/assets/images/battery.jpeg";
import engine_oil from "@/assets/images/engine_oil.jpeg";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";


export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  signUpCar,
  check,
  noResult,
  message,
  tyres,
  battery,
  engine_oil,
  image1,
  image2,
  image3,
  //venor image//
  Vendor1,
  Vendor2,
  Vendor3,
  //vendor store image//
  shopimg1,
  shopimg2,
  shopimg3,
};

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
  // Adding service icons
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
  s13,
  menu,
  logo,
  store,
  left,
  right,
  bell,
};

export const onboarding = [
  {
    id: 1,
    title: "The perfect ride is just a tap away!",
    description:
      "Your journey begins with Ryde. Find your ideal ride effortlessly.",
    image:  {onboarding1},
  },
  {
    id: 2,
    title: "Best car in your hands with Ryde",
    description:
      "Discover the convenience of finding your perfect ride with Ryde",
    image:  {onboarding2},
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest.",
    image:  {onboarding3},
  },
];
export const services = [
  //home icons for services..//
  //home.tsx//
  {
    id: 0,
    name: "Oil change",
    image: { s1 },
    description: "oil",
  },
  {
    id: 1,
    name: "Brake Repair",
    image: { s2 },
    description: "Break",
  },
  {
    id: 2,
    name: " Tire Replacement",
    image: { s3 },
    description: "replace",
  },
  {
    id: 3,
    name: "Battery Check",
    image: { s4 },
    description: "battery",
  },
  {
    id: 4,
    name: " Engine Diagnosis",
    image: { s5 },
    description: "Engine",
  },
  {
    id: 5,
    name: " Wheel Alignment",
    image: { s6 },
    description: "Wheel",
  },
  {
    id: 6,
    name: "Suspension Repair",
    image: { s7 },
    description: "Repair",
  },
  {
    id: 7,
    name: " Air Condition",
    image: { s8 },
    description: "Air",
  },
  {
    id: 8,
    name: " Transmission Repair",
    image: { s9 },
    description: "Trans",
  },
  {
    id: 9,
    name: "Custom Exhaust",
    image: { s10 },
    description: "Custom ",
  },
  {
    id: 10,
    name: "Body Kits",
    image: { s11 },
    description: "Kits ",
  },
  {
    id: 11,
    name: "Performance Tuning",
    image: { s12 },
    description: "Performance",
  },
  {
    id: 12,
    name: "Spoilers",
    image: { s13 },
    description: "Spoil",
  },
   
];
export const Menu=[
  {
    //menu icons//
    id:1,
    name:"Menu",
    image:{menu},
    Title:"menu",
  }
];
export const vendors = [
  //vendors//
  {
    id: 1,
    storeImage:
        {shopimg1},
    name: "Vendor 1",
    description: "Description of Vendor 1",
    timings: "9 AM - 6 PM",
    availability: "Available",
    profileImage:  {Vendor1},
    detailedDescription:
      "Having experties in 4x4 cars ",
  },
  {
    id: 2,
    storeImage:
       {shopimg2},
    name: "Vendor 2",
    description: "Description of Vendor 2",
    timings: "10 AM - 7 PM",
    availability: "Not Available",
    profileImage:
      {Vendor2},
    detailedDescription:
      "Good in Modification and Repairing ",
  },
  {
    id: 3,
    storeImage:{shopimg3},
        name: "Vendor 2",
    description: "Description of Vendor 2",
    timings: "10 AM - 7 PM",
    availability: "Not Available",
    profileImage:
      {Vendor3},
    detailedDescription:
      "Detailed description of Vendor 2 including services offered and other relevant information.",
  },
  // Add more vendors as needed
];

const vendorDetails = [
  //vendordetail.tsx
  //image need too init//
  {  id:1,
     name: "Ramesh",
    image:  {Vendor1},
    description: "Experience of 10 years,Good in both 4 Wheeler and 2 wheeler 24/7 available",
  },
   
  {  id:2,
    name: "Manshukh Lal",
    image:  {Vendor2},
    description: " Experience of 14 years,Good in both 4 Wheeler and 2 wheeler 24/7 available",
  },
    {id:3,
    name: "Arijit ",
    image:  {Vendor3},
    description: " Experience of 15 years,Good in both 4 Wheeler and 2 wheeler 24/7 available",
  },
];
  // Add more details as needed
const cartItems = [
    {
      //cart.tsx
      id: 1,
      name: "Tyres",
      description: "Best quality tyres for your car",
      price: "₹5000",
      image: {tyres},
    },
    {
      id: 2,
      name: "Battery",
      description: "Long-lasting batteries for your vehicle",
      price: "₹3000",
      image:  {battery},
    },
  ];
   const data1 = [
    //carousel.tsx//
    { id: 1, 
      image: 'https://images.unsplash.com/photo-1636761358783-209512dccd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1lY2hhbmljfGVufDB8fDB8fHww' },
    { id: 2, 
      image: 'https://images.unsplash.com/photo-1636761358757-0a616eb9e17e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1lY2hhbmljfGVufDB8fDB8fHww' },
    { id: 3, 
      image: 'https://images.unsplash.com/photo-1599256630445-67b5772b1204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1lY2hhbmljfGVufDB8fDB8fHww' },
];
const notificationsData = [
  //notifications.tsx//
  { id: 1,
     title: 'New Service Launch', 
     message: 'We have launched new services for your convenience!' },
  { id: 2, 
    title: 'Premium Plan Available',
     message: 'Check out our new premium plan with added benefits!' },
  { id: 3,
     title: 'Discount Offer',
      message: 'Enjoy a 20% discount on all services this month!' },
  { id: 4, 
    title: 'Service Reminder',
     message: 'Your scheduled service is coming up soon.' },
];
const subscriptionPlans = [
  //subscriptions.tsx//
  {
    id: 1,
    name: "Basic Plan",
    price: "$5/month",
    description: "Get access to limited services with standard support.",
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921203.png", // Use relevant image links
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$10/month",
    description: "Access to most services and priority support.",
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921225.png",
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$20/month",
    description: "Enjoy unlimited services with premium support.",
    icon: "https://cdn-icons-png.flaticon.com/128/2921/2921210.png",
  },
];
const vendorsPerson = [
  //init//
  { id: 1,
     name: 'Baablu Pandey',
      description: 'Description for Vendor 1',
       image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', availability: 'Available' },
  { id: 2, name: 'Golu Singh',
     description: 'Description for Vendor 2',
      image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', 
    availability: 'Unavailable' },
  { id: 3,
     name: 'Rahul Lokesh',
      description: 'Description for Vendor 3',
       image: 'https://mechbuddy.in/wp-content/uploads/2023/05/blog-s-1-2-1-1.jpg', 
       availability: 'Available' },
];
const eqipment=[
  {
    id:1,
    name:tyres,
    
  }
]

export const data = {
  onboarding,
  services,
  Menu,
  vendors,
  vendorDetails,
  cartItems,
  data1,
  notificationsData,
  subscriptionPlans,
  vendorsPerson,
  
 
};
