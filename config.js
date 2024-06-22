const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129538838";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0LFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NixcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoZUZYWWptc2hIZThIVVpqcmovMVZ5YlJ3VkVCS1QrcVF6TDJFYTFEWGhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjk1Mzg4MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJEQTc4NTlFNUUwQUU1OEIzRkE1NkYzQzE1MkJCQTJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTA3MjEyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnTE85ZVNKcFFxNmxaNmVoOXZjWW9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIzNDFjNjliLTg1MGQtNGM1ZC04MWMzLTVlY2MzZGJkYmM2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICA3MyxcbiAgICAgIDE4MyxcbiAgICAgIDEzMSxcbiAgICAgIDE5NixcbiAgICAgIDk1LFxuICAgICAgMTQ2LFxuICAgICAgMjExLFxuICAgICAgMTczLFxuICAgICAgODQsXG4gICAgICAxNixcbiAgICAgIDI0NCxcbiAgICAgIDEwOSxcbiAgICAgIDY1LFxuICAgICAgNjEsXG4gICAgICA5OSxcbiAgICAgIDI1NSxcbiAgICAgIDEzMixcbiAgICAgIDIxNyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjAyLFxuICAgICAgMTc5LFxuICAgICAgMjQ4LFxuICAgICAgMjMwLFxuICAgICAgMTgwLFxuICAgICAgMTg1LFxuICAgICAgMTM1LFxuICAgICAgODYsXG4gICAgICAyNDYsXG4gICAgICA2MSxcbiAgICAgIDgwLFxuICAgICAgMjMxLFxuICAgICAgMTE1LFxuICAgICAgNzgsXG4gICAgICAxMTgsXG4gICAgICAyMTUsXG4gICAgICA5MSxcbiAgICAgIDgwLFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpTUFhFTk1XXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI5NTM4ODM4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MzU5MDEyOTQ3MTYzMzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xleTlRTVE3K3Jic3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFVwSWFQWmswT3QvVzRUa3J0WlZYdkhyUURxalllMm1kUmptblZ5YkNXZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3OEQwVzg2SmUvblJ1bTlGZEV2T3Q2cDhiUVBPdnZmQm14UUI5MVBUNXpXTG51b0ZtM1ZEbVNITDBuNWRHejZEKzI1MkhaamdUR0ZHdHlId0ZEU0pBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPUno1WHVQUUhqWVQwTWl1dDBrMXBsSTBVQy9QcEZaSWIxQUVTWkdTcWNkc0pwdWgxdGNTNmttUUdOQXJMdWkwZzVNcWdXV29UTFhVZ0JKNlA2WTRCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI5NTM4ODM4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTA3MjExNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
