
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import User from './Component/User';
// import Registration from './Component/Registration';
// import Edit from './Component/Edit';
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<User />} />
//           <Route path='/registration' element={<Registration />} />
//           <Route path='/edit/:id' element={<Edit />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import User from './redux_withOut_API/Component/User';
// import Registration from './redux_withOut_API/Component/Registration';

// import Details from './redux_withOut_API/Component/Details';
// // import Edit from './redux_withOut_API/Component/edit';
// import Edit from './redux_withOut_API/Component/testEdit';
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<User />} />
//           <Route path='/registration' element={<Registration />} />
//           <Route path='/details/:id' element={<Details />} />
//           {/* <Route path='/edit/:id' element={<Edit />} /> */}
//           <Route path='/edit/:id' element={<Edit />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App




// --------------------------------- Formik & Yup ---------------------------


// import React from 'react'
// import Registration from './Formik_Yup/Registration'
// const App = () => {
//   return (
//     <div>
//       <Registration />
//     </div>
//   )
// }

// export default App




// -------------------- Formik Registration -----------------------



// import React from 'react'
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import User from './redux_withOut_API/Component/User';
// // import Registration from './redux_withOut_API/Component/Registration';
// import Registration from './redux_withOut_API/Component/formikRegistration';
// import Details from './redux_withOut_API/Component/Details';
// // import Edit from './redux_withOut_API/Component/edit';
// import Edit from './redux_withOut_API/Component/testEdit';
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<User />} />
//           <Route path='/registration' element={<Registration />} />
//           <Route path='/details/:id' element={<Details />} />
//           {/* <Route path='/edit/:id' element={<Edit />} /> */}
//           <Route path='/edit/:id' element={<Edit />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App



// ---------------------------- Redux with API ---------------------------------


import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Userlisting from './redux_with_API/Component/Userlisting';
import Adduser from './redux_with_API/Component/Adduser';
import Updateuser from './redux_with_API/Component/Updateuser';

import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux_with_API/Redux/Store';
import Read from './redux_with_API/Component/Read';
const App = () => {
  return (
    <Provider store={store}>
      <div>

        <BrowserRouter>

          <div className='header'>

            <Link to={'/'}>Home</Link>
            <Link to={'/user'}>User</Link>
          </div>
          <Routes>
            <Route path='/' element={<Userlisting />} />
            <Route path='/registration' element={<Adduser />} />
            <Route path='/user/edit/:code' element={<Updateuser />} />
            <Route path='/read/:code' element={<Read />} />
          </Routes>
        </BrowserRouter>

        <ToastContainer className="toast-position"
          position="bottom-right"></ToastContainer>
      </div>
    </Provider>
  )
}

export default App
