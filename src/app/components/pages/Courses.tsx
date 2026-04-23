import { Link } from "react-router";
import { BookOpen, Microscope, Briefcase, Code, Trophy, GraduationCap, ClipboardCheck } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      category: "School Coaching",
      classes: "Classes VIII, IX, X",
      boards: "SSC and CBSE Boards",
      description: "Comprehensive coaching for school students covering all subjects with focus on board exam preparation and strong conceptual understanding.",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Languages"],
      color: "bg-purple-50 border-blue-200"
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      category: "Science Coaching",
      classes: "Classes XI and XII Science",
      boards: "JEE Mains, CET, NEET",
      description: "Specialized coaching for science stream students preparing for competitive exams alongside board preparation.",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      category: "Diploma Coaching",
      classes: "Engineering Diploma",
      boards: "All Branches",
      description: "Expert coaching for diploma engineering students covering all branches and subjects with practical application focus.",
      subjects: ["Mechanical", "Electrical", "Electronics", "Civil", "Computer"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Code className="w-12 h-12" />,
      category: "Engineering Coaching",
      classes: "Degree Engineering Students",
      boards: "All Important Subjects",
      description: "Comprehensive support for engineering degree students across all semesters and branches.",
      subjects: ["Core Engineering Subjects", "Mathematics", "Applied Sciences", "Project Guidance"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      category: "Competitive Exam Coaching",
      classes: "Olympiad & Homi Bhabha",
      boards: "Competition Level",
      description: "Specialized training for students preparing for Olympiads and Homi Bhabha examinations.",
      subjects: ["Advanced Mathematics", "Advanced Science", "Logical Reasoning", "Problem Solving"],
      color: "bg-red-50 border-red-200"
    }
  ];

  const features = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Expert Faculty",
      description: "Learn from experienced teachers"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Regular Tests",
      description: "Periodic assessments to track progress"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Study Material",
      description: "Comprehensive learning resources"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6">Our Courses</h1>
            <p className="text-xl text-purple-100">
              Comprehensive coaching programs for every academic level
            </p>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={index} className={`${course.color} border-2 rounded-xl p-8 transition-shadow hover:shadow-lg`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-purple-600">
                        {course.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl text-gray-900 mb-2">{course.category}</h2>
                        <div className="space-y-1 mb-3">
                          <p className="text-gray-700">
                            <span className="font-medium">Classes:</span> {course.classes}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-medium">Coverage:</span> {course.boards}
                          </p>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{course.description}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-900 mb-3">Subjects Covered:</h3>
                    <ul className="space-y-2 mb-6">
                      {course.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="block bg-yellow-500 text-gray-900 text-center px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Not Sure Which Course to Choose?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our counselors are here to help you select the right course based on your academic goals and requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Get Free Counseling
          </Link>
        </div>
      </section>
    </div>
  );
}
