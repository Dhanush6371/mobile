import { MenuItem } from '../types/menu'

export const menuItems: MenuItem[] = [
  {
    id: 'truffle-risotto',
    category: 'SIGNATURE DISH',
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice cooked to perfection with wild mushrooms, fresh truffle shavings, and aged Parmesan cheese. A luxurious dining experience.',
    detailedDescription: 'Our signature truffle risotto features premium Arborio rice slowly cooked with a rich mushroom broth, finished with fresh black truffle shavings, wild mushrooms, and aged Parmigiano-Reggiano. Each grain is perfectly al dente, creating a creamy texture that melts in your mouth. Served with a drizzle of truffle oil and garnished with fresh herbs from our garden.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 38,
    specifications: [
      { label: 'Prep Time', value: '25 mins' },
      { label: 'Serves', value: '1 person' },
      { label: 'Dietary', value: 'Vegetarian' },
      { label: 'Spice Level', value: 'Mild' },
      { label: 'Price', value: '$38' }
    ]
  },
  {
    id: 'wagyu-steak',
    category: "CHEF'S SPECIAL",
    name: 'Wagyu Steak',
    description: 'Premium A5 Wagyu beef grilled to perfection, served with roasted vegetables and our signature red wine reduction sauce.',
    detailedDescription: 'Experience the ultimate in luxury dining with our A5 Wagyu beef, sourced directly from Japan. This exceptional cut is grilled to your preference and served with seasonal roasted vegetables, garlic mashed potatoes, and our house-made red wine reduction. The marbling creates an incredibly tender and flavorful experience that defines fine dining.',
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 125,
    specifications: [
      { label: 'Prep Time', value: '30 mins' },
      { label: 'Weight', value: '8 oz' },
      { label: 'Origin', value: 'Japan A5' },
      { label: 'Cooking', value: 'Grilled' },
      { label: 'Price', value: '$125' }
    ]
  },
  {
    id: 'lobster-thermidor',
    category: 'FRESH CATCH',
    name: 'Lobster Thermidor',
    description: 'Fresh Atlantic lobster in a rich, creamy sauce with cognac, herbs, and cheese, baked to golden perfection in its shell.',
    detailedDescription: 'A classic French delicacy featuring fresh Atlantic lobster meat in a luxurious cream sauce infused with cognac, fresh herbs, and Gruyère cheese. The mixture is returned to the lobster shell and baked until golden and bubbling. Served with drawn butter, lemon wedges, and seasonal vegetables for an unforgettable seafood experience.',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 65,
    specifications: [
      { label: 'Prep Time', value: '35 mins' },
      { label: 'Weight', value: '1.5 lbs' },
      { label: 'Origin', value: 'Atlantic' },
      { label: 'Style', value: 'French' },
      { label: 'Price', value: '$65' }
    ]
  },
  {
    id: 'handmade-ravioli',
    category: 'ARTISAN PASTA',
    name: 'Handmade Ravioli',
    description: 'House-made pasta filled with ricotta and spinach, served in a delicate sage butter sauce with pine nuts and Parmesan.',
    detailedDescription: 'Our pasta chef creates these delicate ravioli fresh daily, filling tender pasta pockets with creamy ricotta cheese, fresh spinach, and aromatic herbs. Served in a light sage butter sauce with toasted pine nuts and freshly grated Parmigiano-Reggiano. Each bite delivers the authentic taste of traditional Italian cuisine.',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 28,
    specifications: [
      { label: 'Prep Time', value: '20 mins' },
      { label: 'Pieces', value: '8 ravioli' },
      { label: 'Style', value: 'Italian' },
      { label: 'Dietary', value: 'Vegetarian' },
      { label: 'Price', value: '$28' }
    ]
  },
  {
    id: 'chocolate-souffle',
    category: 'SWEET FINALE',
    name: 'Chocolate Soufflé',
    description: 'Decadent dark chocolate soufflé served warm with vanilla bean ice cream and fresh berry compote. A perfect ending to your meal.',
    detailedDescription: 'Our pastry chef\'s masterpiece features rich Belgian dark chocolate in a light, airy soufflé that rises to perfection in the oven. Served immediately while warm and fluffy, accompanied by house-made vanilla bean ice cream and a vibrant mixed berry compote. The contrast of temperatures and textures creates a sublime dessert experience.',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 18,
    specifications: [
      { label: 'Prep Time', value: '25 mins' },
      { label: 'Serves', value: '2 people' },
      { label: 'Chocolate', value: 'Belgian' },
      { label: 'Temperature', value: 'Warm' },
      { label: 'Price', value: '$18' }
    ]
  },
  {
    id: 'seared-scallops',
    category: 'OCEAN FRESH',
    name: 'Seared Scallops',
    description: 'Pan-seared diver scallops with cauliflower purée, crispy pancetta, and microgreens. A delicate balance of flavors and textures.',
    detailedDescription: 'Premium diver scallops are seared to achieve a perfect golden crust while maintaining a tender, sweet interior. Served atop silky cauliflower purée with crispy pancetta pieces and garnished with fresh microgreens. The dish is finished with a light lemon butter sauce that enhances the natural sweetness of the scallops.',
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 42,
    specifications: [
      { label: 'Prep Time', value: '15 mins' },
      { label: 'Pieces', value: '4 scallops' },
      { label: 'Origin', value: 'Diver' },
      { label: 'Cooking', value: 'Seared' },
      { label: 'Price', value: '$42' }
    ]
  }
]