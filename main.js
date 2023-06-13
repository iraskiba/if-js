
function changeDate(String) {
  let elem = String.split('-');
  return `${elem[2]}.${elem[1]}.${elem[0]}`
}
console.log(changeDate('2020-11-26'));



function find (str,data) {
  const arrayResult = [];
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    const regex = RegExp(str,'i');
    if (el.country.match(regex) || el.city.match(regex) || el.hotel.match(regex)) {
      arrayResult[arrayResult.length] = `${el.country}, ${el.city}, ${el.hotel}`;
    }
}
return arrayResult;
}
let data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];
let str = 'ber';
  console.log(find(str,data));


