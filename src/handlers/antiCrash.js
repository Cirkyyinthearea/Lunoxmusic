module.exports = async () => {
    process.on("unhandledRejection", async (reason, promise) => {
        console.error("[AntiCrash] | [UnhandledRejection_Logs] | [start] : ===============");
        console.error("Unhandled Rejection at:", promise, "reason:", reason);
        console.error("[AntiCrash] | [UnhandledRejection_Logs] | [end] : ===============");
    });

    process.on("uncaughtException", async (err, origin) => {
        console.error("[AntiCrash] | [UncaughtException_Logs] | [Start] : ===============");
        console.error(`Uncaught exception: ${err}\n` + `Exception origin: ${origin}`);
        console.error("[AntiCrash] | [UncaughtException_Logs] | [End] : ===============");
    });

    process.on("uncaughtExceptionMonitor", async (err, origin) => {
        console.error("[AntiCrash] | [UncaughtExceptionMonitor_Logs] | [Start] : ===============");
        console.error(`Uncaught exception monitor: ${err}\n` + `Exception origin: ${origin}`);
        console.error("[AntiCrash] | [UncaughtExceptionMonitor_Logs] | [End] : ===============");
    });

    console.log("[INFO] Anticrash events loaded");
};

/**
 * Project: Lunox
 * Author: adh319
 * Company: EnourDev
 * This code is the property of EnourDev and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/xhTVzbS5NU
 */