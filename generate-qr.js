const QRCode = require('qrcode');

const url = 'https://www.smart-growth.co.in/'; // your live website link

QRCode.toFile(
    './public/website-qr.png',
    url,
    {
        width: 400,
        margin: 2
    },
    function (err) {
        if (err) throw err;
        console.log('QR Code generated!');
    }
);