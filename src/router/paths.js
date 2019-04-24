const paths = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/pages/Home')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/pages/Projects')
  }
]

export default paths
