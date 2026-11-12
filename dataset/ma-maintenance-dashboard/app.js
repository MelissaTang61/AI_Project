const STORAGE_KEY = 'ma-flow-contracts-v1';
const BACKUP_KEY = 'ma-flow-contracts-backup-v1';
const SOURCE_KEY = 'ma-flow-source-v1';

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
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 17V5m0 0L8 9m4-4 4 4M5 21h14"/></svg>',
  sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h5M9 12h7M9 16h7M9 8h2"/></svg>',
  undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 7 4 12l5 5"/><path d="M5 12h9a5 5 0 1 1 0 10h-2"/></svg>',
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

const QUOTE_WINDOW_MONTHS = 3;
const CRITICAL_WINDOW_MONTHS = 1;

function localToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function parseLocalDate(value) {
  if (!value) return null;
  const [year, month, day] = String(value).split('-').map(Number);
  if (!year || !month || !day) return null;
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function addMonths(date, months) {
  const result = new Date(date);
  const targetMonth = result.getMonth() + months;
  const targetDay = result.getDate();
  result.setDate(1);
  result.setMonth(targetMonth);
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(targetDay, lastDay));
  return result;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function hasEstablishedQuote(item) {
  if (['pending_signature', 'completed'].includes(item.status)) return true;
  return /SF[-－]|已報價|報價已|等待.*回簽|簽呈/.test(`${item.quoteNo || ''} ${item.note || ''}`);
}

function isQuoteCandidate(item) {
  return Boolean(parseLocalDate(item.endDate) && item.status !== 'completed' && !hasEstablishedQuote(item));
}

function needsQuote(item) {
  const endDate = parseLocalDate(item.endDate);
  return Boolean(isQuoteCandidate(item) && endDate && endDate <= addMonths(localToday(), QUOTE_WINDOW_MONTHS));
}

function effectiveStatus(item) {
  if (needsQuote(item)) return 'pending_quote';
  return item.status === 'pending_quote' ? 'tracking' : item.status;
}

function isDeadlineCritical(item) {
  const endDate = parseLocalDate(item.endDate);
  return Boolean(needsQuote(item) && endDate && endDate <= addMonths(localToday(), CRITICAL_WINDOW_MONTHS));
}

function deadlineMessage(item) {
  const endDate = parseLocalDate(item.endDate);
  if (!endDate) return '';
  const days = Math.ceil((endDate - localToday()) / 86400000);
  if (days < 0) return `已逾期 ${Math.abs(days)} 天`;
  if (days === 0) return '今日到期';
  if (days <= 31) return `剩餘 ${days} 天`;
  return '';
}

function matchesExpiryPreset(item, preset, customStart = '', customEnd = '') {
  const endDate = parseLocalDate(item.endDate);
  if (!endDate || preset === 'all') return preset === 'all';
  const today = localToday();
  if (preset === 'quote_window') return endDate <= addMonths(today, QUOTE_WINDOW_MONTHS);
  if (preset === 'overdue') return endDate < today;
  if (preset === 'next_30') return endDate >= today && endDate <= addDays(today, 30);
  if (preset === 'days_31_90') return endDate > addDays(today, 30) && endDate <= addDays(today, 90);
  if (preset === 'next_90') return endDate >= today && endDate <= addMonths(today, QUOTE_WINDOW_MONTHS);
  if (preset === 'custom') {
    const start = parseLocalDate(customStart);
    const end = parseLocalDate(customEnd);
    return (!start || endDate >= start) && (!end || endDate <= end);
  }
  return true;
}

function contractMonthCount(startDate, endDate) {
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);
  if (!start || !end || end < start) return 12;
  return Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth() + 1);
}

function calculateQuoteHours(projectHours, startDate, endDate) {
  const months = contractMonthCount(startDate, endDate);
  return Math.round((Number(projectHours || 0) * 0.15 * months / 12) * 100) / 100;
}

function normalizeContract(item) {
  const projectHours = Number(item.projectHours || 0);
  const quoteType = item.quoteType || (projectHours > 0 ? 'hours' : 'cash');
  return {
    ...item,
    projectHours,
    quoteType,
    quoteHours: item.quoteHours == null || item.quoteHours === '' ? calculateQuoteHours(projectHours, item.startDate, item.endDate) : Number(item.quoteHours || 0)
  };
}

let contracts = loadContracts();
let sourceMeta = loadSourceMeta();
let activeView = 'overview';
let currentFilter = 'all';

function loadContracts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return (Array.isArray(saved) && saved.length ? saved : structuredClone(seedContracts)).map(normalizeContract);
  } catch { return structuredClone(seedContracts).map(normalizeContract); }
}

