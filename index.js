const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: '/data/data/com.termux/files/usr/bin/chromium-browser',
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu',
            '--disable-web-security',
            '--ignore-certificate-errors',
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        ]
    }
});

client.on('ready', () => {
    console.log('Bot is ready and online!');
});

client.on('message', async msg => {
    try {
        // نتأكد إن الرسالة موجودة وليست فارغة
        if (!msg.body) return;

        console.log('New message from: ' + msg.from + ' | Text: ' + msg.body);

        const text = msg.body.trim();

        // الرد على الكلمات المفتاحية المختلفة (عربي وإنجليزي)
        if (text.toLowerCase() === 'hi' || text === 'سلام عليكم' || text === 'السلام عليكم') {
            await client.sendMessage(msg.from, 'وعليكم السلام ورحمة الله وبركاته! أنا بوت إسلام الآلي 🤖');
            console.log('Reply sent successfully!');
        } 
        else if (text === 'ازيك' || text === 'إزيك') {
            await client.sendMessage(msg.from, 'الحمد لله كله تمام، أنا شغال زي الفل 😊');
            console.log('Reply sent successfully!');
        }
    } catch (error) {
        console.log('Error processing message:', error);
    }
});

client.initialize();

