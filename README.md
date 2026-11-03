# Marketplace Microservices Backend

A production-oriented e-commerce marketplace backend designed using **Node.js, Express.js, MongoDB, and Microservices Architecture**.

The project aims to simulate the backend infrastructure of a real-world online marketplace, supporting customers, sellers, products, shopping carts, orders, payments, notifications, and intelligent shopping assistance.

The primary focus is on backend engineering, scalable service architecture, secure API development, asynchronous communication, and reliable transaction processing.

## Overview

Marketplace is a microservices-based online marketplace where customers can discover products, manage shopping carts, place orders, and make payments, while sellers can manage their products and monitor sales.

Instead of building one large monolithic backend, the system is designed around independent services with clearly defined responsibilities.

## Tech Stack

| Category | Technologies |
|---|---|
| Runtime | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB Atlas |
| Caching | Redis |
| Message Broker | RabbitMQ |
| Authentication | JWT, Passport.js, Google OAuth |
| Payment Gateway | Razorpay |
| Validation | Zod / Express Validator |
| Security | Helmet, CORS, CSRF, XSS Sanitization |
| Logging | Morgan, Pino |
| Cloud | AWS |
| Containerization | Docker |
| Deployment | AWS ECR, ECS Fargate, ALB |

## Architecture

The application follows a microservices architecture in which each service handles a specific business responsibility.

### Services

1. **Auth/User Service**
   - User registration and authentication.
   - JWT access and refresh tokens.
   - Google OAuth authentication.
   - User profiles, roles, and address management.

2. **Product Service**
   - Product creation and management.
   - Product search and filtering.
   - Category and inventory management.
   - Seller product management.

3. **Cart Service**
   - Shopping cart management.
   - Add, update, and remove cart items.
   - Price and stock validation.
   - Cart total calculation.

4. **Order Service**
   - Order creation and management.
   - Order status lifecycle.
   - Inventory reservation.
   - Order cancellation and tracking.

5. **Payment Service**
   - Razorpay integration.
   - Payment order creation.
   - Payment signature verification.
   - Payment status management.

6. **Notification Service**
   - Event-driven notifications.
   - Email and notification delivery.
   - Delivery status tracking.

7. **Seller Dashboard Service**
   - Seller sales analytics.
   - Revenue and order metrics.
   - Product inventory monitoring.

8. **AI Shopping Assistant Service**
   - Natural language product discovery.
   - Intelligent product recommendations through queries.
   - Shopping cart assistance.

## Key Engineering Concepts

The project focuses on implementing practical backend engineering concepts:

- Microservices architecture and service boundaries.
- RESTful API design.
- JWT-based authentication and authorization.
- Role-Based Access Control (RBAC).
- Asynchronous communication using RabbitMQ.
- Redis-based caching and rate limiting.
- Secure payment processing.
- Idempotent payment and order operations.
- Input validation and sanitization.
- Centralized logging and request tracking.
- Error handling and API security.
- Containerization and cloud deployment.

## Event-Driven Communication

RabbitMQ is used to enable asynchronous communication between services.

Planned domain events include:

| Event | Purpose |
|---|---|
| user.created | New user registration |
| user.updated | User profile updates |
| product.created | New product creation |
| product.updated | Product modifications |
| order.created | New order placement |
| order.cancelled | Order cancellation |
| payment.success | Successful payment |
| payment.failed | Failed payment |

This approach reduces direct dependencies between services and supports asynchronous business workflows.

## Security

Security is a core consideration in the architecture.

Planned security mechanisms include:

- Short-lived JWT access tokens.
- Refresh tokens stored in HTTP-only cookies.
- Role-based authorization.
- Password hashing.
- Helmet security headers.
- CORS configuration.
- CSRF protection.
- XSS sanitization.
- Redis-backed rate limiting.
- Server-side payment verification.

## Deployment Architecture

The planned AWS deployment architecture:

`Docker → Amazon ECR → ECS Fargate → Application Load Balancer → Target Groups`

CloudWatch will be used for application monitoring and logging.

## Project Structure

The repository will organize independent backend services and shared infrastructure as the implementation evolves.

```text
marketplace-microservices-backend/
│
├── services/
│   ├── auth-service/
│   ├── product-service/
│   ├── cart-service/
│   ├── order-service/
│   ├── payment-service/
│   ├── notification-service/
│   ├── seller-dashboard-service/
│   └── ai-buddy-service/
│
├── shared/
│
├── infrastructure/
│
├── docs/
│
├── .gitignore
├── .env.example
└── README.md
```

## Project Status

**Status: Under Development**

The architecture and service responsibilities are being established, followed by incremental implementation, integration, testing, and deployment.

Not all listed features and infrastructure components are implemented yet.

## Learning Objectives

This project is an opportunity to develop practical experience in:

- Designing scalable backend systems.
- Building independent microservices.
- Managing distributed application communication.
- Implementing secure authentication and payments.
- Handling real-world business logic.
- Understanding production-oriented deployment and observability.

---

**Built with a focus on backend engineering, system design, and scalable application architecture.**
