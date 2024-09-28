/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: 
        {
            "location": "Goma, Democratic Republic of the Congo",
            "travelers": "Couple",
            "budget": "Luxury",
            "duration": 3,
            "totalNights": 2,
            "hotels": [
              {
                "name": "Lake Kivu Serena Hotel",
                "address": "Avenue de l'Indépendance, Goma, Democratic Republic of the Congo",
                "price": "From $250 per night",
                "imageUrl": "https://www.serenahotels.com/sites/default/files/styles/hero_image/public/hero_images/lake_kivu_serena_hotel_hero_image.jpg?itok=jN1-uB3P",
                "geoCoordinates": "-1.6669, 29.2259",
                "rating": 4.5,
                "description": "Overlooking Lake Kivu, this luxurious hotel offers stunning views, elegant rooms, a spa, and a variety of dining options."
              },
              {
                "name": "Hotel Ihusi",
                "address": "Avenue de l'Indépendance, Goma, Democratic Republic of the Congo",
                "price": "From $150 per night",
                "imageUrl": "https://www.tripadvisor.com/Tourism-g293815-Goma-Hotels-zfp229485.html",
                "geoCoordinates": "-1.6656, 29.2266",
                "rating": 4,
                "description": "A well-established hotel in Goma, offering comfortable rooms, a restaurant, and a bar."
              },
              {
                "name": "The Virunga Lodge",
                "address": "Inside Virunga National Park, Goma, Democratic Republic of the Congo",
                "price": "From $350 per night",
                "imageUrl": "https://www.virungalodge.org/",
                "geoCoordinates": "-1.3331, 29.4659",
                "rating": 5,
                "description": "Located within Virunga National Park, this secluded lodge offers a unique safari experience with breathtaking views of the volcanoes."
              }
            ],
            "itinerary": [
              {
                "day": 1,
                "title": "Arrival in Goma & Relaxation by Lake Kivu",
                "description": "Upon arrival at Goma International Airport (GOM), you'll be greeted by your private driver and transferred to your luxurious hotel, Lake Kivu Serena Hotel. After settling in, enjoy a leisurely lunch at the hotel's restaurant with stunning lake views. Spend the afternoon relaxing by the pool, taking a dip in the lake, or enjoying a rejuvenating spa treatment. In the evening, savor a delicious dinner at the hotel's fine-dining restaurant and witness the captivating sunset over Lake Kivu.",
                "places": [
                  {
                    "name": "Goma International Airport (GOM)",
                    "details": "The primary airport serving Goma.",
                    "imageUrl": "https://www.skyscanner.net/images/airports/GOM-Goma.jpg",
                    "geoCoordinates": "-1.6470, 29.2181",
                    "ticketPricing": "Varies depending on your origin and airline.",
                    "rating": 3.5,
                    "timeToTravel": "Depends on your flight duration."
                  },
                  {
                    "name": "Lake Kivu Serena Hotel",
                    "details": "Your luxurious accommodation for the next few days.",
                    "imageUrl": "https://www.serenahotels.com/sites/default/files/styles/hero_image/public/hero_images/lake_kivu_serena_hotel_hero_image.jpg?itok=jN1-uB3P",
                    "geoCoordinates": "-1.6669, 29.2259",
                    "ticketPricing": "N/A",
                    "rating": 4.5,
                    "timeToTravel": "Approx. 15 minutes from the airport."
                  },
                  {
                    "name": "Lake Kivu",
                    "details": "The largest lake in East Africa, known for its beauty and diverse wildlife.",
                    "imageUrl": "https://www.lonelyplanet.com/media/images/hero/lake-kivu-rwanda-DR-Congo-20210929-header.jpg",
                    "geoCoordinates": "-1.6669, 29.2259",
                    "ticketPricing": "N/A",
                    "rating": 5,
                    "timeToTravel": "N/A"
                  }
                ],
                "bestTime": "Morning to evening",
                "notes": "This day is dedicated to arriving, settling in, and enjoying the tranquility of Lake Kivu."
              },
              {
                "day": 2,
                "title": "Exploring Goma & Virunga National Park",
                "description": "Start your day with a delicious breakfast at the hotel. After, embark on a guided tour of Goma, visiting historical sites like the UN peacekeeping base, the city's bustling markets, and the vibrant art scene. Later, head to Virunga National Park, a UNESCO World Heritage site, known for its diverse wildlife, including gorillas, chimpanzees, and numerous bird species. Enjoy a scenic drive through the park, stopping at various observation points for stunning views of the Virunga Volcanoes. In the evening, return to the hotel for a relaxing dinner."
                "places": [
                  {
                    "name": "UN peacekeeping base",
                    "details": "A reminder of Goma's turbulent past.",
                    "imageUrl": "https://www.un.org/en/peacekeeping/missions/monusco/images/gallery/20140326_GOM_MONUSCO_140326_GOM_MONUSCO_25.jpg",
                    "geoCoordinates": "-1.6671, 29.2259",
                    "ticketPricing": "N/A",
                    "rating": 3.5,
                    "timeToTravel": "Approx. 30 minutes from the hotel."
                  },
                  {
                    "name": "Goma markets",
                    "details": "A vibrant and colorful experience.",
                    "imageUrl": "https://www.lonelyplanet.com/media/images/hero/goma-democratic-republic-of-congo-20190107-header.jpg",
                    "geoCoordinates": "-1.6669, 29.2259",
                    "ticketPricing": "N/A",
                    "rating": 4,
                    "timeToTravel": "Approx. 15 minutes from the UN peacekeeping base."
                  },
                  {
                    "name": "Virunga National Park",
                    "details": "A UNESCO World Heritage site, home to diverse wildlife.",
                    "imageUrl": "https://www.virungapark.org/media/images/virunga-national-park-overview.jpg",
                    "geoCoordinates": "-1.3331, 29.4659",
                    "ticketPricing": "Around $300 per person for a gorilla trekking permit.",
                    "rating": 5,
                    "timeToTravel": "Approx. 2 hours from Goma."
                  }
                ],
                "bestTime": "Morning to evening",
                "notes": "Consider booking a gorilla trekking tour in advance, as permits are limited."
              },
              {
                "day": 3,
                "title": "Farewell Breakfast & Departure",
                "description": "Start your day with a leisurely breakfast at the hotel, enjoying the beautiful views one last time. After checkout, you'll be transferred back to Goma International Airport (GOM) for your departure. Take a moment to reflect on the amazing experiences you've had in Goma and its surrounding areas."
                "places": [
                  {
                    "name": "Lake Kivu Serena Hotel",
                    "details": "Your luxurious accommodation for the past nights.",
                    "imageUrl": "https://www.serenahotels.com/sites/default/files/styles/hero_image/public/hero_images/lake_kivu_serena_hotel_hero_image.jpg?itok=jN1-uB3P",
                    "geoCoordinates": "-1.6669, 29.2259",
                    "ticketPricing": "N/A",
                    "rating": 4.5,
                    "timeToTravel": "N/A"
                  },
                  {
                    "name": "Goma International Airport (GOM)",
                    "details": "The primary airport serving Goma.",
                    "imageUrl": "https://www.skyscanner.net/images/airports/GOM-Goma.jpg",
                    "geoCoordinates": "-1.6470, 29.2181",
                    "ticketPricing": "Varies depending on your destination and airline.",
                    "rating": 3.5,
                    "timeToTravel": "Approx. 15 minutes from the hotel."
                  }
                ],
                "bestTime": "Morning",
                "notes": "Ensure you have enough time for airport procedures before your flight."
              }
            ],
          });
  
   
