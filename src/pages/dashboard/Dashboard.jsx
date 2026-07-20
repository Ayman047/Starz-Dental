import React, { useState } from 'react';
import {
  LayoutDashboard, Users, Calendar, Stethoscope, CreditCard,
  ScanLine, FileText, BarChart2, Settings, LogOut, Bell,
  Search, ChevronRight, Clock, CheckCircle2, XCircle,
  TrendingUp, AlertCircle, Menu, X, Plus, Upload,
  Receipt, ClipboardList, Activity, Timer, RefreshCw,
} from 'lucide-react';

// ─── DUMMY DATA ────────────────────────────────────────────────────────────────

const stats = [
  { label: "Today's Patients", value: '24', icon: Users, growth: '+3 vs yesterday', color: 'bg-blue-50 text-blue-600' },
  { label: "Today's Revenue", value: '₹18,400', icon: TrendingUp, growth: '+₹2,100 vs yesterday', color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Pending Payments', value: '₹6,200', icon: AlertCircle, growth: '4 patients due', color: 'bg-amber-50 text-amber-600' },
  { label: 'Appointments Today', value: '31', icon: Calendar, growth: '7 remaining', color: 'bg-violet-50 text-violet-600' },
];

const actions = [
  { label: 'Waiting Patients', value: 6, desc: 'In waiting room now', icon: Timer , color: 'bg-blue-50 text-blue-600', border: 'border-blue-100' },
  { label: 'Due Payments', value: 4, desc: 'Overdue this week', icon: CreditCard, color: 'bg-amber-50 text-amber-600', border: 'border-amber-100' },
  { label: 'Monthly Ortho Reviews', value: 11, desc: 'Scheduled this month', icon: RefreshCw, color: 'bg-violet-50 text-violet-600', border: 'border-violet-100' },
  { label: 'Pending X-Rays', value: 3, desc: 'Awaiting review', icon: ScanLine, color: 'bg-rose-50 text-rose-600', border: 'border-rose-100' },
  { label: 'Doctor Notes', value: 7, desc: 'Unread notes today', icon: ClipboardList, color: 'bg-teal-50 text-teal-600', border: 'border-teal-100' },
];

const appointments = [
  { time: '09:00 AM', patient: 'Arjun Mehta', treatment: 'Root Canal', doctor: 'Dr. Tabassum', status: 'Completed' },
  { time: '09:45 AM', patient: 'Sana Fatima', treatment: 'Teeth Whitening', doctor: 'Dr. Tabassum', status: 'Completed' },
  { time: '10:30 AM', patient: 'Ravi Kumar', treatment: 'Dental Implant', doctor: 'Dr. Tabassum', status: 'Waiting' },
  { time: '11:15 AM', patient: 'Priya Sharma', treatment: 'Orthodontic Review', doctor: 'Dr. Tabassum', status: 'Waiting' },
  { time: '12:00 PM', patient: 'Mohammed Ali', treatment: 'Extraction', doctor: 'Dr. Tabassum', status: 'Waiting' },
  { time: '02:00 PM', patient: 'Lakshmi Rao', treatment: 'Scaling & Polishing', doctor: 'Dr. Tabassum', status: 'Cancelled' },
  { time: '03:30 PM', patient: 'Suresh Naidu', treatment: 'Crown Placement', doctor: 'Dr. Tabassum', status: 'Waiting' },
];

const paymentReminders = [
  { patient: 'Ravi Kumar', amount: '₹12,000', days: 5 },
  { patient: 'Meera Joshi', amount: '₹4,500', days: 12 },
  { patient: 'Thomas George', amount: '₹8,200', days: 3 },
  { patient: 'Ananya Pillai', amount: '₹2,000', days: 18 },
];

const notes = [
  { text: 'Review Mrs. Sarahs implant healing check X-ray from last visit.', tag: 'Implant' },
  { text: 'Call orthodontic patient Priya regarding wire adjustment appointment.', tag: 'Ortho' },
  { text: 'Order composite shades A2 & B1 — stock running low.', tag: 'Inventory' },
  { text: 'Follow up with Mohammed Ali on extraction site healing.', tag: 'Post-op' },
];

const recentPatients = [
  { name: 'Arjun Mehta', age: 34, phone: '98765 43210', treatment: 'Root Canal', balance: '₹0', status: 'Cleared' },
  { name: 'Sana Fatima', age: 27, phone: '91234 56789', treatment: 'Whitening', balance: '₹0', status: 'Cleared' },
  { name: 'Ravi Kumar', age: 45, phone: '87654 32109', treatment: 'Implant', balance: '₹12,000', status: 'Due' },
  { name: 'Priya Sharma', age: 22, phone: '76543 21098', treatment: 'Braces', balance: '₹4,500', status: 'Due' },
  { name: 'Thomas George', age: 51, phone: '65432 10987', treatment: 'Crown', balance: '₹8,200', status: 'Due' },
];

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Patients', icon: Users },
  { label: 'Appointments', icon: Calendar },
  { label: 'Treatments', icon: Stethoscope },
  { label: 'Payments', icon: CreditCard },
  { label: 'X-Rays', icon: ScanLine },
  { label: 'Doctor Notes', icon: FileText },
  { label: 'Reports', icon: BarChart2 },
  { label: 'Settings', icon: Settings },
];

