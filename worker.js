export default {
  async fetch(request, env) {
    return new Response("پنل ویتوری فعال شد ✅", {
      headers: { "content-type": "text/plain" },
    });
  },
};
