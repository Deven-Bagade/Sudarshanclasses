import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Gallery() {
  const images = [
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqWsSLeIcHeMaGDf-d7tL2V1wLCC-Y6xmyjKqWk3TTtMqJJKPydK3Ngxu-AzA0GUv5oyz2Sq49giaVMKJnPtKHsjGzJIrY3E85C3vr59f_oTON-JPgaCON13V9NQB2hAvSDrE=w114-h86-k-no",
      title: "Students in Lecture Hall",
      category: "Classroom"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMV-YeSnQEPcEjAQnRW1WFUe2_3bVtsGyFFWvmy=w203-h152-k-no",
      title: "Happy Students",
      category: "Student Life"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqWsSLeIcHeMaGDf-d7tL2V1wLCC-Y6xmyjKqWk3TTtMqJJKPydK3Ngxu-AzA0GUv5oyz2Sq49giaVMKJnPtKHsjGzJIrY3E85C3vr59f_oTON-JPgaCON13V9NQB2hAvSDrE=w114-h86-k-no",
      title: "Classroom Learning",
      category: "Classroom"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEqWsSLeIcHeMaGDf-d7tL2V1wLCC-Y6xmyjKqWk3TTtMqJJKPydK3Ngxu-AzA0GUv5oyz2Sq49giaVMKJnPtKHsjGzJIrY3E85C3vr59f_oTON-JPgaCON13V9NQB2hAvSDrE=w114-h86-k-no",
      title: "Attentive Students",
      category: "Study Session"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMV-YeSnQEPcEjAQnRW1WFUe2_3bVtsGyFFWvmy=w203-h152-k-no",
      title: "Group Study",
      category: "Group Activities"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMV-YeSnQEPcEjAQnRW1WFUe2_3bVtsGyFFWvmy=w203-h152-k-no",
      title: "Teacher Lecturing",
      category: "Teaching Session"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMV-YeSnQEPcEjAQnRW1WFUe2_3bVtsGyFFWvmy=w203-h152-k-no",
      title: "Interactive Session",
      category: "Classroom"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMV-YeSnQEPcEjAQnRW1WFUe2_3bVtsGyFFWvmy=w203-h152-k-no",
      title: "Learning Environment",
      category: "Teaching Session"
    },
    {
      url: "https://lh3.googleusercontent.com/p/AF1QipMV-YeSnQEPcEjAQnRW1WFUe2_3bVtsGyFFWvmy=w203-h152-k-no",
      title: "Student Discussion",
      category: "Group Activities"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-6">Gallery</h1>
            <p className="text-xl text-purple-100">
              A glimpse into our classrooms and learning environment
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg mb-1">{image.title}</h3>
                    <p className="text-yellow-300 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-yellow-600 mb-2">15+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-yellow-600 mb-2">5000+</div>
              <p className="text-gray-600">Students Taught</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-yellow-600 mb-2">50+</div>
              <p className="text-gray-600">Expert Teachers</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl text-yellow-600 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Visit Our Campus</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience our learning environment firsthand. Schedule a visit to see our facilities and meet our faculty members.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
