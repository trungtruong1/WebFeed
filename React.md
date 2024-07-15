# Các thứ về Django 

## 1. Cấu trúc chung của React Folder:

```
my-react-app/
│
├── public/
│   └── index.html             # Entry HTML file
│
├── src/
│   ├── assets/                # Static assets like images, fonts, etc.
│   ├── components/            # Reusable components
│   │   ├── Auth/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── AuthForm.js
│   │   ├── NewsFeed/
│   │   │   ├── NewsFeed.js
│   │   │   ├── Post.js
│   │   │   └── PostForm.js
│   │   └── Shared/
│   │       ├── Header.js
│   │       └── Footer.js
│   │
│   ├── contexts/              # Context API providers for state management
│   │   └── AuthContext.js
│   │
│   ├── hooks/                 # Custom hooks
│   │   └── useAuth.js
│   │
│   ├── pages/                 # Pages in your app
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── NewsFeedPage.js
│   │
│   ├── services/              # API calls
│   │   └── api.js
│   │
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point
│   └── routes.js              # Route configuration
│
├── static/
│   ├── images/                # Static images
│   ├── fonts/                 # Static fonts
│   └── styles/                # Static CSS files
│
├── templates/
│   └── index.html             # Template HTML file for server-side rendering or base HTML for client-side rendering
│
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
└── README.md                  # Documentation
```

