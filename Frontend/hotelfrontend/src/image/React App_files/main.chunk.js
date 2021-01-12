(this["webpackJsonphotelfrontend"] = this["webpackJsonphotelfrontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/css/main.css ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_bg_agoda_homepage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/bg-agoda-homepage.png */ "./src/image/bg-agoda-homepage.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_image_bg_agoda_homepage_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n* {\n    padding: 0px;\n    margin: 0px;\n  }\n  body {\n    background-color:     #f4f4f4 !important;\n  \n  }\n\n  /* Confirm Booking */\n  .CBooking{\n    height: 204px;\n  }\n  .CBookings{\n    height: 208px;\n  }\n\n  .mr{\n    margin-left:8px;\n  }\n  /* Rating  */\n  .rating{\n    position: absolute;\n    top:16%;\n    left:17%;\n    transform:translate(-50%, -50%) rotateY(180deg);\n    display:flex;\n  }\n  .ratings{\n    top:28%;\n  }\n  .rating input{\n    display: none;\n  }\n  .rating label{\n    display: block;\n    cursor: pointer;\n    width:34px;\n   }\n \n  \n  .rating label:before{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: relative;\n    display: block;\n    font-size:19px;\n    color:wheat;\n  }\n  .rating label:after{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: absolute;\n    display: block;\n    font-size:19px;\n    color:#1f9cff;\n    top:0;\n    opacity:0;\n    transition:.5s;\n    text-shadow: 0 2px 5px rgba(0,0,0,.5);\n  }\n  \n  .rating label:hover:after,\n  .rating label:hover ~ label:after,\n  .rating input:checked ~ label:after{\n    opacity:1;\n  }\n/* Rating  */\n  .rating{\n    position: absolute;\n    top:16%;\n    left:17%;\n    transform:translate(-50%, -50%) rotateY(180deg);\n    display:flex;\n  }\n  .ratings{\n    top:32%;\n  }\n  .rating input{\n    display: none;\n  }\n  .rating label{\n    display: block;\n    cursor: pointer;\n    width:34px;\n   }\n \n  \n  .rating label:before{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: relative;\n    display: block;\n    font-size:19px;\n    color:wheat;\n  }\n\n  .rating label:after{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: absolute;\n    display: block;\n    font-size:19px;\n    color:#1f9cff;\n    top:0;\n    opacity:0;\n    transition:.5s;\n    text-shadow: 0 2px 5px rgba(0,0,0,.5);\n  }\n  \n   .rating label:hover:after,\n  .rating label:hover ~ label:after,\n  .rating input:checked ~ label:after{\n    opacity:1;\n  } \n\n  \n\n  /* navbar */\n  .navbar .navbar-header .navbar-brand{\n    padding-top: 6px;\n    font-size: 19px;\n  }\n  \n  .navbar ul{\n    justify-content: space-around;\n  }\n  .navbar .collapse{\n    font-size: 16px;\n  }\n  .navbar .dropdown-menu{\n    font-size: 14px;\n  }\n\n  /* Register */\n \n  .login-box {\n    position: absolute;\n    top: 65%;\n    left: 50%;\n    width: 400px;\n    padding: 40px;\n    transform: translate(-50%, -50%);\n    background: rgba(0,0,0,.5);\n    box-sizing: border-box;\n    box-shadow: 0 15px 25px rgba(0,0,0,.6);\n    border-radius: 10px;\n  }\n  \n  .login-box h2 {\n    margin: 0 0 30px;\n    padding: 0;\n    color: #fff;\n    text-align: center;\n  }\n  \n  .login-box .user-box {\n    position: relative;\n  }\n  .login-box .user-box-select {\n    display: flex;\n    flex-direction: column;\n    color: #03e9f4;\n    font-size: 12px;    \n    font-weight: 600;\n  }\n  .login-box .user-box-select .user-box-select-item {\n    margin: 1.2rem 0;\n    color: #333333;\n    font-size: 12px;    \n    font-weight: 600;\n  }\n  .login-box .user-box p{\n    font-size: 12px;    \n    font-weight: 600;\n  }\n  .login-box .user-box input {\n    width: 100%;\n    padding: 10px 0;\n    font-size: 16px;\n    color: #fff;\n    margin-bottom: 30px;\n    border: none;\n    border-bottom: 1px solid #fff;\n    outline: none;\n    background: transparent;\n  }\n  .login-box .user-box label {\n    position: absolute;\n    top:0;\n    left: 0;\n    padding: 10px 0;\n    font-size: 16px;\n    color: #fff;\n    pointer-events: none;\n    transition: .5s;\n  }\n  \n  .login-box .user-box input:focus ~ label,\n  .login-box .user-box input:valid ~ label {\n    top: -20px;\n    left: 0;\n    color: #03e9f4;\n    font-size: 12px;\n  }\n  \n  .login-box form a {\n    position: relative;\n    display: inline-block;\n    padding: 10px 20px;\n    color: #03e9f4;\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    overflow: hidden;\n    transition: .5s;\n    margin-top: 40px;\n    letter-spacing: 4px\n  }\n  \n  .login-box a:hover {\n    background: #03e9f4;\n    color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #03e9f4,\n                0 0 25px #03e9f4,\n                0 0 50px #03e9f4,\n                0 0 100px #03e9f4;\n  }\n  \n  .login-box a span {\n    position: absolute;\n    display: block;\n  }\n  \n  .login-box a span:nth-child(1) {\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(90deg, transparent, #03e9f4);\n    animation: btn-anim1 1s linear infinite;\n  }\n  \n  @keyframes btn-anim1 {\n    0% {\n      left: -100%;\n    }\n    50%,100% {\n      left: 100%;\n    }\n  }\n  \n  .login-box a span:nth-child(2) {\n    top: -100%;\n    right: 0;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(180deg, transparent, #03e9f4);\n    animation: btn-anim2 1s linear infinite;\n    animation-delay: .25s\n  }\n  \n  @keyframes btn-anim2 {\n    0% {\n      top: -100%;\n    }\n    50%,100% {\n      top: 100%;\n    }\n  }\n  \n  .login-box a span:nth-child(3) {\n    bottom: 0;\n    right: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(270deg, transparent, #03e9f4);\n    animation: btn-anim3 1s linear infinite;\n    animation-delay: .5s\n  }\n  \n  @keyframes btn-anim3 {\n    0% {\n      right: -100%;\n    }\n    50%,100% {\n      right: 100%;\n    }\n  }\n  \n  .login-box a span:nth-child(4) {\n    bottom: -100%;\n    left: 0;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(360deg, transparent, #03e9f4);\n    animation: btn-anim4 1s linear infinite;\n    animation-delay: .75s\n  }\n  \n  @keyframes btn-anim4 {\n    0% {\n      bottom: -100%;\n    }\n    50%,100% {\n      bottom: 100%;\n    }\n  }\n  \n  /* Admin Dashboard */\n  .Dashboard .list-group{\n    margin-left: 20px;\n  }\n  .Dashboard .list-group-item{\n    padding: 33px 40px;\n    font-size: 16px;\n  } \n  .Dashboard .tab-content{\n    margin: 0px 15px\n  }\n\n  /* Booking */\n.table{\n \n  font-size: 14px;\n  margin: -9px 28px;\n}\n\n/* Registration Form for Hotel and Admin */\n.register form{\n  width: 557px;\n  font-size: 16px;\n  margin-left: 47px;\n}\n.register .form-control{\n  padding: 19px 13px !important;\n  font-size: 12px !important;\n}\n.register .form-controls{\n  padding: 5px 8px !important;\n}\n.register .reg {\n  padding: 8px 33px;\n    font-size: 12px;\n    font-weight: 800;\n}\n\n/* Profile */\n.profile label{\n  font-size:18px;\n}\n.profile .row {\n  padding:15px 8px;\n}\n.profile p{\n  font-weight: 600;\n  color: #0062cc;\n  font-size:16px;\n}\n\n/* HotelInformation */\n.hotelinformation form{\n  width:367px;\n}\n.hotelinformation .form-group{\n  font-size: 16px;\n}\n.hotelinformation .form-group input[type=\"text\"]{\n  padding: 20px 16px;\n  font-size: 13px;\n}\n.hotelinformation .form-group textarea{\n  padding: 39px 8px;\n}\n.hotelinformation .form-group button{\n  padding: 11px 27px;\n  font-size: 16px;\n}\n\n/* Hotel Package */\n.hotelpackage .form-group button{\n  padding: 4px 26px;\n  font-size: 16px;\n}\n.hotelpackage table{\n  margin: 6px 0px 0px -16px;\n    width: 421px;\n\n}\n.hotelpackage input[type=\"text\"]{\n  padding: 18px 16px;\n  font-size:14px;\n}\n .hotelpackage button {\n  font-size: 15px;\n}\n\n/* Gallery Upload */\n.gallery .custom-file{\n  font-size: 16px;\n}\n.gallery .btn {\n  font-size: 16px;\n}\n.gallery \n.custom-file-label::after{\n  background-color: #197195;\n  color: white;\n  font-weight: bold;\n}\n.gallery input[type=\"file\"]{\n  width: 401px;\n}\n\n/* Room Type Information */\n.roomtype .btn {\n  font-size: 16px;\n}\n\n/* Room Type Form */\n.roomtypeform{\n  width: 534px !important;\n    margin-top: 70px !important;\n}\n.roomtypeform label{\n  font-size:16px;\n}\n.roomtypeform input[type=\"text\"], input[type=\"file\"]{\n  padding: 16px 15px;\n  font-size: 16px;\n}\n.roomtypeform button{\n  font-size: 16px;\n  font-weight: 600;\n}\n\n\n\n/* Customer Dashboard */\n.customerdashboard{\n  margin-left: -174px;\n  margin-top: 0px;\n}\n.customerdashboard .nav .nav-item{\n  font-size: 16px;\n  font-weight: 500;\n  padding: 10px 16px;\n  text-align: center;\n  text-decoration: none;\n}\n.customerdashboard nav{\n  background-color: white;\n  margin-left: 8px;\n}\n\n\n.customerdashboard .sideinformation a{\n    font-size: 16px;\n}\n.customerdashboard .font30{\n  font-weight: 700;\n  font-size: 30px;\n  line-height:30px;\n}\n.customerdashboard .font18{\n  font-size:18px;\n  line-height: 18px;\n  color: #4a4a4a;\n}\n\n.customerdashboard section .tab-content::before{\n  content: '';\nwidth: 6px;\nheight: 50px;\nbackground-color: #adadad;\nposition: absolute;\ntop: 42px;\nleft: 15px;\n}\n.customerdashboard .nav-pills-custom .nav-link {\n  color: #aaa;\n  background: #fff;\n  position: relative;\n}\n\n.customerdashboard .nav-pills-custom .nav-link.active {\n  color: #45b649;\n  background: #fff;\n}\n.customerdashboard .verticaltab label{\n  font-size: 16px;\n}\n.customerdashboard .verticaltab p{\n  font-size: 13px;\n}\n\n.customerdashboard #v-pills-messages .reviewimage, .customerdashboard #v-pills-settings .reviewimage{\n  width: 292px;\n    height: 192px;\n    margin: -25px 0 0 -22px;\n}\n/* Reviews*/\n.customerdashboard #v-pills-messages .heads,.customerdashboard #v-pills-settings .heads{\n  margin: -18px 0 0 -22px;\n  color: #0080ff;\n}\n/* Reviews */\n.customerdashboard #v-pills-messages .format-address,.customerdashboard #v-pills-settings .format-address{\n  margin: 0 0 0 -22px;\n  color: #736F6E;\n}\n\n\n/* Reviewed form  */\n.customerdashboard #v-pills-messages .feedbackforms{\n  padding: 45px 0 0 0px;\n  margin-left: -18px;\n}\n.customerdashboard #v-pills-messages .feedbackforms label{\n  font-size: 14px;\n}\n.customerdashboard #v-pills-messages .feedbackforms input[type=text]{\n  padding: 19px 6px 19px 18px;\n  font-size: 13px;\n}\n.customerdashboard #v-pills-messages .feedbackforms textarea{\n  padding: 13px 13px 0 13px;\n  font-size: 14px;\n}\n.customerdashboard #v-pills-messages .feedbackforms .options{\n  height: 33px;\n  font-size: 12px;\n}\n.customerdashboard #v-pills-messages .feedbackforms button{\n  padding: 6px 30px 6px 30px;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n/* Confirm Booking */\n\n.customerdashboard #v-pills-settings .roomtype{\n    margin-left: -20px;  \n    font-weight: 600;\n}\n.customerdashboard #v-pills-settings .hotelservices{\n  margin-left: -20px;  \n  color: #008009;\n}\n.customerdashboard #v-pills-settings .confirmbooking{\n  margin-top: -11px;\n  color: #FF7B33;\n}\n.customerdashboard #v-pills-settings .gs{\n  margin: -10px 0 0 -20px;\n  color:#6b6b6b\n}\n.customerdashboard #v-pills-settings .price{\n  margin: -2px 0 0 -20px;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n/* Add indicator arrow for the active tab */\n@media (min-width: 992px) {\n .customerdashboard .nav-pills-custom .nav-link::before {\n      content: '';\n      display: block;\n      border-top: 8px solid transparent;\n      border-left: 10px solid #fff;\n      border-bottom: 8px solid transparent;\n      position: absolute;\n      top: 50%;\n      right: -10px;\n      transform: translateY(-50%);\n      opacity: 0;\n  }\n}\n\n.customerdashboard .nav-pills-custom .nav-link.active::before {\n  opacity: 1;\n}\n.customerdashboard section{\n  margin: -44px 0px 0px -16px;\n}\n\n\n/* Booking */\n.Booking #v-pills-settings, .cancellations #v-pills-settings{\n  width: 816px;\n    margin-left: 144px;\n}\n.Booking #v-pills-settings .format-address ,.Booking #v-pills-settings .stay,.Booking #v-pills-settings .guest, .Booking #v-pills-settings .roomtype,.Booking #v-pills-settings  .hotelservices,\n.Booking #v-pills-settingsconfirmbooking, .cancellations #v-pills-settings .format-address ,.cancellations #v-pills-settings .stay,.cancellations #v-pills-settings .guest, .cancellations #v-pills-settings .roomtype,.cancellations #v-pills-settings  .hotelservices,\n.cancellations #v-pills-settingsconfirmbooking\n{\n  font-size:12px\n}\n.Booking #v-pills-settings  .services, .cancellations #v-pills-settings  .services{\n    display: flex;\n    list-style: none;\n    margin: 0px 0px 11px -20px;\n  }\n  .Booking #v-pills-settings .services .serv, .cancellations #v-pills-settings .services .serv{\n    margin: 0 6px 0px 0;\n    color: #008009;\n    font-size: 12px;\n    font-weight: 600;    \n  }\n  .Booking #v-pills-settings .gs, .cancellations #v-pills-settings .gs{\n    margin-top:-6px;\n  }\n\n  .Booking #v-pills-settings .confirmbooking, .cancellations #v-pills-settings .confirmbooking{\n    margin: -3px 14px 0px -6px;\n  }\n  .Booking #v-pills-settings .cancel,  .cancellations #v-pills-settings .cancel{\n    padding: 4px 15px 1px 10px;\n    font-size: 12px;\n    font-weight: 600;\n    margin: -6px 0px 7px 22px;\n  }\n  .Booking #v-pills-settings .reviewimage, .cancellations #v-pills-settings .reviewimage{\n    height: 197px;\n  }\n\n\n  /* MY Wallet */\n\n\n  .mywallet{\n    width:450px;\n    background: #fff;\n    border-radius: 10px;\n    margin-left: 330px;\n  }\n  .mywallet .mywalletheader{\n    border-radius: 10px 10px 0 0;\n    padding: 30px 0;\n    background-image: linear-gradient(255deg, #3023ae, #c86dd7);\n  }\n  .mywallet .font34{\n    font-size: 34px;\n    color: white;\n    line-height: 33px;\n  }\n  .mywallet .font14{\n    font-size: 16px;\n    color: #fff;\n    opacity: 0.7;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 4px;\n  }\n  .mywallet .dollaricon{\n     width: 50px;\n    height: 50px;\n    margin: 8px 5px 5px 12px;\n  }\n.mywallet .walletBalanceSection p{\n  font-size: 24px;\n}\n.mywallet .walletBalanceSection .wp{\n  font-size: 25px;  \n  margin: 12px 0 0 144px;\n}\n\n\n/* Main Home Page */\n\n.homepage{\n background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 320px;\n  content: \"\";\n  border-bottom-left-radius: 48px;\n  margin-top:-20px;\n}\n.homepage .welcomemessage{\n  color:#fff;\n  text-align: center;\n  margin-top: 76px\n}\n.homepage .welcomemessage h1{\n  line-height: 1.3;\n   overflow: hidden;\n  animation: fadein 1s;\n  text-transform: uppercase;\n  font-size: 24px;\n}\n\n/* Booking */\n.homepage .hotelsearch{\n  width: 90%;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n  border-radius: 16px;\n  background-color: rgb(248, 247, 249);\n  padding: 32px 48px 48px;\n  margin-top: 70px;\n  margin-left: 56px;\n}\n\n.homepage .searchbox{\n  padding: 0;\n  height: 66px;\n  border-color: #dddfe2;\n  border-radius: 8px;\n  box-shadow: none;\n  border: 1px solid;\n  font-size: 16px;\n  margin: 0 0 12px;\n  background-color: #fff;\n  cursor: pointer;\n}\n.homepage .fa-search{\n\n  color: #333;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 1;\n  padding-right: 16px;\n  padding: 20px 15px;\n  display: inline-block;\n  vertical-align: middle;\n \n}\n.homepage .inputs{\n  width: calc(100% - 60px);\n    vertical-align: middle;\n    display: inline-block;\n}\n.homepage input[type=\"text\"]{\n font-size: 16px;\n    color: #2a2a2e;\n    background-color: #fff;\n    line-height: 1.25;\n    font-weight: 400;\n    padding: 19px 14px;\n    border:none\n}\n.homepage .date-range input{\n  border: 1px solid #d3dde6;\n    color: #0e3254;\n    border-radius: 6px;\n}\n.homepage .date-range .date-range_arrow {\n  flex-shrink: 0;\n  position: relative;\n  width: 36px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.homepage .date-range .date-range_arrow::before{\n  border-right: 2px solid #d3dde6;\n  border-top: 2px solid #d3dde6;\n  box-sizing: border-box;\n  content: \"\";\n  display: block;\n  height: 18px;\n  left: 50%;\n  margin-left: -14px;\n  margin-top: -9px;\n  position: absolute;\n  top: 50%;\n  transform: rotate(45deg);\n  width: 18px;\n}\n\n.homepage .guest button{\n  margin-bottom: 1rem;\n  padding: 0;\n  height: 66px;\n  border-radius: 8px;\n  box-shadow: none;\n  border: 1px solid;\n  width: 100%;\n  font-size: 16px;\n  background-color: white;\n  color: black;\n  border-color: #dddfe2;\n  margin-left: -97px;\n  margin-top: -2px;\n}\n.homepage .sr{\n  margin-left: -25px;\n}\n\n.homepage .fon{\n  font-size: 14px;\n    color: #999;\n    line-height: 1.25;\n    margin-top: -10px;\n}\n.homepage .material-icons{\n\n  margin-top: 8px;\n\n}\n.homepage .down .fa-chevron-down{\n  margin-top: 15px;\n\n}\n.homepage .hotelsearch .collapse{\n  margin-right: 95px;\n    margin-left: -100px;\n    border-radius: 15px;\n}\n\n.homepage .hotelsearch .collapse .card{\n  border-radius: 12px;\n  font-size: 12px;\n}\n.homepage .hotelsearch .collapse .minus, .homepage .hotelsearch .collapse .plus{\n  margin-left: 66px;\n    height: 29px;\n    width: 28px;\n    border-radius: 50%;\n    box-shadow: 1px 3px 20px rgba(17, 17, 17, 0.4);\n    background: #fff;\n    border: none;\n    outline: none;\n    font-size: 20px;\n}\n.homepage .hotelsearch .collapse .plus{\nmargin-left: 12px;\n}\n.homepage .hotelsearch .collapse .counter{\n  padding: 17px;\n}\n\n.homepage .hotelsearch .collapse .roo{\n  margin: 4px 0 0px 15px;\n  font-size: 15px;\n}\n .con .searchbutton{\n  display: flex;\n  justify-content: center;\n  margin-top: -35px;\n}\n.con .searchbutton .searchs{\n  position: relative;\n    border: medium none;\n    padding: 12px;\n    border-radius: 8px;\n    background-color: rgb(83, 146, 249);\n    color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;\n    transition: all 0.15s ease-in-out 0s;\n    -webkit-user-select: none;\n            user-select: none;\n    width: 490px;\n    height: 64px;\n    font-size:30px;\n    \n}\n\n\n/* All Hotel Trending Now and Recommeded*/\n.hotelsall{\n  margin-top:33px;\n}\n\n.hotelsall .card-deck {\n  margin: 0 -15px;\n  justify-content: space-between;\n  font-size:12px;\n}\n\n.hotelsall .card-deck .card {\n  margin: 0 0 1rem;\n}\n\n.hotelsall .card-title{\n  font-weight:bold;\n}\n.hotelsall .card-title{\n  cursor: pointer;\n}\n.hotelsall .card-deck .card{\n  border-radius: 16px;\n  border:none;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n}\n.hotelsall .card-deck .card .card-img-top{\n  border-top-left-radius: 8% !important;\n  border-top-right-radius: 8% !important;\n}\n.hotelsall .card-deck .card .card-text{\n  font-size:14px;\n  margin-top: -8px;\n  color:black;\n}\n\n.hotelsall .card-deck .card .MR{\n  margin: 195px 0 0 37px;\n\n}\n.hotelsall .card-deck .card .card-price{\n  margin-top:28px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f9cff;\n}\n.hotelsall .card-deck .card .card-infos{\nmargin-top: -13px;\nfont-size: 11px;\n}\n.hotelsall .card-deck .card .FC{\n  color: black !important;\n  font-weight: 600;\n  font-size: 12px;\n}\n.hotelsall .card-deck .card img{\n  height: 181px !important;\n}\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n.hotelsall  .card-deck .card {\n    flex: 0 0 48.7%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n .hotelsall .card-deck .card {\n    flex: 0 0 32%;\n  }\n}\n\n@media (min-width: 992px)\n{\n  .hotelsall .card-deck .card {\n    flex: 0 0 24%;\n  }\n}\n\n\n\n/* Footer */\n.footer .a{\n  visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;\n}\n.footer .new_footer_area {\n  background: #fbfbfd;\n}\n\n\n.footer .new_footer_top {\n  padding: 120px 0px 270px;\n  position: relative;\n    overflow-x: hidden;\n}\n.footer .new_footer_area .footer_bottom {\n  padding-top: 5px;\n  padding-bottom: 50px;\n}\n.footer .footer_bottom {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 20px;\n  color: #7f88a6;\n  padding: 27px 0px;\n}\n.footer .new_footer_top .company_widget p {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 28px;\n  color: #6a7695;\n  margin-bottom: 20px;\n}\n.footer .new_footer_top .company_widget .f_subscribe_two .btn_get {\n  border-width: 1px;\n  margin-top: 20px;\n}\n.footer .btn_get_two:hover {\n  background: transparent;\n  color: #5e2ced;\n}\n.footer .btn_get:hover {\n  color: #fff;\n  background: #6754e2;\n  border-color: #6754e2;\n  box-shadow: none;\n}\n.footer a:hover, .footer a:focus, .footer .btn:hover,.footer .btn:focus,.footer button:hover,.footer button:focus {\n  text-decoration: none;\n  outline: none;\n}\n\n\n\n.footer .new_footer_top .f_widget.about-widget .f_list li a:hover {\n  color: #5e2ced;\n}\n.footer .new_footer_top .f_widget.about-widget .f_list li {\n  margin-bottom: 11px;\n}\n.footer .f_widget.about-widget .f_list li:last-child {\n  margin-bottom: 0px;\n}\n.footer .f_widget.about-widget .f_list li {\n  margin-bottom: 15px;\n}\n\n.footer .f_widget.about-widget .f_list {\n  margin-bottom: 0px;\n}\n.footer .new_footer_top .f_social_icon a {\n  width: 44px;\n  height: 44px;\n  line-height: 43px;\n  background: transparent;\n  border: 1px solid #e2e2eb;\n  font-size: 24px;\n}\n.footer .f_social_icon a {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  font-size: 14px;\n  line-height: 45px;\n  color: #858da8;\n  display: inline-block;\n  background: #ebeef5;\n  text-align: center;\n  transition: all 0.2s linear;\n}\n.footer .ti-facebook:before {\n  content: \"\\e741\";\n}\n.footer .ti-twitter-alt:before {\n  content: \"\\e74b\";\n}\n.footer .ti-vimeo-alt:before {\n  content: \"\\e74a\";\n}\n.footer .ti-pinterest:before {\n  content: \"\\e731\";\n}\n\n.footer .btn_get_two {\n  box-shadow: none;\n  background: #5e2ced;\n  border-color: #5e2ced;\n  color: #fff;\n}\n\n.footer .btn_get_two:hover {\n  background: transparent;\n  color: #5e2ced;\n}\n\n.footer .new_footer_top .f_social_icon a:hover {\n  background: #5e2ced;\n  border-color: #5e2ced;\ncolor:white;\n}\n.footer .new_footer_top .f_social_icon a + a {\n  margin-left: 4px;\n}\n.footer .new_footer_top .f-title {\n  margin-bottom: 30px;\n  color: #263b5e;\n}\n.footer .f_600 {\n  font-weight: 600;\n}\n.footer .f_size_18 {\n  font-size: 18px;\n}\n.footer h1,.footer h2,.footer h3,.footer h4,.footer h5,.footer h6 {\n  color: #4b505e;\n}\n.footer .new_footer_top .f_widget.about-widget .f_list li a {\n  color: #6a7695;\n}\n\n\n.footer .new_footer_top .footer_bg {\n  position: absolute;\n  bottom: 0;\n  background: url(\"http://droitthemes.com/html/saasland/img/seo/footer_bg.png\") no-repeat scroll center 0;\n  width: 100%;\n  height: 266px;\n}\n\n.footer .new_footer_top .footer_bg .footer_bg_one {\n  background: url(\"https://1.bp.blogspot.com/-mvKUJFGEc-k/XclCOUSvCnI/AAAAAAAAUAE/jnBSf6Fe5_8tjjlKrunLBXwceSNvPcp3wCLcBGAsYHQ/s1600/volks.gif\") no-repeat center center;\n  width: 330px;\n  height: 105px;\nbackground-size:100%;\n  position: absolute;\n  bottom: 0;\n  left: 30%;\n  animation: myfirst 22s linear infinite;\n}\n\n.footer .new_footer_top .footer_bg .footer_bg_two {\n  background: url(\"https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif\") no-repeat center center;\n  width: 88px;\n  height: 100px;\nbackground-size:100%;\n  bottom: 0;\n  left: 38%;\n  position: absolute;\n  animation: myfirst 30s linear infinite;\n}\n\n@keyframes myfirst {\n0% {\n  left: -25%;\n}\n100% {\n  left: 100%;\n}\n}\n\n/*************footer End*****************/\n\n/* Hotel Detail Dashboard */\n.carousel {\n  position: relative;\n}\n.carousel-item img {\n  object-fit: cover;\n}\n#carousel-thumbs {\n  background: rgba(255,255,255,.3);\n  bottom: 0;\n  left: 0;\n  padding: 0 50px;\n  right: 0;\n}\n#carousel-thumbs img {\n  border: 5px solid transparent;\n  cursor: pointer;\n}\n#carousel-thumbs img:hover {\n  border-color: rgba(255,255,255,.3);\n}\n#carousel-thumbs .selected img {\n  border-color: #fff;\n}\n.carousel-control-prev,\n.carousel-control-next {\n  width: 50px;\n}\n@media all and (max-width: 767px) {\n  .carousel-container #carousel-thumbs img {\n    border-width: 3px;\n  }\n}\n@media all and (min-width: 576px) {\n  .carousel-container #carousel-thumbs {\n    position: absolute;\n  }\n}\n@media all and (max-width: 576px) {\n  .carousel-container #carousel-thumbs {\n    background: #ccccce;\n  }\n}\n\n\n/* Hotel Booking detail */\n.hotelbookingdetail .container-fluid {\n  margin-top:-20px !important;\n\n}\n.hotelbookingdetail .h1{\n  font-size:32px;\n  line-height:1.75;\n}\n.hotelbookingdetail .address{\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: 0.4px;\n  color: #222;\n  opacity: 0.5;\n \n}\n.hotelbookingdetail .about{\n  line-height: 22px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  text-align: justify;\n  font-weight: 400;\n  color: rgba(0,0,0,0.7);\n}\n.hotelbookingdetail .booknow{\n  position: sticky;\nmin-width: 438px;\nright: 5%;\ntop: 76px;\nmargin-top: 24px;\nz-index: 20;\nmax-width: 450px;\nbackground: #fff;\n\n}\n.hotelbookingdetail .booknow .deal{\n  opacity: 0.9;\n    border-radius: 4px;\n    background: linear-gradient(265deg,#ef4123,#ee3f25 48%,#d11450);\n    padding: 8px 0px;\n    cursor: pointer;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    text-align: center;\n}\n.hotelbookingdetail .booknow .deal p{\n  font-weight: bold;\n    font-size: 16px;\n    color: white;\n}\n.hotelbookingdetail .booknow .bokinfo{\n  padding: 16px 24px;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(125,125,125,0.1);\n  border: solid 1px #f0f0f0;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  box-sizing: border-box;\n}\n.hotelbookingdetail .booknow .bokinfo .tax{ \n  font-size: 12px;\n  color: #6d787d;\n}\n.hotelbookingdetail .booknow .bokinfo .roomtype\n{\n  display: flex;\npadding: 12px 0px;\nborder-radius: 4px;\nbox-shadow: 0 2px 6px 0 rgba(125,125,125,0.1);\nborder: solid 1px #f0f0f0;\nalign-items: center;\njustify-content: space-between;\nposition: relative;\nwidth: 100%;\nmargin-top: 16px;\n}\n.hotelbookingdetail .booknow .bokinfo .roomtype .bed{\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.71;\n  display: flex;\n  margin: 0px 18px;\n}\n.hotelbookingdetail .booknow .bokinfo .roomtype .bed .fas{\n  display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    height: 20px;\n    width: 20px;\n    opacity: 0.5;\n}\n\n.hotelbookingdetail .booknow .bokinfo .reward{\n  margin: 32px 0 0;\nwidth: 100%;\ndisplay: flex;\npadding-bottom: 16px;\nborder-bottom: dashed 1px rgba(151,151,151,0.4);\njustify-content: space-between;\nalign-items: flex-start;\n}\n.hotelbookingdetail .booknow .bokinfo .reward p{\n  font-size: 16px;\n  font-weight: 600;\n  color: rgba(0,0,0,0.38);\n  margin: 9px 206px 0 0;\n}\n.hotelbookingdetail .booknow .bokinfo .reward  h4{\nmargin:9px 1px 0 0 ;\nfont-weight: 600;\n}\n.hotelbookingdetail .booknow .bokinfo .cn{\n  background-color: #1ab64f;\nborder: 0px;\ncolor: #fff;\nfont-size: 16px;\nfont-weight: bold;\nline-height: 1.2;\npadding: 14px;\nwidth: 100%;\n}\n.hotelbookingdetail .booknow .bokinfo a{\ncolor:white\n}\n.package .ser{\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.package .ser span{\ndisplay: flex;\nalign-items: center;\nwidth: 33%;\nmargin-top: 18px;\n}\n.package .ser span i{\n  content: \"\\f26c\";\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 20px;\n  width: 20px;\n  font-size: 17px;\n  margin: -12px 9px 0 0;\n}\n.package .ser span p{\n  font-size:14px;\n  line-height: 1.5;\n}\n\n.RY .c-gcrtsc{\n  border-radius: 5px;\n    margin: 20px 0;\n    background: #fff;\n    color: #222;\n    width: 81%;\n}\n.RY .c-gcrtsc .c-1bdbnnk{\n  height: 26px;\nbackground-image: linear-gradient(to right,#797f9d,#d4d1da);\nborder-radius: 4px 4px 0px 0px;\n}\n.RY .c-gcrtsc .c-1bdbnnk .ys{\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  display: flex;\n  padding-left: 18px;\n  padding-top: 6px;\n  align-items: center;\n}\n.RY .c-gcrtsc .c-1bdbnnk .ys img{\n  margin: -15px 9px -1px 0px;\n}\n.RY .c-gcrtsc .c-1bdbnnk .ys p{\n  text-transform: uppercase;\n  margin-top:-1px;\n}\n.RY .c-7doipl{\n  \ndisplay: flex;\nflex-direction: row;\nbackground: white;\npadding: 12px 20px 18px 20px;\njustify-content: space-between;\nborder: 1px solid #74747428;\nborder-radius: 5px 5px 0px 0px;\n}\n\n.RY .c-7doipl .c-ebnjpp{ \ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nflex-grow: 1;\nmargin-right: 12px;\n}\n.RY .c-7doipl .c-ebnjpp .pp{\n  display: flex;\n  flex-direction: row;\n}\n.RY .c-7doipl .c-ebnjpp .pp .ty{\n  font-size: 28px;\nfont-weight: 600;\npadding: -9px 0px;\nmax-width: 85%;\n}\n.RY .c-7doipl .c-ebnjpp .sz{\n  font-size: 10px;\n  width: 80%;\n  margin-top: -64px;\n  margin-left:5px;\n  color: rgba(0,0,0,0.7);\n}\n.RY .c-7doipl .c-ebnjpp .services{\n  text-overflow: ellipsis; \nwhite-space: nowrap;\ndisplay: flex;\nwidth: 70%;\n}\n.RY .c-7doipl .c-ebnjpp .services .ic\n{\n  display:flex;\n  padding-right: 24px;\n  font-size: 14px;\n  align-items: center;}\n  .RY .c-7doipl .c-ebnjpp .services .ic i{\n    margin: -11px 9px 0 0;\n  }\n  .RY .c-7doipl .image{\n    display: flex;\n    position: relative;\n    flex-direction: row-reverse;\n  }\n  .RY .c-7doipl .image img{\n    color: rgba(0,0,0,0.54);\n    background: #f3f5f7;\n    animation: none;\n    vertical-align: middle;\n    border-radius: 5px;\n    width: 180px;\n    height: auto;\n    object-fit: cover;\n    border-style: none;\n  }\n\n  .RY .c-gcrtsc .selected{   \ndisplay: flex;\nflex-direction: row;\npadding: 16px 18px;\nborder: 1px solid #74747428;\n    border-top-color: rgba(116, 116, 116, 0.157);\n    border-top-style: solid;\n    border-top-width: 1px;\nborder-top: 0;\nborder-bottom-left-radius: 4px;\nborder-bottom-right-radius: 4px;\njustify-content: space-between;\n  }\n  .RY .c-gcrtsc .selected .price{\n    font-size: 18px;\n    line-height: 24px;    \n    margin: 16px 0 0 8px;\n  }\n    .RY .c-gcrtsc .selected .sel{\n      margin-top:-9px;\n      font-size: 12px;\n      font-weight: bold;\n      width: 180px;\n      padding: 16px 0px;\n      border-radius: 4px;\n      border: solid 1px #d7d7d7;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      outline: 0;\n      background: #fff;\n      color: #222222;\n    }\n\n\n\n    /*main  Review And Rating */\n    .commentbox .heading {\n      font-size: 25px;\n      margin-right: 25px;\n    }\n   .commentbox .hrs{\n             border:3px solid #f1f1f1\n      \n    }\n    .commentbox .averagereviews{\n      font-size: 12px;\n    }\n    .commentbox .allbars{\n      width:90%;\n    }\n    .commentbox .side{\n      font-size:12px;\n    }\n   .commentbox .fa {\n      \n      font-size: 20px;\n      padding: 4px;\n    }\n    \n    .commentbox .checked {\n      color: orange;\n    }\n    \n    /* Three column layout */\n   .commentbox .side {\n      float: left;\n      width: 15%;\n      margin-top:10px;\n    }\n    \n   .commentbox .middle {\n      margin-top:10px;\n      float: left;\n      width: 70%;\n    }\n    \n    /* Place text to the right */\n   .commentbox .right {\n      text-align: right;\n    }\n    \n    /* Clear floats after the columns */\n  .commentbox  .row:after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n    \n    /* The bar container */\n  .commentbox  .bar-container {\n      width: 100%;\n      background-color: #f1f1f1;\n      text-align: center;\n      color: white;\n    }\n    \n    /* Individual bars */\n   .commentbox .bar-5 {width: 60%; height: 5px; background-color: #4CAF50;}\n   .commentbox .bar-4 {width: 30%; height: 5px; background-color: #2196F3;}\n   .commentbox .bar-3 {width: 10%; height: 5px; background-color: #00bcd4;}\n   .commentbox .bar-2 {width: 4%; height: 5px; background-color: #ff9800;}\n   .commentbox .bar-1 {width: 15%; height: 5px; background-color: #f44336;}\n    \n\n\n\n    /* Responsive layout - make the columns stack on top of each other instead of next to each other */\n    @media (max-width: 400px) {\n    .commentbox  .side,.commentbox .middle {\n        width: 100%;\n      }\n   .commentbox   .right {\n        display: none;\n      }}\n\n\n    .commentbox .bootdey{\n      margin: 32px 0 0 -54px;\n    }\n    .commentbox textarea{\n      font-size: 12px;\n    padding: 27px 0px 0 16px;\n    }\n    .commentbox .fs{\n      font-size: 12px;\n    }\n    .commentbox .fss{\n      font-size: 11px !important;\n    }\n    .commentbox .img-sm {\n        width: 46px;\n        height: 46px;\n    }\n    \n    .commentbox .panel {\n        box-shadow: 0 2px 0 rgba(0,0,0,0.075);\n        border-radius: 0;\n        border: 0;\n        margin-bottom: 15px;\n    }\n    \n  .commentbox  .panel .panel-footer,.commentbox .panel>:last-child {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    \n  .commentbox  .panel .panel-heading,.commentbox .panel>:first-child {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n    \n   .commentbox .panel-body {\n        padding: 25px 20px;\n    }\n    \n    \n   .commentbox .media-block .media-left {\n        display: block;\n        float: left\n    }\n    \n   .commentbox .media-block .media-right {\n        float: right\n    }\n    \n   .commentbox .media-block .media-body {\n        display: block;\n        overflow: hidden;\n        width: auto\n    }\n    \n   .commentbox .middle .media-left,\n   .commentbox .middle .media-right,\n   .commentbox .middle .media-body {\n        vertical-align: middle\n    }\n    \n  .commentbox  .thumbnail {\n        border-radius: 0;\n        border-color: #e9e9e9\n    }\n    \n    .commentbox .tag.tag-sm, .btn-group-sm>.tag {\n        padding: 5px 10px;\n    }\n    \n   .commentbox .tag:not(.label) {\n        background-color: #fff;\n        padding: 6px 12px;\n        border-radius: 2px;\n        border: 1px solid #cdd6e1;\n        font-size: 12px;\n        line-height: 1.42857;\n        vertical-align: middle;\n        transition: all .15s;\n    }\n   .commentbox .text-muted,.commentbox a.text-muted:hover,.commentbox a.text-muted:focus {\n        color: #acacac;\n    }\n  .commentbox  .text-sm {\n        font-size: 0.9em;\n    }\n   .commentbox  .text-5x,.commentbox .text-4x,.commentbox .text-5x,.commentbox .text-2x,.commentbox .text-lg,.commentbox .text-sm,.commentbox .text-xs {\n        line-height: 1.25;\n    }\n    \n    .commentbox .btn-trans {\n        background-color: transparent;\n        border-color: transparent;\n        color: #929292;\n    }\n    \n  .commentbox  .btn-icon {\n        padding-left: 9px;\n        padding-right: 9px;\n    }\n    \n   .commentbox .btn-sm,.commentbox .btn-group-sm>.btn, .commentbox .btn-icon.btn-sm {\n        padding: 5px 10px !important;\n    }\n    \n    .commentbox .mar-top {\n        margin-top: 15px;\n    }\n\n  /* Customer Booking Form */\n  .c-9ugfym\n    {\n      background-color: #fff;\n      border-radius:12px;\n      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n      width:50% !important;\n    }\n    .c-9ugfym form {\n      padding: 50px 36px 50px 36px !important;\n      border: none;\n    }\n    .c-9ugfym form .form-group input[type=\"text\"]{\n    padding: 21px 0px 21px 18px !important;\n    font-size: 12px !important;\n   }\n   .c-9ugfym form button {\n    padding: 14px 30px 14px 30px;\n    font-size: 12px;\n    font-weight: bold;\n   }\n   .c-9ugfym form .form-group label{\n     font-size:16px;\n   }\n\n\n   /* Search Hotel */\n   .fsh{\n     display:  flex;\n     justify-content: center;\n   }\n   .searchhotel{\n     background-color: #fff;\n     width:80%;\n     border-radius:15px;\n     box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n      border-width: 1px;\n     border-style: solid;\n     border-color: #e0e0e0;\n   \n   }\n  .searchhotel .image{\n    width:100%;\n    border-bottom-left-radius:15px;\n    line-height:25px;\n  }\n  .searchhotel .address{\n    font-size: 16px !important;\n    line-height: 25px !important;\n  }\n  .searchhotel .MR2{\n    margin-top:36px !important; \n  }\n  .searchhotel .service{\n    display: flex;\n    margin-top:36px;\n  }\n  .searchhotel .service span{\n    display: flex !important;\n    padding-right:20px;\n    font-size: 14px;\n    color: #6c757d!important;;\n  }\n  .searchhotel .service span i{\n    margin-right: 5px;\n    width: 18px;\n    height: 18px;\n  }\n\n  .searchhotel .infos{\n    margin-top:38px;\n  }\n\n  .searchhotel .infos .roomtype{\n    text-transform: capitalize;\nfont-size: 14px;\nline-height: 7px;\ncolor: #222;\n  }\n  .searchhotel .infos .price {\n    margin-right: 8px;\nfont-size: 24px;\nfont-weight: 700;\ncolor: #ee2a24;\n  }\n  .searchhotel .infos .prpn{\n    font-weight: 400;\n    line-height: 1em;\n    margin-top: 4px;\n    font-size: 12px;\n    color: #6d787d;\n  }\n  .searchhotel .infos .det{\n    border-radius: 8px;\n    background-color: rgb(83, 146, 249);\n    color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;\n    padding: 5px 37px;\n    border: none;\n    font-size: 20px;\n    margin-top: 12px;\n    font-weight: 600;\n  }", "",{"version":3,"sources":["webpack://src/css/main.css"],"names":[],"mappings":";AACA;IACI,YAAY;IACZ,WAAW;EACb;EACA;IACE,wCAAwC;;EAE1C;;EAEA,oBAAoB;EACpB;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;EACA,YAAY;EACZ;IACE,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,+CAA+C;IAC/C,YAAY;EACd;EACA;IACE,OAAO;EACT;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,eAAe;IACf,UAAU;GACX;;;EAGD;IACE,eAAe;IACf,gCAAgC;IAChC,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,WAAW;EACb;EACA;IACE,eAAe;IACf,gCAAgC;IAChC,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,aAAa;IACb,KAAK;IACL,SAAS;IACT,cAAc;IACd,qCAAqC;EACvC;;EAEA;;;IAGE,SAAS;EACX;AACF,YAAY;EACV;IACE,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,+CAA+C;IAC/C,YAAY;EACd;EACA;IACE,OAAO;EACT;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;IACd,eAAe;IACf,UAAU;GACX;;;EAGD;IACE,eAAe;IACf,gCAAgC;IAChC,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,WAAW;EACb;;EAEA;IACE,eAAe;IACf,gCAAgC;IAChC,kBAAkB;IAClB,cAAc;IACd,cAAc;IACd,aAAa;IACb,KAAK;IACL,SAAS;IACT,cAAc;IACd,qCAAqC;EACvC;;GAEC;;;IAGC,SAAS;EACX;;;;EAIA,WAAW;EACX;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,6BAA6B;EAC/B;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;;EAEA,aAAa;;EAEb;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;IACb,gCAAgC;IAChC,0BAA0B;IAC1B,sBAAsB;IACtB,sCAAsC;IACtC,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,eAAe;IACf,eAAe;IACf,WAAW;IACX,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;EACzB;EACA;IACE,kBAAkB;IAClB,KAAK;IACL,OAAO;IACP,eAAe;IACf,eAAe;IACf,WAAW;IACX,oBAAoB;IACpB,eAAe;EACjB;;EAEA;;IAEE,UAAU;IACV,OAAO;IACP,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB;EACF;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB;;;iCAG6B;EAC/B;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,MAAM;IACN,WAAW;IACX,WAAW;IACX,WAAW;IACX,wDAAwD;IACxD,uCAAuC;EACzC;;EAEA;IACE;MACE,WAAW;IACb;IACA;MACE,UAAU;IACZ;EACF;;EAEA;IACE,UAAU;IACV,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,yDAAyD;IACzD,uCAAuC;IACvC;EACF;;EAEA;IACE;MACE,UAAU;IACZ;IACA;MACE,SAAS;IACX;EACF;;EAEA;IACE,SAAS;IACT,YAAY;IACZ,WAAW;IACX,WAAW;IACX,yDAAyD;IACzD,uCAAuC;IACvC;EACF;;EAEA;IACE;MACE,YAAY;IACd;IACA;MACE,WAAW;IACb;EACF;;EAEA;IACE,aAAa;IACb,OAAO;IACP,UAAU;IACV,YAAY;IACZ,yDAAyD;IACzD,uCAAuC;IACvC;EACF;;EAEA;IACE;MACE,aAAa;IACf;IACA;MACE,YAAY;IACd;EACF;;EAEA,oBAAoB;EACpB;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE;EACF;;EAEA,YAAY;AACd;;EAEE,eAAe;EACf,iBAAiB;AACnB;;AAEA,0CAA0C;AAC1C;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,6BAA6B;EAC7B,0BAA0B;AAC5B;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,iBAAiB;IACf,eAAe;IACf,gBAAgB;AACpB;;AAEA,YAAY;AACZ;EACE,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,cAAc;AAChB;;AAEA,qBAAqB;AACrB;EACE,WAAW;AACb;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,kBAAkB;AAClB;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,yBAAyB;IACvB,YAAY;;AAEhB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;CACC;EACC,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;;EAEE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;;AAEA,0BAA0B;AAC1B;EACE,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,uBAAuB;IACrB,2BAA2B;AAC/B;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;;;;AAIA,uBAAuB;AACvB;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;;AAGA;IACI,eAAe;AACnB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb,UAAU;AACV,YAAY;AACZ,yBAAyB;AACzB,kBAAkB;AAClB,SAAS;AACT,UAAU;AACV;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;IACV,aAAa;IACb,uBAAuB;AAC3B;AACA,WAAW;AACX;EACE,uBAAuB;EACvB,cAAc;AAChB;AACA,YAAY;AACZ;EACE,mBAAmB;EACnB,cAAc;AAChB;;;AAGA,mBAAmB;AACnB;EACE,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,2BAA2B;EAC3B,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,0BAA0B;EAC1B,eAAe;EACf,gBAAgB;AAClB;;AAEA,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;EACE,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,uBAAuB;EACvB;AACF;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;;AAEA,2CAA2C;AAC3C;CACC;MACK,WAAW;MACX,cAAc;MACd,iCAAiC;MACjC,4BAA4B;MAC5B,oCAAoC;MACpC,kBAAkB;MAClB,QAAQ;MACR,YAAY;MACZ,2BAA2B;MAC3B,UAAU;EACd;AACF;;AAEA;EACE,UAAU;AACZ;AACA;EACE,2BAA2B;AAC7B;;;AAGA,YAAY;AACZ;EACE,YAAY;IACV,kBAAkB;AACtB;AACA;;;;EAIE;AACF;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,0BAA0B;EAC5B;EACA;IACE,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;;EAEA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,yBAAyB;EAC3B;EACA;IACE,aAAa;EACf;;;EAGA,cAAc;;;EAGd;IACE,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,4BAA4B;IAC5B,eAAe;IACf,2DAA2D;EAC7D;EACA;IACE,eAAe;IACf,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;EAClB;EACA;KACG,WAAW;IACZ,YAAY;IACZ,wBAAwB;EAC1B;AACF;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,sBAAsB;AACxB;;;AAGA,mBAAmB;;AAEnB;CACC,yDAAuD;EACtD,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,WAAW;EACX,+BAA+B;EAC/B,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,kBAAkB;EAClB;AACF;AACA;EACE,gBAAgB;GACf,gBAAgB;EAEjB,oBAAoB;EACpB,yBAAyB;EACzB,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,UAAU;EACV,kBAAkB;EAClB,8CAA8C;EAC9C,mBAAmB;EACnB,oCAAoC;EACpC,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;AACjB;AACA;;EAEE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;;AAExB;AACA;EACE,wBAAwB;IACtB,sBAAsB;IACtB,qBAAqB;AACzB;AACA;CACC,eAAe;IACZ,cAAc;IACd,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB;AACJ;AACA;EACE,yBAAyB;IACvB,cAAc;IACd,kBAAkB;AACtB;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,+BAA+B;EAC/B,6BAA6B;EAC7B,sBAAsB;EACtB,WAAW;EACX,cAAc;EACd,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,QAAQ;EACR,wBAAwB;EACxB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;IACb,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;AACA;;EAEE,eAAe;;AAEjB;AACA;EACE,gBAAgB;;AAElB;AACA;EACE,kBAAkB;IAChB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,iBAAiB;IACf,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,8CAA8C;IAC9C,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;AACA;AACA,iBAAiB;AACjB;AACA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;CACC;EACC,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,kBAAkB;IAChB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,mCAAmC;IACnC,yBAAyB;IACzB,8CAA8C;IAC9C,oCAAoC;IACpC,yBAAiB;YAAjB,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,cAAc;;AAElB;;;AAGA,yCAAyC;AACzC;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,8CAA8C;AAChD;AACA;EACE,qCAAqC;EACrC,sCAAsC;AACxC;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,sBAAsB;;AAExB;AACA;EACE,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;AACA;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,wBAAwB;AAC1B;;AAEA;AACA;IAEI,eAAe;EACjB;AACF;;AAEA;CACC;IAEG,aAAa;EACf;AACF;;AAEA;;EAEE;IAEE,aAAa;EACf;AACF;;;;AAIA,WAAW;AACX;EACE,mBAAmB,EAAE,qBAAqB,EAAE,0BAA0B;AACxE;AACA;EACE,mBAAmB;AACrB;;;AAGA;EACE,wBAAwB;EACxB,kBAAkB;IAChB,kBAAkB;AACtB;AACA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,qBAAqB;EAErB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,aAAa;AACf;;;;AAIA;EACE,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAGlB,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;AACvB,WAAW;AACX;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;;AAGA;EACE,kBAAkB;EAClB,SAAS;EACT,uGAAuG;EACvG,WAAW;EACX,aAAa;AACf;;AAEA;EACE,qKAAqK;EACrK,YAAY;EACZ,aAAa;AACf,oBAAoB;EAClB,kBAAkB;EAClB,SAAS;EACT,SAAS;EAET,sCAAsC;AACxC;;AAEA;EACE,uKAAuK;EACvK,WAAW;EACX,aAAa;AACf,oBAAoB;EAClB,SAAS;EACT,SAAS;EACT,kBAAkB;EAElB,sCAAsC;AACxC;;AAoBA;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;AACZ;AACA;;AAEA,yCAAyC;;AAEzC,2BAA2B;AAC3B;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gCAAgC;EAChC,SAAS;EACT,OAAO;EACP,eAAe;EACf,QAAQ;AACV;AACA;EACE,6BAA6B;EAC7B,eAAe;AACjB;AACA;EACE,kCAAkC;AACpC;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,WAAW;AACb;AACA;EACE;IACE,iBAAiB;EACnB;AACF;AACA;EACE;IACE,kBAAkB;EACpB;AACF;AACA;EACE;IACE,mBAAmB;EACrB;AACF;;;AAGA,yBAAyB;AACzB;EACE,2BAA2B;;AAE7B;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,qBAAqB;EACrB,WAAW;EACX,YAAY;;AAEd;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB,gBAAgB;AAChB,SAAS;AACT,SAAS;AACT,gBAAgB;AAChB,WAAW;AACX,gBAAgB;AAChB,gBAAgB;;AAEhB;AACA;EACE,YAAY;IACV,kBAAkB;IAClB,+DAA+D;IAC/D,gBAAgB;IAChB,eAAe;IACf,8BAA8B;IAC9B,+BAA+B;IAC/B,kBAAkB;AACtB;AACA;EACE,iBAAiB;IACf,eAAe;IACf,YAAY;AAChB;AACA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,6CAA6C;EAC7C,yBAAyB;EACzB,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,cAAc;AAChB;AACA;;EAEE,aAAa;AACf,iBAAiB;AACjB,kBAAkB;AAClB,6CAA6C;AAC7C,yBAAyB;AAIzB,mBAAmB;AAInB,8BAA8B;AAC9B,kBAAkB;AAClB,WAAW;AACX,gBAAgB;AAChB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EAIjB,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,oBAAoB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;EACE,gBAAgB;AAClB,WAAW;AACX,aAAa;AACb,oBAAoB;AACpB,+CAA+C;AAC/C,8BAA8B;AAC9B,uBAAuB;AACvB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;AACvB;AACA;AACA,mBAAmB;AACnB,gBAAgB;AAChB;AACA;EACE,yBAAyB;AAC3B,WAAW;AACX,WAAW;AACX,eAAe;AACf,iBAAiB;AACjB,gBAAgB;AAChB,aAAa;AACb,WAAW;AACX;AACA;AACA;AACA;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,eAAe;AACjB;AACA;AAIA,aAAa;AAIb,mBAAmB;AACnB,UAAU;AACV,gBAAgB;AAChB;AACA;EACE,gBAAgB;EAChB,oBAAoB;EAEpB,uBAAuB;EAEvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;IAChB,cAAc;IACd,gBAAgB;IAChB,WAAW;IACX,UAAU;AACd;AACA;EACE,YAAY;AACd,2DAA2D;AAC3D,8BAA8B;AAC9B;AACA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EAIjB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAIhB,mBAAmB;AACrB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,yBAAyB;EACzB,eAAe;AACjB;AACA;;AAEA,aAAa;AACb,mBAAmB;AACnB,iBAAiB;AACjB,4BAA4B;AAC5B,8BAA8B;AAC9B,2BAA2B;AAC3B,8BAA8B;AAC9B;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB,gBAAgB;AAChB,iBAAiB;AACjB,cAAc;AACd;AACA;EACE,eAAe;EACf,UAAU;EACV,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,uBAAuB;AACzB,mBAAmB;AACnB,aAAa;AACb,UAAU;AACV;AACA;;EAEE,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,mBAAmB,CAAC;EACpB;IACE,qBAAqB;EACvB;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,2BAA2B;EAC7B;EACA;IACE,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;AACF,aAAa;AACb,mBAAmB;AACnB,kBAAkB;AAClB,2BAA2B;IACvB,4CAA4C;IAC5C,uBAAuB;IACvB,qBAAqB;AACzB,aAAa;AACb,8BAA8B;AAC9B,+BAA+B;AAC/B,8BAA8B;EAC5B;EACA;IACE,eAAe;IACf,iBAAiB;IACjB,oBAAoB;EACtB;IACE;MACE,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,YAAY;MACZ,iBAAiB;MACjB,kBAAkB;MAClB,yBAAyB;MACzB,aAAa;MACb,uBAAuB;MACvB,eAAe;MACf,UAAU;MACV,gBAAgB;MAChB,cAAc;IAChB;;;;IAIA,2BAA2B;IAC3B;MACE,eAAe;MACf,kBAAkB;IACpB;GACD;aACU;;IAET;IACA;MACE,eAAe;IACjB;IACA;MACE,SAAS;IACX;IACA;MACE,cAAc;IAChB;GACD;;MAEG,eAAe;MACf,YAAY;IACd;;IAEA;MACE,aAAa;IACf;;IAEA,wBAAwB;GACzB;MACG,WAAW;MACX,UAAU;MACV,eAAe;IACjB;;GAED;MACG,eAAe;MACf,WAAW;MACX,UAAU;IACZ;;IAEA,4BAA4B;GAC7B;MACG,iBAAiB;IACnB;;IAEA,mCAAmC;EACrC;MACI,WAAW;MACX,cAAc;MACd,WAAW;IACb;;IAEA,sBAAsB;EACxB;MACI,WAAW;MACX,yBAAyB;MACzB,kBAAkB;MAClB,YAAY;IACd;;IAEA,oBAAoB;GACrB,oBAAoB,UAAU,EAAE,WAAW,EAAE,yBAAyB,CAAC;GACvE,oBAAoB,UAAU,EAAE,WAAW,EAAE,yBAAyB,CAAC;GACvE,oBAAoB,UAAU,EAAE,WAAW,EAAE,yBAAyB,CAAC;GACvE,oBAAoB,SAAS,EAAE,WAAW,EAAE,yBAAyB,CAAC;GACtE,oBAAoB,UAAU,EAAE,WAAW,EAAE,yBAAyB,CAAC;;;;;IAKtE,kGAAkG;IAClG;IACA;QACI,WAAW;MACb;GACH;QACK,aAAa;MACf,CAAC;;;IAGH;MACE,sBAAsB;IACxB;IACA;MACE,eAAe;IACjB,wBAAwB;IACxB;IACA;MACE,eAAe;IACjB;IACA;MACE,0BAA0B;IAC5B;IACA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,qCAAqC;QACrC,gBAAgB;QAChB,SAAS;QACT,mBAAmB;IACvB;;EAEF;QACM,4BAA4B;QAC5B,6BAA6B;IACjC;;EAEF;QACM,yBAAyB;QACzB,0BAA0B;IAC9B;;GAED;QACK,kBAAkB;IACtB;;;GAGD;QACK,cAAc;QACd;IACJ;;GAED;QACK;IACJ;;GAED;QACK,cAAc;QACd,gBAAgB;QAChB;IACJ;;GAED;;;QAGK;IACJ;;EAEF;QACM,gBAAgB;QAChB;IACJ;;IAEA;QACI,iBAAiB;IACrB;;GAED;QACK,sBAAsB;QACtB,iBAAiB;QACjB,kBAAkB;QAClB,yBAAyB;QACzB,eAAe;QACf,oBAAoB;QACpB,sBAAsB;QAEtB,oBAAoB;IACxB;GACD;QACK,cAAc;IAClB;EACF;QACM,gBAAgB;IACpB;GACD;QACK,iBAAiB;IACrB;;IAEA;QACI,6BAA6B;QAC7B,yBAAyB;QACzB,cAAc;IAClB;;EAEF;QACM,iBAAiB;QACjB,kBAAkB;IACtB;;GAED;QACK,4BAA4B;IAChC;;IAEA;QACI,gBAAgB;IACpB;;EAEF,0BAA0B;EAC1B;;MAEI,sBAAsB;MACtB,kBAAkB;MAClB,8CAA8C;MAC9C,oBAAoB;IACtB;IACA;MACE,uCAAuC;MACvC,YAAY;IACd;IACA;IACA,sCAAsC;IACtC,0BAA0B;GAC3B;GACA;IACC,4BAA4B;IAC5B,eAAe;IACf,iBAAiB;GAClB;GACA;KACE,cAAc;GAChB;;;GAGA,iBAAiB;GACjB;KACE,cAAc;KACd,uBAAuB;GACzB;GACA;KACE,sBAAsB;KACtB,SAAS;KACT,kBAAkB;KAClB,8CAA8C;MAC7C,iBAAiB;KAClB,mBAAmB;KACnB,qBAAqB;;GAEvB;EACD;IACE,UAAU;IACV,8BAA8B;IAC9B,gBAAgB;EAClB;EACA;IACE,0BAA0B;IAC1B,4BAA4B;EAC9B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,aAAa;IACb,eAAe;EACjB;EACA;IACE,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,wBAAwB;EAC1B;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,0BAA0B;AAC9B,eAAe;AACf,gBAAgB;AAChB,WAAW;EACT;EACA;IACE,iBAAiB;AACrB,eAAe;AACf,gBAAgB;AAChB,cAAc;EACZ;EACA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,cAAc;EAChB;EACA;IACE,kBAAkB;IAClB,mCAAmC;IACnC,yBAAyB;IACzB,8CAA8C;IAC9C,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,gBAAgB;EAClB","sourcesContent":["\n* {\n    padding: 0px;\n    margin: 0px;\n  }\n  body {\n    background-color:     #f4f4f4 !important;\n  \n  }\n\n  /* Confirm Booking */\n  .CBooking{\n    height: 204px;\n  }\n  .CBookings{\n    height: 208px;\n  }\n\n  .mr{\n    margin-left:8px;\n  }\n  /* Rating  */\n  .rating{\n    position: absolute;\n    top:16%;\n    left:17%;\n    transform:translate(-50%, -50%) rotateY(180deg);\n    display:flex;\n  }\n  .ratings{\n    top:28%;\n  }\n  .rating input{\n    display: none;\n  }\n  .rating label{\n    display: block;\n    cursor: pointer;\n    width:34px;\n   }\n \n  \n  .rating label:before{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: relative;\n    display: block;\n    font-size:19px;\n    color:wheat;\n  }\n  .rating label:after{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: absolute;\n    display: block;\n    font-size:19px;\n    color:#1f9cff;\n    top:0;\n    opacity:0;\n    transition:.5s;\n    text-shadow: 0 2px 5px rgba(0,0,0,.5);\n  }\n  \n  .rating label:hover:after,\n  .rating label:hover ~ label:after,\n  .rating input:checked ~ label:after{\n    opacity:1;\n  }\n/* Rating  */\n  .rating{\n    position: absolute;\n    top:16%;\n    left:17%;\n    transform:translate(-50%, -50%) rotateY(180deg);\n    display:flex;\n  }\n  .ratings{\n    top:32%;\n  }\n  .rating input{\n    display: none;\n  }\n  .rating label{\n    display: block;\n    cursor: pointer;\n    width:34px;\n   }\n \n  \n  .rating label:before{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: relative;\n    display: block;\n    font-size:19px;\n    color:wheat;\n  }\n\n  .rating label:after{\n    content:'\\f005';\n    font-family:'Font Awesome 5 Pro';\n    position: absolute;\n    display: block;\n    font-size:19px;\n    color:#1f9cff;\n    top:0;\n    opacity:0;\n    transition:.5s;\n    text-shadow: 0 2px 5px rgba(0,0,0,.5);\n  }\n  \n   .rating label:hover:after,\n  .rating label:hover ~ label:after,\n  .rating input:checked ~ label:after{\n    opacity:1;\n  } \n\n  \n\n  /* navbar */\n  .navbar .navbar-header .navbar-brand{\n    padding-top: 6px;\n    font-size: 19px;\n  }\n  \n  .navbar ul{\n    justify-content: space-around;\n  }\n  .navbar .collapse{\n    font-size: 16px;\n  }\n  .navbar .dropdown-menu{\n    font-size: 14px;\n  }\n\n  /* Register */\n \n  .login-box {\n    position: absolute;\n    top: 65%;\n    left: 50%;\n    width: 400px;\n    padding: 40px;\n    transform: translate(-50%, -50%);\n    background: rgba(0,0,0,.5);\n    box-sizing: border-box;\n    box-shadow: 0 15px 25px rgba(0,0,0,.6);\n    border-radius: 10px;\n  }\n  \n  .login-box h2 {\n    margin: 0 0 30px;\n    padding: 0;\n    color: #fff;\n    text-align: center;\n  }\n  \n  .login-box .user-box {\n    position: relative;\n  }\n  .login-box .user-box-select {\n    display: flex;\n    flex-direction: column;\n    color: #03e9f4;\n    font-size: 12px;    \n    font-weight: 600;\n  }\n  .login-box .user-box-select .user-box-select-item {\n    margin: 1.2rem 0;\n    color: #333333;\n    font-size: 12px;    \n    font-weight: 600;\n  }\n  .login-box .user-box p{\n    font-size: 12px;    \n    font-weight: 600;\n  }\n  .login-box .user-box input {\n    width: 100%;\n    padding: 10px 0;\n    font-size: 16px;\n    color: #fff;\n    margin-bottom: 30px;\n    border: none;\n    border-bottom: 1px solid #fff;\n    outline: none;\n    background: transparent;\n  }\n  .login-box .user-box label {\n    position: absolute;\n    top:0;\n    left: 0;\n    padding: 10px 0;\n    font-size: 16px;\n    color: #fff;\n    pointer-events: none;\n    transition: .5s;\n  }\n  \n  .login-box .user-box input:focus ~ label,\n  .login-box .user-box input:valid ~ label {\n    top: -20px;\n    left: 0;\n    color: #03e9f4;\n    font-size: 12px;\n  }\n  \n  .login-box form a {\n    position: relative;\n    display: inline-block;\n    padding: 10px 20px;\n    color: #03e9f4;\n    font-size: 16px;\n    text-decoration: none;\n    text-transform: uppercase;\n    overflow: hidden;\n    transition: .5s;\n    margin-top: 40px;\n    letter-spacing: 4px\n  }\n  \n  .login-box a:hover {\n    background: #03e9f4;\n    color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 0 5px #03e9f4,\n                0 0 25px #03e9f4,\n                0 0 50px #03e9f4,\n                0 0 100px #03e9f4;\n  }\n  \n  .login-box a span {\n    position: absolute;\n    display: block;\n  }\n  \n  .login-box a span:nth-child(1) {\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(90deg, transparent, #03e9f4);\n    animation: btn-anim1 1s linear infinite;\n  }\n  \n  @keyframes btn-anim1 {\n    0% {\n      left: -100%;\n    }\n    50%,100% {\n      left: 100%;\n    }\n  }\n  \n  .login-box a span:nth-child(2) {\n    top: -100%;\n    right: 0;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(180deg, transparent, #03e9f4);\n    animation: btn-anim2 1s linear infinite;\n    animation-delay: .25s\n  }\n  \n  @keyframes btn-anim2 {\n    0% {\n      top: -100%;\n    }\n    50%,100% {\n      top: 100%;\n    }\n  }\n  \n  .login-box a span:nth-child(3) {\n    bottom: 0;\n    right: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(270deg, transparent, #03e9f4);\n    animation: btn-anim3 1s linear infinite;\n    animation-delay: .5s\n  }\n  \n  @keyframes btn-anim3 {\n    0% {\n      right: -100%;\n    }\n    50%,100% {\n      right: 100%;\n    }\n  }\n  \n  .login-box a span:nth-child(4) {\n    bottom: -100%;\n    left: 0;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(360deg, transparent, #03e9f4);\n    animation: btn-anim4 1s linear infinite;\n    animation-delay: .75s\n  }\n  \n  @keyframes btn-anim4 {\n    0% {\n      bottom: -100%;\n    }\n    50%,100% {\n      bottom: 100%;\n    }\n  }\n  \n  /* Admin Dashboard */\n  .Dashboard .list-group{\n    margin-left: 20px;\n  }\n  .Dashboard .list-group-item{\n    padding: 33px 40px;\n    font-size: 16px;\n  } \n  .Dashboard .tab-content{\n    margin: 0px 15px\n  }\n\n  /* Booking */\n.table{\n \n  font-size: 14px;\n  margin: -9px 28px;\n}\n\n/* Registration Form for Hotel and Admin */\n.register form{\n  width: 557px;\n  font-size: 16px;\n  margin-left: 47px;\n}\n.register .form-control{\n  padding: 19px 13px !important;\n  font-size: 12px !important;\n}\n.register .form-controls{\n  padding: 5px 8px !important;\n}\n.register .reg {\n  padding: 8px 33px;\n    font-size: 12px;\n    font-weight: 800;\n}\n\n/* Profile */\n.profile label{\n  font-size:18px;\n}\n.profile .row {\n  padding:15px 8px;\n}\n.profile p{\n  font-weight: 600;\n  color: #0062cc;\n  font-size:16px;\n}\n\n/* HotelInformation */\n.hotelinformation form{\n  width:367px;\n}\n.hotelinformation .form-group{\n  font-size: 16px;\n}\n.hotelinformation .form-group input[type=\"text\"]{\n  padding: 20px 16px;\n  font-size: 13px;\n}\n.hotelinformation .form-group textarea{\n  padding: 39px 8px;\n}\n.hotelinformation .form-group button{\n  padding: 11px 27px;\n  font-size: 16px;\n}\n\n/* Hotel Package */\n.hotelpackage .form-group button{\n  padding: 4px 26px;\n  font-size: 16px;\n}\n.hotelpackage table{\n  margin: 6px 0px 0px -16px;\n    width: 421px;\n\n}\n.hotelpackage input[type=\"text\"]{\n  padding: 18px 16px;\n  font-size:14px;\n}\n .hotelpackage button {\n  font-size: 15px;\n}\n\n/* Gallery Upload */\n.gallery .custom-file{\n  font-size: 16px;\n}\n.gallery .btn {\n  font-size: 16px;\n}\n.gallery \n.custom-file-label::after{\n  background-color: #197195;\n  color: white;\n  font-weight: bold;\n}\n.gallery input[type=\"file\"]{\n  width: 401px;\n}\n\n/* Room Type Information */\n.roomtype .btn {\n  font-size: 16px;\n}\n\n/* Room Type Form */\n.roomtypeform{\n  width: 534px !important;\n    margin-top: 70px !important;\n}\n.roomtypeform label{\n  font-size:16px;\n}\n.roomtypeform input[type=\"text\"], input[type=\"file\"]{\n  padding: 16px 15px;\n  font-size: 16px;\n}\n.roomtypeform button{\n  font-size: 16px;\n  font-weight: 600;\n}\n\n\n\n/* Customer Dashboard */\n.customerdashboard{\n  margin-left: -174px;\n  margin-top: 0px;\n}\n.customerdashboard .nav .nav-item{\n  font-size: 16px;\n  font-weight: 500;\n  padding: 10px 16px;\n  text-align: center;\n  text-decoration: none;\n}\n.customerdashboard nav{\n  background-color: white;\n  margin-left: 8px;\n}\n\n\n.customerdashboard .sideinformation a{\n    font-size: 16px;\n}\n.customerdashboard .font30{\n  font-weight: 700;\n  font-size: 30px;\n  line-height:30px;\n}\n.customerdashboard .font18{\n  font-size:18px;\n  line-height: 18px;\n  color: #4a4a4a;\n}\n\n.customerdashboard section .tab-content::before{\n  content: '';\nwidth: 6px;\nheight: 50px;\nbackground-color: #adadad;\nposition: absolute;\ntop: 42px;\nleft: 15px;\n}\n.customerdashboard .nav-pills-custom .nav-link {\n  color: #aaa;\n  background: #fff;\n  position: relative;\n}\n\n.customerdashboard .nav-pills-custom .nav-link.active {\n  color: #45b649;\n  background: #fff;\n}\n.customerdashboard .verticaltab label{\n  font-size: 16px;\n}\n.customerdashboard .verticaltab p{\n  font-size: 13px;\n}\n\n.customerdashboard #v-pills-messages .reviewimage, .customerdashboard #v-pills-settings .reviewimage{\n  width: 292px;\n    height: 192px;\n    margin: -25px 0 0 -22px;\n}\n/* Reviews*/\n.customerdashboard #v-pills-messages .heads,.customerdashboard #v-pills-settings .heads{\n  margin: -18px 0 0 -22px;\n  color: #0080ff;\n}\n/* Reviews */\n.customerdashboard #v-pills-messages .format-address,.customerdashboard #v-pills-settings .format-address{\n  margin: 0 0 0 -22px;\n  color: #736F6E;\n}\n\n\n/* Reviewed form  */\n.customerdashboard #v-pills-messages .feedbackforms{\n  padding: 45px 0 0 0px;\n  margin-left: -18px;\n}\n.customerdashboard #v-pills-messages .feedbackforms label{\n  font-size: 14px;\n}\n.customerdashboard #v-pills-messages .feedbackforms input[type=text]{\n  padding: 19px 6px 19px 18px;\n  font-size: 13px;\n}\n.customerdashboard #v-pills-messages .feedbackforms textarea{\n  padding: 13px 13px 0 13px;\n  font-size: 14px;\n}\n.customerdashboard #v-pills-messages .feedbackforms .options{\n  height: 33px;\n  font-size: 12px;\n}\n.customerdashboard #v-pills-messages .feedbackforms button{\n  padding: 6px 30px 6px 30px;\n  font-size: 17px;\n  font-weight: 600;\n}\n\n/* Confirm Booking */\n\n.customerdashboard #v-pills-settings .roomtype{\n    margin-left: -20px;  \n    font-weight: 600;\n}\n.customerdashboard #v-pills-settings .hotelservices{\n  margin-left: -20px;  \n  color: #008009;\n}\n.customerdashboard #v-pills-settings .confirmbooking{\n  margin-top: -11px;\n  color: #FF7B33;\n}\n.customerdashboard #v-pills-settings .gs{\n  margin: -10px 0 0 -20px;\n  color:#6b6b6b\n}\n.customerdashboard #v-pills-settings .price{\n  margin: -2px 0 0 -20px;\n  font-size: 22px;\n  font-weight: 600;\n}\n\n/* Add indicator arrow for the active tab */\n@media (min-width: 992px) {\n .customerdashboard .nav-pills-custom .nav-link::before {\n      content: '';\n      display: block;\n      border-top: 8px solid transparent;\n      border-left: 10px solid #fff;\n      border-bottom: 8px solid transparent;\n      position: absolute;\n      top: 50%;\n      right: -10px;\n      transform: translateY(-50%);\n      opacity: 0;\n  }\n}\n\n.customerdashboard .nav-pills-custom .nav-link.active::before {\n  opacity: 1;\n}\n.customerdashboard section{\n  margin: -44px 0px 0px -16px;\n}\n\n\n/* Booking */\n.Booking #v-pills-settings, .cancellations #v-pills-settings{\n  width: 816px;\n    margin-left: 144px;\n}\n.Booking #v-pills-settings .format-address ,.Booking #v-pills-settings .stay,.Booking #v-pills-settings .guest, .Booking #v-pills-settings .roomtype,.Booking #v-pills-settings  .hotelservices,\n.Booking #v-pills-settingsconfirmbooking, .cancellations #v-pills-settings .format-address ,.cancellations #v-pills-settings .stay,.cancellations #v-pills-settings .guest, .cancellations #v-pills-settings .roomtype,.cancellations #v-pills-settings  .hotelservices,\n.cancellations #v-pills-settingsconfirmbooking\n{\n  font-size:12px\n}\n.Booking #v-pills-settings  .services, .cancellations #v-pills-settings  .services{\n    display: flex;\n    list-style: none;\n    margin: 0px 0px 11px -20px;\n  }\n  .Booking #v-pills-settings .services .serv, .cancellations #v-pills-settings .services .serv{\n    margin: 0 6px 0px 0;\n    color: #008009;\n    font-size: 12px;\n    font-weight: 600;    \n  }\n  .Booking #v-pills-settings .gs, .cancellations #v-pills-settings .gs{\n    margin-top:-6px;\n  }\n\n  .Booking #v-pills-settings .confirmbooking, .cancellations #v-pills-settings .confirmbooking{\n    margin: -3px 14px 0px -6px;\n  }\n  .Booking #v-pills-settings .cancel,  .cancellations #v-pills-settings .cancel{\n    padding: 4px 15px 1px 10px;\n    font-size: 12px;\n    font-weight: 600;\n    margin: -6px 0px 7px 22px;\n  }\n  .Booking #v-pills-settings .reviewimage, .cancellations #v-pills-settings .reviewimage{\n    height: 197px;\n  }\n\n\n  /* MY Wallet */\n\n\n  .mywallet{\n    width:450px;\n    background: #fff;\n    border-radius: 10px;\n    margin-left: 330px;\n  }\n  .mywallet .mywalletheader{\n    border-radius: 10px 10px 0 0;\n    padding: 30px 0;\n    background-image: linear-gradient(255deg, #3023ae, #c86dd7);\n  }\n  .mywallet .font34{\n    font-size: 34px;\n    color: white;\n    line-height: 33px;\n  }\n  .mywallet .font14{\n    font-size: 16px;\n    color: #fff;\n    opacity: 0.7;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    line-height: 4px;\n  }\n  .mywallet .dollaricon{\n     width: 50px;\n    height: 50px;\n    margin: 8px 5px 5px 12px;\n  }\n.mywallet .walletBalanceSection p{\n  font-size: 24px;\n}\n.mywallet .walletBalanceSection .wp{\n  font-size: 25px;  \n  margin: 12px 0 0 144px;\n}\n\n\n/* Main Home Page */\n\n.homepage{\n background-image: url('../image/bg-agoda-homepage.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  width: 100%;\n  height: 320px;\n  content: \"\";\n  border-bottom-left-radius: 48px;\n  margin-top:-20px;\n}\n.homepage .welcomemessage{\n  color:#fff;\n  text-align: center;\n  margin-top: 76px\n}\n.homepage .welcomemessage h1{\n  line-height: 1.3;\n   overflow: hidden;\n  -webkit-animation: fadein 1s;\n  animation: fadein 1s;\n  text-transform: uppercase;\n  font-size: 24px;\n}\n\n/* Booking */\n.homepage .hotelsearch{\n  width: 90%;\n  position: relative;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n  border-radius: 16px;\n  background-color: rgb(248, 247, 249);\n  padding: 32px 48px 48px;\n  margin-top: 70px;\n  margin-left: 56px;\n}\n\n.homepage .searchbox{\n  padding: 0;\n  height: 66px;\n  border-color: #dddfe2;\n  border-radius: 8px;\n  box-shadow: none;\n  border: 1px solid;\n  font-size: 16px;\n  margin: 0 0 12px;\n  background-color: #fff;\n  cursor: pointer;\n}\n.homepage .fa-search{\n\n  color: #333;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 1;\n  padding-right: 16px;\n  padding: 20px 15px;\n  display: inline-block;\n  vertical-align: middle;\n \n}\n.homepage .inputs{\n  width: calc(100% - 60px);\n    vertical-align: middle;\n    display: inline-block;\n}\n.homepage input[type=\"text\"]{\n font-size: 16px;\n    color: #2a2a2e;\n    background-color: #fff;\n    line-height: 1.25;\n    font-weight: 400;\n    padding: 19px 14px;\n    border:none\n}\n.homepage .date-range input{\n  border: 1px solid #d3dde6;\n    color: #0e3254;\n    border-radius: 6px;\n}\n.homepage .date-range .date-range_arrow {\n  flex-shrink: 0;\n  position: relative;\n  width: 36px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.homepage .date-range .date-range_arrow::before{\n  border-right: 2px solid #d3dde6;\n  border-top: 2px solid #d3dde6;\n  box-sizing: border-box;\n  content: \"\";\n  display: block;\n  height: 18px;\n  left: 50%;\n  margin-left: -14px;\n  margin-top: -9px;\n  position: absolute;\n  top: 50%;\n  transform: rotate(45deg);\n  width: 18px;\n}\n\n.homepage .guest button{\n  margin-bottom: 1rem;\n  padding: 0;\n  height: 66px;\n  border-radius: 8px;\n  box-shadow: none;\n  border: 1px solid;\n  width: 100%;\n  font-size: 16px;\n  background-color: white;\n  color: black;\n  border-color: #dddfe2;\n  margin-left: -97px;\n  margin-top: -2px;\n}\n.homepage .sr{\n  margin-left: -25px;\n}\n\n.homepage .fon{\n  font-size: 14px;\n    color: #999;\n    line-height: 1.25;\n    margin-top: -10px;\n}\n.homepage .material-icons{\n\n  margin-top: 8px;\n\n}\n.homepage .down .fa-chevron-down{\n  margin-top: 15px;\n\n}\n.homepage .hotelsearch .collapse{\n  margin-right: 95px;\n    margin-left: -100px;\n    border-radius: 15px;\n}\n\n.homepage .hotelsearch .collapse .card{\n  border-radius: 12px;\n  font-size: 12px;\n}\n.homepage .hotelsearch .collapse .minus, .homepage .hotelsearch .collapse .plus{\n  margin-left: 66px;\n    height: 29px;\n    width: 28px;\n    border-radius: 50%;\n    box-shadow: 1px 3px 20px rgba(17, 17, 17, 0.4);\n    background: #fff;\n    border: none;\n    outline: none;\n    font-size: 20px;\n}\n.homepage .hotelsearch .collapse .plus{\nmargin-left: 12px;\n}\n.homepage .hotelsearch .collapse .counter{\n  padding: 17px;\n}\n\n.homepage .hotelsearch .collapse .roo{\n  margin: 4px 0 0px 15px;\n  font-size: 15px;\n}\n .con .searchbutton{\n  display: flex;\n  justify-content: center;\n  margin-top: -35px;\n}\n.con .searchbutton .searchs{\n  position: relative;\n    border: medium none;\n    padding: 12px;\n    border-radius: 8px;\n    background-color: rgb(83, 146, 249);\n    color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;\n    transition: all 0.15s ease-in-out 0s;\n    user-select: none;\n    width: 490px;\n    height: 64px;\n    font-size:30px;\n    \n}\n\n\n/* All Hotel Trending Now and Recommeded*/\n.hotelsall{\n  margin-top:33px;\n}\n\n.hotelsall .card-deck {\n  margin: 0 -15px;\n  justify-content: space-between;\n  font-size:12px;\n}\n\n.hotelsall .card-deck .card {\n  margin: 0 0 1rem;\n}\n\n.hotelsall .card-title{\n  font-weight:bold;\n}\n.hotelsall .card-title{\n  cursor: pointer;\n}\n.hotelsall .card-deck .card{\n  border-radius: 16px;\n  border:none;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n}\n.hotelsall .card-deck .card .card-img-top{\n  border-top-left-radius: 8% !important;\n  border-top-right-radius: 8% !important;\n}\n.hotelsall .card-deck .card .card-text{\n  font-size:14px;\n  margin-top: -8px;\n  color:black;\n}\n\n.hotelsall .card-deck .card .MR{\n  margin: 195px 0 0 37px;\n\n}\n.hotelsall .card-deck .card .card-price{\n  margin-top:28px;\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f9cff;\n}\n.hotelsall .card-deck .card .card-infos{\nmargin-top: -13px;\nfont-size: 11px;\n}\n.hotelsall .card-deck .card .FC{\n  color: black !important;\n  font-weight: 600;\n  font-size: 12px;\n}\n.hotelsall .card-deck .card img{\n  height: 181px !important;\n}\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n.hotelsall  .card-deck .card {\n    -ms-flex: 0 0 48.7%;\n    flex: 0 0 48.7%;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n .hotelsall .card-deck .card {\n    -ms-flex: 0 0 32%;\n    flex: 0 0 32%;\n  }\n}\n\n@media (min-width: 992px)\n{\n  .hotelsall .card-deck .card {\n    -ms-flex: 0 0 24%;\n    flex: 0 0 24%;\n  }\n}\n\n\n\n/* Footer */\n.footer .a{\n  visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;\n}\n.footer .new_footer_area {\n  background: #fbfbfd;\n}\n\n\n.footer .new_footer_top {\n  padding: 120px 0px 270px;\n  position: relative;\n    overflow-x: hidden;\n}\n.footer .new_footer_area .footer_bottom {\n  padding-top: 5px;\n  padding-bottom: 50px;\n}\n.footer .footer_bottom {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 20px;\n  color: #7f88a6;\n  padding: 27px 0px;\n}\n.footer .new_footer_top .company_widget p {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 28px;\n  color: #6a7695;\n  margin-bottom: 20px;\n}\n.footer .new_footer_top .company_widget .f_subscribe_two .btn_get {\n  border-width: 1px;\n  margin-top: 20px;\n}\n.footer .btn_get_two:hover {\n  background: transparent;\n  color: #5e2ced;\n}\n.footer .btn_get:hover {\n  color: #fff;\n  background: #6754e2;\n  border-color: #6754e2;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.footer a:hover, .footer a:focus, .footer .btn:hover,.footer .btn:focus,.footer button:hover,.footer button:focus {\n  text-decoration: none;\n  outline: none;\n}\n\n\n\n.footer .new_footer_top .f_widget.about-widget .f_list li a:hover {\n  color: #5e2ced;\n}\n.footer .new_footer_top .f_widget.about-widget .f_list li {\n  margin-bottom: 11px;\n}\n.footer .f_widget.about-widget .f_list li:last-child {\n  margin-bottom: 0px;\n}\n.footer .f_widget.about-widget .f_list li {\n  margin-bottom: 15px;\n}\n\n.footer .f_widget.about-widget .f_list {\n  margin-bottom: 0px;\n}\n.footer .new_footer_top .f_social_icon a {\n  width: 44px;\n  height: 44px;\n  line-height: 43px;\n  background: transparent;\n  border: 1px solid #e2e2eb;\n  font-size: 24px;\n}\n.footer .f_social_icon a {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  font-size: 14px;\n  line-height: 45px;\n  color: #858da8;\n  display: inline-block;\n  background: #ebeef5;\n  text-align: center;\n  -webkit-transition: all 0.2s linear;\n  -o-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n.footer .ti-facebook:before {\n  content: \"\\e741\";\n}\n.footer .ti-twitter-alt:before {\n  content: \"\\e74b\";\n}\n.footer .ti-vimeo-alt:before {\n  content: \"\\e74a\";\n}\n.footer .ti-pinterest:before {\n  content: \"\\e731\";\n}\n\n.footer .btn_get_two {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  background: #5e2ced;\n  border-color: #5e2ced;\n  color: #fff;\n}\n\n.footer .btn_get_two:hover {\n  background: transparent;\n  color: #5e2ced;\n}\n\n.footer .new_footer_top .f_social_icon a:hover {\n  background: #5e2ced;\n  border-color: #5e2ced;\ncolor:white;\n}\n.footer .new_footer_top .f_social_icon a + a {\n  margin-left: 4px;\n}\n.footer .new_footer_top .f-title {\n  margin-bottom: 30px;\n  color: #263b5e;\n}\n.footer .f_600 {\n  font-weight: 600;\n}\n.footer .f_size_18 {\n  font-size: 18px;\n}\n.footer h1,.footer h2,.footer h3,.footer h4,.footer h5,.footer h6 {\n  color: #4b505e;\n}\n.footer .new_footer_top .f_widget.about-widget .f_list li a {\n  color: #6a7695;\n}\n\n\n.footer .new_footer_top .footer_bg {\n  position: absolute;\n  bottom: 0;\n  background: url(\"http://droitthemes.com/html/saasland/img/seo/footer_bg.png\") no-repeat scroll center 0;\n  width: 100%;\n  height: 266px;\n}\n\n.footer .new_footer_top .footer_bg .footer_bg_one {\n  background: url(\"https://1.bp.blogspot.com/-mvKUJFGEc-k/XclCOUSvCnI/AAAAAAAAUAE/jnBSf6Fe5_8tjjlKrunLBXwceSNvPcp3wCLcBGAsYHQ/s1600/volks.gif\") no-repeat center center;\n  width: 330px;\n  height: 105px;\nbackground-size:100%;\n  position: absolute;\n  bottom: 0;\n  left: 30%;\n  -webkit-animation: myfirst 22s linear infinite;\n  animation: myfirst 22s linear infinite;\n}\n\n.footer .new_footer_top .footer_bg .footer_bg_two {\n  background: url(\"https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif\") no-repeat center center;\n  width: 88px;\n  height: 100px;\nbackground-size:100%;\n  bottom: 0;\n  left: 38%;\n  position: absolute;\n  -webkit-animation: myfirst 30s linear infinite;\n  animation: myfirst 30s linear infinite;\n}\n\n@-moz-keyframes myfirst {\n0% {\n  left: -25%;\n}\n100% {\n  left: 100%;\n}\n}\n\n@-webkit-keyframes myfirst {\n0% {\n  left: -25%;\n}\n100% {\n  left: 100%;\n}\n}\n\n@keyframes myfirst {\n0% {\n  left: -25%;\n}\n100% {\n  left: 100%;\n}\n}\n\n/*************footer End*****************/\n\n/* Hotel Detail Dashboard */\n.carousel {\n  position: relative;\n}\n.carousel-item img {\n  object-fit: cover;\n}\n#carousel-thumbs {\n  background: rgba(255,255,255,.3);\n  bottom: 0;\n  left: 0;\n  padding: 0 50px;\n  right: 0;\n}\n#carousel-thumbs img {\n  border: 5px solid transparent;\n  cursor: pointer;\n}\n#carousel-thumbs img:hover {\n  border-color: rgba(255,255,255,.3);\n}\n#carousel-thumbs .selected img {\n  border-color: #fff;\n}\n.carousel-control-prev,\n.carousel-control-next {\n  width: 50px;\n}\n@media all and (max-width: 767px) {\n  .carousel-container #carousel-thumbs img {\n    border-width: 3px;\n  }\n}\n@media all and (min-width: 576px) {\n  .carousel-container #carousel-thumbs {\n    position: absolute;\n  }\n}\n@media all and (max-width: 576px) {\n  .carousel-container #carousel-thumbs {\n    background: #ccccce;\n  }\n}\n\n\n/* Hotel Booking detail */\n.hotelbookingdetail .container-fluid {\n  margin-top:-20px !important;\n\n}\n.hotelbookingdetail .h1{\n  font-size:32px;\n  line-height:1.75;\n}\n.hotelbookingdetail .address{\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: 0.4px;\n  color: #222;\n  opacity: 0.5;\n \n}\n.hotelbookingdetail .about{\n  line-height: 22px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  text-align: justify;\n  font-weight: 400;\n  color: rgba(0,0,0,0.7);\n}\n.hotelbookingdetail .booknow{\n  position: sticky;\nmin-width: 438px;\nright: 5%;\ntop: 76px;\nmargin-top: 24px;\nz-index: 20;\nmax-width: 450px;\nbackground: #fff;\n\n}\n.hotelbookingdetail .booknow .deal{\n  opacity: 0.9;\n    border-radius: 4px;\n    background: linear-gradient(265deg,#ef4123,#ee3f25 48%,#d11450);\n    padding: 8px 0px;\n    cursor: pointer;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    text-align: center;\n}\n.hotelbookingdetail .booknow .deal p{\n  font-weight: bold;\n    font-size: 16px;\n    color: white;\n}\n.hotelbookingdetail .booknow .bokinfo{\n  padding: 16px 24px;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(125,125,125,0.1);\n  border: solid 1px #f0f0f0;\n  border-top-right-radius: 0px;\n  border-top-left-radius: 0px;\n  box-sizing: border-box;\n}\n.hotelbookingdetail .booknow .bokinfo .tax{ \n  font-size: 12px;\n  color: #6d787d;\n}\n.hotelbookingdetail .booknow .bokinfo .roomtype\n{\n  display: flex;\npadding: 12px 0px;\nborder-radius: 4px;\nbox-shadow: 0 2px 6px 0 rgba(125,125,125,0.1);\nborder: solid 1px #f0f0f0;\n-webkit-align-items: center;\n-webkit-box-align: center;\n-ms-flex-align: center;\nalign-items: center;\n-webkit-box-pack: justify;\n-webkit-justify-content: space-between;\n-ms-flex-pack: justify;\njustify-content: space-between;\nposition: relative;\nwidth: 100%;\nmargin-top: 16px;\n}\n.hotelbookingdetail .booknow .bokinfo .roomtype .bed{\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.71;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0px 18px;\n}\n.hotelbookingdetail .booknow .bokinfo .roomtype .bed .fas{\n  display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    height: 20px;\n    width: 20px;\n    opacity: 0.5;\n}\n\n.hotelbookingdetail .booknow .bokinfo .reward{\n  margin: 32px 0 0;\nwidth: 100%;\ndisplay: flex;\npadding-bottom: 16px;\nborder-bottom: dashed 1px rgba(151,151,151,0.4);\njustify-content: space-between;\nalign-items: flex-start;\n}\n.hotelbookingdetail .booknow .bokinfo .reward p{\n  font-size: 16px;\n  font-weight: 600;\n  color: rgba(0,0,0,0.38);\n  margin: 9px 206px 0 0;\n}\n.hotelbookingdetail .booknow .bokinfo .reward  h4{\nmargin:9px 1px 0 0 ;\nfont-weight: 600;\n}\n.hotelbookingdetail .booknow .bokinfo .cn{\n  background-color: #1ab64f;\nborder: 0px;\ncolor: #fff;\nfont-size: 16px;\nfont-weight: bold;\nline-height: 1.2;\npadding: 14px;\nwidth: 100%;\n}\n.hotelbookingdetail .booknow .bokinfo a{\ncolor:white\n}\n.package .ser{\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.package .ser span{\n  display: -webkit-box;\ndisplay: -webkit-flex;\ndisplay: -ms-flexbox;\ndisplay: flex;\n-webkit-align-items: center;\n-webkit-box-align: center;\n-ms-flex-align: center;\nalign-items: center;\nwidth: 33%;\nmargin-top: 18px;\n}\n.package .ser span i{\n  content: \"\\f26c\";\n  display: inline-flex;\n  -moz-box-pack: center;\n  justify-content: center;\n  -moz-box-align: center;\n  align-items: center;\n  height: 20px;\n  width: 20px;\n  font-size: 17px;\n  margin: -12px 9px 0 0;\n}\n.package .ser span p{\n  font-size:14px;\n  line-height: 1.5;\n}\n\n.RY .c-gcrtsc{\n  border-radius: 5px;\n    margin: 20px 0;\n    background: #fff;\n    color: #222;\n    width: 81%;\n}\n.RY .c-gcrtsc .c-1bdbnnk{\n  height: 26px;\nbackground-image: linear-gradient(to right,#797f9d,#d4d1da);\nborder-radius: 4px 4px 0px 0px;\n}\n.RY .c-gcrtsc .c-1bdbnnk .ys{\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 18px;\n  padding-top: 6px;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.RY .c-gcrtsc .c-1bdbnnk .ys img{\n  margin: -15px 9px -1px 0px;\n}\n.RY .c-gcrtsc .c-1bdbnnk .ys p{\n  text-transform: uppercase;\n  margin-top:-1px;\n}\n.RY .c-7doipl{\n  \ndisplay: flex;\nflex-direction: row;\nbackground: white;\npadding: 12px 20px 18px 20px;\njustify-content: space-between;\nborder: 1px solid #74747428;\nborder-radius: 5px 5px 0px 0px;\n}\n\n.RY .c-7doipl .c-ebnjpp{ \ndisplay: flex;\nflex-direction: column;\njustify-content: space-between;\nflex-grow: 1;\nmargin-right: 12px;\n}\n.RY .c-7doipl .c-ebnjpp .pp{\n  display: flex;\n  flex-direction: row;\n}\n.RY .c-7doipl .c-ebnjpp .pp .ty{\n  font-size: 28px;\nfont-weight: 600;\npadding: -9px 0px;\nmax-width: 85%;\n}\n.RY .c-7doipl .c-ebnjpp .sz{\n  font-size: 10px;\n  width: 80%;\n  margin-top: -64px;\n  margin-left:5px;\n  color: rgba(0,0,0,0.7);\n}\n.RY .c-7doipl .c-ebnjpp .services{\n  text-overflow: ellipsis; \nwhite-space: nowrap;\ndisplay: flex;\nwidth: 70%;\n}\n.RY .c-7doipl .c-ebnjpp .services .ic\n{\n  display:flex;\n  padding-right: 24px;\n  font-size: 14px;\n  align-items: center;}\n  .RY .c-7doipl .c-ebnjpp .services .ic i{\n    margin: -11px 9px 0 0;\n  }\n  .RY .c-7doipl .image{\n    display: flex;\n    position: relative;\n    flex-direction: row-reverse;\n  }\n  .RY .c-7doipl .image img{\n    color: rgba(0,0,0,0.54);\n    background: #f3f5f7;\n    animation: none;\n    vertical-align: middle;\n    border-radius: 5px;\n    width: 180px;\n    height: auto;\n    object-fit: cover;\n    border-style: none;\n  }\n\n  .RY .c-gcrtsc .selected{   \ndisplay: flex;\nflex-direction: row;\npadding: 16px 18px;\nborder: 1px solid #74747428;\n    border-top-color: rgba(116, 116, 116, 0.157);\n    border-top-style: solid;\n    border-top-width: 1px;\nborder-top: 0;\nborder-bottom-left-radius: 4px;\nborder-bottom-right-radius: 4px;\njustify-content: space-between;\n  }\n  .RY .c-gcrtsc .selected .price{\n    font-size: 18px;\n    line-height: 24px;    \n    margin: 16px 0 0 8px;\n  }\n    .RY .c-gcrtsc .selected .sel{\n      margin-top:-9px;\n      font-size: 12px;\n      font-weight: bold;\n      width: 180px;\n      padding: 16px 0px;\n      border-radius: 4px;\n      border: solid 1px #d7d7d7;\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n      outline: 0;\n      background: #fff;\n      color: #222222;\n    }\n\n\n\n    /*main  Review And Rating */\n    .commentbox .heading {\n      font-size: 25px;\n      margin-right: 25px;\n    }\n   .commentbox .hrs{\n             border:3px solid #f1f1f1\n      \n    }\n    .commentbox .averagereviews{\n      font-size: 12px;\n    }\n    .commentbox .allbars{\n      width:90%;\n    }\n    .commentbox .side{\n      font-size:12px;\n    }\n   .commentbox .fa {\n      \n      font-size: 20px;\n      padding: 4px;\n    }\n    \n    .commentbox .checked {\n      color: orange;\n    }\n    \n    /* Three column layout */\n   .commentbox .side {\n      float: left;\n      width: 15%;\n      margin-top:10px;\n    }\n    \n   .commentbox .middle {\n      margin-top:10px;\n      float: left;\n      width: 70%;\n    }\n    \n    /* Place text to the right */\n   .commentbox .right {\n      text-align: right;\n    }\n    \n    /* Clear floats after the columns */\n  .commentbox  .row:after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n    \n    /* The bar container */\n  .commentbox  .bar-container {\n      width: 100%;\n      background-color: #f1f1f1;\n      text-align: center;\n      color: white;\n    }\n    \n    /* Individual bars */\n   .commentbox .bar-5 {width: 60%; height: 5px; background-color: #4CAF50;}\n   .commentbox .bar-4 {width: 30%; height: 5px; background-color: #2196F3;}\n   .commentbox .bar-3 {width: 10%; height: 5px; background-color: #00bcd4;}\n   .commentbox .bar-2 {width: 4%; height: 5px; background-color: #ff9800;}\n   .commentbox .bar-1 {width: 15%; height: 5px; background-color: #f44336;}\n    \n\n\n\n    /* Responsive layout - make the columns stack on top of each other instead of next to each other */\n    @media (max-width: 400px) {\n    .commentbox  .side,.commentbox .middle {\n        width: 100%;\n      }\n   .commentbox   .right {\n        display: none;\n      }}\n\n\n    .commentbox .bootdey{\n      margin: 32px 0 0 -54px;\n    }\n    .commentbox textarea{\n      font-size: 12px;\n    padding: 27px 0px 0 16px;\n    }\n    .commentbox .fs{\n      font-size: 12px;\n    }\n    .commentbox .fss{\n      font-size: 11px !important;\n    }\n    .commentbox .img-sm {\n        width: 46px;\n        height: 46px;\n    }\n    \n    .commentbox .panel {\n        box-shadow: 0 2px 0 rgba(0,0,0,0.075);\n        border-radius: 0;\n        border: 0;\n        margin-bottom: 15px;\n    }\n    \n  .commentbox  .panel .panel-footer,.commentbox .panel>:last-child {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n    }\n    \n  .commentbox  .panel .panel-heading,.commentbox .panel>:first-child {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n    }\n    \n   .commentbox .panel-body {\n        padding: 25px 20px;\n    }\n    \n    \n   .commentbox .media-block .media-left {\n        display: block;\n        float: left\n    }\n    \n   .commentbox .media-block .media-right {\n        float: right\n    }\n    \n   .commentbox .media-block .media-body {\n        display: block;\n        overflow: hidden;\n        width: auto\n    }\n    \n   .commentbox .middle .media-left,\n   .commentbox .middle .media-right,\n   .commentbox .middle .media-body {\n        vertical-align: middle\n    }\n    \n  .commentbox  .thumbnail {\n        border-radius: 0;\n        border-color: #e9e9e9\n    }\n    \n    .commentbox .tag.tag-sm, .btn-group-sm>.tag {\n        padding: 5px 10px;\n    }\n    \n   .commentbox .tag:not(.label) {\n        background-color: #fff;\n        padding: 6px 12px;\n        border-radius: 2px;\n        border: 1px solid #cdd6e1;\n        font-size: 12px;\n        line-height: 1.42857;\n        vertical-align: middle;\n        -webkit-transition: all .15s;\n        transition: all .15s;\n    }\n   .commentbox .text-muted,.commentbox a.text-muted:hover,.commentbox a.text-muted:focus {\n        color: #acacac;\n    }\n  .commentbox  .text-sm {\n        font-size: 0.9em;\n    }\n   .commentbox  .text-5x,.commentbox .text-4x,.commentbox .text-5x,.commentbox .text-2x,.commentbox .text-lg,.commentbox .text-sm,.commentbox .text-xs {\n        line-height: 1.25;\n    }\n    \n    .commentbox .btn-trans {\n        background-color: transparent;\n        border-color: transparent;\n        color: #929292;\n    }\n    \n  .commentbox  .btn-icon {\n        padding-left: 9px;\n        padding-right: 9px;\n    }\n    \n   .commentbox .btn-sm,.commentbox .btn-group-sm>.btn, .commentbox .btn-icon.btn-sm {\n        padding: 5px 10px !important;\n    }\n    \n    .commentbox .mar-top {\n        margin-top: 15px;\n    }\n\n  /* Customer Booking Form */\n  .c-9ugfym\n    {\n      background-color: #fff;\n      border-radius:12px;\n      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n      width:50% !important;\n    }\n    .c-9ugfym form {\n      padding: 50px 36px 50px 36px !important;\n      border: none;\n    }\n    .c-9ugfym form .form-group input[type=\"text\"]{\n    padding: 21px 0px 21px 18px !important;\n    font-size: 12px !important;\n   }\n   .c-9ugfym form button {\n    padding: 14px 30px 14px 30px;\n    font-size: 12px;\n    font-weight: bold;\n   }\n   .c-9ugfym form .form-group label{\n     font-size:16px;\n   }\n\n\n   /* Search Hotel */\n   .fsh{\n     display:  flex;\n     justify-content: center;\n   }\n   .searchhotel{\n     background-color: #fff;\n     width:80%;\n     border-radius:15px;\n     box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 3px;\n      border-width: 1px;\n     border-style: solid;\n     border-color: #e0e0e0;\n   \n   }\n  .searchhotel .image{\n    width:100%;\n    border-bottom-left-radius:15px;\n    line-height:25px;\n  }\n  .searchhotel .address{\n    font-size: 16px !important;\n    line-height: 25px !important;\n  }\n  .searchhotel .MR2{\n    margin-top:36px !important; \n  }\n  .searchhotel .service{\n    display: flex;\n    margin-top:36px;\n  }\n  .searchhotel .service span{\n    display: flex !important;\n    padding-right:20px;\n    font-size: 14px;\n    color: #6c757d!important;;\n  }\n  .searchhotel .service span i{\n    margin-right: 5px;\n    width: 18px;\n    height: 18px;\n  }\n\n  .searchhotel .infos{\n    margin-top:38px;\n  }\n\n  .searchhotel .infos .roomtype{\n    text-transform: capitalize;\nfont-size: 14px;\nline-height: 7px;\ncolor: #222;\n  }\n  .searchhotel .infos .price {\n    margin-right: 8px;\nfont-size: 24px;\nfont-weight: 700;\ncolor: #ee2a24;\n  }\n  .searchhotel .infos .prpn{\n    font-weight: 400;\n    line-height: 1em;\n    margin-top: 4px;\n    font-size: 12px;\n    color: #6d787d;\n  }\n  .searchhotel .infos .det{\n    border-radius: 8px;\n    background-color: rgb(83, 146, 249);\n    color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 1px;\n    padding: 5px 37px;\n    border: none;\n    font-size: 20px;\n    margin-top: 12px;\n    font-weight: 600;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Signup */ "./src/components/Signup.js");
/* harmony import */ var _components_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Signin */ "./src/components/Signin.js");
/* harmony import */ var _components_Admindashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Admindashboard */ "./src/components/Admindashboard.js");
/* harmony import */ var _components_Booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Booking */ "./src/components/Booking.js");
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Users */ "./src/components/Users.js");
/* harmony import */ var _components_HotelRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/HotelRegister */ "./src/components/HotelRegister.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Profile */ "./src/components/Profile.js");
/* harmony import */ var _components_HotelDashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/HotelDashboard */ "./src/components/HotelDashboard.js");
/* harmony import */ var _components_HotelBooking__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/HotelBooking */ "./src/components/HotelBooking.js");
/* harmony import */ var _components_HotelInformation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/HotelInformation */ "./src/components/HotelInformation.js");
/* harmony import */ var _components_HotelPackage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/HotelPackage */ "./src/components/HotelPackage.js");
/* harmony import */ var _components_Hotelprofile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Hotelprofile */ "./src/components/Hotelprofile.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Gallery */ "./src/components/Gallery.js");
/* harmony import */ var _components_RoomType__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/RoomType */ "./src/components/RoomType.js");
/* harmony import */ var _components_Roomtypeform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Roomtypeform */ "./src/components/Roomtypeform.js");
/* harmony import */ var _components_CustomerDashboard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/CustomerDashboard */ "./src/components/CustomerDashboard.js");
/* harmony import */ var _image_bg_agoda_homepage_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./image/bg-agoda-homepage.png */ "./src/image/bg-agoda-homepage.png");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_nice_dates__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-nice-dates */ "./node_modules/react-nice-dates/build/index.esm.js");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-nice-dates/build/style.css */ "./node_modules/react-nice-dates/build/style.css");
/* harmony import */ var react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_nice_dates_build_style_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _image_prince_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./image/prince.jpg */ "./src/image/prince.jpg");
/* harmony import */ var _image_IMG_9146_sm_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./image/IMG_9146_sm.jpg */ "./src/image/IMG_9146_sm.jpg");
/* harmony import */ var _image_Hotel_Mechi_Crown_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./image/Hotel-Mechi-Crown.jpg */ "./src/image/Hotel-Mechi-Crown.jpg");
/* harmony import */ var _image_manasu_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./image/manasu.jpg */ "./src/image/manasu.jpg");
/* harmony import */ var _image_IMG_9033_700x400_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./image/IMG_9033-700x400.jpg */ "./src/image/IMG_9033-700x400.jpg");
/* harmony import */ var _image_images_jpeg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./image/images.jpeg */ "./src/image/images.jpeg");
/* harmony import */ var _image_royalcentury_jpeg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./image/royalcentury.jpeg */ "./src/image/royalcentury.jpeg");
/* harmony import */ var _image_barahi_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./image/barahi.jpg */ "./src/image/barahi.jpg");
/* harmony import */ var _components_HotelBookingDetail__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/HotelBookingDetail */ "./src/components/HotelBookingDetail.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Customerbookingform__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/Customerbookingform */ "./src/components/Customerbookingform.js");
/* harmony import */ var _components_SearchHotel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/SearchHotel */ "./src/components/SearchHotel.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();






































