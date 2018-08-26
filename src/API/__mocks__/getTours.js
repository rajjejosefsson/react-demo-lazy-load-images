const fakeData = {
  data: [
    {
      id: 1,
      tour_name: 'Home Ing',
      length: 13,
      description: '13 days Home Ing experience',
      price: 5008,
      saving: 92,
      currency: 'AUD',
      destinations: [
        'Liushun',
        'Uppsala',
        'Zagórnik',
        'Salon-de-Provence',
        'Washington',
        'Prawdzinski',
        'Maredakalada',
        'Breia',
        'Baisha',
        'Songlong'
      ],
      age_from: 21,
      age_to: 73,
      rating: 3,
      tour_operator: 'Cormier-Pfeffer',
      country: 'Indonesia',
      tour_image: 'http://dummyimage.com/928x680.png/ff4444/ffffff',
      map_image: 'http://dummyimage.com/928x400.png/cc0000/ffffff'
    },
    {
      id: 2,
      tour_name: 'Hatity',
      length: 11,
      description: '11 days Hatity experience',
      price: 2641,
      saving: 108,
      currency: 'AUD',
      destinations: [
        'Chengnan',
        'Tenggina Daya',
        'Ribeira do Pombal',
        'Liangdang Chengguanzhen',
        'Boncong',
        'Oebobo',
        'Mégara',
        'Qian’an',
        'Zemio',
        'Jelisavac'
      ],
      age_from: 20,
      age_to: 45,
      rating: 5,
      tour_operator: 'Schoen Inc',
      country: 'Canada',
      tour_image: 'http://dummyimage.com/928x680.png/dddddd/000000',
      map_image: 'http://dummyimage.com/928x400.png/5fa2dd/ffffff'
    }
  ]
};

export const getTours = async () => {
  try {
    const tours = await new Promise(resolve => {
      resolve(fakeData);
    });
    return tours.data;
  } catch (err) {
    return { data: { Error: err.message } };
  }
};
