// LIVE;
// export const baseURL = "http://18.204.165.219:9291/api/v1";
// export const imagebaseURL = "http://18.204.165.219:9291/resources/";

// LIVE;
export const baseURL = "https://api.lavyacompany.com/api/v1";
export const imagebaseURL = "https://api.lavyacompany.com/resources/";

// LOCAL;
// export const baseURL = "http://192.168.29.91:9291/api/v1";
// export const imagebaseURL = "http://192.168.29.91:9291/resources/";

// export const baseURL = "http://192.168.1.20:9291/api/v1";
// export const imagebaseURL = "http://192.168.1.20:9291/resources/";

// export const baseURL = "http://192.168.29.116:9291/api/v1";
// export const imagebaseURL = "http://192.168.29.116:9291/resources/";

// export const baseURL = "http://172.20.10.5:9291/api/v1";
// export const imagebaseURL = "http://172.20.10.5:9291/resources/";

// export const baseURL = "http://10.0.0.51:9291/api/v1";
// export const imagebaseURL = "http://10.0.0.51:9291/resources/";

//REGISTER
export const POST_FAKE_REGISTER = "/post-fake-register";

//LOGIN
export const POST_FAKE_LOGIN = "/post-fake-login";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/fake-forget-pwd";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/post-fake-profile";

//CALENDER
export const GET_EVENTS = "/events";
export const GET_CATEGORIES = "/categories";
export const GET_UPCOMMINGEVENT = "/upcommingevents";
export const ADD_NEW_EVENT = "/add/event";
export const UPDATE_EVENT = "/update/event";
export const DELETE_EVENT = "/delete/event";

// API Key
export const GET_API_KEY = "/api-key";
export const ADD_NEW_API_KEY = "/add/api-key";
export const UPDATE_API_KEY = "/update/api-key";
export const DELETE_API_KEY = "/delete/api-key";

// Contacts
export const GET_CONTACTS = "/get-contacts";
export const ADD_NEW_CONTACT = "/add/contacts";
export const UPDATE_CONTACT = "/update/contacts";
export const DELETE_CONTACT = "/delete/contacts";

// Team
export const GET_TEAM = "/get-team";
export const ADD_NEW_MEMBER = "/add/member";
export const UPDATE_MEMBER = "/update/member";
export const DELETE_MEMBER = "/delete/member";

// Dashboard charts data
export const GET_ALL_DATA = "/all-data";
export const GET_MONTHLY_DATA = "/monthly-data";
export const GET_HALFYEARLY_DATA = "/halfyearly-data";
export const GET_YEARLY_DATA = "/yearly-data";

/*  Category  */
export const POST_NEW_CATEGORY = "/category/create-category";
export const POST_NEW_SUB_CATEGORY = "/category/create-sub-category";
export const GET_ALL_CATEGORY = "/category/get-all-categories";
export const GET_ALL_SUB_CATEGORY_BY_CATID =
  "/category/get-sub-category-by-cat-id";
export const GET_ALL_SUB_CATEGORY = "/category/get-all-sub-category";
/*  Category  */

/* product */
export const POST_NEW_PRODUCT = "/product/create-product";
export const GET_ALL_PRODUCT = "/product/get-all-products";
export const UPDATE_STOCK = "/stock/update-qty";
/* product */

/* ORDER */
export const GET_ALL_ORDERS = "/order/get-all-orders";
export const UPDATE_ORDER = "/order/update-order-by-id";
export const ASSIGN_ORDER = "/order/assign-to-partner";
/* ORDER */

/* ORDER */
export const GET_ALL_SUBSCRIPTION = "/order/get-order-by-status";
/* ORDER */

/* ORDER */
export const GET_ALL_LOCATIONS = "/location/get-all-serving-locations";
export const ADD_NEW_LOCATION = "/location/add-new-location";
/* ORDER */

/* HUB */
export const GET_ALL_HUB = "/hub/get-all-hubs";
export const ADD_NEW_HUB = "/hub/create-new-hub";
/* HUB */

/* PARTNER */
export const GET_ALL_PARTNER = "/partner/get-all-partners";
export const ADD_NEW_PARTNER = "/partner/add-new-partner";
/* PARTNER */

/* CITY */
export const GET_ALL_CITY = "/city/get-all-city";
export const ADD_NEW_CITY = "/city/add-new-city";
/* CITY */

/* CONTENT */
export const GET_ALL_CONTENT = "/content/get-all-content";
export const ADD_NEW_CONTENT = "/content/add-new-content";
/* CONTENT */

export const DETAILS_OF_GATEWAY = "/order/get-payment-details-by-id";

export const CREATE_OFFER = "/offer/create-new-offer";
export const GET_ALL_OFFER = "/offer/fetch-all-offer";

export const UPLOAD_BANNER = "/banner/upload-banner-images";

export const CREATE_MEMBERSHIP = "/vip/membership/subscribe-new-membership";

export const CREATE_NEW_MEMBERSHIP = "/vip/membership/create-new-membership";
