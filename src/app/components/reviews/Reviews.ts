export interface Review {
  transaction: string;
  date: Date;
  rating: number;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    transaction: '0x123abc456def890ghi',
    date: new Date('2023-03-24'),
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: '0x123abc456def890ghi',
    date: new Date('2023-03-22'),
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: '0x123abc456def890ghi',
    date: new Date('2023-02-14'),
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: '0x123abc456def890ghi',
    date: new Date('2023-01-24'),
    rating: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: '0x123abc456def890ghi',
    date: new Date('2023-02-27'),
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
];
