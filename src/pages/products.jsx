import CardProduct from "../components/Fragments/CardProduct.jsx"

const products = [
    {
        id: 1,
        title: "Sepatu Baru",
        alt: "Shoes",
        price: "Rp.2.000.000",
        image: "/images/shoes-1.jpg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Ipsum dignissimos vero vitae consequuntur quae. 
                   Neque aliquid similique odit veritatis laborum sit error soluta doloremque nobis, 
                   dignissimos est. In, corporis consectetur.`,
        link: "/products/1"
    },
    {
        id: 2,
        title: "Sepatu Lama",
        alt: "Shoes",
        price: "Rp.200.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        link: "/products/2"
    }
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            
            {products.map((product)=>(
                <CardProduct>
                    <CardProduct.Header image={product.image} alt={product.alt} link={product.link} />
                    <CardProduct.Body title={product.title} link={product.link}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    )
}

export default ProductsPage