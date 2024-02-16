const { REST, Routes, SlashCommandBuilder } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const register = new SlashCommandBuilder()
  .setName("register")
  .setDescription("สมัครรหัส carxstreet (เงิน 1T , ทอง 1T , เวลตัน)")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("nickname")
      .setDescription("nickname for carxstreet account")
      .setRequired(true)
  );

const registerMap = new SlashCommandBuilder()
  .setName("registermap")
  .setDescription("สมัครรหัส carxstreet (เงิน 1T , ทอง 1T , เวลตัน, ปลดแมพ)")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("nickname")
      .setDescription("nickname for carxstreet account")
      .setRequired(true)
  );

const pump = new SlashCommandBuilder()
  .setName("pump")
  .setDescription("ปั้มเงิน 1T , ทอง 1T , เวลตัน เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const r35 = new SlashCommandBuilder()
  .setName("nisanr35")
  .setDescription("เพิ่มรถนิสสัน R35 เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const r32 = new SlashCommandBuilder()
  .setName("nisanr32")
  .setDescription("เพิ่มรถนิสสัน r32 เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const nissan180sx = new SlashCommandBuilder()
  .setName("nissan180sx")
  .setDescription("เพิ่มรถนิสสัน nissan180sx เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const rx7 = new SlashCommandBuilder()
  .setName("rx7")
  .setDescription("เพิ่มรถนิสสัน rx7 เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const mitsubishievo9 = new SlashCommandBuilder()
  .setName("mitsubishievo9")
  .setDescription("เพิ่มรถนิสสัน mitsubishievo9 เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const toyotasupra = new SlashCommandBuilder()
  .setName("toyotasupra")
  .setDescription("เพิ่มรถ Toyota Supra เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const toyotasupraEngineR35 = new SlashCommandBuilder()
  .setName("nisanr35engine")
  .setDescription("เพิ่มรถนิสสัน R35 เข้ารหัสที่มีอยู่แล้ว และเปลี่ยนเครื่องยนต์เป็น 2JZ-GTE")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const ferrarif40 = new SlashCommandBuilder()
  .setName("ferrarif40")
  .setDescription("เพิ่มรถ Ferrari F40 เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const lambo = new SlashCommandBuilder()
  .setName("lambo")
  .setDescription("เพิ่มรถแลมโบ เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );
const lambodiablo = new SlashCommandBuilder()
  .setName("lambodiablo")
  .setDescription("เพิ่มรถแลมโบ เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const rename = new SlashCommandBuilder()
  .setName("rename")
  .setDescription("เปลี่ยนชื่อ")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option.setName("nickname").setDescription("new nickname").setRequired(true)
  );

const nitro = new SlashCommandBuilder()
  .setName("nitro")
  .setDescription("ปั้มไนตรัส 1,000,000 เข้ารถทุกคันที่มี")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const map = new SlashCommandBuilder()
  .setName("map")
  .setDescription("ปลดแมพ")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const volvo = new SlashCommandBuilder()
  .setName("volvo")
  .setDescription("เพิ่มรถตู้ volvo เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const van = new SlashCommandBuilder()
  .setName("van")
  .setDescription("เพิ่มรถตู้ van เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const bmw = new SlashCommandBuilder()
  .setName("bmw")
  .setDescription("เพิ่มรถ bmw เข้ารหัสที่มีอยู่แล้ว")
  .addStringOption((option) =>
    option
      .setName("email")
      .setDescription("email for carxstreet account")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("password for carxstreet account")
      .setRequired(true)
  );

const commands = [register, pump, lambo, r35, r32, mitsubishievo9, nissan180sx, rx7, lambodiablo, toyotasupraEngineR35, toyotasupra, ferrarif40, rename, nitro, map, registerMap, volvo, van, bmw];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationCommands(process.env.ClientId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
