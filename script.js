$(document).ready(function () {
    // Function to generate QR code
    function generateQRCode(content) {
        // Generate the link to generate the QR Code with the given content
        let qrCodeURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + encodeURIComponent(content) + '&chs=160x160&chld=L|0';
        // Set the source of the image to display the QR code
        $('.qr-code').attr('src', qrCodeURL);
        // Show the QR code with a fade-in effect
        $('.qr-code').css('opacity', '1');
    }

    // Generate QR code on button click
    $('#generate-btn').click(function () {
        // Get the content entered by the user
        let content = $('#content').val().trim();
        if (content !== '') {
            // Generate QR code for the entered content
            generateQRCode(content);
        } else {
            alert('Please enter a URL or message.');
        }
    });

    // Generate default QR code on page load
    generateQRCode('Hello World');
});
