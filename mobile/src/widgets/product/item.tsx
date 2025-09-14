import { Product } from '@/entities'
import { Text, Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter, Button } from '@/shared/ui'
import { Link } from 'expo-router'
import { View, type ViewProps } from 'react-native'

interface ProductItemProps extends ViewProps, React.RefAttributes<View> {
  product: Product
}

export const ProductItem = ( { product, ...props }: ProductItemProps ) => {
  return ( <Card {...props} >
    <Link href={`/products/${product.name}`}>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.target_audience}</CardDescription>
      </CardHeader>
    </Link>
  </Card>
  )
}
