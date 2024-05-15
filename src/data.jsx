import { SiOpenaigym } from "react-icons/si";
import { FaRunning } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { GiStrong } from "react-icons/gi";

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Gallery",
    path: "/gallery",
  },
  {
    id: 4,
    name: "Plans",
    path: "/plans",
  },
  {
    id: 5,
    name: "Trainers",
    path: "/trainers",
  },
  {
    id: 6,
    name: "Contact",
    path: "/contact",
  },
];
export const programs = [
  {
    id: 1,
    icon: <FaRunning />,
    title: "Cardio Blast",
    info: "Boost cardiovascular health, burn calories, and achieve fitness goals with dynamic Cardio Blast workouts.",
    path: "#",
  },
  {
    id: 2,
    icon: <GiStrong />,
    title: "Strength Training",
    info: "Build strength, tone muscles, and sculpt your body with effective Strength Training exercises.",
    path: "#",
  },
  {
    id: 3,
    icon: <GrYoga />,
    title: "Yoga & Meditation",
    info: "Find balance, flexibility, and inner peace with transformative Yoga & Meditation sessions.",
    path: "#",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "HIIT",
    info: "Maximize calorie burn and boost metabolism with efficient High Intensity Interval Training (HIIT) workouts.",
    path: "#",
  },
];
export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Commitment to Excellence",
    desc: "We provide top-quality experiences in training and facilities.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Community & Support",
    desc: "We foster a supportive community that motivates and inspires.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Innovation & Progress",
    desc: "We stay ahead with cutting-edge equipment and methods.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Integrity & Trust",
    desc: "We operate with honesty and transparency, earning trust daily.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "It's recommended to exercise at least 3-4 times per week for general health. However, the frequency may vary depending on your fitness goals and personal schedule.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "The best time to work out is whenever you can fit it into your schedule and when you feel most energized. Some people prefer mornings for a boost to start the day, while others prefer evenings to unwind and de-stress.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "The duration of your workouts depends on factors such as your fitness level, goals, and time availability. Aim for at least 30 minutes of moderate-intensity exercise per session, but feel free to adjust based on your needs.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Yes, warming up is essential to prepare your body for exercise and reduce the risk of injury. Spend 5-10 minutes performing dynamic stretches and light aerobic exercises to increase blood flow and loosen up your muscles.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "Incorporating both strength training and cardio into your fitness routine offers numerous benefits. Strength training helps build muscle and improve strength, while cardio enhances cardiovascular health and aids in calorie burning. It's ideal to strike a balance between the two for overall fitness.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Yes, lifting weights is an effective form of strength training that helps build muscle mass, increase strength, and improve overall fitness. Whether you're a beginner or advanced lifter, incorporating weightlifting into your routine can lead to significant benefits.",
  },
];

import avatar1 from "./images/avatar1.jpg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";
import avatar5 from "./images/avatar5.jpg";

export const testimonials = [
  {
    id: 1,
    name: "Sarah Tancredi",
    quote:
      "I've never felt more motivated to workout! The trainers here are amazing and the community is so supportive.",
    job: "Fitness Enthusiast",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Alice Smith",
    quote:
      "FitHub has truly changed my life. I've gained so much confidence and strength since joining.",
    job: "Yoga Instructor",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    quote:
      "I've been to many gyms before, but none compare to FitHub. The atmosphere here is unparalleled.",
    job: "Personal Trainer",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Emily Brown",
    quote:
      "As a busy mom, finding time for exercise was tough. FitHub's flexible classes and childcare options made it possible for me to prioritize my health.",
    job: "Stay-at-home Parent",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "David Clark",
    quote:
      "I've been a member of FitHub for years now, and I can confidently say it's the best investment I've made for my health.",
    job: "Business Executive",
    avatar: avatar5,
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Membership",
    desc: "Ideal for beginners who seek consistent guidance",
    price: 29.99,
    features: [
      { feature: "Personalized workout plans", available: true },
      { feature: "24/7 access to gym facilities", available: true },
      { feature: "Basic nutrition consultation", available: true },
      { feature: "Monthly progress tracking", available: true },
      { feature: "Access to group fitness classes", available: true },
      { feature: "Additional personal training sessions", available: false },
      { feature: "Specialized equipment usage", available: false },
      { feature: "Nutritional supplement guidance", available: false },
      { feature: "Premium locker facilities", available: false },
      { feature: "Exclusive gym events", available: false },
      { feature: "Discounts on merchandise", available: false },
      { feature: "Access to online fitness resources", available: false },
      { feature: "Priority booking for classes", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Membership",
    desc: "Perfect for beginners with some fitness experience",
    price: 49.99,
    features: [
      { feature: "All features of Silver Membership", available: true },
      { feature: "Advanced fitness assessments", available: true },
      { feature: "Personalized diet plans", available: true },
      { feature: "Weekly check-ins with trainers", available: true },
      { feature: "Priority access to equipment", available: true },
      { feature: "Advanced group fitness classes", available: true },
      { feature: "Bi-weekly personal training sessions", available: true },
      { feature: "Nutritional supplement recommendations", available: true },
      { feature: "Premium locker facilities", available: true },
      { feature: "Exclusive gym events", available: false },
      { feature: "Discounts on merchandise", available: false },
      { feature: "Access to online fitness resources", available: false },
      { feature: "Priority booking for classes", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Membership",
    desc: "Tailored for busy individuals seeking premium services",
    price: 89.99,
    features: [
      { feature: "All features of Gold Membership", available: true },
      { feature: "Priority booking for personal training", available: true },
      { feature: "Access to exclusive gym amenities", available: true },
      { feature: "Monthly wellness consultations", available: true },
      { feature: "Access to VIP events and workshops", available: true },
      { feature: "Unlimited personal training sessions", available: true },
      { feature: "Complimentary nutritional supplements", available: true },
      { feature: "Private locker with laundry service", available: true },
      { feature: "Exclusive member-only classes", available: true },
      { feature: "Discounts on merchandise and services", available: true },
      { feature: "Online community access", available: true },
      { feature: "VIP lounge access", available: true },
      { feature: "Flexible membership freeze option", available: true },
    ],
  },
];

import Trainer1 from "./images/trainer1.jpg";
import Trainer2 from "./images/trainer2.jpg";
import Trainer3 from "./images/trainer3.jpg";
import Trainer4 from "./images/trainer4.jpg";
import Trainer5 from "./images/trainer5.jpg";
import Trainer6 from "./images/trainer6.jpg";

export const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: "Daniel vinyo",
    job: "Speed Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: "Wayne Carter",
    job: "Physical Intelligence Trainer",
    socials: [
      "https://instagram.com/",
      "https://twitter.com/",
      "https://facebook.com/",
      "https://linkedin.com/",
    ],
  },
];
