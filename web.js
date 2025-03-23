document.getElementById('copy-btn').addEventListener('click', function() {
    var codeText = document.querySelector('#code-layer code').innerText;
    navigator.clipboard.writeText(codeText).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy code: ' + err);
    });
});

window.addEventListener('scroll', function() {
    var codeLayer = document.getElementById('code-layer');
    var rect = codeLayer.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        codeLayer.classList.add('visible');
    }

    var imageSection = document.getElementById('image-section');
    var imageRect = imageSection.getBoundingClientRect();
    if (imageRect.top < window.innerHeight) {
        imageSection.classList.add('visible');
    }

    var featuresSection = document.getElementById('features-section');
    var featuresRect = featuresSection.getBoundingClientRect();
    if (featuresRect.top < window.innerHeight) {
        featuresSection.classList.add('visible');
    }
});
