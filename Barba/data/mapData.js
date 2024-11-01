import { images } from "../constants";
export const markers = [
  {
    id: "1",
    coordinate: {
      latitude: 35.6892,
      longitude: 51.3890,
    },
    name: "سالن زیبایی گلامور",
    description: "ارائه دهنده خدمات زیبایی متنوع",
    type: "سالن زیبایی",
    image: images.salon1,
    rating: 4.5,
    reviews: 120,
    address: "خیابان اصلی ۱۲۳",
    phoneNumber: "+98 (21) 123-4567",
    distance: 1.5,
    servicesOffered: ["کوتاهی مو", "خدمات سفر", "پدیکور"],
    openingHours: "۹:۰۰ صبح - ۶:۰۰ عصر",
    website: "www.glamoursalon.ir"
  },
  {
    id: "2",
    coordinate: {
      latitude: 35.7015,
      longitude: 51.3927,
    },
    name: "آقایان دن",
    description: "آرایشگاه کلاسیک برای آقایان",
    type: "آرایشگاه",
    image: images.salon2,
    rating: 4.8,
    reviews: 90,
    address: "خیابان نارون ۴۵۶",
    phoneNumber: "+98 (21) 987-6543",
    distance: 3,
    servicesOffered: ["کوتاهی مو", "اصلاح صورت", "ترمیم ریش"],
    openingHours: "۱۰:۰۰ صبح - ۸:۰۰ عصر",
    website: "www.gentlemansden.ir"
  },
  {
    id: "3",
    coordinate: {
      latitude: 35.6897,
      longitude: 51.4215,
    },
    name: "استودیو مو شیک",
    description: "تخصص در مدل های مو مدرن",
    type: "سالن زیبایی",
    image: images.salon3,
    rating: 4.2,
    reviews: 150,
    address: "خیابان بلوط ۷۸۹",
    phoneNumber: "+98 (21) 321-7890",
    distance: 2.5,
    servicesOffered: ["رنگ مو", "اکستنشن", "براشینگ"],
    openingHours: "۸:۰۰ صبح - ۷:۰۰ عصر",
    website: "www.chichairstudio.ir"
  },
  {
    id: "4",
    coordinate: {
      latitude: 35.6841,
      longitude: 51.3884,
    },
    name: "آرایشگاه شارب کاتس",
    description: "جایی که دقت با استایل ملاقات می‌کند",
    type: "آرایشگاه",
    image: images.salon2,
    rating: 4.9,
    reviews: 120,
    address: "خیابان بلوط ۱۰۱",
    phoneNumber: "+98 (21) 321-7890",
    distance: 2,
    servicesOffered: ["کوتاهی مو", "اصلاح با حوله گرم", "پاکسازی صورت"],
    openingHours: "۹:۰۰ صبح - ۶:۰۰ عصر",
    website: "www.sharpcutsbarbershop.ir"
  },
  {
    id: "5",
    coordinate: {
      latitude: 35.7070,
      longitude: 51.4100,
    },
    name: "آرایشگران برتر",
    description: "جایی که دقت با استایل ملاقات می‌کند",
    type: "آرایشگاه",
    image: images.salon5,
    rating: 4.9,
    reviews: 120,
    address: "خیابان بلوط ۱۰۱",
    phoneNumber: "+98 (21) 321-7890",
    distance: 2,
    servicesOffered: ["کوتاهی مو", "اصلاح با حوله گرم", "پاکسازی صورت"],
    openingHours: "۹:۰۰ صبح - ۶:۰۰ عصر",
    website: "www.sharpcutsbarbershop.ir"
  }
];



export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];