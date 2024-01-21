import {
  globalShortcut,
  nativeWindow,
  object,
  platform,
  screen,
} from "@todesktop/client-core";

const windows = {
  command: "XEVrd9yvoaSgNhFr6GqYX",
};

async function main() {
  // Menu items
  await object.on("open-x", () => {
    platform.os.openURL("https://x.com/middayai");
  });

  await object.on("open-discord", () => {
    platform.os.openURL("https://discord.gg/ZmqcvWKH");
  });

  await object.on("open-github", () => {
    platform.os.openURL("https://github.com/midday-ai/midday");
  });

  // Command menu
  await object.on("open-command-menu", async () => {
    const winRef = await object.retrieve({ id: windows.command });
    await nativeWindow.show({ ref: winRef });
  });

  globalShortcut.register("Escape", async () => {
    const winRef = await object.retrieve({ id: windows.command });

    if (await nativeWindow.isVisible({ ref: winRef })) {
      await nativeWindow.hide({ ref: winRef });
    }
  });
}

main();
