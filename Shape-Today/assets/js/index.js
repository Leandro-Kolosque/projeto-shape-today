function clickMenu() {
    if (itemMenu.style.display == 'flex') {
      itemMenu.style.display = 'none'
    } else {
      itemMenu.style.display = 'flex'
    }
  }
  
  function changedSize() {
    if (window.innerWidth >= 600) {
      itemMenu.style.display = 'flex'
    } else {
      itemMenu.style.display = 'none'
    }
  }
