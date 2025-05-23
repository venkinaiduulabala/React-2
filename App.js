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
    const {name,cuisines,avgRating,cloudinaryImageId} =resdata.card.card.info
    const {deliveryTime} =resdata.card.card.info.sla
   return (
      <div className="resto-card">
         <img className="food-Img" alt="food-Img" 
         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime} Min</h4>
            <h4>{avgRating} Rating</h4>
         </div>
   )
}

const resList=[
 
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "25251",
"name": "Meridian Restaurant",
"cloudinaryImageId": "r68yifjk7tmgjkmlpdww",
"locality": "Panjagutta",
"areaName": "Panjagutta",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Chinese",
"Kebabs"
],
"avgRating": 4.4,
"parentId": "19276",
"avgRatingString": "4.4",
"totalRatingsString": "249K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 2.8,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 23:45:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
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
"rating": "3.9",
"ratingCount": "23K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=25251&source=collection&query=Biryani",
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
"id": "4138",
"name": "Grand Hotel",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
"locality": "Banjara Hills",
"areaName": "Abids",
"costForTwo": "₹300 for two",
"cuisines": [
"Biryani",
"Chinese",
"Kebabs",
"Tandoor"
],
"avgRating": 4.4,
"parentId": "4001",
"avgRatingString": "4.4",
"totalRatingsString": "321K+",
"promoted": true,
"adTrackingId": "cid=938f3290-8489-4652-a7fd-b22ce7890159~p=2~adgrpid=938f3290-8489-4652-a7fd-b22ce7890159#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4138~plpr=COLLECTION~eid=0f0a95f4-6911-4554-bcc0-1eb9f65156d6~srvts=1747985474953~collid=83639",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 5.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.8 km",
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
"header": "30% OFF",
"subHeader": "UPTO ₹75",
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
"rating": "4.1",
"ratingCount": "30K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "938f3290-8489-4652-a7fd-b22ce7890159"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=4138&source=collection&query=Biryani",
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
"id": "142670",
"name": "Shah Ghouse Hotel & Restaurant",
"cloudinaryImageId": "grqh1zb1kv8uhkmyercb",
"locality": "Santh Nirankari Satsang Bhavan",
"areaName": "Banjara Hills",
"costForTwo": "₹350 for two",
"cuisines": [
"Biryani",
"Chinese",
"Tandoor",
"Mughlai"
],
"avgRating": 4.3,
"parentId": "19271",
"avgRatingString": "4.3",
"totalRatingsString": "74K+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-30 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "bolt/bolt%206.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
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
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Biryani.png"
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
"link": "swiggy://menu?restaurant_id=142670&source=collection&query=Biryani",
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
"id": "464416",
"name": "Mehfil",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/e9772866-688c-4f7d-8363-664515b8b158_464416.jpg",
"locality": "Kv Road No 12",
"areaName": "Banjara Hills",
"costForTwo": "₹300 for two",
"cuisines": [
"Biryani",
"Chinese",
"Kebabs",
"Tandoor"
],
"avgRating": 4.4,
"parentId": "637",
"avgRatingString": "4.4",
"totalRatingsString": "40K+",
"promoted": true,
"adTrackingId": "cid=b02aaa35-c3ac-45e3-8f3c-e0688f0b30aa~p=3~adgrpid=b02aaa35-c3ac-45e3-8f3c-e0688f0b30aa#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=464416~plpr=COLLECTION~eid=02c89cf5-a3b3-435f-b83d-0b843ac3a8fa~srvts=1747985474953~collid=83639",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
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
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹40",
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
"campaignId": "b02aaa35-c3ac-45e3-8f3c-e0688f0b30aa"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=464416&source=collection&query=Biryani",
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
"id": "312800",
"name": "HILLSTAR RESTAURANT",
"cloudinaryImageId": "cslun7lsxewjajzkthhf",
"locality": "Khairatabad",
"areaName": "Khairatabad",
"costForTwo": "₹300 for two",
"cuisines": [
"Chinese",
"Biryani"
],
"avgRating": 4.4,
"parentId": "562532",
"avgRatingString": "4.4",
"totalRatingsString": "38K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 2.1,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-24 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
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
"rating": "4.1",
"ratingCount": "5.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=312800&source=collection&query=Biryani",
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
"id": "218478",
"name": "Harsha Deluxe Mess",
"cloudinaryImageId": "ir9vmlt9fp71bygmrzfa",
"locality": "Ameerpet",
"areaName": "Ameerpet",
"costForTwo": "₹300 for two",
"cuisines": [
"Indian",
"South Indian",
"Thalis"
],
"avgRating": 4.3,
"parentId": "19508",
"avgRatingString": "4.3",
"totalRatingsString": "22K+",
"promoted": true,
"adTrackingId": "cid=92a8eed0-d4bc-4a9e-9e79-167f07370f3f~p=5~adgrpid=92a8eed0-d4bc-4a9e-9e79-167f07370f3f#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=218478~plpr=COLLECTION~eid=de0f4e72-675f-4eab-a0af-2e1a476d125a~srvts=1747985474953~collid=83639",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 4.9,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-05-23 16:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "UPTO ₹100",
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
"rating": "4.0",
"ratingCount": "10K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "92a8eed0-d4bc-4a9e-9e79-167f07370f3f"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=218478&source=collection&query=Biryani",
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
