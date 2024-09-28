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
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: New York USA, for 3 days for Couple with a luxury budget with flight details; price with Booking url, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions & places to visit nearby and suggest itinerary with placeName, place Details, place Image url, Geo Coordinates, ticket Pricing, rating,  time to travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"flight\": {\n    \"airline\": \"Delta Air Lines\",\n    \"flightNumber\": \"DL1234\",\n    \"departureAirport\": \"SFO\",\n    \"arrivalAirport\": \"JFK\",\n    \"departureDate\": \"2024-03-15\",\n    \"arrivalDate\": \"2024-03-15\",\n    \"price\": 500,\n    \"bookingUrl\": \"https://www.delta.com/booking\"\n  },\n  \"hotels\": [\n    {\n      \"hotelName\": \"The Peninsula New York\",\n      \"hotelAddress\": \"700 Fifth Avenue, New York, NY 10019\",\n      \"price\": 1500,\n      \"hotelImageUrl\": \"https://www.thepeninsula.com/new-york/en/images/hotel/overview/hero.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 40.7580,\n        \"longitude\": -73.9855\n      },\n      \"rating\": 4.5,\n      \"description\": \"A luxurious hotel located in Midtown Manhattan with stunning views of Central Park.\",\n      \"placesToVisitNearby\": [\n        \"Central Park\",\n        \"Rockefeller Center\",\n        \"Museum of Modern Art (MoMA)\"\n      ]\n    },\n    {\n      \"hotelName\": \"The St. Regis New York\",\n      \"hotelAddress\": \"2 East 55th Street, New York, NY 10022\",\n      \"price\": 1200,\n      \"hotelImageUrl\": \"https://www.marriott.com/content/dam/marriott/brand/st-regis/new-york/new-york-st-regis-hotel/hero-new-york-st-regis-hotel.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 40.7577,\n        \"longitude\": -73.9758\n      },\n      \"rating\": 4.8,\n      \"description\": \"A historic hotel known for its elegant accommodations and exceptional service.\",\n      \"placesToVisitNearby\": [\n        \"St. Patrick's Cathedral\",\n        \"Fifth Avenue\",\n        \"Radio City Music Hall\"\n      ]\n    },\n    {\n      \"hotelName\": \"The Ritz-Carlton New York, Central Park\",\n      \"hotelAddress\": \"50 Central Park South, New York, NY 10019\",\n      \"price\": 1000,\n      \"hotelImageUrl\": \"https://www.ritzcarlton.com/en/hotels/new-york/central-park/images/hotel-overview/featured-image-hotel-overview-desktop.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 40.7648,\n        \"longitude\": -73.9772\n      },\n      \"rating\": 4.6,\n      \"description\": \"A luxurious hotel with stunning views of Central Park and the city skyline.\",\n      \"placesToVisitNearby\": [\n        \"Central Park\",\n        \"Carnegie Hall\",\n        \"Columbus Circle\"\n      ]\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Central Park\",\n          \"placeDetails\": \"A sprawling green oasis in the heart of Manhattan, offering a variety of activities like walking, biking, boating, and picnicking.\",\n          \"placeImageUrl\": \"https://www.nycgo.com/images/uploads/new-york-city-parks/central-park-overview-800x450-1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7829,\n            \"longitude\": -73.9654\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n          \"timeToTravel\": 3\n        },\n        {\n          \"placeName\": \"The Metropolitan Museum of Art\",\n          \"placeDetails\": \"One of the world's largest and most comprehensive art museums, housing a vast collection from ancient Egypt to modern art.\",\n          \"placeImageUrl\": \"https://www.metmuseum.org/sites/default/files/styles/slideshow_small/public/images/slideshow/The-Metropolitan-Museum-of-Art-Fa%C3%A7ade_web.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7794,\n            \"longitude\": -73.9632\n          },\n          \"ticketPricing\": \"Suggested Donation: $25\",\n          \"rating\": 4.9,\n          \"timeToTravel\": 3\n        },\n        {\n          \"placeName\": \"Top of the Rock Observation Deck\",\n          \"placeDetails\": \"Offers stunning panoramic views of the city, including the Empire State Building and Central Park.\",\n          \"placeImageUrl\": \"https://www.rockefellercenter.com/sites/default/files/top-of-the-rock-observation-deck-new-york-city-skyline-1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7580,\n            \"longitude\": -73.9786\n          },\n          \"ticketPricing\": \"$39\",\n          \"rating\": 4.7,\n          \"timeToTravel\": 2\n        }\n      ],\n      \"bestTime\": \"Morning\"\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"Statue of Liberty & Ellis Island\",\n          \"placeDetails\": \"A must-see icon of New York City, offering views of the city skyline and a glimpse into the history of immigration.\",\n          \"placeImageUrl\": \"https://www.nps.gov/stli/planyourvisit/images/stli-ferry-statue-liberty-4.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.6892,\n            \"longitude\": -74.0445\n          },\n          \"ticketPricing\": \"$18.50\",\n          \"rating\": 4.6,\n          \"timeToTravel\": 4\n        },\n        {\n          \"placeName\": \"The High Line\",\n          \"placeDetails\": \"A unique elevated park built on a former railway line, offering stunning views of the city and art installations.\",\n          \"placeImageUrl\": \"https://www.thehighline.org/sites/default/files/styles/hero_page/public/images/hero-11-469x300.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7487,\n            \"longitude\": -74.0037\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.7,\n          \"timeToTravel\": 2\n        },\n        {\n          \"placeName\": \"Chelsea Market\",\n          \"placeDetails\": \"A bustling food hall and marketplace, offering a variety of culinary delights and unique shopping experiences.\",\n          \"placeImageUrl\": \"https://www.chelseamarket.com/sites/default/files/styles/slideshow_large/public/slideshow/food.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7416,\n            \"longitude\": -74.0036\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeToTravel\": 2\n        }\n      ],\n      \"bestTime\": \"Afternoon\"\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Times Square\",\n          \"placeDetails\": \"The bright lights and bustling atmosphere of Times Square are a must-see for any visitor to New York City.\",\n          \"placeImageUrl\": \"https://www.nycgo.com/images/uploads/new-york-city-attractions/times-square-new-york-city-1-774x400-2.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7580,\n            \"longitude\": -73.9855\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.4,\n          \"timeToTravel\": 2\n        },\n        {\n          \"placeName\": \"Empire State Building\",\n          \"placeDetails\": \"An iconic skyscraper offering breathtaking views of the city from its observation deck.\",\n          \"placeImageUrl\": \"https://www.esbnyc.com/sites/default/files/2019-03/Empire-State-Building-Exterior_1.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7484,\n            \"longitude\": -73.9857\n          },\n          \"ticketPricing\": \"$39\",\n          \"rating\": 4.7,\n          \"timeToTravel\": 3\n        },\n        {\n          \"placeName\": \"Brooklyn Bridge\",\n          \"placeDetails\": \"A historic suspension bridge connecting Manhattan and Brooklyn, offering stunning views of the city skyline.\",\n          \"placeImageUrl\": \"https://www.nycgo.com/images/uploads/new-york-city-attractions/brooklyn-bridge-new-york-city-4-800x400-2.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 40.7028,\n            \"longitude\": -74.0060\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.8,\n          \"timeToTravel\": 3\n        }\n      ],\n      \"bestTime\": \"Evening\"\n    }\n  ]\n}\n```\n\n**Please note:**\n\n* The flight details are just examples. You'll need to search for flights based on your specific dates and origin.\n* Hotel prices are estimates and may vary depending on the season and availability.\n* The itinerary is a suggestion and can be customized based on your interests and preferences.\n* You may need to purchase tickets for some attractions in advance, especially during peak season.\n\nEnjoy your trip to New York City!"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();