function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/",
          exact: true,
          component: Home
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Signup",
          exact: true,
          component: _components_Signup__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Signin",
          exact: true,
          component: _components_Signin__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Admindashboard",
          exact: true,
          component: _components_Admindashboard__WEBPACK_IMPORTED_MODULE_6__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Booking",
          exact: true,
          component: _components_Booking__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Users",
          exact: true,
          component: _components_Users__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Register",
          exact: true,
          component: _components_HotelRegister__WEBPACK_IMPORTED_MODULE_9__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Profile",
          exact: true,
          component: _components_Profile__WEBPACK_IMPORTED_MODULE_10__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/HotelDashboard",
          exact: true,
          component: _components_HotelDashboard__WEBPACK_IMPORTED_MODULE_11__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Booking",
          exact: true,
          component: _components_HotelBooking__WEBPACK_IMPORTED_MODULE_12__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/HotelInformation",
          exact: true,
          component: _components_HotelInformation__WEBPACK_IMPORTED_MODULE_13__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/HotelPackage",
          exact: true,
          component: _components_HotelPackage__WEBPACK_IMPORTED_MODULE_14__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Hotelprofile",
          exact: true,
          component: _components_Hotelprofile__WEBPACK_IMPORTED_MODULE_15__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Gallery",
          exact: true,
          component: _components_Gallery__WEBPACK_IMPORTED_MODULE_16__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/RoomType",
          exact: true,
          component: _components_RoomType__WEBPACK_IMPORTED_MODULE_17__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/RoomTypeForm",
          exact: true,
          component: _components_Roomtypeform__WEBPACK_IMPORTED_MODULE_18__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/CustomerDashboard",
          exact: true,
          component: _components_CustomerDashboard__WEBPACK_IMPORTED_MODULE_19__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/HotelBookingDetail",
          exact: true,
          component: _components_HotelBookingDetail__WEBPACK_IMPORTED_MODULE_33__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 12
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          path: "/Customerbookingform",
          exact: true,
          component: _components_Customerbookingform__WEBPACK_IMPORTED_MODULE_35__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 12
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_c = App;

