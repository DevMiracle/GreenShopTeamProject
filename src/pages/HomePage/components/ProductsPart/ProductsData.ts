import product1 from './assets/product-1.png';
import product1_2 from './assets/product1_2.png';
import product1_3 from './assets/product1_3.png';
import product1_4 from './assets/product1_4.png';
import product2 from './assets/product-2.png';
import product3 from './assets/product-3.png';
import product4 from './assets/product-4.png';
import product5 from './assets/product-5.png';
import product6 from './assets/product-6.png';
import product7 from './assets/product-7.png';
import product8 from './assets/product-8.png';
import product9 from './assets/product-9.png';
// eslint-disable-next-line sort-imports-es6-autofix/sort-imports-es6
import product10 from './assets/product-10.png';
import product11 from './assets/product-11.png';
import product12 from './assets/product-12.png';
import product13 from './assets/product-13.png';
import product14 from './assets/product-14.png';

export const products = [
  {
    id: 1,
    name: 'Barberton Daisy',
    sizes: [
      { size: 'S', price: '119.00' },
      { size: 'M', price: '139.00' },
      { size: 'L', price: '159.00' },
    ],
    photos: [product1, product1_2, product1_3, product1_4],
    discountPercentage: 0.2,
    category: ['House Plants', 'Terrariums'],
    newArrival: true,
    sale: false,
    shortDescription:
      'The Barberton Daisy is a beautiful flowering plant that adds a vibrant touch to any space. It comes in three different sizes and is perfect for both indoor and outdoor settings.',
    tags: ['Home', 'Garden', 'Plants',],
  },
  {
    id: 2,
    name: 'Angel Wing Begonia',
    sizes: [
      { size: 'S', price: '169.00' },
      { size: 'M', price: '189.00' },
    ],
    photos: [product2],
    discountPercentage: 0,
    category: ['Potter Plants'],
    newArrival: false,
    sale: false,
    shortDescription:
      'The Angel Wing Begonia is a stunning foliage plant with unique angelic-shaped leaves. It is available in two sizes and adds a touch of elegance to any room.',
    tags: ['Home', 'Garden', 'Plants', 'Potter Plants'],
  },
  {
    id: 3,
    name: 'African Violet',
    sizes: [
      { size: 'S', price: '229.00' },
      { size: 'L', price: '249.00' },
    ],
    photos: [product3],
    discountPercentage: 0.13,
    category: ['House Plants'],
    newArrival: false,
    sale: true,
    shortDescription:
      'The African Violet is a classic houseplant known for its beautiful purple flowers. It comes in two sizes and is currently on sale with a 13% discount.',
    tags: ['Home', 'Garden', 'Plants', 'House Plants'],
  },
  {
    id: 4,
    name: 'Beach Spider Lily',
    sizes: [
      { size: 'S', price: '129.00' },
      { size: 'M', price: '149.00' },
    ],
    photos: [product4],
    discountPercentage: 0,
    category: ['Potter Plants', 'Big Plants'],
    newArrival: false,
    sale: false,
    shortDescription:
      'The Beach Spider Lily is a unique plant with long, slender leaves that resemble spider legs. It comes in two sizes and is a perfect choice for adding a touch of intrigue to your plant collection.',
    tags: ['Home', 'Garden', 'Plants', 'Potter Plants', 'Big Plants'],
  },
  {
    id: 5,
    name: 'Blushing Bromeliad',
    sizes: [
      { size: 'S', price: '139.00' },
      { size: 'L', price: '169.00' },
    ],
    photos: [product5],
    discountPercentage: 0.25,
    category: ['Potter Plants'],
    newArrival: false,
    sale: true,
    shortDescription:
      'The Blushing Bromeliad is a stunning plant with vibrant pink flowers that bring a pop of color to any space. It is available in two sizes and currently on sale with a 25% discount.',
    tags: ['Home', 'Garden', 'Plants', 'Potter Plants'],
  },
  {
    id: 6,
    name: 'Aluminum Plant',
    sizes: [
      { size: 'S', price: '179.00' },
      { size: 'M', price: '199.00' },
    ],
    photos: [product6],
    discountPercentage: 0,
    category: ['Seeds'],
    newArrival: false,
    sale: false,
    shortDescription:
      'The Aluminum Plant is a popular choice among plant enthusiasts for its striking silver-colored leaves. It comes in two sizes and is a great addition to any indoor garden.',
    tags: ['Home', 'Garden', 'Plants', 'Seeds'],
  },
  {
    id: 7,
    name: "Bird's Nest Fern",
    sizes: [
      { size: 'S', price: '99.00' },
      { size: 'L', price: '119.00' },
    ],
    photos: [product7],
    discountPercentage: 0,
    category: ['Seeds'],
    newArrival: false,
    sale: false,
    shortDescription:
      "The Bird's Nest Fern is a beautiful fern with lush, vibrant fronds that resemble a bird's nest. It is available in two sizes and adds a touch of nature to any room.",
    tags: ['Home', 'Garden', 'Plants', 'Seeds'],
  },
  {
    id: 8,
    name: 'Broadleaf Lady Palm',
    sizes: [
      { size: 'S', price: '59.00' },
      { size: 'M', price: '79.00' },
      { size: 'L', price: '99.00' },
    ],
    photos: [product8],
    discountPercentage: 0,
    category: ['Terrariums'],
    newArrival: false,
    sale: false,
    shortDescription:
      'The Broadleaf Lady Palm is a beautiful palm plant with L, fan-like leaves. It comes in three sizes and is an excellent choice for creating a tropical ambiance.',
    tags: ['Home', 'Garden', 'Plants', 'Terrariums'],
  },
  {
    id: 9,
    name: 'Chinese Evergreen',
    sizes: [
      { size: 'S', price: '39.00' },
      { size: 'M', price: '49.00' },
    ],
    photos: [product9],
    discountPercentage: 0.2,
    category: ['Seeds'],
    newArrival: true,
    sale: false,
    shortDescription:
      'The Chinese Evergreen is a low-maintenance plant known for its beautiful variegated foliage. It comes in two sizes and is an ideal choice for beginners or busy plant owners.',
    tags: ['Home', 'Garden', 'Plants', 'Seeds'],
  },
  {
    id: 10,
    name: 'Calathea Orbifolia',
    sizes: [
      { size: 'S', price: '149.00' },
      { size: 'M', price: '169.00' },
      { size: 'L', price: '189.00' },
    ],
    photos: [product10],
    discountPercentage: 0.15,
    category: ['S Plants', 'House Plants'],
    newArrival: false,
    sale: true,
    shortDescription:
      'The Calathea Orbifolia is a stunning plant with L, round leaves featuring beautiful patterns. It is available in three sizes and currently on sale with a 15% discount.',
    tags: ['Home', 'Garden', 'Plants', 'S Plants', 'House Plants'],
  },
  {
    id: 11,
    name: 'Snake Plant',
    sizes: [
      { size: 'S', price: '79.00' },
      { size: 'M', price: '89.00' },
    ],
    photos: [product11],
    discountPercentage: 0,
    category: ['Big Plants'],
    newArrival: true,
    sale: false,
    shortDescription:
      'The Snake Plant is a popular choice for its striking sword-shaped leaves and low maintenance requirements. It comes in two sizes and is perfect for adding a touch of green to any space.',
    tags: ['Home', 'Garden', 'Plants', 'Big Plants'],
  },
  {
    id: 12,
    name: 'Spider Plant',
    sizes: [
      { size: 'S', price: '49.00' },
      { size: 'M', price: '59.00' },
    ],
    photos: [product12],
    discountPercentage: 0.2,
    category: ['S Plants', 'Potter Plants'],
    newArrival: false,
    sale: true,
    shortDescription:
      'The Spider Plant is a classic houseplant known for its long, arching leaves and spider-like plantlets. It is available in two sizes and is currently on sale with a 20% discount.',
    tags: ['Home', 'Garden', 'Plants', 'S Plants', 'Potter Plants'],
  },
  {
    id: 13,
    name: 'Zebra Cactus',
    sizes: [
      { size: 'S', price: '69.00' },
      { size: 'M', price: '79.00' },
    ],
    photos: [product13],
    discountPercentage: 0.1,
    category: ['Succulents'],
    newArrival: false,
    sale: false,
    shortDescription:
      'The Zebra Cactus is a unique succulent with distinctive zebra-like stripes on its leaves. It is available in two sizes and is a great choice for adding a touch of nature to your space.',
    tags: ['Home', 'Garden', 'Plants', 'Succulents'],
  },
  {
    id: 14,
    name: 'English Ivy',
    sizes: [
      { size: 'S', price: '89.00' },
      { size: 'M', price: '99.00' },
    ],
    photos: [product14],
    discountPercentage: 0.2,
    category: ['Gardening', 'House Plants'],
    newArrival: true,
    sale: false,
    shortDescription:
      'The English Ivy is a versatile plant that can be used for both indoor and outdoor decor. It comes in two sizes and is a perfect choice for creating a lush green environment.',
    tags: ['Home', 'Garden', 'Plants', 'Gardening', 'House Plants'],
  },
];
