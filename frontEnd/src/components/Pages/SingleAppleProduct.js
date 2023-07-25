import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router';

function SingleAppleProduct() {
  const [singlePage, setSinglePage] = useState([]);

    const {productID} = useParams()
    useEffect(() => {
    fetch("/iphone.json")
    fetch("/Mac.json")
    // fetch('http://localhost:2024/iphones') // here i have fetched from my local mamp mysql database
    .then((res) => {
        // console.log(res)
        return res.json()
    })
    .then((data) => {
      const productList = data.products;
        // console.log(productList)
      const singleproduct = productList.filter(
        (product) => product.product_url === productID
      )
        return setSinglePage(singleproduct)
    })
    .catch(() => console.log('Error: unable to fetch!!'))
    }, [productID]);
        // console.log(singlePage)
  return (
    <>
    <section className="internal-page-wrapper top-100 top-60">
          <div className="container">
            {singlePage?.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let details = product.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      
    </>
  )
}

export default SingleAppleProduct
