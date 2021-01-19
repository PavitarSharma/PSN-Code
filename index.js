const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e){
    //Remove all show and border classes
    removeBorder();
    removeShow();
    //Add border to current tab item
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItems = document.querySelectorAll('#${this.id}-content');
    //Add show class
    tabContentItems.classList.add('show');

}

//Remove bottom borders from all items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Listen for tab item click
tabItems.forEach(item => {
    item.addEventListener("click", selectItem)
});