# Website Backend API Documentation

## Base URL
```
https://your-domain.com/api
```

## Authentication
Protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <jwt_token>
```

---

## 🔐 Authentication Endpoints

### Register User
**POST** `/auth/register`

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "securePassword123"
}
```

**Response (201):**
```json
{
  "message": "ok",
  "data": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d0"
  }
}
```

**Error (400):**
```json
{
  "message": "Already exists"
}
```

### Login User
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error (401):**
```json
{
  "message": "Invalid credentials"
}
```

---

## 📄 Pages Management

### Get Page by Slug
**GET** `/pages/:slug`

**Parameters:**
- `slug` (string): Page identifier

**Response (200):**
```json
{
  "status": 200,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "slug": "about-us",
    "title": "About Us",
    "content": "<h1>About Our Company</h1><p>We are...</p>",
    "meta": {
      "seoTitle": "About Us - Company Name",
      "seoDescription": "Learn more about our company"
    },
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

**Error (404):**
```json
{
  "status": 404,
  "message": "Not found"
}
```

### Create/Update Page
**PUT** `/pages/:slug` 🔒

**Parameters:**
- `slug` (string): Page identifier

**Request Body:**
```json
{
  "title": "About Us",
  "content": "<h1>About Our Company</h1><p>We are a leading...</p>",
  "meta": {
    "seoTitle": "About Us - Company Name",
    "seoDescription": "Learn more about our company",
    "keywords": ["about", "company", "team"]
  }
}
```

**Response (200):**
```json
{
  "status": 200,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "slug": "about-us",
    "title": "About Us",
    "content": "<h1>About Our Company</h1><p>We are a leading...</p>",
    "meta": {
      "seoTitle": "About Us - Company Name",
      "seoDescription": "Learn more about our company",
      "keywords": ["about", "company", "team"]
    },
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T11:45:00.000Z"
  }
}
```

---

## 📝 Blog Management

### List Blogs
**GET** `/blogs`

**Query Parameters:**
- `q` (string, optional): Search query

**Response (200):**
```json
{
  "status": 200,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "title": "Getting Started with React",
      "slug": "getting-started-react",
      "summary": "Learn the basics of React development",
      "content": "React is a popular JavaScript library...",
      "author": "John Doe",
      "published": true,
      "bid": "blog_001",
      "createdAt": "2023-09-06T10:30:00.000Z",
      "updatedAt": "2023-09-06T10:30:00.000Z"
    }
  ]
}
```

### Get Blog by Slug
**GET** `/blogs/:slug`

**Parameters:**
- `slug` (string): Blog slug

**Response (200):**
```json
{
  "status": 200,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
    "title": "Getting Started with React",
    "slug": "getting-started-react",
    "summary": "Learn the basics of React development",
    "content": "React is a popular JavaScript library for building user interfaces...",
    "author": "John Doe",
    "published": true,
    "bid": "blog_001",
    "createdAt": "2023-09-06T10:30:00.000Z",
    "updatedAt": "2023-09-06T10:30:00.000Z"
  }
}
```

**Error (404):**
```json
{
  "status": 404,
  "message": "Not found"
}
```

### Create Blog
**POST** `/blogs` 🔒

**Request Body:**
```json
{
  "title": "Advanced React Patterns",
  "slug": "advanced-react-patterns",
  "summary": "Explore advanced React development patterns",
  "content": "In this comprehensive guide, we'll explore...",
  "author": "Jane Smith",
  "published": true,
  "bid": "blog_002"
}
```

**Response (201):**
```json
{
  "status": 201,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "title": "Advanced React Patterns",
    "slug": "advanced-react-patterns",
    "summary": "Explore advanced React development patterns",
    "content": "In this comprehensive guide, we'll explore...",
    "author": "Jane Smith",
    "published": true,
    "bid": "blog_002",
    "createdAt": "2023-09-06T12:00:00.000Z",
    "updatedAt": "2023-09-06T12:00:00.000Z"
  }
}
```

### Update Blog
**PUT** `/blogs` 🔒

**Query Parameters:**
- `bid` (string, required): Blog ID

**Request Body:**
```json
{
  "title": "Advanced React Patterns - Updated",
  "summary": "Updated summary for advanced React patterns",
  "published": false
}
```

**Response (200):**
```json
{
  "status": 200,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "title": "Advanced React Patterns - Updated",
    "slug": "advanced-react-patterns",
    "summary": "Updated summary for advanced React patterns",
    "content": "In this comprehensive guide, we'll explore...",
    "author": "Jane Smith",
    "published": false,
    "bid": "blog_002",
    "createdAt": "2023-09-06T12:00:00.000Z",
    "updatedAt": "2023-09-06T13:30:00.000Z"
  }
}
```

**Error (400):**
```json
{
  "status": 400,
  "message": "bid is required"
}
```

### Delete Blog
**DELETE** `/blogs/:id` 🔒

**Parameters:**
- `id` (string): Blog MongoDB ObjectId

**Response (200):**
```json
{
  "status": 200,
  "message": "Deleted"
}
```

---

## 📞 Contact Management

### Submit Contact Form
**POST** `/contacts`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Business Inquiry",
  "message": "I'm interested in your services..."
}
```

