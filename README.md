
# SaveIT.io

[🔍 Search Assistant] | [🛒 Compare Prices] | [💰 Start Comparing Now]

## Features

- [🔍 Search for Products]
- [🛒 Compare Prices Across Platforms]
- [📊 View Price History]
- [🛍️ Make Smart Shopping Decisions]

### 🛒 Cross-Platform Comparison Screen

![compare page](/compare.png)

### 👩‍🍳 AI Recipe & Shopping Assistant

Simply tell SaveIT what dish you want to make, and our AI will handle the rest! The seamless flow includes:
1. **Recipe Generation:** Provides a step-by-step recipe for your desired dish.
2. **Smart Ingredient Extraction:** Automatically creates a precise list of ingredients you'll need.
3. **Cross-Platform Search:** Checks multiple quick-commerce platforms for the availability and prices of these ingredients.
4. **Best Platform Suggestion:** Recommends the platform with the most optimal total cart value.
5. **One-Click Add to Cart:** Instantly add all required items to your cart on the chosen platform.

![shopping assistant](/shoping_assistant.png)
![dish recipe](/dish_recipe.png)
![ingredients_list](/ingredients_list.png)

## Description

In India’s fast-growing quick commerce space, platforms like Swiggy Instamart, Zepto, and Blinkit offer lightning-fast delivery of groceries and daily essentials. However, for users, this often becomes a confusing experience. The same item is priced differently across platforms, delivery and platform fees vary, and there’s no single view to help make a smart buying decision.

Additionally, a hidden pattern is emerging: users are initially offered a low minimum order value (e.g., ₹99), which gradually increases to ₹199, ₹299, or even ₹499 as they continue using the app. This manipulation forces users to buy more than they need, leading to unnecessary spending just to meet the order threshold.

**SaveIT.io is an agentic AI-powered assistant that solves this problem.** It takes your shopping list, compares item availability and pricing across platforms, and instantly suggests the best place to buy—based on total cost (items + delivery + platform fees - discounts) or delivery speed. It also alerts users when they're being nudged into spending more due to increased minimum cart values and helps them avoid buying extra, unwanted items.

The AI continuously learns from user preferences—whether they prioritize cost or delivery time—and customizes future suggestions. This solution can also scale to other domains like electronics, clothing, and personal care.

**Benefits:**
- Saves time and effort in platform comparison
- Reduces unnecessary expenses
- Increases pricing transparency
- Promotes fair competition in quick commerce

SaveIT.io empowers users to buy smarter, not more—making quick commerce truly convenient and cost-effective.

## Core Features (as implemented/planned):

- **Multi-Platform Product Search**: Uses an external API to search for products across multiple platforms (Swiggy, Zepto, Blinkit, Jiomart, DMart, BigBasket, etc.).
- **Comprehensive Cost Comparison**: Compares prices, and estimates platform fees, delivery charges, and minimum order values using aggregated data. AI assists in reasoning about product equivalency.
- **Cart Comparison**: Allows users to add products to a virtual cart and compare the total estimated cost across different platforms, including fees and charges.
- **Smart Savings Suggestions**: Provides personalized savings suggestions based on user preferences and current deals using Genkit AI to tailor recommendations, considering factors like MOV( minimum order value ) manipulation and fee optimization.
- **Interactive Display of Results**: Displays search results, cost savings, and suggests alternatives for better price options.

## Technologies Used

- **Next.js:** The React framework for building the application (App Router).
- **TypeScript:** For static typing and improved code maintainability.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **ShadCN/UI:** For pre-built UI components.
- **Lucide Icons:** For iconography.
- **Genkit (with Google AI):** A toolkit for building and deploying AI-powered features (product equivalency, savings suggestions).
- **Firebase Authentication:** For user management and authentication.
- **Firebase Firestore:** (Planned) A NoSQL database for storing application data (e.g., user profiles, shopping carts).
- **Firebase Functions:** (Planned) For backend logic and potentially hosting AI flows.

## Expected Business Impact

**Quantitative Impact:**
- **Automate Up to 75% of Queries:** Using AI, SaveIT.io can autonomously handle a significant portion of user queries about pricing, fees, and delivery.
- **Reduce Waiting Time for Responses by 50%:** Real-time, AI-driven comparisons and proactive suggestions lead to quicker decision-making.
- **Increase Customer Savings by 15-20%:** Helps users save by suggesting cost-effective options, alerting to hidden fees, and optimizing cart selections.
- **Improve Platform Competitiveness:** Incentivizes platforms to offer better pricing and delivery, potentially reducing platform fees by 5-10%.

**Qualitative Impact:**
- **Enhanced Customer Experience:** Automation and proactive recommendations improve user satisfaction, engagement, and loyalty.
- **Improved Resource Allocation for Platforms:** Platforms can optimize strategies based on SaveIT.io's insights.
- **Increased Customer Trust and Transparency:** Builds trust by ensuring pricing transparency.
- **Better Decision-Making for Users:** Empowers users with smart, autonomous suggestions, saving time and money.

SaveIT.io aims to enhance the quick commerce ecosystem for both users and platforms.

## Try It Yourself

Ready to start saving money on your everyday essentials? [Click here to go to our comparison tool](/compare) and see how much you could save today!