const Home = () => {
  _s();

  const [startDate, setStartDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [endDate, setEndDate] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "homepage",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "welcomemessage container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-weight-bold mb-4 mt-0 ",
        children: "Hotel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Get the best on prices 2,000,000+ properties, worldwide"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container con",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hotelsearch",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "searchbox iconbox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            class: "fa fa-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inputs",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              placeholder: "Enter a destination"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8 col-md-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "checkdate",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_nice_dates__WEBPACK_IMPORTED_MODULE_22__["DateRangePicker"], {
                startDate: startDate,
                endDate: endDate,
                onStartDateChange: setStartDate,
                onEndDateChange: setEndDate,
                minimumDate: new Date(),
                minimumLength: 1,
                format: "dd MMM yyyy",
                locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_21__["enGB"],
                children: ({
                  startDateInputProps,
                  endDateInputProps,
                  focus
                }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "date-range",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_22__["START_DATE"] ? ' -focused' : ''),
                    ...startDateInputProps,
                    placeholder: "Start date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "date-range_arrow"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    className: 'input' + (focus === react_nice_dates__WEBPACK_IMPORTED_MODULE_22__["END_DATE"] ? ' -focused' : ''),
                    ...endDateInputProps,
                    placeholder: "End date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "guest",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_24__["Button"], {
                color: "primary",
                onClick: toggle,
                style: {
                  marginBottom: '1rem'
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-sm-4",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "material-icons",
                      children: "people_outline"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 35
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 8
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-sm-4",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sr",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "row",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "sm-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "1"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 146,
                            columnNumber: 25
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 145,
                          columnNumber: 23
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "sm-4 ml-2",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: "Adult"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 149,
                            columnNumber: 25
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 148,
                          columnNumber: 23
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 55
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "row fon",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "sm-4",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            children: "1"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 154,
                            columnNumber: 25
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 23
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "sm-4 ml-2",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: "Room"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 157,
                            columnNumber: 25
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 156,
                          columnNumber: 23
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 10
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 35
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 8
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-sm-4 down",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      class: "fas fa-chevron-down"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 41
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 10
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 6
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 7
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_24__["Collapse"], {
                isOpen: isOpen,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_24__["Card"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_24__["CardBody"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "row",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "md-4 roo",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-3 font-weight-bold",
                          children: "Room"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 38
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 12
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "md-4",
                        style: {
                          marginLeft: '-9px'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                          type: "submit",
                          value: "-",
                          className: "minus"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 67
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-3 counter",
                          children: "1"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 173,
                          columnNumber: 12
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                          type: "submit",
                          value: "+",
                          className: "plus"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 174,
                          columnNumber: 12
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 12
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 10
                    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "row mt-4",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "md-4 roo mr-2",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-3 font-weight-bold",
                          children: "Adult"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 178,
                          columnNumber: 43
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 12
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "md-4",
                        style: {
                          marginLeft: '-9px'
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                          type: "submit",
                          value: "-",
                          className: "minus"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 179,
                          columnNumber: 67
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "ml-3 counter",
                          children: "1"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 180,
                          columnNumber: 12
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                          type: "submit",
                          value: "+",
                          className: "plus"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 181,
                          columnNumber: 12
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 12
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 10
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 9
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 7
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 19
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 19
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "searchbutton",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "searchs",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 23
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mt-5 hotelsall",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-weight-bold mb-4",
        children: "Trending Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-deck",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_prince_jpg__WEBPACK_IMPORTED_MODULE_25__["default"],
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title ",
                children: "Hotel Prince Plaza"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Gyaneshwor, Kathmandu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 35
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 67
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 98
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 34
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 22
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_IMG_9146_sm_jpg__WEBPACK_IMPORTED_MODULE_26__["default"],
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title",
                children: "Hotel Tayoma"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 6
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Near J P Road, Thamel, Kathmandu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 6
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR MR1",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 53
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 85
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 247,
                  columnNumber: 116
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 52
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 27
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 22
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_manasu_jpg__WEBPACK_IMPORTED_MODULE_28__["default"],
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title",
                children: "Hotel Manaslu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Lakeside, Pokhara"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 39
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 258,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 262,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 53
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 85
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 116
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 52
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 27
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 22
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_Hotel_Mechi_Crown_jpg__WEBPACK_IMPORTED_MODULE_27__["default"],
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title",
                children: "Hotel Travel INN"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 42
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Near Gaushala Chowk, Kathmandu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR PR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 282,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 285,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 287,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 293,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 69
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 100
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 295,
                columnNumber: 36
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 22
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 19
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 18
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container mt-5 hotelsall",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "font-weight-bold mb-4",
        children: "Hotel Recommended"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 19
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card-deck",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_IMG_9033_700x400_jpg__WEBPACK_IMPORTED_MODULE_29__["default"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["     ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title ",
                children: "Hotel Milarepa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 43
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 310,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Thamel, Kathmandu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 315,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 319,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 35
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 67
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 98
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 34
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 309,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 19
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_images_jpeg__WEBPACK_IMPORTED_MODULE_30__["default"],
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["      ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title",
                children: "Hotel Romantica"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 44
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Pokhara, Lakeside, Pokhara"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 334,
                columnNumber: 42
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 344,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 345,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 346,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 336,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 53
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 85
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 116
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 52
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 350,
              columnNumber: 27
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 20
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_royalcentury_jpeg__WEBPACK_IMPORTED_MODULE_31__["default"],
            alt: "Card image cap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title",
                children: "Royal Century"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Shahid Chowk, Chitwan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 361,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 364,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 365,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 53
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 373,
              columnNumber: 27
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 85
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 116
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 374,
                columnNumber: 52
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 27
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 356,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 20
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "card-img-top",
            src: _image_barahi_jpg__WEBPACK_IMPORTED_MODULE_32__["default"],
            alt: "barahi"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["     ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "card-title",
                children: "Hotel Showland"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 381,
                columnNumber: 43
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 381,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              to: "HotelBookingDetail",
              children: ["    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "card-text",
                children: "Lakside, Barahi Chowkm Pokhara"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 382,
                columnNumber: 42
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 382,
              columnNumber: 7
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR PR ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 385,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 386,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 388,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 391,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 393,
                columnNumber: 29
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 394,
                columnNumber: 29
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 9
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-price",
              children: "NPR 9,051"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-infos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted",
                children: "Per Room Per Night"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 397,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                className: "text-muted FC",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-check"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 69
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "ml-2",
                  children: "Free Cancallation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 398,
                  columnNumber: 100
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 398,
                columnNumber: 36
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 20
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 19
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchHotel__WEBPACK_IMPORTED_MODULE_36__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 15
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_34__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, undefined);
};

_s(Home, "OVcqLN8lzIFx4QLG+f/xeIY11WA=");

_c2 = Home;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "App");
__webpack_require__.$Refresh$.register(_c2, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Admindashboard.js":
/*!******************************************!*\
  !*** ./src/components/Admindashboard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Booking */ "./src/components/Booking.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Users */ "./src/components/Users.js");
/* harmony import */ var _HotelRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HotelRegister */ "./src/components/HotelRegister.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Profile */ "./src/components/Profile.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Admindashboard.js";









class Admindashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Dashboard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "list-group",
            id: "myList",
            role: "tablist",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action active",
              "data-toggle": "list",
              href: "#home",
              role: "tab",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#Booking",
              role: "tab",
              children: "New Booking"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#Users",
              role: "tab",
              children: "Register Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#Register",
              role: "tab",
              children: "Registration"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tab-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane active",
              id: "home",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Profile__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 77
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "Booking",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Booking__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 73
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "Users",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Users__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 71
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "Register",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HotelRegister__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 75
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 18
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Admindashboard);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Booking.js":
/*!***********************************!*\
  !*** ./src/components/Booking.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Booking.js";




class Booking extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "book",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "table table-striped ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Hotel Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Check In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Check Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Stay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Room Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Guest"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Room Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Mobile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Payment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "table-info col-mb-7",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "row",
              children: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 22
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Booking);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/CustomerDashboard.js":
/*!*********************************************!*\
  !*** ./src/components/CustomerDashboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_hotelroom_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/hotelroom.jpeg */ "./src/image/hotelroom.jpeg");
/* harmony import */ var _image_dollaricon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/dollaricon.png */ "./src/image/dollaricon.png");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/CustomerDashboard.js";





class CustomerDashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "customerdashboard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "nav nav-pills shadow",
          role: "tablist",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link active",
              "data-toggle": "pill",
              href: "#home",
              children: "My Dashboard"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              "data-toggle": "pill",
              href: "#menu1",
              children: "Booking "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              "data-toggle": "pill",
              href: "#menu2",
              children: "Cancallation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "nav-item",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "nav-link",
              "data-toggle": "pill",
              href: "#menu3",
              children: "My Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tab-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "home",
            className: "container tab-pane active",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 58
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
              className: "py-5 header sideinformation",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "container py-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-3",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "nav flex-column nav-pills nav-pills-custom",
                      id: "v-pills-tab",
                      role: "tablist",
                      "aria-orientation": "vertical",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link mb-3 p-3 shadow active",
                        id: "v-pills-home-tab",
                        "data-toggle": "pill",
                        href: "#v-pills-home",
                        role: "tab",
                        "aria-controls": "v-pills-home",
                        "aria-selected": "true",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-user-circle-o mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 44,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "font-weight-bold small text-uppercase",
                          children: "Personal information"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 45,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link mb-3 p-3 shadow",
                        id: "v-pills-messages-tab",
                        "data-toggle": "pill",
                        href: "#v-pills-messages",
                        role: "tab",
                        "aria-controls": "v-pills-messages",
                        "aria-selected": "false",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-star mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "font-weight-bold small text-uppercase",
                          children: "Reviews"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "nav-link mb-3 p-3 shadow",
                        id: "v-pills-settings-tab",
                        "data-toggle": "pill",
                        href: "#v-pills-settings",
                        role: "tab",
                        "aria-controls": "v-pills-settings",
                        "aria-selected": "false",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-check mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 56,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "font-weight-bold small text-uppercase",
                          children: "Confirm booking"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 21
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 13
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-9",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "tab-content verticaltab",
                      id: "v-pills-tabContent",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "tab-pane fade shadow rounded bg-white show active p-5",
                        id: "v-pills-home",
                        role: "tabpanel",
                        "aria-labelledby": "v-pills-home-tab",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                          className: "font30 mb-4",
                          children: "Profile"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "font18 mb-2",
                          children: "Basic info, for a faster booking experience"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row mt-5",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-sm-3 col-md-2 col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                              children: "Username "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 70,
                              columnNumber: 29
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-md-8 col-6 ",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: "  "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 73,
                              columnNumber: 47
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 72,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 77,
                          columnNumber: 24
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-sm-3 col-md-2 col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                              children: "First Name"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 29
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 79,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-md-8 col-6",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: " "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 84,
                              columnNumber: 40
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 83,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 78,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-sm-3 col-md-2 col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                              children: "Last Name"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 91,
                              columnNumber: 29
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 90,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-md-8 col-6",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: "  "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 94,
                              columnNumber: 44
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 93,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-sm-3 col-md-2 col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                              children: "Email"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 101,
                              columnNumber: 29
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 100,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-md-8 col-6",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: " "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 104,
                              columnNumber: 44
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 103,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-sm-3 col-md-2 col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                              children: "Role"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 110,
                              columnNumber: 29
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-md-8 col-6",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              children: "  "
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 114,
                              columnNumber: 45
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 65,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "tab-pane fade shadow rounded bg-white p-5",
                        id: "v-pills-messages",
                        role: "tabpanel",
                        "aria-labelledby": "v-pills-messages-tab",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                              className: "reviewimage",
                              src: _image_hotelroom_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"]
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 132,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 131,
                            columnNumber: 24
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-6",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                              className: "heads font-weight-bold",
                              children: "The Fern Residency"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 136,
                              columnNumber: 27
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "format-address",
                              children: "CG Landmark | Bharatpur Heights 44200, Nepal"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 137,
                              columnNumber: 27
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "rating pb-5",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 139,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 140,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 141,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 142,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star3"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 143,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star3"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 144,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 145,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 146,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 147,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 148,
                                columnNumber: 29
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 138,
                              columnNumber: 27
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                              className: "feedbackforms",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                  for: "exampleFormControlInput1",
                                  children: "Title of your review"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 152,
                                  columnNumber: 29
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                  type: "text",
                                  className: "form-control",
                                  id: "exampleFormControlInput1",
                                  placeholder: "name@example.com"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 153,
                                  columnNumber: 29
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 151,
                                columnNumber: 27
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                  for: "exampleFormControlTextarea1",
                                  children: "Your review"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 158,
                                  columnNumber: 29
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                                  className: "form-control",
                                  id: "exampleFormControlTextarea1",
                                  rows: "3"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 159,
                                  columnNumber: 29
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 157,
                                columnNumber: 27
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                  for: "inputState",
                                  children: "When did you travel?"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 163,
                                  columnNumber: 29
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                                  id: "inputState",
                                  className: "form-control options",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    selected: true,
                                    children: "Select One"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 165,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "January"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 166,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "February"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 167,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "March"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 168,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "April"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 169,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "May"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 170,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "June"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 171,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "July"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 172,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "Augest"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 173,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "September"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 174,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "October"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 175,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "November"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 176,
                                    columnNumber: 31
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                                    children: "December"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 177,
                                    columnNumber: 31
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 164,
                                  columnNumber: 29
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                                  type: "submit",
                                  className: " mt-4 btn btn-primary",
                                  children: "Submit"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 180,
                                  columnNumber: 29
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 162,
                                columnNumber: 27
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 150,
                              columnNumber: 27
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 135,
                            columnNumber: 25
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 130,
                          columnNumber: 24
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 21
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "tab-pane fade shadow rounded bg-white p-5 CBooking",
                        id: "v-pills-settings",
                        role: "tabpanel",
                        "aria-labelledby": "v-pills-settings-tab",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "row",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-5",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                              className: "reviewimage",
                              src: _image_hotelroom_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"]
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 191,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 25
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "col-6",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                              className: "heads font-weight-bold",
                              children: "The Fern Residency"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 194,
                              columnNumber: 25
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "format-address",
                              children: "CG Landmark | Bharatpur Heights 44200, Nepal"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 195,
                              columnNumber: 27
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "rating ratings pb-5",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 199,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star1"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 200,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 201,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star2"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 202,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star3"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 203,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star3"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 204,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 205,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star4"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 206,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                                type: "radio",
                                name: "star",
                                id: "star5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 207,
                                columnNumber: 29
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                                for: "star5"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 208,
                                columnNumber: 29
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 198,
                              columnNumber: 27
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "mt-5 roomtype mb-1",
                              children: "Double Room"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 212,
                              columnNumber: 30
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "hotelservices font-weight-bold",
                              children: " Included Breakfast"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 213,
                              columnNumber: 30
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "hotelservices font-weight-bold confirmbooking",
                              children: " Confirm Booking"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 215,
                              columnNumber: 30
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "row gs",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "sm-6",
                                children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                  className: "stay",
                                  children: "1 night"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 217,
                                  columnNumber: 54
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 217,
                                columnNumber: 30
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "sm-6 mr",
                                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                  className: "guest",
                                  children: "2 adult"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 217,
                                  columnNumber: 117
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 217,
                                columnNumber: 91
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 216,
                              columnNumber: 30
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "price",
                              children: "NPR 1300"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 219,
                              columnNumber: 30
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 25
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 23
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 21
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 13
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "menu1",
            className: "container tab-pane fade Booking",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 65
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "shadow rounded bg-white p-5 CBooking CBookings",
              id: "v-pills-settings",
              role: "tabpanel",
              "aria-labelledby": "v-pills-settings-tab",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "reviewimage",
                    src: _image_hotelroom_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "heads font-weight-bold",
                    children: "The Fern Residency"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "format-address",
                    children: "CG Landmark | Bharatpur Heights 44200, Nepal"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating ratings pb-5",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 247,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 248,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star4"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star4"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 252,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mt-5 roomtype mb-1",
                    children: "Double Room"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 258,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "services",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "serv",
                      children: "Included Breakfast"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 260,
                      columnNumber: 32
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "serv",
                      children: "WIFI"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 261,
                      columnNumber: 32
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "serv",
                      children: "Swimming"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 262,
                      columnNumber: 32
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "hotelservices font-weight-bold confirmbooking",
                        children: " Booking"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 55
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        type: "button",
                        className: "btn btn-info cancel",
                        children: "Cancel"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 55
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 267,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row gs",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-6",
                      children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "stay",
                        children: "1 night"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 54
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 30
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-6 mr",
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "guest",
                        children: "2 adult"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 117
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 91
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "price",
                    children: "NPR 1300"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 30
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 239,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 6
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "menu2",
            className: "container tab-pane fade cancellations",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 71
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "shadow rounded bg-white p-5 CBooking CBookings",
              id: "v-pills-settings",
              role: "tabpanel",
              "aria-labelledby": "v-pills-settings-tab",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-5",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "reviewimage",
                    src: _image_hotelroom_jpeg__WEBPACK_IMPORTED_MODULE_3__["default"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-6",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "heads font-weight-bold",
                    children: "The Fern Residency"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "format-address",
                    children: "CG Landmark | Bharatpur Heights 44200, Nepal"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 289,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating ratings pb-5",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 293,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 294,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 298,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star4"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star4"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "radio",
                      name: "star",
                      id: "star5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 301,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      for: "star5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "mt-5 roomtype mb-1",
                    children: "Double Room"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 306,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "services",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "serv",
                      children: "Included Breakfast"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 32
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "serv",
                      children: "WIFI"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 309,
                      columnNumber: 32
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "serv",
                      children: "Swimming"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 310,
                      columnNumber: 32
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row mb-3",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-5",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "hotelservices font-weight-bold confirmbooking",
                        children: " Cancel"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 314,
                        columnNumber: 55
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row gs",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-6",
                      children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "stay",
                        children: "1 night"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 319,
                        columnNumber: 54
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 30
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "sm-6 mr",
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "guest",
                        children: "2 adult"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 319,
                        columnNumber: 117
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 91
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "price",
                    children: "NPR 1300"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 30
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "menu3",
            className: "container tab-pane fade",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 57
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-fluid",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mywallet",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "mywalletheader text-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    className: "font34 font-weight-bold mb-4",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "mr-3",
                      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "fa fa-dollar"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 334,
                        columnNumber: 50
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 334,
                      columnNumber: 26
                    }, this), "0"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "font14 font-weight-bold",
                    children: "Wallet balance"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 337,
                    columnNumber: 27
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
                  columnNumber: 24
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "walletBalanceSection",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: _image_dollaricon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
                        className: "dollaricon"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 343,
                        columnNumber: 26
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 342,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-weight-bold mt-4",
                        children: "My Cash"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 346,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "wp font-weight-bold;",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "mr-3",
                          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-dollar"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 350,
                            columnNumber: 51
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 350,
                          columnNumber: 27
                        }, this), "0"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 349,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 348,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 24
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: _image_dollaricon_png__WEBPACK_IMPORTED_MODULE_4__["default"],
                        className: "dollaricon"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 358,
                        columnNumber: 26
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-4",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-weight-bold mt-4",
                        children: "My Reward"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 361,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-6",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "wp font-weight-bold;",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "mr-3",
                          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-dollar"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 365,
                            columnNumber: 51
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 365,
                          columnNumber: 27
                        }, this), "0"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 364,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 363,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 24
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 331,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerDashboard);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Customerbookingform.js":
/*!***********************************************!*\
  !*** ./src/components/Customerbookingform.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Customerbookingform.js";


class Customerbookingform extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "c-9ugfym container mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              placeholder: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              placeholder: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Country Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              placeholder: "Country Code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Mobile Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              placeholder: "Mobile Number"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            placeholder: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Customerbookingform);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Footer.js";



class Footer extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: "new_footer_area bg_color",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "new_footer_top",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-3 col-md-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "f_widget company_widget wow fadeInLeft a",
                  "data-wow-delay": "0.2s",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "f-title f_600 t_color f_size_18",
                    children: "Get in Touch"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Don\u2019t miss any updates of our new templates and extensions.!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                    action: "#",
                    className: "f_subscribe_two mailchimp",
                    method: "post",
                    novalidate: "true",
                    _lpchecked: "1",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "text",
                      name: "EMAIL",
                      className: "form-control memail",
                      placeholder: "Email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "btn btn_get btn_get_two",
                      type: "submit",
                      children: "Subscribe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "mchimp-errmessage",
                      style: {
                        display: 'none'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "mchimp-sucmessage",
                      style: {
                        display: 'none'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-3 col-md-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "f_widget about-widget pl_70 wow fadeInLeft a",
                  "data-wow-delay": "0.4s",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "f-title f_600 t_color f_size_18",
                    children: "Download"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "list-unstyled f_list",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "Android App"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "ios App"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 29,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-3 col-md-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "f_widget about-widget pl_70 wow fadeInLeft a",
                  "data-wow-delay": "0.6s",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "f-title f_600 t_color f_size_18",
                    children: "Help"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    className: "list-unstyled f_list",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "FAQ"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "Term & conditions"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "Reporting"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "Support Policy"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: "Privacy"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-3 col-md-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "f_widget social-widget pl_70 wow fadeInLeft a",
                  "data-wow-delay": "0.8s",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "f-title f_600 t_color f_size_18",
                    children: "Team Solutions"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "f_social_icon",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "fab fa-facebook"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "fab fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "fab fa-linkedin"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 37
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      href: "#",
                      className: "fab fa-pinterest"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 37
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "footer_bg",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "footer_bg_one"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "footer_bg_two"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "footer_bottom",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-6 col-sm-7",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "mb-0 f_400",
                  children: "\xA9 cakecounter Inc.. 2019 All rights reserved."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-6 col-sm-5 text-right",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: ["Made with ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "icon_heart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 42
                  }, this), " in ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    children: "Prijay"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 76
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Gallery.js":
/*!***********************************!*\
  !*** ./src/components/Gallery.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Gallery.js";




class Gallery extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".custom-file-input").on("change", function () {
      var fileName = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).val().split("\\").pop();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "gallery",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "ml-3 mb-4 font-weight-bold",
          children: "Gallery Upload"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-file mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "file",
              className: "custom-file-input",
              id: "customFile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "custom-file-label",
              for: "customFile",
              children: "Choose file"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: "btn btn-info mt-3 font-weight-bold ",
          children: "Upload"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HotelBooking.js":
/*!****************************************!*\
  !*** ./src/components/HotelBooking.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/HotelBooking.js";



class HotelBooking extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "book",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "table table-striped ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Check In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Check Out"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Stay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Room Type"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Guest"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Room Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Mobile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Payment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "table-info col-mb-7",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "row",
              children: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 22
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HotelBooking);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HotelBookingDetail.js":
/*!**********************************************!*\
  !*** ./src/components/HotelBookingDetail.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var _image_dollars_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image/dollars.png */ "./src/image/dollars.png");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _image_star_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image/star.png */ "./src/image/star.png");
