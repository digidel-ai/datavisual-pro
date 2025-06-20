import React from 'react';
import { billingData } from '../utils/mockData';
import { Calendar, FileText, CreditCard, Check, AlertTriangle } from 'lucide-react';

const Billing: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">Billing</h2>
      
      {/* Services Summary */}
      <div className="card mb-8">
        <h3 className="text-lg font-medium mb-6">Subscribed Services</h3>
        
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Amount</th>
                <th>Billing Type</th>
                <th>Status</th>
                <th>Next Billing</th>
              </tr>
            </thead>
            <tbody>
              {billingData.services.map((service) => (
                <tr key={service.id}>
                  <td className="font-medium">
                    {service.name}
                    {service.details && (
                      <span className="block text-xs text-text-secondary mt-1">
                        {service.details}
                      </span>
                    )}
                  </td>
                  <td>
                    ${service.amount.toLocaleString()}
                  </td>
                  <td>{service.type}</td>
                  <td>
                    <span 
                      className={`badge ${
                        service.status === 'Active' ? 'badge-success' :
                        service.status === 'Paid' ? 'badge-info' :
                        'badge-warning'
                      }`}
                    >
                      {service.status}
                    </span>
                  </td>
                  <td>
                    {service.type === 'One-time' ? (
                      <span className="text-text-secondary">N/A</span>
                    ) : (
                      <span>{service.nextBilling}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-background-dark">
                <td className="font-medium">Total Monthly</td>
                <td className="font-medium text-primary">
                  ${billingData.services
                    .filter(service => service.type === 'Monthly')
                    .reduce((total, service) => total + service.amount, 0)
                    .toLocaleString()}
                </td>
                <td colSpan={3}></td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div className="mt-6 flex gap-4">
          <button className="btn btn-outline flex items-center gap-2">
            <Calendar size={16} />
            <span>Change Billing Date</span>
          </button>
          <button className="btn btn-outline flex items-center gap-2">
            <CreditCard size={16} />
            <span>Update Payment Method</span>
          </button>
        </div>
      </div>
      
      {/* Recent Invoices */}
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Recent Invoices</h3>
          <button className="btn btn-outline text-sm flex items-center gap-2">
            <FileText size={16} />
            <span>View All Invoices</span>
          </button>
        </div>
        
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Paid On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {billingData.invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="font-medium">{invoice.id}</td>
                  <td>{invoice.date}</td>
                  <td>${invoice.amount.toLocaleString()}</td>
                  <td>
                    <span 
                      className={`badge ${
                        invoice.status === 'Paid' ? 'badge-success' :
                        invoice.status === 'Pending' ? 'badge-warning' :
                        'badge-danger'
                      }`}
                    >
                      {invoice.status === 'Paid' && <Check size={14} className="mr-1" />}
                      {invoice.status === 'Pending' && <AlertTriangle size={14} className="mr-1" />}
                      {invoice.status}
                    </span>
                  </td>
                  <td>
                    {invoice.paidDate || <span className="text-text-secondary">-</span>}
                  </td>
                  <td>
                    <button className="btn btn-outline text-xs py-1 px-2">
                      <FileText size={14} className="mr-1" />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Billing FAQ */}
      <div className="card">
        <h3 className="text-lg font-medium mb-6">Billing FAQs</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-md font-medium mb-2">When am I billed?</h4>
            <p className="text-sm text-text-secondary">
              Your monthly services are billed on the 1st of each month. One-time services are billed upon completion of the project.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-2">What payment methods do you accept?</h4>
            <p className="text-sm text-text-secondary">
              We accept all major credit cards (Visa, Mastercard, American Express, Discover), ACH transfers, and checks for invoices over $5,000.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-2">Can I get a detailed breakdown of my bill?</h4>
            <p className="text-sm text-text-secondary">
              Yes! You can download a detailed PDF invoice for any billing period by clicking the "PDF" button next to the invoice. For more specific details, please contact your account manager.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-2">How do I update my billing information?</h4>
            <p className="text-sm text-text-secondary">
              You can update your payment method by clicking the "Update Payment Method" button above. For other billing information changes, please contact your account manager.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 border border-primary/30 rounded-lg bg-primary/5">
          <div className="flex items-start gap-4">
            <div className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div>
              <h4 className="text-md font-medium text-primary mb-1">Need help with billing?</h4>
              <p className="text-sm text-text-secondary mb-3">
                If you have any questions about your bill or need to make changes to your plan, please contact your account manager or our billing department.
              </p>
              <div className="flex gap-3">
                <button className="btn btn-primary text-sm">Contact Account Manager</button>
                <button className="btn btn-outline text-sm">Email Billing Department</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;