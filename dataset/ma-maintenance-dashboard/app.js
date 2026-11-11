const STORAGE_KEY = 'ma-flow-contracts-v1';

const seedContracts = [
  { id: 'ma-001', account: '示範客戶 A 公司', contract: '履歷填寫頁面維護 2027MA', amount: 18000, taxAmount: 18900, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '', quoteNo: '', status: 'pending_quote', dealType: '維護保固', note: '即將到期，請準備報價。', updatedAt: '2026-11-11' },
  { id: 'ma-002', account: '示範客戶 B 公司', contract: '多公司流程調整優化案', amount: 48000, taxAmount: 50400, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '', quoteNo: '', status: 'pending_quote', dealType: '專案', note: '需併入主案 MA 報價。', updatedAt: '2026-11-11' },
  { id: 'ma-003', account: '示範客戶 C 公司', contract: 'UOF 與 HRMax 整合維護 2027MA', amount: 120000, taxAmount: 126000, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '', quoteNo: '', status: 'pending_quote', dealType: '維護保固', note: '維護範圍待確認。', updatedAt: '2026-11-10' },
  { id: 'ma-004', account: '示範客戶 D 公司', contract: '客製功能維護 2027MA', amount: 68000, taxAmount: 71400, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '', quoteNo: '', status: 'pending_quote', dealType: '維護保固', note: '待確認專案時數。', updatedAt: '2026-11-09' },
  { id: 'ma-005', account: '示範客戶 E 公司', contract: '文件管理系統維護 2027MA', amount: 36000, taxAmount: 37800, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '', quoteNo: 'SF-DEMO-001', status: 'pending_signature', dealType: '維護保固', note: '報價已送出，等待客戶回簽。', updatedAt: '2026-11-08' },
  { id: 'ma-006', account: '示範客戶 F 公司', contract: '雲端空間租用與代管 2027MA', amount: 96000, taxAmount: 100800, startDate: '2027-01-01', endDate: '2027-12-31', lastInvoiceDate: '', quoteNo: 'SF-DEMO-002', status: 'pending_signature', dealType: '維護保固', note: '客戶內部簽核中。', updatedAt: '2026-11-07' },
  { id: 'ma-007', account: '示範客戶 G 公司', contract: '環境信任模組 2027MA', amount: 102000, taxAmount: 107100, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '', quoteNo: 'SF-DEMO-003', status: 'pending_signature', dealType: '維護保固', note: '預計月底前回簽。', updatedAt: '2026-11-05' },
  { id: 'ma-008', account: '示範客戶 H 公司', contract: '電子簽核系統 2027MA', amount: 32000, taxAmount: 33600, startDate: '2026-01-01', endDate: '2026-12-31', lastInvoiceDate: '2026-11-11', quoteNo: 'SF-DEMO-004', status: 'completed', dealType: '維護保固', note: '已完成回簽與開票。', updatedAt: '2026-11-11' },
  { id: 'ma-009', account: '示範客戶 I 公司', contract: '人資系統客製維護 2027MA', amount: 76000, taxAmount: 79800, startDate: '2026-02-01', endDate: '2027-01-31', lastInvoiceDate: '', quoteNo: 'SF-DEMO-005', status: 'completed', dealType: '維護保固', note: '已完成回簽。', updatedAt: '2026-10-28' },
  { id: 'ma-010', account: '示範客戶 J 公司', contract: '測驗平台維護 2027MA', amount: 55000, taxAmount: 57750, startDate: '2026-04-01', endDate: '2027-03-31', lastInvoiceDate: '', quoteNo: 'SF-DEMO-006', status: 'completed', dealType: '維護保固', note: '已完成。', updatedAt: '2026-10-20' },
  { id: 'ma-011', account: '示範客戶 K 公司', contract: '資料串接維護 2027MA', amount: 24000, taxAmount: 25200, startDate: '2026-11-01', endDate: '2027-10-31', lastInvoiceDate: '', quoteNo: '', status: 'tracking', dealType: '維護保固', note: '尚未進入報價時程。', updatedAt: '2026-10-18' },
  { id: 'ma-012', account: '示範客戶 L 公司', contract: '入口網站維護 2027MA', amount: 45000, taxAmount: 47250, startDate: '2026-08-01', endDate: '2027-07-31', lastInvoiceDate: '', quoteNo: '', status: 'tracking', dealType: '維護保固', note: '持續追蹤。', updatedAt: '2026-10-10' }
];

