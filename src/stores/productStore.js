import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {
      name: 'Fall Limited Edition Sneakers',
      category: 'Man',
      id: 15,
      itemDesc:
        'These low-profile sneakers are your perfect casual wearcompanion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price: 250,
      salePercentage: 50,
      quantity: 1,
      images: [
        '/images/image-product-1.jpg',
        '/images/image-product-2.jpg',
        '/images/image-product-3.jpg',
        '/images/image-product-4.jpg'
      ],
      thumbnailImages: [
        {
          src: '/images/image-product-1-thumbnail.jpg',
          index: 0
        },
        {
          src: '/images/image-product-2-thumbnail.jpg',
          index: 1
        },
        {
          src: '/images/image-product-3-thumbnail.jpg',
          index: 2
        },
        {
          src: '/images/image-product-4-thumbnail.jpg',
          index: 3
        }
      ]
    },
    {
      name: 'Puma Transport Modern Fresh',
      category: 'Man',
      id: 11,
      itemDesc:
        'These low-profile sneakers are your perfect casual wearcompanion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price: 180,
      salePercentage: 20,
      quantity: 1,
      images: ['/images/img1.jpg', '/images/img2.jpg', '/images/img3.jpg', '/images/img4.jpg'],
      thumbnailImages: [
        {
          src: '/images/img1-thumbnail.jpg',
          index: 0
        },
        {
          src: '/images/img2-thumbnail.jpg',
          index: 1
        },
        {
          src: '/images/img3-thumbnail.jpg',
          index: 2
        },
        {
          src: '/images/img4-thumbnail.jpg',
          index: 3
        }
      ]
    },
    {
      name: 'W Nike Downshifter 12',
      category: 'Woman',
      id: 17,
      itemDesc:
        'These low-profile sneakers are your perfect casual wearcompanion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price: 120,
      salePercentage: 25,
      quantity: 1,
      images: [
        '/images/img-woman-1.jpg',
        '/images/img-woman-2.jpg',
        '/images/img-woman-3.jpg',
        '/images/img-woman-4.jpg'
      ],
      thumbnailImages: [
        {
          src: '/images/img-woman-1-thumbnail.jpg',
          index: 0
        },
        {
          src: '/images/img-woman-2-thumbnail.jpg',
          index: 1
        },
        {
          src: '/images/img-woman-3-thumbnail.jpg',
          index: 2
        },
        {
          src: '/images/img-woman-4-thumbnail.jpg',
          index: 3
        }
      ]
    },
    {
      name: 'Adidas Runfalcon 2.0 W',
      category: 'Woman',
      id: 19,
      itemDesc:
        'These low-profile sneakers are your perfect casual wearcompanion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      price: 90,
      salePercentage: 10,
      quantity: 1,
      images: [
        '/images/img-woman1-1.jpg',
        '/images/img-woman1-2.jpg',
        '/images/img-woman1-3.jpg',
        '/images/img-woman1-4.jpg'
      ],
      thumbnailImages: [
        {
          src: '/images/img-woman1-1-thumbnail.jpg',
          index: 0
        },
        {
          src: '/images/img-woman1-2-thumbnail.jpg',
          index: 1
        },
        {
          src: '/images/img-woman1-3-thumbnail.jpg',
          index: 2
        },
        {
          src: '/images/img-woman1-4-thumbnail.jpg',
          index: 3
        }
      ]
    }
  ])

  const selectedProduct = ref(JSON.parse(JSON.stringify(products.value[0])))

  const getProductList = computed(() => products.value)

  const getSelectedProduct = computed(() => selectedProduct.value)

  const selectProduct = (product) => {
    const index = products.value.indexOf(product)
    if (index !== -1) {
      selectedProduct.value = JSON.parse(JSON.stringify(products.value[index]))
    }
  }

  const calculatedPrice = computed(
    () =>
      selectedProduct.value.price -
      (selectedProduct.value.price * selectedProduct.value.salePercentage) / 100
  )

  const calculatePrice = (product) => {
    return product.price - product.price * (product.salePercentage / 100)
  }

  return {
    products,
    getProductList,
    getSelectedProduct,
    selectProduct,
    calculatePrice,
    selectedProduct,
    calculatedPrice
  }
})
