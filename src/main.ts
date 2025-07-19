// Restaurant website entry point
import './style.css'
import { RestaurantCarousel } from './carousel'
import { menuItems } from './data/menu'

// Initialize the restaurant carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    const carousel = new RestaurantCarousel('.carousel .list', menuItems)
    carousel.init()
  } catch (error) {
    console.error('Failed to initialize restaurant carousel:', error)
  }
})