import { MenuItem, CarouselState } from './types/menu'

export class RestaurantCarousel {
  private container: HTMLElement
  private menuItems: MenuItem[]
  private state: CarouselState
  private nextButton: HTMLButtonElement | null = null
  private prevButton: HTMLButtonElement | null = null
  private backButton: HTMLButtonElement | null = null
  private animationTimeout: number | null = null

  constructor(containerSelector: string, menuItems: MenuItem[]) {
    const container = document.querySelector(containerSelector) as HTMLElement
    if (!container) {
      throw new Error(`Container element not found: ${containerSelector}`)
    }
    
    this.container = container
    this.menuItems = menuItems
    this.state = {
      currentIndex: 0,
      isShowingDetails: false,
      isAnimating: false
    }
  }

  init(): void {
    this.render()
    this.bindEvents()
  }

  private render(): void {
    this.container.innerHTML = this.menuItems
      .map((item, index) => this.createItemHTML(item, index))
      .join('')
    
    this.initializeButtons()
  }

  private createItemHTML(item: MenuItem, index: number): string {
    const specifications = item.specifications
      .map(spec => `
        <div>
          <p>${spec.label}</p>
          <p>${spec.value}</p>
        </div>
      `).join('')

    return `
      <div class="item" data-index="${index}">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="introduce">
          <div class="title">${item.category}</div>
          <div class="topic">${item.name}</div>
          <div class="des">${item.description}</div>
          <button class="seeMore" data-item-id="${item.id}">VIEW DETAILS &#8599;</button>
        </div>
        <div class="detail">
          <div class="title">${item.name}</div>
          <div class="des">${item.detailedDescription}</div>
          <div class="specifications">${specifications}</div>
          <div class="checkout">
            <button data-action="add-to-order" data-item-id="${item.id}">ADD TO ORDER</button>
            <button data-action="reserve-table" data-item-id="${item.id}">RESERVE TABLE</button>
          </div>
        </div>
      </div>
    `
  }

  private initializeButtons(): void {
    this.nextButton = document.getElementById('next') as HTMLButtonElement
    this.prevButton = document.getElementById('prev') as HTMLButtonElement
    this.backButton = document.getElementById('back') as HTMLButtonElement

    if (!this.nextButton || !this.prevButton || !this.backButton) {
      console.error('Navigation buttons not found')
      return
    }
  }

  private bindEvents(): void {
    // Navigation buttons
    this.nextButton?.addEventListener('click', () => this.next())
    this.prevButton?.addEventListener('click', () => this.previous())
    this.backButton?.addEventListener('click', () => this.hideDetails())

    // See more buttons
    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      
      if (target.classList.contains('seeMore')) {
        const itemId = target.dataset.itemId
        if (itemId) {
          this.showDetails(itemId)
        }
      }

      // Handle checkout actions
      if (target.dataset.action === 'add-to-order') {
        const itemId = target.dataset.itemId
        if (itemId) {
          this.handleAddToOrder(itemId)
        }
      }

      if (target.dataset.action === 'reserve-table') {
        const itemId = target.dataset.itemId
        if (itemId) {
          this.handleReserveTable(itemId)
        }
      }
    })
  }

  next(): void {
    if (this.state.isAnimating || this.state.isShowingDetails) return
    this.showSlider('next')
  }

  previous(): void {
    if (this.state.isAnimating || this.state.isShowingDetails) return
    this.showSlider('prev')
  }

  private showSlider(direction: 'next' | 'prev'): void {
    if (this.state.isAnimating) return

    this.state.isAnimating = true
    this.disableNavigation()

    const carousel = document.querySelector('.carousel') as HTMLElement
    const items = this.container.querySelectorAll('.item')

    carousel.classList.remove('next', 'prev')
    
    if (direction === 'next') {
      this.container.appendChild(items[0])
      carousel.classList.add('next')
      this.state.currentIndex = (this.state.currentIndex + 1) % this.menuItems.length
    } else {
      this.container.prepend(items[items.length - 1])
      carousel.classList.add('prev')
      this.state.currentIndex = this.state.currentIndex === 0 
        ? this.menuItems.length - 1 
        : this.state.currentIndex - 1
    }

    this.animationTimeout = window.setTimeout(() => {
      this.enableNavigation()
      this.state.isAnimating = false
    }, 2000)
  }

  private showDetails(itemId: string): void {
    const carousel = document.querySelector('.carousel') as HTMLElement
    carousel.classList.remove('next', 'prev')
    carousel.classList.add('showDetail')
    this.state.isShowingDetails = true
  }

  hideDetails(): void {
    const carousel = document.querySelector('.carousel') as HTMLElement
    carousel.classList.remove('showDetail')
    this.state.isShowingDetails = false
  }

  private disableNavigation(): void {
    if (this.nextButton) this.nextButton.style.pointerEvents = 'none'
    if (this.prevButton) this.prevButton.style.pointerEvents = 'none'
  }

  private enableNavigation(): void {
    if (this.nextButton) this.nextButton.style.pointerEvents = 'auto'
    if (this.prevButton) this.prevButton.style.pointerEvents = 'auto'
  }

  private handleAddToOrder(itemId: string): void {
    const item = this.menuItems.find(item => item.id === itemId)
    if (item) {
      console.log(`Adding ${item.name} to order - $${item.price}`)
      // In a real app, this would integrate with a cart system
      this.showNotification(`${item.name} added to order!`)
    }
  }

  private handleReserveTable(itemId: string): void {
    const item = this.menuItems.find(item => item.id === itemId)
    if (item) {
      console.log(`Reserving table for ${item.name}`)
      // In a real app, this would open a reservation modal
      this.showNotification('Redirecting to reservations...')
    }
  }

  private showNotification(message: string): void {
    // Simple notification system
    const notification = document.createElement('div')
    notification.className = 'notification'
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--primary-gold);
      color: #1a1a1a;
      padding: 15px 20px;
      border-radius: 5px;
      font-weight: 600;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `
    
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.remove()
    }, 3000)
  }

  // Public API for external control
  getCurrentItem(): MenuItem {
    return this.menuItems[this.state.currentIndex]
  }

  getState(): CarouselState {
    return { ...this.state }
  }

  destroy(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout)
    }
    this.container.innerHTML = ''
  }
}