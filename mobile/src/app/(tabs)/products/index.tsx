import { products } from '@/shared/lib'
import { ProductList } from '@/widgets/product'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductsPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProductList products={products} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductsPage
