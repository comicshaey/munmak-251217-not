// 탭 전환 처리
document.addEventListener("click", function (e) {
  const tabBtn = e.target.closest("[data-tab-target]");
  if (tabBtn) {
    const targetId = tabBtn.getAttribute("data-tab-target");
    const root = tabBtn.closest("[data-tabs-root]");
    if (!root) return;

    // 같은 묶음 안의 버튼/패널을 전부 정리
    const buttons = root.querySelectorAll("[data-tab-target]");
    const panels = root.querySelectorAll("[data-tab-panel]");

    buttons.forEach((btn) => btn.classList.remove("is-active"));
    panels.forEach((panel) => panel.classList.remove("is-active"));

    tabBtn.classList.add("is-active");
    const targetPanel = root.querySelector(
      `[data-tab-panel="${targetId}"]`
    );
    if (targetPanel) {
      targetPanel.classList.add("is-active");
    }
  }

  // FAQ 아코디언
  const faqBtn = e.target.closest("[data-faq-toggle]");
  if (faqBtn) {
    const item = faqBtn.closest(".faq-item");
    if (!item) return;

    // 하나만 열리게 하고 싶으면 아래 주석 해제
    // const list = item.parentElement;
    // list.querySelectorAll(".faq-item").forEach((el) => {
    //   if (el !== item) el.classList.remove("is-open");
    // });

    item.classList.toggle("is-open");
  }
});
