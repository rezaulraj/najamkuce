import React from "react";
import {
  FaFish,
  FaWineGlassAlt,
  FaLeaf,
  FaCalendarAlt,
  FaUtensils,
} from "react-icons/fa";
import { GiMeal, GiPieSlice, GiWineBottle } from "react-icons/gi";
import { MdOutlineDinnerDining, MdOutlineLocalDining } from "react-icons/md";

const FoodDetails = () => {
  const foodBlog = {
    id: 1,
    title: "Dalmatian Cuisine: A Culinary Voyage Through Coastal Croatia",
    summary:
      "Explore the heart of Croatia's Dalmatian Coast through its unique seafood dishes, olive oils, wines, and centuries-old cooking traditions. This is not just food — it's a way of life.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80",
      alt: "Dalmatian seafood platter with wine",
    },
    tags: [
      "Dalmatian Cuisine",
      "Croatian Food",
      "Travel Croatia",
      "Seafood",
      "Mediterranean",
      "Food Tourism",
    ],
    content: [
      {
        sectionTitle: "Fresh from the Adriatic Sea",
        text: "Dalmatian cuisine thrives on the abundance of the Adriatic. Daily catches of sardines, sea bass, bream, and squid are served simply — grilled over wood fire with a drizzle of olive oil and lemon. Fish markets, especially in Split and Zadar, come alive in the mornings and show the strong relationship Dalmatians have with the sea.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1661870613398-4123ecad7f30?q=80&w=474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Fresh fish in Croatian market",
        },
        icon: <FaFish className="text-3xl text-blue-500" />,
      },
      {
        sectionTitle: "Gregada & Brodetto: Hearty Fisherman's Stews",
        text: "Traditional stews like gregada (with potatoes, garlic, and white wine) or brodetto (a tomato-based fish stew) are staples in coastal homes. Cooked slowly in clay pots, these meals are often eaten family-style. Each town along the coast has its own variation, and you'll find locals passionately debating whose recipe is best.",
        image: {
          url: "https://images.unsplash.com/photo-1612426357506-8b66a851fbe6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Fish stew served in a rustic bowl",
        },
        icon: <GiMeal className="text-3xl text-orange-500" />,
      },
      {
        sectionTitle: "Olive Oil: Liquid Gold of Dalmatia",
        text: "Olive oil isn't just an ingredient in Dalmatia — it's heritage. Generations of families press oil from centuries-old groves. The oils are peppery, golden, and slightly bitter — perfect for drizzling over bread or salads. Many family farms around Šibenik and Hvar offer tastings where you'll learn how to recognize premium extra virgin oils.",
        image: {
          url: "https://plus.unsplash.com/premium_photo-1667818824583-3be6f268bb13?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Olive oil in glass bottles with olives",
        },
        icon: <FaLeaf className="text-3xl text-green-500" />,
      },
      {
        sectionTitle: "Soparnik: The Ancient Pie",
        text: "Soparnik is a flat, savory pie filled with Swiss chard, garlic, and parsley, baked on a stone under hot embers. Originating from the Poljica region, it is recognized as Croatia's intangible cultural heritage. Though simple, it captures the essence of Dalmatian countryside — humble, nutritious, and deeply traditional.",
        image: {
          url: "https://images.unsplash.com/photo-1594981449006-3bb015dd305a?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Soparnik traditional Croatian pie",
        },
        icon: <GiPieSlice className="text-3xl text-amber-500" />,
      },
      {
        sectionTitle: "Wine Culture & Island Vintages",
        text: "Dalmatia's sun-drenched vineyards produce unique grapes like Plavac Mali and Pošip. Whether it's red wine from Pelješac or white from Korčula, each glass tells a story of soil and sea. Wine cellars and konobas (taverns) welcome travelers with tastings, often accompanied by cheese, prosciutto, and stories from the winemakers.",
        image: {
          url: "https://images.unsplash.com/photo-1598960508704-fcaebc125a0f?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian wine with cheese and sea view",
        },
        icon: <GiWineBottle className="text-3xl text-purple-500" />,
      },
      {
        sectionTitle: "Sweet Endings: Fritule and Rožata",
        text: "For dessert, enjoy fritule — tiny doughnuts scented with brandy, lemon zest, and sometimes raisins. Or try rožata, a creamy custard similar to crème caramel, flavored with homemade rose liqueur. These sweets are often served during holidays but are a delicious treat year-round in coastal patisseries.",
        image: {
          url: "https://images.unsplash.com/photo-1713871244414-b63688a81434?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Croatian fritule doughnuts",
        },
        icon: <MdOutlineDinnerDining className="text-3xl text-pink-500" />,
      },
      {
        sectionTitle: "Seasonal Tips for Food Travelers",
        text: "To experience Dalmatian cuisine at its best, plan your visit between May and October. Summer brings food festivals, open-air cooking, and lively markets. Autumn is perfect for olive harvests and wine tastings. Local food tours in Split, Trogir, and Hvar operate daily during the high season.",
        image: {
          url: "https://images.unsplash.com/photo-1723993263936-31bd7320d896?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Outdoor Croatian food festival",
        },
        icon: <FaCalendarAlt className="text-3xl text-red-500" />,
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={foodBlog.heroImage.url}
          alt={foodBlog.heroImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-gray-900/40 flex items-end pb-12 md:pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {foodBlog.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {foodBlog.summary}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {foodBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {foodBlog.content.map((section, index) => (
            <section
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white rounded-full shadow-lg">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-3">
                    {section.sectionTitle}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                  <img
                    src={section.image.url}
                    alt={section.image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Food Gallery */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Taste of Dalmatia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {foodBlog.content.slice(0, 4).map((section, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={section.image.url}
                  alt={section.image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium text-center px-2">
                    {section.sectionTitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
