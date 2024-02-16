const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require("dotenv");

const { register } = require("./services/registerService");
const { pump, nitro } = require("./services/pumpService");
const { generateEmbed } = require("./services/embedService");
const { lambo, r35,lambodiablo,technoirff4,toyotasupra,r32x, van, volvo, bmw, mitsubishievo9, nissan180sx , rx7} = require("./services/addcarService");
const { toyotasupraEngineR35 } = require("./services/customService");
const { rename } = require("./services/renameService");
const { map } = require("./services/addmapService");

dotenv.config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  await interaction.deferReply({ ephemeral: true });
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "register") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await register(message, false);
        if (result) {
          embed = generateEmbed(
            "สมัครรหัสและปั้มของสำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "password", value: message[1].value },
              { name: "nickname", value: message[2].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "สมัครรหัสและปั้มของไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "password", value: message[1].value },
              { name: "nickname", value: message[2].value },
              { name: "เกิดข้อผิดพลาด", value: "ไม่ทราบ" },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("register error");
    }
  }
  if (interaction.commandName === "registermap") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await register(message, true);
        if (result) {
          embed = generateEmbed(
            "สมัครรหัสและปั้มของสำเร็จ (ปลดแมพ)!",
            [
              { name: "email", value: message[0].value },
              { name: "password", value: message[1].value },
              { name: "nickname", value: message[2].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "สมัครรหัสและปั้มของไม่สำเร็จ (ปลดแมพ)!",
            [
              { name: "email", value: message[0].value },
              { name: "password", value: message[1].value },
              { name: "nickname", value: message[2].value },
              { name: "เกิดข้อผิดพลาด", value: "ไม่ทราบ" },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("registerMap error", ex);
    }
  }
  if (interaction.commandName === "pump") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await pump(message);
        if (result) {
          embed = generateEmbed(
            "ปั้มเงิน ปั้มทอง ปั้มเวล สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "ปั้มเงิน ปั้มทอง ปั้มเวล ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "ปั้มเงิน ปั้มทอง ปั้มเวล ไม่สำเร็จ",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("pump error", ex);
    }
  }
  if (interaction.commandName === "map") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await map(message);
        if (result) {
          embed = generateEmbed(
            "ปลดแมพสำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "ปลดแมพไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "ปลดแมพ",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("map error", ex);
    }
  }
  if (interaction.commandName === "lambo") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await lambo(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่มแลมโบสำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่มแลมโบไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่มแลมโบไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("lambo error", ex);
    }
  }
  if (interaction.commandName === "nisanr32") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await r32x(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม r32 สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม r32 ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม r32 ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("r32 error", ex);
    }
  }
  if (interaction.commandName === "nissan180sx") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await nissan180sx(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม nissan180sx  สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม nissan180sx  ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม nissan180sx  ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("nissan180sx  error", ex);
    }
  }
  if (interaction.commandName === "rx7") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await rx7(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม rx7 สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม rx7 ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม rx7 ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("rx7 error", ex);
    }
  }
  if (interaction.commandName === "mitsubishievo9") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await mitsubishievo9(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม mitsubishievo9 สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม mitsubishievo9 ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม mitsubishievo9 ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("mitsubishievo9 error", ex);
    }
  }
  if (interaction.commandName === "lambodiablo") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await lambodiablo(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่มแลมโบสำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่มแลมโบไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่มแลมโบไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("lambodiablo error", ex);
    }
  }
  if (interaction.commandName === "ferrarif40") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await technoirff4(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม ferrarif40 สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม ferrarif40 ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม ferrarif40 ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("ferrarif40 error", ex);
    }
  }
  if (interaction.commandName === "van") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await van(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม van สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม van ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม van ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("van error", ex);
    }
  }
  
  if (interaction.commandName === "volvo") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await volvo(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม volvo สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม volvo ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม volvo ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("volvo error", ex);
    }
  }
 if (interaction.commandName === "bmw") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await bmw(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม bmw สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม bmw ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม bmw ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("bmw error", ex);
    }
  }
  if (interaction.commandName === "toyotasupra") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await toyotasupra(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม toyotasupra สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม toyotasupra ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม toyotasupra ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("toyotasupra error", ex);
    }
  }
  if (interaction.commandName === "nisanr35engine") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await toyotasupraEngineR35(message);
        if (result) {
          embed = generateEmbed(
            "ทำการแต่งเครื่องยนต์สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "ทำการแต่งเครื่องยนต์สำเร็จไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "ทำการแต่งเครื่องยนต์สำเร็จไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("custom engine error", ex);
    }
  }
  if (interaction.commandName === "nisanr35") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await r35(message);
        if (result) {
          embed = generateEmbed(
            "เพิ่ม nisanr35 สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เพิ่ม nisanr35 ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              {
                name: "เกิดข้อผิดพลาด",
                value: "เพิ่ม nisanr35 ไม่สำเร็จ!",
              },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("nisanr35 error", ex);
    }
  }

  if (interaction.commandName === "rename") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await rename(message);
        if (result) {
          embed = generateEmbed(
            "เปลี่ยนชื่อสำเร็จ",
            [
              { name: "email", value: message[0].value },
              { name: "password", value: message[1].value },
              { name: "nickname", value: message[2].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "เปลี่ยนชื่อไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "password", value: message[1].value },
              { name: "nickname", value: message[2].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("rename error", ex);
    }
  }
  if (interaction.commandName === "nitro") {
    try {
      if (!interaction.isChatInputCommand()) return;
      const hasRole = interaction.member.roles.cache.some(
        (r) => r.name === "Premium"
      );
      var embed = null;
      if (hasRole) {
        const message = interaction.options.data;
        const result = await nitro(message);
        if (result) {
          embed = generateEmbed(
            "ปั้มไนตรัส สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
            ],
            0x00ff00
          );
        } else {
          embed = generateEmbed(
            "ปั้มไนตรัส ไม่สำเร็จ!",
            [
              { name: "email", value: message[0].value },
              { name: "ผู้ใช้", value: "<@" + interaction.member + ">" },
              { name: "เกิดข้อผิดพลาด", value: "ปั้มไนตรัส ไม่สำเร็จ" },
            ],
            0xff0000
          );
        }
      } else {
        embed = generateEmbed(
          "คุณไม่มีสิทธิ์ใช้งาน กรุณาสั่งซื้อใหม่",
          [
            {
              name: "ผู้ใช้",
              value: "<@" + interaction.member + ">",
            },
          ],
          0xff0000
        );
      }
      await interaction.editReply({ embeds: [embed] });
      client.channels.cache
        .get(process.env.LogChannel)
        .send({ embeds: [embed] });
    } catch (ex) {
      console.log("nitro error", ex);
    }
  }
});

client.login(process.env.TOKEN);
