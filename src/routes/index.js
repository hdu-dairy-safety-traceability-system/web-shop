import Slider from '../Components/Slider'
export default {
  path: '/',
  componnet: Slider,
  childRoutes: [
    { path: 'page1', componnet: Slider },
    {path: 'page2', componnet: Slider}
  ]
}