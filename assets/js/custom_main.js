/*<-- start ======= Header ======= -->*/
var logoHref = './index.html'
var logoSrc = './assets/img/logo.svg'

var loginText = 'Login'

// Create the button element with the stored text
var getStartedButtonHTML =
  '<a class="btn-getstarted" href="#">' + loginText + '</a>'

// Get the container where you want to set the inner HTML
var buttonContainer = document.getElementById('buttonContainer')

// Set the inner HTML of the container
// buttonContainer.innerHTML = getStartedButtonHTML;
var defaultEnableValue = true
var defaultVisibleValue = true

var menuItems = [
  {
    icon: 'fa fa-eye',
    MenuName: 'Home',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#home',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'About',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#about',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Services',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#services',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Portfolio',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#portfolio',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Testimonial',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#testimonials',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Career',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#career',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  {
    icon: 'fa fa-eye',
    MenuName: 'Contact',
    MenuIcon: '',
    MoreMenu: '',
    Selected: '',
    PlanOfAction: '#contact',
    Enable: defaultEnableValue,
    Visible: defaultVisibleValue,
    MoreMenuDet: {},
    class_menu: '',
    id: '',
    parentId: '',
    tooltip: 'View Record',
    divider: true,
    display_value: '',
  },
  // Add more menu items as needed
]

var menuList = document.getElementById('menuList')

function createMenuItem(item) {
  var menuItem = document.createElement('li')
  var menuLink = document.createElement('a')

  menuLink.setAttribute('href', item.PlanOfAction)
  menuLink.textContent = item.MenuName

  if (item.MoreMenu && item.MoreMenu.length > 0) {
    var dropdown = createSubmenu(item.MoreMenu)
    menuItem.classList.add('dropdown')
    menuItem.appendChild(dropdown)

    var chevronDownIcon = document.createElement('i')
    chevronDownIcon.classList.add('bi', 'bi-chevron-down')
    menuLink.appendChild(chevronDownIcon)
  }

  menuLink.addEventListener('click', function (event) {
    document.querySelectorAll('#menuList a').forEach(function (link) {
      link.classList.remove('active')
    })

    this.classList.add('active')
  })

  menuItem.appendChild(menuLink)
  if (item.MenuName === 'Home') {
    menuItem.classList.add('active')
  }
  return menuItem
}

function createSubmenu(submenuItems) {
  var submenu = document.createElement('ul')
  submenu.classList.add('dropdown-menu')

  for (var i = 0; i < submenuItems.length; i++) {
    var submenuItem = createMenuItem(submenuItems[i])
    submenu.appendChild(submenuItem)
  }

  return submenu
}

function generateMenu(menuData, parentElement) {
  for (var i = 0; i < menuData.length; i++) {
    var menuItem = createMenuItem(menuData[i])
    parentElement.appendChild(menuItem)

    if (menuData[i].MoreMenu && menuData[i].MoreMenu.length > 0) {
      var submenu = createSubmenu(menuData[i].MoreMenu)
      menuItem.appendChild(submenu)
    }
  }
}

generateMenu(menuItems, menuList)

// Create logo element dynamically
var logoLink = document.createElement('a')
logoLink.href = logoHref
logoLink.className = 'logo d-flex align-items-center me-auto me-xl-0'
logoLink.style.height = '20px'
var logoImg = document.createElement('img')
logoImg.src = logoSrc
logoImg.style.marginLeft = '30px'
// logoImg.className = 'logo d-flex align-items-center me-auto me-xl-0'
logoImg.style.height = '80px'
logoImg.style.marginTop = '10px'
logoImg.style.marginBottom = '10px'
// logoImg.style.filter = 'invert(1)'

logoImg.alt = ''
logoLink.appendChild(logoImg)

// Append logo to the container
document
  .getElementById('headerContainer')
  .insertBefore(logoImg, document.getElementById('headerContainer').firstChild)
/*<-- end ======= Header ======= -->*/

/*<-- start ======= Image Slider (Dynamic Text) ======= -->*/
var sliderData = [
  {
    image: './assets/img/hero-img/hero-img1.jpg',
    title: 'NO CIBIL, LOW CIBIL we can help',
  },
  {
    image: './assets/img/hero-img/hero-img2.jpg',
    title: 'The happiness we bring is beyond the measure of money',
  },
  {
    image: './assets/img/hero-img/hero-img3.jpg',
    title: 'The trust of many hands that make us, will never break it',
  },
  {
    image: './assets/img/hero-img/hero-img4.jpg',
    title: '',
  },
  {
    image: './assets/img/hero-img/hero-img5.jpg',
    title: 'Homes beyond brick and sand, let us help u get one',
  },
  {
    image: './assets/img/hero-img/hero-img6.jpg',
    title: 'Your data is our top secret we never share it',
  },
  {
    image: './assets/img/hero-img/hero-img7.jpg',
    title: 'Here to help when you need us the most',
  },
]

var currentSlideIndex = 0
var sliderIntervalTime = 5000 // 5 seconds
var sliderInterval

// DOM Elements
var sliderTrack = document.getElementById('sliderTrack')
var sliderTitle = document.getElementById('slideTitle')
var sliderDotsContainer = document.getElementById('sliderDots')
var prevBtn = document.getElementById('prevBtn')
var nextBtn = document.getElementById('nextBtn')

var totalSlides = sliderData.length
var isTransitioning = false

// Initialize Slider
function initSlider() {
  if (!sliderTrack) return

  // 1. Render Slides with Clones
  sliderTrack.innerHTML = ''
  
  // Clone Last Slide (Prepend)
  const cloneLast = createSlideItem(sliderData[totalSlides - 1], totalSlides - 1)
  cloneLast.classList.add('clone')
  sliderTrack.appendChild(cloneLast)

  // Real Slides
  sliderData.forEach((slide, index) => {
    const slideItem = createSlideItem(slide, index)
    sliderTrack.appendChild(slideItem)
  })

  // Clone First Slide (Append)
  const cloneFirst = createSlideItem(sliderData[0], 0)
  cloneFirst.classList.add('clone')
  sliderTrack.appendChild(cloneFirst)

  // 2. Render Dots
  if (sliderDotsContainer) {
    sliderDotsContainer.innerHTML = ''
    sliderData.forEach((_, index) => {
      const dot = document.createElement('div')
      dot.className = 'dot'
      if (index === 0) dot.classList.add('active')
      dot.onclick = () => {
        if (isTransitioning) return
        goToSlide(index)
      }
      sliderDotsContainer.appendChild(dot)
    })
  }

  // 3. Set Initial State (Offset by 1 to show first real slide)
  updateTrackPosition(currentSlideIndex + 1, false)
  updateActiveClasses(currentSlideIndex)
  updateTitle(currentSlideIndex)
  
  // 4. Add Transition End Listener for Infinite Loop
  sliderTrack.addEventListener('transitionend', handleTransitionEnd)

  startAutoPlay()
}

