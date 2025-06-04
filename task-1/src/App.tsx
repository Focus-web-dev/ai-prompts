import PricingCard from "./components/PricingCard"; // Adjust the path if your PricingCard.tsx is in a different directory

/**
 * App React Component
 *
 * This component serves as the main application entry point, rendering
 * a collection of PricingCard components to showcase different pricing plans.
 * It sets up a responsive layout to display cards horizontally on larger screens
 * and stack them vertically on smaller screens, matching the provided design image.
 */
function App() {
  return (
    // Main container for the entire pricing section.
    // - min-h-screen: Ensures the container takes at least the full viewport height.
    // - bg-gray-900: Sets a dark background color for the page.
    // - flex flex-col items-center justify-center: Centers content vertically and horizontally.
    // - py-10: Adds vertical padding.
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center py-10 font-sans">
      {/* Pricing Section Title */}
      {/* text-4xl font-bold text-white: Styles for the heading. */}
      {/* mb-12: Margin below the heading. */}
      <h1 className="text-4xl font-bold text-white mb-12">Pricing</h1>

      {/* Container for the pricing cards. */}
      {/* flex flex-col: Stacks cards vertically by default (mobile-first). */}
      {/* sm:flex-row: On screens >= 640px, arranges cards horizontally. */}
      {/* sm:justify-center: Centers the row of cards horizontally. */}
      {/* sm:items-end: Aligns the cards to their bottom edges, which helps if the featured card is taller. */}
      {/* w-full max-w-6xl: Ensures the container takes full width but caps it at a maximum for larger screens. */}
      {/* px-4 sm:px-0: Adds horizontal padding on small screens to prevent cards from touching edges. */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-end w-full max-w-6xl px-4 sm:px-0">
        {/* Standard Pricing Card */}
        <PricingCard
          plan="Standard"
          price="$100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
          isFeatured={false} // Explicitly not featured
        />

        {/* Pro (Featured) Pricing Card */}
        <PricingCard
          plan="Pro"
          price="$200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured={true} // This card is featured
        />

        {/* Expert Pricing Card */}
        <PricingCard
          plan="Expert"
          price="$500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
          isFeatured={false} // Explicitly not featured
        />
      </div>
    </div>
  );
}

export default App;
