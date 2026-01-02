import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Excellent care and professional staff. The doctors are very experienced and caring. Highly recommend for orthopedic treatments.",
    date: "2 weeks ago",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best hospital in Vanasthalipuram! The emergency care was quick and efficient. Thank you to the entire team.",
    date: "1 month ago",
  },
  {
    name: "Mohammed Aziz",
    rating: 5,
    text: "Very clean and well-maintained facility. The pediatric department is wonderful with kids. Dr. Lakshmi is amazing!",
    date: "3 weeks ago",
  },
  {
    name: "Sunitha Reddy",
    rating: 4,
    text: "Good experience overall. The staff is friendly and the waiting time was minimal. Will definitely come back.",
    date: "2 months ago",
  },
  {
    name: "Venkat Rao",
    rating: 5,
    text: "Had my surgery here and the experience was excellent. Modern equipment and skilled surgeons. Recovery was smooth.",
    date: "1 week ago",
  },
];

const ReviewsWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft mb-4">
            <Star className="h-5 w-5 text-amber-500 fill-current" />
            <span className="font-bold text-foreground">4.1 Rating</span>
            <span className="text-muted-foreground">• 4,114 Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our valued patients. Your trust is our greatest achievement.
          </p>
        </div>

        {/* Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full px-4"
              >
                <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-card">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? "text-amber-500 fill-current"
                              : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Hayagreeva+Multispeciality+Hospital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all reviews on Google
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.001 5.75c1.727 0 2.875.675 3.536 1.25l2.587-2.519C16.537 3.063 14.485 2 12 2 8.24 2 5.027 4.3 3.5 7.5l2.996 2.323C7.205 7.375 9.341 5.75 11.999 5.75z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsWidget;