const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>',
  quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-4 2-4-2-3 2V5a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h5"/></svg>',
  signature: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m4 17 4-1 9-9-3-3-9 9-1 4Z"/><path d="m12 6 3 3M4 21h16"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="m13 7 4 4"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>'
};

const statusMeta = {
  pending_quote: { label: '待報價', className: 'pending-quote' },
  pending_signature: { label: '待回簽', className: 'pending-signature' },
  completed: { label: '已完成', className: 'completed' },
  tracking: { label: '持續追蹤', className: 'tracking' }
};

let contracts = loadContracts();
let activeView = 'overview';
let currentFilter = 'all';

function loadContracts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) && saved.length ? saved : structuredClone(seedContracts);
  } catch { return structuredClone(seedContracts); }
}

function saveContracts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contracts));
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function formatMoney(value) {
  return Number(value || 0).toLocaleString('zh-TW', { style: 'currency', currency: 'TWD', maximumFractionDigits: 0 });
}

function formatDate(value) {
  if (!value) return '—';
  const [year, month, day] = value.split('-');
  return `${year}/${Number(month)}/${Number(day)}`;
}

function statusPill(status) {
  const meta = statusMeta[status] || statusMeta.tracking;
  return `<span class="status-pill ${meta.className}">${meta.label}</span>`;
}

function init() {
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icons[el.dataset.icon] || ''; });
  document.getElementById('todayLabel').textContent = new Intl.DateTimeFormat('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()).replaceAll('/', '.');
  populateMonths();
  bindEvents();
  renderAll();
}

function bindEvents() {
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
  document.getElementById('viewAllBtn').addEventListener('click', () => { currentFilter = 'all'; document.getElementById('statusFilter').value = 'all'; switchView('contracts'); });
  document.querySelectorAll('[data-filter-jump]').forEach(card => {
    const jump = () => jumpToFilter(card.dataset.filterJump);
    card.addEventListener('click', jump);
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); jump(); } });
  });
  document.getElementById('addContractBtn').addEventListener('click', () => openDialog());
  document.getElementById('closeDialogBtn').addEventListener('click', closeDialog);
  document.getElementById('cancelDialogBtn').addEventListener('click', closeDialog);
  document.getElementById('contractForm').addEventListener('submit', saveForm);
  document.getElementById('searchInput').addEventListener('input', renderTable);
  document.getElementById('statusFilter').addEventListener('change', event => { currentFilter = event.target.value; renderTable(); updateListTitle(); });
  document.getElementById('monthFilter').addEventListener('change', renderTable);
  document.getElementById('exportBtn').addEventListener('click', exportCSV);
  document.getElementById('mobileMenu').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('open'));
  document.getElementById('contractDialog').addEventListener('click', event => { if (event.target === event.currentTarget) closeDialog(); });
}

function switchView(view) {
  activeView = view;
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.id === `${view}View`));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.view === view));
  document.getElementById('pageName').textContent = view === 'overview' ? '總覽概要' : '合約清單';
  document.querySelector('.sidebar').classList.remove('open');
  if (view === 'contracts') renderTable();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function jumpToFilter(filter) {
  currentFilter = filter;
  document.getElementById('statusFilter').value = filter;
  document.getElementById('searchInput').value = '';
  document.getElementById('monthFilter').value = 'all';
  updateListTitle();
  switchView('contracts');
}