/* harmony import */ var _image_singlebed_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image/singlebed.jpeg */ "./src/image/singlebed.jpeg");
/* harmony import */ var _Customerbookingform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Customerbookingform */ "./src/components/Customerbookingform.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/HotelBookingDetail.js";










class HotelBookingDetail extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hotelbookingdetail",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid mt-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "carousel-container position-relative row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "myCarousel",
            className: "carousel slide",
            "data-ride": "carousel",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "carousel-inner",
              style: {
                height: 500
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item active",
                "data-slide-number": "0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/Pn6iimgM-wo/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/Pn6iimgM-wo/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/tXqVe7oO-go/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/tXqVe7oO-go/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/qlYQb7B9vog/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/qlYQb7B9vog/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/QfEfkWk1Uhk/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/QfEfkWk1Uhk/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/CSIcgaLiFO0/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/CSIcgaLiFO0/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/a_xa7RUKzdc/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/a_xa7RUKzdc/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/uanoYn1AmPs/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/uanoYn1AmPs/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "7",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/_snqARKTgoc/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/_snqARKTgoc/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "8",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/M9F8VR0jEPM/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/M9F8VR0jEPM/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                "data-slide-number": "9",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://source.unsplash.com/Q1p7bh3SHj8/1600x900/",
                  className: "d-block w-100",
                  alt: "...",
                  "data-remote": "https://source.unsplash.com/Q1p7bh3SHj8/",
                  "data-type": "image",
                  "data-toggle": "lightbox",
                  "data-gallery": "example-gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 3
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 1
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "carousel-thumbs",
            className: "carousel slide",
            "data-ride": "carousel",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "carousel-inner",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item active",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row mx-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-0",
                    className: "thumb col-4 col-sm-2 px-1 py-2 selected",
                    "data-target": "#myCarousel",
                    "data-slide-to": "0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/Pn6iimgM-wo/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-1",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "1",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/tXqVe7oO-go/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-2",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/qlYQb7B9vog/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-3",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "3",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/QfEfkWk1Uhk/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-4",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/CSIcgaLiFO0/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-5",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "5",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/a_xa7RUKzdc/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "carousel-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row mx-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-6",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "6",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/uanoYn1AmPs/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-7",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "7",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/_snqARKTgoc/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-8",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "8",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/M9F8VR0jEPM/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    id: "carousel-selector-9",
                    className: "thumb col-4 col-sm-2 px-1 py-2",
                    "data-target": "#myCarousel",
                    "data-slide-to": "9",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "https://source.unsplash.com/Q1p7bh3SHj8/600x400/",
                      className: "img-fluid",
                      alt: "..."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-2 px-1 py-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 9
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-2 px-1 py-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "carousel-control-prev",
              href: "#carousel-thumbs",
              role: "button",
              "data-slide": "prev",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "carousel-control-prev-icon",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Previous"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "carousel-control-next",
              href: "#carousel-thumbs",
              role: "button",
              "data-slide": "next",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "carousel-control-next-icon",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Next"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 1
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mt-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8 col-md-6 infos",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "font-weight-bold hoteltitle",
              children: "Hotel Prince Plaza"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "address  font-weight-bold",
              children: "Gyaneshwor, Kathmandu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "about",
              children: "The rooms are fitted with a flat-screen TV with cable channels. You will find a kettle in the room. Each room includes a private bathroom. Extras include slippers and free toiletries. World Peace Pagoda is 1.6 km from Hotel Spring, while International Mountain Museum is 3 km away. Pokhara Airport is 2 km from the property. This is our guests' favourite part of Pokhara, according to independent reviews. Couples particularly like the location \u2014 they rated it 9.4 for a two-person trip. We speak your language!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-5 package",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "font-weight-bold",
                children: "Our Package"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "ser",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fa fa-tv"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "TV"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 58
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 24
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fa fa-wifi"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Free Wifi"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 61
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fa fa-cutlery"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Kitchen"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 64
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    className: "fa fa-bed"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "Single Bed"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 60
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 24
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "RY mt-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "font-weight-bold",
                  children: "Choose Your Room"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 27
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "c-gcrtsc",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "c-1bdbnnk",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "ys",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: _image_star_png__WEBPACK_IMPORTED_MODULE_7__["default"],
                      style: {
                        height: 10
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Selected Category"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 37
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 29
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 27
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "c-7doipl",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "c-ebnjpp",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "pp",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "ty",
                        children: "Classic 2X"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 33
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "sz",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Room Size: 100 sqft "
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 35
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 33
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "services",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "ic",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-tv"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 164,
                          columnNumber: 34
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "TV"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 165,
                          columnNumber: 36
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 34
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "ic",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-wifi"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 34
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Free Wifi"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 64
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 34
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "ic",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-bed"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 34
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          children: "Single Bed"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 63
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 34
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "image",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: _image_singlebed_jpeg__WEBPACK_IMPORTED_MODULE_8__["default"]
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "selected",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "price font-weight-bold",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "NPR 2300"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 69
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "sel",
                    type: "button",
                    children: "Selected"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 27
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "commentbox mt-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "font-weight-bold",
                children: "Ratings & Reviews"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 27
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "heading",
                children: "User Rating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "fa fa-star checked"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "fa fa-star checked"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "fa fa-star checked"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "fa fa-star checked"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "fa fa-star"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "averagereviews",
                children: "4.1 average based on 254 reviews."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                className: "hrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row allbars",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "5 star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "middle",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bar-container",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bar-5"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "150"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "4 star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "middle",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bar-container",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bar-4"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "63"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "3 star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "middle",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bar-container",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bar-3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "15"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "2 star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "middle",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bar-container",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bar-2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "6"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "1 star"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 247,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "middle",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bar-container",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "bar-1"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 251,
                      columnNumber: 31
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 250,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 27
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "side right",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "20"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 255,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 27
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "container bootdey",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12 bootstrap snippets",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "panel",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "panel-body",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                        className: "form-control",
                        rows: "2",
                        placeholder: "What are you thinking?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 5
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "mar-top clearfix",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          className: "btn btn-sm btn-primary pull-right",
                          style: {
                            fontSize: 16,
                            borderRadius: 8
                          },
                          type: "submit",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-pencil fa-fw"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 266,
                            columnNumber: 113
                          }, this), " Share"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 266,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "btn btn-trans btn-icon fa fa-video-camera add-tooltip",
                          href: "#"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 267,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "btn btn-trans btn-icon fa fa-camera add-tooltip",
                          href: "#"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 268,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "btn btn-trans btn-icon fa fa-file add-tooltip",
                          href: "#"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 269,
                          columnNumber: 7
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 5
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 3
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 1
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "panel",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "panel-body",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "media-block",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "media-left",
                          href: "#",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "img-circle img-sm",
                            alt: "Profile Picture",
                            src: "https://bootdey.com/img/Content/avatar/avatar1.png"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 278,
                            columnNumber: 42
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 278,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "media-body",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "mar-btm",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              className: "btn-link text-semibold media-heading box-inline fs",
                              children: "Lisa D."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 281,
                              columnNumber: 11
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "text-muted text-sm fs fss",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "fa fa-mobile fa-lg"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 282,
                                columnNumber: 52
                              }, this), " - From Mobile - 11 min ago"]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 282,
                              columnNumber: 11
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 280,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            className: "fs",
                            children: "consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 284,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "pad-ver",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "btn-group",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "btn btn-sm btn-default btn-hover-success",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fa fa-thumbs-up fs"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 287,
                                  columnNumber: 78
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 287,
                                columnNumber: 13
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "btn btn-sm btn-default btn-hover-danger",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fa fa-thumbs-down fs"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 288,
                                  columnNumber: 77
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 288,
                                columnNumber: 13
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 286,
                              columnNumber: 11
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              className: "btn btn-sm btn-default fs btn-hover-primary",
                              href: "#",
                              children: "Comment"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 290,
                              columnNumber: 11
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 285,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 292,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "media-block",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "media-left",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                                  className: "img-circle img-sm",
                                  alt: "Profile Picture",
                                  src: "https://bootdey.com/img/Content/avatar/avatar2.png"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 297,
                                  columnNumber: 48
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 297,
                                columnNumber: 13
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "media-body",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "mar-btm",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "btn-link text-semibold media-heading box-inline fs",
                                    children: "Bobby Marz"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 300,
                                    columnNumber: 17
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                    className: "text-muted text-sm fss",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                      className: "fa fa-mobile fs fa-lg"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 301,
                                      columnNumber: 55
                                    }, this), " - From Mobile - 7 min ago"]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 301,
                                    columnNumber: 17
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 299,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                  className: "fs",
                                  children: " Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 303,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "pad-ver",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    className: "btn-group",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      className: "btn btn-sm btn-default btn-hover-success active",
                                      href: "#",
                                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                        className: "fa fa-thumbs-up fs"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 306,
                                        columnNumber: 91
                                      }, this), " You Like it"]
                                    }, void 0, true, {
                                      fileName: _jsxFileName,
                                      lineNumber: 306,
                                      columnNumber: 19
                                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      className: "btn btn-sm btn-default btn-hover-danger",
                                      href: "#",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                        className: "fa fa-thumbs-down fs"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 307,
                                        columnNumber: 83
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 307,
                                      columnNumber: 19
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 305,
                                    columnNumber: 17
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    className: "btn btn-sm btn-default btn-hover-primary fs ",
                                    href: "#",
                                    children: "Comment"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 309,
                                    columnNumber: 17
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 304,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 311,
                                  columnNumber: 15
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 298,
                                columnNumber: 13
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 296,
                              columnNumber: 11
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "media-block",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "media-left",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                                  className: "img-circle img-sm",
                                  alt: "Profile Picture",
                                  src: "https://bootdey.com/img/Content/avatar/avatar3.png"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 316,
                                  columnNumber: 48
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 316,
                                columnNumber: 13
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "media-body",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "mar-btm",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "btn-link text-semibold media-heading box-inline fs",
                                    children: "Lucy Moon"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 320,
                                    columnNumber: 17
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                    className: "text-muted text-sm fss",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                      className: "fa fa-globe fa-lg fs"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 321,
                                      columnNumber: 55
                                    }, this), " - From Web - 2 min ago"]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 321,
                                    columnNumber: 17
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 319,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                  className: "fs",
                                  children: "Duis autem vel eum iriure dolor in hendrerit in vulputate ?"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 323,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "pad-ver",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    className: "btn-group",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      className: "btn btn-sm btn-default btn-hover-success",
                                      href: "#",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                        className: "fa fa-thumbs-up"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 326,
                                        columnNumber: 84
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 326,
                                      columnNumber: 19
                                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      className: "btn btn-sm btn-default btn-hover-danger",
                                      href: "#",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                        className: "fa fa-thumbs-down"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 327,
                                        columnNumber: 83
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 327,
                                      columnNumber: 19
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 325,
                                    columnNumber: 17
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    className: "btn btn-sm btn-default btn-hover-primary fs",
                                    href: "#",
                                    children: "Comment"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 329,
                                    columnNumber: 17
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 324,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 331,
                                  columnNumber: 15
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 318,
                                columnNumber: 13
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 315,
                              columnNumber: 11
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 295,
                            columnNumber: 9
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 279,
                          columnNumber: 7
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 277,
                        columnNumber: 5
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "media-block pad-all",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          className: "media-left",
                          href: "#",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "img-circle img-sm",
                            alt: "Profile Picture",
                            src: "https://bootdey.com/img/Content/avatar/avatar1.png"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 344,
                            columnNumber: 42
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 344,
                          columnNumber: 7
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "media-body",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "mar-btm",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              href: "#",
                              className: "btn-link text-semibold media-heading box-inline fs",
                              children: "John Doe"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 347,
                              columnNumber: 11
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                              className: "text-muted text-sm fs fss",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "fa fa-mobile fa-lg"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 348,
                                columnNumber: 52
                              }, this), " - From Mobile - 11 min ago"]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 348,
                              columnNumber: 11
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 346,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                            children: "Lorem ipsum dolor sit amet."
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 350,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "img-responsive thumbnail",
                            src: "https://via.placeholder.com/400x300",
                            alt: "Image"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 351,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "pad-ver",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              className: "tag tag-sm",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                className: "fa fa-heart text-danger fs"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 353,
                                columnNumber: 40
                              }, this), " 250 Likes"]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 353,
                              columnNumber: 11
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "btn-group",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "btn btn-sm btn-default btn-hover-success",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fa fa-thumbs-up"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 355,
                                  columnNumber: 78
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 355,
                                columnNumber: 13
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "btn btn-sm btn-default btn-hover-danger",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                  className: "fa fa-thumbs-down"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 356,
                                  columnNumber: 77
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 356,
                                columnNumber: 13
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 354,
                              columnNumber: 11
                            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                              className: "btn btn-sm btn-default btn-hover-primary fs",
                              href: "#",
                              children: "Comment"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 358,
                              columnNumber: 11
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 352,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 360,
                            columnNumber: 9
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: "media-block pad-all",
                              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                className: "media-left",
                                href: "#",
                                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                                  className: "img-circle img-sm",
                                  alt: "Profile Picture",
                                  src: "https://bootdey.com/img/Content/avatar/avatar2.png"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 364,
                                  columnNumber: 48
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 364,
                                columnNumber: 13
                              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "media-body",
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  className: "mar-btm",
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "btn-link text-semibold media-heading box-inline fs",
                                    children: "Maria Leanz"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 367,
                                    columnNumber: 17
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                    className: "text-muted text-sm fs fss",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                      className: "fa fa-globe fa-lg"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 368,
                                      columnNumber: 58
                                    }, this), " - From Web - 2 min ago"]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 368,
                                    columnNumber: 17
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 366,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                                  children: "Duis autem vel eum iriure dolor in hendrerit in vulputate ?"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 370,
                                  columnNumber: 15
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                    className: "btn-group",
                                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      className: "btn btn-sm btn-default btn-hover-success",
                                      href: "#",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                        className: "fa fa-thumbs-up"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 373,
                                        columnNumber: 84
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 373,
                                      columnNumber: 19
                                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                      className: "btn btn-sm btn-default btn-hover-danger",
                                      href: "#",
                                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                                        className: "fa fa-thumbs-down"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 374,
                                        columnNumber: 83
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 374,
                                      columnNumber: 19
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 372,
                                    columnNumber: 17
                                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                                    className: "btn btn-sm btn-default btn-hover-primary fs",
                                    href: "#",
                                    children: "Comment"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 376,
                                    columnNumber: 17
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 371,
                                  columnNumber: 15
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 365,
                                columnNumber: 13
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 363,
                              columnNumber: 11
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 362,
                            columnNumber: 9
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 345,
                          columnNumber: 7
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 343,
                        columnNumber: 5
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 5
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 1
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 1
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 24
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "booknow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "deal",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Now Get to Exclusive Deals"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 398,
                columnNumber: 25
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "bokinfo",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "font-weight-bold",
                  children: "NPR 2300"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 403,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "tax",
                  children: " Inclusive of all taxes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "roomtype",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "bed",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "fas fa-door-closed"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 408,
                      columnNumber: 30
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "ml-3",
                      children: "Single Bed"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 409,
                      columnNumber: 32
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 406,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "reward",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: _image_dollars_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                    alt: "dollor",
                    style: {
                      height: 40
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 415,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "ml-4",
                    children: "Reward"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 416,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    children: "NPR 200"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 417,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "reward",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: _image_dollars_png__WEBPACK_IMPORTED_MODULE_5__["default"],
                    alt: "dollor",
                    style: {
                      height: 40
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 420,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "ml-4",
                    children: "Total Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 31
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    style: {
                      marginLeft: -42
                    },
                    children: "NPR 2100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 422,
                    columnNumber: 31
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 419,
                  columnNumber: 29
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                  to: "Customerbookingform",
                  children: ["    ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    type: "button",
                    className: "btn btn-success mt-4 cn",
                    children: "Continue to Book"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 426,
                    columnNumber: 65
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 29
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 402,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 395,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 19
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HotelBookingDetail);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HotelDashboard.js":
/*!******************************************!*\
  !*** ./src/components/HotelDashboard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gallery */ "./src/components/Gallery.js");
/* harmony import */ var _HotelBooking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HotelBooking */ "./src/components/HotelBooking.js");
/* harmony import */ var _HotelInformation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HotelInformation */ "./src/components/HotelInformation.js");
/* harmony import */ var _HotelPackage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HotelPackage */ "./src/components/HotelPackage.js");
/* harmony import */ var _Hotelprofile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Hotelprofile */ "./src/components/Hotelprofile.js");
/* harmony import */ var _RoomType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RoomType */ "./src/components/RoomType.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/HotelDashboard.js";










class HotelDashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Dashboard",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "list-group",
            id: "myList",
            role: "tablist",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action active",
              "data-toggle": "list",
              href: "#home",
              role: "tab",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#Booking",
              role: "tab",
              children: "New Booking"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#Upload",
              role: "tab",
              children: "Upload Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#package",
              role: "tab",
              children: "Hotel Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#Gallery",
              role: "tab",
              children: "Gallery"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "list-group-item list-group-item-action",
              "data-toggle": "list",
              href: "#RoomType",
              role: "tab",
              children: "Room Type Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "tab-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane active",
              id: "home",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Hotelprofile__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 77
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "Booking",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HotelBooking__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 73
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "Upload",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HotelInformation__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 72
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "package",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HotelPackage__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 73
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "Gallery",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 73
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tab-pane",
              id: "RoomType",
              role: "tabpanel",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RoomType__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 74
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HotelDashboard);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HotelInformation.js":
/*!********************************************!*\
  !*** ./src/components/HotelInformation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/HotelInformation.js";



class HotelInformation extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hotelinformation",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "exampleFormControlFile1",
            children: "Upload Photo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            className: "form-control-file",
            id: "exampleFormControlFile1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "exampleFormControlInput1",
            children: "Hotel Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "exampleFormControlInput1",
            placeholder: "Hotel Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "exampleFormControlInput1",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "exampleFormControlInput1",
            placeholder: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "exampleFormControlInput1",
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "exampleFormControlInput1",
            placeholder: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "exampleFormControlTextarea1",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            className: "form-control",
            id: "exampleFormControlTextarea1",
            rows: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-10",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "btn btn-primary font-weight-bold",
              children: "Upload"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HotelInformation);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HotelPackage.js":
/*!****************************************!*\
  !*** ./src/components/HotelPackage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/HotelPackage.js";




class HotelPackage extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hotelpackage",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-10 mt-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "font-weight-bold",
              children: "Add Hotel Package"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control mb-2 mr-sm-2",
              id: "inlineFormInputName2",
              placeholder: "Hotel Package"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "submit",
              className: "font-weight-bold btn btn-primary mb-2",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid md-10",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            className: "table table-striped ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: "#"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 5
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: "Hotel Package"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 5
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  children: "Action"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 5
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 3
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 1
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                className: "table-info col-mb-7",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  scope: "row",
                  children: "1"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 5
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 5
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 5
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 3
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 1
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 22
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HotelPackage);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/HotelRegister.js":
/*!*****************************************!*\
  !*** ./src/components/HotelRegister.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/HotelRegister.js";




class HotelRegister extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "register",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              for: "email",
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              className: "form-control",
              id: "email",
              placeholder: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              for: "mobile",
              children: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "password",
              placeholder: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              for: "firstname",
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              id: "firstname",
              placeholder: "firstname"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "hotelname",
            children: "Hotel Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "hotelname",
            placeholder: "Hotel Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "lastname",
            children: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "lastname",
            placeholder: "Last Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "mobile",
            children: "Mobile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "mobile",
            placeholder: "Mobile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "mobile",
            children: "Mobile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            id: "mobile",
            placeholder: "Mobile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 4
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "my-1 mr-2",
              for: "Role",
              children: "Role"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              className: "custom-select my-1 mr-sm-2",
              className: "form-control form-controls",
              id: "Role",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                selected: true,
                children: "Admin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                value: "1",
                children: "Hotel Manager"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 5
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "my-1 mr-2 mb-4",
            for: "Role",
            children: "Gender"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-control custom-radio",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "radio",
              id: "customRadio1",
              name: "customRadio",
              className: "custom-control-input mt-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "custom-control-label",
              for: "customRadio1",
              children: "Male"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-control custom-radio",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "radio",
              id: "customRadio2",
              name: "customRadio",
              className: "custom-control-input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "custom-control-label",
              for: "customRadio2",
              children: "Female"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 1
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-control custom-radio",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "radio",
              id: "customRadio2",
              name: "customRadio",
              className: "custom-control-input"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 3
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: "custom-control-label",
              for: "customRadio2",
              children: "Other"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 3
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 1
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary reg",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 22
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HotelRegister);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Hotelprofile.js":
/*!****************************************!*\
  !*** ./src/components/Hotelprofile.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Hotelprofile.js";




class Hotelprofile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid col-lg-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tab-pane ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Hotel Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Mobile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Role"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Hotelprofile);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Navbar.js";




class Navbar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "navbars mb-7",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "navbar-toggler-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "collapse navbar-collapse font-weight-bold ",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navbar-header ",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              className: "navbar-brand",
              to: "/",
              children: "Davance"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "navbar-nav mr-auto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "nav-item active",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                className: "nav-link",
                to: "/",
                children: ["Hotel & Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "sr-only",
                  children: "(current)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 18
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "nav-item ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                className: "nav-link text-white",
                to: "Services",
                children: "Our Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "nav-item ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                className: "nav-link text-white",
                to: "Contact",
                children: "contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "nav navbar-nav navbar-right  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "nav-item mr-4 text-light",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: "Signup",
                className: "text-light",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "glyphicon glyphicon-user text-light"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 89
                }, this), " Sign Up"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 48
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "nav-item mr-4",
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: "Signin",
                className: "text-light",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "glyphicon glyphicon-log-in text-light"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 79
                }, this), " Login"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 38
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 1
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Profile.js";




class Profile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid col-lg-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "tab-pane ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Last Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Mobile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 41
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Role"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 45
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 45
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 41
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/RoomType.js":
/*!************************************!*\
  !*** ./src/components/RoomType.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Roomtypeform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Roomtypeform */ "./src/components/Roomtypeform.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/RoomType.js";





