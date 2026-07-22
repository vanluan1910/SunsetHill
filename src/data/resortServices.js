export const SERVICE_MODELS = ['Honda Air Blade', 'Vision'];

export const RESORT_SERVICES = [
  {
    id: 'motorbike',
    icon: 'moped',
    nameKey: 'services.motoTitle',
    descKey: 'services.motoDesc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDzsWxcb8cn7fxhyecL3U7Ck8TgBnqBaFwSJh0SIReNSSg_ihILZi0djdsjgmbSjd9bgPRM8MtBQYwDbsoCm9FOzLNHKPTu4FkkxRcjExPNqyneitacMW94K-GGWei1KkSBsTaBxqBvkyp82RJcoZmOToFPY_KlnR1fJC4iltFW0F7tyLWvBK4FQ7lEy3Y9SocXEJRfHXDSHMSTHr_Ae0OKdUZUGabVoGpT1S3eRSCvDAJJHmYnCWX',
    imageAspect: 'aspect-[4/3]',
    details: [
      { labelKey: 'services.rentalFee', values: [{ key: 'services.motoPrice' }] },
      { labelKey: 'services.availableModels', bullets: SERVICE_MODELS },
    ],
    notes: ['services.motoReserve'],
  },
  {
    id: 'laundry',
    icon: 'local_laundry_service',
    mobileIcon: 'dry_cleaning',
    nameKey: 'services.laundryTitle',
    descKey: 'services.laundryDesc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkQ3pLjgWoGovG3um3bKlYmK1zfTKvkOABe_EW6KHV5urxzkC17MUMB1bZq1s4mcepgMilX2Jii1PmRylu0sSPgxadL1ISrRWXqdocG6UJb6FavRpw1Qk0AOT3KsfDCGa6QbO9pVynsqNLPyns_N3vHODskxJJwV1FBwKSUhU65e4lCqUkz0gJPHg-MwchSHSuMVoq5BjQsRuBzBvQUz_ANGF4GCvTn8iPg7BoGakwOV1G84P36aSL',
    imageAspect: 'aspect-[16/9]',
    details: [
      {
        labelKey: 'services.price',
        values: [
          { key: 'services.laundryUnder2' },
          { key: 'services.laundryOver2', desktopKey: 'services.laundryOver2Desktop' },
        ],
      },
    ],
    notes: ['services.laundryNote'],
    mobileNotes: ['services.laundryNote', 'services.laundryContact'],
  },
  {
    id: 'airport',
    icon: 'flight_takeoff',
    nameKey: 'services.airportTitle',
    descKey: 'services.airportDesc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY4XiB_Pnc8V4i89C4c5OhnDahaBlSNj4IVf-MRyRWgl9uP0gdTjDNxDGyZpIiKIuDcR-fSpQc1P-JHv-RO9YCG5O78sU99GDPHpHAK5cckEGXFqsiRmR4olQ0P1MB3rx-zMO6o7yUT32nCGQd3JlILoyQuGSlymIXXgePN0Dxvu2g6Ebu8_KEp02ZP9sx9z0pqdzxXlo4qJpNhhGhntAUrw4rsO02x1okHs18GvKYe2QuODkv0LAr',
    imageAspect: 'aspect-[16/9]',
    details: [
      {
        labelKey: 'services.airportFee',
        values: [{ key: 'services.airportPrice', desktopKey: 'services.airportPriceDesktop' }],
        subValueKey: 'services.airportCarType',
      },
    ],
    bodyNotes: ['services.airportPayment'],
    notes: ['services.airportNotify'],
  },
  {
    id: 'pool',
    icon: 'pool',
    nameKey: 'services.poolTitle',
    descKey: 'services.poolDesc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkPbWdH737QuQNqcd4ycfVvEGcdzjdeOsvpflIGa1gn04fYccWJ6Eczecz-EFRdaF6in5PCvOl4Vvw2g_aMbq1-ZBx3NG2baEyFDFIZJDCYA4duE8ynlkyMQuJC8KTJxRMEUoFITelOYEd6eMLPLm2cabBY42B4RGGy5gJubGXY_k-zSYoRyCV68nva1bqGe7Z0kwzfE1KkaP3FO01_gkM3atTf2R1ZByB_Ok2odnrR5bVTXNY_mhg',
    imageAspect: 'aspect-[16/9]',
    details: [
      { labelKey: 'common.openingHours', values: [{ key: 'services.poolHours' }] },
    ],
    calloutKey: 'services.poolSafety',
  },
  {
    id: 'taxi',
    icon: 'local_taxi',
    nameKey: 'services.taxiTitle',
    descKey: 'services.taxiDesc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACUD8GeBmBvIoqMtwjccs1cq--FppJB5qEdlYrzjULmdqecoOrAxdW3tYcMURX3EfSoMKxBNd2LXUK-0xdHS9Qemj0-GlQbdh9yT30mvB3H1HXq9IAkQKlQj5GcNA8SYlhX6kX_yXhV6yPReoeWAwpMgNXTN3muIOLas7yJ-AR4kocwrUzxNpcnUd_AdkNpBPc9yGB6B2avFQz5ZfKdjTWmaCNnMvjJc_N9P7nj6XxtXmIBla7MmsW',
    recommendKey: 'services.taxiRecommend',
    mobileRecommendIcon: 'concierge',
    desktopRecommendIcon: 'eco',
  },
];
