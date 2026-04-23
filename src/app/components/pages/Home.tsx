import { Link } from "react-router";
import { Users, Award, Heart, DollarSign, BookOpen, Microscope, Briefcase, Code, Trophy, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Home() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Teachers",
      description: "Learn from highly qualified and experienced faculty members"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Individual Attention",
      description: "Personalized focus on each student's learning needs"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mentoring Support",
      description: "Comprehensive guidance and mentorship for holistic development"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Reasonable Fee Structure",
      description: "Quality education at affordable and transparent pricing"
    }
  ];

  const courses = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "School Coaching",
      description: "Classes VIII, IX, X (SSC & CBSE Boards)",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Microscope className="w-10 h-10" />,
      title: "Science Coaching",
      description: "XI & XII Science (JEE, CET, NEET)",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Diploma Coaching",
      description: "Engineering Diploma (All Branches)",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Engineering Coaching",
      description: "Degree Engineering (All Subjects)",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Olympiad Preparation",
      description: "Olympiad & Homi Bhabha Exam Coaching",
      color: "bg-red-50 text-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "JEE Preparation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "The teaching methodology at Sudarshan Classes helped me crack JEE Mains with an excellent rank. The faculty is very supportive and experienced."
    },
    {
      name: "Rahul Patil",
      course: "SSC Board",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "I scored 95% in my SSC exams thanks to the dedicated teachers and individual attention provided by Sudarshan Classes."
    },
    {
      name: "Sneha Desai",
      course: "NEET Preparation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "The regular tests and personalized guidance helped me improve my scores significantly. Highly recommend for NEET preparation!"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Sudarshan Classes – Excellence in Education
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8">
                Coaching for SSC, CBSE, JEE, CET, NEET, Diploma and Engineering Students
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg text-center hover:bg-yellow-600 transition-colors"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Students studying in classroom"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best learning environment with experienced faculty and modern teaching methods
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching programs tailored for different academic levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className={`${course.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {course.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <Link to="/courses" className="text-purple-600 hover:text-yellow-600 text-sm">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704080-e3556e6794a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Teacher lecturing students"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">About Sudarshan Classes</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sudarshan Classes has been committed to building strong foundations for academic success. We specialize in coaching students from school level to engineering, ensuring comprehensive preparation for all major examinations.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our experienced faculty members use innovative teaching methods and provide individual attention to each student, ensuring they reach their full potential.
              </p>
              <Link
                to="/about"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Read More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Success stories from students who achieved their dreams with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their academic goals with Sudarshan Classes
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