class RoomType extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "roomtype",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "ml-4 font-weight-bold",
          children: "Room Type"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: "Roomtypeform",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "button",
            id: "add",
            className: "btn font-weight-bold btn-primary ml-4",
            children: " ADD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "table table-striped mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "#"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Upload Photo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Room Type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                children: "Action"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "table-info col-mb-7",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "row",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 22
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 22
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 22
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 22
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RoomType);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Roomtypeform.js":
/*!****************************************!*\
  !*** ./src/components/Roomtypeform.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _RoomType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RoomType */ "./src/components/RoomType.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Roomtypeform.js";






class Roomtypeform extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".custom-file-input").on("change", function () {
      var fileName = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).val().split("\\").pop();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "roomtypeform container-fluid",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            for: "roomtype",
            children: "Room Type:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            placeholder: "Room Type",
            id: "roomtype"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Room Type Photo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "custom-file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "file",
            className: "custom-file-input",
            id: "customFile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: "custom-file-label",
            for: "customFile",
            children: "Room Type Photo "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-primary mt-4",
          children: "Upload"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: "HotelDashboard",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            className: "btn btn-primary mt-4 ml-3",
            children: "Exit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 43
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 16
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 18
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Roomtypeform);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SearchHotel.js":
/*!***************************************!*\
  !*** ./src/components/SearchHotel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image_barahi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/barahi.jpg */ "./src/image/barahi.jpg");
