import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from './Catalog';
import Dashboard from './Dashboard';
import Contact from './Contact';

function Routing() {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Routing;


// gap-10 md:gap-30 lg:gap-55 xl:gap-90
// mask-b-from-20% mask-t-from-20%

