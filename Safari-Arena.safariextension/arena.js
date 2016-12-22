// Once we get a message from the global html page
// open the bookmarklet JS

// The parent frame is the top-level frame, not an iframe.
// All non-iframe code goes before the closing brace.
if (window.top === window) {
  
  // Register for messages from the global
  safari.self.addEventListener("message", function (msgEvent) {
    const messageName = msgEvent.name;

    if (messageName === "bookmarklet") {
      const scr = document.createElement('script')
      scr.setAttribute('type', 'text/javascript')
      scr.setAttribute('charset', 'UTF-8')
      scr.setAttribute('src', 'https://marklet.are.na/loader.js')
      document.documentElement.appendChild(scr)
    }
  }, false);
}