/* harmony import */ var _HotelBookingDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HotelBookingDetail */ "./src/components/HotelBookingDetail.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/SearchHotel.js";






class SearchHotel extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "fsh container mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "searchhotel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-5 col-sm-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "image",
              src: _image_barahi_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 20
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6 col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "mt-3 font-weight-bold",
              children: "Hotel Prince Plaza"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 24
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "address",
              children: "Gyaneshwor, Kathmandu"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 24
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "rating MR MR1 MR2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                name: "star",
                id: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "star5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 24
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "service",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-wifi"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "WIFI"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 62
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-automobile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Free Parking"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 68
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  class: "fas fa-swimmer"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 35
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Swimming Pool"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 62
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row infos",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-6 col-sm-6",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "roomtype",
                  children: "Deluxe(3X)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: "price",
                  children: "NPR 1920"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "prpn",
                  children: "Per Room Per Night"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-lg-6 col-sm-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                  to: "HotelBookingDetail",
                  children: ["   ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "det",
                    type: "submit",
                    children: "Detail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 67
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 34
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 20
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 16
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchHotel);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Signin.js":
/*!**********************************!*\
  !*** ./src/components/Signin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Signin.js";






class Signin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:3005/ehotel/user/login", this.state).then(res => {
        console.log(res.data);
        const tokenInfo = res.data.token.split(" ");
        localStorage.setItem('token', tokenInfo[1]);
        this.setState({
          LoggedIn: true
        });
      }).catch(err => console.log(err));
    };

    this.state = {
      username: "",
      password: "",
      LoggedIn: false
    };
  }

  render() {
    if (this.state.LoggedIn) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
        to: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 14
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Register container-fluid mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "login-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "username",
                onChange: this.handleChange,
                value: this.state.username,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "password",
                name: "password",
                onChange: this.handleChange,
                value: this.state.password,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              onClick: this.handleSubmit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), "Login"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signin);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Signup.js";






class Signup extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.handleRoleChange = e => {
      console.log(e.target.value);
      this.setState({
        role: e.target.value
      });
    };

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3005/ehotel/user/register', this.state).then(res => {
        console.log(res.data);
        const tokenInfo = res.data.token.split(" ");
        localStorage.setItem('token', tokenInfo[1]);
        this.setState({
          RegisteredIn: true
        });
      }).catch(err => console.log(err));
    };

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      role: "guest",
      RegisteredIn: false
    };
  }

  render() {
    if (this.state.RegisteredIn) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 14
      }, this);
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Register container-fluid mt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "login-box",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Signup"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "username",
                onChange: this.handleChange,
                value: this.state.username,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "password",
                name: "password",
                onChange: this.handleChange,
                value: this.state.password,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "firstName",
                onChange: this.handleChange,
                value: this.state.firstName,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "First Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "lastName",
                onChange: this.handleChange,
                value: this.state.lastName,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Lastname"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                name: "email",
                onChange: this.handleChange,
                value: this.state.email,
                required: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box-select",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                children: "Select Role"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
                className: "user-box-select-item",
                type: "select",
                onChange: this.handleRoleChange,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "guest",
                  children: "guest"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "hotelOwner",
                  children: "hotelOwner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "admin",
                  children: "admin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "user-box",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-light",
                children: "By Signup You accept the Terms and Conditions and Privacy Statement"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              onClick: this.handleSubmit,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), "Register"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Users.js":
/*!*********************************!*\
  !*** ./src/components/Users.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/components/Users.js";




class Users extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "users",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        className: "table table-striped ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Users"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "First Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Last Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 22
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Mobile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 10
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Action"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "table-info col-mb-7",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              scope: "row",
              children: "1"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 3
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 22
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Users);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/main.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/image/Hotel-Mechi-Crown.jpg":
/*!*****************************************!*\
  !*** ./src/image/Hotel-Mechi-Crown.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Hotel-Mechi-Crown.31e2840a.jpg");

/***/ }),

/***/ "./src/image/IMG_9033-700x400.jpg":
/*!****************************************!*\
  !*** ./src/image/IMG_9033-700x400.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/IMG_9033-700x400.f139337d.jpg");

/***/ }),

/***/ "./src/image/IMG_9146_sm.jpg":
/*!***********************************!*\
  !*** ./src/image/IMG_9146_sm.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/IMG_9146_sm.0cc9598b.jpg");

/***/ }),

/***/ "./src/image/barahi.jpg":
/*!******************************!*\
  !*** ./src/image/barahi.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/barahi.3c204b5e.jpg");

/***/ }),

/***/ "./src/image/bg-agoda-homepage.png":
/*!*****************************************!*\
  !*** ./src/image/bg-agoda-homepage.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bg-agoda-homepage.56ba0658.png");

/***/ }),

/***/ "./src/image/dollaricon.png":
/*!**********************************!*\
  !*** ./src/image/dollaricon.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dollaricon.ed60ca29.png");

/***/ }),

/***/ "./src/image/dollars.png":
/*!*******************************!*\
  !*** ./src/image/dollars.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/dollars.d927b31a.png");

/***/ }),

/***/ "./src/image/hotelroom.jpeg":
/*!**********************************!*\
  !*** ./src/image/hotelroom.jpeg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hotelroom.aded4ac6.jpeg");

/***/ }),

/***/ "./src/image/images.jpeg":
/*!*******************************!*\
  !*** ./src/image/images.jpeg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/images.cf501f3a.jpeg");

/***/ }),

/***/ "./src/image/manasu.jpg":
/*!******************************!*\
  !*** ./src/image/manasu.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/manasu.4778bb97.jpg");

/***/ }),

/***/ "./src/image/prince.jpg":
/*!******************************!*\
  !*** ./src/image/prince.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/prince.d8f983e8.jpg");

/***/ }),

/***/ "./src/image/royalcentury.jpeg":
/*!*************************************!*\
  !*** ./src/image/royalcentury.jpeg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUPDxAVFRUVFRUVFRUVFRUXFRUVFRUWFhUWFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHSUtLSstLS0tLS0tLS0tMC0tLS0tLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAD8QAAEDAgMGBAIHBwIHAAAAAAEAAhEDIQQSMQUGE0FRYSJxgZEyoQcjQlKxwfAUM2JyktHhgvEVFkNEosLD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADQRAAICAQMCAggEBwEBAAAAAAABAhEDBBIhMVFBoQUTImFxgZHwFDKxwSMzQlLR4fEVgv/aAAwDAQACEQMRAD8A+HoAgJQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQEICUBCAIAgCAIAgCAIAgCAIAgCAIAgJQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBCAIAgCAIAgCAIAgCAICUAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBCAICUBCAIAgCAlAEAQBAEAQBAEAQBAEAQBAFACkBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAFACAKQEAUAIAgCkBQAgCkBAFACkBAEAUAIApAUAKQEAUAKQEAQBAEAQBAEAUAKQFACAKQEAQBQApAQBQAgCkBAEAQBAFACAKQEAQBQAgCAIAgCAKQEAUAKQEAQBAFACkBQApAQBQAgCAIApAQBQApAUAIApBKgBAQgCAlAQpBKgBAQgCAICUBCAlAQgCAKQEAQBQAgCAlAEBCAICUBCAlAEAQBAEAQBAEAQBAEAQCEJEIQIQCEAQBAEAQBAEBCAIAgCAIAgJQBAEAQBAEAQBAEAQGTR3UF0kYlSUJaEZZUHBCGQhAQBAEBIQkzUEhAEICEmBUlSEAQBAEAQBAEAQEICUAQBAEAQBAEAQkQgoyaw9D7FRYSZt/Z+5/pKjcX2fdD9m/m/pKjePVv7RBoR19v8qdw2EZG9T7D+6WyKRBp9FNkNECmlkUZCio3FlBvoSKHn7KN5PqpdjIYY9Hex/sm9E+ql2Y/ZH/dPmQQPcpvj3DxTXNGQwT+rf6gp3ozoHCPHNvuo3ImjA0T1CnchRBonqFG5E7WTwHwXQYBgmDAPQlNyuvEnZKr8DW5qsmUoxUgIAgIQgIAgCAICEBKAIAgCAIAgCA68JhKzgXMpvIIIloME+YWc8mOLqTRtjx5GrimdDtn4rlRf7H8ys1qMP8AcjR4c18RIZsvE5gTSfYjpy9Ueow/3Ij8Pmu6MsNsau4hpZl7k/kLlVnqsSV3ZaOlyvh8HocHuxSykVCSSNeh8gvPyekJ37K4OyOkxpU+Su2luzVZLqZDx8104dfCXEuGYZNJJcxdlE+mWmHCD0K7001aONxcXTMY8ksiicvce6WFEtt36hY8gOFxpN7dFyatKUeh2aTiTVl+7GEavXnrHfgd+4zbjHaB591V412Js4NvYx4pBpcYc4Az2BI+YXRpMcd9pco59VJ7Kvqc7MXswNGZmKLrZoNICYvHqvS2PueX9Dj2ljMIQP2anVaZuajmmRGgDRYzCKDCfc1bMLHvAdSfUEHwU3ZHTyOctcAPT1VMjcVd172a44qTrqeu3e3Yw1QEYg/WNcHENebMOjMsAEzq6eYtzXl6nXTiv4a47no4tJG/a+h6bGspUaOSlh2OY34m6WjXReZCUsk7lJ2d1KKpI8VtHZuBrXp5qLu0OZ6i3yXrYc+ox8S9peZxZdNiycpU/d/go8fu7iKIz5C9kTnZe3Ut1H4d13YtbiyOrp9mcGTSThz1XuKm3ddXJzcEOhFZHBjKkEoAgIQgISEICAIAhJKAhCCUJLdm7mJJjKCZiMw1OkdVyPW4u51fg8hYYfdnaAENlg1gVHAew5rGWt0z5fPyNY6XMuE6+bMzuxtA6vPrVP8AdV/Habt5E/hc393my22ZuxUYJqS5+pzPJaPIaH1XLm1sZOo8L4HTi0+3lu2RU2NXaTUbWEiSB+DZJULU42lFx4L7JdbNmFpVR+8fJOgAAA9YklZ5JY3+VExTXVnVkfEh4bHMhZ3HtZair2jgGn964PmTOXn1kaa8l1YczX5OCk4RkqlyVbd03ulwqNDSfDqTl5fJdT9IxXFcnH+CXck7puGtUen+yj/0U/6SfwK7k4fYL2ODmvkie3KNUlrIyVNFoabZK0yxwuEHO7vcArmnlfh0OtRNxwRA8bgZJgxBHqqeuT6IUctbZhqiKl2AyCHCZuL9RcrWOdQ5j1KTxLJxLoZUt2MO6/i/qKiWvyop+ExdvM6WbqYXmH/1OWb9I5vCifwmLt+p0bNwdCg806bZDngklztCBYQR855rPNlyZY7pdaNMcI4+Io9DhqOHLnAMAc0C5LhqORzd1xSlkpc8M34OykxnOq0eZH91Sn2LWjnwWJwQbU4dJrwxwlwyw7PUDCWkT4RmnyC2lHK2tzp/4K2vA9BVwOH4Z+rA5GMo7anTVc6k7HNlO3YOyxrRw4/1s/wt/wARnf8AU/Mr6qPZfQ2U9gbOdIp0aZiJymYnSYPZQ9RmXWTGyPZfQ8bvhicNg5YzDsNRxOQgktYAADOhzTy76r0dFjyZ3bk6XX3nPqcscK4XLPnb3FxJOpMnzK91KlR4zbbtmKEAqQyEICAIAgCAlCTOhTDnBpcGzzOg81EnSurJik3TdHocFurUqGGvZMTcn5Lgnr4x6pndHRvueiwGycRhmRWqMczMIlzgW9sx+z25clw5M2PK7gmmdWPHKHDdotN4toPw1A1mAEhzRDtCCYOi5tLhjlybWaZZuEbR5wb31i8t4bLRfxc2z1Xc/R8FG7ZhHUNzcT0ewMc+vRNR4AMuFpiwHU91wajEsc9qOmDtWUm3KhDa57UP/ourTK9i+P7Gc3SbPOYbePFMZlDxDRaWi116E9FhlK2vM4I6rJRe4DaNWtSq8R0w1hFgNddFw5MEMc47V3O+EnJck7VfDWfy/kFXCuWWkfUNwd3cLicFxa1LM+aonM4WbkyCAYsHLqxafHOLbXPPj8Diz5pwklF9jDfzYWFw2FNSjSDXcRrZzPNiwkjxEjksM+GMKpeJfBllOVNnzui+/ofwWEkdaPNbZxLxUhr3C2gJHXovT08IuPKOPUzalwzip4t/Oo7lq4/3Wzxx7L6GUMj8WevFTwfrqV4+32j0l0M8NUGaiTEcVmuh8Q166qWn7VdjXEk7PXb/ALabaDwGNEhhsGtg529tIkQuDQuTyq2/EtjraeFw9aHiNARp2K9OcbXJjNrezfjNpMqtrBgJmk0gEXJa8Ei3YH2KriwSg433f6FXkXNdjyDKb5P1btW/ZOrRHReu2u55iU03wz1e6jntw9amWOB4TyAQRJaQ5oE6kkaBeZq0nljK/E7tNajT959Fx+NbTw73vMCOhNzAAsOsBeLDG5T2o7U/E8VhDVqQW4esQMwMU3nUz0XozhGP9S8PFBzT6Hqd0qNUPqcSk9gcxhGdpbLmyDE/zBcmdR2qmn1M3Lk8n9L2Hh1F99XNuIFwDbqLa+fRen6Il+ZHFr+YJ+8+cr2jyiW6oyV1Dx+YRBoxUkEubChMUYqSCUJCEBCQgPoP0e5nUnEyQDA0sIECdRz/AEF4fpOlNHraNt4+S/xxq8emxubKWknKB8Qd4QM1pjNbt2XHj2+rbfU6Xdm/bey2YimKNRxDXPElpAPhDnDUHmFXT5nik5x60MmNTVMqG7nYVpzcSqT/ADM6R9xdD9I5Wqpef+TNaeCdlvs3AU6FM06ZJHiPiIJkjqAOi5cuWWSW6RtGO1UVGP2fTqhwdPjyZoMfBOXl/EVrjzzhVeF+ZSWNSTvxKv8A5bwo+y7+ty6fx+Z9voY/hMXbzN1DZ1GmHBgIDxDpc4yBprp6KktRknTfh7jWOOMehw7bcBkA5A/KFtpk3bIyNJF5sPeLFUKAp0q72NMmB/Fz05gNSWTJGTUXwU9VCXLRjtLbmJrty1q9R7ZmHOcRIBAMdbqjlOX5mWjjhHoitw77j1/BRNcF0VzmB1QS0G41APpddKbUeGUlFN8oxxDmcbhhjRDAYhovJ5eUK0VL1e5vxM2479tLod9I+D9dVzS/Mboyw9ZptmaTm0kTp3UShJchSXSzvYD90e7Vi37/ANSxWY4xWOnI2Mx5rpx8wRR9TtfsWm4hzHZYIdzcJGnPTWyyWrkk1JX5EvGnyehwziABOghefJWzZFhRq9/mVm0SbsW2nUoVG1pyZZdEyA3xSO4iVbG5RmnHqTXBx7sGn4jSqyHQ+H0y2S/xZh4iYIiB+MrfU3xuXu69vkZprwPSMkES4HlZpHKdSey5eCTwv0t05oMd0qNPxEm7XN+HRv53XqeipVla9xyaxXiPlBX0B5AQg2VBY+Y+YVUaSXDNSuZHQQPn+SzNmlRpqBXRmzFSQEAQBQSfRPo8gUCf4nfZM6j7WnLReH6T/mHraL+Wemxj/hmILm/E7KNHWJC4ILqdTI2vjHsa0syyXhsPIAuD159vx0LDBSbvt4EydFThNo1+O9tYt4UeB31YvIiYP81vJdE8WN404/m8epnGTt2WrKwc0lpBEG49ei5GqfJoefx+0+HxLE5OHz1zh3tGUrrxafdtd9b8jNzqyKeOpPaDxWiwJB5WUywzi6osnaFWozK5zX5i0TAtzURjK0mqD6FFt2/DPUO/9V3abjcjnzK6ONuMLWlor5YiB4rHncaz+a3eJN3tsy9Ykq3HVgNoT4XVMxMx8Z5RFwssuHxSr6GmPKnw2bH41lIg1DHoTMR0VFilNeyWnljD8xQ1secxcyRJkTr7L0I4VVSOCed7m4nPxH5s8mdc3yWm2NbfAx3Svd4llh9s1mCHskHmQWnlz0PsuaelhLlOjpjqskfzK/I69minXdkaKjS7MYMR8JJh35Qss27FHc6o3xSjkdJMv8PhyzwxMCbm9repXBOanydqjRUbdpuZVgnVrXWm0jSYE6Ls0+3YqObLe49Pg6sOpkgEGmTBi/hleXON7vidMfA0Dedg/wC27/HHOOQv5FarQt/1eQ3+4jZu8b6+NpsDBTaHBuUGQ6ZubC+itl0kcWFvqykcu6VHq93mGphWCp4pZldmvmglrp681w5/Zyuu5tF8FNR2iyhUNKlh2tyvFKczpIZ4Wz1suiWNzW6UvCx0Za7O28+rXo0ixoDy+SJnwtMAeZKyeFKMn2rzIlwcv0n0CcE89Mh+F3J41cLehW3o2VZ18/0MNSrxSPjRX0p4hCA6Ikf6Z9lTx+ZquV8v0OdaGJvcyB6rNO2aNcGl6ujNmKkBAEBKA+g7gn6jlq77Rn4vu6eq8L0l/MPX0f8AKReVsX9e2iAZgVJAzCPE2I/XXkuSOP8AhufyOi/aor9/qbnYYNa0uJqtsASfhdyC39HNLK234GepVw4PKPwNXiOik+OI0zkdEZRfRemssNi9pdO5zbJb3x4nr92qbm4aHAg+OxEHU8l4+raeXj3HdD8pR7cBmvAJ/caDWA+fxC7NNVQ/+v2MMn9XyKzCOlro5gLoyLlG8Mka6lnhQclSQbsEWNzI06rmn+aPxJk01wc+1meGn/L+TVpgftS++5hkVpFNV2bWcSW0yQYINri3ddkc+NKmzinhm22kbsJs+s14cWQAb3GnuqZM2OUWky+LDOMk2jrxVBzyMpaLG7tBfVZY5qK5OmcW+nmaN3NsDBV3vJzS3LIaHz4gTEuHIG8rbVad58aXTx7HJgyxw5JXyWtTeugcNXoZKk1XYgt8LMoFZxc2TmkQTeAudaGfrYZLXCXfwNZaqGyUKfN+Zx7y7ytxlKkzI5rmPkkwWwWxaDMrTSaN4JSd2mZ6jVRyxSpqjLY2KYx4dxGuMH+ExEaHndZ6jHKUaqvM6sOWPe/IuxXeb5QJBF3Hnp9nuuPbFeP39Tp3e4qtt5nVQXNiGADUgwXGQSB94D0XVga9XSOfKm5WdGF2o8OYOESKbCIbJLxDW/5WctPGm76v6FlkdpUb6OwKtQWqsAHVrp0B0nv15Kj1cIeDL7JMsNlbo1KddlfjtOVzXEBhvHebLPLr4zg4bSscDUt1ntti4ThMyTPiqEW0D3ueB6Ax6Lz8s98t3w/Q3qjlqbp0X1XVTWqNLqnEjwQDOaB4CYWi1LUdtLpXiVlfUthujQo1GVW13Pc0lwh1OBJktIDZi3y81rqE8fsppprw/wCmEM7yJ2qOHfzBmpgqzWguPDfAbe4EjwgyTOkTzVNJLbmi33LT9qEl7mfC9m7Nq4iq2jRpue95yta0SZOn+6+nlNI8iONtmvH4KpQqOo1Wlr2Ete06tcNR6KYzUlaKyg48Mmg2wPLxA+v6CrN80aY1wn4cms0W9VbczNwXczeDF/1ZVXUtI56outUZMwUkBAEBkwSY66KG65LRVukfR9xaThhhIOrvux8R9Zj0XgekJJ5eD2NNFxxpM9B/w0OqisPiAyk5nDwiSAItqfXRcaytR2+B0bebO2pTKyLHO+meiJijWGm9uR/BSQUdfCU6tQua6XNBact41mQPVdUck8carjqUcU3ZpwGxODmdTFQiwMtMDWLx5q+XUPIvaoiGNR6G80nfdPsVla7l6KvbOHecgFjexGun9l1aeaVmcotnfgtm1HBlNkkmGhobLidAIHNYyypy6FkqXJz4vYtZ9VtAP4dTMRdt2lodILT2BW2PPGCblG68PmUnFyXssrt4N0zh2CpXxmeXAQKRME/64XVp9asj2whXz/0cmTSy6yl5f7LbAfReH3rY9lPsKZefXxAfNZP0qv7fP/RD0ddOS9f9DNJoa52OqQQTbD8m3dbPa3Vaz1sopNx4f7dfvgzjCLbX7lZjPo1wbNNoP8zRAAHUmbarD/1JXxFfU1WjvrwVWK3EpUsUzDOxGcPpGqH0ywwJgBzdQSfkR5LZ6+ax76X/AH76EfhIt9WWez9yabHOLcWSKTeIab3hodYgBrebryB/dc0tbPLB+zFcdfH5dzfHp1CS5b5+XzIx2y2VW5QYINiSfbsubFqJQZ0ygpFhsfCDhNBMFstIF4jTn0g+RCy1Evbb78loKlRbYWhSkZ6oaObnRDRzcewWMU5SSLPhWiwpUqJP1dUVGyYewgtdBiQqzi4ycWQm2rNtGoGvcH1aeWG5QS0OBM5g6TfRsWGqnbatJhs72U6VRsSIcLOaRo4atcO3MKnRlbZ8w3BqOGJrU+I5pphwDgTmy8TxNBNozXuD2iSvb1qXqoyrrX6HNjd5JR7Wej29tHEYbD1jQxDgSXSXjOZeGlz2v/6Zh+gtIBAF55MEI5JxUl9/ubTXDZ8q2LXNHEMe0+MHwPB+F0Ehw7iLL3MyvG/A8zFSyU+TZtHFvrYpz6xNQuJ1MSTpoLCeirjgo4vZ48y+WW7LUuV2NWJY6xJHMANgAR9kQpg14eYyp1/jwOVzgLQtasw4Ie4XvzP4CFKTKSaOepqrozfU7tj7ROGqF7adKpLHMy1qYqNAe2C7KftCbFVkrNIS22u5i7Asyg8U3Btk5iLTm76qqyO6rzLvAutnJVpFuv8Aj0WidmUouPU79iYngVBiPA40nNIY+DmMkjwkXAi/mFlljuW0300lFtv7s+l7Pxxr0zjH0mNdV4lQ5GhjAAfh8JnXtN189qX/ABnH3rz7H1GDR4nii7fRG01szmHLMucA0zBNNpMmRLdR10HdZv2LXavMYNHDJHdJ/A3U9sF1A1y1rItlLp8RjLe1jPaFWeLblWNc3+niTDBjcbbfF38vvzN+H2riMRhmVKzWw1j3MDWw2mwH4XO1c7np1TPNesWJPiPsrv8AfxIxaTEuX1lV/M4q2O+rbUZF8xuPuiR9oK0MdzcZeFffQyniSwqa++v+DTg6uZ/DMDxEyBAu65IzG5J+atmhUd33+hjp4Kc9rMcDt97sWMBTc5tGoJqtMS5zQSLxaCNOyvPFLHpJTvrXTodDxYnlrbzFP7XJlma6vwg4ARJIOYCx+1AHLosNrji31+3kbvBj9ao14dOn/DRjYa5jhDxDp+IEtmQLA5eS0xLcpJ8dPv3kZ8OPG40jvx+FNN9J1GacVKeZ4c6YdlJIJFiJWWnm3GUm7614corKGNzUa7/vx8zXi6bqeXEPLi91R93Ok5S8tBM3JIv/ALrTG3kbj7k/n1/Uvkhi3Rio1yl9+4rN/HgYdod8QrWg/dB+IEmDda+jLeV10r7oz1mPHHHurtX32PQUdr02mm2XVMwLv3jGwWVGkEmDI09D0MLPFgk5SUuK4+t+7sYaxxjjU4pLdyvp8TyeC3qxdHH1c1R9ZuZzeESId9ljQMsNcJGjbkRzlerLR4XjVRo8f10t1Fjhtu08fXyEGlk4jpaSXPaXNOU3jKcl4H3Y1hZzwRw47S5/ctDLKU9rZ43Z21mUqzXkucBTqNOaTckuETyJj5rry6dzg170zNZoxmnfc1bZx4qPmm50AkA5iSRqHGwvcieytgw7I+1+hTNncn7LLPF7cYGhrbfVkSDe4aCJLde47rnx6R22+/34m8tQkq9xwUdvBrS1rblxM2mCcwiRqCBdbvTW7ZktTFLg6DtEVcNkr6ZauR2kvYGFrYBA1MR0dKiOBQybo+4h53KFMsNlbYdhNmcSg1xqOrwTlJYIH2nA6loFlll08c2ep9Ehjzyx47XUstyd5K1bPSrl7i1peKhLrg5hDjBHO1r36Ln1ulhCpR+FHRpc8sjakXWN2jXZimUqLyA6nWJDcpMsbWMyWTY0gffqVyxxxeNyl7v29/vOpvlHgMJjalDG1HtJnOc9wJBqt1IItJC9d445MKT7fsedvcM0n9+BZ4rbr64fhqvgZUvnz5wJAp3adYLeohYR08cdTjy14V8zd5nJuLXD/wCHm8Hga3FBFNxAcbgGIE3nyuuzJOGxqzkhimp9PE2PEVC/vHK0jWeRVVzBI0lxkbNdZ9j2e7/yAKmK5+RScnT+P7HMVqjA5CVqYDNaEom/AnOZlRQ3O7Nn7U62lp5dRCjYi/rZCpiXOAadAZA6e6KCTsSyOSpmvN2U0VTNoxTwMoe4DoCR+ar6uN3RutTk27VJ18Wbae067RArVAL2zu5681R4MbduK+heGszQVRm/qZDalfLk41TLMxndE9deyPBju9qv4Ex1eZJx3OmbW7cxIaGiu+AC0DMbNOo8iqPS4W72rubR9J6iK2qX6GzC7w4mm0sFSWmxDgDbz1Huono8Upbq5Jh6TzxhsvgwdtyuXufnALug0vIjpdW/DY6qjGOsyRluT5IdtzEmqK5qniAQHWmNPzVVpMSh6vbx2Nn6Tzuanu5Sroqr4Gbt4MVn4nF8UQDlbIF7AxbUqFo8O3bXBMvSmoct98/BGB21iLAvsNAWtIA7SOyv+Gx+CKT1+eVbpfA34jefFVKZpPqZgeZHi9COXbsFSGjxQdxVET1+WXLfJrxe8GIqsax9QkMEA3kwSQXXub6+StDS4oNuKEvSGeXWXvOfF7Tq1ZL3kzBIkwSBE66q8MEIflRXLr8+SO2UuOx0bP3jxmHEUK72QHAQdMwAMHkYEA8rxqVEsGNu2uTN6vI4qLdpdL5OPEY+rUe6o+o4veZc4m7jMyT5gLRQilSRi8km7s1NxDxMONxB7iQ6PcA+inairm7s1yporYzKaFjMeqihbIzKaFk8QxEmJmOUmJMeg9lFC2A89SlC2QSpBk2q4aOIiYgnnqopMnc+4ZUIMgkeqNJhSadozOIdMyo2It62d3Y475nMZ6yZTZHpQ9ZO7skYp+s9OnLRRsRPrZdwcQfe/rEJsQeRsjiqdpXezSVYoJQBAEAQEoSEAQklAFAIhSAhAQkIDa+oSxoJJDZgdJMmFVKmzRybglfS/M1qSlhAEIIUgIQEAQEICUAQgIAhIQghASgCEkIQEBKAISbMjf0VFsUOGEsURwh1SxQ4XdLFA0+6WKHD7pYI4fdLFAMhAiVBYIAQpIZjkPRTZAylAQUBIQlEIAEAQghASgIQBCAgCAIAgCAIAgCAIAgCAIAgJgdUAgdUAjugEd0Av1+aEk36/NAPEnBBMnmookmUomyM3ZKFjMlEWOIVNCyc0qAYvUhkimYlRZNMwUlQhIQBAEICAIAgCAIAgCAhASgCAIAgCAIAgCkBAEAQBAQgJQBAFAEqQJQEyUAzFRQJD+qUTZJPdQDBSQEJCAIQEAQBAEAQBAEAUgIAoAQBAEAQBAEB/9k=");

/***/ }),

