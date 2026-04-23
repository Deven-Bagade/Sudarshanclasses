import { Users, Award, ClipboardCheck, Heart, Lightbulb, DollarSign, BookOpen, Target } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Features() {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Experienced Teachers",
      description: "Our faculty comprises highly qualified and experienced teachers with proven track records in their respective fields. They bring years of teaching expertise and deep subject knowledge to help students excel.",
      color: "bg-purple-50 border-blue-200 text-purple-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Individual Attention",
      description: "We maintain optimal batch sizes to ensure every student receives personalized attention. Our teachers identify each student's strengths and weaknesses to provide customized guidance.",
      color: "bg-green-50 border-green-200 text-green-600"
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Regular Tests",
      description: "Periodic assessments and mock tests help students track their progress and prepare effectively for actual examinations. Detailed performance analysis guides improvement strategies.",
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Mentoring Support",
      description: "Beyond academics, we provide comprehensive mentoring to help students develop confidence, time management skills, and a positive attitude toward learning and examinations.",
      color: "bg-red-50 border-red-200 text-red-600"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Strong Academic Foundation",
      description: "We focus on building strong conceptual understanding rather than just rote learning. Our teaching methodology ensures students develop critical thinking and problem-solving skills.",
      color: "bg-orange-50 border-orange-200 text-orange-600"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Reasonable Fee Structure",
      description: "Quality education shouldn't be expensive. We offer competitive and transparent pricing, making excellent coaching accessible to students from all backgrounds.",
      color: "bg-teal-50 border-teal-200 text-teal-600"
    }
  ];

  const additionalBenefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Study Material",
      description: "Well-structured notes and practice materials"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focused Exam Preparation",
      description: "Strategic preparation for all major exams"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parent-Teacher Communication",
      description: "Regular updates on student progress"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "Consistent track record of student success"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6">Why Choose Sudarshan Classes</h1>
            <p className="text-xl text-purple-100">
              Discover what makes us the preferred choice for thousands of students
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for academic success, all in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <div className={`${feature.color.split(' ')[1]} w-20 h-20 rounded-xl flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">A Learning Environment That Inspires</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our classrooms are designed to create an optimal learning environment. With modern facilities and a conducive atmosphere, students can focus on their studies without distractions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that a positive and supportive environment is essential for academic success. Our institute fosters a culture of excellence, collaboration, and continuous improvement.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704286-83476deb3bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Students raising hands in classroom"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Additional Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {benefit.icon}
                </div>
                <h3 className="text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Experience the Difference</h2>
          <p className="text-purple-100 text-lg mb-8">
            Join Sudarshan Classes and discover how our unique approach can help you achieve your academic goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
