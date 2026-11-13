const Proxy = require("coin-hive-stratum");

const PORT = process.env.PORT || 8892;

const proxy = new Proxy({
  host: "gulf.moneroocean.stream",
  port: 10128,
});

proxy.listen(PORT, () => {
  console.log("Proxy شغال على البورت: " + PORT);
});

proxy.on("open", (data) => {
  console.log("[اتصال جديد] جهاز اتصل بالـ proxy:", data.id);
});
proxy.on("authed", (data) => {
  console.log("[تم القبول] الـ pool قبل الجهاز وبدأ يبعتله شغل تعدين:", data.id);
});
proxy.on("close", (data) => {
  console.log("[انقطع الاتصال] جهاز خرج:", data.id);
});
proxy.on("error", (data) => {
  console.log("[خطأ]", data);
});
