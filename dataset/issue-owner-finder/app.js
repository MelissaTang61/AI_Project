const assignments = [
  { id: 1, customer: "日月光半導體製造股份有限公司中壢分公司-招募", products: ["WEB"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "林家慧", frontendBackup: "" },
  { id: 2, customer: "日月光半導體製造股份有限公司中壢分公司-Azure", products: ["其他"], sa: "吳和軒", saBackup: "蕭維德", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 3, customer: "日月光半導體製造股份有限公司中壢分公司-績效", products: ["WEB"], sa: "黃振展", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "李沛璇", frontendBackup: "" },
  { id: 4, customer: "日月光半導體製造股份有限公司中壢分公司-自動工程(承攬商+booking)", products: ["WEB"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "方琦", frontendBackup: "" },
  { id: 5, customer: "日月光半導體製造股份有限公司中壢分公司-福利平台", products: ["WEB"], sa: "蕭維德", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "林家慧", frontendBackup: "" },
  { id: 6, customer: "中華海洋生技股份有限公司", products: ["UOF", "WEB"], sa: "李哲瑋", saBackup: "", backend: "郭旻諺", backendBackup: "", frontend: "李沛璇", frontendBackup: "" },
  { id: 7, customer: "法商法國巴黎人壽保險股份有限公司台灣分公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 8, customer: "優達科技股份有限公司", products: ["UOF", "WEB"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 9, customer: "瑞儀光電股份有限公司", products: ["UOF", "WEB"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 10, customer: "美食家食材通路股份有限公司-訂貨通", products: ["WEB", "APP"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "林家慧", frontendBackup: "" },
  { id: 11, customer: "美食家食材通路股份有限公司-司機里程", products: ["UOF", "WEB"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 12, customer: "美食家食材通路股份有限公司-others", products: ["UOF"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 13, customer: "亞弘電科技股份有限公司", products: ["UOF", "WEB"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 14, customer: "(儲值客戶/無MA) 統一精工股份有限公司-黃貴圓", products: ["UOF"], sa: "張楷正", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 15, customer: "統一精工股份有限公司-Mandy", products: ["WEB"], sa: "蘇傑璋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 16, customer: "鼎鼎企業管理顧問股份有限公司-DISC", products: ["WEB"], sa: "黃振展", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "李沛璇", frontendBackup: "" },
  { id: 17, customer: "鼎鼎企業管理顧問股份有限公司-人才庫", products: ["WEB"], sa: "黃振展", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 18, customer: "台灣苯乙烯工業股份有限公司-形象網站", products: ["WEB"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 19, customer: "台灣苯乙烯工業股份有限公司-差勤表單", products: ["UOF"], sa: "李哲瑋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 20, customer: "光洋應用材料科技(股)公司", products: ["UOF", "WEB"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 21, customer: "合作金庫人壽保險股份有限公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 22, customer: "台灣麒麟啤酒股份有限公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 23, customer: "統一企業股份有限公司", products: ["UOF"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 24, customer: "香港商標準國際汽車", products: ["UOF", "WEB"], sa: "張楷正", saBackup: "", backend: "陳韶廷", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 26, customer: "台灣檢驗科技股份有限公司", products: ["UOF", "WEB"], sa: "蕭維德", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 27, customer: "台灣卜蜂企業股份有限公司", products: ["UOF"], sa: "蕭維德", saBackup: "", backend: "王政威", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 28, customer: "富成金屬科技股份有限公司", products: ["UOF"], sa: "蕭維德", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 29, customer: "藥華醫藥股份有限公司", products: ["UOF", "WEB"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 30, customer: "台灣三帆製藥科技股份有限公司", products: ["UOF", "WEB"], sa: "張楷正", saBackup: "", backend: "王政威", backendBackup: "", frontend: "李沛璇", frontendBackup: "" },
  { id: 31, customer: "公勝保險經紀人股份有限公司", products: ["UOF"], sa: "蕭維德", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 32, customer: "安橋公寓大廈管理維護股份有限公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 33, customer: "立法院", products: ["UOF"], sa: "蕭維德", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 34, customer: "金隆紙器股份有限公司", products: ["WEB"], sa: "黃振展", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 35, customer: "將來商業銀行股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 36, customer: "凱恩斯國際岩燒餐廳有限公司", products: ["WEB", "APP"], sa: "黃振展", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 37, customer: "惠隆資訊股份有限公司", products: ["WEB"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 38, customer: "財團法人中華民國兒童福利聯盟文教基金會", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 39, customer: "淮南寰宇股份有限公司", products: ["UOF"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 40, customer: "台灣鐵三角股份有限公司", products: ["UOF"], sa: "蕭維德", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 41, customer: "環隆科技股份有限公司", products: ["WEB"], sa: "林有勤", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 42, customer: "全球人壽顧問股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 43, customer: "鋼堡科技股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 44, customer: "啟坤科技股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 45, customer: "南寶樹脂化學工廠股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 46, customer: "麗光科技股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "郭旻諺", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 47, customer: "法商法國巴黎產物保險股份有限公司台灣分公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "蘇傑璋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 48, customer: "遠東百貨股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 49, customer: "岱稜科技股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 50, customer: "西門子歌美颯離岸風力再生能源股份有限公司", products: ["其他"], sa: "吳和軒", saBackup: "蕭維德", backend: "吳和軒", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 51, customer: "光洲建設股份有限公司", products: ["UOF"], sa: "吳和軒", saBackup: "蕭維德", backend: "吳和軒", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 52, customer: "誠泰工業科技股份有限公司", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 53, customer: "台灣瑞環股份有限公司", products: ["WEB"], sa: "林有勤", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 54, customer: "網際威信股份有限公司", products: ["WEB"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 55, customer: "台灣半導體股份有限公司", products: ["UOF"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 56, customer: "台灣半導體股份有限公司", products: ["WEB"], sa: "黃振展", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 57, customer: "朋昇數位科技股份有限公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "蘇傑璋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 58, customer: "馬來西亞商金務大工程股份有限公司", products: ["APP"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 59, customer: "英屬開曼群島商九一應用軟體股份有限公司台灣分公司", products: ["WEB"], sa: "李哲瑋", saBackup: "", backend: "李哲瑋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 60, customer: "輔仁大學附設醫院", products: ["UOF"], sa: "李哲瑋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 61, customer: "臺灣飛機維修股份有限公司", products: ["UOF"], sa: "黃振展", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 62, customer: "誠硯食品有限公司", products: ["其他"], sa: "吳和軒", saBackup: "蕭維德", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 63, customer: "永湖複合材料股份有限公司", products: ["其他"], sa: "李哲瑋", saBackup: "", backend: "", backendBackup: "", frontend: "李沛璇", frontendBackup: "" },
  { id: 64, customer: "州巧科技股份有限公司", products: ["WEB"], sa: "蘇傑璋", saBackup: "", backend: "李翊華、郭旻諺", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 65, customer: "遠雄巨蛋事業股份有限公司(信宇)", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 66, customer: "晟庭設計工程有限公司", products: ["WEB"], sa: "林有勤", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 67, customer: "郭綜合醫院", products: ["UOF"], sa: "張楷正", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 68, customer: "(儲值客戶/無MA) 德揚", products: ["UOF", "WEB"], sa: "蘇傑璋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 69, customer: "(儲值客戶/無MA) 翔鑫堡", products: ["WEB"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 70, customer: "(儲值客戶/無MA) 薰衣草", products: ["UOF"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 71, customer: "(儲值客戶/無MA) 中鋼碳素", products: ["WEB"], sa: "黃振展", saBackup: "", backend: "黃振展", backendBackup: "", frontend: "李沛璇", frontendBackup: "" },
  { id: 72, customer: "(儲值客戶/無MA) 中鋼碳素", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 73, customer: "(儲值客戶/無MA) 成功大學", products: ["WEB"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 74, customer: "(儲值客戶/無MA) 椿樺", products: ["WEB"], sa: "蘇傑璋", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 75, customer: "(儲值客戶/無MA) 雁博", products: ["UOF"], sa: "唐瑜", saBackup: "", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 76, customer: "(儲值客戶/無MA) 衛普", products: ["UOF"], sa: "張楷正", saBackup: "", backend: "張楷正", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 77, customer: "UOF2.0 與 104HRMax亞家整合包", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "蘇傑璋", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 78, customer: "UOFX 與 104亞家整合包", products: ["UOF"], sa: "李哲瑋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 79, customer: "佳毅聯科技股份有限公司", products: [], sa: "蕭維德", saBackup: "", backend: "", backendBackup: "", frontend: "林有勤", frontendBackup: "" },
  { id: 80, customer: "華城電機-差勤表單", products: ["UOF"], sa: "張楷正", saBackup: "蕭維德", backend: "", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 81, customer: "華城電機-文管", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 82, customer: "瑞銘世義貿易股份有限公司", products: ["UOF"], sa: "蘇傑璋", saBackup: "", backend: "王政威", backendBackup: "", frontend: "", frontendBackup: "" },
  { id: 83, customer: "南緯實業股份有限公司", products: ["UOF"], sa: "張楷正", saBackup: "", backend: "李翊華", backendBackup: "", frontend: "", frontendBackup: "" },
];

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#customer-search");
const clearButton = document.querySelector("#clear-button");
const results = document.querySelector("#results");
const resultSummary = document.querySelector("#result-summary");
const recordCount = document.querySelector("#record-count");

recordCount.textContent = assignments.length;

const normalize = (value) =>
  value
    .toLocaleLowerCase("zh-Hant")
    .normalize("NFKC")
    .replace(/[\s()（）\[\]【】/／\\._·,，、+＋-]/g, "");

const escapeHtml = (value) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;",
  })[character]);

const highlight = (text, query) => {
  const safeText = escapeHtml(text);
  const index = text.toLocaleLowerCase("zh-Hant").indexOf(query.toLocaleLowerCase("zh-Hant"));
  if (index < 0 || !query) return safeText;
  const before = escapeHtml(text.slice(0, index));
  const match = escapeHtml(text.slice(index, index + query.length));
  const after = escapeHtml(text.slice(index + query.length));
  return `${before}<mark>${match}</mark>${after}`;
};

const personName = (name) => name || "未指定";
const initial = (name) => (name ? [...name][0] : "—");

const backupText = (name) => name ? `<small>代理：${escapeHtml(name)}</small>` : "";

const renderCard = (item, query, index) => {
  const productTags = item.products.length
    ? item.products.map((product) => `<span class="product-tag">${escapeHtml(product)}</span>`).join("")
    : '<span class="product-tag">未註明類型</span>';

  const backendClass = item.backend ? "" : "unassigned";
  const frontendClass = item.frontend ? "" : "unassigned";

  return `
    <article class="result-card" style="animation-delay: ${Math.min(index * 35, 210)}ms">
      <div class="customer-block">
        <span class="card-index">NO. ${String(item.id).padStart(2, "0")}</span>
        <h3>${highlight(item.customer, query)}</h3>
        <div class="product-tags">${productTags}</div>
      </div>
      <div class="owner-column">
        <span class="owner-label">SA · 對外窗口</span>
        <div class="person">
          <span class="person-avatar">${initial(item.sa)}</span>
          <div>
            <strong>${escapeHtml(personName(item.sa))}</strong>
            ${backupText(item.saBackup)}
          </div>
        </div>
      </div>
      <div class="owner-column">
        <span class="owner-label">PG · 開發負責人</span>
        <div class="pg-grid">
          <div class="pg-box">
            <span>後端</span>
            <strong class="${backendClass}">${escapeHtml(personName(item.backend))}</strong>
            ${backupText(item.backendBackup)}
          </div>
          <div class="pg-box">
            <span>前端</span>
            <strong class="${frontendClass}">${escapeHtml(personName(item.frontend))}</strong>
            ${backupText(item.frontendBackup)}
          </div>
        </div>
      </div>
    </article>
  `;
};

const renderEmpty = (query) => {
  results.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon" aria-hidden="true"><span></span><span></span><span></span></div>
      <h3>${query ? "找不到符合的客戶" : "準備好開始查詢"}</h3>
      <p>${query ? `沒有找到「${escapeHtml(query)}」，請嘗試縮短關鍵字或換一個名稱。` : "輸入至少一個關鍵字，我們會列出所有符合的議題分工。"}</p>
    </div>
  `;
};

const runSearch = (rawQuery) => {
  const query = rawQuery.trim();
  clearButton.classList.toggle("visible", Boolean(query));

  if (!query) {
    resultSummary.textContent = "輸入關鍵字開始查詢";
    renderEmpty("");
    return;
  }

  const normalizedQuery = normalize(query);
  const matches = assignments
    .filter((item) => normalize(item.customer).includes(normalizedQuery))
    .sort((a, b) => {
      const aName = normalize(a.customer);
      const bName = normalize(b.customer);
      const aScore = aName === normalizedQuery ? 0 : aName.startsWith(normalizedQuery) ? 1 : 2;
      const bScore = bName === normalizedQuery ? 0 : bName.startsWith(normalizedQuery) ? 1 : 2;
      return aScore - bScore || a.id - b.id;
    });

  resultSummary.textContent = `找到 ${matches.length} 筆符合「${query}」的結果`;
  if (!matches.length) {
    renderEmpty(query);
    return;
  }

  results.innerHTML = matches.map((item, index) => renderCard(item, query, index)).join("");
  document.querySelector("#results-title").scrollIntoView({ behavior: "smooth", block: "start" });
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(searchInput.value);
});

searchInput.addEventListener("input", () => {
  clearButton.classList.toggle("visible", Boolean(searchInput.value));
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  runSearch("");
  searchInput.focus();
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    runSearch(button.dataset.query);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && searchInput.value) {
    searchInput.value = "";
    runSearch("");
  }
});
