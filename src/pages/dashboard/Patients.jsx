import React, { useState, useMemo } from 'react';
import {
  Search, Plus, Filter, ArrowUpDown, Eye, Pencil, Trash2,
  Upload, X, Paperclip, ChevronDown, AlertTriangle,
} from 'lucide-react';

// ─── DUMMY DATA ─────────────────────────────────────────────────────────────────

const initialPatients = [
  { id: 1,  name: 'Rahul Sharma',    phone: '+91 98765 43210', age: 27, gender: 'Male',   treatment: 'Root Canal',       treatmentDate: '15 Jul 2026', treatmentCost: 8000,  amountPaid: 5000, amountDue: 3000, paymentStatus: 'Partial', xray: true,  notes: 'Review after 2 weeks.' },
  { id: 2,  name: 'Priya Mehta',     phone: '+91 91234 56789', age: 34, gender: 'Female', treatment: 'Dental Implant',   treatmentDate: '10 Jul 2026', treatmentCost: 25000, amountPaid: 25000,amountDue: 0,    paymentStatus: 'Paid',    xray: true,  notes: 'Post-op healing well.' },
  { id: 3,  name: 'Mohammed Irfan',  phone: '+91 87654 32109', age: 19, gender: 'Male',   treatment: 'Braces',           treatmentDate: '01 Jul 2026', treatmentCost: 40000, amountPaid: 0,    amountDue: 40000,paymentStatus: 'Unpaid',  xray: false, notes: '' },
  { id: 4,  name: 'Sunita Rao',      phone: '+91 76543 21098', age: 52, gender: 'Female', treatment: 'Extraction',       treatmentDate: '12 Jul 2026', treatmentCost: 1500,  amountPaid: 1500, amountDue: 0,    paymentStatus: 'Paid',    xray: false, notes: 'No complications.' },
  { id: 5,  name: 'Karan Nair',      phone: '+91 65432 10987', age: 41, gender: 'Male',   treatment: 'Teeth Cleaning',   treatmentDate: '08 Jul 2026', treatmentCost: 2500,  amountPaid: 2000, amountDue: 500,  paymentStatus: 'Partial', xray: false, notes: 'Follow-up scaling next month.' },
  { id: 6,  name: 'Deepa Krishnan',  phone: '+91 99887 76655', age: 29, gender: 'Female', treatment: 'Teeth Whitening',  treatmentDate: '05 Jul 2026', treatmentCost: 6000,  amountPaid: 6000, amountDue: 0,    paymentStatus: 'Paid',    xray: false, notes: '' },
  { id: 7,  name: 'Arun Pillai',     phone: '+91 88776 65544', age: 63, gender: 'Male',   treatment: 'Dental Implant',   treatmentDate: '03 Jul 2026', treatmentCost: 30000, amountPaid: 10000,amountDue: 20000,paymentStatus: 'Partial', xray: true,  notes: 'Second implant planned for August.' },
  { id: 8,  name: 'Sneha Joshi',     phone: '+91 77665 54433', age: 23, gender: 'Female', treatment: 'Braces',           treatmentDate: '20 Jun 2026', treatmentCost: 38000, amountPaid: 0,    amountDue: 38000,paymentStatus: 'Unpaid',  xray: true,  notes: 'Parent to be contacted for payment.' },
  { id: 9,  name: 'Vikram Thakur',   phone: '+91 66554 43322', age: 37, gender: 'Male',   treatment: 'Root Canal',       treatmentDate: '18 Jun 2026', treatmentCost: 9000,  amountPaid: 9000, amountDue: 0,    paymentStatus: 'Paid',    xray: true,  notes: 'Crown fitting next visit.' },
  { id: 10, name: 'Lakshmi Suresh',  phone: '+91 55443 32211', age: 46, gender: 'Female', treatment: 'Extraction',       treatmentDate: '25 Jun 2026', treatmentCost: 2000,  amountPaid: 0,    amountDue: 2000, paymentStatus: 'Unpaid',  xray: false, notes: '' },
];

