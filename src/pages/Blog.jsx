import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-4 flex items-center justify-center">
      <div className=" w-full bg-gradient-to-b from-yellow-100 to-amber-50 rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-600">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 rounded-full translate-x-20 translate-y-20"></div>
          </div>
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl mb-2 font-semibold" style={{ fontFamily: 'serif' }}>
              আরবি শিক্ষায় নতুন দিগন্ত...
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-2 drop-shadow-lg" style={{ fontFamily: 'serif' }}>
              NBS
            </h1>
            <div className="flex items-center justify-center gap-3 mb-3">
              <h2 className="text-3xl md:text-4xl font-black tracking-wide">SPECIAL</h2>
              <div className="bg-blue-600 px-3 py-1 rounded transform -rotate-90">
                <span className="text-lg font-bold">ARABIC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="p-6 space-y-3">
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <span className="text-blue-600 text-xl font-bold flex-shrink-0">»</span>
            <p className="text-gray-800 font-semibold text-base md:text-lg">
              দাখিল ও আলিম শ্রেণির আরবি সকল বিষয়
            </p>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <span className="text-blue-600 text-xl font-bold flex-shrink-0">»</span>
            <p className="text-gray-800 font-semibold text-base md:text-lg">
              ৫ম ও ৮ম শ্রেণির কৃতি স্পেশাল প্রোগ্রাম
            </p>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <span className="text-blue-600 text-xl font-bold flex-shrink-0">»</span>
            <p className="text-gray-800 font-semibold text-base md:text-lg">
              ছোটদের সরক কোর্স (মিজান ও মুনশাইব)
            </p>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <span className="text-blue-600 text-xl font-bold flex-shrink-0">»</span>
            <p className="text-gray-800 font-semibold text-base md:text-lg">
              বেসিক মাস্টারফুল কোর্স
            </p>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <span className="text-blue-600 text-xl font-bold flex-shrink-0">»</span>
            <p className="text-gray-800 font-semibold text-base md:text-lg">
              পরীক্ষার গুরুত্বপূর্ণ টপিকের শিট প্রদান
            </p>
          </div>
          
          <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
            <span className="text-blue-600 text-xl font-bold flex-shrink-0">»</span>
            <p className="text-gray-800 font-semibold text-base md:text-lg">
              সাপ্তাহিক পরীক্ষা ও মডেল টেস্ট গ্রহণ
            </p>
          </div>
        </div>

        {/* Course Categories */}
        <div className="px-6 pb-6 grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <p className="text-center font-bold text-lg">ইবারত কোর্স</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform relative">
            <div className="absolute -top-2 -right-2 bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">•</span>
            </div>
            <p className="text-center font-bold text-lg">কুরআন শিক্ষা</p>
            <p className="text-center text-sm mt-1">(পরিভাষায়)</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform col-span-2">
            <p className="text-center font-bold text-lg">হাইট ব্যাট</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform col-span-2">
            <p className="text-center font-bold text-lg">তাহফিজ ও তাজবিদ</p>
          </div>
        </div>

        {/* Institution Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 border-t-4 border-yellow-600">
          <div className="bg-white rounded-lg p-4 shadow-inner">
            <h3 className="text-center text-xl md:text-2xl font-black text-gray-800 mb-2">
              নাজিরে দিন শহীদ
            </h3>
            <p className="text-center text-sm md:text-base font-semibold text-gray-700">
              Bachelor of Theology & Islamic Studies
            </p>
            <p className="text-center text-sm text-gray-600 mt-1">
              আল-হাইমান এন্ড ইসলামিক স্টাডিজ
            </p>
            <p className="text-center text-sm text-gray-600">
              ইসলামী বিশ্ববিদ্যালয়, কুষ্টিয়া
            </p>
          </div>
        </div>

        {/* Footer Contact */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <p className="text-sm md:text-base font-semibold">
                Beside Darul Quran Siddiquia Kamil Madrasah, Khulna
              </p>
            </div>
            
            <div className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-full">
              <Phone className="w-5 h-5" />
              <a href="tel:01711650828" className="text-lg md:text-xl font-bold hover:text-yellow-300 transition-colors">
                01711-650 828
              </a>
              <Phone className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}