## Monorepo - single app

This is a monorepo with a react and react-native app.

Make sure you have all dependencies installed using this bootstrap.

If you want to understand the magic behind it, I wrote a medium about it:

https://link.medium.com/gcmLcUDVX1

## Steps:

`$ yarn`

### start homepage
`$ cd packages/web && yarn start`

### start mobile app

`$ cd packges/app && react-native run-ios --simulator="iPhone 11"`