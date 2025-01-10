// // import { configureStore } from '@reduxjs/toolkit'
// // import propertySlice from '../features/propertySlice'

// // export const store = configureStore({
// //     reducer: {
// //         property: propertySlice,

// //       },
      
// // })



// import { combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { configureStore } from "@reduxjs/toolkit";
// import propertySlice from "../features/propertySlice";
// // import { getDefaultMiddleware } from '@"redux-starter-kit';


// const reducers = combineReducers({
//   property: propertySlice,
//   // middleware: getDefaultMiddleware({
//   //      serializableCheck: {
//   //       ignoredActions: ["persist/PERSIST"],
//   //       },
//   //     }),
// });

// const persistConfig = {
//   key: "root",
//   timeout: 2000, //Set the timeout function to 2 seconds
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
 
// });


// export default store;
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import propertySlice from "../features/propertySlice";

// Combine all reducers
const reducers = combineReducers({
  property: propertySlice,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  timeout: 2000, // Optional: Set the timeout for persistence
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure the store with middleware settings
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Export the store and persistor for Redux Persist
export const persistor = persistStore(store);
export default store;


