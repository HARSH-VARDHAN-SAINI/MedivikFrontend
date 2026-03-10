import React, { useState } from 'react';
import { User, Package, FileText, Settings, Heart, LogOut, ChevronRight, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'prescriptions', label: 'Prescriptions', icon: FileText },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const mockOrders = [
    { id: 'ORD-9821-445', date: 'Oct 12, 2023', status: 'Delivered', amount: 1450.00, items: 3 },
    { id: 'ORD-8832-112', date: 'Oct 05, 2023', status: 'Processing', amount: 320.50, items: 1 },
    { id: 'ORD-7711-098', date: 'Sep 28, 2023', status: 'Delivered', amount: 2100.00, items: 5 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <div className="p-6 bg-primary/5 border-b border-primary/10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl shadow-inner">
                  JD
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 leading-tight">John Doe</h2>
                  <p className="text-sm text-gray-500">+91 98765 43210</p>
                </div>
              </div>
              <div className="py-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                        isActive 
                          ? 'text-primary bg-primary/5 border-r-4 border-primary' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <div className="border-t border-gray-100 p-2 mt-4">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 min-h-[500px]">
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h2>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-xl p-5 hover:border-primary/50 transition-colors group cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-gray-900">{order.id}</span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                              {order.status === 'Delivered' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">Ordered on {order.date} • {order.items} Items</p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 sm:gap-4 border-t sm:border-0 border-gray-100 pt-4 sm:pt-0">
                          <span className="font-bold text-lg text-gray-900">₹{order.amount.toFixed(2)}</span>
                          <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors flex-shrink-0">
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none" defaultValue="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none" defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                      <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none" defaultValue="9876543210" disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <button className="btn-primary py-3 px-8 font-semibold">Save Changes</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs placeholders */}
              {(activeTab === 'prescriptions' || activeTab === 'wishlist' || activeTab === 'settings') && (
                <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nothing to see here</h3>
                  <p className="text-gray-500 max-w-xs mx-auto mb-6">
                    You don't have any saved items in this section yet.
                  </p>
                  <Link to="/products" className="btn-secondary">Start Browsing</Link>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
