import CardProduct from "../components/Fragments/CardProduct.jsx"
import Button from "../components/Elements/Button/index.jsx"

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
const email = localStorage.getItem('email')
const password = localStorage.getItem('password')
const ProductsPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = '/login'
    }

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Sign Out</Button>
            </div>
            <div className="flex justify-center py-5">
                
                {products.map((product)=>(
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} alt={product.alt} link={product.link} />
                        <CardProduct.Body title={product.title} link={product.link}>
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    )
}

export default ProductsPage