function updateListTitle() {
  const meta = statusMeta[currentFilter];
  document.getElementById('contractListTitle').textContent = meta ? `${meta.label}明細` : '全部合約';
  document.getElementById('contractListSubtitle').textContent = currentFilter === 'pending_quote' ? '即將到期、尚未建立報價的合約。' : currentFilter === 'pending_signature' ? '報價已送出、等待客戶回簽的合約。' : '管理報價、回簽與維護期間。';
}

function renderAll() {
  renderMetrics();
  renderPriority();
  renderMonths();
  renderActivities();
  renderTable();
}

function renderMetrics() {
  const pendingQuote = contracts.filter(item => item.status === 'pending_quote').length;
  const quoteScope = contracts.filter(item => item.status !== 'tracking');
  const quoteDone = quoteScope.length - pendingQuote;
  const quotePct = quoteScope.length ? Math.round(quoteDone / quoteScope.length * 100) : 0;
  const pendingSign = contracts.filter(item => item.status === 'pending_signature').length;
  const signScope = contracts.filter(item => ['pending_signature', 'completed'].includes(item.status));
  const signDone = signScope.filter(item => item.status === 'completed').length;
  const signPct = signScope.length ? Math.round(signDone / signScope.length * 100) : 0;

  document.getElementById('pendingQuoteCount').textContent = pendingQuote;
  document.getElementById('quotePercent').textContent = `${quotePct}%`;
  document.getElementById('quoteRing').style.setProperty('--pct', quotePct);
  document.getElementById('quoteProgressText').textContent = `${quoteDone} / ${quoteScope.length}`;
  document.getElementById('quoteProgressBar').style.width = `${quotePct}%`;
  document.getElementById('pendingSignCount').textContent = pendingSign;
  document.getElementById('signPercent').textContent = `${signPct}%`;
  document.getElementById('signRing').style.setProperty('--pct', signPct);
  document.getElementById('signProgressText').textContent = `${signDone} / ${signScope.length}`;
  document.getElementById('signProgressBar').style.width = `${signPct}%`;
}

function renderPriority() {
  const items = contracts.filter(item => ['pending_quote', 'pending_signature'].includes(item.status)).sort((a, b) => a.endDate.localeCompare(b.endDate)).slice(0, 6);
  document.getElementById('priorityList').innerHTML = items.map(item => `
    <div class="priority-item">
      <div class="account-cell"><b>${escapeHTML(item.account)}</b><small>截止 ${formatDate(item.endDate)}</small></div>
      <div class="contract-cell ${item.status === 'pending_quote' ? 'urgent' : ''}"><b>${escapeHTML(item.contract)}</b><small>${escapeHTML(item.note || '尚無追蹤紀錄')}</small></div>
      <div class="amount-cell"><b>${formatMoney(item.taxAmount)}</b><small>含稅</small></div>
      ${statusPill(item.status)}
      <button class="row-action" data-edit-id="${item.id}" aria-label="編輯 ${escapeHTML(item.account)}">${icons.edit}</button>
    </div>`).join('');
  bindEditButtons(document.getElementById('priorityList'));
}

function renderMonths() {
  const monthCount = Array.from({ length: 12 }, (_, index) => contracts.filter(item => Number(item.endDate?.split('-')[1]) === index + 1).length);
  const max = Math.max(...monthCount, 1);
  document.getElementById('monthBars').innerHTML = monthCount.map((count, index) => `<div class="month-bar ${count === max ? 'hot' : ''}"><b>${count}</b><i style="height:${Math.max(4, count / max * 92)}px"></i><span>${index + 1}月</span></div>`).join('');
}

function renderActivities() {
  const items = [...contracts].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)).slice(0, 5);
  document.getElementById('activityList').innerHTML = items.map(item => `<div class="activity-item"><i></i><div><b>${escapeHTML(item.account)}</b><small>${statusMeta[item.status].label} · ${escapeHTML(item.quoteNo || item.contract)}</small></div><time>${formatDate(item.updatedAt)}</time></div>`).join('');
}

function populateMonths() {
  const select = document.getElementById('monthFilter');
  for (let month = 1; month <= 12; month += 1) select.insertAdjacentHTML('beforeend', `<option value="${month}">${month} 月到期</option>`);
}

