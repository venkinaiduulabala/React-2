import React from "react";
import ReactDOM from "react-dom/client"


const Header = () => {
   return (
      <div className="header">
        <div>
         <img alt="logo" className="logo" src="https://www.designmantic.com/logo-images/171406.png?company=Company%20Name&keyword=dinner%20dances&slogan=&verify=1" />
            </div>
           <div className="nav-bar">
         <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
            
         </ul>
         </div>
        </div>
   
   )
}


const Restocard = (props) => {
   const {resdata}=props
    const {name,cuisines,avgRating} =resdata.card.card.info
    const {deliveryTime} =resdata.card.card.info.sla
   return (
      <div className="resto-card">
         <img className="food-Img" alt="food-Img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/8/13/538763bd-8b40-4ed6-8e4f-dd337c3a8017_24f3fdba-909c-414c-beea-ac6c56ad8efd.jpg"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime} Min</h4>
            <h4>{avgRating} Rating</h4>
         </div>
   )
}

const resList=[ {
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "67791",
"name": "Rambharose - Bhattad Ki Idli",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/13/538763bd-8b40-4ed6-8e4f-dd337c3a8017_24f3fdba-909c-414c-beea-ac6c56ad8efd.jpg",
"locality": "Narayanguda Rd",
"areaName": "Kachiguda",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian"
],
"avgRating": 4.4,
"veg": true,
"parentId": "166509",
"avgRatingString": "4.4",
"totalRatingsString": "51K+",
"promoted": true,
"adTrackingId": "cid=59a86269-4239-4970-ae9b-0e47ec72cff8~p=0~adgrpid=59a86269-4239-4970-ae9b-0e47ec72cff8#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=67791~plpr=COLLECTION~eid=8884b89e-86d9-4249-9ab8-5a2dfce6522c~srvts=1747969045886~collid=80424",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 5.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹29",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "59a86269-4239-4970-ae9b-0e47ec72cff8"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=67791&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "884520",
"name": "Udipi's Upahar",
"cloudinaryImageId": "da84e2493555494d050ab78c95a193f1",
"locality": "Hussain Sagar",
"areaName": "Banjara Hills",
"costForTwo": "₹250 for two",
"cuisines": [
"Beverages",
"South Indian",
"Fast Food",
"Snacks",
"Ice Cream",
"Desserts"
],
"avgRating": 4.2,
"veg": true,
"parentId": "1061",
"avgRatingString": "4.2",
"totalRatingsString": "41",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 2.3,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "2.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 22:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹75 OFF",
"subHeader": "ABOVE ₹249",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=884520&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "184256",
"name": "Panchakattu Dosa",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/10/8c3702e9-6db8-43ca-9dc8-254ab8532d52_f9d28c99-c19c-464a-a43a-f8e60f707566.jpeg",
"locality": "Jubilee Hills",
"areaName": "Banjara Hills",
"costForTwo": "₹200 for two",
"cuisines": [
"South Indian"
],
"avgRating": 4.6,
"veg": true,
"parentId": "154201",
"avgRatingString": "4.6",
"totalRatingsString": "21K+",
"promoted": true,
"adTrackingId": "cid=ac3647d3-b699-4e46-9775-0b75aa2443d6~p=1~adgrpid=ac3647d3-b699-4e46-9775-0b75aa2443d6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=184256~plpr=COLLECTION~eid=baa41392-b804-4a22-93e7-adf37cbd23e0~srvts=1747969045886~collid=80424",
"sla": {
"deliveryTime": 46,
"lastMileTravel": 5.8,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "5.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 13:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-South%20Indian.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-South%20Indian.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "4.0K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "ac3647d3-b699-4e46-9775-0b75aa2443d6"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=184256&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "785996",
"name": "Swathi Tiffins",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/2/9e0c2655-c394-4bd2-b73a-7fbe89630773_665a20b1-3f57-4541-9ee6-b64d0f0a3fb7.JPG",
"locality": "Somajiguda",
"areaName": "Banjara Hills",
"costForTwo": "₹400 for two",
"cuisines": [
"North Indian"
],
"avgRating": 4.4,
"veg": true,
"parentId": "5029",
"avgRatingString": "4.4",
"totalRatingsString": "153",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 1.2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 22:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/bolt%206.png",
"description": "bolt!"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "bolt/bolt%206.png",
"description": "bolt!"
}
},
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=785996&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "41005",
"name": "Sri Raghavendra Tiffins",
"cloudinaryImageId": "a9ftokru06shztntaaex",
"locality": "Barkathpura",
"areaName": "Kachiguda",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian",
"Andhra"
],
"avgRating": 4.4,
"veg": true,
"parentId": "8196",
"avgRatingString": "4.4",
"totalRatingsString": "47K+",
"promoted": true,
"adTrackingId": "cid=746ecfd7-dfff-4b64-9031-fc17b6719870~p=4~adgrpid=746ecfd7-dfff-4b64-9031-fc17b6719870#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=41005~plpr=COLLECTION~eid=1bd0cbae-2235-48ea-bdee-e1c23860cb75~srvts=1747969045886~collid=80424",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 5.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 22:20:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "746ecfd7-dfff-4b64-9031-fc17b6719870"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=41005&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "27693",
"name": "Dwaraka Restaurant",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/9/0d1e4a4b-3746-429b-aeaa-16a68cae3ac9_4e8fd65a-d5e3-423a-b056-0e64118a5b28.jpg",
"locality": "lakdikapool",
"areaName": "Lakdi-Ka-Pul",
"costForTwo": "₹250 for two",
"cuisines": [
"North Indian",
"Chinese",
"South Indian"
],
"avgRating": 4.4,
"veg": true,
"parentId": "3936",
"avgRatingString": "4.4",
"totalRatingsString": "29K+",
"sla": {
"deliveryTime": 24,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹200 OFF",
"subHeader": "ABOVE ₹599",
"discountTag": "FLAT DEAL",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.2",
"ratingCount": "892"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=27693&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "41006",
"name": "Udupi Park Pure Veg",
"cloudinaryImageId": "syb0p0etz80btn3otwv3",
"locality": "Opp Old Prime Hospital",
"areaName": "Ameerpet",
"costForTwo": "₹300 for two",
"cuisines": [
"South Indian"
],
"avgRating": 4,
"veg": true,
"parentId": "19160",
"avgRatingString": "4.0",
"totalRatingsString": "76K+",
"promoted": true,
"adTrackingId": "cid=4cf85a84-3045-4045-9f20-f1eace956843~p=6~adgrpid=4cf85a84-3045-4045-9f20-f1eace956843#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=41006~plpr=COLLECTION~eid=e7c23723-9a95-4e7b-b200-8544fbe8f1de~srvts=1747969045886~collid=80424",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 23:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "4cf85a84-3045-4045-9f20-f1eace956843"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=41006&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "89773",
"name": "Shanbhag Hotel",
"cloudinaryImageId": "zendf9goidyrrtxnoaz8",
"locality": "Panjagutta",
"areaName": "Panjagutta",
"costForTwo": "₹300 for two",
"cuisines": [
"North Indian",
"South Indian",
"Chinese",
"Biryani",
"Thalis",
"Fast Food"
],
"avgRating": 4.3,
"veg": true,
"parentId": "181589",
"avgRatingString": "4.3",
"totalRatingsString": "8.6K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 22:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹75",
"discountTag": "POCKET HERO",
"discountCalloutInfo": {
"message": "Free Delivery",
"logoCtx": {
"logo": "v1655895371/free_delivery_logo_hqipbo.png"
}
},
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "5.3K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=89773&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "812299",
"name": "Udupi Ghar",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/8/c4500379-b463-4357-8b9b-b057a9324b54_812299.jpg",
"locality": "Asif Nagar Road",
"areaName": "Mehdipatnam",
"costForTwo": "₹300 for two",
"cuisines": [
"North Indian",
"South Indian",
"Fast Food",
"Snacks",
"Biryani",
"Beverages"
],
"avgRating": 4.4,
"veg": true,
"parentId": "484349",
"avgRatingString": "4.4",
"totalRatingsString": "1.0K+",
"promoted": true,
"adTrackingId": "cid=43037cb4-4527-4226-adc9-7ada5f2b80ae~p=9~adgrpid=43037cb4-4527-4226-adc9-7ada5f2b80ae#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=812299~plpr=COLLECTION~eid=a3b43155-5d35-414e-afd4-741a45357a57~srvts=1747969045886~collid=80424",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 6.7,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "6.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 22:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹150 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "43037cb4-4527-4226-adc9-7ada5f2b80ae"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=812299&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "114723",
"name": "Suprabath tiffins",
"cloudinaryImageId": "xjpakucmbefgxloevbwf",
"locality": "DWARAKAPURI COLONY",
"areaName": "Punjagutta",
"costForTwo": "₹150 for two",
"cuisines": [
"South Indian"
],
"avgRating": 4.4,
"parentId": "18952",
"avgRatingString": "4.4",
"totalRatingsString": "11K+",
"sla": {
"deliveryTime": 23,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
},
"textExtendedBadges": {}
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=114723&source=collection&query=Dosa",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
}
]

const Body = () => {
   return(
      <div>
         <div className="search">
            <input
            type="search"
            placeholder="Search bar"
            required
            />
            <button>search</button>
         </div>
         <div className="res-card">
         
           {
            resList.map((restarent) => (<Restocard resdata={restarent} key={restarent.card.card.info.id}/>))
           }
           
          
         </div>
   
      </div>
   )
}
const App = () =>{
   return(
   <div>
   <Header/>
   <Body/>
   </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)
