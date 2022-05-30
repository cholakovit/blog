import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import New from './main/blog/New'
import Edit from './main/blog/Edit'
import BlogList from './main/blog/List'
import Post from './main/blog/Post'
import ShowPost from './main/blog/Show'
import Home from './main/Home'

import UserList from './main/users/List'
import User from './main/users/User'
import UserEdit from './main/users/Edit'
import UserNew from './main/users/New'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />

          <Route path='blog'>
            <Route index element={<BlogList />} />
            <Route path=':postId' element={<ShowPost />} />
            <Route path='post' element={<Post />} />
            {/* <Route path='post/:postId' element={<Post />} /> */}
            <Route path='new' element={<New />} />
            <Route path='edit/:postId' element={<Edit />} />
          </Route>

          <Route path='users'>
            <Route index element={<UserList />} />
            <Route path='new' element={<UserNew />} />
            <Route path=':userId' element={<User />} />
            <Route path='edit/:userId' element={<UserEdit />} />
          </Route>

          {/* Catch all - replace with 404 component if you want */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

// import { Routes, Route, Navigate } from 'react-router-dom'
// import List from './main/blog/List'


// function App() {

//   return (
//     <div className="App">
//       Blog App
//       <Routes>
//         <Route index element={<List />} />

//         {/* Catch all - replace with 404 component if you want */}
//         <Route path='*' element={<Navigate to='/' replace />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
