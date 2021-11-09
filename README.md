# Bio Kits Search App

## API
In the `/api` directory:
An express server with Nodejs that serves up kits at the `/kits` endpoint on port 9000

```
cd api
npm install
npm start
```
now the `/kits` api is live and accepts an id query params, i.e. `/kits?id=12`


## UI

In the `/ui` directory: 
A Vite/React app running on port 3000
It has a simple search interface to search the above endpoint by user submitted id

```
cd ui
npm install
npm run dev
```

#### must have both the api & the ui dev servers running to test out the app.
