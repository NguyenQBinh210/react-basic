//Tên componet phải viết dưới dạng PascalCase(Viết hoa chữ cái đầu)
// function App(){

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
//inline
//css module
//file riêng
    
// }
const App = ()=>{
    return (
      <div className="container">
        <Header />
        <div className="main-content"> 
          <Main />
        </div>
        <Footer />
      </div>
    );//Cú pháp gọi là jsx, phải có 1 phần tử cha bên ngoài
};

export default App;