const quickActions = [
  { label: 'Add Patient', icon: Plus, color: 'bg-blue-600 hover:bg-blue-700 text-white' },
  { label: 'Book Appointment', icon: Calendar, color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
  { label: 'Upload X-Ray', icon: Upload, color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
  { label: 'Create Invoice', icon: Receipt, color: 'bg-blue-50 hover:bg-blue-100 text-blue-700' },
];

// ─── STATUS BADGE ───────────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const map = {
    Completed: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    Waiting:   'bg-amber-50 text-amber-700 border border-amber-100',
    Cancelled: 'bg-rose-50 text-rose-600 border border-rose-100',
    Cleared:   'bg-emerald-50 text-emerald-700 border border-emerald-100',
    Due:       'bg-amber-50 text-amber-700 border border-amber-100',
  };
  const icons = {
    Completed: <CheckCircle2 className="w-3 h-3" />,
    Waiting:   <Clock className="w-3 h-3" />,
    Cancelled: <XCircle className="w-3 h-3" />,
    Cleared:   <CheckCircle2 className="w-3 h-3" />,
    Due:       <AlertCircle className="w-3 h-3" />,
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${map[status]}`}>
      {icons[status]} {status}
    </span>
  );
};

// ─── MAIN DASHBOARD ─────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">

      {/* ── SIDEBAR ── */}
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-100 z-30 flex flex-col
        transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        {/* Brand */}
        <div className="px-5 py-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-widest leading-none">Starz</p>
              <p className="text-[9px] text-slate-400 leading-snug mt-0.5">Multi Specialty Dental Care</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 mb-3">Main Menu</p>
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${active
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
              {active && <ChevronRight className="w-3 h-3 ml-auto opacity-70" />}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50 transition-all duration-200">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">

        {/* ── TOP HEADER ── */}
        <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-100 px-6 py-3.5 flex items-center gap-4">
          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 transition"
            onClick={() => setSidebarOpen(v => !v)}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex-1">
            <p className="text-base font-semibold text-slate-800">Good Morning, Doctor 👋</p>
            <p className="text-xs text-slate-400">{today}</p>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-56">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search patients, records…"
              className="bg-transparent text-sm text-slate-600 placeholder-slate-400 outline-none w-full"
            />
          </div>

          {/* Bell */}
          <button className="relative p-2 rounded-xl hover:bg-slate-50 transition">
            <Bell className="w-5 h-5 text-slate-500" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
          </button>

          {/* Avatar */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white text-sm font-bold shadow">
              T
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-slate-800 leading-none">Dr. Tabassum</p>
              <p className="text-xs text-slate-400 mt-0.5">Senior Dentist</p>
            </div>
          </div>
        </header>

        {/* ── PAGE CONTENT ── */}
        <main className="flex-1 px-6 py-7 space-y-7 max-w-7xl mx-auto w-full">

          {/* ── WELCOME CARD ── */}
          <div className="bg-blue-600 rounded-2xl px-8 py-7 flex items-center justify-between overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-blue-200 text-sm font-medium mb-1">Welcome back,</p>
              <h2 className="text-white text-2xl font-extrabold tracking-tight">Dr. Tabassum</h2>
              <p className="text-blue-200 text-sm mt-1.5 max-w-xs">Here's today's overview of your clinic. You have <span className="text-white font-semibold">7 appointments</span> remaining.</p>
            </div>
            {/* Decorative shapes */}
            <div className="absolute right-0 top-0 w-64 h-full opacity-10">
              <div className="absolute top-4 right-8 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute top-10 right-20 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute -bottom-4 right-4 w-24 h-24 border border-white rounded-full"></div>
            </div>
            <div className="hidden md:flex items-center justify-center w-28 h-28 bg-white/10 rounded-2xl border border-white/20 relative z-10 shrink-0">
              <Stethoscope className="w-12 h-12 text-white/70" />
            </div>
          </div>

          {/* ── STATS GRID ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ label, value, icon: Icon, growth, color }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-extrabold text-slate-800 tracking-tight">{value}</p>
                <p className="text-xs font-medium text-slate-500 mt-0.5">{label}</p>
                <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" /> {growth}
                </p>
              </div>
            ))}
          </div>

          {/* ── ACTION CENTER ── */}
          <div>
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Today's Action Center</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {actions.map(({ label, value, desc, icon: Icon, color, border }) => (
                <div
                  key={label}
                  className={`bg-white rounded-2xl p-5 border ${border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-extrabold text-slate-800">{value}</p>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">{label}</p>
                  <p className="text-xs text-slate-400 mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── APPOINTMENTS + PAYMENT REMINDERS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Appointments Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800">Today's Appointments</h3>
                <button className="text-xs text-blue-600 font-semibold hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      <th className="px-6 py-3 text-left">Time</th>
                      <th className="px-6 py-3 text-left">Patient</th>
                      <th className="px-6 py-3 text-left hidden md:table-cell">Treatment</th>
                      <th className="px-6 py-3 text-left hidden md:table-cell">Doctor</th>
                      <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {appointments.map((a, i) => (
                      <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                        <td className="px-6 py-3.5 text-slate-500 text-xs font-mono whitespace-nowrap">{a.time}</td>
                        <td className="px-6 py-3.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                              {a.patient.charAt(0)}
                            </div>
                            <span className="font-medium text-slate-800 whitespace-nowrap">{a.patient}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3.5 text-slate-500 hidden md:table-cell whitespace-nowrap">{a.treatment}</td>
                        <td className="px-6 py-3.5 text-slate-500 hidden md:table-cell whitespace-nowrap">{a.doctor}</td>
                        <td className="px-6 py-3.5"><StatusBadge status={a.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payment Reminders */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800">Payment Reminders</h3>
                <span className="text-xs bg-amber-50 text-amber-600 border border-amber-100 px-2 py-0.5 rounded-full font-semibold">
                  {paymentReminders.length} due
                </span>
              </div>
              <div className="divide-y divide-slate-50">
                {paymentReminders.map(({ patient, amount, days }, i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-amber-50/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold shrink-0">
                        {patient.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{patient}</p>
                        <p className="text-xs text-slate-400">{amount} · {days}d overdue</p>
                      </div>
                    </div>
                    <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg font-medium transition hover:scale-105">
                      Remind
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DOCTOR NOTES + QUICK ACTIONS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Doctor Notes */}
            <div className="lg:col-span-2 bg-amber-50 rounded-2xl border border-amber-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-500" /> Doctor Notes
                </h3>
                <button className="text-xs text-blue-600 font-semibold hover:underline">+ Add Note</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {notes.map(({ text, tag }, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-amber-100 shadow-sm hover:shadow-md transition-all duration-200 relative">
                    <span className="inline-block text-[10px] bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full mb-2">{tag}</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-sm font-bold text-slate-800 mb-5">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map(({ label, icon: Icon, color }) => (
                  <button
                    key={label}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 hover:shadow-md ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </button>
                ))}
              </div>

              {/* Mini activity */}
              <div className="mt-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Clinic Activity</p>
                <div className="space-y-2.5">
                  {[
                    { label: 'Consultations', val: 62 },
                    { label: 'Treatments Done', val: 84 },
                    { label: 'Revenue Target', val: 73 },
                  ].map(({ label, val }) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>{label}</span><span>{val}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RECENT PATIENTS ── */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Recent Patients</h3>
              <button className="text-xs text-blue-600 font-semibold hover:underline">View All Patients</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <th className="px-6 py-3 text-left">Patient</th>
                    <th className="px-6 py-3 text-left hidden md:table-cell">Age</th>
                    <th className="px-6 py-3 text-left hidden md:table-cell">Phone</th>
                    <th className="px-6 py-3 text-left">Treatment</th>
                    <th className="px-6 py-3 text-left">Balance</th>
                    <th className="px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentPatients.map(({ name, age, phone, treatment, balance, status }, i) => (
                    <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                            {name.charAt(0)}
                          </div>
                          <span className="font-medium text-slate-800">{name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-slate-500 hidden md:table-cell">{age}</td>
                      <td className="px-6 py-3.5 text-slate-500 text-xs font-mono hidden md:table-cell">{phone}</td>
                      <td className="px-6 py-3.5 text-slate-500">{treatment}</td>
                      <td className="px-6 py-3.5 text-slate-700 font-medium">{balance}</td>
                      <td className="px-6 py-3.5"><StatusBadge status={status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <footer className="text-center text-xs text-slate-400 pb-4">
            © {new Date().getFullYear()} Starz Multi Specialty Dental Care. All rights reserved.
          </footer>

        </main>
      </div>
    </div>
  );
}
