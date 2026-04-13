import { Queue } from "bullmq"


const myAnalyticsQueue = new Queue("Analytics-Queue", {
    connection: {
        host: "localhost",
        port: 6379,
    },
})

const addJobs = async () => {

    const job1 = await myAnalyticsQueue.add("add analytics", {
        short_url: "https://trimly/wcrasmlkd",
        long_url: "https://github.com/mustafa-sayyed/trimly",
        clicked_at: 1776098187735,
        user_agent: "Chrome",
        ip: "106.216.252.207"
    })
    console.log(`Job Added: ${job1.id}, ${job1.name}`);


    const job2 = await myAnalyticsQueue.add("add analytics", {
        short_url: "https://trimly/abc123def",
        long_url: "https://example.com/page",
        clicked_at: 1776098188000,
        user_agent: "Firefox",
        ip: "192.168.1.1"
    })
    console.log(`Job Added: ${job2.id}, ${job2.name}`);

    const job3 = await myAnalyticsQueue.add("add analytics", {
        short_url: "https://trimly/xyz789uvw",
        long_url: "https://nodejs.org/docs",
        clicked_at: 1776098189000,
        user_agent: "Safari",
        ip: "10.0.0.5"
    })
    console.log(`Job Added: ${job3.id}, ${job3.name}`);

}

addJobs();