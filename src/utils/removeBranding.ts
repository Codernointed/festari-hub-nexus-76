
/**
 * Utility to remove the branding tag from the page
 * Call this function on app initialization to ensure the tag is removed
 */
export function removeBrandingTag() {
  // This function searches for the branding tag and removes it
  const removeTag = () => {
    // Find all elements that might contain the branding
    const possibleTags = document.querySelectorAll('a[href*="lovable"]');
    const possibleDivs = document.querySelectorAll('div[class*="lovable"]');
    const editWithLovableTags = document.querySelectorAll('div[aria-label*="Edit with lovable"]');
    const editWithLovableElements = document.querySelectorAll('div:contains("Edit with")');
    
    // Remove any elements that match lovable branding
    [...possibleTags, ...possibleDivs, ...editWithLovableTags, ...editWithLovableElements].forEach(element => {
      if (element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    
    // Also look for specific styles related to the branding
    const styles = document.querySelectorAll('style');
    styles.forEach(style => {
      if (style.textContent && style.textContent.includes('lovable')) {
        style.textContent = style.textContent.replace(/\.lovable[^{]*\{[^}]*\}/g, '');
      }
    });
    
    // Remove any element that contains the text "Edit with lovable"
    document.querySelectorAll('*').forEach(el => {
      if (el.textContent && el.textContent.includes('Edit with') && el.textContent.includes('lovable')) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    });
  };

  // Run immediately
  removeTag();
  
  // Also run after the page is fully loaded
  window.addEventListener('load', removeTag);
  
  // And run after any dynamic content might be added
  setTimeout(removeTag, 1000);
  setTimeout(removeTag, 2000);
  setTimeout(removeTag, 3000);
  setTimeout(removeTag, 5000);
  
  // Create a mutation observer to watch for the tag being added dynamically
  const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length > 0) {
        shouldCheck = true;
      }
    });
    
    if (shouldCheck) {
      removeTag();
    }
  });
  
  // Start observing the document body for changes
  observer.observe(document.body, { 
    childList: true, 
    subtree: true 
  });
}