function renderTable() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const status = document.getElementById('statusFilter').value;
  const month = document.getElementById('monthFilter').value;
  const filtered = contracts.filter(item => {
    const matchQuery = !query || [item.account, item.contract, item.quoteNo, item.note].some(value => String(value || '').toLowerCase().includes(query));
    const matchStatus = status === 'all' || item.status === status;
    const matchMonth = month === 'all' || Number(item.endDate?.split('-')[1]) === Number(month);
    return matchQuery && matchStatus && matchMonth;
  }).sort((a, b) => a.endDate.localeCompare(b.endDate));

  document.getElementById('visibleCount').textContent = filtered.length;
  document.getElementById('contractTableBody').innerHTML = filtered.map(item => `<tr>
    <td>${statusPill(item.status)}</td>
    <td class="table-account ${item.status === 'pending_quote' ? 'urgent' : ''}"><b>${escapeHTML(item.account)}</b><span>${escapeHTML(item.contract)}</span></td>
    <td><b>${formatMoney(item.taxAmount)}</b><br><span class="no-quote">未稅 ${formatMoney(item.amount)}</span></td>
    <td class="date-range"><span>${formatDate(item.startDate)}</span><span>至 ${formatDate(item.endDate)}</span></td>
    <td>${item.quoteNo ? `<span class="quote-chip">${escapeHTML(item.quoteNo)}</span>` : '<span class="no-quote">尚未建立</span>'}</td>
    <td>${formatDate(item.updatedAt)}</td>
    <td><button class="row-action" data-edit-id="${item.id}" aria-label="編輯 ${escapeHTML(item.account)}">${icons.edit}</button></td>
  </tr>`).join('');
  document.getElementById('emptyState').classList.toggle('show', filtered.length === 0);
  bindEditButtons(document.getElementById('contractTableBody'));
}

function bindEditButtons(root) {
  root.querySelectorAll('[data-edit-id]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); openDialog(button.dataset.editId); }));
}

function openDialog(id = '') {
  const form = document.getElementById('contractForm');
  form.reset();
  document.getElementById('dialogTitle').textContent = id ? '調整 MA' : '新增 MA';
  if (id) {
    const item = contracts.find(contract => contract.id === id);
    if (!item) return;
    Object.entries(item).forEach(([key, value]) => { if (form.elements[key]) form.elements[key].value = value ?? ''; });
  } else {
    form.elements.id.value = '';
    form.elements.startDate.value = new Date().toISOString().slice(0, 10);
    form.elements.status.value = 'pending_quote';
  }
  document.getElementById('contractDialog').showModal();
  setTimeout(() => form.elements.account.focus(), 50);
}

function closeDialog() { document.getElementById('contractDialog').close(); }

function saveForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form));
  const record = {
    ...values,
    id: values.id || `ma-${Date.now()}`,
    amount: Number(values.amount || 0),
    taxAmount: Number(values.taxAmount || 0),
    updatedAt: new Date().toISOString().slice(0, 10)
  };
  const existingIndex = contracts.findIndex(item => item.id === record.id);
  if (existingIndex >= 0) contracts[existingIndex] = record;
  else contracts.unshift(record);
  saveContracts();
  closeDialog();
  renderAll();
  showToast(existingIndex >= 0 ? 'MA 資料已更新' : 'MA 資料已新增');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMessage').textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function exportCSV() {
  const headers = ['帳戶名稱', '契約名稱', '未稅金額', '含稅金額', '合約起日', '合約截止日', '工作狀態', '報價單號', '最近開票日', '追蹤進度'];
  const rows = contracts.map(item => [item.account, item.contract, item.amount, item.taxAmount, item.startDate, item.endDate, statusMeta[item.status].label, item.quoteNo, item.lastInvoiceDate, item.note]);
  const csv = '\ufeff' + [headers, ...rows].map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  link.download = `MA合約追蹤_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('CSV 已匯出');
}

init();
