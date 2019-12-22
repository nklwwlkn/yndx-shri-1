document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", event => {
    if (event.target.closest(".history__transaction")) {
      /* .history__transaction_brand_blue .history__hide */
      const currentHistoryTransaction = event.target.closest(
        ".history__transaction"
      ).classList[1];

      const currentHistoryHide = `${currentHistoryTransaction} .history__hide`;

      if (
        document.querySelector(
          `.${event.target.closest(".history__transaction").classList[1]}`
        ).style.height !== "auto"
      ) {
        document.querySelector(
          `.${event.target.closest(".history__transaction").classList[1]}`
        ).style.height = "auto";

        document.querySelector(
          `.${currentHistoryTransaction} .history__hide`
        ).style.display = "block";
      } else {
        document.querySelector(
          `.${event.target.closest(".history__transaction").classList[1]}`
        ).style.height = "9.85rem";

        document.querySelector(
          `.${currentHistoryTransaction} .history__hide`
        ).style.display = "none";
      }
    }
  });
});
