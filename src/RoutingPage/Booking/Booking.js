import Footer from "../../component/footer/footer";
import FixedHeader from "../../component/Header/Fixed-Header";
import Book from "../../pages/BookAponintment/Book";

function Bookingpage ()
{
    return (
        <>
       <FixedHeader pagetitle={'booking'}/>
       <Book/>
       <Footer/>
       </>
    )
}
export default Bookingpage;