const TREATMENTS = ['Root Canal', 'Dental Implant', 'Braces', 'Extraction', 'Teeth Cleaning', 'Teeth Whitening'];

const EMPTY_FORM = {
  name: '', phone: '', age: '', gender: 'Male',
  treatment: 'Root Canal', treatmentDate: '', treatmentCost: '',
  amountPaid: '', amountDue: '', paymentStatus: '',
  xray: null, notes: '',
};

// ─── HELPERS ────────────────────────────────────────────────────────────────────

const calcDerived = (cost, paid) => {
  const c = parseFloat(cost) || 0;
  const p = parseFloat(paid) || 0;
  const due = Math.max(c - p, 0);
  const status = due === 0 ? 'Paid' : p === 0 ? 'Unpaid' : 'Partial';
  return { amountDue: due, paymentStatus: status };
};

const PaymentBadge = ({ status }) => {
  const styles = {
    Paid:    'bg-emerald-50 text-emerald-700 border border-emerald-200',
    Partial: 'bg-orange-50 text-orange-700 border border-orange-200',
    Unpaid:  'bg-rose-50 text-rose-600 border border-rose-200',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────────

export default function Patients() {
  const [patients, setPatients]       = useState(initialPatients);
  const [search, setSearch]           = useState('');
  const [filter, setFilter]           = useState('All Patients');
  const [sort, setSort]               = useState('Newest First');

  // modal state: null | 'add' | 'edit' | 'view' | 'delete'
  const [modal, setModal]             = useState(null);
  const [selected, setSelected]       = useState(null); // patient being acted on
  const [form, setForm]               = useState(EMPTY_FORM);
  const [xrayPreview, setXrayPreview] = useState(null);
  const [formError, setFormError]     = useState('');

  // ── Derived patient list ──────────────────────────────────────────────────────

  const displayed = useMemo(() => {
    let list = [...patients];

    // Search by name or phone
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) || p.phone.includes(q)
      );
    }

    // Filter by payment status
    if (filter !== 'All Patients') {
      list = list.filter(p => p.paymentStatus === filter);
    }

    // Sort
    if (sort === 'Newest First') list.reverse();

    return list;
  }, [patients, search, filter, sort]);

  // ── Form helpers ──────────────────────────────────────────────────────────────

  const updateForm = (field, value) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'treatmentCost' || field === 'amountPaid') {
        const derived = calcDerived(
          field === 'treatmentCost' ? value : prev.treatmentCost,
          field === 'amountPaid'    ? value : prev.amountPaid
        );
        return { ...updated, ...derived };
      }
      return updated;
    });
  };

  const openAdd = () => {
    setForm(EMPTY_FORM);
    setXrayPreview(null);
    setFormError('');
    setModal('add');
  };

  const openEdit = (patient) => {
    setSelected(patient);
    setForm({ ...patient, treatmentCost: patient.treatmentCost, amountPaid: patient.amountPaid });
    setXrayPreview(patient.xray ? 'existing' : null);
    setFormError('');
    setModal('edit');
  };

  const openView = (patient) => { setSelected(patient); setModal('view'); };
  const openDelete = (patient) => { setSelected(patient); setModal('delete'); };
  const closeModal = () => { setModal(null); setSelected(null); setXrayPreview(null); };

  // ── Save / Delete ──────────────────────────────────────────────────────────────

  const handleSave = () => {
    if (!form.name || !form.phone || !form.age || !form.treatment || !form.treatmentDate || form.treatmentCost === '') {
      setFormError('Please fill in all required fields.');
      return;
    }
    const derived = calcDerived(form.treatmentCost, form.amountPaid);
    const record = {
      ...form,
      id: modal === 'edit' ? selected.id : Date.now(),
      age: parseInt(form.age),
      treatmentCost: parseFloat(form.treatmentCost),
      amountPaid: parseFloat(form.amountPaid) || 0,
      ...derived,
      xray: xrayPreview ? true : false,
    };
    if (modal === 'add') {
      setPatients(prev => [...prev, record]);
    } else {
      setPatients(prev => prev.map(p => p.id === selected.id ? record : p));
    }
    closeModal();
  };

  const handleDelete = () => {
    setPatients(prev => prev.filter(p => p.id !== selected.id));
    closeModal();
  };

  const handleXray = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setXrayPreview(url);
      updateForm('xray', true);
    }
  };

  // ── Shared field classes ──────────────────────────────────────────────────────

  const inputCls = 'w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition';
  const labelCls = 'block text-xs font-semibold text-slate-500 mb-1.5';

  // ─── RENDER ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-50 px-4 md:px-8 py-8 font-sans">

      {/* ── PAGE HEADER ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Patients</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage patient records quickly and efficiently.</p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm shadow-blue-200 transition hover:scale-105"
        >
          <Plus className="w-4 h-4" /> Add Patient
        </button>
      </div>

      {/* ── TOOLBAR ── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 mb-5 flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by name or phone…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-full"
          />
        </div>

        {/* Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="pl-9 pr-8 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-600 bg-slate-50 appearance-none focus:outline-none focus:border-blue-400 cursor-pointer"
          >
            {['All Patients', 'Paid', 'Partial', 'Unpaid'].map(f => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>

        {/* Sort */}
        <div className="relative">
          <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="pl-9 pr-8 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-600 bg-slate-50 appearance-none focus:outline-none focus:border-blue-400 cursor-pointer"
          >
            {['Newest First', 'Oldest First'].map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* ── PATIENT TABLE — desktop/tablet ── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {['Patient Name','Phone','Age','Gender','Treatment','Date','Payment','Amount Due','X-Ray','Actions'].map(h => (
                <th key={h} className="px-5 py-3.5 text-left whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {displayed.length === 0 ? (
              <tr>
                <td colSpan={10} className="px-5 py-16 text-center text-slate-400 text-sm">
                  No patients found.
                </td>
              </tr>
            ) : displayed.map(p => (
              <tr key={p.id} className="hover:bg-blue-50/30 transition-colors group">
                {/* Name */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                      {p.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-800 whitespace-nowrap">{p.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-slate-500 font-mono text-xs whitespace-nowrap">{p.phone}</td>
                <td className="px-5 py-3.5 text-slate-600">{p.age}</td>
                <td className="px-5 py-3.5 text-slate-600">{p.gender}</td>
                <td className="px-5 py-3.5 text-slate-700 font-medium whitespace-nowrap">{p.treatment}</td>
                <td className="px-5 py-3.5 text-slate-500 whitespace-nowrap">{p.treatmentDate}</td>
                <td className="px-5 py-3.5"><PaymentBadge status={p.paymentStatus} /></td>
                <td className="px-5 py-3.5 text-slate-700 font-semibold">
                  {p.amountDue > 0 ? `₹${p.amountDue.toLocaleString('en-IN')}` : <span className="text-emerald-500 text-xs font-semibold">Cleared</span>}
                </td>
                <td className="px-5 py-3.5">
                  {p.xray
                    ? <button className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold hover:underline"><Paperclip className="w-3.5 h-3.5" /> View</button>
                    : <span className="text-slate-300">—</span>
                  }
                </td>
                {/* Actions */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => openView(p)} title="View" className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button onClick={() => openEdit(p)} title="Edit" className="p-1.5 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => openDelete(p)} title="Delete" className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Count footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 text-xs text-slate-400">
          {displayed.length} patient{displayed.length !== 1 ? 's' : ''} shown
        </div>
      </div>

      {/* ── PATIENT CARDS — mobile ── */}
      <div className="md:hidden space-y-3">
        {displayed.length === 0 && (
          <p className="text-center text-slate-400 text-sm py-12">No patients found.</p>
        )}
        {displayed.map(p => (
          <div key={p.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">
                  {p.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{p.name}</p>
                  <p className="text-xs text-slate-400 font-mono">{p.phone}</p>
                </div>
              </div>
              <PaymentBadge status={p.paymentStatus} />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mb-4">
              <span><strong className="text-slate-700">Age:</strong> {p.age}</span>
              <span><strong className="text-slate-700">Gender:</strong> {p.gender}</span>
              <span><strong className="text-slate-700">Treatment:</strong> {p.treatment}</span>
              <span><strong className="text-slate-700">Date:</strong> {p.treatmentDate}</span>
              <span><strong className="text-slate-700">Due:</strong> {p.amountDue > 0 ? `₹${p.amountDue.toLocaleString('en-IN')}` : 'Cleared'}</span>
              <span><strong className="text-slate-700">X-Ray:</strong> {p.xray ? '📎 Yes' : '—'}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openView(p)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">
                <Eye className="w-3.5 h-3.5" /> View
              </button>
              <button onClick={() => openEdit(p)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition">
                <Pencil className="w-3.5 h-3.5" /> Edit
              </button>
              <button onClick={() => openDelete(p)} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-rose-50 hover:text-rose-500 transition">
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════
          ADD / EDIT MODAL
      ══════════════════════════════════════════════════════════════════════════ */}
      {(modal === 'add' || modal === 'edit') && (
        <ModalOverlay onClose={closeModal}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">{modal === 'add' ? 'Add New Patient' : 'Edit Patient'}</h2>
            <button onClick={closeModal} className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          {formError && (
            <div className="mb-4 px-4 py-3 bg-rose-50 border border-rose-200 text-rose-600 text-xs rounded-xl font-medium">
              {formError}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className={labelCls}>Patient Name *</label>
              <input className={inputCls} placeholder="Full name" value={form.name} onChange={e => updateForm('name', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Phone Number *</label>
              <input className={inputCls} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => updateForm('phone', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Age *</label>
              <input type="number" className={inputCls} placeholder="e.g. 30" value={form.age} onChange={e => updateForm('age', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Gender</label>
              <div className="relative">
                <select className={inputCls + ' appearance-none pr-8'} value={form.gender} onChange={e => updateForm('gender', e.target.value)}>
                  {['Male', 'Female', 'Other'].map(g => <option key={g}>{g}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className={labelCls}>Treatment Type *</label>
              <div className="relative">
                <select className={inputCls + ' appearance-none pr-8'} value={form.treatment} onChange={e => updateForm('treatment', e.target.value)}>
                  {TREATMENTS.map(t => <option key={t}>{t}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className={labelCls}>Treatment Date *</label>
              <input type="date" className={inputCls} value={form.treatmentDate} onChange={e => updateForm('treatmentDate', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Treatment Cost (₹) *</label>
              <input type="number" className={inputCls} placeholder="0" value={form.treatmentCost} onChange={e => updateForm('treatmentCost', e.target.value)} />
            </div>
            <div>
              <label className={labelCls}>Amount Paid (₹)</label>
              <input type="number" className={inputCls} placeholder="0" value={form.amountPaid} onChange={e => updateForm('amountPaid', e.target.value)} />
            </div>
            {/* Auto-calculated fields */}
            <div>
              <label className={labelCls}>Amount Due (₹)</label>
              <input readOnly className={inputCls + ' bg-slate-50 cursor-default text-slate-500'} value={form.amountDue || 0} />
            </div>
            <div>
              <label className={labelCls}>Payment Status</label>
              <div className={`${inputCls} bg-slate-50 cursor-default flex items-center`}>
                {form.paymentStatus && <PaymentBadge status={form.paymentStatus} />}
              </div>
            </div>

            {/* X-Ray Upload */}
            <div className="sm:col-span-2">
              <label className={labelCls}>Upload X-Ray</label>
              <label className="flex items-center gap-3 border border-dashed border-slate-300 hover:border-blue-400 rounded-xl px-4 py-3.5 cursor-pointer transition bg-slate-50 hover:bg-blue-50/30 group">
                <Upload className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition shrink-0" />
                <span className="text-sm text-slate-500 group-hover:text-blue-600 transition">
                  {xrayPreview ? (xrayPreview === 'existing' ? 'X-Ray already uploaded' : 'Image selected ✓') : 'Click to upload X-Ray image'}
                </span>
                <input type="file" accept="image/*" className="hidden" onChange={handleXray} />
              </label>
              {xrayPreview && xrayPreview !== 'existing' && (
                <img src={xrayPreview} alt="X-Ray preview" className="mt-2 h-24 rounded-lg object-cover border border-slate-200" />
              )}
            </div>

            {/* Notes */}
            <div className="sm:col-span-2">
              <label className={labelCls}>Notes <span className="text-slate-300 font-normal">(optional)</span></label>
              <textarea
                rows={3}
                className={inputCls + ' resize-none'}
                placeholder="Any additional notes…"
                value={form.notes}
                onChange={e => updateForm('notes', e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={closeModal} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
              Cancel
            </button>
            <button onClick={handleSave} className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm shadow-blue-200 transition hover:scale-[1.02]">
              Save Patient
            </button>
          </div>
        </ModalOverlay>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════
          VIEW MODAL
      ══════════════════════════════════════════════════════════════════════════ */}
      {modal === 'view' && selected && (
        <ModalOverlay onClose={closeModal}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Patient Record</h2>
            <button onClick={closeModal} className="p-1.5 rounded-lg hover:bg-slate-100 transition text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Patient header */}
          <div className="flex items-center gap-4 mb-6 pb-5 border-b border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-extrabold shrink-0">
              {selected.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{selected.name}</h3>
              <p className="text-sm text-slate-500 font-mono">{selected.phone}</p>
            </div>
            <div className="ml-auto"><PaymentBadge status={selected.paymentStatus} /></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5">
            {[
              ['Age', selected.age],
              ['Gender', selected.gender],
              ['Treatment', selected.treatment],
              ['Treatment Date', selected.treatmentDate],
              ['Treatment Cost', `₹${selected.treatmentCost.toLocaleString('en-IN')}`],
              ['Amount Paid', `₹${selected.amountPaid.toLocaleString('en-IN')}`],
              ['Amount Due', selected.amountDue > 0 ? `₹${selected.amountDue.toLocaleString('en-IN')}` : 'Cleared'],
              ['Payment Status', <PaymentBadge key="s" status={selected.paymentStatus} />],
            ].map(([label, value]) => (
              <div key={label} className="bg-slate-50 rounded-xl px-4 py-3">
                <p className="text-xs text-slate-400 font-semibold mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-slate-800">{value}</p>
              </div>
            ))}
          </div>

          {selected.notes && (
            <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 mb-4">
              <p className="text-xs text-amber-600 font-semibold mb-1">Notes</p>
              <p className="text-sm text-slate-700">{selected.notes}</p>
            </div>
          )}

          {selected.xray && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center gap-2 text-blue-600 text-sm font-semibold">
              <Paperclip className="w-4 h-4" /> X-Ray on file
            </div>
          )}

          <button onClick={closeModal} className="w-full mt-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">
            Close
          </button>
        </ModalOverlay>
      )}

      {/* ══════════════════════════════════════════════════════════════════════════
          DELETE CONFIRMATION
      ══════════════════════════════════════════════════════════════════════════ */}
      {modal === 'delete' && selected && (
        <ModalOverlay onClose={closeModal} small>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-rose-500" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-1">Delete Patient?</h2>
            <p className="text-sm text-slate-500 mb-6">
              Are you sure you want to delete <strong className="text-slate-700">{selected.name}</strong>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={closeModal} className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition">
                Cancel
              </button>
              <button onClick={handleDelete} className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold transition">
                Delete
              </button>
            </div>
          </div>
        </ModalOverlay>
      )}
    </div>
  );
}

// ─── MODAL WRAPPER ───────────────────────────────────────────────────────────────

function ModalOverlay({ children, onClose, small }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div
        className={`bg-white rounded-3xl shadow-2xl w-full ${small ? 'max-w-sm' : 'max-w-xl'} max-h-[90vh] overflow-y-auto p-7`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
