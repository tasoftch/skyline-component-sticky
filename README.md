# Skyline Component Sticky

The Sticky Component of Skyline ships with css and javascript addons to fix elements on top or bottom of a page.

## Install
````bin
$ composer require skyline/component-sticky
````
and require it in your templates using the ````@require Sticky```` annotation tag.  
After that, there are 3 css classes available:
- ```sticky-fixed```  
    Fixes an element at top of the page.

- ```sticky-bottom```  
    Fixes an element at bottom of the page.

- ```sticky-flexible```  
    A flexible content that should be extended until bottom element.
    
Additional an element with the class ```sticky-fixed``` is allowed to specify animation attributes:

- ```data-role="hold-top"```  
    Observes the window for scroll events. If the window passes a scroll position, the given css class is added, or removed otherwise.
    
- ```data-offset```  
    If the scroll position of the window reaches the top edge plus offset of the element, the class is added.

- ```data-toggle-class```  
    The css class name to add or remove.