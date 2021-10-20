# Phone Book App for Tellimer

Simple PhoneBook App with React

## Project Setup

### Project stack:
- Create-React-App
- React Typescript
- TailWind CSS
- React Testing Library for Unit-Test
- Cypress for e2e-test

### Prerequisites
```
node v12^
yarn
```

### Install and Run in Local

Note: User `yarn` rather than `npm`

Install dependencies
```
yarn
```

Note: I uploaded .env to avoid Cypress issue with TS.
`SKIP_PREFLIGHT_CHECK=true`
This value should be in .env.

### Scripts
- `yarn start` - Run the project in your local
- `yarn test` - Run the unit-test
- `yarn e2e` - Open Cypress browser. Note: Before opening Cypress browser, the frontend should be running on localhost:3000. Because this e2e test is working against localhost.

### Authors
Taylor Chen