**Response (201):**
```json
{
  "status": 201,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d2",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Business Inquiry",
    "message": "I'm interested in your services...",
    "read": false,
    "createdAt": "2023-09-06T14:00:00.000Z",
    "updatedAt": "2023-09-06T14:00:00.000Z"
  }
}
```

### List Contacts
**GET** `/contacts` 🔒

**Response (200):**
```json
{
  "status": 200,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d2",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Business Inquiry",
      "message": "I'm interested in your services...",
      "read": false,
      "createdAt": "2023-09-06T14:00:00.000Z",
      "updatedAt": "2023-09-06T14:00:00.000Z"
    }
  ]
}
```

---

## 🛍️ Product Management

### Get All Products
**GET** `/product`

**Response (200):**
```json
{
  "status": 200,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d3",
      "pid": "prod_001",
      "name": "Premium Widget",
      "description": "High-quality widget for professional use",
      "price": 99.99,
      "category": "Electronics"
    }
  ]
}
```

**Error (500):**
```json
{
  "status": 500,
  "message": "Database connection error"
}
```

### Create Product
**POST** `/product` 🔒

**Request Body:**
```json
{
  "pid": "prod_002",
  "name": "Deluxe Widget",
  "description": "Premium widget with advanced features",
  "price": 149.99,
  "category": "Electronics"
}
```

**Response (201):**
```json
{
  "status": 201,
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d4",
    "pid": "prod_002",
    "name": "Deluxe Widget",
    "description": "Premium widget with advanced features",
    "price": 149.99,
    "category": "Electronics"
  }
}
```

**Error (500):**
```json
{
  "status": 500,
  "message": "Validation error: pid already exists"
}
```

### Update Product
**PUT** `/product` 🔒

**Query Parameters:**
- `pid` (string, required): Product ID

**Request Body:**
```json
{
  "name": "Updated Deluxe Widget",
  "price": 139.99
}
```

**Response (201):**
```json
{
  "data": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d4",
    "pid": "prod_002",
    "name": "Updated Deluxe Widget",
    "description": "Premium widget with advanced features",
    "price": 139.99,
    "category": "Electronics"
  }
}
```

**Error (401):**
```json
{
  "status": 401,
  "message": "product was not found"
}
```

---

## 👥 Customer Form Management

### Submit Customer Form
**POST** `/customers/submit`

**Request Body:**
```json
{
  "name": "Alice Johnson",
  "phone": 1234567890,
  "email": "alice@example.com",
  "message": "I would like to know more about your services"
}
```

**Response (201):**
```json
{
  "status": 201,
  "message": "Form submitted successfully"
}
```

### Get Customer Submissions
**GET** `/customers/submissions` 🔒

**Response (200):**
```json
{
  "status": 200,
  "data": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d5",
      "name": "Alice Johnson",
      "phone": 1234567890,
      "email": "alice@example.com",
      "message": "I would like to know more about your services",
      "createdAt": "2023-09-06T15:30:00.000Z",
      "updatedAt": "2023-09-06T15:30:00.000Z"
    }
  ]
}
```

---

## 🔒 Authentication Requirements

### Protected Endpoints
The following endpoints require authentication (JWT token):

- `PUT /api/pages/:slug`
- `POST /api/blogs`
- `PUT /api/blogs`
- `DELETE /api/blogs/:id`
- `GET /api/contacts` (admin only)
- `POST /api/product`
- `PUT /api/product`
- `GET /api/customers/submissions` (admin only)

### JWT Token Format
```javascript
{
  "sub": "64f8a1b2c3d4e5f6a7b8c9d0", // User ID
  "role": "admin", // User role
  "iat": 1693996800,
  "exp": 1694601600
}
```

---

## 📋 Error Handling

### Common HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

### Error Response Format
```json
{
  "status": 400,
  "message": "Validation error description"
}
```

---

## 🚀 Frontend Integration Examples

### React/Next.js Examples

#### Authentication
```javascript
// Login
const login = async (email, password) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

// Authenticated request
const fetchProtectedData = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('/api/blogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(blogData)
  });
  return response.json();
};
```

#### Form Submissions
```javascript
// Contact form
const submitContact = async (formData) => {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.json();
};

// Customer form
const submitCustomerForm = async (formData) => {
  const response = await fetch('/api/customers/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.json();
};
```

#### Data Fetching
```javascript
// Get page content
const getPage = async (slug) => {
  const response = await fetch(`/api/pages/${slug}`);
  return response.json();
};

// Get blogs with search
const getBlogs = async (searchQuery = '') => {
  const url = searchQuery 
    ? `/api/blogs?q=${encodeURIComponent(searchQuery)}`
    : '/api/blogs';
  const response = await fetch(url);
  return response.json();
};
```

---

## 🔧 Environment Variables

Required environment variables:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/website
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
```

---

## 📝 Notes for Frontend Development

1. **Always handle loading states** for API calls
2. **Implement proper error handling** for all requests
3. **Store JWT tokens securely** (consider httpOnly cookies for production)
4. **Validate forms client-side** before API submission
5. **Implement retry logic** for failed requests
6. **Use environment variables** for API base URLs
7. **Add request/response interceptors** for common headers and error handling
8. **Implement proper SEO** using page data from `/api/pages/:slug`
9. **Cache frequently accessed data** like blog lists and page content
10. **Use proper TypeScript interfaces** matching the API response structures