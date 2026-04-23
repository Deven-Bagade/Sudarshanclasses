import { Target, Eye, BookOpen, Users, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide quality education and build strong academic foundations for every student, preparing them for success in their chosen fields."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the most trusted and respected coaching institute, known for excellence in education and student success."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Our Approach",
      description: "Student-focused learning with personalized attention, regular assessments, and comprehensive study materials."
    }
  ];

  const methodology = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Batch Sizes",
      description: "We maintain optimal student-teacher ratios to ensure individual attention"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Regular Assessments",
      description: "Periodic tests and evaluations to track progress and identify areas of improvement"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Improvement",
      description: "Regular feedback sessions and adaptive teaching methods based on student needs"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6">About Sudarshan Classes</h1>
            <p className="text-xl text-purple-100">
              Building Strong Foundations for Academic Success
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Welcome to Sudarshan Classes</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sudarshan Classes is a premier educational institute dedicated to providing comprehensive coaching for students from school level through engineering. Established with a vision to make quality education accessible to all, we have successfully guided thousands of students toward their academic goals.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our institute specializes in coaching for SSC, CBSE, JEE, CET, NEET, Diploma, and Engineering examinations. With experienced faculty members and a proven track record, we ensure that every student receives the guidance and support they need to excel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in nurturing not just academic excellence but also building confidence, critical thinking skills, and a genuine love for learning in our students.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Students smiling in classroom"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Teaching session"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Teaching Methodology</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Sudarshan Classes, we employ a student-focused learning approach that combines traditional teaching excellence with modern educational techniques.
              </p>
              <div className="space-y-4">
                {methodology.map((method, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experienced Faculty */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Experienced Faculty</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of highly qualified and experienced teachers is dedicated to providing the best education to our students. With years of teaching experience and deep subject knowledge, our faculty members employ innovative teaching methods to make learning engaging and effective.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each teacher at Sudarshan Classes is committed to the success of every student, providing mentorship beyond just academics and helping students develop into well-rounded individuals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