function createSlideItem(slide, index) {
    const slideItem = document.createElement('div')
    slideItem.className = 'slide-item'
    slideItem.setAttribute('data-index', index)
    
    const img = document.createElement('img')
    img.src = slide.image
    img.alt = slide.title || 'Slide Image'
    img.loading = index < 2 ? 'eager' : 'lazy' // Optimize loading
    
    slideItem.appendChild(img)
    return slideItem
}

// Update Track Position
function updateTrackPosition(positionIndex, animate = true) {
  if (!sliderTrack) return
  
  if (animate) {
    // Default transition, overridden by dynamic logic if needed
    sliderTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
  } else {
    sliderTrack.style.transition = 'none'
  }
  
  const translateX = -(positionIndex * 100)
  sliderTrack.style.transform = `translateX(${translateX}%)`
}

function updateActiveClasses(index) {
    // Update Slides Opacity
    const items = sliderTrack.children
    // items[0] is cloneLast, items[1] is real 0
    // Real index i corresponds to items[i+1]
    
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active')
    }
    // Active is the one currently viewed
    // If we are at real index `index`, we are at items[index+1]
    if (items[index + 1]) items[index + 1].classList.add('active')

    // Update Dots
    if (sliderDotsContainer) {
        const dots = sliderDotsContainer.children
        for (let i = 0; i < dots.length; i++) {
            if (i === index) dots[i].classList.add('active')
            else dots[i].classList.remove('active')
        }
    }
}

function updateTitle(index) {
  if (!sliderTitle) return
  
  sliderTitle.classList.remove('animate-in')
  
  setTimeout(() => {
    sliderTitle.innerText = sliderData[index].title
    if (sliderData[index].title) {
        sliderTitle.classList.add('animate-in')
        sliderTitle.style.display = 'block'
    } else {
        sliderTitle.style.display = 'none'
    }
  }, 50)
}

// We need a better state management for the infinite loop
var visualIndex = 1 // Starts at 1 (First Real Slide)

function handleTransitionEnd() {
  isTransitioning = false
  
  // Snap Back Logic
  // If we are at Clone First (visualIndex = totalSlides + 1)
  if (visualIndex === totalSlides + 1) {
      visualIndex = 1 // Snap to Real First
      updateTrackPosition(visualIndex, false) // No animation
      updateActiveClasses(0)
  }
  
  // If we are at Clone Last (visualIndex = 0)
  if (visualIndex === 0) {
      visualIndex = totalSlides // Snap to Real Last
      updateTrackPosition(visualIndex, false) // No animation
      updateActiveClasses(totalSlides - 1)
  }
}

function goToSlide(targetIndex) {
    if (isTransitioning) return
    isTransitioning = true

    // Calculate distance for duration adjustment
    const diff = Math.abs(currentSlideIndex - targetIndex)
    // Slower for longer distances, but cap it
    const duration = diff > 1 ? 0.4 + (0.08 * diff) : 0.5
    if (sliderTrack) sliderTrack.style.transitionDuration = `${Math.min(duration, 1.2)}s`

    currentSlideIndex = targetIndex
    visualIndex = currentSlideIndex + 1
    
    updateTrackPosition(visualIndex, true)
    updateActiveClasses(currentSlideIndex)
    updateTitle(currentSlideIndex)
    
    startAutoPlay()
}

function nextSlide() {
    if (isTransitioning) return
    isTransitioning = true
    
    if (sliderTrack) sliderTrack.style.transitionDuration = '0.5s'

    // If at last slide, go to Clone First
    if (currentSlideIndex === totalSlides - 1) {
        currentSlideIndex = 0
        visualIndex = totalSlides + 1 // Position of Clone First
        
        updateTrackPosition(visualIndex, true)
        // We don't update active classes yet to keep the "last" slide active during transition?
        // No, usually we want to show the new state.
        // But for clones, the clone IS the new state visually.
        // Let's update active classes to the NEW index (0)
        updateActiveClasses(0) 
        updateTitle(0)
    } else {
        currentSlideIndex++
        visualIndex++
        updateTrackPosition(visualIndex, true)
        updateActiveClasses(currentSlideIndex)
        updateTitle(currentSlideIndex)
    }
    startAutoPlay()
}

function prevSlide() {
    if (isTransitioning) return
    isTransitioning = true
    
    if (sliderTrack) sliderTrack.style.transitionDuration = '0.5s'

    // If at first slide, go to Clone Last
    if (currentSlideIndex === 0) {
        currentSlideIndex = totalSlides - 1
        visualIndex = 0 // Position of Clone Last
        
        updateTrackPosition(visualIndex, true)
        updateActiveClasses(totalSlides - 1)
        updateTitle(totalSlides - 1)
    } else {
        currentSlideIndex--
        visualIndex--
        updateTrackPosition(visualIndex, true)
        updateActiveClasses(currentSlideIndex)
        updateTitle(currentSlideIndex)
    }
    startAutoPlay()
}

// Auto Play
function startAutoPlay() {
  if (sliderInterval) clearInterval(sliderInterval)
  sliderInterval = setInterval(nextSlide, sliderIntervalTime)
}

// Event Listeners
if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide()
})
if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide()
})

// Start
initSlider()
/*<-- end ======= Image Slider ======= -->*/

/*<-- start ======= About Us ======= -->*/
var aboutUsData = {
  TitleName: 'About Us',
  SubtitleName: 'Who We Are:',
  PlanOfAction: '#contact',
  aboutUsDescription:
    '5PointCredit is a leading banking finance and technology company with more than 10 years of experience in the Banking Lending and Financial Services Business. ',
  additionalInfo:
    'Additionally, we pre-underwrite your financial and tax documents and enable you to get access to the right set of lenders offering you the cheapest and easiest credit solutions to suit all your personal and business requirements. ',
  iconBoxes: [
    {
      iconClass: 'bi bi-cash-coin',
      title: 'How we matter?',
      description:
        'Here at 5PointCredit we want to make sure that all key business loan offerings and working capital products across banks are available under a single roof with the click of a button, so that you can focus on the most important aspect of running your business while we help you manage your banking financials.',
    },
    {
      iconClass: 'bi bi-person-lines-fill',
      title: 'Mission Statement',
      description:
        'Our mission is to empower businesses with seamless access to financial opportunities through innovative lending solutions. We are committed to leveraging technology to simplify the borrowing process, foster financial inclusion, and drive economic growth by providing accessible and transparent lending services.<br>',
    },
    {
      iconClass: 'bi bi-briefcase',
      title: 'Our Offerings',
      description:
        'You can choose from our whole host of financial and banking products to suit your business ranging from supply chain finance, overdraft lines, business term loans, inventory finance and revenue based funding.<br><br><br><br>',
    },
    {
      iconClass: 'bi bi-command',
      title: 'Vision and Values',
      description:
        "We are driven towards empowering India's financial landscape through innovative technology, financial inclusion and seamless financial solutions. We strive to revolutionize the way businesses manage, access, and grow their finances, fostering overall financial progress and ensuring financial well-being for all.",
    },
  ],
}

