//Tên componet phải viết dưới dạng PascalCase(Viết hoa chữ cái đầu)
// function App(){

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
//inline
//css module
//file riêng

// }
const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <Main />
      </div>
      <Footer />
    </div>
  ); //Cú pháp gọi là jsx, phải có 1 phần tử cha bên ngoài
};

export default App;
// const App = ()=>{
//   return (
//     <div>
//         <h1>Hello World</h1>
//      Cach 1: {Product(
//      {name: 'Iphone 12', price: 1000, image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'}
//        )}
//      Cach 2: <Product
//                title = "product"
//                 Image ="htfs"
//                 rating = {4.00}
//                   price = {20.00}
//                  salePrice = {39.00}/>
//     Cach 3: <Product {...product}/>  
//     Cach 4: <Product data = {product}/> Thuong dung
//  </div>
//   );
//};