/***/ "./src/image/singlebed.jpeg":
/*!**********************************!*\
  !*** ./src/image/singlebed.jpeg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExIVFRUVGBcVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGC0dHyUtLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0rLS0tLS0rLS0tLS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYHAAj/xABHEAABAwEDBwcIBwcDBQAAAAABAAIDEQQhMQUGEkFRcYETIjJhkaGxByNCcpLB0dJSU2KTouLwM0NjgrLC4RQVFiREc4Px/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAJhEAAgICAgIBBAMBAAAAAAAAAAECEQMhEjEEQVETIjIzI1JhFP/aAAwDAQACEQMRAD8AsrNErOzxIOyq3s4XlJnuND2EpsgJRQamSBMTK97FA4IuVDPTRAyFwXqJy8qoRjQE6i8AnAJ0KxQFI0JGhSAIijmBTxtUTQiGBcALs4qp+SUNnxVmxlUobK6SJVtuFAr60MoFR20YpJDRM1bx7vFVkEOHXf8AiPwVtbwhAO5jfB5UUaQWztqabKd4BXUs1YaWaHd8FzTJrOc87Ae5jV1bN9lIYxsB9y2+P0zz/K9BZivcvPgGjwKmp0l5wu4LRZjoBjZ51274KTJwoHFeiHPkKdZ7mO3InCWUUidx8EsApGN9ey9OYKRFKRRnA+BXAAIWecHqt9596Uc6Rh6nHxClibR5OweDQksjec31B30KYAscdbQ87GtHgvKWzdOQ/aA7AvJGw1ZzuysVxYrM52Ar2DxQtjiWlyLDjwXi4lylR7uaXCNgX+gk+ge0fFQWizPaL2OHC5ankBsCitsI0HXaitf0tGJeS7oxkjUO4KymjQcjVOJqYK5IApXBNAVUTY0BOaF6ic0KhNjmqQJgCeFwB7VMxRNClYEGcg2zuVnAVUwhWMDCpKW6KOOhbSqO3FaaTJhPpDsVFl2wmKl9dKuqmCaSdWJjnFukzJ23pDj4IaYUa/qb4RfmRFr6XBx7lDMOmOoj8LAs8ezY1ofkWOrnddfFo9y6lkcebbx8VzfNttXHd4vK6Vkj9m3d7yt+D8Web5X5JBdMUrhd2Lw1px+CszKBQi+Q/rWlYOYeC9Fg/enU5nEJhRxHm/1tXpBzQOpK8cwcE6QYcPEIBAvrTsBUliHO4NHYFE7oSHbd2lT2LWf1cEzALZW1DjtcV5S2Mc0ddT3ryR9howtictRkF3S3BZmxxq1fNJBE+RgFQK87A3rx8P2vkz2vIXOPFdmpooLd+zduKyOb+ehtJa2kYeaBw0jQEkigO27BaK1ySEEUFDjRbVmjOLo876E4SXIz85QMiPtEdNSAlCgj0Gwd6anPTKqyJs8ntUeklD05NkwKeCoQ4KRrwiKTNU7EOxynYUGMgyBWMc7WloJvcQB1lA2aOqjyvC9r4S1waQHmp2ClRvoszTjtFHUtM1wWazvde3cfFSzWyRj42aRq9jnbejo1rX1lT5Ync/pGtLlaeVSi1Rnw4WppmZnvcfVPuUUvp8T+OnuU5bV53f3BBWh9ztw73PKzR7PRl0XGarLyeoe8rouSh5tm5YHNRlzzsaF0HJw823cF6GH8DyvK/YTjBOKRqUqhnBGdB29Pd0RvSDocU5+ATijpMAlkx7PevP8ARTZTju9xQCBuHm95Cnsgo3gVDJ0Gjr8AiIxRnBFgJbMOaNy8vQm7sXkrCjnuW84ocnsDntLyT0W0rTaaqjtPlVgkjcz/AE8gDgR02ClVUeVE1bXqHiuZCZebBNx0e2lC7kbTJ+c0UMokERq17ZLnAaRGo1wG5ambyzbLL2yfALjzpb0wyKmPFx0gZZwnto6javK9I7CyR8ZHfKqyfykWh2EMQ4vKwIepQ9PwRLl8Gufn5aT6MQ/lcfeh5M97XqMY/wDX+ZZsPTXPRUUI5Mv3Z62z6bBujHxULs8bb9cBuYz3hUWkm1T0JZejOy2n/uHezH8qKs+cdrONof2M9zVm2FHWdydJAbNLFly0/Xv7R8ETFli0fXye0qKFyLicrcV8CpmnsGW7QADy8ntJbdluZ9NKV7qGoq6tDtGxUcEnNCRz1P6SZr+uorSN/mLlSWW1O5SRz6ROI0nE0q5u1abK0INSMVgvJ7LS0v8A/H/cFubVMs2dJOhYPk7M41vPd1Af1f4VRaTzXfyD8JPvWlNOeeoe8qhtEdWn1wOxjQssDTI0ea481Kdw/CugwMo0DYB4LC5tw0il3jwAW9GC9HF+tHkeT+xnm4JXG48V5uASOwPFUIkFOYN6c/UkPRG9OeLwmFHO1KOYdLcpXYhRP1oIINKOjuPfREkczgFE9t+4D3qabDsRYB0QSr0ZNF5KccH8pJrE71feuUucupZ+urE71SuU1WPAvtPVzOpC6S9VJVeVyNjgUZHZJDgwoFXrJTTHUuoKYMMmybAN7gvf7a/WWjifgimPqUj3deK7iHQL/tp1vaOBK8Mnj6fY3/KnSgplFAZG2xt+k7uoiIomjapYG0IqK1xHUVNPZ9Egi9pwOzqKZUy08Eox5CxvaPR71Oy0j6IQYXmlGiNhzn0JC816CdMNIrwlTJk2bPMeSk7/AFP7ls5rRcuf5jS+el9Rv9RWsmnWPyds0YOifl7n/r0f8qrL6tHW93e4BKye52/3BCRS15MfaB/ECssEaZM3+b18cg+03+pbPUsZmgaxu9dvjVbPUvRxfgjyfIf8jFamv6JTgmS9Ep/ZIY7BqV2KR3opfSRFH61GcDvUgxUZw4rkEY3E70+XDimwi/iUsurej7ASswSJW4JEpx8/Z4OrE71T4LlgXTs5nVjduPguYtWXCtM9LP2KvUXk5gVSSEIVs03Ku0Uaw4IoJKHL2kma14uRCStRFkZrOA8VbMza5ODl7VIYg7oRADlXE3iul0br8FVPnGAuAS8r0jX4+K3zl0SveK4IyzTAjRcKgqsai2DWqxVI287Y+1WMsvF7Tr2HYdiEqtHkiN8h0Gt0y70du9BZ05vy2KQB45j72OaatOstrtGxO1R5/lYowacX36MlNORI49aOs82k9rNbjTdcq7QLnupfeepF2ZhjkDiASBdQggHUoqVMytNmvzQeIpHaRFXta2mwtce69aW1zLn7XPDq6J51DWhFDrFVqI7QXRg9Xgs+S3s1xiopUEQz3He73JI5KOiG8+HwVbFNc7c7xRHKc9nUz4qaQXI6dmU/zNdsgWzbJcsTmcPMM63+C2FObxC3419iPLzP+RhYcmSnmphPgmWh3M4hGiVkpN43LzTziotPn8AlifzjvRo4I2qN3RS6WKinPNQSCPgGG5ek1cUsaQm8I+wEjzQLyjtTqDivIHHztl11WncfBc4C6DlZ/NPFc+rqx3LNi9noZXtC1TmOTm2WQioY6g10KhadQ1qnZK6CNNFRm4IMxOGIWiyRmvaZ42vY1ga68FzqcaAFd12GL5dFY5T5Ke8TMMcZkeHAtaK4jAmmAqtPFmJKenM0eq0nvK0mbmaf+lcXsc8uIAJIAuH/ANSOaLKDsuMnNNqh0LbAwSXkt6TT1g+iepc8zizeML3uiB5IaiauaPeF1iGM44LNZbyXK+vNca7EkLWy8Z8Tl7CjrLepMqZLkhJLmOaNpF3aic17Hy0rWC++p9UG/gtUJGiMlVm9zLydyUXKuadN45vU3VTetBlKzMtMToZYtJjgKitCHDB7D6LgUVZLOABd+upHxs6k0pWeXkk5ybZyO3eSaYPLrPM1zTU6MtWvB2VaCDvoFj8s5t2yxHz0Ja03B45zKnY4YcaL6Tam2iBsjHMkaHscKOa4AtcDiCCp8UxOTRwOyZaiMZqwcpoaIFHUrhXZdigWZWcwULgRsPxC0menk1nhc6Sygyw46AJMkY2UPTb1ipXOZDokg3EXEG4g7CNqWUSiyf6aqw23Ta4jd2lWBl85uaPFZ3IruYesjxVyHedO5o71KtjqWjr2aU4bDESaXk+K19ntccgDWvaXVqQDeBtIXJRlHQhhA49hR2aOVALRM5x9AAe1X3LXGqSMeSLts6s9uO4KC29EbwqPNbLZlhDi6pJdjjQOIHcj7XlVjn8ng5tHHZQo8WmSCv3h4JtmN6bZpQ55LTUHAjcn2AY7kfRxLp80/rWo7VJ0BtKc4czeR4qC2jnxjqJXHBTH3FeD71FqTWO5xXUcSW2S4b0iFtj8F5Mlo4+asq28ClbxUV3VvV3ZLEXQiaGNprSjKBpxpru61j7e+rsdSvcmZymKzMja5tcHVa5xoLqCm0AXrzpY7o9GM6s9lt9phZpPjYGuq25+kQSNexZKztOk0NFTUADaTcB3q3tOWQ6KSJsVOUcHFznl1C01GiCLtiqA6mum5UjFR0hJPl2aSXNW2aLpJIixrAXGujW4YBrSSVs/JrMZLPQ4NdQdetYK1Z32uVhjfO4tIoaBoJHWQKrVeSudwbLfzdJoaD9MipPZRCSdbDi4xdROo2ezjqCKbGNhKZZbwEY1q6FUNK7IQzYAniOuKmovBUEB5LCx4o9ocDiCAQeCHyfm9ZIHF8VnjY4ilWihpsVgnAoncmh7QnAqOqjntbIxV72sG1zg0d64QJ0koWYt2fdhi/ftedkYL+8XKltHlDkkNLJZHP8AtyktZvAGPauckgrHJ+jogKymeWZVhtgL5dGGWl0zSGH+dpufxvWadacpTkCa1CIH0IWU77yDxUsOa8JPnjJM7+NJXHquCV5fhD/8/wDZnOcrZEksT6MlinYCDpRODgaanDFh7VFZMrNLyXgsqRQnC4X3rsdlyXFHQMja3+QEHiEHlvNGyWq/QMUmBfGAAT1sN3gUvZzjx/FmItuVYxybOUbWlaaQuuClybaqco6uPuBTcqeT99nFS3SYfTAqOOxVJs7oWFjG1BrT7JpRNyoSm9mqyFlN7GMIcRQV7SSrey5aJlneTfoDua5YzJk5ETQ6mk1tDvUtltnm7Q4HVT8KpHIxZQTo6VknLRZBFQ0LgxvbitAzLjYqA3l5DAN+tctba6cg3YW9wU2UMrHloRXB1ewEqymmtkZYn6Ox/wCrY7RZpDSFCRrA1Eplpvl3NHeSuaZGzg58z3GvRA4AlaDN3KlIWuc68gE166n3o8V6JtNdm1iYCL9o+KkjjbU3DErJ5FzubJOY3NAbdV9bg5xIZUagaEdi00D6+0/uNEkotAsFypGNIAXXal5VeU8oEWh7adEDwBXlVJpCOWz5RExJrdXcnF52qFuKcXrK0a4ukOSJhkSFyFHORJVdAzQtBYIY6UrpSO2kupTsBXOle5s297bTGSS4u5l+quBG6iEo6GxzqR9DZOmBA71YtKyWQ7X6JN5FTvCEzhz6ED+RgZyko6RPQadl17ioxlXZrlG3o3NVBarZHEKySNYNrnAeK5TacsZStGM3JN2NIZ/TU96FjzdDjpSyve7WbyfadUrnmS6CvHfs6BlDP6xRYSGQjVG0uHtYLPz+UyR91nshP2nuJ/CwU71X2fIUTcGAka3c49hRgaCQAC0bALrkjzP0UXjx9g9oyxlWcXyNgbr0QG0B7Sq5ubnKHTmmdKReSSTTcXVPgtDHMG1FMdd3gnB91ONesJXNv2Osaj6Bsn5Hib0Y2k7SBXbicLlaMiB1FtNV54VQ8Uf0SDuPcimkBpaTQnUMeNEV/p0tdEpmqW3dHrqTsqaKR4qauo031xpvQcttaxlHODRjVxA4KntGd0TOi90h2NBDe0p0TNPZ5NEg6TaDr92tTG2NjDnFxa0/SOiL1gDnFaJyWQQip1tZpyDjSgRuT8xbbaHaU7uTbrMjtOTgwXDt4KkUyUnH2Xdpzyhi6LnSdTcOJN1FTi0C2HzVlcCdcZLm16xQAcCthkzMSyRXvaZj/EPN9kXLTQhrAGtAaBgGgADgFVQb7ISyr0jjWVc3ZGUL43MrhUU71nrRYXxskYy4P6V3evoW0MZK0xyNDmnEHx6j1rnmcmQuQfTpNde06yNh6wllBx2gRmpafZiYMqaU8Y0SAAbz1DBOmtdZhfg0n3e9T23JIOHBUMuTnxuL24kEHcca9iVSGaaLuzWqkTztc7uFFett5YylcGgdyw7bboxNa7pVNaA63fBXVttWpUUmJSZZ5LykWGU7WtBrrF5Wn8k/lFbPoWS1HRlaCI5CbpQcGuOp/iuewTUjkd1eDSshZqmhb0hTDG7AhP8AUZOWNPrs+krQ/StM5+0R2UCVcuzXz6MALbS18l1zgedX7Wkb968tKnFoxyjJOmjmOiUj8UQY1CQsdmtoZReonJaFdYBuipIZS0tc00IIIIxBGBXhEUohK6w0dYyXlalkFqJGlyRcaYaYBB3GupUORBTzjr3vvJPWanvWZyZlF0bJYTeyRpAGx2o/FaOyTAgALJnj8Ho+PO9svzLx2ohklQqmGXb3IqGcDB2PWsy0bLDA8qcOoMSCUBNbRGKvc0DrNFVWvONg6DS47cB33qii2JKSXZqA7RbqrurRDTZRDL3SUA4eKyLcq2qd2jE1xJ9GJhd2kVpxorawZhW2c6UtIwdcjtJ3sj4qscTZF5oommzqiaSWgvO6ja7z7lVT5x2iU6MfNrqjbpO3DE9y2+TfJrZmXzSSSn6IIYzuvPErWWCwQQCkUTGD7IAPbirRwmeWf4OWZMzJt1pOlIOSafSmNXHcwGvbRbTJfk5ssdDMXTHYTos9luI3krTPtFFC60lWWNIk5yYVZYIoW6McbWNGAaAB3J7rWq0ynamaSa6F4lgbWUwz9aBMgTeUvCHIPEtBPrQuXoBLEdrOc3dS8dibp80lMgtPMDsTo1ptpWo7E6aZNqtoxtogVdPZa6lobW0BxphW7ccEFLCoOJVSMnbslAqktlgeMHOHErdywhATWWupLVHOmZKC0FsErXuq6hpXWKUWfY8tIINCFrsv2INic7q8Vj3J0TkqNdk7KEUzQZA0PAv1A9a8spDG410V5V5k2gt7LuCHih0grZsY1hObD1XLNyos42VzLJtUrbOEeIUvJIcgqAEIkphRpYmlqFjcCtfHQgq3sc/eg7VCCEljfTghLaHx/a6L9s1BjcgbTldxuZcMK4uO5BWmajaVxx3BdBzJyEyKNs0jQZXDSFb+TBwAGo0xKSMPZZ5XVIoMl5k2u00e7zYPpSkl1OpuPgtjkjyeWaK+VzpnfaubwaPetALZReNtG1aYxRnk2HQMZEAGNDW7GgAdyV9rAVabXxURtNMLlToSrLN1qOxRPmVc60E60nKruQVEP5VJyiFa9Pa5LyDxJ6pNNM0rtaa6YDr3YrmcSDvUcj6HgU1tTjcO9UmW85rPZhzn6TrwGM5xO/UEoxb2q1DRALgBSridg/ym5NyrCeaJGvBBILewiq4rnBlqS0yOe4loNAIwTogDC7Ala3MQMfEGOadKJxLTWgpIdKnbqTxeyUnZsJAa3blG9Pa9I4VTi8iBzKoZ8SMKgcUKOszGeA0bM/rLR2lc8XQ8/D/04G17e69c8KWSFbNBm3Y9Jjj9oDuXlcZmRf8ATk0xe7uXkyjZyZWNbgnhNAwUoCxs1CaK8W96eBikA1oBGaKaQpXDFNIQs6iBzVXvdRxVk4Kqtn7Q8E8divQbCzTkib9Jw4ioJ8F1WzTjog6ruyq5FZLXoyRu1NcF0SCfnhwON4/XFOlo5PZodK5MfVehfVoUkrNiolo6xrHp+mEMQaV1LzBgeC4IRppeUUJAFaJhccerFccFxy9amE4AKp7TaAxtXvawDW4hopxWXypnoxlRANMn0nVDN9MXdyWwukdGEwoSSAKVqThvKzWWM/bNBVsfnnfY6APW848FzC25ZntBPKSEj6IuaP5R70KEbolyvo0GWs8bVaat0uSYfQjur6zsTuWfXkZZ8nl15uHfx2LkwFc41K3eZL+Y+7WL9fRHcqSy5GYTgTxWnsEQjAAFBsTwWxJPRomvrrSH9bEHHP3qTl9WH61qghO5yGe+9KZf1rUTpP1qQCZfP6U8lGNrz3NKwxWuz7k/ZD1z2UHvWRKSXZxvc0nUszesuP4ivKryTlGNkLG8o0EC8VFRUkryvGOuyTkNaptdysRkF31o+7PzqUZBI/ej2Ds9Zec0egVQOCbRW/8AsJp+1HsH5koyEfrB7B+ZLRxTkppVwMhH60ewfmTXZAcP3o+7PzopBKVyr7dDXnDHWtQ7N931o+7PzqN+bp+tH3Z+dNFNCsxZf3Gq3mQrYJWtcNx6iFTy5q4+eH3Z+dXWa+RDHpN5UEE16BFKj1upWrRGMvuNTYpLgrNrq3O1oGx5PIPTHs/5RUdgLnFhfzXA6sCNYvTQKSAbPauTkex17T7sVLaYC3nNvbUdYIOBQWU8jODieVvrrb+ZSWi1yxWcUc0uNWglpu4aV6VO9Betjrfbo4Gl0pa0aq3k7gsllTPq6kDD6zvggbdkSWZ5fJaNJx2sNw2AadwQ/wDxY/XD7s/OiTeUqLbb5JTWR5ccb8EMtF/xc/XD7s/OkOaxP74fdn50KF5mbsx5xG1GQWcvNB2q0jzWINRMPuz86vbLm7ogDlB18w47ekukdDZR2exBouHHWjoY1cR5DIr5wex+ZTxZE1coPY/Mgh2ius8f62KxgFR+u5FQ5HI/efh/MiWZLNRzxj9H8ypEVqwFv6617S/XwVg/JZ+n+H/Kidkk4af4f8qlkqAnyoaW0UwKPOSzf5wez+ZDTZHOHKC/7H5kGwow+dtoLns2AGnEhUNVv8o5t6Y/aj7sn+9Vbs0f4o+7PzqfZz0ZVeWo/wCI/wAYfdn50qILP//Z");

/***/ }),

/***/ "./src/image/star.png":
/*!****************************!*\
  !*** ./src/image/star.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/star.d0cbd94e.png");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_5__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.es5.min.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/prijay/Documents/Davance-Frontend/Frontend/hotelfrontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map