// Function to set dynamic content for the about us section
function setAboutUsContent(data) {
  document.getElementById('aboutUsTitle').innerHTML = data.TitleName
  document.getElementById('aboutUsSubtitle').innerHTML = data.SubtitleName
  document.getElementById('aboutUsDescription').innerHTML =
    data.aboutUsDescription
  document.getElementById('additionalInfo').innerHTML = data.additionalInfo
  var readMoreLink = document.getElementById('readMoreLink')
  readMoreLink.href = data.PlanOfAction

  var iconBoxesContainer = document.getElementById('iconBoxesContainer')

  data.iconBoxes.forEach(function (box) {
    var iconBox = document.createElement('div')
    iconBox.className = 'col-md-6'
    iconBox.setAttribute('data-aos', 'fade-up')
    iconBox.setAttribute('data-aos-delay', box.delay || '200') // Set a default delay if not provided

    var boxContent = `
        <div class="icon-box" style="color: #000000;">
          <i class="${box.iconClass}"></i>
          <h3>${box.title}</h3>
          <p>${box.description}</p>
        </div>
      `

    iconBox.innerHTML = boxContent
    iconBoxesContainer.appendChild(iconBox)
  })
}

// Call the function with the provided data
setAboutUsContent(aboutUsData)
/*<-- end ======= About Us ======= -->*/

/*<-- start ======= Stats Section ======= -->*/
var statsData = {
  TitleName: 'How Are We Unique?',
  SubtitleName: 'Our Moat',
  Description:
    '5PointCredit is a leading banking finance and technology company that will pre- underwrite your financial and tax documents and enable you to get access to the right set of lenders offering you the cheapest and easiest credit solutions to suit all your personal and business requirements . We have a whole host of financial and banking products to suit every single business ranging from supply chain finance, overdraft lines, business term loans, inventory finance and revenue based funding.',
  BackgroundImage: './assets/img/stats-bg.jpg',
  ListItems: [
    'Deep banking expertise & Financial guidance',
    'Multiple Banks and Lenders',
    'Credit assessment & Fitment',
    'Sanctions & Approvals',
    'End to End Support from Loan Request To Loan Disbursal',
  ],
  StatsItems: [
    {
      label: 'Distributors',
      value: 7532,
    },
    {
      label: 'Retailers',
      value: 40846,
    },
    {
      label: 'Anchors',
      value: 30,
    },
  ],
}

// Function to set dynamic content for the stats section
function setStatsContent(data) {
  var statsBackground = document.getElementById('statsBackground')
  statsBackground.src = data.BackgroundImage

  document.getElementById('statsTitle').innerHTML = data.TitleName
  document.getElementById('statsSubtitle').innerHTML = data.SubtitleName
  document.getElementById('statsDescription').innerHTML = data.Description

  // Set list items
  var statsList = document.getElementById('statsList')
  data.ListItems.forEach(function (item) {
    var listItem = document.createElement('li')
    listItem.style.fontWeight = '700'
    listItem.textContent = item
    statsList.appendChild(listItem)
  })

  // Set stats items
  var statsItemsContainer = document.getElementById('statsItemsContainer')
  data.StatsItems.forEach(function (item) {
    var statsItem = document.createElement('div')
    statsItem.className = 'col-lg-4 col-md-6'
    statsItem.innerHTML = `
        <div class="stats-item text-center w-100 h-100">
          <span data-purecounter-start="0" data-purecounter-end="${item.value}" data-purecounter-duration="1" class="purecounter"></span>
          <p>${item.label}</p>
        </div>
      `
    statsItemsContainer.appendChild(statsItem)
  })
}

// Call the function with the provided data
setStatsContent(statsData)
/*<-- end ======= Stats Section ======= -->*/

/*<-- start ======= Service Section ======= -->*/
var sectionInfo = {
  TitleName: 'Services',
  SubtitleName: 'The Lending Triangle',
  Description:
    'We have it all covered secured loans, unsecured Loans and Supply Chain Finance, we call it the business triangle. Our offerings include over 140 products under these categories to make sure we cover every business need.',
}

var servicesData = [
  {
    title: 'Secured Loans',
    content:
      'Our key product offerings include Mortgage Loans and Home loans, we also offer Overdrafts for Businesses against the property mortgaged.',
    image: './assets/img/services-features/SECURE_LOAN_COUPLE_UNDRSTNG.jpg',
    order: 'contentFirst',
    icon: 'bi bi-briefcase',
  },
  {
    title: 'Unsecured Business Loans',
    content:
      'To help businesses manage and cover cash flow fluctuations, timely payments and other short term obligations we offer unsecured Overdraft facilities and Term Loans at attractive rates with simple and easy terms.',
    image:
      './assets/img/services-features/UNSECURED_BIZZLOAN-2MEN_HANDSHAKE.jpg',
    order: 'imageFirst',
    icon: 'bi bi-card-checklist',
  },
  {
    title: 'Supply Chain Finance',
    content:
      'An incredibly powerful method of financing that eases cash flow issues within the business, reduces risk of bad debts and improves the overall sales and performance of the entity.',
    image: './assets/img/services-features/SUPPLY_CHAINFINANCE_PHOTO2.jpg',
    order: 'contentFirst',
    icon: 'bi bi-bar-chart',
  },
  {
    title: 'Working Capital Loan',
    content:
      "Working capital loans help businesses manage their day-to-day operations by providing them with the necessary funds to cover their short-term operations expenses, such as purchasing inventory, managing accounts payable, and meeting other operational costs.<br><br> Businesses can avail various types of working capital loans, such as cash credit, overdraft facility,trade credit, working capital term loans, and bank guarantees. Banks and Lenders provide working capital loans based on factors such as the business's creditworthiness, financial stability, repayment capacity, business plan, and collateral. <br><br>At 5PointCredit, we help structure your various working capital needs with the right offering of financing solutions from whole host of lenders post careful understanding and analysis of your business.",
    image:
      './assets/img/services-features/WORKING_CAPITAL_LOAN_FACTORY_WORKERS.jpeg',
    order: 'imageFirst',
    icon: 'bi bi-award',
  },
  {
    title: 'MSME Loan',
    content:
      'To support the Micro, Small, and Medium Enterprises (MSME) sector, Govt.  of  India actively promotes and provides financial support through various initiatives and schemes aimed at providing financial assistance and support. <br><br>The government periodically announces interest subvention schemes to provide financial support to MSMEs by offering interest subsidies on loans, thus reducing the overall cost of borrowing for these enterprises. <br><br>Here at 5PointCredit, we work with various agencies and Lenders to help you avail the schemes and benefits aimed at enabling MSMEs and businesses to get access to easy and affordable credit.',
    image: './assets/img/services-features/MSME_SAMPLE_TAILOR_DRESSMACHINE.jpg',
    order: 'contentFirst',
    icon: 'bi bi-aspect-ratio',
  },
  // Add more service data objects as needed
]

