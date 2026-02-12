export interface Item {
    id: string;
    title: string;
    price: number;
    category: string;
    condition: 'Like New' | 'Good' | 'Fair' | 'Poor';
    image: string;
    timeListed: string;
    seller: string;
}

export const mockItems: Item[] = [
    {
        id: '1',
        title: 'Campbell Biology (12th Edition)',
        price: 45,
        category: 'Textbooks',
        condition: 'Good',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
        timeListed: '2 hours ago',
        seller: 'Sarah M.'
    },
    {
        id: '2',
        title: 'IKEA Desk Lamp - White',
        price: 15,
        category: 'Furniture',
        condition: 'Like New',
        image: 'https://images.unsplash.com/photo-1534073828943-f801091a7d58?auto=format&fit=crop&q=80&w=800',
        timeListed: '4 hours ago',
        seller: 'Alex K.'
    },
    {
        id: '3',
        title: 'Sony WH-1000XM4 Noise Canceling Headphones',
        price: 180,
        category: 'Electronics',
        condition: 'Good',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=800',
        timeListed: '1 day ago',
        seller: 'Jordan P.'
    },
    {
        id: '4',
        title: 'Scientific Calculator TI-84 Plus CE',
        price: 85,
        category: 'Electronics',
        condition: 'Like New',
        image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=800',
        timeListed: '2 days ago',
        seller: 'Emily R.'
    },
    {
        id: '5',
        title: 'Wooden Bed Frame (Twin)',
        price: 60,
        category: 'Furniture',
        condition: 'Fair',
        image: 'https://images.unsplash.com/photo-1505693416388-b0346efee535?auto=format&fit=crop&q=80&w=800',
        timeListed: '3 days ago',
        seller: 'Mike T.'
    },
    {
        id: '6',
        title: 'Introduction to Algorithms (CLRS)',
        price: 55,
        category: 'Textbooks',
        condition: 'Good',
        image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
        timeListed: '5 hours ago',
        seller: 'David L.'
    },
];
