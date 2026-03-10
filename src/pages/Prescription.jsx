import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, Info } from 'lucide-react';

const Prescription = () => {
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom max-w-4xl">
        
        <div className="bg-white rounded-2xl shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Panel - Upload Form */}
          <div className="p-8 md:p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Prescription</h1>
            <p className="text-gray-500 mb-8">Upload your prescription and we will arrange the medicines for you.</p>

            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center flex flex-col items-center justify-center h-64">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prescription Uploaded!</h3>
                <p className="text-gray-600">Our pharmacist will review your prescription soon.</p>
                <button 
                  onClick={() => {setIsSuccess(false); setFile(null);}}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Upload another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 mb-6 text-center transition-colors
                    ${isDragOver ? 'border-primary bg-primary/5' : 'border-gray-300 hover:bg-gray-50'}
                    ${file ? 'bg-gray-50 border-solid border-gray-300' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {file ? (
                    <div className="flex flex-col items-center">
                      <FileText className="w-12 h-12 text-primary mb-3" />
                      <p className="font-semibold text-gray-900 truncate max-w-xs">{file.name}</p>
                      <p className="text-xs text-gray-500 mb-4">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      <button 
                        type="button" 
                        onClick={() => setFile(null)}
                        className="text-sm text-red-500 hover:text-red-700 font-medium"
                      >
                        Remove file
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="w-8 h-8" />
                      </div>
                      <p className="text-gray-600 mb-2">Drag and drop your prescription here</p>
                      <p className="text-sm text-gray-400 mb-4">or</p>
                      <label className="cursor-pointer btn-secondary inline-block">
                        Browse Files
                        <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileInput} />
                      </label>
                      <p className="text-xs text-gray-400 mt-4">Supported formats: JPG, PNG, PDF (Max: 5MB)</p>
                    </div>
                  )}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex gap-3">
                  <Info className="w-5 h-5 text-accent-dark flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1 col-span-12">Valid Prescription Guide:</p>
                    <ul className="list-disc pl-4 space-y-1 text-gray-600">
                      <li>Doctor's details & signature should be clearly visible</li>
                      <li>Patient details & date of consultation must be present</li>
                      <li>Medicines should be clearly written</li>
                    </ul>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={!file || isUploading}
                  className={`w-full py-3 rounded-lg font-semibold flex justify-center items-center ${
                    !file ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'btn-primary'
                  }`}
                >
                  {isUploading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : 'Continue'}
                </button>
              </form>
            )}
          </div>

          {/* Right Panel - Info Graphic */}
          <div className="bg-primary/5 p-8 md:p-10 hidden md:block border-l border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">How it works</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 z-10 border-4 border-white shadow-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Upload Prescription</h4>
                  <p className="text-sm text-gray-500 mt-1">Submit a clear photo of your valid prescription.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 z-10 border-4 border-white shadow-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pharmacist Review</h4>
                  <p className="text-sm text-gray-500 mt-1">Our certified team reviews your uploaded document.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 z-10 border-4 border-white shadow-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cart Preparation</h4>
                  <p className="text-sm text-gray-500 mt-1">Prescribed medicines are automatically added to your cart.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0 z-10 border-4 border-white shadow-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Doorstep Delivery</h4>
                  <p className="text-sm text-gray-500 mt-1">Pay inline and get fast delivery to your address.</p>
                </div>
              </div>
            </div>
            
            {/* connecting line */}
            <div className="absolute left-[39px] md:left-auto md:ml-[19px] top-[140px] bottom-32 w-0.5 bg-gray-200 -z-10 hidden md:block"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Prescription;