function createServiceItem(title, content, image, order, icon) {
  var container = document.createElement('div')
  container.className = 'container'
  container.style.marginBottom = '20px'
  container.style.marginTop = '30px'

  var serviceItem = document.createElement('div')
  serviceItem.className = 'row gy-4 aos-init aos-animate service-item d-flex'
  serviceItem.setAttribute('data-aos', 'fade-up')

  var itemContent

  if (order === 'imageFirst') {
    itemContent = `
            <div class="col-lg-6" style="display: flex; justify-content: center; align-items: center;">
                <img src="${image}" alt="" srcset="" style="height: 300px;">
            </div>
            <div class="col-lg-6">
                <div class="">
                    <div class="icon flex-shrink-0"><i class="${icon}"></i></div><br><br>
                    <div>
                        <h4 class="title"><span class="stretched-link">${title}</span></h4>
                        <p>${content}</p>
                    </div>
                </div>
            </div>
        `
  } else if (order === 'contentFirst') {
    itemContent = `
            <div class="col-lg-6">
                <div class="">
                    <div class="icon flex-shrink-0"><i class="${icon}"></i></div><br><br>
                    <div>
                        <h4 class="title"><span class="stretched-link">${title}</span></h4>
                        <p>${content}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" style="display: flex; justify-content: center; align-items: center;">
                <img src="${image}" alt="" srcset="" style="height: 300px;">
            </div>
        `
  }

  serviceItem.innerHTML = itemContent
  container.appendChild(serviceItem)

  return container
}

// Example usage
var servicesContainer = document.getElementById('services')

// Add section title and description
var sectionTitle = document.createElement('div')
sectionTitle.className = 'container section-title aos-init aos-animate'
sectionTitle.setAttribute('data-aos', 'fade-up')
sectionTitle.innerHTML = `
    <h2>${sectionInfo.TitleName}</h2>
    <h3>${sectionInfo.SubtitleName}</h3>
    <p style="text-align: justify;">${sectionInfo.Description}</p>
`
servicesContainer.appendChild(sectionTitle)

// Add service items
servicesData.forEach(function (service) {
  var serviceItem = createServiceItem(
    service.title,
    service.content,
    service.image,
    service.order,
    service.icon
  )
  servicesContainer.appendChild(serviceItem)
})
/*<-- end ======= Service Section ======= -->*/

/*<-- start ======= Feature Section ======= -->*/
var featuresInfo = {
  TitleName: 'TYPES OF LOAN PRODUCTS',
  SubtitleName: 'All of Banking under One Roof',
  Description:
    'At 5PointCredit, we help you access the right set of lenders offering the most affordable and convenient credit solutions for all your personal and business requirements.  Our comprehensive range of banking and financial products includes supply chain finance, overdraft lines, business term loans, inventory finance, and revenue-based funding — all under one roof."',
}

