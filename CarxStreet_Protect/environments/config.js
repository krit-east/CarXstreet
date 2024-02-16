const { ActivityType } = require('discord.js')
module.exports = {
    bot: {
        // ส่วนของ bot (สามารถแก้ไขได้)
        token: 'Token bot', // โทเคนบอท (Token bot)
        status: {
            text: 'เปิดใช้งานอยู่', // ข้อความสถานะบอท
            type: ActivityType.PLAYING, // ประเภทของสถานะบอท
            status: 'idle' // สถานะบอท (online, idle, dnd, invisible)
        },
        roles: ["1050885832850022483", "1173791018039123968"], // (ID roles) ยืนยันตัวตน
        guild: "1050884970022965298", // (ID server) ไอดีเซิฟเวอร์
        channelLog: "1170813483588276277", // (ID channel) ไอดีห้อง สำหรับส่งข้อความ log
        channelLogProtect: "1173649727867330570", // (ID channel) ไอดีห้อง สำหรับส่งข้อความ log ของระบบป้องกันการแบน
    },
    main: {
        embed: {
            // ส่วนของ embed (สามารถแก้ไขได้)
            author: '', // ชื่อ embed ( ไม่ใส่ก็ได้ )
            icon: '', // รูปภาพ embed ( ไม่ใส่ก็ได้ )
            url: '', // ลิงค์ embed ( ไม่ใส่ก็ได้ )
            title: 'เมนูx', // ชื่อเมนู 
            description: 'กรุณาเลือกเมนูที่ต้องการ', // คำอธิบายเมนู
            color: 'Blue', // สีของ embed
            image: 'https://cdn.discordapp.com/attachments/1124401426513272842/1168641106364334211/330901501_5934253953289132_2009142086505393728_n.png?ex=655280d8&is=65400bd8&hm=a228c4e1f32ed1128c06c062695ba675c5e3d4ae92728547bdba6b53965de245&', // รูปภาพ embed
            textfooter: 'xxxxx', // ข้อความล่างสุด
            iconfooter: 'https://discord.com/assets/5d6a5e9d7d77ac29116e.png', // รูปภาพล่างสุด
        },
        embedprotect: {
            author: '', // ชื่อ embed ( ไม่ใส่ก็ได้ )
            icon: '', // รูปภาพ embed ( ไม่ใส่ก็ได้ )
            url: '', // ลิงค์ embed ( ไม่ใส่ก็ได้ )
            title: 'ตั้งค่าระบบป้องกันการแบน', // ชื่อเมนู 
            description: 'กรุณากดปุ่มเพื่อเลือกระบบป้องกันการแบน', // คำอธิบายเมนู
            color: 'Blue', // สีของ embed
            image: 'https://cdn.discordapp.com/attachments/1124401426513272842/1168641106364334211/330901501_5934253953289132_2009142086505393728_n.png?ex=655280d8&is=65400bd8&hm=a228c4e1f32ed1128c06c062695ba675c5e3d4ae92728547bdba6b53965de245&', // รูปภาพ embed
            textfooter: 'xxxx', // ข้อความล่างสุด
            iconfooter: 'https://discord.com/assets/5d6a5e9d7d77ac29116e.png', // รูปภาพล่างสุด
        }
    },
    api: {
        ProfilesApi: "https://street-prod.carx-online.com/str/v1/client/profiles", // ลิงค์ api ของ Profiles
        LoginApi: "https://carx-id-prod.carx-online.com/api/auth/login", // ลิงค์ api ของ Login
        RegisterApi: "https://carx-id-prod.carx-online.com/api/auth/register", // ลิงค์ api ของ Register
    }
}