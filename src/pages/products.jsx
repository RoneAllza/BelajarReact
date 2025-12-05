import Button from "../components/Elements/Button/index.jsx"
import CardProduct from "../components/Fragments/CardProduct.jsx"

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" alt="Shoes" link="/products/1" />
                <CardProduct.Body title="Sepatu Baru" link="/products/1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dignissimos vero vitae consequuntur quae. Neque aliquid similique odit veritatis laborum sit error soluta doloremque nobis, dignissimos est. In, corporis consectetur.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp.2.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/images/shoes-1.jpg" alt="Shoes" link="/products/2" />
                <CardProduct.Body title="Sepatu Baru" link="/products/2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum dignissimos vero vitae consequuntur quae. Neque aliquid similique odit veritatis laborum sit error soluta doloremque nobis, dignissimos est. In, corporis consectetur.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp.2.000.000" />
            </CardProduct>
        </div>
    )
}

export default ProductsPage