var featuresData = [
  {
    order: 'contentFirst',
    title: 'Home Loans',
    subtitle: 'Secured HL',
    content:
      "Housing loans, also known as home loans, are financial products offered by various banks and financial institutions to help individuals purchase or construct a house. The terms and conditions, as well as the interest rates, for housing loans can vary depending on the financial institution and the current market conditions. Some factors that may influence housing loan interest rates include the Reserve Bank of India's monetary policy, inflation rates, and the overall economic situation.<br><br/>At 5PointCredit, we understand that Building a home as said is a dream come true for many, we  help you build your dream home and also refinance it as working capital for your business at the most competitive rate of interest.",
    image: '',
    secondImage:
      './assets/img/services-features/HOME_LOAN_COUPLE_POSING PICC.jpg',
    buttonId: 'securedhl',
  },
  {
    order: 'imageFirst',
    title: 'Business Loans / B2B Lending',
    subtitle: 'Unsecured BL',
    content:
      'Unsecured Business Loan is a loan given for business purpose where the business does not have to pledge any collateral or security to the Lender in order to avail the loan. The loan can be repaid through Equated Monthly Installments, commonly referred to as EMIs.<br><br/>At 5PointCredit, we follow a comprehensive evaluation process that considers multiple factors to ensure the loan aligns with the company’s requirements and remains sustainable. We begin by identifying the purpose of the loan and then determine the appropriate loan amount after thoroughly assessing creditworthiness through a detailed review of various data points. ',
    image: './assets/img/services-features/B2B_LENDING_BIZZ_LOAN.jpg',
    secondImage: 'assets/img/second-image.jpg',
    buttonId: 'unsecuredhl',
  },
  {
    order: 'contentFirst',
    title: 'AutoMobile Loan',
    subtitle: 'Vehicle Loan',
    content:
      'Automobile loans are a type of secured loan designed to help individuals purchase vehicles. Also known as auto loans or car loans, they provide borrowers with the necessary funds to buy a car or other four-wheeler, with the vehicle itself serving as collateral for the loan. The terms and conditions—including interest rates, repayment schedules, and loan amounts—may vary based on the lender and the borrower’s creditworthiness.<br><br/>At 5PointCredit, we work closely with you to assess various factors and ensure that the automobile financing aligns with your company’s needs while enhancing financial capabilities to support efficient operations and foster growth. Additionally, we evaluate interest rates and loan terms across lenders in your region to identify the most suitable option, ensuring both convenience and a positive impact on your business.',
    image: '',
    secondImage:
      './assets/img/services-features/AUTOMOBILE_LOAN_CHILD_CAR1.jpg',
    buttonId: 'vehicleloan',
  },
  {
    order: 'imageFirst',
    title: 'Supply Chain Finance',
    subtitle: '',
    content:
      "Supply chain finance, also known as supplier finance, channel finance or reverse factoring, is a financial solution that optimizes cash flow by allowing businesses to extend their payment terms while enabling both large and SME suppliers to receive early payments if needed.<br><br/>In recent years, the Indian government has introduced several initiatives to promote supply chain finance, recognizing its potential to strengthen the country's manufacturing sector and overall supply chain capabilities.<br><br/>At 5PointCredit, we help companies strengthen their supply chain and distribution network by providing liquidity to their suppliers at a lower cost of capital, based on the company’s credit rating. By enabling businesses to access financing at competitive interest rates and offering SMEs a reliable avenue for funding, we support improved cash flow and more efficient financial resource planning. With the digitization of financial services and our extensive network of lenders, we provide clients with a diverse range of solutions at highly competitive rates to enhance and grow their business financing capabilities.",
    image: './assets/img/services-features/SUPPLY_CHAINMEN_SHADOW.jpg',
    buttonId: 'supplychain',
  },
  {
    order: 'contentFirst',
    title: 'Mudra Loan',
    subtitle: '',
    content:
      'MUDRA’ stands for Micro Units Development and Refinance Agency. These loans are designed to support the growth and development of small businesses across sectors such as trading, manufacturing, and services. Introduced by the Government of India, MUDRA Loans provide essential financial assistance to micro and small enterprises. Below are some key features of MUDRA Loans in India:<br> > Shishu: For businesses in their initial stages, offering loans of up to ₹50,000.<br> > Kishore: For growing businesses that require additional funding, offering loans ranging from ₹50,000 to ₹5 lakhs.<br> > Tarun: For well-established businesses seeking further expansion, offering loans ranging from ₹5 lakhs to ₹10 lakhs.<br><br>At 5PointCredit, we assist businesses in clearly understanding the purpose of MUDRA loans and guide them in availing these facilities through our network of lenders. In addition to advisory support, our team of financial experts works closely with businesses to help them access this government-promoted scheme—whether for working capital, equipment purchases, or other operational needs—ensuring that the loan aligns effectively with the company’s goals.',
    secondImage: './assets/img/services-features/MUDRA_LOAN _LADY_MOBILE.jpg',
    buttonId: 'mudraloan',
  },
  {
    order: 'imageFirst',
    title: 'Loan Against Property',
    subtitle: '',
    content:
      'Loan Against Property (LAP) is a type of secured loan that enables individuals to borrow funds by pledging their residential or commercial property as collateral. In India, various banks, non-banking financial companies (NBFCs), and financial institutions offer LAP with competitive interest rates and flexible repayment options. It is an ideal solution for individuals who require a substantial amount of funds and wish to leverage their existing property to meet financial needs.<br><br>At 5PointCredit, we guide borrowers not only on the advantages of availing a Loan Against Property (LAP) but also assist in assessing the market value of the property, as it directly influences the loan amount for which they may qualify. We support individuals and businesses seeking substantial funds or financial debt consolidation, particularly those with assets available to pledge as collateral',
    image: './assets/img/services-features/LOAN_AGNST PROPERTY_LOAN.jpg',
    buttonId: 'loanproperty',
  },
  {
    order: 'contentFirst',
    title: 'Credit Guarantee Fund Scheme for Micro and Small Enterprises',
    subtitle: 'CGTMSE',
    content:
      'The CGTMSE scheme, designed by the Government of India, provides collateral-free credit to micro and small enterprises up to ₹500 lakhs. At 5PointCredit, we assist both new and existing MSME units in accessing loans under the CGTMSE scheme without any collateral or security requirements, leveraging our extensive network of lenders.',
    secondImage:
      './assets/img/services-features/CGTMSE_LOAN _SURD_BIZZPHOTO.jpg ',
    buttonId: 'cgtmse',
  },
  {
    order: 'imageFirst',
    title: 'Overdraft',
    subtitle: '',
    content:
      'Overdraft facility for businesses is a financial service offered by banks that allows businesses to withdraw more funds from their current account than the available balance, up to a specified limit. This facility helps businesses manage unforeseen short-term financial needs or cash flow gaps efficiently.<br><br>This facility is particularly beneficial for businesses experiencing seasonal cash flow fluctuations or occasional short-term funding requirements.<br><br>At 5PointCredit, our team of financial experts helps businesses manage unforeseen short-term financial challenges or cash flow gaps through customized and recurring overdraft facilities. We work closely with businesses to assess eligibility based on credit history, financial stability, and other relevant factors, enabling them to leverage their overdraft facilities to the fullest. With our extensive network of banks and lenders across India, we provide businesses access to multiple funding options, helping them maximize their growth potential.',
    image: './assets/img/services-features/OVERDRAFT_LOAN.jpg',
    buttonId: 'overdraft',
  },
  {
    order: 'contentFirst',
    title: 'Term Loan',
    subtitle: '',
    content:
      'A term loan is a bank loan provided for a specific amount, with a defined repayment schedule and either a fixed or reducing interest rate.<br><br>We at 5PointCredit , help businesses who are looking for business expansion, meet capital expenditure, or other long-term financing needs with these loans. Apart from helping businesses get access to term loans we also help them in understanding and planning the repayment period for term loan which can vary, typically ranging from one to ten years or more, depending on the specific terms of the loan agreement. Our expertise and timely financial arrangements has helped many businesses get easy availability of term loans to facilitate their growth and expansion, especially small and medium-sized enterprises (SMEs). Additionally, with our network and platform of digital lending , our business customers are delighted with the easy availability of term loans, making the process more convenient and accessible.',
    secondImage: './assets/img/services-features/TERM_LOAN_BIZZ_INDIVDUAL.jpg',
    buttonId: 'termloan',
  },

  // Add more data for other types as needed
]

function createFeatureItem(
  order,
  title,
  subtitle,
  content,
  image,
  secondImage,
  buttonId
) {
  var container = document.createElement('div')
  container.className = 'container'

  var itemContent
  if (order === 'contentFirst') {
    itemContent = `
        
            <div id="${buttonId}" class="row gy-4 align-items-center features-item">
                <div class="col-lg-6 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <h3>${title}</h3>
                    <p>${subtitle}</p>
                    <p>${content}</p>
                    <a    href="#contact" class="btn btn-get-started">Know more</a>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
                    <div class="">
                       
                        <img src="${secondImage}" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <br>
            <br>
        `
  } else if (order === 'imageFirst') {
    itemContent = `
            <div id="${buttonId}" class="row gy-4 align-items-stretch justify-content-between features-item">
                <div class="col-lg-6 d-flex align-items-center features-img-bg aos-init aos-animate" data-aos="zoom-out">
                    <img src="${image}" class="img-fluid" alt="" style="object-fit:fill">
                </div>
                <div class="col-lg-5 d-flex justify-content-center flex-column aos-init aos-animate" data-aos="fade-up">
                    <h3 >${title}</h3>
                    <p>${subtitle}</p>
                    <p>${content}</p>
                    <a   href="#contact" class="btn btn-get-started align-self-start">know more</a>
                </div>
            </div>
            <br>
            <br>
        `
  }

  container.innerHTML = itemContent
  return container
}

// Example usage
var featuresContainer = document.getElementById('features')

// Add section title and description
var featuresTitle = document.createElement('div')
featuresTitle.className = 'container section-title'
featuresTitle.setAttribute('data-aos', 'fade-up')
featuresTitle.innerHTML = `
    <h2>${featuresInfo.TitleName}</h2>
    <h3>${featuresInfo.SubtitleName}</h3>
    <p style="text-align:justify;">${featuresInfo.Description}</p>
`
featuresContainer.appendChild(featuresTitle)

// Add feature items
featuresData.forEach(function (feature) {
  var featureItem = createFeatureItem(
    feature.order,
    feature.title,
    feature.subtitle,
    feature.content,
    feature.image,
    feature.secondImage,
    feature.buttonId
  )
  featuresContainer.appendChild(featureItem)
})
/*<-- end ======= Feature Section ======= -->*/

