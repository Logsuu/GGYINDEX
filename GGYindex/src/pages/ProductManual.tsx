/**
 * 产品手册页面
 * 拾光科技烹饪机使用和选配指南
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  ArrowLeft, 
  Flame, 
  Shield, 
  ChefHat, 
  AlertTriangle, 
  Sparkles, 
  Clock, 
  Droplets, 
  Eye, 
  Utensils,
  CheckCircle,
  XCircle,
  Settings,
  Play,
  BookOpen,
  ShoppingCart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

/**
 * 产品手册组件
 */
export default function ProductManual() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPot, setSelectedPot] = useState(''); // 'iron' or 'teflon'

  // 卷轴选项配置
  const scrollItems = [
    {
      id: 'video',
      title: '智能烹饪机宣传片',
      subtitle: 'Product Introduction Video',
      icon: Play,
      gradient: 'from-blue-500 to-purple-500',
      description: '了解拾光科技烹饪机的强大功能'
    },
    {
      id: 'installation', 
      title: '设备使用安装',
      subtitle: 'Equipment Installation',
      icon: Settings,
      gradient: 'from-green-500 to-teal-500',
      description: '从拆箱到调试的完整安装流程'
    },
    {
      id: 'potGuide',
      title: '锅体选配指南', 
      subtitle: 'Pot Selection Guide',
      icon: ChefHat,
      gradient: 'from-orange-500 to-red-500',
      description: '氮化铁锅与特氟龙锅的专业选配'
    },
    {
      id: 'supplies',
      title: '耗材选购指南',
      subtitle: 'Supplies Purchase Guide', 
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
      description: '配件耗材的选购和更换指南'
    }
  ];

  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);

  // 首页内容
  const renderHomePage = () => (
    <div className="min-h-screen relative overflow-hidden">
      {/* LOGO渐变背景 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/bc6606c6-67e3-4e95-bf5d-05c822b797ac.jpg"
          alt="拾光科技LOGO背景"
          className="w-96 h-96 object-cover rounded-full"
        />
      </div>

      {/* 主要内容区域 */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10">
        {/* 品牌标题 */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <img 
                src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/bc6606c6-67e3-4e95-bf5d-05c822b797ac.jpg"
                alt="拾光科技LOGO"
                className="w-16 h-16 rounded-2xl object-cover"
              />
            </div>
            <div className="text-left">
              <h1 className="text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent mb-4 tracking-tighter leading-none drop-shadow-2xl">
                拾光科技
              </h1>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <p className="text-blue-200 text-xl font-light tracking-wider">烹饪机使用和选配指南</p>
              </div>
            </div>
          </div>
          <p className="text-blue-100/90 text-xl font-light leading-relaxed tracking-wide max-w-4xl mx-auto">
            专业的设备，精心的指导，为您的烹饪之旅提供全方位支持
          </p>
        </div>

        {/* 滑动卷轴选择器 */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-5xl w-full">
          <h2 className="text-3xl font-bold text-white mb-8">选择您需要的内容</h2>
          
          {/* 卷轴容器 */}
          <div className="relative">
            {/* 左右箭头 */}
            <button 
              onClick={() => setCurrentScrollIndex(Math.max(0, currentScrollIndex - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 disabled:opacity-50"
              disabled={currentScrollIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button 
              onClick={() => setCurrentScrollIndex(Math.min(scrollItems.length - 1, currentScrollIndex + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 disabled:opacity-50"
              disabled={currentScrollIndex === scrollItems.length - 1}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* 卷轴内容 */}
            <div className="overflow-hidden rounded-2xl mx-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentScrollIndex * 100}%)` }}
              >
                {scrollItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.id}
                      className="w-full flex-shrink-0 p-6"
                    >
                      <div 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          if (item.id === 'video') {
                            setCurrentPage('video');
                          } else if (item.id === 'installation') {
                            setCurrentPage('installation');
                          } else if (item.id === 'potGuide') {
                            setCurrentPage('potGuide');
                          } else if (item.id === 'supplies') {
                            setCurrentPage('supplies');
                          }
                        }}
                        className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl h-80 flex flex-col items-center justify-center text-center group`}
                      >
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-lg mb-4">
                          {item.subtitle}
                        </p>
                        <p className="text-white/90 text-base">
                          {item.description}
                        </p>
                        
                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm">点击进入 →</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 指示器 */}
            <div className="flex justify-center space-x-2 mt-6">
              {scrollItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScrollIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentScrollIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 快速导航提示 */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-lg mb-4">使用左右箭头或指示器浏览所有内容</p>
          <div className="flex items-center justify-center space-x-8 text-sm text-white/60">
            <span>智能烹饪机宣传片</span>
            <span>•</span>
            <span>设备使用安装</span>
            <span>•</span>
            <span>锅体选配指南</span>
            <span>•</span>
            <span>耗材选购指南</span>
          </div>
        </div>
      </div>
    </div>
  );

  // 宣传片页面
  const renderVideoPage = () => (
    <>
      <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-blue-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">智能烹饪机宣传片</h2>
            <p className="text-white text-xl">Product Introduction Video</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden h-96 flex items-center justify-center group cursor-pointer hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-500 mb-6">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
              <Play className="w-12 h-12 text-white ml-1" />
            </div>
            <p className="text-white text-2xl font-medium">拾光科技智能烹饪机</p>
            <p className="text-white/80 text-lg">了解产品的强大功能和智能特性</p>
          </div>

          <img 
            src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/33bfb059-ebff-4ecd-b53d-a26300e120f2.jpg"
            alt="产品背景"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-xl font-bold text-white mb-4">产品特性</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>智能温控技术</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>多种烹饪模式</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span>安全防护系统</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30">
            <h4 className="text-xl font-bold text-white mb-4">核心优势</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>精准控制火候</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>节能环保设计</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>易于清洁维护</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
            <h4 className="text-xl font-bold text-white mb-4">适用场景</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5 text-green-400" />
                <span>家庭日常烹饪</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5 text-green-400" />
                <span>专业厨房应用</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5 text-green-400" />
                <span>商用餐饮服务</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  // 设备安装教程页面
  const renderInstallationPage = () => (
    <>
      <div className="bg-gradient-to-r from-green-600/90 to-teal-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-green-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">设备使用安装</h2>
            <p className="text-white text-xl">Equipment Installation Tutorial</p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">安装教程视频</h3>
        
        {/* B站安装教程视频播放器 - 使用新的BVID */}
        <div className="mb-6">
          <div className="bg-black/20 rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV1RV8Mz6EGt&page=1&high_quality=1&danmaku=0"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full"
              title="拾光科技设备安装教程"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/80 text-lg">
              《拾光科技智能烹饪机 - 设备安装完整教程》
            </p>
            <a 
              href="https://www.bilibili.com/video/BV1RV8Mz6EGt?t=559.8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors duration-300 mt-2"
            >
              <span>在B站观看完整版</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30">
            <h4 className="text-xl font-bold text-white mb-4">视频内容包含</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>设备拆箱和部件检查</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>安装位置选择和准备</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>电源连接和安全检查</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>初次开机和功能测试</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-xl font-bold text-white mb-4">注意事项</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>确保工作台面平稳牢固</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>保持设备周围通风良好</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>使用专用电源插座</span>
              </li>
              <li className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>安装完成后进行功能检测</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">快速安装步骤</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 text-center border border-green-400/30">
            <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-green-300 text-xl font-bold">1</span>
            </div>
            <h5 className="font-bold text-white mb-2">拆箱检查</h5>
            <p className="text-white text-sm">检查设备和配件完整性</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 text-center border border-blue-400/30">
            <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-300 text-xl font-bold">2</span>
            </div>
            <h5 className="font-bold text-white mb-2">位置安装</h5>
            <p className="text-white text-sm">选择合适位置并固定设备</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 text-center border border-orange-400/30">
            <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-300 text-xl font-bold">3</span>
            </div>
            <h5 className="font-bold text-white mb-2">电源连接</h5>
            <p className="text-white text-sm">连接电源并检查安全</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 text-center border border-purple-400/30">
            <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-300 text-xl font-bold">4</span>
            </div>
            <h5 className="font-bold text-white mb-2">功能测试</h5>
            <p className="text-white text-sm">开机测试各项功能</p>
          </div>
        </div>
      </div>
    </>
  );

  // 锅体选配指南页面（包含选择功能）
  const renderPotGuidePage = () => (
    <>
      <div className="bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-orange-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">锅体选配指南</h2>
            <p className="text-white text-xl">Pot Selection Guide</p>
          </div>
        </div>
        <div className="mt-6 p-6 bg-white/10 rounded-2xl backdrop-blur-xl">
          <p className="text-xl text-white">
            专业的选择，成就极致的烹饪体验
          </p>
        </div>
      </div>

      {!selectedPot ? (
        // 锅体选择页面
        <>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">选择您需要的锅体</h3>
            <p className="text-white/80 text-lg">点击下方卡片查看详细使用指南</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* 氮化铁锅卡片 */}
            <div 
              onClick={() => setSelectedPot('iron')}
              className="group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-4"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-4xl p-10 h-full border border-white/20 shadow-2xl hover:shadow-orange-500/25 hover:border-orange-400/50 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Flame className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-4xl font-black bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-2 tracking-tight">
                        氮化铁锅
                      </h4>
                      <p className="text-orange-300/80 text-lg font-light tracking-wider uppercase">Nitrided Iron Wok</p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-10 h-56 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl overflow-hidden">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/6c8bd4a4-90d1-4203-b9a2-52cdef3a6734.jpg"
                    alt="氮化铁锅"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold tracking-wide shadow-lg">
                      极致锅气
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-white/95 text-2xl font-medium leading-relaxed tracking-wide">
                    为追求极致<span className="text-orange-300 font-bold">"锅气"</span>而生，是中式爆炒、烧焖的灵魂之选
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <ChefHat className="w-6 h-6 text-orange-400" />
                      <span className="text-orange-200/90 text-lg font-light">适合爆炒、烧焖、干煸等中式烹饪</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Sparkles className="w-6 h-6 text-yellow-400" />
                      <span className="text-orange-200/90 text-lg font-light">需要专业的开锅和养锅技巧</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-orange-300/80 text-lg font-light group-hover:text-white transition-colors duration-500 tracking-wide">
                      点击查看完整使用指南 →
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 特氟龙不粘锅卡片 */}
            <div 
              onClick={() => setSelectedPot('teflon')}
              className="group cursor-pointer transform transition-all duration-700 hover:scale-105 hover:-translate-y-4"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-4xl p-10 h-full border border-white/20 shadow-2xl hover:shadow-blue-500/25 hover:border-blue-400/50 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 tracking-tight">
                        特氟龙不粘锅
                      </h4>
                      <p className="text-blue-300/80 text-lg font-light tracking-wider uppercase">Teflon Non-stick Pot</p>
                    </div>
                  </div>
                </div>

                <div className="relative mb-10 h-56 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl overflow-hidden">
                  <img 
                    src="https://pub-cdn.sider.ai/u/U05XHAWRAKE/web-coder/687eeec9a51c7347d080b007/resource/f0c23e64-4796-4c0e-a3a7-9c03e1385b85.jpg"
                    alt="特氟龙不粘锅"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold tracking-wide shadow-lg">
                      轻松不粘
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-white/95 text-2xl font-medium leading-relaxed tracking-wide">
                    专为处理<span className="text-blue-300 font-bold">"娇嫩"</span>食材设计，让不粘锅、保品相变得无比轻松
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <ChefHat className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-200/90 text-lg font-light">适合煎烙、滑炒、酱汁类烹饪</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Shield className="w-6 h-6 text-cyan-400" />
                      <span className="text-blue-200/90 text-lg font-light">涂层保护是使用的核心要点</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-blue-300/80 text-lg font-light group-hover:text-white transition-colors duration-500 tracking-wide">
                      点击查看完整使用指南 →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : selectedPot === 'iron' ? (
        // 氮化铁锅详细内容
        <>
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setSelectedPot('')}
              className="flex items-center space-x-2 text-orange-300 hover:text-white transition-colors duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>返回锅体选择</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-orange-400/30">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">氮化铁锅使用指南</h3>
                <p className="text-white text-xl">Nitrided Iron Wok Guide</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 推荐菜谱 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <ChefHat className="w-8 h-8 text-orange-400" />
                <h4 className="text-2xl font-bold text-white">推荐菜谱</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Flame className="w-6 h-6 text-red-400" />
                    <h5 className="text-xl font-bold text-white">爆炒类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 葱爆羊肉</p>
                    <p>• 辣子鸡丁</p>
                    <p>• 爆炒时蔬</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-6 border border-orange-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-6 h-6 text-orange-400" />
                    <h5 className="text-xl font-bold text-white">烧焖类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 红烧肉</p>
                    <p>• 黄焖鸡</p>
                    <p>• 土豆烧牛腩</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl p-6 border border-green-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-6 h-6 text-green-400" />
                    <h5 className="text-xl font-bold text-white">干煸类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 干煸豆角</p>
                    <p>• 干烧鱼</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 使用须知 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h4 className="text-2xl font-bold text-white">使用须知</h4>
              </div>

              <div className="space-y-8">
                {/* 控制火候与空烧 */}
                <div className="border-l-4 border-blue-400 pl-6">
                  <h5 className="text-xl font-bold text-white mb-4">控制火候与空烧</h5>
                  <div className="space-y-4 text-white/90">
                    <p>铁锅导热快，建议用中小火预热，避免长时间空烧损伤锅体。炒菜前先将锅烧热再倒油，能有效增强物理不粘效果。</p>
                    <p>先用中小火烹饪（3到4档）再转至大火（5档或以上），直接大火容易让食物焦糊，且会损伤锅面。</p>
                  </div>
                </div>

                {/* 粘锅应对技巧 */}
                <div className="border-l-4 border-orange-400 pl-6">
                  <h5 className="text-xl font-bold text-white mb-4">粘锅应对技巧</h5>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="bg-blue-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-blue-300 mb-2">高蛋白食材</h6>
                        <p className="text-white/80 text-sm">鸡蛋、嫩豆腐、鱼皮：掌握"热锅冷油"技巧，或对食材进行拍粉等预处理。</p>
                      </div>
                      <div className="bg-green-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-green-300 mb-2">姜片防粘</h6>
                        <p className="text-white/80 text-sm">若菜系涉及姜片，炒或炸前，用姜片擦拭热锅锅底。</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-yellow-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-yellow-300 mb-2">高淀粉食材</h6>
                        <p className="text-white/80 text-sm">土豆、山药：切好后用清水冲洗掉表面淀粉，并尽量沥干水分。</p>
                      </div>
                      <div className="bg-red-500/20 rounded-lg p-4">
                        <h6 className="font-medium text-red-300 mb-2">高糖类菜系</h6>
                        <p className="text-white/80 text-sm">适当增加用油量，并快速翻炒。年糕、粉条类：炒前先过水使其表面湿润，并多放油快炒。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 生锈风险 */}
                <div className="border-l-4 border-red-400 pl-6">
                  <h5 className="text-xl font-bold text-white mb-4">生锈风险</h5>
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <p className="text-white/90">请勿长时间浸泡锅体或用其存放食物过夜。避免烹煮番茄、醋等强酸性菜肴，以保护锅体表面的油膜。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 养锅教程 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-green-400" />
                <h4 className="text-2xl font-bold text-white">养锅教程：让它成为您的"传家宝"</h4>
              </div>

              <div className="space-y-8">
                {/* 首次开锅 */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-6">
                  <h5 className="text-2xl font-bold text-white mb-4">第一步：首次开锅（至关重要）</h5>
                  <p className="text-green-300 mb-6 font-medium">目的：去除工业防锈层，建立初始油膜，为日后的"物理不粘"打下坚实基础。</p>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">1. 洁锅</h6>
                      <p className="text-white/80 text-sm">流动温水下，用洗洁精和百洁布彻底洗净锅内外，擦干。</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Flame className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">2. 烘干</h6>
                      <p className="text-white/80 text-sm">将锅体安放回烹饪机内，选择"手动模式"，调至【3档】运行约1分钟。</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">3. 润锅</h6>
                      <p className="text-white/80 text-sm">倒入适量食用油，启动预设的开锅菜谱，低速运转约2分钟。</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h6 className="font-bold text-white mb-2">4. 静置</h6>
                      <p className="text-white/80 text-sm">待锅冷却后，用厨房纸巾擦净多余油分即可。</p>
                    </div>
                  </div>
                </div>

                {/* 日常养锅 */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6">
                  <h5 className="text-2xl font-bold text-white mb-4">第二步：日常养锅（简单，但需坚持）</h5>
                  <p className="text-blue-300 mb-6 font-medium">目的：巩固并加厚油膜，让铁锅越用越黑亮、越用越不粘。</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Droplets className="w-6 h-6 text-blue-400" />
                        <h6 className="text-xl font-bold text-white">清洗</h6>
                      </div>
                      <div className="space-y-3 text-white/90">
                        <p>• 烹饪后，趁锅有余温时用温水和软质工具（如竹刷、海绵、软布）清洗</p>
                        <p>• 尽量少用或不用洗洁精，以保护油膜</p>
                        <p>• 若不慎粘锅，可用温水泡软后再清洗</p>
                        <p>• 切忌使用钢丝球等硬物刮擦</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Shield className="w-6 h-6 text-green-400" />
                        <h6 className="text-xl font-bold text-white">养护</h6>
                      </div>
                      <div className="space-y-3 text-white/90">
                        <p><strong className="text-green-300">烘干是关键：</strong>清洗后，务必将锅体放回烹饪机内运行1-2分钟，或用干布彻底擦干</p>
                        <p><strong className="text-yellow-300">涂油是升华：</strong>烘干后趁有余温，在锅内壁涂抹一层薄薄的食用油</p>
                        <p><strong className="text-blue-300">长期存放：</strong>若长期不用，涂抹一层食用油后存放于干燥处</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 关于生锈 */}
                <div className="bg-orange-500/10 rounded-2xl p-6 border border-orange-400/30">
                  <h6 className="text-xl font-bold text-white mb-4">关于生锈</h6>
                  <p className="text-white/90">万一出现锈迹，可用白醋或百洁布擦除，再完整执行一遍"首次开锅"流程，即可焕然一新。</p>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        // 特氟龙不粘锅详细内容
        <>
          <div className="flex items-center justify-between mb-8">
            <button 
              onClick={() => setSelectedPot('')}
              className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>返回锅体选择</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-blue-600/90 to-blue-800/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-blue-400/30">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">特氟龙不粘锅使用指南</h3>
                <p className="text-white text-xl">Teflon Non-stick Pot Guide</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 推荐菜谱 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <ChefHat className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">推荐菜谱</h4>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Utensils className="w-6 h-6 text-blue-400" />
                    <h5 className="text-xl font-bold text-white">煎烙类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 鱼</p>
                    <p>• 豆腐</p>
                    <p>• 鸡蛋</p>
                    <p>• 猪肝</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                    <h5 className="text-xl font-bold text-white">滑炒类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 滑蛋虾仁</p>
                    <p>• 清炒鱼片</p>
                    <p>• 炒河粉</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl p-6 border border-indigo-400/30">
                  <div className="flex items-center space-x-2 mb-4">
                    <Eye className="w-6 h-6 text-indigo-400" />
                    <h5 className="text-xl font-bold text-white">酱汁类</h5>
                  </div>
                  <div className="space-y-2 text-white/90">
                    <p>• 糖醋里脊</p>
                    <p>• 鱼香肉丝</p>
                    <p>• 麻婆豆腐</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 使用须知 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">使用须知</h4>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-400/30">
                <h5 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-7 h-7 text-red-400 mr-3" />
                  涂层保护是核心
                </h5>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-red-500/30 rounded-lg flex items-center justify-center mb-4">
                      <XCircle className="w-6 h-6 text-red-300" />
                    </div>
                    <h6 className="text-lg font-bold text-white mb-3">严禁金属厨具</h6>
                    <p className="text-white/90">严禁使用任何金属或硬质厨具（如钢铲、钢丝球），请务必选用硅胶或木质厨具。</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center mb-4">
                      <AlertTriangle className="w-6 h-6 text-orange-300" />
                    </div>
                    <h6 className="text-lg font-bold text-white mb-3">避免尖锐食材</h6>
                    <p className="text-white/90">请勿烹饪带尖锐硬壳的食材（如螃蟹、花甲），避免翻炒过程中的碰撞造成涂层划伤。</p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-lg flex items-center justify-center mb-4">
                      <Flame className="w-6 h-6 text-yellow-300" />
                    </div>
                    <h6 className="text-lg font-bold text-white mb-3">避免空烧</h6>
                    <p className="text-white/90">长时间干烧会永久性损伤不粘涂层。</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 清洁与保养 */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">清洁与保养 — 延长涂层寿命</h4>
              </div>

              <div className="space-y-8">
                {/* 日常清洁 */}
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6">
                  <h5 className="text-2xl font-bold text-white mb-6">日常清洁</h5>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <h6 className="font-bold text-white">温和清洗</h6>
                        </div>
                        <p className="text-white text-sm">待锅体自然冷却后，可选用普通洗洁精；亦或用海绵或软布配合温水清洗。</p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <h6 className="font-bold text-white">严防温差冲击</h6>
                        </div>
                        <p className="text-white text-sm">严禁在锅体高温状态下用冷水直接冲洗，巨大的温差是涂层的"隐形杀手"。若需在热锅状态下清洗，请务必使用热水。</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <h6 className="font-bold text-white">污渍处理</h6>
                        </div>
                        <p className="text-white text-sm">若有顽固污渍，用温水浸泡，切勿强行刮擦。</p>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                          <h6 className="font-bold text-white">避免强力水冲</h6>
                        </div>
                        <p className="text-white text-sm">禁止使用设备自带的水枪式喷头直接对锅内进行冲洗，这会加速涂层的老化。</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 定期检查 */}
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl p-6 border border-blue-400/30">
                  <h5 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-7 h-7 text-blue-400 mr-3" />
                    定期检查
                  </h5>
                  <div className="bg-white/10 rounded-lg p-6">
                    <p className="text-white text-lg">
                      当涂层出现明显划痕或不粘性能显著下降时，为了最佳的烹饪效果和食品安全，
                      我们建议您<span className="text-orange-300 font-bold">联系返修或更换锅体</span>。
                    </p>
                  </div>
                </div>

                {/* 重要提示 */}
                <div className="bg-gradient-to-r from-red-600/40 to-pink-600/40 rounded-2xl p-6 border border-red-500/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <h6 className="text-xl font-bold text-white">重要提示</h6>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-red-300 text-2xl">❌</span>
                      </div>
                      <p className="text-white text-sm">禁用金属厨具</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-300 text-2xl">🌡️</span>
                      </div>
                      <p className="text-white text-sm">避免温差冲击</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-yellow-300 text-2xl">⚡</span>
                      </div>
                      <p className="text-white text-sm">禁止长时间空烧</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );

  // 耗材选购指南页面
  const renderSuppliesPage = () => (
    <>
      <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-xl text-white rounded-3xl p-8 mb-12 border border-purple-400/30">
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl">
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">耗材选购指南</h2>
            <p className="text-white text-xl">Supplies Purchase Guide</p>
          </div>
        </div>
        <div className="mt-6 p-6 bg-white/10 rounded-2xl backdrop-blur-xl">
          <p className="text-xl text-white">
            配件耗材的选购和更换指南，确保设备持续高效运行
          </p>
        </div>
      </div>

      {/* 耗材分类 */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Settings className="w-7 h-7 text-purple-400 mr-3" />
            设备配件
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-bold text-white mb-3">密封圈组件</h4>
              <p className="text-white/90 mb-3">• 建议每6个月检查一次密封性能</p>
              <p className="text-white/90 mb-3">• 发现老化或破损应及时更换</p>
              <p className="text-purple-300">更换周期：12-18个月</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-white mb-3">过滤网组件</h4>
              <p className="text-white/90 mb-3">• 每月清洗一次，保持通风效果</p>
              <p className="text-white/90 mb-3">• 严重堵塞时需要更换新的过滤网</p>
              <p className="text-blue-300">更换周期：6-12个月</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ChefHat className="w-7 h-7 text-orange-400 mr-3" />
            烹饪用具
          </h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <h4 className="text-xl font-bold text-white mb-3">硅胶厨具套装</h4>
              <p className="text-white/90 mb-3">• 专用于特氟龙不粘锅的安全厨具</p>
              <p className="text-white/90 mb-3">• 包含铲子、汤勺、夹子等工具</p>
              <p className="text-orange-300">建议备用：1-2套</p>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
              <h4 className="text-xl font-bold text-white mb-3">木质厨具套装</h4>
              <p className="text-white/90 mb-3">• 适用于氮化铁锅的传统厨具</p>
              <p className="text-white/90 mb-3">• 天然材质，不损伤锅体表面</p>
              <p className="text-green-300">建议备用：1套</p>
            </div>
          </div>
        </div>
      </div>

      {/* 购买建议 */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
          <CheckCircle className="w-7 h-7 text-green-400 mr-3" />
          购买建议
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-6 border border-green-400/30">
            <h4 className="text-xl font-bold text-white mb-4">正品渠道</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 拾光科技官方商城</li>
              <li>• 授权经销商门店</li>
              <li>• 官方客服推荐渠道</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-xl font-bold text-white mb-4">质量保证</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 原厂配件保证兼容性</li>
              <li>• 严格质检标准</li>
              <li>• 质量问题包换服务</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-400/30">
            <h4 className="text-xl font-bold text-white mb-4">售后服务</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 专业安装指导</li>
              <li>• 使用培训服务</li>
              <li>• 定期保养提醒</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 更换提醒 */}
      <div className="bg-gradient-to-r from-yellow-600/40 to-orange-600/40 rounded-3xl p-8 border border-yellow-500/50">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400" />
          <h3 className="text-2xl font-bold text-white">更换提醒</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">何时更换</h4>
            <ul className="space-y-2 text-white/90">
              <li>• 密封圈出现老化、变硬或开裂</li>
              <li>• 过滤网严重堵塞，清洗后效果不佳</li>
              <li>• 厨具出现磨损或损坏</li>
              <li>• 设备性能明显下降</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">联系方式</h4>
            <div className="space-y-3 text-white/90">
              <p><span className="text-yellow-300 font-bold">客服热线：</span>400-XXX-XXXX</p>
              <p><span className="text-yellow-300 font-bold">在线客服：</span>官网在线咨询</p>
              <p><span className="text-yellow-300 font-bold">服务时间：</span>周一至周日 9:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>

        {/* 顶部导航 */}
        <header className="relative z-10 p-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>返回首页</span>
            </button>

            {/* 面包屑导航 */}
            {currentPage !== 'home' && (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-300 group"
                >
                  <span>产品手册首页</span>
                </button>
                <span className="text-white/50">/</span>
                <span className="text-white">
                  {currentPage === 'video' ? '智能烹饪机宣传片' : 
                   currentPage === 'installation' ? '设备使用安装' : 
                   currentPage === 'potGuide' ? '锅体选配指南' : '耗材选购指南'}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* 主要内容区域 */}
        <main className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
          {currentPage === 'home' && renderHomePage()}
          {currentPage === 'video' && renderVideoPage()}
          {currentPage === 'installation' && renderInstallationPage()}
          {currentPage === 'potGuide' && renderPotGuidePage()}
          {currentPage === 'supplies' && renderSuppliesPage()}

          {/* 底部信息 */}
          {currentPage !== 'home' && (
            <footer className="text-center pt-10 mt-12 border-t border-white/20">
              <div className="text-white space-y-4">
                <p className="text-2xl font-bold text-white">
                  © 2024 拾光科技 | 专注厨房科技，成就美好生活
                </p>
                <p className="text-white">产品咨询与售后服务请联系客服</p>
                
                {/* 返回按钮 */}
                <div className="flex justify-center space-x-4 pt-6">
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    返回首页
                  </button>
                  <button 
                    onClick={() => navigate('/')}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    返回主站
                  </button>
                </div>
              </div>
            </footer>
          )}
        </main>
      </div>
    </>
  );
}
