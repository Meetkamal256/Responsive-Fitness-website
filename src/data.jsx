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
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <GiStrong />,
    title: "Strength Training",
    info: "Build strength, tone muscles, and sculpt your body with effective Strength Training exercises.",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <GrYoga />,
    title: "Yoga & Meditation",
    info: "Find balance, flexibility, and inner peace with transformative Yoga & Meditation sessions.",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "HIIT",
    info: "Maximize calorie burn and boost metabolism with efficient High Intensity Interval Training (HIIT) workouts.",
    path: "/programs/444",
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

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: import("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: import("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: import("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: import("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: import("./images/avatar5.jpg"),
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This is the perfect package for beginners who know what their doing",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This package is perfect for busy people who need home service",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

const Trainer1 = import("./images/trainer1.jpg");
const Trainer2 = import("./images/trainer2.jpg");
const Trainer3 = import("./images/trainer3.jpg");
const Trainer4 = import("./images/trainer4.jpg");
const Trainer5 = import("./images/trainer5.jpg");
const Trainer6 = import("./images/trainer6.jpg");

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