/*<-- start ======= Portfolio Section ======= -->*/
var portfolioData = [
  // Loans category
  {
    category: 'loans',
    items: [
      {
        title: 'Supply Chain Finance',
        description:
          'We provide affordable and efficient Supply Chain Finance solutions for your business, offering collateral-free loans for up to 90 days with flexible and easy repayment options.',
      },
      {
        title: 'MSME Loans',
        description:
          'This MSME Loan scheme is designed to provide collateral-free credit to micro and small enterprises. Under the scheme, both new and existing MSME units can access loans up to a specified limit without any collateral or security requirements.',
      },
      {
        title: 'Business Line of Credit',
        description:
          'An overdraft and similar credit facility allows borrowers to draw funds as needed, up to a predefined credit limit. Interest is charged only on the amount utilized, making it a flexible solution for managing fluctuating cash flows.',
      },
      {
        title: 'Working Capital Loans',
        description:
          'Unsecured working capital loans are specifically designed to meet short-term working capital requirements, such as inventory purchases, payroll, or other operational expenses.',
      },
      {
        title: 'Invoice Financing',
        description:
          'Invoice financing, also known as invoice factoring, enables businesses to receive advances on their outstanding invoices. This type of financing is particularly beneficial for businesses that face delays in receiving payments from customers.',
      },
      {
        title: 'Merchant Cash Advances',
        description:
          'Merchant cash advances provide businesses with a lump sum amount in exchange for a percentage of their daily credit card sales. Repayments are tied to daily revenue, making this solution particularly suitable for businesses with fluctuating cash flows.',
      },
      {
        title: 'Business Term Loans',
        description:
          'This loan provides a lump sum amount for a fixed term and can be used for various purposes, such as expanding operations, purchasing equipment, or addressing short-term cash flow gaps.',
      },
      // Add more loan items as needed
    ],
  },

  // Insurance category
  {
    category: 'insurance',
    items: [
      {
        title: 'Life Insurance',
        description:
          'Whether you are looking for term insurance or whole life insurance protection, we offer a wide range of options from multiple trusted insurance providers.',
      },
      {
        title: 'Health Insurance',
        description:
          'Cover your medical expenses arising from illness or emergencies with our comprehensive range of health insurance policies.',
      },
      {
        title: 'Motor Insurance',
        description:
          'In India, it is mandatory for all vehicles operating in public spaces to have a motor insurance policy.',
      },
      {
        title: 'MSME Insurance',
        description:
          'To support and protect Micro, Small, and Medium Enterprises (MSMEs), various insurance products and schemes have been introduced, offering comprehensive coverage tailored to the specific needs and risks faced by these businesses.',
      },
      {
        title: 'Commercial Vehicle Insurance',
        description:
          'Commercial vehicle insurance in India offers coverage for vehicles used for business purposes, providing financial protection against various risks and liabilities associated with commercial vehicle operations.',
      },
      // Add more insurance items as needed
    ],
  },

  // Investment category
  {
    category: 'investment',
    items: [
      {
        title: 'MoneyBack Schemes',
        description:
          'A money-back policy in India is a type of life insurance that provides periodic payouts during the policy term, in addition to the maturity benefit. This policy combines insurance protection with investment, offering both financial security and regular returns. ',
      },
      {
        title: 'Guarantee Income Schemes',
        description:
          'Guaranteed income plans are a type of life insurance product that combine insurance protection with guaranteed returns. They provide policyholders with regular income payouts either during the policy term or upon maturity.',
      },
      {
        title: 'Pension & Retirement Plans',
        description:
          'Pension and retirement plans are designed to help individuals build a corpus for their post-retirement years. These plans combine savings and investment, providing a steady income to support individuals throughout their retirement.',
      },
      {
        title: 'Children Plans',
        description:
          'To secure your child’s future—including education, marriage, and other important life milestones—explore our wide range of children’s plans tailored to your needs. ',
      },
      // Add more investment items as needed
    ],
  },

  // Credit Card category
  {
    category: 'creditcard',
    items: [
      {
        title: 'Credit card',
        description:
          'Credit cards are widely used financial instruments that offer a convenient and secure way to make cashless payments. They provide a line of credit, allowing cardholders—whether individuals or business professionals—to make purchases and pay for services, both online and offline, with the flexibility of repaying the amount at a later date.',
      },
      {
        title: 'Business Credit card',
        description:
          'Business credit cards are specifically designed to meet the needs of businesses. They typically offer features and benefits tailored for managing business expenses and transactions efficiently.',
      },
      // Add more credit card items as needed
    ],
  },

  // Balance Transfer category
  {
    category: 'balancetransfer',
    items: [
      {
        title: 'Balance Transfer',
        description:
          'The balance transfer facility for secured loans allows borrowers to transfer the outstanding balance of an existing loan from one financial institution to another, typically to benefit from lower interest rates, improved terms, or enhanced services. This facility is commonly available for various secured loans, including home loans, loans against property, and other secured credit products.',
      },
      // Add more balance transfer items as needed
    ],
  },

  // Add more categories as needed
]

var TitleName = 'Portfolio' // Replace with your dynamic title
document.getElementById(
  'portfolioTitleContainer'
).innerHTML = `<h2>${TitleName}</h2>`

function generatePortfolioContent(data) {
  var portfolioContainer = document.querySelector('.isotope-container')
  var filtersContainer = document.querySelector('.portfolio-filters')

  // Iterate through the data and create portfolio items and filters
  for (var i = 0; i < data.length; i++) {
    var categoryData = data[i]
    var category = categoryData.category
    var items = categoryData.items

    // Create filter button
    var filterItem = document.createElement('li')
    filterItem.setAttribute('data-filter', '.filter-' + category)
    filterItem.textContent =
      category.charAt(0).toUpperCase() + category.slice(1)
    filtersContainer.appendChild(filterItem)

    // Iterate through items in the category
    for (var j = 0; j < items.length; j++) {
      var item = items[j]
      var portfolioItem = document.createElement('div')
      portfolioItem.className =
        'col-lg-4 col-md-6 portfolio-item isotope-item filter-' + category
      portfolioItem.innerHTML = `
        <div class="card">
          <div class="card-body">
            <div class="card-footer">
              <h4 class="text-center">${item.title}</h4>
            </div>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      `
      portfolioContainer.appendChild(portfolioItem)
    }
  }
}

// Call the function with the provided data
generatePortfolioContent(portfolioData)

/*<-- end ======= Portfolio Section ======= -->*/

/*<-- start ======= Career Section ======= -->*/
var careerSection = [
  {
    TitleName: 'Career',
    SubtitleName:
      'COME, JOIN 5PointCredit TO LAUNCH THE SUCCESS STORY OF YOUR CAREER AND PROFESSIONAL GROWTH. Please email your resume at',
    EmailAddress: 'hr@5PointCredit.com',
    PlanOfAction: 'https://zfrmz.com/3DDBhNq05jtGAveCO1Hm',
  },
]

document.getElementById(
  'careerTitleContainer'
).innerHTML = `<h2>${careerSection[0].TitleName}</h2>`
document.getElementById(
  'careerContentContainer'
).innerHTML = `<h3 style="color: white;">${careerSection[0].SubtitleName} <a href="${careerSection[0].PlanOfAction}">${careerSection[0].EmailAddress}</a></h3>`

