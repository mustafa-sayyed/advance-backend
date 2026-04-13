import { Worker } from "bullmq";

const analyticsWorker = new Worker("Analytics-Queue", async (job) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Job Processed: ${job.id}, added Analytics for: ${job.data.short_url}, ${job.data.long_url}`);
            resolve("Done");
        }, 2000);
    });
}, {
    connection: {
        host: "localhost",
        port: 6379
    }
})


analyticsWorker.on("progress", (job, progress) => {
    console.log(`Job: ${job.id} is ${progress}`);
})

analyticsWorker.on("completed", async (job, res, prev) => {
    console.log(`Job: ${job.id} is ${await job.getState()}, Previous state was ${prev}`);
}) 