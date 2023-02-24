import { React } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
/** App layout
 * Header
 * - Logo(Title)
 * - Nav Items(Right Side)
 * - Cart
 * Body
 * -  Search bar
 * - RestrauntList
 *    - RestaurantCard(many cards)
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 * - links
 * - Copyright
 */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Config Driven UI

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "588191",
      name: "Pizza Hut",
      uuid: "e95426f1-269f-4be7-80bb-8aecd1a7735d",
      city: "3",
      area: "Alwal",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "ehempgeprka2hnmmmkth",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "pizza-hut-alwal-alwal",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Ground Floor, H.No. 5-72/11, Plot No. 11 Part Survey No. 542, Alwal, Hyderabad-500010",
      locality: "Old Alwal Road",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6000136~p=1~eid=00000186-8498-f3c1-3107-c6e300c60105",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "588191",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.8",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "4650",
      name: "Bawarchi",
      uuid: "4e784916-87ff-4951-9c21-2f0c1df1fb31",
      city: "3",
      area: "New Nallakunta",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "smfhai0o8rnjuzp3ngxu",
      cuisines: [
        "Biryani",
        "Tandoor",
        "Chinese",
        "Indian",
        "Desserts",
        "Kebabs",
        "Mughlai",
      ],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 12.899999618530273,
      slugs: {
        restaurant: "bawarchi-nallakunta-vidyanagar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
      locality: "RTC X roads",
      parentId: 100,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 11500,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 11500,
        message: "",
        title: "Delivery Charge",
        amount: "11500",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "12.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "4650",
        deliveryTime: 42,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 12.899999618530273,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "21947",
      name: "My Friends Circle Restaurant",
      uuid: "6b006638-69b5-41a5-a59e-a750dc55651e",
      city: "3",
      area: "Suchitra Circle",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "l3aclqvjxrk0trt1r5ph",
      cuisines: ["Biryani", "Chinese", "Tandoor", "Haleem"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "my-friends-circle-restaurant-medchal-road-sainikpuri-test",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot No. 8, Near Laxmi Plaza, Near Suchitra Circle, Medchal Road, Ramraju Nagar, Ramraj Nagar, Ramraju Nagar, Jeedimetla, Secunderabad",
      locality: "Suchitra Circle",
      parentId: 19277,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "21947",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "413812",
      name: "La Pino'z Pizza",
      uuid: "d76e5f32-6799-407b-903d-0380f09d61de",
      city: "3",
      area: "Suchitra Circle",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "ei4u72anrbkb3diqhxx4",
      cuisines: ["Pizzas", "Italian", "Beverages", "Snacks"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "la-pino'z-pizza-suchitra-circle-suchitra-circle",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "H.No.8-82/14, Opp. Sai Geetha Ashram, Devar Yamjal, Shamirpet Mandal, Medchal, Medchal",
      locality: "Devar Yamjal",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5998198~p=4~eid=00000186-8498-f3c1-3107-c6e400c60427",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "413812",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "3916",
      name: "Grill 9",
      uuid: "0fd67ee0-36ed-4287-8fd1-44ddcfb218ab",
      city: "3",
      area: "Karkhana",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bqtln78ehprap3zjqyij",
      cuisines: [
        "Biryani",
        "Chinese",
        "North Indian",
        "Kebabs",
        "Arabian",
        "Lebanese",
      ],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "grill-9-kharkhana-trimulgherry",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Opposite Pulla Reddy Sweet House, Vikrampuri Road, Karkhana, Secunderabad",
      locality: "Vikrampuri Colony",
      parentId: 18991,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "3916",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
];

// Optional Chaining = ?
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

// props - properties
// no key < index key < unique key (best practice)
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
