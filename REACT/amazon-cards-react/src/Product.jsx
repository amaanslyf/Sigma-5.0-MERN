import "./Product.css"
import Price from "./Price.jsx";

function Product({title, idx}) {
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["11,495","10,900","1,499","499"];
    let description = [
        ["8,000 DPI","5 programmable buttons"],
        ["intuitive surface","designed for iPad Pro"],
        ["designed for iPad Pro","intuitive surface"],
        ["optical orientation", "wireless"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;