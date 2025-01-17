document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.figure img').forEach(function(img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create overlay
            var overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
            overlay.style.display = 'flex';
            overlay.style.alignItems = 'center';
            overlay.style.justifyContent = 'center';
            overlay.style.zIndex = '1000';
            
            // Create close button
            var closeButton = document.createElement('div');
            closeButton.innerHTML = '×';  // Using × symbol
            closeButton.style.position = 'absolute';
            closeButton.style.top = '20px';
            closeButton.style.right = '30px';
            closeButton.style.color = 'white';
            closeButton.style.fontSize = '40px';
            closeButton.style.cursor = 'pointer';
            closeButton.style.zIndex = '1001';
            closeButton.style.padding = '5px 15px';
            closeButton.style.borderRadius = '5px';
            
            // Add hover effect
            closeButton.addEventListener('mouseover', function() {
                closeButton.style.backgroundColor = 'rgba(255,255,255,0.1)';
            });
            closeButton.addEventListener('mouseout', function() {
                closeButton.style.backgroundColor = 'transparent';
            });
            
            // Create image element
            var popupImg = document.createElement('img');
            popupImg.src = img.src;
            popupImg.style.maxHeight = '90%';
            popupImg.style.maxWidth = '90%';
            popupImg.style.objectFit = 'contain';
            
            // Close on button click
            closeButton.addEventListener('click', function(e) {
                e.stopPropagation();  // Prevent event from bubbling to overlay
                document.body.removeChild(overlay);
            });
            
            // Close on overlay click
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // Prevent image click from closing overlay
            popupImg.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            overlay.appendChild(closeButton);
            overlay.appendChild(popupImg);
            document.body.appendChild(overlay);
        });
    });
});