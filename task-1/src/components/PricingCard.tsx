import React from "react";

/**
 * @interface PricingCardProps
 * @property {string} plan - The name of the pricing plan (e.g., "Standard", "Pro", "Expert").
 * @property {string} price - The price of the plan (e.g., "$100", "$200").
 * @property {string[]} features - An array of strings, each representing a feature included in the plan.
 * @property {boolean} [isFeatured=false] - Optional. If true, the card will have a featured styling (dark background).
 */
interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

/**
 * PricingCard React Component
 *
 * A reusable component to display a pricing plan card with its name, price,
 * features, and a subscribe button. It includes responsive design for stacking
 * on small screens, hover elevation on desktop, and a full keyboard focus ring.
 *
 * @param {PricingCardProps} props - The properties for the pricing card.
 * @returns {JSX.Element} The rendered pricing card component.
 */
const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false, // Default to false if not provided
}) => {
  // Base styling for the card container.
  // - flex-col: Stacks content vertically.
  // - items-center: Centers content horizontally within the card.
  // - justify-between: Distributes space between items, pushing the button to the bottom.
  // - shadow-lg: A default shadow.
  // - transition-all duration-300 ease-in-out: Smooth transitions for hover effects.
  // - w-full: Takes full width on small screens, ensuring vertical stacking.
  // - sm:w-72: On screens >= 640px (sm breakpoint), sets a fixed width for the cards.
  //   This helps in creating the no-gap layout.
  // - sm:hover:scale-105 sm:hover:shadow-2xl: Desktop-only hover elevation effect.
  // - focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-75 focus-within:ring-offset-2:
  //   Provides a clear focus ring around the entire card when any element inside it
  //   (or the card itself via tabIndex) is focused.
  const cardBaseClasses = `
    flex flex-col items-center justify-between
    shadow-lg
    transition-all duration-300 ease-in-out
    w-full
    sm:w-72
    sm:hover:scale-105 sm:hover:shadow-2xl
    focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-75 focus-within:ring-offset-2
  `;

  // Conditional background and text colors based on the 'isFeatured' prop.
  // Also includes conditional vertical padding to adjust height.
  const cardColorsAndPadding = isFeatured
    ? "bg-gray-800 text-white py-10" // Featured card: dark background, white text, more vertical padding
    : "bg-white text-gray-800 py-8"; // Normal card: white background, dark text, standard vertical padding

  // Conditional button colors and styles based on the 'isFeatured' prop.
  // Buttons are now plain text without any fill or color change on hover/focus.
  const buttonColors = isFeatured
    ? "text-white" // Button on featured card: white text
    : "text-gray-800"; // Button on normal card: dark text

  // Conditional border color for feature list items
  const featureBorderColor = isFeatured ? "border-gray-600" : "border-gray-300";

  // Determine horizontal padding for content based on whether the card is featured
  const contentHorizontalPadding = isFeatured ? "px-6" : "px-2";

  // Determine horizontal padding for the ul element based on whether the card is featured
  const ulHorizontalPadding = isFeatured ? "" : "px-2";

  return (
    <div
      className={`${cardBaseClasses} ${cardColorsAndPadding}`}
      tabIndex={0} // Makes the entire div focusable by keyboard navigation.
    >
      {/* Plan Name */}
      <h2 className={`text-2xl font-bold mb-4 ${contentHorizontalPadding}`}>
        {plan}
      </h2>

      {/* Price */}
      <p className={`text-5xl font-extrabold mb-6 ${contentHorizontalPadding}`}>
        {price}
      </p>

      {/* Features List */}
      {/* w-full: Ensures the list takes full available width within the card. */}
      {/* text-center: Centers the text of each feature. */}
      {/* ulHorizontalPadding: Applies px-2 if not featured */}
      <ul className={`w-full text-center mb-8 ${ulHorizontalPadding}`}>
        {features.map((feature, index) => (
          <li
            key={index}
            className={`
              text-lg py-3 ${contentHorizontalPadding}
              ${
                index < features.length - 1
                  ? `border-b ${featureBorderColor}`
                  : ""
              }
            `}
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      {/* w-full: Button takes full width of the card. */}
      {/* py-3 px-6: Vertical and horizontal padding. */}
      {/* rounded-lg font-semibold uppercase: Styling for the button text. */}
      {/* cursor-pointer: Ensures the mouse cursor changes to a pointer on hover, indicating interactivity. */}
      <button
        className={`
          w-full py-3 px-6 rounded-lg font-semibold uppercase
          cursor-pointer
          ${buttonColors}
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;