function saveContracts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contracts));
}

function loadSourceMeta() {
  try { return JSON.parse(localStorage.getItem(SOURCE_KEY)) || null; }
  catch { return null; }
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

function normalizeHeader(value) {
  return String(value || '').replace(/[\s\t\r\n]/g, '').replace(/[（）]/g, match => match === '（' ? '(' : ')');
}

function cellText(cell) {
  if (!cell) return '';
  if (typeof cell.text === 'string' && cell.text.trim()) return cell.text.trim();
  const value = cell.value;
  if (value == null) return '';
  if (value instanceof Date) return toISODate(value);
  if (typeof value === 'object') {
    if (Array.isArray(value.richText)) return value.richText.map(part => part.text || '').join('').trim();
    if ('result' in value) return String(value.result ?? '').trim();
    if ('text' in value) return String(value.text ?? '').trim();
  }
  return String(value).trim();
}

function numericValue(cell) {
  const raw = cell?.value;
  if (typeof raw === 'number') return raw;
  const parsed = Number(String(cellText(cell)).replace(/[$,\s]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

function toISODate(value) {
  if (!value) return '';
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  if (typeof value === 'number') {
    const date = new Date(Math.round((value - 25569) * 86400 * 1000));
    return toISODate(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  }
  const match = String(value).match(/(20\d{2})[-\/.](\d{1,2})[-\/.](\d{1,2})/);
  return match ? `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}` : '';
}

function deriveStartDate(endDate) {
  if (!endDate) return '';
  const date = new Date(`${endDate}T12:00:00`);
  if (Number.isNaN(date.getTime())) return '';
  date.setFullYear(date.getFullYear() - 1);
  date.setDate(date.getDate() + 1);
  return toISODate(date);
}

function colorToRgb(color) {
  const argb = color?.argb;
  if (!argb || !/^[0-9A-F]{6,8}$/i.test(argb)) return null;
  const rgb = argb.slice(-6);
  return { r: parseInt(rgb.slice(0, 2), 16), g: parseInt(rgb.slice(2, 4), 16), b: parseInt(rgb.slice(4, 6), 16) };
}

function isRedFont(cell) {
  const rgb = colorToRgb(cell?.font?.color);
  return Boolean(rgb && rgb.r > 180 && rgb.g < 110 && rgb.b < 110);
}

function isYellowFill(cell) {
  const rgb = colorToRgb(cell?.fill?.fgColor);
  return Boolean(rgb && rgb.r > 220 && rgb.g > 190 && rgb.b < 210);
}

function inferStatus({ contractCell, rowCells, quoteNo, note, lastInvoiceDate }) {
  const text = `${quoteNo || ''} ${note || ''}`;
  if (isRedFont(contractCell) || /尚未報價|待報價/.test(text)) return 'pending_quote';
  if (/已回簽|已簽回|完成用印|已用印|已完成|續約完成/.test(text)) return 'completed';
  const yellow = rowCells.some(isYellowFill);
  if (yellow || /SF[-－]|報價已|等待.*回簽|簽呈/.test(text)) return 'pending_signature';
  if (lastInvoiceDate) return 'completed';
  return 'tracking';
}

function stableId(account, contract, endDate) {
  const input = `${account}|${contract}|${endDate}`;
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) hash = ((hash << 5) - hash + input.charCodeAt(index)) | 0;
  return `import-${Math.abs(hash)}`;
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
  document.getElementById('viewAllBtn').addEventListener('click', () => { resetFilters(true); switchView('contracts'); });
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
  document.getElementById('statusFilter').addEventListener('change', handleStatusFilterChange);
  document.getElementById('companyFilter').addEventListener('change', renderTable);
  document.getElementById('expiryPresetFilter').addEventListener('change', handleExpiryPresetChange);
  document.getElementById('expiryStartDate').addEventListener('change', renderTable);
  document.getElementById('expiryEndDate').addEventListener('change', renderTable);
  document.getElementById('monthFilter').addEventListener('change', renderTable);
  document.getElementById('resetFiltersBtn').addEventListener('click', () => resetFilters(false));
  document.querySelectorAll('[data-expiry-preset]').forEach(button => button.addEventListener('click', () => setExpiryPreset(button.dataset.expiryPreset)));
  document.getElementById('quoteType').addEventListener('change', updateQuoteFields);
  ['projectHours', 'startDate', 'endDate'].forEach(name => document.getElementById('contractForm').elements[name].addEventListener('input', updateQuoteHours));
  document.getElementById('exportBtn').addEventListener('click', exportCSV);
  document.getElementById('importBtn').addEventListener('click', openFilePicker);
  document.getElementById('importTopBtn').addEventListener('click', openFilePicker);
  document.getElementById('fileInput').addEventListener('change', event => {
    const [file] = event.target.files;
    if (file) importFile(file);
    event.target.value = '';
  });
  document.getElementById('restoreBtn').addEventListener('click', restoreBackup);
  const dropZone = document.getElementById('dropZone');
  ['dragenter', 'dragover'].forEach(type => dropZone.addEventListener(type, event => { event.preventDefault(); dropZone.classList.add('dragover'); }));
  ['dragleave', 'drop'].forEach(type => dropZone.addEventListener(type, event => { event.preventDefault(); dropZone.classList.remove('dragover'); }));
  dropZone.addEventListener('drop', event => { const [file] = event.dataTransfer.files; if (file) importFile(file); });
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
  document.getElementById('companyFilter').value = 'all';
  document.getElementById('monthFilter').value = 'all';
  setExpiryPreset(filter === 'pending_quote' ? 'quote_window' : 'all', false);
  updateListTitle();
  switchView('contracts');
}

function handleStatusFilterChange(event) {
  currentFilter = event.target.value;
  setExpiryPreset(currentFilter === 'pending_quote' ? 'quote_window' : 'all', false);
  updateListTitle();
  renderTable();
}

function handleExpiryPresetChange() {
  const custom = document.getElementById('expiryPresetFilter').value === 'custom';
  document.getElementById('expiryStartLabel').hidden = !custom;
  document.getElementById('expiryEndLabel').hidden = !custom;
  updateListTitle();
  renderTable();
}

function setExpiryPreset(preset, shouldRender = true) {
  document.getElementById('expiryPresetFilter').value = preset;
  handleExpiryPresetChange();
  if (!shouldRender) return;
  updateListTitle();
}

function resetFilters(clearStatus = false) {
  if (clearStatus) {
    currentFilter = 'all';
    document.getElementById('statusFilter').value = 'all';
  } else currentFilter = document.getElementById('statusFilter').value;
  document.getElementById('searchInput').value = '';
  document.getElementById('companyFilter').value = 'all';
  document.getElementById('monthFilter').value = 'all';
  document.getElementById('expiryStartDate').value = '';
  document.getElementById('expiryEndDate').value = '';
  setExpiryPreset(currentFilter === 'pending_quote' ? 'quote_window' : 'all', false);
  updateListTitle();
  renderTable();
}

function updateListTitle() {
  const meta = statusMeta[currentFilter];
  document.getElementById('contractListTitle').textContent = meta ? `${meta.label}明細` : '全部合約';
  const expirySelect = document.getElementById('expiryPresetFilter');
  const expiryLabel = expirySelect?.selectedOptions?.[0]?.textContent || '已逾期＋未來 3 個月';
  document.getElementById('contractListSubtitle').textContent = currentFilter === 'pending_quote' ? `顯示「${expiryLabel}」內尚未報價的客戶；一個月內或逾期以紅字顯示。` : currentFilter === 'pending_signature' ? '報價已送出、等待客戶回簽的合約。' : '管理報價、回簽與維護期間。';
}

function renderAll() {
  renderSourcePanel();
  populateCompanies();
  renderMetrics();
  renderPriority();
  renderMonths();
  renderActivities();
  renderTable();
}

function renderSourcePanel() {
  const name = sourceMeta?.name || '匿名示範資料';
  const details = sourceMeta ? `${sourceMeta.count} 筆 · ${formatDate(sourceMeta.importedAt)} 匯入 · 檔案僅在此瀏覽器解析` : '可上傳同格式 Excel，即時替換本頁內容';
  document.getElementById('sourceFileName').textContent = name;
  document.getElementById('sourceMetaText').textContent = details;
  document.getElementById('restoreBtn').hidden = !localStorage.getItem(BACKUP_KEY);
}

function renderMetrics() {
  const today = localToday();
  const windowEnd = addMonths(today, QUOTE_WINDOW_MONTHS);
  const pendingQuote = contracts.filter(needsQuote).length;
  const quoteScope = contracts.filter(item => {
    const endDate = parseLocalDate(item.endDate);
    return Boolean(endDate && ((endDate >= today && endDate <= windowEnd) || needsQuote(item)));
  });
  const quoteDone = quoteScope.filter(item => !needsQuote(item)).length;
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
  const items = contracts.filter(item => needsQuote(item) || item.status === 'pending_signature').sort((a, b) => a.endDate.localeCompare(b.endDate)).slice(0, 6);
  document.getElementById('priorityList').innerHTML = items.map(item => `
    <div class="priority-item ${isDeadlineCritical(item) ? 'deadline-critical' : ''}">
      <div class="account-cell"><b>${escapeHTML(item.account)}</b><small>截止 ${formatDate(item.endDate)}</small>${deadlineMessage(item) ? `<span class="deadline-note">${escapeHTML(deadlineMessage(item))}</span>` : ''}</div>
      <div class="contract-cell ${isDeadlineCritical(item) ? 'urgent' : ''}"><b>${escapeHTML(item.contract)}</b><small>${escapeHTML(item.note || '尚無追蹤紀錄')}</small></div>
      <div class="amount-cell">${pricingSummary(item)}</div>
      ${statusPill(effectiveStatus(item))}
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
  document.getElementById('activityList').innerHTML = items.map(item => `<div class="activity-item"><i></i><div><b>${escapeHTML(item.account)}</b><small>${statusMeta[effectiveStatus(item)].label} · ${escapeHTML(item.quoteNo || item.contract)}</small></div><time>${formatDate(item.updatedAt)}</time></div>`).join('');
}

function populateMonths() {
  const select = document.getElementById('monthFilter');
  for (let month = 1; month <= 12; month += 1) select.insertAdjacentHTML('beforeend', `<option value="${month}">${month} 月到期</option>`);
}

function populateCompanies() {
  const select = document.getElementById('companyFilter');
  const selected = select.value || 'all';
  const companies = [...new Set(contracts.map(item => item.account).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'zh-Hant'));
  select.replaceChildren(new Option('所有公司', 'all'), ...companies.map(company => new Option(company, company)));
  select.value = companies.includes(selected) ? selected : 'all';
}

function renderQuoteWindowSummary() {
  const panel = document.getElementById('quoteWindowSummary');
  const visible = document.getElementById('statusFilter').value === 'pending_quote';
  panel.hidden = !visible;
  const candidates = contracts.filter(isQuoteCandidate);
  const today = localToday();
  const inRange = (item, start, end) => {
    const date = parseLocalDate(item.endDate);
    return Boolean(date && date >= start && date <= end);
  };
  document.getElementById('overdueQuoteCount').textContent = candidates.filter(item => parseLocalDate(item.endDate) < today).length;
  document.getElementById('next30QuoteCount').textContent = candidates.filter(item => inRange(item, today, addDays(today, 30))).length;
  document.getElementById('next90QuoteCount').textContent = candidates.filter(item => inRange(item, addDays(today, 31), addDays(today, 90))).length;
  const preset = document.getElementById('expiryPresetFilter').value;
  panel.querySelectorAll('[data-expiry-preset]').forEach(button => button.classList.toggle('active', button.dataset.expiryPreset === preset));
}

function pricingSummary(item) {
  if (item.quoteType === 'hours') {
    const quoteHours = item.quoteHours == null ? calculateQuoteHours(item.projectHours, item.startDate, item.endDate) : Number(item.quoteHours || 0);
    return `<span class="quote-type">時數</span><span class="quote-hours">本次 ${quoteHours.toLocaleString('zh-TW')} 小時<small>原有 ${Number(item.projectHours || 0).toLocaleString('zh-TW')} 小時</small></span>`;
  }
  return `<span class="quote-type">現金</span><b>${formatMoney(item.taxAmount)}</b><small>未稅 ${formatMoney(item.amount)}</small>`;
}

function renderTable() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const status = document.getElementById('statusFilter').value;
  const company = document.getElementById('companyFilter').value;
  const expiryPreset = document.getElementById('expiryPresetFilter').value;
  const expiryStart = document.getElementById('expiryStartDate').value;
  const expiryEnd = document.getElementById('expiryEndDate').value;
  const month = document.getElementById('monthFilter').value;
  const filtered = contracts.filter(item => {
    const matchQuery = !query || [item.account, item.contract, item.quoteNo, item.note].some(value => String(value || '').toLowerCase().includes(query));
    const matchStatus = status === 'all' || (status === 'pending_quote' ? isQuoteCandidate(item) : effectiveStatus(item) === status);
    const matchCompany = company === 'all' || item.account === company;
    const matchMonth = month === 'all' || Number(item.endDate?.split('-')[1]) === Number(month);
    const matchExpiry = matchesExpiryPreset(item, expiryPreset, expiryStart, expiryEnd);
    return matchQuery && matchStatus && matchCompany && matchMonth && matchExpiry;
  }).sort((a, b) => a.endDate.localeCompare(b.endDate));

  document.getElementById('visibleCount').textContent = filtered.length;
  document.getElementById('contractTableBody').innerHTML = filtered.map(item => `<tr class="${isDeadlineCritical(item) ? 'deadline-critical' : ''}">
    <td>${statusPill(status === 'pending_quote' && isQuoteCandidate(item) ? 'pending_quote' : effectiveStatus(item))}</td>
    <td class="table-account ${isDeadlineCritical(item) ? 'urgent' : ''}"><b>${escapeHTML(item.account)}</b><span>${escapeHTML(item.contract)}</span></td>
    <td>${pricingSummary(item)}</td>
    <td class="date-range"><span>${formatDate(item.startDate)}</span><span>至 ${formatDate(item.endDate)}</span>${deadlineMessage(item) ? `<span class="deadline-note">${escapeHTML(deadlineMessage(item))}</span>` : ''}</td>
    <td>${item.quoteNo ? `<span class="quote-chip">${escapeHTML(item.quoteNo)}</span>` : '<span class="no-quote">尚未建立</span>'}</td>
    <td>${formatDate(item.updatedAt)}</td>
    <td><button class="row-action" data-edit-id="${item.id}" aria-label="編輯 ${escapeHTML(item.account)}">${icons.edit}</button></td>
  </tr>`).join('');
  document.getElementById('emptyState').classList.toggle('show', filtered.length === 0);
  renderQuoteWindowSummary();
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
    form.elements.quoteType.value = 'cash';
  }
  updateQuoteFields();
  updateQuoteHours();
  document.getElementById('contractDialog').showModal();
  setTimeout(() => form.elements.account.focus(), 50);
}

function closeDialog() { document.getElementById('contractDialog').close(); }

function updateQuoteFields() {
  const form = document.getElementById('contractForm');
  const isHours = form.elements.quoteType.value === 'hours';
  document.querySelectorAll('.hours-field').forEach(element => { element.hidden = !isHours; });
  document.querySelectorAll('.cash-field').forEach(element => { element.hidden = isHours; });
  updateQuoteHours();
}

function updateQuoteHours() {
  const form = document.getElementById('contractForm');
  const months = contractMonthCount(form.elements.startDate.value, form.elements.endDate.value);
  form.elements.quoteHours.value = calculateQuoteHours(form.elements.projectHours.value, form.elements.startDate.value, form.elements.endDate.value);
  document.getElementById('hoursFormula').textContent = `原有專案時數 × 15% × ${months}/12（依合約起訖月份）`;
}

function saveForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form));
  if (values.startDate && values.endDate && values.endDate < values.startDate) {
    form.elements.endDate.setCustomValidity('合約截止日不可早於合約起日');
    form.elements.endDate.reportValidity();
    form.elements.endDate.addEventListener('input', () => form.elements.endDate.setCustomValidity(''), { once: true });
    return;
  }
  const record = {
    ...values,
    id: values.id || `ma-${Date.now()}`,
    amount: Number(values.amount || 0),
    taxAmount: Number(values.taxAmount || 0),
    projectHours: Number(values.projectHours || 0),
    quoteHours: calculateQuoteHours(values.projectHours, values.startDate, values.endDate),
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

function openFilePicker() {
  document.getElementById('fileInput').click();
}

async function importFile(file) {
  const extension = file.name.split('.').pop().toLowerCase();
  if (!['xlsx', 'csv'].includes(extension)) {
    showToast('請上傳 .xlsx 或 .csv 檔案');
    return;
  }
  try {
    document.getElementById('sourceMetaText').textContent = `正在解析 ${file.name}…`;
    const imported = extension === 'xlsx' ? await parseXlsx(file) : await parseCsvFile(file);
    if (!imported.length) throw new Error('找不到可匯入的合約資料');
    localStorage.setItem(BACKUP_KEY, JSON.stringify({ contracts, sourceMeta }));
    contracts = imported;
    sourceMeta = { name: file.name, count: imported.length, importedAt: new Date().toISOString().slice(0, 10) };
    saveContracts();
    localStorage.setItem(SOURCE_KEY, JSON.stringify(sourceMeta));
    currentFilter = 'all';
    document.getElementById('statusFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    populateCompanies();
    document.getElementById('companyFilter').value = 'all';
    document.getElementById('monthFilter').value = 'all';
    document.getElementById('expiryPresetFilter').value = 'all';
    document.getElementById('expiryStartDate').value = '';
    document.getElementById('expiryEndDate').value = '';
    document.getElementById('expiryStartLabel').hidden = true;
    document.getElementById('expiryEndLabel').hidden = true;
    updateListTitle();
    renderAll();
    switchView('overview');
    const pending = imported.filter(needsQuote).length;
    showToast(`已匯入 ${imported.length} 筆，待報價 ${pending} 筆`);
  } catch (error) {
    console.error(error);
    renderSourcePanel();
    showToast(error.message || '檔案解析失敗，請確認格式');
  }
}

async function parseXlsx(file) {
  const workbook = await readXlsxWorkbook(await file.arrayBuffer());
  let matched = null;
  workbook.sheets.forEach(worksheet => {
    if (matched) return;
    const limit = Math.min(worksheet.rows.length, 15);
    for (let rowNumber = 1; rowNumber <= limit; rowNumber += 1) {
      const row = worksheet.rows[rowNumber - 1] || [];
      const headers = new Map();
      row.forEach((cell, column) => headers.set(normalizeHeader(cellText(cell)), column));
      if (headers.has('帳戶名稱') && headers.has('契約名稱') && headers.has('合約截止日')) {
        matched = { worksheet, headerRow: rowNumber, headers };
        break;
      }
    }
  });
  if (!matched) throw new Error('找不到「帳戶名稱／契約名稱／合約截止日」欄位');
  const { worksheet, headerRow, headers } = matched;
  const cellAt = (row, aliases) => {
    const key = aliases.find(alias => headers.has(normalizeHeader(alias)));
    return key ? row[headers.get(normalizeHeader(key))] : null;
  };
  const output = [];
  for (let rowNumber = headerRow + 1; rowNumber <= worksheet.rows.length; rowNumber += 1) {
    const row = worksheet.rows[rowNumber - 1] || [];
    const account = cellText(cellAt(row, ['帳戶名稱']));
    const contractCell = cellAt(row, ['契約名稱']);
    const contract = cellText(contractCell);
    if (!account || !contract) continue;
    const endCell = cellAt(row, ['合約截止日']);
    const endDate = toISODate(endCell?.value || cellText(endCell));
    const quoteNo = cellText(cellAt(row, ['狀態更新', '報價單號']));
    const note = cellText(cellAt(row, ['追蹤進度', '備註']));
    const lastInvoiceDate = toISODate(cellAt(row, ['最近一次實際開票日'])?.value || cellText(cellAt(row, ['最近一次實際開票日'])));
    const projectHours = numericValue(cellAt(row, ['專案時數']));
    const startDate = deriveStartDate(endDate);
    const rowCells = row.slice(0, 15);
    output.push({
      id: stableId(account, contract, endDate),
      account,
      contract,
      amount: numericValue(cellAt(row, ['合約金額(未稅)'])),
      taxAmount: numericValue(cellAt(row, ['合約金額(含稅)'])),
      cost: numericValue(cellAt(row, ['成本(含稅)'])),
      projectHours,
      quoteType: projectHours > 0 ? 'hours' : 'cash',
      quoteHours: calculateQuoteHours(projectHours, startDate, endDate),
      startDate,
      endDate,
      lastInvoiceDate,
      quoteNo,
      status: inferStatus({ contractCell, rowCells, quoteNo, note, lastInvoiceDate }),
      dealType: cellText(cellAt(row, ['成交類型'])) || '維護保固',
      note,
      updatedAt: new Date().toISOString().slice(0, 10)
    });
  }
  return output;
}

async function readXlsxWorkbook(arrayBuffer) {
  const archive = await unzipXlsx(arrayBuffer);
  const parseXml = path => {
    const text = archive.get(path);
    if (!text) return null;
    const xml = new DOMParser().parseFromString(text, 'application/xml');
    if (xml.getElementsByTagName('parsererror').length) throw new Error(`Excel XML 解析失敗：${path}`);
    return xml;
  };
  const workbookXml = parseXml('xl/workbook.xml');
  const relsXml = parseXml('xl/_rels/workbook.xml.rels');
  if (!workbookXml || !relsXml) throw new Error('這不是有效的 Excel 活頁簿');

  const relationships = new Map(Array.from(relsXml.getElementsByTagName('Relationship')).map(node => [node.getAttribute('Id'), normalizeXlsxPath(node.getAttribute('Target'))]));
  const sharedXml = parseXml('xl/sharedStrings.xml');
  const sharedStrings = sharedXml ? Array.from(sharedXml.getElementsByTagName('si')).map(node => Array.from(node.getElementsByTagName('t')).map(textNode => textNode.textContent || '').join('')) : [];
  const styles = readXlsxStyles(parseXml('xl/styles.xml'));
  const sheets = [];

  for (const node of Array.from(workbookXml.getElementsByTagName('sheet'))) {
    const relId = node.getAttribute('r:id');
    const path = relationships.get(relId);
    const xml = path ? parseXml(path) : null;
    if (!xml) continue;
    const rows = [];
    for (const rowNode of Array.from(xml.getElementsByTagName('row'))) {
      const rowNumber = Number(rowNode.getAttribute('r')) || rows.length + 1;
      const row = [];
      for (const cellNode of Array.from(rowNode.getElementsByTagName('c'))) {
        const reference = cellNode.getAttribute('r') || '';
        const column = xlsxColumnIndex(reference);
        const type = cellNode.getAttribute('t') || 'n';
        const styleIndex = Number(cellNode.getAttribute('s') || 0);
        const valueNode = cellNode.getElementsByTagName('v')[0];
        let value = valueNode?.textContent ?? '';
        if (type === 's') value = sharedStrings[Number(value)] ?? '';
        else if (type === 'inlineStr') value = Array.from(cellNode.getElementsByTagName('t')).map(textNode => textNode.textContent || '').join('');
        else if (type === 'b') value = value === '1';
        else if (type === 'n' && value !== '' && Number.isFinite(Number(value))) value = Number(value);
        const style = styles[styleIndex] || {};
        row[column] = {
          value,
          text: value == null ? '' : String(value),
          font: style.fontColor ? { color: { argb: style.fontColor } } : {},
          fill: style.fillColor ? { fgColor: { argb: style.fillColor } } : {}
        };
      }
      rows[rowNumber - 1] = row;
    }
    sheets.push({ name: node.getAttribute('name') || `工作表 ${sheets.length + 1}`, rows });
  }
  return { sheets };
}

function normalizeXlsxPath(target) {
  const cleaned = String(target || '').replace(/\\/g, '/').replace(/^\//, '');
  const full = cleaned.startsWith('xl/') ? cleaned : `xl/${cleaned}`;
  const parts = [];
  full.split('/').forEach(part => { if (part === '..') parts.pop(); else if (part !== '.') parts.push(part); });
  return parts.join('/');
}

function readXlsxStyles(xml) {
  if (!xml) return [];
  const directChildren = (node, name) => node ? Array.from(node.children).filter(child => child.localName === name) : [];
  const fontsNode = Array.from(xml.documentElement.children).find(node => node.localName === 'fonts');
  const fillsNode = Array.from(xml.documentElement.children).find(node => node.localName === 'fills');
  const xfsNode = Array.from(xml.documentElement.children).find(node => node.localName === 'cellXfs');
  const fonts = directChildren(fontsNode, 'font').map(font => font.getElementsByTagName('color')[0]?.getAttribute('rgb') || '');
  const fills = directChildren(fillsNode, 'fill').map(fill => fill.getElementsByTagName('fgColor')[0]?.getAttribute('rgb') || '');
  return directChildren(xfsNode, 'xf').map(xf => ({ fontColor: fonts[Number(xf.getAttribute('fontId') || 0)] || '', fillColor: fills[Number(xf.getAttribute('fillId') || 0)] || '' }));
}

function xlsxColumnIndex(reference) {
  const letters = String(reference).match(/^[A-Z]+/i)?.[0]?.toUpperCase() || 'A';
  let value = 0;
  for (const letter of letters) value = value * 26 + letter.charCodeAt(0) - 64;
  return value - 1;
}

async function unzipXlsx(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);
  let eocd = -1;
  for (let offset = bytes.length - 22; offset >= Math.max(0, bytes.length - 65557); offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) { eocd = offset; break; }
  }
  if (eocd < 0) throw new Error('無法讀取 Excel 壓縮內容');
  const entryCount = view.getUint16(eocd + 10, true);
  let cursor = view.getUint32(eocd + 16, true);
  const decoder = new TextDecoder('utf-8');
  const files = new Map();
  for (let index = 0; index < entryCount; index += 1) {
    if (view.getUint32(cursor, true) !== 0x02014b50) throw new Error('Excel 檔案目錄損壞');
    const method = view.getUint16(cursor + 10, true);
    const compressedSize = view.getUint32(cursor + 20, true);
    const nameLength = view.getUint16(cursor + 28, true);
    const extraLength = view.getUint16(cursor + 30, true);
    const commentLength = view.getUint16(cursor + 32, true);
    const localOffset = view.getUint32(cursor + 42, true);
    const name = decoder.decode(bytes.slice(cursor + 46, cursor + 46 + nameLength)).replace(/\\/g, '/');
    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataStart, dataStart + compressedSize);
    let content;
    if (method === 0) content = compressed;
    else if (method === 8) {
      const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
      content = new Uint8Array(await new Response(stream).arrayBuffer());
    } else throw new Error(`不支援的 Excel 壓縮格式：${method}`);
    if (name.endsWith('.xml') || name.endsWith('.rels')) files.set(name, decoder.decode(content));
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return files;
}

async function parseCsvFile(file) {
  const rows = parseCsv(await file.text());
  const headerIndex = rows.findIndex(row => {
    const headers = row.map(normalizeHeader);
    return headers.includes('帳戶名稱') && headers.includes('契約名稱') && headers.includes('合約截止日');
  });
  if (headerIndex < 0) throw new Error('找不到「帳戶名稱／契約名稱／合約截止日」欄位');
  const headers = rows[headerIndex].map(normalizeHeader);
  const valueAt = (row, aliases) => {
    const index = aliases.map(normalizeHeader).map(alias => headers.indexOf(alias)).find(value => value >= 0);
    return index >= 0 ? String(row[index] ?? '').trim() : '';
  };
  return rows.slice(headerIndex + 1).map((row, index) => {
    const account = valueAt(row, ['帳戶名稱']);
    const contract = valueAt(row, ['契約名稱']);
    if (!account || !contract) return null;
    const endDate = toISODate(valueAt(row, ['合約截止日']));
    const quoteNo = valueAt(row, ['狀態更新', '報價單號']);
    const note = valueAt(row, ['追蹤進度', '備註']);
    const lastInvoiceDate = toISODate(valueAt(row, ['最近一次實際開票日']));
    const contractCell = { font: {} };
    const rowCells = [];
    const projectHours = Number(valueAt(row, ['專案時數']).replace(/[,\s]/g, '')) || 0;
    const startDate = deriveStartDate(endDate);
    return {
      id: stableId(account, contract, endDate || index), account, contract,
      amount: Number(valueAt(row, ['合約金額(未稅)']).replace(/[$,\s]/g, '')) || 0,
      taxAmount: Number(valueAt(row, ['合約金額(含稅)']).replace(/[$,\s]/g, '')) || 0,
      cost: Number(valueAt(row, ['成本(含稅)']).replace(/[$,\s]/g, '')) || 0,
      projectHours,
      quoteType: projectHours > 0 ? 'hours' : 'cash',
      quoteHours: calculateQuoteHours(projectHours, startDate, endDate),
      startDate, endDate, lastInvoiceDate, quoteNo,
      status: inferStatus({ contractCell, rowCells, quoteNo, note, lastInvoiceDate }),
      dealType: valueAt(row, ['成交類型']) || '維護保固', note,
      updatedAt: new Date().toISOString().slice(0, 10)
    };
  }).filter(Boolean);
}

function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  const source = text.replace(/^\uFEFF/, '');
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"' && source[index + 1] === '"') { field += '"'; index += 1; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(field); field = ''; }
    else if (char === '\n') { row.push(field.replace(/\r$/, '')); rows.push(row); row = []; field = ''; }
    else field += char;
  }
  if (field || row.length) { row.push(field.replace(/\r$/, '')); rows.push(row); }
  return rows;
}

function restoreBackup() {
  try {
    const backup = JSON.parse(localStorage.getItem(BACKUP_KEY));
    if (!backup?.contracts?.length) throw new Error('沒有可還原的資料');
    const current = { contracts, sourceMeta };
    contracts = backup.contracts;
    sourceMeta = backup.sourceMeta || null;
    localStorage.setItem(BACKUP_KEY, JSON.stringify(current));
    saveContracts();
    if (sourceMeta) localStorage.setItem(SOURCE_KEY, JSON.stringify(sourceMeta));
    else localStorage.removeItem(SOURCE_KEY);
    renderAll();
    showToast(`已還原 ${contracts.length} 筆資料`);
  } catch (error) { showToast(error.message || '無法還原資料'); }
}

function exportCSV() {
  const headers = ['帳戶名稱', '契約名稱', '報價類型', '未稅金額', '含稅金額', '原有專案時數', '本次報價時數', '合約起日', '合約截止日', '工作狀態', '報價單號', '最近開票日', '追蹤進度'];
  const rows = contracts.map(item => [item.account, item.contract, item.quoteType === 'hours' ? '時數' : '現金', item.amount, item.taxAmount, item.projectHours, item.quoteHours, item.startDate, item.endDate, statusMeta[effectiveStatus(item)].label, item.quoteNo, item.lastInvoiceDate, item.note]);
  const csv = '\ufeff' + [headers, ...rows].map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  link.download = `MA合約追蹤_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('CSV 已匯出');
}

init();

