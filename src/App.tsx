import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MobileWrapper from './layout/Mobile'
import BusinessList from './components/BusinessList'
// Create a client
const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MobileWrapper>
        <BusinessList />
      </MobileWrapper>
    </QueryClientProvider>
  )
}

export default App
