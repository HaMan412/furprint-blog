export function initLightbox() {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-image");

  if (!lightbox || !lightboxImg) return;

  // 获取所有需要点击放大的图片
  const images = document.querySelectorAll(
    ".prose img, .gallery-image, #content img:not(.no-zoom)",
  );

  images.forEach((img) => {
    // 强制设置鼠标样式
    (img as HTMLElement).style.cursor = "zoom-in";

    img.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const target = e.target as HTMLImageElement;
      const lightboxImgElement = lightboxImg as HTMLImageElement;

      // 设置灯箱图片源
      lightboxImgElement.src = target.src;
      lightboxImgElement.alt = target.alt || "";

      // 显示灯箱
      lightbox.classList.remove("hidden");
      // 使用 RAF 确保 transition 生效
      requestAnimationFrame(() => {
        lightbox.classList.remove("opacity-0");
        lightboxImgElement.classList.remove("scale-95");
        lightboxImgElement.classList.add("scale-100");
      });

      // 禁止背景滚动
      document.body.style.overflow = "hidden";
    });
  });

  // 关闭灯箱的方法
  const closeLightbox = () => {
    const lightboxImgElement = lightboxImg as HTMLImageElement;
    lightbox.classList.add("opacity-0");
    lightboxImgElement.classList.remove("scale-100");
    lightboxImgElement.classList.add("scale-95");

    // 等待动画结束后隐藏
    setTimeout(() => {
      lightbox.classList.add("hidden");
      lightboxImgElement.src = ""; // 清空图片源
      document.body.style.overflow = "";
    }, 300);
  };

  // 点击灯箱背景或图片关闭
  lightbox.addEventListener("click", closeLightbox);

  // ESC 键关闭
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.classList.contains("hidden")) {
      closeLightbox();
    }
  });
}
