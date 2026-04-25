export const dashboardStats = [
    {
        id: 1,
        title: 'Total Templates',
        value: '156',
        change: '+12%',
        changeType: 'increase',
        icon: 'FiPackage',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-600'
    },
    {
        id: 2,
        title: 'Total Courses',
        value: '48',
        change: '+8%',
        changeType: 'increase',
        icon: 'FiBookOpen',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
        textColor: 'text-purple-600'
    },
    {
        id: 3,
        title: 'Total Users',
        value: '12,345',
        change: '+23%',
        changeType: 'increase',
        icon: 'FiUsers',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
        textColor: 'text-green-600'
    },
    {
        id: 4,
        title: 'Total Revenue',
        value: '$48,293',
        change: '+18%',
        changeType: 'increase',
        icon: 'FiDollarSign',
        color: 'from-orange-500 to-orange-600',
        bgColor: 'bg-orange-50',
        textColor: 'text-orange-600'
    },
   
];

export const recentOrders = [
    {
        id: '#ORD-001',
        customer: 'John Doe',
        email: 'john@example.com',
        product: 'Modern Business Presentation',
        amount: '$49.00',
        status: 'completed',
        date: '2024-03-27'
    },
    {
        id: '#ORD-002',
        customer: 'Jane Smith',
        email: 'jane@example.com',
        product: 'Social Media Kit 2025',
        amount: '$39.00',
        status: 'pending',
        date: '2024-03-27'
    },
    {
        id: '#ORD-003',
        customer: 'Mike Johnson',
        email: 'mike@example.com',
        product: 'Corporate Brand Guide',
        amount: '$79.00',
        status: 'completed',
        date: '2024-03-26'
    },
    {
        id: '#ORD-004',
        customer: 'Sarah Williams',
        email: 'sarah@example.com',
        product: 'YouTube Thumbnail Pack',
        amount: '$29.00',
        status: 'processing',
        date: '2024-03-26'
    },
    {
        id: '#ORD-005',
        customer: 'David Brown',
        email: 'david@example.com',
        product: 'Email Newsletter Templates',
        amount: '$34.00',
        status: 'completed',
        date: '2024-03-25'
    }
];

export const topProducts = [
    {
        id: 1,
        name: 'Modern Business Presentation',
        sales: 1234,
        revenue: '$60,466',
        trend: 'up',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop'
    },
    {
        id: 2,
        name: 'Social Media Kit 2025',
        sales: 987,
        revenue: '$38,493',
        trend: 'up',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&h=100&fit=crop'
    },
    {
        id: 3,
        name: 'Corporate Brand Guide',
        sales: 756,
        revenue: '$59,724',
        trend: 'down',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=100&h=100&fit=crop'
    },
    {
        id: 4,
        name: 'YouTube Thumbnail Pack',
        sales: 543,
        revenue: '$15,747',
        trend: 'up',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=100&fit=crop'
    }
];

export const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    values: [12500, 15200, 18400, 22100, 25800, 29300]
};

export const activities = [
    {
        id: 1,
        user: 'John Doe',
        action: 'purchased',
        item: 'Modern Business Presentation',
        time: '5 minutes ago',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 2,
        user: 'Jane Smith',
        action: 'downloaded',
        item: 'Social Media Kit 2025',
        time: '15 minutes ago',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: 3,
        user: 'Mike Johnson',
        action: 'uploaded',
        item: 'New Course: Design Basics',
        time: '1 hour ago',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        id: 4,
        user: 'Sarah Williams',
        action: 'reviewed',
        item: 'Corporate Brand Guide',
        time: '2 hours ago',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        id: 5,
        user: 'David Brown',
        action: 'created',
        item: 'New Template Bundle',
        time: '3 hours ago',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    }
];