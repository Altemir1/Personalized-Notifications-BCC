import { View, type ViewProps } from 'react-native'
import { Product, User } from '@/entities'
import React from 'react'
import { ProductItem } from './item'
import { cn } from '@/shared/lib'

interface ProductListProps extends ViewProps, React.RefAttributes<View> {
  products: Product[]
}

export const ProductList = ( { products, className, ...props }: ProductListProps ) => {
  return (
    <View className={cn( 'flex flex-col gap-2 p-8', className )} {...props}>
      {products.map( ( product ) => ( <ProductItem key={product.id} product={product} /> ) )}
    </View>
  )
}
