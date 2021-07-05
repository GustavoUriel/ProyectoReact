const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyCzs_ckTS_ONOG0cZQpa0bftafmJCQTEJk',
  authDomain: 'candystore-jls.firebaseapp.com',
  projectId: 'candystore-jls',
  storageBucket: 'candystore-jls.appspot.com',
  messagingSenderId: '411951059473',
  appId: '1:411951059473:web:551466f4db4eaf699717b0',
});

const db = firebase.firestore();

const services_local= [
  {
      "id": 0,
      "idUsuario": 6,
      "idOtorgante": 77,
      "idTipoCredito": 4,
      "fecha": "23/10/2012"
  },
  {
      "id": 1,
      "idUsuario": 2,
      "idOtorgante": 26,
      "idTipoCredito": 0,
      "fecha": "20/2/2019"
  },
  {
      "id": 2,
      "idUsuario": 2,
      "idOtorgante": 17,
      "idTipoCredito": 2,
      "fecha": "18/6/2011"
  },
  {
      "id": 3,
      "idUsuario": 2,
      "idOtorgante": 59,
      "idTipoCredito": 1,
      "fecha": "26/12/2018"
  },
  {
      "id": 4,
      "idUsuario": 9,
      "idOtorgante": 81,
      "idTipoCredito": 0,
      "fecha": "16/11/2012"
  },
  {
      "id": 5,
      "idUsuario": 9,
      "idOtorgante": 78,
      "idTipoCredito": 5,
      "fecha": "9/6/2013"
  },
  {
      "id": 6,
      "idUsuario": 7,
      "idOtorgante": 3,
      "idTipoCredito": 3,
      "fecha": "20/8/2014"
  },
  {
      "id": 7,
      "idUsuario": 9,
      "idOtorgante": 35,
      "idTipoCredito": 2,
      "fecha": "2/9/2015"
  },
  {
      "id": 8,
      "idUsuario": 8,
      "idOtorgante": 75,
      "idTipoCredito": 4,
      "fecha": "1/11/2019"
  },
  {
      "id": 9,
      "idUsuario": 6,
      "idOtorgante": 2,
      "idTipoCredito": 6,
      "fecha": "14/7/2019"
  },
  {
      "id": 10,
      "idUsuario": 4,
      "idOtorgante": 59,
      "idTipoCredito": 4,
      "fecha": "7/2/2015"
  },
  {
      "id": 11,
      "idUsuario": 3,
      "idOtorgante": 6,
      "idTipoCredito": 5,
      "fecha": "4/6/2011"
  },
  {
      "id": 12,
      "idUsuario": 4,
      "idOtorgante": 15,
      "idTipoCredito": 0,
      "fecha": "29/3/2020"
  },
  {
      "id": 13,
      "idUsuario": 1,
      "idOtorgante": 41,
      "idTipoCredito": 6,
      "fecha": "24/2/2013"
  },
  {
      "id": 14,
      "idUsuario": 1,
      "idOtorgante": 12,
      "idTipoCredito": 2,
      "fecha": "23/8/2013"
  },
  {
      "id": 15,
      "idUsuario": 4,
      "idOtorgante": 19,
      "idTipoCredito": 0,
      "fecha": "12/6/2014"
  },
  {
      "id": 16,
      "idUsuario": 6,
      "idOtorgante": 61,
      "idTipoCredito": 2,
      "fecha": "21/4/2018"
  },
  {
      "id": 17,
      "idUsuario": 3,
      "idOtorgante": 40,
      "idTipoCredito": 3,
      "fecha": "2/8/2020"
  },
  {
      "id": 18,
      "idUsuario": 5,
      "idOtorgante": 60,
      "idTipoCredito": 3,
      "fecha": "2/7/2016"
  },
  {
      "id": 19,
      "idUsuario": 7,
      "idOtorgante": 36,
      "idTipoCredito": 3,
      "fecha": "11/1/2010"
  },
  {
      "id": 20,
      "idUsuario": 0,
      "idOtorgante": 34,
      "idTipoCredito": 5,
      "fecha": "31/1/2021"
  },
  {
      "id": 21,
      "idUsuario": 0,
      "idOtorgante": 38,
      "idTipoCredito": 4,
      "fecha": "23/11/2014"
  },
  {
      "id": 22,
      "idUsuario": 6,
      "idOtorgante": 7,
      "idTipoCredito": 1,
      "fecha": "5/5/2013"
  },
  {
      "id": 23,
      "idUsuario": 7,
      "idOtorgante": 63,
      "idTipoCredito": 2,
      "fecha": "30/3/2013"
  },
  {
      "id": 24,
      "idUsuario": 8,
      "idOtorgante": 9,
      "idTipoCredito": 4,
      "fecha": "5/8/2013"
  },
  {
      "id": 25,
      "idUsuario": 8,
      "idOtorgante": 2,
      "idTipoCredito": 6,
      "fecha": "11/8/2015"
  },
  {
      "id": 26,
      "idUsuario": 2,
      "idOtorgante": 76,
      "idTipoCredito": 3,
      "fecha": "10/3/2018"
  },
  {
      "id": 27,
      "idUsuario": 5,
      "idOtorgante": 64,
      "idTipoCredito": 4,
      "fecha": "8/1/2018"
  },
  {
      "id": 28,
      "idUsuario": 9,
      "idOtorgante": 0,
      "idTipoCredito": 3,
      "fecha": "26/8/2014"
  },
  {
      "id": 29,
      "idUsuario": 2,
      "idOtorgante": 51,
      "idTipoCredito": 3,
      "fecha": "20/4/2018"
  },
  {
      "id": 30,
      "idUsuario": 4,
      "idOtorgante": 63,
      "idTipoCredito": 2,
      "fecha": "7/5/2018"
  },
  {
      "id": 31,
      "idUsuario": 1,
      "idOtorgante": 35,
      "idTipoCredito": 6,
      "fecha": "12/8/2010"
  },
  {
      "id": 32,
      "idUsuario": 3,
      "idOtorgante": 50,
      "idTipoCredito": 3,
      "fecha": "27/11/2013"
  },
  {
      "id": 33,
      "idUsuario": 2,
      "idOtorgante": 41,
      "idTipoCredito": 4,
      "fecha": "4/6/2012"
  },
  {
      "id": 34,
      "idUsuario": 9,
      "idOtorgante": 57,
      "idTipoCredito": 0,
      "fecha": "17/1/2013"
  },
  {
      "id": 35,
      "idUsuario": 1,
      "idOtorgante": 75,
      "idTipoCredito": 2,
      "fecha": "30/4/2017"
  },
  {
      "id": 36,
      "idUsuario": 5,
      "idOtorgante": 16,
      "idTipoCredito": 5,
      "fecha": "6/8/2019"
  },
  {
      "id": 37,
      "idUsuario": 8,
      "idOtorgante": 76,
      "idTipoCredito": 0,
      "fecha": "25/11/2015"
  },
  {
      "id": 38,
      "idUsuario": 7,
      "idOtorgante": 77,
      "idTipoCredito": 0,
      "fecha": "4/3/2019"
  },
  {
      "id": 39,
      "idUsuario": 0,
      "idOtorgante": 43,
      "idTipoCredito": 4,
      "fecha": "13/8/2010"
  },
  {
      "id": 40,
      "idUsuario": 8,
      "idOtorgante": 40,
      "idTipoCredito": 2,
      "fecha": "17/3/2013"
  },
  {
      "id": 41,
      "idUsuario": 6,
      "idOtorgante": 46,
      "idTipoCredito": 5,
      "fecha": "11/8/2019"
  },
  {
      "id": 42,
      "idUsuario": 9,
      "idOtorgante": 21,
      "idTipoCredito": 1,
      "fecha": "13/8/2020"
  },
  {
      "id": 43,
      "idUsuario": 3,
      "idOtorgante": 0,
      "idTipoCredito": 3,
      "fecha": "22/1/2014"
  },
  {
      "id": 44,
      "idUsuario": 5,
      "idOtorgante": 71,
      "idTipoCredito": 1,
      "fecha": "2/10/2017"
  },
  {
      "id": 45,
      "idUsuario": 0,
      "idOtorgante": 68,
      "idTipoCredito": 5,
      "fecha": "29/11/2016"
  },
  {
      "id": 46,
      "idUsuario": 4,
      "idOtorgante": 2,
      "idTipoCredito": 2,
      "fecha": "15/6/2014"
  },
  {
      "id": 47,
      "idUsuario": 0,
      "idOtorgante": 21,
      "idTipoCredito": 1,
      "fecha": "23/4/2016"
  },
  {
      "id": 48,
      "idUsuario": 3,
      "idOtorgante": 70,
      "idTipoCredito": 0,
      "fecha": "9/4/2017"
  },
  {
      "id": 49,
      "idUsuario": 9,
      "idOtorgante": 32,
      "idTipoCredito": 4,
      "fecha": "10/9/2019"
  },
  {
      "id": 50,
      "idUsuario": 7,
      "idOtorgante": 29,
      "idTipoCredito": 1,
      "fecha": "8/2/2015"
  },
  {
      "id": 51,
      "idUsuario": 7,
      "idOtorgante": 58,
      "idTipoCredito": 3,
      "fecha": "25/6/2019"
  },
  {
      "id": 52,
      "idUsuario": 8,
      "idOtorgante": 17,
      "idTipoCredito": 2,
      "fecha": "9/1/2021"
  },
  {
      "id": 53,
      "idUsuario": 2,
      "idOtorgante": 1,
      "idTipoCredito": 0,
      "fecha": "28/9/2011"
  },
  {
      "id": 54,
      "idUsuario": 8,
      "idOtorgante": 12,
      "idTipoCredito": 4,
      "fecha": "10/1/2014"
  },
  {
      "id": 55,
      "idUsuario": 6,
      "idOtorgante": 40,
      "idTipoCredito": 4,
      "fecha": "7/11/2016"
  },
  {
      "id": 56,
      "idUsuario": 9,
      "idOtorgante": 25,
      "idTipoCredito": 6,
      "fecha": "27/10/2010"
  },
  {
      "id": 57,
      "idUsuario": 0,
      "idOtorgante": 26,
      "idTipoCredito": 4,
      "fecha": "7/4/2018"
  },
  {
      "id": 58,
      "idUsuario": 3,
      "idOtorgante": 32,
      "idTipoCredito": 1,
      "fecha": "22/6/2017"
  },
  {
      "id": 59,
      "idUsuario": 0,
      "idOtorgante": 68,
      "idTipoCredito": 4,
      "fecha": "3/7/2013"
  },
  {
      "id": 60,
      "idUsuario": 5,
      "idOtorgante": 28,
      "idTipoCredito": 5,
      "fecha": "10/7/2018"
  },
  {
      "id": 61,
      "idUsuario": 1,
      "idOtorgante": 28,
      "idTipoCredito": 4,
      "fecha": "17/8/2017"
  },
  {
      "id": 62,
      "idUsuario": 6,
      "idOtorgante": 44,
      "idTipoCredito": 1,
      "fecha": "13/12/2012"
  },
  {
      "id": 63,
      "idUsuario": 6,
      "idOtorgante": 67,
      "idTipoCredito": 5,
      "fecha": "26/11/2012"
  },
  {
      "id": 64,
      "idUsuario": 9,
      "idOtorgante": 25,
      "idTipoCredito": 2,
      "fecha": "23/8/2020"
  },
  {
      "id": 65,
      "idUsuario": 5,
      "idOtorgante": 77,
      "idTipoCredito": 4,
      "fecha": "26/2/2013"
  },
  {
      "id": 66,
      "idUsuario": 7,
      "idOtorgante": 69,
      "idTipoCredito": 5,
      "fecha": "17/2/2014"
  },
  {
      "id": 67,
      "idUsuario": 1,
      "idOtorgante": 14,
      "idTipoCredito": 4,
      "fecha": "23/7/2014"
  },
  {
      "id": 68,
      "idUsuario": 4,
      "idOtorgante": 18,
      "idTipoCredito": 2,
      "fecha": "7/3/2018"
  },
  {
      "id": 69,
      "idUsuario": 8,
      "idOtorgante": 26,
      "idTipoCredito": 6,
      "fecha": "25/1/2019"
  },
  {
      "id": 70,
      "idUsuario": 6,
      "idOtorgante": 43,
      "idTipoCredito": 6,
      "fecha": "31/5/2020"
  },
  {
      "id": 71,
      "idUsuario": 1,
      "idOtorgante": 38,
      "idTipoCredito": 4,
      "fecha": "18/10/2015"
  },
  {
      "id": 72,
      "idUsuario": 9,
      "idOtorgante": 73,
      "idTipoCredito": 2,
      "fecha": "22/11/2015"
  },
  {
      "id": 73,
      "idUsuario": 2,
      "idOtorgante": 8,
      "idTipoCredito": 4,
      "fecha": "18/6/2018"
  },
  {
      "id": 74,
      "idUsuario": 7,
      "idOtorgante": 50,
      "idTipoCredito": 4,
      "fecha": "15/11/2011"
  },
  {
      "id": 75,
      "idUsuario": 7,
      "idOtorgante": 6,
      "idTipoCredito": 5,
      "fecha": "13/2/2014"
  },
  {
      "id": 76,
      "idUsuario": 4,
      "idOtorgante": 75,
      "idTipoCredito": 0,
      "fecha": "26/7/2011"
  },
  {
      "id": 77,
      "idUsuario": 2,
      "idOtorgante": 37,
      "idTipoCredito": 6,
      "fecha": "25/11/2020"
  },
  {
      "id": 78,
      "idUsuario": 7,
      "idOtorgante": 70,
      "idTipoCredito": 3,
      "fecha": "29/11/2013"
  },
  {
      "id": 79,
      "idUsuario": 2,
      "idOtorgante": 23,
      "idTipoCredito": 1,
      "fecha": "2/6/2014"
  },
  {
      "id": 80,
      "idUsuario": 0,
      "idOtorgante": 54,
      "idTipoCredito": 5,
      "fecha": "9/1/2021"
  },
  {
      "id": 81,
      "idUsuario": 3,
      "idOtorgante": 44,
      "idTipoCredito": 5,
      "fecha": "26/5/2011"
  },
  {
      "id": 82,
      "idUsuario": 8,
      "idOtorgante": 3,
      "idTipoCredito": 6,
      "fecha": "24/6/2016"
  },
  {
      "id": 83,
      "idUsuario": 9,
      "idOtorgante": 79,
      "idTipoCredito": 1,
      "fecha": "11/1/2013"
  },
  {
      "id": 84,
      "idUsuario": 5,
      "idOtorgante": 2,
      "idTipoCredito": 5,
      "fecha": "22/7/2013"
  },
  {
      "id": 85,
      "idUsuario": 9,
      "idOtorgante": 24,
      "idTipoCredito": 1,
      "fecha": "1/5/2011"
  },
  {
      "id": 86,
      "idUsuario": 5,
      "idOtorgante": 15,
      "idTipoCredito": 6,
      "fecha": "8/8/2020"
  },
  {
      "id": 87,
      "idUsuario": 6,
      "idOtorgante": 58,
      "idTipoCredito": 2,
      "fecha": "31/10/2019"
  },
  {
      "id": 88,
      "idUsuario": 7,
      "idOtorgante": 19,
      "idTipoCredito": 3,
      "fecha": "26/11/2012"
  },
  {
      "id": 89,
      "idUsuario": 4,
      "idOtorgante": 12,
      "idTipoCredito": 1,
      "fecha": "27/5/2018"
  },
  {
      "id": 90,
      "idUsuario": 9,
      "idOtorgante": 6,
      "idTipoCredito": 5,
      "fecha": "10/5/2015"
  },
  {
      "id": 91,
      "idUsuario": 9,
      "idOtorgante": 66,
      "idTipoCredito": 3,
      "fecha": "4/7/2018"
  },
  {
      "id": 92,
      "idUsuario": 7,
      "idOtorgante": 69,
      "idTipoCredito": 5,
      "fecha": "15/3/2011"
  },
  {
      "id": 93,
      "idUsuario": 3,
      "idOtorgante": 52,
      "idTipoCredito": 5,
      "fecha": "14/6/2016"
  },
  {
      "id": 94,
      "idUsuario": 4,
      "idOtorgante": 46,
      "idTipoCredito": 1,
      "fecha": "11/8/2015"
  },
  {
      "id": 95,
      "idUsuario": 9,
      "idOtorgante": 72,
      "idTipoCredito": 3,
      "fecha": "20/3/2019"
  },
  {
      "id": 96,
      "idUsuario": 9,
      "idOtorgante": 23,
      "idTipoCredito": 1,
      "fecha": "4/4/2010"
  },
  {
      "id": 97,
      "idUsuario": 3,
      "idOtorgante": 76,
      "idTipoCredito": 5,
      "fecha": "8/6/2015"
  },
  {
      "id": 98,
      "idUsuario": 6,
      "idOtorgante": 73,
      "idTipoCredito": 0,
      "fecha": "20/3/2015"
  },
  {
      "id": 99,
      "idUsuario": 0,
      "idOtorgante": 0,
      "idTipoCredito": 3,
      "fecha": "15/11/2020"
  }
]
const providers_local  = [
{
    "id": 0,
    "nombre": "Yo te presté",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=YO",
    "descripcion": "Préstamos de amigo",
    "telefono": "800-123-9432",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 1,
    "nombre": "AFIP",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=AFIP",
    "descripcion": "AFIP Seti DJ",
    "telefono": "800-123-9432",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 2,
    "nombre": "AMERICA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=AMERICA",
    "descripcion": "BANK OF AMERICA NATIONAL ASSOCIATION",
    "telefono": "800-123-8824",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 3,
    "nombre": "BACS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=BACS",
    "descripcion": "BACS BANCO DE CREDITO Y SECURITIZACION S.A.",
    "telefono": "800-123-3657",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 4,
    "nombre": "BBVA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=BBVA",
    "descripcion": "BANCO BBVA ARGENTINA S.A.",
    "telefono": "800-123-7476",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 5,
    "nombre": "BICA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=BICA",
    "descripcion": "BANCO BICA S.A.",
    "telefono": "800-123-6784",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 6,
    "nombre": "BRADESCO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=BRADESCO",
    "descripcion": "BANCO BRADESCO ARGENTINA SA",
    "telefono": "800-123-7785",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 7,
    "nombre": "BRUBANK",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=BRUBANK",
    "descripcion": "BRUBANK S.A.U.",
    "telefono": "800-123-6752",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 8,
    "nombre": "PROVINCIA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=BUENOS AIRES",
    "descripcion": "BANCO DE LA PROVINCIA DE BUENOS AIRES",
    "telefono": "800-123-9081",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 9,
    "nombre": "CENTRAL",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CENTRAL",
    "descripcion": "CENTRAL DE LA REPUBLICA ARGENTINA",
    "telefono": "800-123-7331",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 10,
    "nombre": "CETELEM",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CETELEM",
    "descripcion": "BANCO CETELEM ARGENTINA S.A.",
    "telefono": "800-123-3802",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 11,
    "nombre": "CHACO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CHACO",
    "descripcion": "NUEVO BANCO DEL CHACO S.A.",
    "telefono": "800-123-7524",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 12,
    "nombre": "CHINA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CHINA",
    "descripcion": "BANK OF CHINA LIMITED, SUCURSAL BUENOS AIRES",
    "telefono": "800-123-2227",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 13,
    "nombre": "CHUBUT",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CHUBUT",
    "descripcion": "BANCO DEL CHUBUT S.A.",
    "telefono": "800-123-7186",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 14,
    "nombre": "CIENCIAS ECONOMICAS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CIENCIAS ECONOMICAS",
    "descripcion": "CONSEJO PROFESIONAL DE CIENCIAS ECONOMICAS DE CABA",
    "telefono": "800-123-8062",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 15,
    "nombre": "CITIBANK",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CITIBANK",
    "descripcion": "CITIBANK N.A.",
    "telefono": "800-123-4275",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 16,
    "nombre": "CIUDAD",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CIUDAD",
    "descripcion": "BANCO DE LA CIUDAD DE BUENOS AIRES",
    "telefono": "800-123-4070",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 17,
    "nombre": "CMF",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CMF",
    "descripcion": "BANCO CMF S.A.",
    "telefono": "800-123-4791",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 18,
    "nombre": "COINAG",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=COINAG",
    "descripcion": "BANCO COINAG S.A.",
    "telefono": "800-123-6748",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 19,
    "nombre": "COLUMBIA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=COLUMBIA",
    "descripcion": "BANCO COLUMBIA S.A.",
    "telefono": "800-123-5801",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 20,
    "nombre": "COMAFI",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=COMAFI",
    "descripcion": "BANCO COMAFI S.A.",
    "telefono": "800-123-9043",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 21,
    "nombre": "COMERCIO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=COMERCIO",
    "descripcion": "BANCO DE COMERCIO S.A.",
    "telefono": "800-123-6839",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 22,
    "nombre": "CORDIAL",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CORDIAL",
    "descripcion": "CORDIAL COMPAÑIA FINANCIERA S.A.",
    "telefono": "800-123-7757",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 23,
    "nombre": "CORDOBA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CORDOBA",
    "descripcion": "BANCO DE LA PROVINCIA DE CORDOBA S.A.",
    "telefono": "800-123-8895",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 24,
    "nombre": "CORRIENTES",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CORRIENTES",
    "descripcion": "BANCO DE CORRIENTES S.A.",
    "telefono": "800-123-9298",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 25,
    "nombre": "CREDICOOP",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CREDICOOP",
    "descripcion": "BANCO CREDICOOP COOPERATIVO LIMITADO",
    "telefono": "800-123-4021",
    "otorgaTarjeta": true,
    "showOnCarousel": true
},
{
    "id": 26,
    "nombre": "CREDITO REGIONAL",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=CREDITO REGIONAL",
    "descripcion": "CREDITO REGIONAL COMPAÑIA FINANCIERA S.A.",
    "telefono": "800-123-6679",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 27,
    "nombre": "DEL SOL",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=DEL SOL",
    "descripcion": "BANCO DEL SOL S.A.",
    "telefono": "800-123-2610",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 28,
    "nombre": "DINO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=DINO",
    "descripcion": "BANCO DINO S.A.",
    "telefono": "800-123-8867",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 29,
    "nombre": "ENTRE RIOS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=ENTRE RIOS",
    "descripcion": "NUEVO BANCO DE ENTRE RIOS S.A.",
    "telefono": "800-123-7128",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 30,
    "nombre": "FCA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=FCA",
    "descripcion": "FCA Compañía Financiera S.A.",
    "telefono": "800-123-8547",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 31,
    "nombre": "FINANCIERA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=FINANCIERA",
    "descripcion": "COMPAÑIA FINANCIERA ARGENTINA S.A.",
    "telefono": "800-123-7806",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 32,
    "nombre": "FORD",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=FORD",
    "descripcion": "FORD CREDIT CIA. FINAN. S.A.",
    "telefono": "800-123-8194",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 33,
    "nombre": "FORMOSA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=FORMOSA",
    "descripcion": "BANCO DE FORMOSA S.A.",
    "telefono": "800-123-1970",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 34,
    "nombre": "GALICIA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=GALICIA",
    "descripcion": "BANCO DE GALICIA Y BUENOS AIRES S.A.U.",
    "telefono": "800-123-5954",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 35,
    "nombre": "GPAT",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=GPAT",
    "descripcion": "GPAT COMPAÑIA FINANCIERA S.A.",
    "telefono": "800-123-5907",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 36,
    "nombre": "HIPOTECARIO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=HIPOTECARIO",
    "descripcion": "BANCO HIPOTECARIO SA",
    "telefono": "800-123-6348",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 37,
    "nombre": "HSBC",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=HSBC",
    "descripcion": "HSBC BANK ARGENTINA S.A.",
    "telefono": "800-123-1275",
    "otorgaTarjeta": true,
    "showOnCarousel": true
},
{
    "id": 38,
    "nombre": "ICBC",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=ICBC",
    "descripcion": "INDUSTRIAL AND COMMERCIAL BANK OF CHINA (ARGENTINA) S.A.",
    "telefono": "800-123-2070",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 39,
    "nombre": "INDUSTRIAL",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=INDUSTRIAL",
    "descripcion": "BANCO INDUSTRIAL S.A.",
    "telefono": "800-123-7586",
    "otorgaTarjeta": true,
    "showOnCarousel": true
},
{
    "id": 40,
    "nombre": "INTERFINANZAS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=INTERFINANZAS",
    "descripcion": "BANCO INTERFINANZAS S.A.",
    "telefono": "800-123-5554",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 41,
    "nombre": "INVERSIÓN Y COMERCIO EXTERIOR",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=INVERSIÓN Y COMERCIO EXTERIOR",
    "descripcion": "BANCO DE INVERSION Y COMERCIO EXTERIOR S.A.",
    "telefono": "800-123-1778",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 42,
    "nombre": "ITAU",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=ITAU",
    "descripcion": "BANCO ITAU ARGENTINA S.A.",
    "telefono": "800-123-9024",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 43,
    "nombre": "JOHN DEERE",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=JOHN DEERE",
    "descripcion": "JOHN DEERE CREDIT CIA. FINAN. S.A.",
    "telefono": "800-123-7325",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 44,
    "nombre": "JULIO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=JULIO",
    "descripcion": "BANCO JULIO S.A.",
    "telefono": "800-123-2776",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 45,
    "nombre": "LA PAMPA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=LA PAMPA",
    "descripcion": "BANCO DE LA PAMPA SOCIEDAD DE ECONOMIA MIXTA",
    "telefono": "800-123-7125",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 46,
    "nombre": "MACRO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MACRO",
    "descripcion": "BANCO MACRO S.A.",
    "telefono": "800-123-7015",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 47,
    "nombre": "MARIVA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MARIVA",
    "descripcion": "BANCO MARIVA S.A.",
    "telefono": "800-123-9643",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 48,
    "nombre": "MAS VENTAS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MAS VENTAS",
    "descripcion": "MAS VENTAS S.A.",
    "telefono": "800-123-1181",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 49,
    "nombre": "MERCEDES-BENZ",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MERCEDES-BENZ",
    "descripcion": "MERCEDES-BENZ COMPAÑIA FINANCIERA ARGENTINA S.A.",
    "telefono": "800-123-3034",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 50,
    "nombre": "MERIDIAN",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MERIDIAN",
    "descripcion": "BANCO MERIDIAN S.A.",
    "telefono": "800-123-9940",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 51,
    "nombre": "MONTEMAR",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MONTEMAR",
    "descripcion": "MONTEMAR CIA. FINAN. S.A.",
    "telefono": "800-123-6923",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 52,
    "nombre": "MORGAN",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=MORGAN",
    "descripcion": "JP MORGAN CHASE BANK NA (SUCURSAL BUENOS AIRES)",
    "telefono": "800-123-4294",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 53,
    "nombre": "NACION",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=NACIÓN",
    "descripcion": "BANCO DE LA NACION ARGENTINA",
    "telefono": "800-123-7044",
    "otorgaTarjeta": true,
    "showOnCarousel": true
},
{
    "id": 54,
    "nombre": "NEUQUEN",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=NEUQUEN",
    "descripcion": "BANCO PROVINCIA DEL NEUQUEN S.A.",
    "telefono": "800-123-2676",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 55,
    "nombre": "PARIBAS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=PARIBAS",
    "descripcion": "BNP PARIBAS",
    "telefono": "800-123-1423",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 56,
    "nombre": "PATAGONIA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=PATAGONIA",
    "descripcion": "BANCO PATAGONIA S.A.",
    "telefono": "800-123-5273",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 57,
    "nombre": "PIANO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=PIANO",
    "descripcion": "BANCO PIANO S.A.",
    "telefono": "800-123-8384",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 58,
    "nombre": "PROVINCANJE",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=PROVINCANJE",
    "descripcion": "PROVINCANJE SOCIEDAD ANONIMA",
    "telefono": "800-123-6917",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 59,
    "nombre": "PSA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=PSA",
    "descripcion": "PSA FINANCE ARGENTINA CIA. FINAN. S.A.",
    "telefono": "800-123-2082",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 60,
    "nombre": "RCI",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=RCI",
    "descripcion": "RCI BANQUE S.A.",
    "telefono": "800-123-3106",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 61,
    "nombre": "RIOJA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=RIOJA",
    "descripcion": "BANCO RIOJA SOCIEDAD ANÓNIMA UNIPERSONAL",
    "telefono": "800-123-7852",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 62,
    "nombre": "ROELA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=ROELA",
    "descripcion": "BANCO ROELA S.A.",
    "telefono": "800-123-8392",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 63,
    "nombre": "ROMBO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=ROMBO",
    "descripcion": "ROMBO CIA. FINAN. S.A.",
    "telefono": "800-123-2440",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 64,
    "nombre": "ROSARIO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=ROSARIO",
    "descripcion": "BANCO MUNICIPAL DE ROSARIO",
    "telefono": "800-123-8293",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 65,
    "nombre": "SAENZ",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SAENZ",
    "descripcion": "BANCO SAENZ S.A.",
    "telefono": "800-123-9459",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 66,
    "nombre": "SAN JUAN",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SAN JUAN",
    "descripcion": "BANCO DE SAN JUAN S.A.",
    "telefono": "800-123-6276",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 67,
    "nombre": "SANTA CRUZ",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTA CRUZ",
    "descripcion": "BANCO DE SANTA CRUZ S.A.",
    "telefono": "800-123-6400",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 68,
    "nombre": "SANTA FE",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTA FE",
    "descripcion": "NUEVO BANCO DE SANTA FE S.A.",
    "telefono": "800-123-5187",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 69,
    "nombre": "SANTANDER",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTANDER",
    "descripcion": "BANCO SANTANDER RIO S.A.",
    "telefono": "800-123-3200",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 70,
    "nombre": "SANTIAGO DEL ESTERO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SANTIAGO DEL ESTERO",
    "descripcion": "BANCO DE SANTIAGO DEL ESTERO S.A.",
    "telefono": "800-123-4323",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 71,
    "nombre": "SERVICIOS FINANCIEROS",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SERVICIOS FINANCIEROS",
    "descripcion": "BANCO DE SERVICIOS FINANCIEROS S.A.",
    "telefono": "800-123-1034",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 72,
    "nombre": "SERVICIOS Y TRANSACCIONES",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SERVICIOS Y TRANSACCIONES",
    "descripcion": "BANCO DE SERVICIOS Y TRANSACCIONES S.A.",
    "telefono": "800-123-8640",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 73,
    "nombre": "SUCREDITO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SUCREDITO",
    "descripcion": "BANCO SUCREDITO S.A.",
    "telefono": "800-123-4614",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 74,
    "nombre": "SUPERVIELLE",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=SUPERVIELLE",
    "descripcion": "BANCO SUPERVIELLE S.A.",
    "telefono": "800-123-8552",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 75,
    "nombre": "TIERRA DEL FUEGO",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=TIERRA DEL FUEGO",
    "descripcion": "BANCO PROVINCIA DE TIERRA DEL FUEGO",
    "telefono": "800-123-8160",
    "otorgaTarjeta": true,
    "showOnCarousel": false
},
{
    "id": 76,
    "nombre": "TOYOTA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=TOYOTA",
    "descripcion": "TOYOTA COMPAÑIA FINANCIERA DE ARGENTINA S.A.",
    "telefono": "800-123-3798",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 77,
    "nombre": "TRANSATLANTICA",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=TRANSATLANTICA",
    "descripcion": "TRANSATLANTICA COMPAÑIA FINANCIERA S.A.",
    "telefono": "800-123-6215",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 78,
    "nombre": "URUGUAY",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=URUGUAY",
    "descripcion": "BANCO DE LA REP. ORIENTAL DEL URUGUAY",
    "telefono": "800-123-2733",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 79,
    "nombre": "VALORES",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=VALORES",
    "descripcion": "BANCO DE VALORES S.A.",
    "telefono": "800-123-4061",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 80,
    "nombre": "VOII",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=VOII",
    "descripcion": "BANCO VOII S.A.",
    "telefono": "800-123-8021",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 81,
    "nombre": "VOLKSWAGEN",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=VOLKSWAGEN",
    "descripcion": "VOLKSWAGEN FINANCIAL SERVICES COMPAÑIA FINANCIERA S.A.",
    "telefono": "800-123-3887",
    "otorgaTarjeta": false,
    "showOnCarousel": false
},
{
    "id": 82,
    "nombre": "WILOBANK",
    "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=WILOBANK",
    "descripcion": "WILOBANK S.A.",
    "telefono": "800-123-2677",
    "otorgaTarjeta": true,
    "showOnCarousel": false
}
]
const users_local = [
  {
      "id": 0,
      "nombre": "Diego",
      "apellido": "Maradona",
      "email": "eldiego@pelo.ta",
      "contrasena": "fafafaYNoDeBootstrap",
      "provincia": "Villa Fiorito",
      "ciudad": "Buenos Aires",
      "estadoCivil": 0,
      "ingresosSueldo": 0,
      "ingresosAutonomo": 1000000,
      "ingresosNegro": 100000000,
      "tipoDeIngresos": 1,
      "casaPropia": false,
      "vehiculo": true
  },
  {
      "id": 1,
      "nombre": "Homero",
      "apellido": "Simpson",
      "email": "homero@thesimpsons.com",
      "contrasena": "marge",
      "provincia": "Pensilvania",
      "ciudad": "Springfield",
      "estadoCivil": 1,
      "ingresosSueldo": 98000,
      "ingresosAutonomo": 0,
      "ingresosNegro": 0,
      "tipoDeIngresos": 0,
      "casaPropia": true,
      "vehiculo": true
  },
  {
      "id": 2,
      "nombre": "Uriel",
      "apellido": "Levcovich",
      "email": "glevcovich@outlook.com",
      "contrasena": "coderhouse",
      "provincia": "Santa Fe",
      "ciudad": "Santa Fe",
      "estadoCivil": 1,
      "ingresosSueldo": 60000,
      "ingresosAutonomo": 0,
      "ingresosNegro": 20000,
      "tipoDeIngresos": 0,
      "casaPropia": true,
      "vehiculo": true
  },
  {
      "id": 3,
      "nombre": "Bruce",
      "apellido": "Waine",
      "email": "iam@batman.org",
      "contrasena": "iloverobin",
      "provincia": "Massachusetts",
      "ciudad": "Boston",
      "estadoCivil": 0,
      "ingresosSueldo": 0,
      "ingresosAutonomo": 25000000,
      "ingresosNegro": 0,
      "tipoDeIngresos": 0,
      "casaPropia": true,
      "vehiculo": true
  },
  {
      "id": 4,
      "nombre": "Peter",
      "apellido": "Parker",
      "email": "peterparker@marvel.com",
      "contrasena": "tiamai",
      "provincia": "New York",
      "ciudad": "New York",
      "estadoCivil": 0,
      "ingresosSueldo": 0,
      "ingresosAutonomo": 20000,
      "ingresosNegro": 0,
      "tipoDeIngresos": 0,
      "casaPropia": false,
      "vehiculo": false
  },
  {
      "id": 5,
      "nombre": "Isidoro",
      "apellido": "Cañones",
      "email": "isidorito@hotmail.com",
      "contrasena": "isidorito",
      "provincia": "CABA",
      "ciudad": "CABA",
      "estadoCivil": 0,
      "ingresosSueldo": 0,
      "ingresosAutonomo": 0,
      "ingresosNegro": 2000000,
      "tipoDeIngresos": 1,
      "casaPropia": false,
      "vehiculo": true
  },
  {
      "id": 6,
      "nombre": "Patoruzú",
      "apellido": "Patoruzú",
      "email": "patoruzu@argentina.net",
      "contrasena": "lachacha",
      "provincia": "La Pampa",
      "ciudad": "Santa Rosa",
      "estadoCivil": 0,
      "ingresosSueldo": 0,
      "ingresosAutonomo": 35000000,
      "ingresosNegro": 0,
      "tipoDeIngresos": 1,
      "casaPropia": true,
      "vehiculo": false
  },
  {
      "id": 7,
      "nombre": "Clark",
      "apellido": "Kent",
      "email": "ckent@theglobe.com",
      "contrasena": "louise",
      "provincia": "New York",
      "ciudad": "New York",
      "estadoCivil": 0,
      "ingresosSueldo": 80000,
      "ingresosAutonomo": 0,
      "ingresosNegro": 0,
      "tipoDeIngresos": 1,
      "casaPropia": true,
      "vehiculo": false
  },
  {
      "id": 8,
      "nombre": "El papá de",
      "apellido": "Mafalda",
      "email": "argentinopromedio@ningunlado.com",
      "contrasena": "mafalda",
      "provincia": "CABA",
      "ciudad": "CABA",
      "estadoCivil": 1,
      "ingresosSueldo": 70000,
      "ingresosAutonomo": 0,
      "ingresosNegro": 0,
      "tipoDeIngresos": 1,
      "casaPropia": true,
      "vehiculo": true
  },
  {
      "id": 9,
      "nombre": "Emilio",
      "apellido": "Ravenna",
      "email": "peretti@lossimuladores.com",
      "contrasena": "MáximoCozzetti",
      "provincia": "CABA",
      "ciudad": "CABA",
      "estadoCivil": 1,
      "ingresosSueldo": 0,
      "ingresosAutonomo": 0,
      "ingresosNegro": 200000,
      "tipoDeIngresos": 1,
      "casaPropia": true,
      "vehiculo": true
  }
]
const typesOfServices_local= [
  {
      "id": 0,
      "nombre": "Descubierto en CC$",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=Descubierto",
      "descripcion": "Tasa de interés aplicable al descubierto de una cuenta corriente en pesos"
  },
  {
      "id": 1,
      "nombre": "Saldo de Tarjeta VISA",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=InterésMaster",
      "descripcion": "Tasa de interés aplicable al saldo impago del resumen de la tarjeta MasterCard"
  },
  {
      "id": 2,
      "nombre": "Saldo de Tarjeta Mastercard",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=InterésVisa",
      "descripcion": "Tasa de interés aplicable al saldo impago del resumen de la tarjeta Visa"
  },
  {
      "id": 3,
      "nombre": "Saldo de Tarjeta AMEX",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=Crédito",
      "descripcion": "Tasa de interés aplicable al momento de solicitar un crédito en pesos"
  },
  {
      "id": 4,
      "nombre": "Crédito a sola firma",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=Crédito",
      "descripcion": "Tasa de interés aplicable al momento de solicitar un crédito en pesos"
  },
  {
      "id": 5,
      "nombre": "Crédito para compras de inmuebles",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=Inmuebles",
      "descripcion": "Interés variable dependiente de la inflación"
  },
  {
      "id": 6,
      "nombre": "Financiación de compra de vehículos",
      "imagen": "https://dummyimage.com/300x300/9675cd/522da8.png&text=Descubierto",
      "descripcion": "Tasa de interés aplicable al descubierto de una cuenta corriente en pesos"
  }
]


chocolates.forEach(function (obj) {
  db.collection('items')
    .add({
      id: obj.id,
      name: obj.name,
      description: obj.description,
      price: obj.precio,
      category: obj.category,
      stock: obj.stock,
      photo_url: obj.photo_url,
      thumb: obj.thumb,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function (error) {
      console.error('Error adding document: ', error);
    });
});
