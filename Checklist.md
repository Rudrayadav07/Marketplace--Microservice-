API Documentation Checklist — Marketplace Microservices
Goal: Maintain accurate, consistent, interview-ready API documentation for every API actually implemented in the Marketplace Microservices project.

Rule: Planned endpoints and features are not marked complete until they are implemented, verified, and documented.

1. Documentation Standards — Every Implemented Endpoint
- [ ] Endpoint path and HTTP method documented
- [ ] Endpoint purpose documented
- [ ] Service ownership identified
- [ ] Authentication requirement documented
- [ ] Authorization / roles / ownership rules documented
- [ ] Path parameters documented
- [ ] Query parameters documented
- [ ] Request headers documented (where relevant)
- [ ] Request body schema documented (where relevant)
- [ ] Example request included (where relevant)
- [ ] Response schema documented
- [ ] Example response included
- [ ] HTTP status codes documented
- [ ] Validation rules documented
- [ ] Expected error responses documented
- [ ] Business rules / important side effects documented
- [ ] External dependencies or events noted (where relevant)
- [ ] Endpoint manually tested
- [ ] Automated tests linked or referenced (when available)
- [ ] OpenAPI specification updated
2. Auth & User Service
Authentication
- [ ] POST /api/v1/auth/register — Register user
- [ ] POST /api/v1/auth/login — Authenticate user
- [ ] POST /api/v1/auth/refresh — Refresh access token
- [ ] POST /api/v1/auth/logout — Logout / invalidate session
- [ ] GET /api/v1/auth/me — Get authenticated user
User Profile
- [ ] GET /api/v1/users/:id — Retrieve user profile
- [ ] PATCH /api/v1/users/:id — Update user profile
Optional (only if implemented)
- [ ] Google OAuth endpoints documented
3. Product Service
- [ ] POST /api/v1/products — Create product
- [ ] GET /api/v1/products — List products
- [ ] GET /api/v1/products/:id — Retrieve product
- [ ] PATCH /api/v1/products/:id — Update product
- [ ] DELETE /api/v1/products/:id — Delete product
- [ ] GET /api/v1/products/search — Search products (if separate route)
- [ ] GET /api/v1/products/categories — List categories (if implemented)
4. Cart Service
- [ ] GET /api/v1/cart — Retrieve cart
- [ ] POST /api/v1/cart/items — Add item
- [ ] PATCH /api/v1/cart/items/:id — Update item quantity
- [ ] DELETE /api/v1/cart/items/:id — Remove item
- [ ] DELETE /api/v1/cart — Clear cart
5. Order Service
- [ ] POST /api/v1/orders — Create order
- [ ] GET /api/v1/orders — List customer's orders
- [ ] GET /api/v1/orders/:id — Retrieve order
- [ ] PATCH /api/v1/orders/:id/cancel — Cancel order (if supported)
- [ ] GET /api/v1/orders/:id/status — Retrieve order status (if separate route)
6. Payment Service
- [ ] POST /api/v1/payments/create — Initiate payment (actual route may differ)
- [ ] POST /api/v1/payments/verify — Verify payment (actual route may differ)
- [ ] POST /api/v1/payments/webhook — Handle provider webhook (if implemented)
- [ ] GET /api/v1/payments/:id — Retrieve payment (if implemented)
- [ ] GET /api/v1/payments/order/:orderId — Retrieve payment by order (if implemented)
Document provider-specific behavior, signature verification, idempotency, and security requirements only when implemented and verified.

7. Seller Dashboard Service
- [ ] GET /api/v1/seller/dashboard — Dashboard overview
- [ ] GET /api/v1/seller/products — Seller's products
- [ ] GET /api/v1/seller/orders — Seller's orders
- [ ] GET /api/v1/seller/analytics — Seller analytics (if implemented)
8. Notification Service
This service may be event-driven and may not expose all—or any—public REST endpoints.

- [ ] GET /api/v1/notifications — Retrieve notifications (if implemented)
- [ ] PATCH /api/v1/notifications/:id/read — Mark notification as read (if implemented)
- [ ] PATCH /api/v1/notifications/read-all — Mark all as read (if implemented)
- [ ] Document RabbitMQ event consumers and processing behavior separately from REST endpoints
9. AI Buddy Service (Optional / Scope to Be Confirmed)
- [ ] POST /api/v1/ai/chat — AI interaction (if implemented)
- [ ] POST /api/v1/ai/recommendations — Recommendations (if implemented)
10. OpenAPI / Swagger
- [ ] OpenAPI version and project metadata configured
- [ ] Service/API tags organized
- [ ] Authentication schemes configured (as applicable)
- [ ] Schemas and reusable components defined
- [ ] Request validation schemas reflected in documentation
- [ ] Response schemas defined
- [ ] Error schemas defined and reused where appropriate
- [ ] Swagger UI available in the intended environment
- [ ] Swagger UI access/security settings reviewed
- [ ] OpenAPI specification checked for consistency with implementation
11. Postman
- [ ] Postman collection organized by service
- [ ] Environment variables configured (base URLs, tokens, IDs, etc.)
- [ ] Authentication flow documented
- [ ] Successful request examples included
- [ ] Error/validation examples included where useful
- [ ] Collection requests verified against running services
- [ ] No secrets committed to the repository
- [ ] Postman collection exported to repository (if appropriate)
12. Documentation Quality & Verification
- [ ] Documentation reviewed against actual route definitions
- [ ] Request/response examples verified
- [ ] Status codes verified
- [ ] Authorization rules verified
- [ ] Deprecated or changed endpoints updated
- [ ] No credentials, tokens, personal data, or secrets in examples
- [ ] README links to API documentation
- [ ] API documentation is kept updated as endpoints change
13. Resume Evidence — Complete Only After Verification
- [ ] Count implemented and documented endpoints
- [ ] Count implemented services with documented APIs
- [ ] Confirm OpenAPI/Swagger is working
- [ ] Confirm Postman collection is usable
- [ ] Record verified API testing evidence
- [ ] Record documented validation and authorization behavior
- [ ] Draft resume bullet using only verified facts
Evidence log
Metric	Verified value	Evidence / link
Implemented endpoints documented	TBD	TBD
Services with API documentation	TBD	TBD
OpenAPI/Swagger verified	TBD	TBD
Postman collection verified	TBD	TBD
API tests executed	TBD	TBD


Completion Criteria
API documentation priority is considered complete when:
- [ ] Every implemented endpoint is documented
- [ ] Documentation reflects the actual implementation
- [ ] OpenAPI/Swagger is usable (if included in the project)
- [ ] Postman collection is verified (if included in the project)
- [ ] Relevant request, response, validation, authentication, authorization, and error details are documented
- [ ] Resume metrics are backed by repository evidence
