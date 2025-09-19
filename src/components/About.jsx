import React from "react";

const About = () => {
  return (
    <main className="bg-white mt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About WoodCraft Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Your trusted partner in premium plywood and furniture materials
            since 1985. Delivering excellence through quality, sustainability,
            and unwavering commitment to customer satisfaction.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            Company Overview
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              For nearly four decades, WoodCraft Solutions has been at the
              forefront of the plywood and furniture materials industry. What
              started as a small family business has grown into one of the
              region&apos;s most trusted suppliers of premium wood products.
            </p>
            <p>
              Our facilities span over 200,000 sq. ft., with advanced equipment
              and a wide inventory of plywood, veneers, and specialty wood
              materials. We blend traditional craftsmanship with modern
              techniques to deliver products that exceed industry standards.
            </p>
            <p>
              With a team of 150+ professionals, including technicians, quality
              experts, and service specialists, we ensure every piece meets the
              exacting standards our customers expect.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide the furniture and construction industries with the
                highest quality plywood and wood materials while maintaining
                commitment to customer satisfaction, environmental
                responsibility, and continuous innovation.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be recognized as the leading supplier of sustainable, premium
                plywood and furniture materials, setting industry standards for
                quality, innovation, and environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            Why Choose WoodCraft Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Unmatched Quality",
                description:
                  "Every sheet of plywood undergoes rigorous quality testing exceeding industry standards.",
              },
              {
                icon: "📦",
                title: "Extensive Inventory",
                description:
                  "With 500+ wood species and grades, we can fulfill orders of any size promptly.",
              },
              {
                icon: "🚚",
                title: "Reliable Delivery",
                description:
                  "Our fleet ensures materials arrive on time and in perfect condition.",
              },
              {
                icon: "👥",
                title: "Expert Support",
                description:
                  "Our team provides technical guidance and custom solutions tailored to your needs.",
              },
              {
                icon: "💰",
                title: "Competitive Pricing",
                description:
                  "We offer premium materials at fair prices, maximizing value for your investment.",
              },
              {
                icon: "🔧",
                title: "Custom Solutions",
                description:
                  "From cutting to treatments, we provide value-added services for your projects.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the WoodCraft Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of satisfied customers who trust WoodCraft Solutions
            for their premium plywood and furniture material needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