/*<-- end ======= Career Section ======= -->*/

/*<-- start ======= FAQ Section ======= -->*/
var faqData = {
  faqSection: {
    TitleName: 'Frequently Asked',
    SubtitleName: 'Questions',
  },
  items: [
    {
      question:
        'What is a business loan and for what purpose can I use the loan?',
      answer:
        'A business loan is a financial product offered by banks or financial institutions that provides funds to businesses for various purposes, such as expansion, working capital, purchasing equipment, or meeting other financial requirements.',
    },
    {
      question:
        'I do not have any collateral or security, can I get a loan for business?',
      answer:
        'You can get a loan even without collateral. Eligibility for a business loan typically depends on factors such as the business vintage, annual turnover, credit score, profitability, and the industry in which it operates. ',
    },
    {
      question: 'What all loans are available?',
      answer:
        'We offer both collateral and non-collateral based loans. Business Loans can range from short term loans like Supply Chain Finance, Working Capital loans, Overdraft facility to long term business loans, commercial vehicle finance, etc.',
    },
    {
      num: '4',
      question:
        'What documents are typically required to apply for a digital business loan?',
      answer:
        'Our Business loans involve minimal paperwork and easy documentation. However, some standard documents are usually required, including business financial statements, bank statements, tax returns, GST statements, business licenses, and KYC documents of the business owners.',
    },
    {
      num: '5',
      question:
        'What is the Rate of Interest on Loans and from which bank will I get loans?',
      answer:
        'Interest rates on business loans vary depending on the bank, lender, the business’s credit profile, location, and prevailing market conditions. At 5PointCredit, we have partnered with over 100 lenders and multiple banks to provide business loans tailored to your specific requirements.',
    },
    // Add more FAQ items as needed
  ],
}

// Update the FAQ title
document.getElementById(
  'faqTitleContainer'
).innerHTML = `<h3><span>${faqData.faqSection.TitleName}</span>
<strong>${faqData.faqSection.SubtitleName}</strong></h3>`

// Update the FAQ content
var faqContainer = document.getElementById('faqContentContainer')
for (var i = 0; i < faqData.items.length; i++) {
  var faqItem = faqData.items[i]
  var faqElement = document.createElement('div')
  faqElement.className = 'faq-item'
  faqElement.innerHTML = `
    <h3><span class="num">${i + 1}.</span> <span>${faqItem.question}</span></h3>
    <div class="faq-content">
      <p>Ans :- ${faqItem.answer}</p>
    </div>
    <i class="faq-toggle bi bi-chevron-right"></i>
  `
  faqContainer.appendChild(faqElement)
}

/*<-- end ======= FAQ Section ======= -->*/

/*<-- start ======= Call-to-Action Section ======= -->*/
var ctaData = {
  TitleName:
    'Your working capital and finance solution is right around the corner. Call us today !',
  SubtitleName: 'Call us, we will get back to you soon.',
  phoneNumber: '+91 9364111656',
  BackgroundImage: './assets/img/cta-bg.jpg',
}
var img = document.getElementById('callactionbg')
img.setAttribute('src', ctaData.BackgroundImage)
document.getElementById('ctaContentContainer').innerHTML = `
  <h3>${ctaData.TitleName}</h3>
  <p>${ctaData.SubtitleName}</p>
  <a class="cta-btn" href="tel:9364111656"> <span class="phone-icon">&#x1F4DE;</span>${ctaData.phoneNumber}</a>
`
/*<-- end ======= Call-to-Action Section ======= -->*/

/*<-- start ======= Testimonials  Section ======= -->*/

var testimonialsData = {
  testimonialsSection: {
    TitleName: 'Testimonials',
    SubtitleName: 'What our happiest customers have to say',
  },
  testimonials: [
    {
      name: 'Arshad Sheikh',
      designation: 'ZM ENTERPRISES. Nagpur',
      image: './assets/img/testimonials/testimonials-1.jpg',
      rating: 5,
      quote:
        '5PointCredit suggested me to apply for business loan through Kotak Bank, as they had the best deal for me. I am really happy with the deal amount and rate that I have got. If ever you want to apply for a business loan, do not rethink, just choose 5PointCredit, they will get the best financing solution for you.',
    },
    {
      name: 'Babu K. Sebastian',
      designation: 'BABULAL ASSOCIATES, Ernakulam',
      image: './assets/img/testimonials/testimonials-2.jpg',
      rating: 5,
      quote:
        '5PointCredit representative have been very patient and helpful throughout my working capital loan request journey. Their personalized advice , streamlined documentation and user friendly approach has made the journey much more easier and convenient for businesses like me.',
    },
    {
      name: 'Kunal Gadi',
      designation: 'Om Marketing, Pune',
      image: 'assets/img/testimonials/testimonials-4.jpg',
      rating: 5,
      quote:
        'I had a few issues within my CIBIL, some wrong entries were mentioned in my report, I was not able to get a loan for more than 2 years with no luck from any of the several banks I tried with, through a friend I was introduced to the 5PointCredit team, they assessed the documents so accurately, and were able to not only diagnose the issues but they were able to provide meaningful solutions in terms of the documents required to prove it was not my fault, through the whole process of applying till sanctions, I trust 5PointCredit for all my banking and working capital requirements.',
    },
    {
      name: 'Suraj Bhalla',
      designation: 'SHAKTI TRADERS, Delhi',
      image: 'assets/img/testimonials/testimonials-3.jpg',
      rating: 5,
      quote:
        'I had an existing OD with my bank, when new opportunities came my way to expand, I realized  my existing banker had very limited exposure to the various new age products in banking and  how  I could structure my debt funding effectively, hence I wanted an effective solution from the best experts, thankfully I placed my trust with the 5PointCredit team, they were so sound and helpful that I had more than what I had asked for in terms of options and funding to choose from multiple banks and Lenders.',
    },
    {
      name: 'Tilak B. Bhujade ',
      designation: 'SHANKAR PRASAD Enterprises, Nagpur',
      image: 'assets/img/testimonials/testimonials-5.jpg',
      rating: 5,
      quote:
        'I needed to raise around 30 lacks and by existing bank was not willing to support me on the entire requirement, I approached the 5PointCredit team, within 2 days they assessed my documents and were able to precisely share with me the findings, I was surprised when they rolled out the offers from so many lenders many of whose names I had not even heard about, I find them as a one stop solution for all banking needs.',
    },
  ],
}

var testimonialInfoContainer = document.getElementById(
  'testimonialInfoContainer'
)
testimonialInfoContainer.innerHTML = `
  <h3>${testimonialsData.testimonialsSection.TitleName}</h3>
  <p>${testimonialsData.testimonialsSection.SubtitleName}</p>
`

var testimonialContainer = document.getElementById('testimonialContainer')

