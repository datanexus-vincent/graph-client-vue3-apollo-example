import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { createApolloProvider } from '@vue/apollo-option'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(apolloProvider)

app.mount('#app')