testimonialsData.testimonials.forEach(function (testimonial) {
  var testimonialItem = document.createElement('div')
  testimonialItem.className = 'swiper-slide'
  testimonialItem.innerHTML = `
    <div class="testimonial-item">
      <div class="d-flex">
        <img src="${
          testimonial.image
        }" class="testimonial-img flex-shrink-0" alt="">
        <div>
          <h3>${testimonial.name}</h3>
          <h4>${testimonial.designation}</h4>
          <div class="stars">${'<i class="bi bi-star-fill"></i>'.repeat(
            testimonial.rating
          )}</div>
        </div>
      </div>
      <p>
        <i class="bi bi-quote quote-icon-left"></i>
        <span>${testimonial.quote}</span>
        <i class="bi bi-quote quote-icon-right"></i>
      </p>
    </div>
  `
  testimonialContainer.appendChild(testimonialItem)
})
/*<-- end ======= Testimonials  Section ======= -->*/

/*<-- start ======= Contact  Section ======= -->*/
var contactSections = [
  {
    TitleName: 'Contact',
    SubtitleName: 'Let us know what you think, we love talking to you!!',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206418.7664957082!2d77.54951589308318!3d12.782921363146592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14494a8943f7%3A0x768d0f9874c48675!2sHosur%20Rd%2C%20Srinivasa%20Nagar%2C%20Hal%20Layout%2C%20Singasandra%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701768661331!5m2!1sen!2sin',
    addressLine1:
      'Hosur Rd, Kudlu Gate, Srinivasa Nagar, Hal Layout, Singasandra,',
    addressLine2: 'Bengaluru, Karnataka-560068',
    phoneNumber: '+91 9364111656',
    emailAddress: 'support@5PointCredit.com',
    contactus: 'For Queries related to our Products and Services, ',
    PlanOfAction: 'https://zfrmz.com/NUB9bXeP5vWH6Cx8MjSK',
    hoursLine1: 'Mon - Fri : 10:00 AM - 6:00 PM',
    hoursLine2: 'Sat - Sun : 10:00 AM - 3:00 PM',
  },
  // Add more objects as needed
]
var contactContainer = document.getElementById('contact')

contactSections.forEach(function (contactData) {
  var contactContent = document.createElement('div')
  contactContent.className = 'container'

  contactContent.innerHTML = `
    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>${contactData.TitleName}</h2>
      <p>${contactData.SubtitleName}</p>
    </div>
    <!-- End Section Title -->

    <!-- Map -->
    <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
      <iframe style="border:0; width: 100%; height: 270px;"
        src="${contactData.mapSrc}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade" frameborder="0" allowfullscreen></iframe>
    </div>

    <!-- Contact Information -->
    <div class="container" data-aos="fade-up" data-aos-delay="100">
    <div class="row gy-4">
      <div class="col-lg-12">
        <div class="row gy-4">
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>${contactData.addressLine1}</p>
              <p>${contactData.addressLine2}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>${contactData.phoneNumber}</p>
              <br> <br>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>${contactData.emailAddress}</p>
              <br> <br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="row gy-4">
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-person-lines-fill"></i>
              <h3>Contact Us</h3>
              <p>${contactData.contactus}<a href="${contactData.PlanOfAction}">Know More.</a></p>
              <br>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info-item aos-init aos-animate" data-aos="fade" data-aos-delay="200">
              <i class="bi bi-clock"></i>
              <h3>Open Hours</h3>
              <p>${contactData.hoursLine1}</p>
              <p>${contactData.hoursLine2}</p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `

  contactContainer.appendChild(contactContent)
})

/*<-- end ======= Contact  Section ======= -->*/

/*<-- start ======= Footer  Section ======= -->*/
var footerData = {
  about: {
    logoSrc: './assets/img/logo-black.svg',
    description:
      'We will manage the banking and finance for you, while you have more time to manage and run your business efficiently.',
  },
  links: {
    usefulLinks: [
      {
        TitleName: 'Home',
        PlanofAction: '#home',
      },
      {
        TitleName: 'About us',
        PlanofAction: '#about',
      },
      {
        TitleName: 'Services',
        PlanofAction: '#services',
      },
      {
        TitleName: 'Terms of service',
        PlanofAction: 'assets/pdf/tc.pdf',
      },
      {
        TitleName: 'Privacy policy',
        PlanofAction: 'assets/pdf/pp.pdf',
      },
      // Add more links as needed
    ],
  },
  services: {
    ourServices: [
      {
        TitleName: 'Secured HL',
        PlanofAction: './index.html#securedhl',
      },
      {
        TitleName: 'Unsecured BL',
        PlanofAction: '#unsecuredhl',
      },
      {
        TitleName: 'Vehicle Loan',
        PlanofAction: '#vehicleloan',
      },
      {
        TitleName: 'Supply Chain Finance',
        PlanofAction: '#supplychain',
      },
      {
        TitleName: 'Mudra Loan',
        PlanofAction: '#mudraloan',
      },
      {
        TitleName: 'Loan against property',
        PlanofAction: '#loanproperty',
      },
      {
        TitleName: 'Term loan',
        PlanofAction: '#termloan',
      },
      // Add more services as needed
    ],
  },
  contact: {
    addressLines: [
      'Hosur Rd, Kudlu Gate, Srinivasa Nagar, Hal Layout, Singasandra,',
      'Bengaluru, Karnataka-560068',
    ],
    phone: '+91 9364111656',
    email: 'support@5PointCredit.com',
  },
}
// Function to create a list of links
function createLinkList(links) {
  var list = document.createElement('ul')
  links.forEach(function (link) {
    var listItem = document.createElement('li')
    var anchor = document.createElement('a')
    anchor.href = link.PlanofAction
    anchor.textContent = link.TitleName

    // Check if the link is "Terms of service" or "Privacy policy" and open in a new tab
    if (
      link.TitleName === 'Terms of service' ||
      link.TitleName === 'Privacy policy'
    ) {
      anchor.target = '_blank'
    }

    listItem.appendChild(anchor)
    list.appendChild(listItem)
  })
  return list
}

// Populate the footer sections with dynamic content
document.getElementById('footerAbout').innerHTML = `
  <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0" style="max-height: 130px;">
    <img src="${footerData.about.logoSrc}" alt="">
  </a>
  <p>${footerData.about.description}</p>
`

document.getElementById('footerLinks').innerHTML = `
  <h4>Useful Links</h4>
`
document
  .getElementById('footerLinks')
  .appendChild(createLinkList(footerData.links.usefulLinks))

document.getElementById('footerServices').innerHTML = `
  <h4>Our Services</h4>
`
document
  .getElementById('footerServices')
  .appendChild(createLinkList(footerData.services.ourServices))

document.getElementById('footerContact').innerHTML = `
  <h4>Contact Us</h4>
  <p>${footerData.contact.addressLines[0]}</p>
  <p>${footerData.contact.addressLines[1]}</p>
  <p class="mt-4"><strong>Phone:</strong> <span>${footerData.contact.phone}</span></p>
  <p><strong>Email:</strong> <span>${footerData.contact.email}</span></p>
`

/*<-- end ======= Footer  Section ======= -->*/
